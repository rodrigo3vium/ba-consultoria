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
import { Mail, Phone, Calendar, User, RefreshCw, Copy } from "lucide-react";
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

interface FunnelHistory {
  id: string;
  funnel_id: string;
  stage_from_id: string | null;
  stage_to_id: string | null;
  created_at: string;
  observacao: string | null;
  funnel_name: string;
  stage_from_name: string | null;
  stage_to_name: string | null;
}

interface HotmartSale {
  id: string;
  produto: string;
  data_venda: string | null;
  data_confirmacao: string | null;
  status: string | null;
  origem_checkout: string | null;
  preco_produto: string | number | null;
  preco_oferta: string | number | null;
  tipo_pagamento: string | null;
  numero_parcela: number | null;
  moeda: string | null;
  documento: string | null;
  created_at: string;
}

interface LeadDetailsModalProps {
  lead: Lead | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUpdate: () => void;
}

// Helper function to format currency
const formatCurrency = (value: string | number | null, currency: string = 'BRL'): string => {
  if (value === null || value === undefined) return 'N/A';
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(numValue)) return 'N/A';
  return numValue.toLocaleString('pt-BR', { style: 'currency', currency });
};

// Helper function to humanize origem_checkout
const humanizeOrigem = (origem: string | null): string => {
  if (!origem) return 'N/A';
  return origem
    .split('|')
    .filter(part => part && part.toLowerCase() !== 'null')
    .join(' • ') || 'N/A';
};

