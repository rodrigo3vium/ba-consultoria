import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRequireAuth } from "@/hooks/useRequireAuth";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, Search, Mail, Eye, Download, GitBranch } from "lucide-react";
import { format } from "date-fns";
import CRMMetrics from "@/components/crm/CRMMetrics";
import LeadDetailsModal from "@/components/crm/LeadDetailsModal";
import EmailModal from "@/components/crm/EmailModal";
import MoveFunnelModal from "@/components/crm/MoveFunnelModal";
import { useToast } from "@/hooks/use-toast";

interface FunnelPosition {
  funnel_id: string;
  stage_id: string;
  funnel_name: string;
  stage_name: string;
}

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
  funnel_position?: FunnelPosition;
}

const AdminCRM = () => {
  const navigate = useNavigate();
  const { loading } = useRequireAuth(true);
  const { toast } = useToast();
  
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("todos");
  const [produtoFilter, setProdutoFilter] = useState("todos");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [emailOpen, setEmailOpen] = useState(false);
  const [moveFunnelOpen, setMoveFunnelOpen] = useState(false);
  const [loadingData, setLoadingData] = useState(true);

  // Metrics
  const [totalLeads, setTotalLeads] = useState(0);
  const [newLeads, setNewLeads] = useState(0);
  const [convertedLeads, setConvertedLeads] = useState(0);
  const [conversionRate, setConversionRate] = useState(0);

  const loadLeads = async () => {
    setLoadingData(true);
    
    // Carregar leads
    const { data: leadsData, error: leadsError } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (leadsError) {
      toast({
        title: "Erro",
        description: "Não foi possível carregar os leads.",
        variant: "destructive",
      });
      setLoadingData(false);
      return;
    }

    if (!leadsData) {
      setLoadingData(false);
      return;
    }

    // Carregar posições de funil para cada lead
    const leadsWithFunnels = await Promise.all(
      leadsData.map(async (lead) => {
        const { data: position } = await supabase
          .from("lead_funnel_positions")
          .select(`
            funnel_id,
            stage_id,
            funnels!inner(nome),
            funnel_stages!inner(nome)
          `)
          .eq("lead_id", lead.id)
          .maybeSingle();

        if (position) {
          return {
            ...lead,
            funnel_position: {
              funnel_id: position.funnel_id,
              stage_id: position.stage_id,
              funnel_name: (position.funnels as any).nome,
              stage_name: (position.funnel_stages as any).nome,
            },
          };
        }

        return lead;
      })
    );

    setLeads(leadsWithFunnels);
    setFilteredLeads(leadsWithFunnels);
    calculateMetrics(leadsWithFunnels);
    setLoadingData(false);
  };

  const calculateMetrics = (leadsData: Lead[]) => {
    setTotalLeads(leadsData.length);
    
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const recentLeads = leadsData.filter(
      (lead) => new Date(lead.created_at) >= sevenDaysAgo
    );
    setNewLeads(recentLeads.length);

    const converted = leadsData.filter((lead) => lead.status === "convertido");
    setConvertedLeads(converted.length);
    
    const rate = leadsData.length > 0 ? (converted.length / leadsData.length) * 100 : 0;
    setConversionRate(rate);
  };

  useEffect(() => {
    if (!loading) {
      loadLeads();
    }
  }, [loading]);

  useEffect(() => {
    let filtered = leads;

    if (searchQuery) {
      filtered = filtered.filter(
        (lead) =>
          lead.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
          lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          lead.whatsapp.includes(searchQuery)
      );
    }

    if (statusFilter !== "todos") {
      filtered = filtered.filter((lead) => lead.status === statusFilter);
    }

    if (produtoFilter !== "todos") {
      filtered = filtered.filter((lead) => lead.produto === produtoFilter);
    }

    setFilteredLeads(filtered);
  }, [searchQuery, statusFilter, produtoFilter, leads]);

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      novo: { variant: "default" as const, label: "Novo" },
      contatado: { variant: "secondary" as const, label: "Contatado" },
      qualificado: { variant: "outline" as const, label: "Qualificado" },
      convertido: { variant: "default" as const, label: "Convertido" },
      perdido: { variant: "destructive" as const, label: "Perdido" },
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.novo;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const exportToCSV = () => {
    const headers = ["Nome", "Email", "WhatsApp", "Produto", "Status", "Data"];
    const rows = filteredLeads.map((lead) => [
      lead.nome,
      lead.email,
      lead.whatsapp,
      lead.produto,
      lead.status,
      format(new Date(lead.created_at), "dd/MM/yyyy"),
    ]);

    const csv = [headers, ...rows].map((row) => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-${format(new Date(), "yyyy-MM-dd")}.csv`;
    a.click();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 pt-8 pb-32">
        <div className="flex items-center justify-between mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/admin")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao Dashboard
          </Button>
          
          <Button
            onClick={() => navigate("/admin/crm/kanban")}
            variant="outline"
          >
            Ver Kanban
          </Button>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">CRM</h1>
          <p className="text-muted-foreground">Gerencie seus leads e relacionamentos</p>
        </div>

        <CRMMetrics
          totalLeads={totalLeads}
          newLeads={newLeads}
          convertedLeads={convertedLeads}
          conversionRate={conversionRate}
        />

        <div className="bg-card rounded-lg border p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Buscar por nome, email ou telefone..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os Status</SelectItem>
                <SelectItem value="novo">Novo</SelectItem>
                <SelectItem value="contatado">Contatado</SelectItem>
                <SelectItem value="qualificado">Qualificado</SelectItem>
                <SelectItem value="convertido">Convertido</SelectItem>
                <SelectItem value="perdido">Perdido</SelectItem>
              </SelectContent>
            </Select>
            <Select value={produtoFilter} onValueChange={setProdutoFilter}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Produto" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os Produtos</SelectItem>
                <SelectItem value="ia-para-negocios">IA para Negócios</SelectItem>
                <SelectItem value="ia-do-zero">IA do Zero</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={exportToCSV} variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Exportar CSV
            </Button>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>WhatsApp</TableHead>
                  <TableHead>Produto</TableHead>
                  <TableHead>Funil / Etapa</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loadingData ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-8">
                      Carregando...
                    </TableCell>
                  </TableRow>
                ) : filteredLeads.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                      Nenhum lead encontrado.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredLeads.map((lead) => (
                    <TableRow key={lead.id}>
                      <TableCell className="font-medium">{lead.nome}</TableCell>
                      <TableCell>{lead.email}</TableCell>
                      <TableCell>{lead.whatsapp}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{lead.produto}</Badge>
                      </TableCell>
                      <TableCell>
                        {lead.funnel_position ? (
                          <div className="text-sm">
                            <div className="font-medium">{lead.funnel_position.funnel_name}</div>
                            <div className="text-muted-foreground">{lead.funnel_position.stage_name}</div>
                          </div>
                        ) : (
                          <Badge variant="secondary">Sem funil</Badge>
                        )}
                      </TableCell>
                      <TableCell>{getStatusBadge(lead.status)}</TableCell>
                      <TableCell>{format(new Date(lead.created_at), "dd/MM/yyyy")}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => {
                              setSelectedLead(lead);
                              setMoveFunnelOpen(true);
                            }}
                            title="Mover para funil"
                          >
                            <GitBranch className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => {
                              setSelectedLead(lead);
                              setDetailsOpen(true);
                            }}
                            title="Ver detalhes"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => {
                              setSelectedLead(lead);
                              setEmailOpen(true);
                            }}
                            title="Enviar email"
                          >
                            <Mail className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
      <Footer />

      <LeadDetailsModal
        lead={selectedLead}
        open={detailsOpen}
        onOpenChange={setDetailsOpen}
        onUpdate={loadLeads}
      />

      <EmailModal
        leadId={selectedLead?.id || null}
        leadName={selectedLead?.nome || ""}
        leadEmail={selectedLead?.email || ""}
        open={emailOpen}
        onOpenChange={setEmailOpen}
        onSuccess={loadLeads}
      />

      <MoveFunnelModal
        leadId={selectedLead?.id || null}
        leadName={selectedLead?.nome || ""}
        open={moveFunnelOpen}
        onOpenChange={setMoveFunnelOpen}
        onSuccess={loadLeads}
      />
    </div>
  );
};

export default AdminCRM;
