import { supabase } from "@/integrations/supabase/client";

// Sanitiza texto removendo caracteres problemáticos
function sanitizeText(text: string | null | undefined): string {
  if (!text) return '';
  return text
    .replace(/\0/g, '')
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
    .replace(/\uFEFF/g, '')
    .replace(/\\/g, '')
    .trim();
}

function parseDateBR(dateStr: string): string {
  const [datePart, timePart] = dateStr.split(' ');
  const [day, month, year] = datePart.split('/');
  return `${year}-${month}-${day}T${timePart}Z`;
}

function parsePrice(str: string): number {
  if (!str) return 0;
  return parseFloat(str.replace(',', '.')) || 0;
}

export async function importHotmartCSV(csvText: string, updateDuplicates: boolean = false) {
  console.log('🚀 Iniciando importação de dados Hotmart...');
  
  // Sanitizar texto completo
  const cleanText = csvText
    .replace(/\0/g, '')
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
    .replace(/\uFEFF/g, '');
  
  const lines = cleanText.split('\n').filter(line => line.trim());
  const separator = lines[0].includes(';') ? ';' : '|';
  
  console.log(`📄 Total de linhas: ${lines.length - 1}`);
  console.log(`🔧 Separador detectado: "${separator}"`);
  
  const sales = [];
  let skippedLines = 0;
  
  // Parsear CSV
  for (let i = 1; i < lines.length; i++) {
    try {
      const values = lines[i].split(separator).map(v => sanitizeText(v));
      
      if (values.length < 15) {
        skippedLines++;
        continue;
      }
      
      const nome = sanitizeText(values[12]);
      const email = sanitizeText(values[14])?.toLowerCase();
      const ddd = sanitizeText(values[15]);
      const telefone = sanitizeText(values[16]);
      const whatsapp = ddd && telefone ? `${ddd}${telefone}`.replace(/\D/g, '') : '';
      
      if (!email || !nome || email.length < 3 || nome.length < 2 || !email.includes('@')) {
        skippedLines++;
        continue;
      }
      
      sales.push({
        nome,
        email,
        whatsapp,
        produto: sanitizeText(values[0]),
        moeda: sanitizeText(values[1]),
        preco_produto: parsePrice(values[2]),
        preco_oferta: parsePrice(values[4]),
        numero_parcela: parseInt(values[8]) || 1,
        data_venda: parseDateBR(values[9]),
        data_confirmacao: parseDateBR(values[10]),
        status: sanitizeText(values[11]),
        documento: sanitizeText(values[13]),
        origem_checkout: sanitizeText(values[25]),
        tipo_pagamento: sanitizeText(values[26]),
      });
    } catch (error) {
      console.warn(`⚠️ Erro ao processar linha ${i}:`, error);
      skippedLines++;
    }
  }
  
  console.log(`✅ ${sales.length} vendas válidas encontradas`);
  console.log(`⚠️ ${skippedLines} linhas ignoradas`);
  
  // Processar em lotes de 50
  const batchSize = 50;
  const totalBatches = Math.ceil(sales.length / batchSize);
  
  let totalCreated = 0;
  let totalUpdated = 0;
  let totalSkipped = 0;
  const errors: string[] = [];
  
  for (let batchIndex = 0; batchIndex < totalBatches; batchIndex++) {
    const start = batchIndex * batchSize;
    const end = Math.min(start + batchSize, sales.length);
    const batch = sales.slice(start, end);
    
    console.log(`📦 Processando lote ${batchIndex + 1}/${totalBatches} (${batch.length} vendas)...`);
    
    try {
      const { data, error } = await supabase.functions.invoke('import-hotmart-leads', {
        body: {
          sales: batch,
          updateDuplicates
        }
      });
      
      if (error) {
        console.error('❌ Erro no lote:', error);
        errors.push(`Erro no lote ${batchIndex + 1}: ${error.message}`);
        continue;
      }
      
      totalCreated += data.created || 0;
      totalUpdated += data.updated || 0;
      totalSkipped += data.skipped || 0;
      
      if (data.errors?.length > 0) {
        errors.push(...data.errors);
      }
      
      console.log(`✓ Lote ${batchIndex + 1}: ${data.created} criados, ${data.updated} atualizados, ${data.skipped} ignorados`);
      
      // Aguardar um pouco entre lotes para não sobrecarregar
      if (batchIndex < totalBatches - 1) {
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      
    } catch (error: any) {
      console.error('❌ Erro ao processar lote:', error);
      errors.push(`Erro no lote ${batchIndex + 1}: ${error.message}`);
    }
  }
  
  const report = {
    total: sales.length,
    created: totalCreated,
    updated: totalUpdated,
    skipped: totalSkipped,
    errors: errors.slice(0, 50) // Limitar a 50 erros para não sobrecarregar
  };
  
  console.log('\n📊 RELATÓRIO FINAL:');
  console.log(`✅ ${totalCreated} leads criados`);
  console.log(`🔄 ${totalUpdated} leads atualizados`);
  console.log(`⏭️ ${totalSkipped} leads ignorados`);
  console.log(`❌ ${errors.length} erros`);
  
  return report;
}
