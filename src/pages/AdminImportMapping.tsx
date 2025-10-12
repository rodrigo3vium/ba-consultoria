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
import { CheckCircle2, XCircle, AlertCircle, Upload } from "lucide-react";
import { importMappingCSV } from "@/lib/importMappingData";

export default function AdminImportMapping() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, loading: authLoading, isAdmin } = useRequireAuth(true);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [report, setReport] = useState<any>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setReport(null);
    }
  };

  const handleImport = async () => {
    if (!file) {
      toast({
        title: "Nenhum arquivo selecionado",
        description: "Por favor, selecione um arquivo CSV para importar.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    setProgress(0);

    try {
      // Read file content
      const csvText = await file.text();
      
      setProgress(20);
      
      // Execute import with simulated progress
      const progressInterval = setInterval(() => {
        setProgress(prev => Math.min(prev + 10, 90));
      }, 500);
      
      const result = await importMappingCSV(csvText);
      
      clearInterval(progressInterval);
      setProgress(100);
      
      setReport(result);
      
      toast({
        title: "✅ Importação concluída!",
        description: `${result.created} perfis criados, ${result.updated} atualizados, ${result.skipped} ignorados.`,
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
              <Upload className="h-6 w-6" />
              Importação de Mapeamento de Leads
            </CardTitle>
            <CardDescription>
              Importar dados de perfil dos leads (idade, experiência IA, objetivos, etc.)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <div className="space-y-2">
                  <p className="font-semibold">Formato do CSV:</p>
                  <ul className="text-sm space-y-1">
                    <li>📋 Colunas esperadas: Nome, Idade, Cidade/Estado, Situação Profissional, Experiência IA, Canal, Área de aplicação, Dificuldade, Nível Organização (0-10), Nível Produtividade (0-10), Objetivo Principal, Desejo Realizar, Expectativas</li>
                    <li>🔗 O sistema buscará os leads pelo <strong>nome</strong></li>
                    <li>✅ Perfis existentes serão <strong>atualizados</strong></li>
                    <li>➕ Novos perfis serão <strong>criados</strong></li>
                  </ul>
                </div>
              </AlertDescription>
            </Alert>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label htmlFor="csv-file" className="flex-1">
                  <div className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                    <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">
                      {file ? file.name : "Clique para selecionar o arquivo CSV"}
                    </p>
                  </div>
                  <input
                    id="csv-file"
                    type="file"
                    accept=".csv"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {isProcessing && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progresso da Importação</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} />
                <p className="text-xs text-muted-foreground">
                  Processando perfis de leads...
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
                        <span><strong>{report.created}</strong> novos perfis criados</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertCircle className="h-3 w-3 text-blue-600" />
                        <span><strong>{report.updated}</strong> perfis atualizados</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="h-3 w-3 text-yellow-600" />
                        <span><strong>{report.skipped}</strong> linhas ignoradas</span>
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
                onClick={handleImport}
                disabled={isProcessing || !file}
                className="flex-1"
                size="lg"
              >
                <Upload className="mr-2 h-5 w-5" />
                {isProcessing ? "Importando..." : "Executar Importação"}
              </Button>
              {report && (
                <Button
                  variant="outline"
                  onClick={() => navigate("/admin/crm")}
                  size="lg"
                >
                  Ver Leads
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
