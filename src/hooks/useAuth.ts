import { useState, useEffect } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const ADMIN_EMAILS = ['rodrigo@benitesalbuquerque.com.br'];

const authSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres')
});

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        // Check admin role when user changes
        if (session?.user) {
          checkAdminRole(session.user.email);
        } else {
          setIsAdmin(false);
          setLoading(false);
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);

      if (session?.user) {
        checkAdminRole(session.user.email);
      } else {
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkAdminRole = (email: string | null | undefined) => {
    setIsAdmin(!!email && ADMIN_EMAILS.includes(email));
    setLoading(false);
  };

  const signUp = async (email: string, password: string) => {
    try {
      const validation = authSchema.parse({ email, password });
      const redirectUrl = `${window.location.origin}/`;
      
      const { error } = await supabase.auth.signUp({
        email: validation.email,
        password: validation.password,
        options: {
          emailRedirectTo: redirectUrl
        }
      });

      if (error) throw error;

      toast({
        title: "Conta criada com sucesso!",
        description: "Você já está logado e pode começar a usar o sistema."
      });

      return { error: null };
    } catch (error) {
      if (error instanceof z.ZodError) {
        const message = error.errors[0]?.message || 'Dados inválidos';
        toast({
          title: "Erro de validação",
          description: message,
          variant: "destructive"
        });
        return { error: { message } };
      }

      const message = (error as any)?.message || 'Erro ao criar conta';
      toast({
        title: "Erro ao criar conta",
        description: message,
        variant: "destructive"
      });
      return { error };
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const validation = authSchema.parse({ email, password });
      
      const { error } = await supabase.auth.signInWithPassword({
        email: validation.email,
        password: validation.password
      });

      if (error) throw error;

      toast({
        title: "Login realizado com sucesso!",
        description: "Bem-vindo de volta."
      });

      return { error: null };
    } catch (error) {
      if (error instanceof z.ZodError) {
        const message = error.errors[0]?.message || 'Dados inválidos';
        toast({
          title: "Erro de validação",
          description: message,
          variant: "destructive"
        });
        return { error: { message } };
      }

      const message = (error as any)?.message || 'Email ou senha incorretos';
      toast({
        title: "Erro ao fazer login",
        description: message,
        variant: "destructive"
      });
      return { error };
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      toast({
        title: "Logout realizado",
        description: "Até logo!"
      });

      return { error: null };
    } catch (error) {
      const message = (error as any)?.message || 'Erro ao fazer logout';
      toast({
        title: "Erro",
        description: message,
        variant: "destructive"
      });
      return { error };
    }
  };

  return {
    user,
    session,
    loading,
    isAdmin,
    signUp,
    signIn,
    signOut
  };
};
