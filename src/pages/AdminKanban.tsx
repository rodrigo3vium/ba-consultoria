import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useRequireAuth } from "@/hooks/useRequireAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
import LeadDetailsModal from "@/components/crm/LeadDetailsModal";

interface Funnel {
  id: string;
  nome: string;
  cor: string;
}

interface FunnelStage {
  id: string;
  funnel_id: string;
  nome: string;
  cor: string;
  ordem: number;
  probabilidade: number;
}

interface Lead {
  id: string;
  nome: string;
  email: string;
  whatsapp: string;
  produto: string;
  status: string;
  score: number;
  created_at: string;
  ultima_interacao: string | null;
}

interface LeadPosition {
  lead_id: string;
  stage_id: string;
  entrada_etapa_at: string;
}

export default function AdminKanban() {
  const { user } = useRequireAuth(true);
  const navigate = useNavigate();
  
  const [funnels, setFunnels] = useState<Funnel[]>([]);
  const [selectedFunnelId, setSelectedFunnelId] = useState<string | null>(null);
  const [stages, setStages] = useState<FunnelStage[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [positions, setPositions] = useState<LeadPosition[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  
  const [draggedLead, setDraggedLead] = useState<string | null>(null);

  useEffect(() => {
    loadFunnels();
  }, []);

  useEffect(() => {
    if (selectedFunnelId) {
      loadStages(selectedFunnelId);
      loadLeadsInFunnel(selectedFunnelId);
    }
  }, [selectedFunnelId]);

  const loadFunnels = async () => {
    try {
      const { data, error } = await supabase
        .from("funnels")
        .select("id, nome, cor")
        .eq("ativo", true)
        .order("ordem", { ascending: true });

      if (error) throw error;
      
      setFunnels(data || []);
      
      if (data && data.length > 0) {
        setSelectedFunnelId(data[0].id);
      }
    } catch (error: any) {
      toast.error("Erro ao carregar funis", {
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const loadStages = async (funnelId: string) => {
    try {
      const { data, error } = await supabase
        .from("funnel_stages")
        .select("*")
        .eq("funnel_id", funnelId)
        .eq("ativo", true)
        .order("ordem", { ascending: true });

      if (error) throw error;
      setStages(data || []);
    } catch (error: any) {
      toast.error("Erro ao carregar etapas", {
        description: error.message,
      });
    }
  };

  const loadLeadsInFunnel = async (funnelId: string) => {
    try {
      const { data: positionsData, error: posError } = await supabase
        .from("lead_funnel_positions")
        .select("lead_id, stage_id, entrada_etapa_at")
        .eq("funnel_id", funnelId);

      if (posError) throw posError;
      
      setPositions(positionsData || []);
      
      if (positionsData && positionsData.length > 0) {
        const leadIds = positionsData.map(p => p.lead_id);
        
        const { data: leadsData, error: leadsError } = await supabase
          .from("leads")
          .select("*")
          .in("id", leadIds);

        if (leadsError) throw leadsError;
        setLeads(leadsData || []);
      } else {
        setLeads([]);
      }
    } catch (error: any) {
      toast.error("Erro ao carregar leads", {
        description: error.message,
      });
    }
  };

  const getLeadsInStage = (stageId: string) => {
    const leadIdsInStage = positions
      .filter(p => p.stage_id === stageId)
      .map(p => p.lead_id);
    
    return leads.filter(lead => leadIdsInStage.includes(lead.id));
  };

  const handleDragStart = (leadId: string) => {
    setDraggedLead(leadId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = async (targetStageId: string) => {
    if (!draggedLead || !selectedFunnelId || !user) return;

    try {
      const currentPosition = positions.find(p => p.lead_id === draggedLead);
      
      if (currentPosition?.stage_id === targetStageId) {
        setDraggedLead(null);
        return;
      }

      // Update position
      const { error: updateError } = await supabase
        .from("lead_funnel_positions")
        .update({
          stage_id: targetStageId,
          entrada_etapa_at: new Date().toISOString(),
        })
        .eq("lead_id", draggedLead)
        .eq("funnel_id", selectedFunnelId);

      if (updateError) throw updateError;

      // Log in history
      const { error: historyError } = await supabase
        .from("funnel_history")
        .insert({
          lead_id: draggedLead,
          funnel_id: selectedFunnelId,
          stage_from_id: currentPosition?.stage_id || null,
          stage_to_id: targetStageId,
          user_id: user.id,
        });

      if (historyError) throw historyError;

      // Update lead interaction
      const { error: leadError } = await supabase
        .from("leads")
        .update({
          ultima_interacao: new Date().toISOString(),
        })
        .eq("id", draggedLead);

      if (leadError) throw leadError;

      toast.success("Lead movido com sucesso");
      
      if (selectedFunnelId) {
        loadLeadsInFunnel(selectedFunnelId);
      }
    } catch (error: any) {
      toast.error("Erro ao mover lead", {
        description: error.message,
      });
    } finally {
      setDraggedLead(null);
    }
  };

  const handleLeadClick = (lead: Lead) => {
    setSelectedLead(lead);
    setDetailsModalOpen(true);
  };

  const handleUpdateLead = () => {
    if (selectedFunnelId) {
      loadLeadsInFunnel(selectedFunnelId);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/admin/crm")}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para CRM
            </Button>
            <h1 className="text-3xl font-bold">Kanban - Funil de Vendas</h1>
          </div>
          
          <Select value={selectedFunnelId || ""} onValueChange={setSelectedFunnelId}>
            <SelectTrigger className="w-[250px]">
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

        {selectedFunnelId ? (
          <div className="flex gap-4 overflow-x-auto pb-4">
            {stages.map((stage) => {
              const stageLeads = getLeadsInStage(stage.id);
              
              return (
                <div
                  key={stage.id}
                  className="flex-shrink-0 w-80"
                  onDragOver={handleDragOver}
                  onDrop={() => handleDrop(stage.id)}
                >
                  <Card className="h-full">
                    <CardHeader className="pb-3" style={{ borderTopColor: stage.cor, borderTopWidth: 4 }}>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{stage.nome}</CardTitle>
                        <span className="text-sm bg-muted px-2 py-1 rounded">
                          {stageLeads.length}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {stage.probabilidade}% conversão
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-2 min-h-[200px]">
                      {stageLeads.map((lead) => (
                        <div
                          key={lead.id}
                          draggable
                          onDragStart={() => handleDragStart(lead.id)}
                          onClick={() => handleLeadClick(lead)}
                          className="p-3 rounded-lg border bg-card hover:bg-accent cursor-move transition-colors"
                        >
                          <p className="font-medium text-sm">{lead.nome}</p>
                          <p className="text-xs text-muted-foreground">{lead.email}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                              {lead.produto}
                            </span>
                            <span className="text-xs font-medium">
                              Score: {lead.score}
                            </span>
                          </div>
                        </div>
                      ))}
                      
                      {stageLeads.length === 0 && (
                        <div className="text-center py-8 text-muted-foreground text-sm">
                          Arraste leads aqui
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              Nenhum funil disponível. Crie um funil primeiro.
            </p>
            <Button
              className="mt-4"
              onClick={() => navigate("/admin/funnels")}
            >
              Gerenciar Funis
            </Button>
          </div>
        )}
      </div>

      {selectedLead && (
        <LeadDetailsModal
          lead={selectedLead}
          open={detailsModalOpen}
          onOpenChange={setDetailsModalOpen}
          onUpdate={handleUpdateLead}
        />
      )}
    </div>
  );
}