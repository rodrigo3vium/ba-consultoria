import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Loader2 } from 'lucide-react';
import { z } from 'zod';
import { tracker } from '@/lib/tracking';

const leadSchema = z.object({
  nome: z.string().trim().min(1, { message: "Nome é obrigatório" }).max(100),
  email: z.string().trim().email({ message: "Email inválido" }).max(255),
  whatsapp: z.string().trim().min(10, { message: "WhatsApp é obrigatório" }).max(20),
  situacao_profissional: z.string().min(1, { message: "Selecione sua situação profissional" })
});

interface LeadFormIADoZeroProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LeadFormIADoZero = ({ open, onOpenChange }: LeadFormIADoZeroProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    situacao_profissional: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = leadSchema.parse(formData);
      setLoading(true);

      const { error } = await supabase.from('leads').insert({
        nome: validatedData.nome,
        email: validatedData.email,
        whatsapp: validatedData.whatsapp,
        situacao_profissional: validatedData.situacao_profissional,
        produto: 'ia-do-zero',
        origem: 'Página IA do Zero'
      });

      if (error) throw error;

      // Identificar o lead no sistema de tracking
      await tracker.identify(
        validatedData.email,
        validatedData.whatsapp,
        validatedData.nome
      );

      // Trackear conversão
      await tracker.track('form_submitted', {
        form_type: 'ia-do-zero',
        product: 'ia-do-zero'
      });

      toast({
        title: "Sucesso!",
        description: "Seus dados foram registrados. Redirecionando para pagamento...",
      });

      onOpenChange(false);
      
      // Redirecionar para página de pagamento
      window.open('https://pay.hotmart.com/L94763179U', '_blank');
      
      // Limpar formulário
      setFormData({ nome: '', email: '', whatsapp: '', situacao_profissional: '' });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erro de validação",
          description: error.errors[0].message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Erro",
          description: "Não foi possível enviar seus dados. Tente novamente.",
          variant: "destructive"
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-slate-800 border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-white">Comece sua jornada com IA</DialogTitle>
          <DialogDescription className="text-gray-300">
            Preencha seus dados para continuar para o pagamento
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nome" className="text-white">Nome completo</Label>
            <Input
              id="nome"
              value={formData.nome}
              onChange={(e) => setFormData(prev => ({ ...prev, nome: e.target.value }))}
              className="bg-slate-900 border-slate-600 text-white"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="bg-slate-900 border-slate-600 text-white"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="whatsapp" className="text-white">WhatsApp</Label>
            <Input
              id="whatsapp"
              value={formData.whatsapp}
              onChange={(e) => setFormData(prev => ({ ...prev, whatsapp: e.target.value }))}
              placeholder="(11) 99999-9999"
              className="bg-slate-900 border-slate-600 text-white"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="situacao" className="text-white">Situação profissional</Label>
            <Select 
              value={formData.situacao_profissional}
              onValueChange={(value) => setFormData(prev => ({ ...prev, situacao_profissional: value }))}
            >
              <SelectTrigger className="bg-slate-900 border-slate-600 text-white">
                <SelectValue placeholder="Selecione sua situação" />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-slate-600">
                <SelectItem value="Desempregado">Desempregado</SelectItem>
                <SelectItem value="Servidor público">Servidor público</SelectItem>
                <SelectItem value="Estudante">Estudante</SelectItem>
                <SelectItem value="Autônomo">Autônomo</SelectItem>
                <SelectItem value="CLT">CLT</SelectItem>
                <SelectItem value="Empresário">Empresário</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              'Enviar e ir para pagamento'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
