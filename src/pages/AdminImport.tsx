import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useRequireAuth } from "@/hooks/useRequireAuth";
import { Upload, FileSpreadsheet, CheckCircle2, XCircle, AlertCircle } from "lucide-react";

export default function AdminImport() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, loading: authLoading, isAdmin } = useRequireAuth(true);
  
  const [file, setFile] = useState<File | null>(null);
  const [duplicateAction, setDuplicateAction] = useState<"skip" | "update">("skip");
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [report, setReport] = useState<any>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setReport(null);
    }
  };

  const parseDateBR = (dateStr: string): string => {
    // Formato: DD/MM/YYYY HH:MM:SS
    const [datePart, timePart] = dateStr.split(' ');
    const [day, month, year] = datePart.split('/');
    return `${year}-${month}-${day}T${timePart}Z`;
  };

  const parseCSV = (text: string): any[] => {
    const lines = text.split('\n').filter(line => line.trim());
    const headers = lines[0].split('|').map(h => h.trim());
    
    const sales = [];
    
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split('|').map(v => v.trim());
      
      if (values.length < headers.length) continue;
      
      const nome = values[12];
      const email = values[14]?.replace(/\\/g, '');
      const ddd = values[15];
      const telefone = values[16];
      const whatsapp = ddd && telefone ? `${ddd}${telefone}` : '';
      
      if (!email || !nome) continue;
      
      sales.push({
        nome,
        email,
        whatsapp,
        produto: values[0],
        moeda: values[1],
        preco_produto: parseFloat(values[2]) || 0,
        preco_oferta: parseFloat(values[4]) || 0,
        numero_parcela: parseInt(values[8]) || 1,
        data_venda: parseDateBR(values[9]),
        data_confirmacao: parseDateBR(values[10]),
        status: values[11],
        documento: values[13],
        origem_checkout: values[25],
        tipo_pagamento: values[26],
      });
    }
    
    return sales;
  };

  const handleImport = async () => {
    if (!file) {
      toast({
        title: "Arquivo necessário",
        description: "Por favor, selecione um arquivo para importar.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    setProgress(10);

    try {
      const text = await file.text();
      setProgress(30);
      
      const sales = parseCSV(text);
      setProgress(50);

      if (sales.length === 0) {
        toast({
          title: "Nenhum dado encontrado",
          description: "O arquivo não contém dados válidos para importar.",
          variant: "destructive",
        });
        setIsProcessing(false);
        return;
      }

      const { data, error } = await supabase.functions.invoke('import-hotmart-leads', {
        body: {
          sales,
          updateDuplicates: duplicateAction === "update"
        }
      });

      setProgress(100);

      if (error) {
        throw error;
      }

      setReport(data);
      
      toast({
        title: "Importação concluída!",
        description: `${data.created} novos leads criados, ${data.updated} atualizados, ${data.skipped} ignorados.`,
      });

    } catch (error: any) {
      console.error('Erro na importação:', error);
      toast({
        title: "Erro na importação",
        description: error.message || "Ocorreu um erro ao processar o arquivo.",
        variant: "destructive",
      });
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
              <FileSpreadsheet className="h-6 w-6" />
              Importar Leads da Hotmart
            </CardTitle>
            <CardDescription>
              Importe leads de vendas da Hotmart em formato CSV ou texto separado por pipes (|)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="file">Arquivo de Vendas</Label>
              <Input
                id="file"
                type="file"
                accept=".csv,.txt,.numbers"
                onChange={handleFileChange}
                disabled={isProcessing}
              />
              {file && (
                <p className="text-sm text-muted-foreground">
                  Arquivo selecionado: {file.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Tratamento de Duplicados</Label>
              <RadioGroup
                value={duplicateAction}
                onValueChange={(value) => setDuplicateAction(value as "skip" | "update")}
                disabled={isProcessing}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="skip" id="skip" />
                  <Label htmlFor="skip" className="font-normal">
                    Pular leads duplicados (mesmo email)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="update" id="update" />
                  <Label htmlFor="update" className="font-normal">
                    Atualizar dados de leads existentes
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {isProcessing && (
              <div className="space-y-2">
                <Label>Progresso da Importação</Label>
                <Progress value={progress} />
              </div>
            )}

            {report && (
              <Alert>
                <CheckCircle2 className="h-4 w-4" />
                <AlertDescription>
                  <div className="space-y-2">
                    <p className="font-semibold">Resumo da Importação:</p>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3 w-3 text-green-600" />
                        <span>{report.created} novos leads criados</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertCircle className="h-3 w-3 text-blue-600" />
                        <span>{report.updated} leads atualizados</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="h-3 w-3 text-yellow-600" />
                        <span>{report.skipped} leads ignorados</span>
                      </li>
                    </ul>
                    {report.errors.length > 0 && (
                      <details className="mt-2">
                        <summary className="cursor-pointer text-sm font-medium">
                          {report.errors.length} erros encontrados
                        </summary>
                        <ul className="mt-2 space-y-1 text-xs text-red-600">
                          {report.errors.slice(0, 10).map((error: string, i: number) => (
                            <li key={i}>{error}</li>
                          ))}
                          {report.errors.length > 10 && (
                            <li>... e mais {report.errors.length - 10} erros</li>
                          )}
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
                disabled={!file || isProcessing}
                className="flex-1"
              >
                <Upload className="mr-2 h-4 w-4" />
                {isProcessing ? "Importando..." : "Importar Leads"}
              </Button>
              {report && (
                <Button
                  variant="outline"
                  onClick={() => navigate("/admin/crm")}
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