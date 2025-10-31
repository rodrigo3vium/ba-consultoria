import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface AddLeadKanbanModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLeadAdded: () => void;
  funnelId: string;
  stageId: string;
  stageName: string;
}

export default function AddLeadKanbanModal({
  open,
  onOpenChange,
  onLeadAdded,
  funnelId,
  stageId,
  stageName,
}: AddLeadKanbanModalProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    produto: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.whatsapp || !formData.produto) {
      toast.error("Preencha todos os campos obrigatórios");
      return;
    }

    setLoading(true);

    try {
      // Create lead
      const { data: lead, error: leadError } = await supabase
        .from("leads")
        .insert({
          nome: formData.nome,
          email: formData.email || '',
          whatsapp: formData.whatsapp,
          produto: formData.produto,
          origem: "kanban",
          status: "novo",
        })
        .select()
        .single();

      if (leadError) throw leadError;

      // Add lead to funnel position
      const { error: positionError } = await supabase
        .from("lead_funnel_positions")
        .insert({
          lead_id: lead.id,
          funnel_id: funnelId,
          stage_id: stageId,
        });

      if (positionError) throw positionError;

      // Log in history
      const { error: historyError } = await supabase
        .from("funnel_history")
        .insert({
          lead_id: lead.id,
          funnel_id: funnelId,
          stage_from_id: null,
          stage_to_id: stageId,
        });

      if (historyError) throw historyError;

      toast.success("Lead adicionado com sucesso");
      
      setFormData({
        nome: "",
        email: "",
        whatsapp: "",
        produto: "",
      });
      
      onOpenChange(false);
      onLeadAdded();
    } catch (error: any) {
      toast.error("Erro ao adicionar lead", {
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Adicionar Lead - {stageName}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome *</Label>
              <Input
                id="nome"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                placeholder="Nome completo"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="email@exemplo.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsapp">WhatsApp *</Label>
              <Input
                id="whatsapp"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                placeholder="(00) 00000-0000"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="produto">Produto *</Label>
              <Select
                value={formData.produto}
                onValueChange={(value) => setFormData({ ...formData, produto: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o produto" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ia-do-zero">IA do Zero</SelectItem>
                  <SelectItem value="ia-para-negocios">IA para Negócios</SelectItem>
                  <SelectItem value="consultoria">Consultoria</SelectItem>
                  <SelectItem value="newsletter">Newsletter</SelectItem>
                  <SelectItem value="super-agentes">Super Agentes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Adicionando..." : "Adicionar Lead"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
