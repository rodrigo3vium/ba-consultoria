import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Calendar, User } from "lucide-react";
import { format } from "date-fns";

interface Lead {
  id: string;
  nome: string;
  email: string;
  whatsapp: string;
  produto: string;
  status: string;
  faturamento?: string;
  situacao_profissional?: string;
  observacoes?: string;
  tags?: string[];
  created_at: string;
  ultima_interacao?: string;
}

interface Interaction {
  id: string;
  tipo: string;
  descricao: string;
  created_at: string;
}

interface LeadDetailsModalProps {
  lead: Lead | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUpdate: () => void;
}

const LeadDetailsModal = ({ lead, open, onOpenChange, onUpdate }: LeadDetailsModalProps) => {
  const [status, setStatus] = useState<"novo" | "contatado" | "qualificado" | "convertido" | "perdido">("novo");
  const [observacoes, setObservacoes] = useState("");
  const [newInteraction, setNewInteraction] = useState("");
  const [interactionType, setInteractionType] = useState<"email" | "whatsapp" | "telefone" | "reuniao" | "nota">("nota");
  const [interactions, setInteractions] = useState<Interaction[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const loadInteractions = async () => {
    if (!lead) return;
    
    const { data, error } = await supabase
      .from("lead_interactions")
      .select("*")
      .eq("lead_id", lead.id)
      .order("created_at", { ascending: false });

    if (!error && data) {
      setInteractions(data);
    }
  };

  const handleUpdateLead = async () => {
    if (!lead) return;
    
    setLoading(true);
    const { error } = await supabase
      .from("leads")
      .update({ status, observacoes })
      .eq("id", lead.id);

    if (error) {
      toast({
        title: "Erro",
        description: "Não foi possível atualizar o lead.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Sucesso",
        description: "Lead atualizado com sucesso!",
      });
      onUpdate();
    }
    setLoading(false);
  };

  const handleAddInteraction = async () => {
    if (!lead || !newInteraction.trim()) return;

    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      toast({
        title: "Erro",
        description: "Usuário não autenticado.",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    const { error } = await supabase
      .from("lead_interactions")
      .insert([{
        lead_id: lead.id,
        user_id: user.id,
        tipo: interactionType,
        descricao: newInteraction,
      }]);

    if (error) {
      toast({
        title: "Erro",
        description: "Não foi possível adicionar a interação.",
        variant: "destructive",
      });
    } else {
      // Update last interaction
      await supabase
        .from("leads")
        .update({ ultima_interacao: new Date().toISOString() })
        .eq("id", lead.id);

      setNewInteraction("");
      loadInteractions();
      onUpdate();
      toast({
        title: "Sucesso",
        description: "Interação adicionada com sucesso!",
      });
    }
    setLoading(false);
  };

  if (!lead) return null;

  return (
    <Dialog open={open} onOpenChange={(isOpen) => {
      onOpenChange(isOpen);
      if (isOpen && lead) {
        setStatus(lead.status as "novo" | "contatado" | "qualificado" | "convertido" | "perdido");
        setObservacoes(lead.observacoes || "");
        loadInteractions();
      }
    }}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Detalhes do Lead</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Informações do Lead */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <User className="h-4 w-4" />
                Informações Pessoais
              </h3>
              <div className="space-y-2 text-sm">
                <p><strong>Nome:</strong> {lead.nome}</p>
                <p className="flex items-center gap-2">
                  <Mail className="h-3 w-3" />
                  {lead.email}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-3 w-3" />
                  {lead.whatsapp}
                </p>
                <p><strong>Produto:</strong> <Badge variant="outline">{lead.produto}</Badge></p>
                {lead.faturamento && <p><strong>Faturamento:</strong> {lead.faturamento}</p>}
                {lead.situacao_profissional && (
                  <p><strong>Situação:</strong> {lead.situacao_profissional}</p>
                )}
                <p className="flex items-center gap-2">
                  <Calendar className="h-3 w-3" />
                  <strong>Cadastro:</strong> {format(new Date(lead.created_at), "dd/MM/yyyy")}
                </p>
                {lead.ultima_interacao && (
                  <p className="flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    <strong>Última interação:</strong> {format(new Date(lead.ultima_interacao), "dd/MM/yyyy HH:mm")}
                  </p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="status">Status</Label>
              <Select value={status} onValueChange={(value) => setStatus(value as typeof status)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="novo">Novo</SelectItem>
                  <SelectItem value="contatado">Contatado</SelectItem>
                  <SelectItem value="qualificado">Qualificado</SelectItem>
                  <SelectItem value="convertido">Convertido</SelectItem>
                  <SelectItem value="perdido">Perdido</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="observacoes">Observações</Label>
              <Textarea
                id="observacoes"
                value={observacoes}
                onChange={(e) => setObservacoes(e.target.value)}
                rows={4}
                placeholder="Adicione observações sobre o lead..."
              />
            </div>

            <Button onClick={handleUpdateLead} disabled={loading} className="w-full">
              Salvar Alterações
            </Button>
          </div>

          {/* Histórico de Interações */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-3">Nova Interação</h3>
              <div className="space-y-3">
                <Select value={interactionType} onValueChange={(value) => setInteractionType(value as typeof interactionType)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    <SelectItem value="telefone">Telefone</SelectItem>
                    <SelectItem value="reuniao">Reunião</SelectItem>
                    <SelectItem value="nota">Nota</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea
                  value={newInteraction}
                  onChange={(e) => setNewInteraction(e.target.value)}
                  placeholder="Descreva a interação..."
                  rows={3}
                />
                <Button onClick={handleAddInteraction} disabled={loading || !newInteraction.trim()} className="w-full">
                  Adicionar Interação
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Histórico</h3>
              <div className="space-y-2 max-h-[400px] overflow-y-auto">
                {interactions.length === 0 ? (
                  <p className="text-sm text-muted-foreground">Nenhuma interação registrada.</p>
                ) : (
                  interactions.map((interaction) => (
                    <div key={interaction.id} className="border rounded-lg p-3">
                      <div className="flex justify-between items-start mb-1">
                        <Badge variant="outline">{interaction.tipo}</Badge>
                        <span className="text-xs text-muted-foreground">
                          {format(new Date(interaction.created_at), "dd/MM/yyyy HH:mm")}
                        </span>
                      </div>
                      <p className="text-sm mt-2">{interaction.descricao}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadDetailsModal;
