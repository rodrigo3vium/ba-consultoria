import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { useRequireAuth } from "@/hooks/useRequireAuth";
import { CheckCircle2, XCircle, AlertCircle, PlayCircle } from "lucide-react";
import { importHotmartCSV } from "@/lib/importHotmartData";

// CSV completo embedado (primeiras linhas para teste)
const EMBEDDED_CSV = `Nome do Produto;Moeda;Preço do Produto;Moeda;Preço da Oferta;Taxa de Câmbio;Moeda;Preço Original;Número da Parcela;Data de Venda;Data de Confirmação;Status;Nome;Documento;Email;DDD;Telefone;CEP;Cidade;Estado;Bairro;País;Endereço;Número;Complemento;Origem de Checkout;Tipo de Pagamento
IA do Zero;BRL;49,9;BRL;41,47;;;;1;28/09/2025 18:22:53;28/09/2025 18:27:07;Completo;Werther Alves Marcos;;werthermarcos@gmail.com;21;984775487;;;;;Brasil;;;;;Pix`;

export default function AdminImportDirect() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, loading: authLoading, isAdmin } = useRequireAuth(true);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [report, setReport] = useState<any>(null);

  const handleDirectImport = async () => {
    setIsProcessing(true);
    setProgress(0);

    try {
      // Ler o arquivo CSV da pasta public
      const response = await fetch('/data/IADZ_Vendas_12m._12_10_2025.csv');
      
      if (!response.ok) {
        throw new Error('Arquivo CSV não encontrado');
      }
      
      const csvText = await response.text();
      
      setProgress(20);
      
      // Executar importação com progresso simulado
      const progressInterval = setInterval(() => {
        setProgress(prev => Math.min(prev + 5, 90));
      }, 1000);
      
      const result = await importHotmartCSV(csvText, false);
      
      clearInterval(progressInterval);
      setProgress(100);
      
      setReport(result);
      
      toast({
        title: "✅ Importação concluída!",
        description: `${result.created} novos leads criados, ${result.updated} atualizados, ${result.skipped} ignorados.`,
      });

    } catch (error: any) {
      console.error('❌ Erro na importação:', error);
      toast({
        title: "Erro na importação",
        description: error.message || "Ocorreu um erro ao processar os dados.",
        variant: "destructive",
      });
      setProgress(0);
    } finally {
      setIsProcessing(false);
    }
  };

  if (authLoading) {
    return <div>Carregando...</div>;
  }

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button variant="outline" onClick={() => navigate("/admin/crm")}>
            ← Voltar para CRM
          </Button>
        </div>

        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PlayCircle className="h-6 w-6" />
              Importação Direta - Dados Hotmart
            </CardTitle>
            <CardDescription>
              Importar 552 vendas do arquivo IADZ_Vendas_12m._12_10_2025.csv
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <div className="space-y-2">
                  <p className="font-semibold">Dados que serão importados:</p>
                  <ul className="text-sm space-y-1">
                    <li>📊 <strong>~552</strong> vendas totais</li>
                    <li>👥 <strong>~275</strong> leads únicos esperados</li>
                    <li>📦 Produtos: IA do Zero + Super Agentes</li>
                    <li>🔄 Status: todos como "cliente" (pagos)</li>
                    <li>🎯 Adicionados automaticamente ao funil padrão</li>
                  </ul>
                </div>
              </AlertDescription>
            </Alert>

            {isProcessing && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progresso da Importação</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} />
                <p className="text-xs text-muted-foreground">
                  Processando em lotes de 50 vendas...
                </p>
              </div>
            )}

            {report && (
              <Alert>
                <CheckCircle2 className="h-4 w-4" />
                <AlertDescription>
                  <div className="space-y-2">
                    <p className="font-semibold">📊 Resumo da Importação:</p>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3 w-3 text-green-600" />
                        <span><strong>{report.created}</strong> novos leads criados</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertCircle className="h-3 w-3 text-blue-600" />
                        <span><strong>{report.updated}</strong> leads atualizados</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="h-3 w-3 text-yellow-600" />
                        <span><strong>{report.skipped}</strong> leads ignorados (duplicados)</span>
                      </li>
                    </ul>
                    {report.errors && report.errors.length > 0 && (
                      <details className="mt-2">
                        <summary className="cursor-pointer text-sm font-medium text-red-600">
                          ⚠️ {report.errors.length} erros/avisos encontrados
                        </summary>
                        <ul className="mt-2 space-y-1 text-xs text-red-600 max-h-48 overflow-y-auto">
                          {report.errors.map((error: string, i: number) => (
                            <li key={i}>{error}</li>
                          ))}
                        </ul>
                      </details>
                    )}
                  </div>
                </AlertDescription>
              </Alert>
            )}

            <div className="flex gap-3">
              <Button
                onClick={handleDirectImport}
                disabled={isProcessing}
                className="flex-1"
                size="lg"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                {isProcessing ? "Importando..." : "Executar Importação"}
              </Button>
              {report && (
                <Button
                  variant="outline"
                  onClick={() => navigate("/admin/crm")}
                  size="lg"
                >
                  Ver Leads Importados
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
