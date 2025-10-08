import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter no mínimo 2 caracteres').max(100),
  email: z.string().email('Email inválido').max(255),
  whatsapp: z.string().min(10, 'WhatsApp inválido').max(20),
  situacao_profissional: z.string().min(1, 'Selecione uma opção'),
});

type FormData = z.infer<typeof formSchema>;

interface LeadFormIADoZeroProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

export default function LeadFormIADoZero({ open, onOpenChange, onSuccess }: LeadFormIADoZeroProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: '',
      email: '',
      whatsapp: '',
      situacao_profissional: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('leads').insert({
        nome: data.nome.trim(),
        email: data.email.trim(),
        whatsapp: data.whatsapp.trim(),
        situacao_profissional: data.situacao_profissional,
        produto: 'ia-do-zero',
      });

      if (error) throw error;

      toast({
        title: 'Cadastro realizado!',
        description: 'Obrigado pelo seu interesse. Redirecionando para o pagamento...',
      });

      form.reset();
      onOpenChange(false);
      onSuccess();
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      toast({
        title: 'Erro ao enviar',
        description: 'Tente novamente mais tarde.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-slate-800 border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white">Estamos quase lá!</DialogTitle>
          <DialogDescription className="text-gray-300">
            Preencha os dados abaixo para continuar para o pagamento
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Nome completo</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu nome" {...field} className="bg-slate-900 border-slate-600 text-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="seu@email.com" {...field} className="bg-slate-900 border-slate-600 text-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="whatsapp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">WhatsApp</FormLabel>
                  <FormControl>
                    <Input placeholder="(11) 99999-9999" {...field} className="bg-slate-900 border-slate-600 text-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="situacao_profissional"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Situação profissional</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-slate-900 border-slate-600 text-white">
                        <SelectValue placeholder="Selecione uma opção" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-slate-900 border-slate-600">
                      <SelectItem value="desempregado" className="text-white">Desempregado</SelectItem>
                      <SelectItem value="servidor-publico" className="text-white">Servidor público</SelectItem>
                      <SelectItem value="estudante" className="text-white">Estudante</SelectItem>
                      <SelectItem value="autonomo" className="text-white">Autônomo</SelectItem>
                      <SelectItem value="clt" className="text-white">CLT</SelectItem>
                      <SelectItem value="empresario" className="text-white">Empresário</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                'Continuar para o pagamento'
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