const LeadDetailsModal = ({ lead, open, onOpenChange, onUpdate }: LeadDetailsModalProps) => {
  const [status, setStatus] = useState<"novo" | "contatado" | "qualificado" | "convertido" | "perdido">("novo");
  const [observacoes, setObservacoes] = useState("");
  const [newInteraction, setNewInteraction] = useState("");
  const [interactionType, setInteractionType] = useState<"email" | "whatsapp" | "telefone" | "reuniao" | "nota">("nota");
  const [interactions, setInteractions] = useState<Interaction[]>([]);
  const [funnelHistory, setFunnelHistory] = useState<FunnelHistory[]>([]);
  const [hotmartSales, setHotmartSales] = useState<HotmartSale[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingSales, setLoadingSales] = useState(false);
  const { toast } = useToast();
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copiado!",
      description: "Documento copiado para a área de transferência.",
    });
  };

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

  const loadFunnelHistory = async () => {
    if (!lead) return;

    const { data, error } = await supabase
      .from("funnel_history")
      .select(`
        id,
        funnel_id,
        stage_from_id,
        stage_to_id,
        created_at,
        observacao,
        funnels!inner(nome),
        stage_from:funnel_stages!funnel_history_stage_from_id_fkey(nome),
        stage_to:funnel_stages!funnel_history_stage_to_id_fkey(nome)
      `)
      .eq("lead_id", lead.id)
      .order("created_at", { ascending: false });

    if (!error && data) {
      const formattedHistory = data.map((item: any) => ({
        id: item.id,
        funnel_id: item.funnel_id,
        stage_from_id: item.stage_from_id,
        stage_to_id: item.stage_to_id,
        created_at: item.created_at,
        observacao: item.observacao,
        funnel_name: item.funnels.nome,
        stage_from_name: item.stage_from?.nome || null,
        stage_to_name: item.stage_to?.nome || null,
      }));
      setFunnelHistory(formattedHistory);
    }
  };

  const loadHotmartSales = async () => {
    if (!lead) {
      console.log("❌ loadHotmartSales: lead is null");
      return;
    }

    console.log("🔄 loadHotmartSales: Buscando vendas para lead", lead.id, lead.nome);
    setLoadingSales(true);

    try {
      const { data, error } = await supabase
        .from("hotmart_sales")
        .select("*")
        .eq("lead_id", lead.id)
        .order("data_venda", { ascending: false });

      console.log("📊 loadHotmartSales resultado:", { 
        leadId: lead.id, 
        leadNome: lead.nome,
        data, 
        error, 
        count: data?.length 
      });

      if (error) {
        console.error("❌ Erro ao carregar vendas Hotmart:", error);
        toast({
          title: "Erro ao carregar vendas",
          description: `Não foi possível carregar o histórico de compras: ${error.message}`,
          variant: "destructive",
        });
        setHotmartSales([]);
      } else if (data) {
        console.log("✅ Vendas carregadas com sucesso:", data.length, "vendas encontradas");
        console.log("📦 Dados das vendas:", data);
        setHotmartSales(data);
      } else {
        console.log("⚠️ Nenhuma venda encontrada para este lead");
        setHotmartSales([]);
      }
    } catch (err) {
      console.error("❌ Exceção ao carregar vendas:", err);
      toast({
        title: "Erro inesperado",
        description: "Ocorreu um erro ao carregar as vendas.",
        variant: "destructive",
      });
      setHotmartSales([]);
    } finally {
      setLoadingSales(false);
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
        loadFunnelHistory();
        loadHotmartSales();
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
              <h3 className="font-semibold mb-3">Histórico de Interações</h3>
              <div className="space-y-2 max-h-[200px] overflow-y-auto">
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

            <div>
              <h3 className="font-semibold mb-3">Histórico de Funil</h3>
              <div className="space-y-2 max-h-[200px] overflow-y-auto">
                {funnelHistory.length === 0 ? (
                  <p className="text-sm text-muted-foreground">Nenhuma movimentação registrada.</p>
                ) : (
                  funnelHistory.map((history) => (
                    <div key={history.id} className="border rounded-lg p-3">
                      <div className="flex justify-between items-start mb-1">
                        <Badge variant="outline">{history.funnel_name}</Badge>
                        <span className="text-xs text-muted-foreground">
                          {format(new Date(history.created_at), "dd/MM/yyyy HH:mm")}
                        </span>
                      </div>
                      <p className="text-sm mt-1">
                        {history.stage_from_name ? (
                          <>
                            <span className="text-muted-foreground">{history.stage_from_name}</span>
                            {" → "}
                            <span className="font-medium">{history.stage_to_name}</span>
                          </>
                        ) : (
                          <span className="font-medium">Adicionado em: {history.stage_to_name}</span>
                        )}
                      </p>
                      {history.observacao && (
                        <p className="text-xs text-muted-foreground mt-1">{history.observacao}</p>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Vendas Hotmart */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Histórico de Compras</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={loadHotmartSales}
                  disabled={loadingSales}
                  className="h-8 w-8 p-0"
                >
                  <RefreshCw className={`h-4 w-4 ${loadingSales ? 'animate-spin' : ''}`} />
                </Button>
              </div>
              <div className="space-y-3 max-h-[300px] overflow-y-auto">
                {loadingSales ? (
                  <p className="text-sm text-muted-foreground">Carregando histórico de compras...</p>
                ) : hotmartSales.length === 0 ? (
                  <p className="text-sm text-muted-foreground">Nenhuma compra Hotmart registrada.</p>
                ) : (
                  hotmartSales.map((sale) => (
                    <div key={sale.id} className="border rounded-lg p-3 space-y-2 bg-muted/20">
                      {/* Linha 1: Produto + Status */}
                      <div className="flex justify-between items-start gap-2">
                        <Badge variant="default">{sale.produto}</Badge>
                        {sale.status && (
                          <Badge 
                            variant={sale.status.toLowerCase() === 'approved' ? 'default' : 'outline'}
                            className="text-xs"
                          >
                            {sale.status}
                          </Badge>
                        )}
                      </div>
                      
                      {/* Linha 2: Valor pago + Parcelas + Tipo */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-sm font-semibold">
                          {formatCurrency(sale.preco_oferta, sale.moeda || 'BRL')}
                        </p>
                        {sale.numero_parcela && sale.numero_parcela > 1 && (
                          <Badge variant="secondary" className="text-xs">
                            {sale.numero_parcela}x
                          </Badge>
                        )}
                        {sale.tipo_pagamento && (
                          <Badge variant="outline" className="text-xs">
                            {sale.tipo_pagamento}
                          </Badge>
                        )}
                      </div>
                      
                      {/* Linha 3: Valor do produto (preço cheio) */}
                      {sale.preco_produto && (
                        <p className="text-xs text-muted-foreground">
                          Valor do produto: {formatCurrency(sale.preco_produto, sale.moeda || 'BRL')}
                        </p>
                      )}
                      
                      {/* Linha 4: Datas */}
                      <div className="space-y-1">
                        {sale.data_venda && (
                          <p className="text-xs text-muted-foreground">
                            <strong>Venda:</strong> {format(new Date(sale.data_venda), "dd/MM/yyyy HH:mm")}
                          </p>
                        )}
                        {sale.data_confirmacao && (
                          <p className="text-xs text-muted-foreground">
                            <strong>Confirmação:</strong> {format(new Date(sale.data_confirmacao), "dd/MM/yyyy HH:mm")}
                          </p>
                        )}
                      </div>
                      
                      {/* Linha 5: Origem (humanizada) */}
                      {sale.origem_checkout && (
                        <p className="text-xs">
                          <strong>Origem:</strong> <span className="text-primary">{humanizeOrigem(sale.origem_checkout)}</span>
                        </p>
                      )}
                      
                      {/* Linha 6: Documento com botão copiar */}
                      {sale.documento && (
                        <div className="flex items-center justify-between gap-2 pt-1 border-t">
                          <p className="text-xs text-muted-foreground truncate flex-1">
                            <strong>Doc:</strong> {sale.documento}
                          </p>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(sale.documento || '')}
                            className="h-6 w-6 p-0 shrink-0"
                          >
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                      )}
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
