import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Funnel {
  id: string;
  nome: string;
  cor: string;
}

interface FunnelStage {
  id: string;
  nome: string;
  cor: string;
}

interface MoveFunnelModalProps {
  leadId: string | null;
  leadName: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

const MoveFunnelModal = ({ leadId, leadName, open, onOpenChange, onSuccess }: MoveFunnelModalProps) => {
  const [funnels, setFunnels] = useState<Funnel[]>([]);
  const [stages, setStages] = useState<FunnelStage[]>([]);
  const [selectedFunnelId, setSelectedFunnelId] = useState<string>("");
  const [selectedStageId, setSelectedStageId] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (open) {
      loadFunnels();
    }
  }, [open]);

  useEffect(() => {
    if (selectedFunnelId) {
      loadStages(selectedFunnelId);
    } else {
      setStages([]);
      setSelectedStageId("");
    }
  }, [selectedFunnelId]);

  const loadFunnels = async () => {
    const { data, error } = await supabase
      .from("funnels")
      .select("id, nome, cor")
      .eq("ativo", true)
      .order("ordem", { ascending: true });

    if (!error && data) {
      setFunnels(data);
    }
  };

  const loadStages = async (funnelId: string) => {
    const { data, error } = await supabase
      .from("funnel_stages")
      .select("id, nome, cor")
      .eq("funnel_id", funnelId)
      .eq("ativo", true)
      .order("ordem", { ascending: true });

    if (!error && data) {
      setStages(data);
      if (data.length > 0) {
        setSelectedStageId(data[0].id);
      }
    }
  };

  const handleSubmit = async () => {
    if (!leadId || !selectedFunnelId || !selectedStageId) {
      toast({
        title: "Erro",
        description: "Selecione um funil e uma etapa.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();

      // Verificar se já existe uma posição para este lead neste funil
      const { data: existingPosition } = await supabase
        .from("lead_funnel_positions")
        .select("*")
        .eq("lead_id", leadId)
        .eq("funnel_id", selectedFunnelId)
        .maybeSingle();

      if (existingPosition) {
        // Atualizar posição existente
        const { error: updateError } = await supabase
          .from("lead_funnel_positions")
          .update({
            stage_id: selectedStageId,
            entrada_etapa_at: new Date().toISOString(),
          })
          .eq("lead_id", leadId)
          .eq("funnel_id", selectedFunnelId);

        if (updateError) throw updateError;

        // Registrar no histórico
        const { error: historyError } = await supabase
          .from("funnel_history")
          .insert({
            lead_id: leadId,
            funnel_id: selectedFunnelId,
            stage_from_id: existingPosition.stage_id,
            stage_to_id: selectedStageId,
            user_id: user?.id,
            observacao: "Movido via CRM",
          });

        if (historyError) throw historyError;
      } else {
        // Criar nova posição
        const { error: insertError } = await supabase
          .from("lead_funnel_positions")
          .insert({
            lead_id: leadId,
            funnel_id: selectedFunnelId,
            stage_id: selectedStageId,
            entrada_etapa_at: new Date().toISOString(),
          });

        if (insertError) throw insertError;

        // Registrar no histórico
        const { error: historyError } = await supabase
          .from("funnel_history")
          .insert({
            lead_id: leadId,
            funnel_id: selectedFunnelId,
            stage_from_id: null,
            stage_to_id: selectedStageId,
            user_id: user?.id,
            observacao: "Adicionado ao funil via CRM",
          });

        if (historyError) throw historyError;
      }

      // Atualizar última interação do lead
      await supabase
        .from("leads")
        .update({ ultima_interacao: new Date().toISOString() })
        .eq("id", leadId);

      toast({
        title: "Sucesso",
        description: "Lead movido para o funil com sucesso!",
      });

      onSuccess();
      onOpenChange(false);
      setSelectedFunnelId("");
      setSelectedStageId("");
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message || "Não foi possível mover o lead.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Mover Lead para Funil</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <p className="text-sm text-muted-foreground">
            Movendo: <strong>{leadName}</strong>
          </p>

          <div className="space-y-2">
            <Label htmlFor="funnel">Funil</Label>
            <Select value={selectedFunnelId} onValueChange={setSelectedFunnelId}>
              <SelectTrigger id="funnel">
                <SelectValue placeholder="Selecione um funil" />
              </SelectTrigger>
              <SelectContent>
                {funnels.map((funnel) => (
                  <SelectItem key={funnel.id} value={funnel.id}>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: funnel.cor }}
                      />
                      {funnel.nome}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedFunnelId && (
            <div className="space-y-2">
              <Label htmlFor="stage">Etapa</Label>
              <Select value={selectedStageId} onValueChange={setSelectedStageId}>
                <SelectTrigger id="stage">
                  <SelectValue placeholder="Selecione uma etapa" />
                </SelectTrigger>
                <SelectContent>
                  {stages.map((stage) => (
                    <SelectItem key={stage.id} value={stage.id}>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: stage.cor }}
                        />
                        {stage.nome}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </div>

        <div className="flex justify-end gap-2">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={loading}
          >
            Cancelar
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={loading || !selectedFunnelId || !selectedStageId}
          >
            {loading ? "Movendo..." : "Mover Lead"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MoveFunnelModal;
