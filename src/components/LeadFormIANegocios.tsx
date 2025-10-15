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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { tracker } from '@/lib/tracking';

const formSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter no mínimo 2 caracteres').max(100),
  email: z.string().email('Email inválido').max(255),
  whatsapp: z.string().min(10, 'WhatsApp inválido').max(20),
  faturamento: z.string().min(1, 'Selecione uma opção'),
});

type FormData = z.infer<typeof formSchema>;

interface LeadFormIANegociosProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

export default function LeadFormIANegocios({ open, onOpenChange, onSuccess }: LeadFormIANegociosProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: '',
      email: '',
      whatsapp: '',
      faturamento: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('leads').insert({
        nome: data.nome.trim(),
        email: data.email.trim(),
        whatsapp: data.whatsapp.trim(),
        faturamento: data.faturamento,
        produto: 'ia-para-negocios',
        origem: 'Página IA para Negócios',
      });

      if (error) throw error;

      // Identificar o lead no sistema de tracking
      await tracker.identify(
        data.email.trim(),
        data.whatsapp.trim(),
        data.nome.trim()
      );

      // Trackear conversão
      await tracker.track('form_submitted', {
        form_type: 'ia-para-negocios',
        product: 'ia-para-negocios',
        faturamento: data.faturamento
      });

      toast({
        title: 'Cadastro realizado!',
        description: 'Obrigado pelo seu interesse. Em breve entraremos em contato.',
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
              name="faturamento"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Faturamento mensal da empresa</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} value={field.value}>
                      <div className="space-y-2">
                        {[
                          { value: 'ate-10k', label: 'Até R$ 10 mil/mês' },
                          { value: '10k-20k', label: 'Entre R$ 10 e 20 mil' },
                          { value: '20k-50k', label: 'Entre R$ 20 e R$ 50 mil' },
                          { value: '50k-100k', label: 'Entre R$ 50 - 100 mil' },
                          { value: 'acima-100k', label: 'Mais de R$ 100 mil' },
                        ].map((option) => (
                          <div key={option.value} className="flex items-center space-x-2">
                            <RadioGroupItem value={option.value} id={option.value} />
                            <Label htmlFor={option.value} className="text-gray-300 cursor-pointer">
                              {option.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold"
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
