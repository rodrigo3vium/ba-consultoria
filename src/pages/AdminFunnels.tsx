import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useRequireAuth } from "@/hooks/useRequireAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ArrowLeft, Plus, Trash2, Edit, GripVertical } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Funnel {
  id: string;
  nome: string;
  descricao: string | null;
  cor: string;
  ordem: number;
  ativo: boolean;
}

interface FunnelStage {
  id: string;
  funnel_id: string;
  nome: string;
  descricao: string | null;
  ordem: number;
  cor: string;
  probabilidade: number;
  ativo: boolean;
}

export default function AdminFunnels() {
  useRequireAuth(true);
  const navigate = useNavigate();
  
  const [funnels, setFunnels] = useState<Funnel[]>([]);
  const [stages, setStages] = useState<FunnelStage[]>([]);
  const [selectedFunnel, setSelectedFunnel] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Funnel Dialog
  const [funnelDialogOpen, setFunnelDialogOpen] = useState(false);
  const [editingFunnel, setEditingFunnel] = useState<Funnel | null>(null);
  const [funnelForm, setFunnelForm] = useState({
    nome: "",
    descricao: "",
    cor: "#3B82F6",
  });

  // Stage Dialog
  const [stageDialogOpen, setStageDialogOpen] = useState(false);
  const [editingStage, setEditingStage] = useState<FunnelStage | null>(null);
  const [stageForm, setStageForm] = useState({
    nome: "",
    descricao: "",
    cor: "#6B7280",
    probabilidade: 50,
  });

  useEffect(() => {
    loadFunnels();
  }, []);

  useEffect(() => {
    if (selectedFunnel) {
      loadStages(selectedFunnel);
    }
  }, [selectedFunnel]);

  const loadFunnels = async () => {
    try {
      const { data, error } = await supabase
        .from("funnels")
        .select("*")
        .order("ordem", { ascending: true });

      if (error) throw error;
      setFunnels(data || []);
      
      if (data && data.length > 0 && !selectedFunnel) {
        setSelectedFunnel(data[0].id);
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
        .order("ordem", { ascending: true });

      if (error) throw error;
      setStages(data || []);
    } catch (error: any) {
      toast.error("Erro ao carregar etapas", {
        description: error.message,
      });
    }
  };

  const handleSaveFunnel = async () => {
    try {
      if (!funnelForm.nome.trim()) {
        toast.error("Nome do funil é obrigatório");
        return;
      }

      if (editingFunnel) {
        const { error } = await supabase
          .from("funnels")
          .update({
            nome: funnelForm.nome,
            descricao: funnelForm.descricao,
            cor: funnelForm.cor,
          })
          .eq("id", editingFunnel.id);

        if (error) throw error;
        toast.success("Funil atualizado com sucesso");
      } else {
        const maxOrdem = Math.max(...funnels.map(f => f.ordem), 0);
        const { error } = await supabase
          .from("funnels")
          .insert({
            nome: funnelForm.nome,
            descricao: funnelForm.descricao,
            cor: funnelForm.cor,
            ordem: maxOrdem + 1,
          });

        if (error) throw error;
        toast.success("Funil criado com sucesso");
      }

      setFunnelDialogOpen(false);
      setEditingFunnel(null);
      setFunnelForm({ nome: "", descricao: "", cor: "#3B82F6" });
      loadFunnels();
    } catch (error: any) {
      toast.error("Erro ao salvar funil", {
        description: error.message,
      });
    }
  };

  const handleSaveStage = async () => {
    if (!selectedFunnel) return;

    try {
      if (!stageForm.nome.trim()) {
        toast.error("Nome da etapa é obrigatório");
        return;
      }

      if (editingStage) {
        const { error } = await supabase
          .from("funnel_stages")
          .update({
            nome: stageForm.nome,
            descricao: stageForm.descricao,
            cor: stageForm.cor,
            probabilidade: stageForm.probabilidade,
          })
          .eq("id", editingStage.id);

        if (error) throw error;
        toast.success("Etapa atualizada com sucesso");
      } else {
        const maxOrdem = Math.max(...stages.map(s => s.ordem), 0);
        const { error } = await supabase
          .from("funnel_stages")
          .insert({
            funnel_id: selectedFunnel,
            nome: stageForm.nome,
            descricao: stageForm.descricao,
            cor: stageForm.cor,
            probabilidade: stageForm.probabilidade,
            ordem: maxOrdem + 1,
          });

        if (error) throw error;
        toast.success("Etapa criada com sucesso");
      }

      setStageDialogOpen(false);
      setEditingStage(null);
      setStageForm({ nome: "", descricao: "", cor: "#6B7280", probabilidade: 50 });
      loadStages(selectedFunnel);
    } catch (error: any) {
      toast.error("Erro ao salvar etapa", {
        description: error.message,
      });
    }
  };

  const handleDeleteFunnel = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este funil? Todas as etapas e históricos serão removidos.")) {
      return;
    }

    try {
      const { error } = await supabase
        .from("funnels")
        .delete()
        .eq("id", id);

      if (error) throw error;
      
      toast.success("Funil excluído com sucesso");
      
      if (selectedFunnel === id) {
        setSelectedFunnel(null);
        setStages([]);
      }
      
      loadFunnels();
    } catch (error: any) {
      toast.error("Erro ao excluir funil", {
        description: error.message,
      });
    }
  };

  const handleDeleteStage = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir esta etapa?")) {
      return;
    }

    try {
      const { error } = await supabase
        .from("funnel_stages")
        .delete()
        .eq("id", id);

      if (error) throw error;
      
      toast.success("Etapa excluída com sucesso");
      
      if (selectedFunnel) {
        loadStages(selectedFunnel);
      }
    } catch (error: any) {
      toast.error("Erro ao excluir etapa", {
        description: error.message,
      });
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
              onClick={() => navigate("/admin")}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
            <h1 className="text-3xl font-bold">Gerenciar Funis</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Funnels List */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Funis</CardTitle>
                <Button
                  size="sm"
                  onClick={() => {
                    setEditingFunnel(null);
                    setFunnelForm({ nome: "", descricao: "", cor: "#3B82F6" });
                    setFunnelDialogOpen(true);
                  }}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Novo
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              {funnels.map((funnel) => (
                <div
                  key={funnel.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedFunnel === funnel.id
                      ? "bg-accent border-primary"
                      : "hover:bg-muted"
                  }`}
                  onClick={() => setSelectedFunnel(funnel.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <GripVertical className="h-4 w-4 text-muted-foreground" />
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: funnel.cor }}
                      />
                      <div>
                        <p className="font-medium">{funnel.nome}</p>
                        {funnel.descricao && (
                          <p className="text-xs text-muted-foreground">
                            {funnel.descricao}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          setEditingFunnel(funnel);
                          setFunnelForm({
                            nome: funnel.nome,
                            descricao: funnel.descricao || "",
                            cor: funnel.cor,
                          });
                          setFunnelDialogOpen(true);
                        }}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteFunnel(funnel.id);
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              
              {funnels.length === 0 && (
                <p className="text-center text-muted-foreground py-8">
                  Nenhum funil cadastrado
                </p>
              )}
            </CardContent>
          </Card>

          {/* Right: Stages List */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Etapas do Funil</CardTitle>
                  <CardDescription>
                    {selectedFunnel
                      ? funnels.find(f => f.id === selectedFunnel)?.nome
                      : "Selecione um funil"}
                  </CardDescription>
                </div>
                {selectedFunnel && (
                  <Button
                    size="sm"
                    onClick={() => {
                      setEditingStage(null);
                      setStageForm({ nome: "", descricao: "", cor: "#6B7280", probabilidade: 50 });
                      setStageDialogOpen(true);
                    }}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Nova Etapa
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {selectedFunnel ? (
                <div className="space-y-3">
                  {stages.map((stage) => (
                    <div
                      key={stage.id}
                      className="p-4 rounded-lg border bg-card"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 flex-1">
                          <GripVertical className="h-4 w-4 text-muted-foreground" />
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: stage.cor }}
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <p className="font-medium">{stage.nome}</p>
                              <span className="text-xs bg-muted px-2 py-1 rounded">
                                {stage.probabilidade}%
                              </span>
                            </div>
                            {stage.descricao && (
                              <p className="text-sm text-muted-foreground mt-1">
                                {stage.descricao}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              setEditingStage(stage);
                              setStageForm({
                                nome: stage.nome,
                                descricao: stage.descricao || "",
                                cor: stage.cor,
                                probabilidade: stage.probabilidade,
                              });
                              setStageDialogOpen(true);
                            }}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteStage(stage.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {stages.length === 0 && (
                    <p className="text-center text-muted-foreground py-8">
                      Nenhuma etapa cadastrada
                    </p>
                  )}
                </div>
              ) : (
                <p className="text-center text-muted-foreground py-8">
                  Selecione um funil para gerenciar suas etapas
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Funnel Dialog */}
      <Dialog open={funnelDialogOpen} onOpenChange={setFunnelDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingFunnel ? "Editar Funil" : "Novo Funil"}
            </DialogTitle>
            <DialogDescription>
              Configure as informações do funil de vendas
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div>
              <Label htmlFor="funnel-nome">Nome *</Label>
              <Input
                id="funnel-nome"
                value={funnelForm.nome}
                onChange={(e) => setFunnelForm({ ...funnelForm, nome: e.target.value })}
                placeholder="Ex: Funil IA do Zero"
              />
            </div>
            
            <div>
              <Label htmlFor="funnel-descricao">Descrição</Label>
              <Textarea
                id="funnel-descricao"
                value={funnelForm.descricao}
                onChange={(e) => setFunnelForm({ ...funnelForm, descricao: e.target.value })}
                placeholder="Descreva o propósito deste funil"
                rows={3}
              />
            </div>
            
            <div>
              <Label htmlFor="funnel-cor">Cor</Label>
              <div className="flex gap-2">
                <Input
                  id="funnel-cor"
                  type="color"
                  value={funnelForm.cor}
                  onChange={(e) => setFunnelForm({ ...funnelForm, cor: e.target.value })}
                  className="w-20 h-10"
                />
                <Input
                  value={funnelForm.cor}
                  onChange={(e) => setFunnelForm({ ...funnelForm, cor: e.target.value })}
                  placeholder="#3B82F6"
                />
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setFunnelDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleSaveFunnel}>
              {editingFunnel ? "Atualizar" : "Criar"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Stage Dialog */}
      <Dialog open={stageDialogOpen} onOpenChange={setStageDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingStage ? "Editar Etapa" : "Nova Etapa"}
            </DialogTitle>
            <DialogDescription>
              Configure as informações da etapa
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div>
              <Label htmlFor="stage-nome">Nome *</Label>
              <Input
                id="stage-nome"
                value={stageForm.nome}
                onChange={(e) => setStageForm({ ...stageForm, nome: e.target.value })}
                placeholder="Ex: Descoberta"
              />
            </div>
            
            <div>
              <Label htmlFor="stage-descricao">Descrição</Label>
              <Textarea
                id="stage-descricao"
                value={stageForm.descricao}
                onChange={(e) => setStageForm({ ...stageForm, descricao: e.target.value })}
                placeholder="Descreva esta etapa"
                rows={2}
              />
            </div>
            
            <div>
              <Label htmlFor="stage-probabilidade">
                Probabilidade de Conversão (%)
              </Label>
              <Input
                id="stage-probabilidade"
                type="number"
                min="0"
                max="100"
                value={stageForm.probabilidade}
                onChange={(e) => setStageForm({ ...stageForm, probabilidade: parseInt(e.target.value) || 0 })}
              />
            </div>
            
            <div>
              <Label htmlFor="stage-cor">Cor</Label>
              <div className="flex gap-2">
                <Input
                  id="stage-cor"
                  type="color"
                  value={stageForm.cor}
                  onChange={(e) => setStageForm({ ...stageForm, cor: e.target.value })}
                  className="w-20 h-10"
                />
                <Input
                  value={stageForm.cor}
                  onChange={(e) => setStageForm({ ...stageForm, cor: e.target.value })}
                  placeholder="#6B7280"
                />
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setStageDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleSaveStage}>
              {editingStage ? "Atualizar" : "Criar"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}