import { supabase } from "@/integrations/supabase/client";

export interface MappingCSVRow {
  nome: string;
  idade?: string;
  cidade_estado?: string;
  situacao_profissional?: string;
  experiencia_ia?: string;
  canal_aquisicao?: string;
  area_aplicacao?: string;
  maior_dificuldade?: string;
  nivel_organizacao?: string;
  nivel_produtividade?: string;
  objetivo_principal?: string;
  desejo_realizar?: string;
  expectativas?: string;
}

export interface MappingImportResult {
  created: number;
  updated: number;
  skipped: number;
  errors: string[];
}

const normalizeText = (text: string | undefined): string | undefined => {
  if (!text || text.trim() === '') return undefined;
  return text.trim();
};

const parseNumber = (value: string | undefined): number | undefined => {
  if (!value) return undefined;
  const num = parseInt(value);
  return isNaN(num) ? undefined : num;
};

export const importMappingCSV = async (csvText: string): Promise<MappingImportResult> => {
  const result: MappingImportResult = {
    created: 0,
    updated: 0,
    skipped: 0,
    errors: []
  };

  try {
    // Parse CSV
    const lines = csvText.split('\n').filter(line => line.trim());
    if (lines.length < 2) {
      throw new Error('CSV vazio ou inválido');
    }

    const headers = lines[0].split(',');
    console.log('📋 Headers do CSV:', headers);

    // Process each row (skip header)
    for (let i = 1; i < lines.length; i++) {
      try {
        const values = lines[i].split(',');
        
        // Map CSV columns to our structure
        // Ajustar índices baseado no CSV real
        const row: MappingCSVRow = {
          nome: values[1]?.trim() || '', // Coluna "Qual seu nome completo?"
          idade: values[2]?.trim(), // "Qual a sua idade?"
          cidade_estado: values[3]?.trim(), // "De que Cidade - Estado você é?"
          situacao_profissional: values[4]?.trim(), // "Qual a sua situação atual?"
          experiencia_ia: values[5]?.trim(), // "Quanta experiência você tem com IA..."
          canal_aquisicao: values[6]?.trim(), // "Como você me conheceu?"
          area_aplicacao: values[7]?.trim(), // "Em qual área..."
          maior_dificuldade: values[8]?.trim(), // "Qual a sua maior dificuldade..."
          nivel_organizacao: values[9]?.trim(), // "Em uma escala de 0 a 10, quanto você acredita que é uma pessoa organizada..."
          nivel_produtividade: values[10]?.trim(), // "Em uma escala de 0 a 10, quanto você é uma pessoa produtiva..."
          objetivo_principal: values[11]?.trim(), // "Complete a frase: Se eu dominasse..."
          desejo_realizar: values[12]?.trim(), // "O que você gostaria de conseguir fazer..."
          expectativas: values[13]?.trim() // "Qual a sua expectativa..."
        };

        if (!row.nome) {
          result.skipped++;
          continue;
        }

        // Find lead by name (simple match - pode melhorar com fuzzy matching)
        const { data: leads, error: leadError } = await supabase
          .from('leads')
          .select('id, nome')
          .ilike('nome', `%${row.nome}%`)
          .limit(1);

        if (leadError) {
          result.errors.push(`Erro ao buscar lead "${row.nome}": ${leadError.message}`);
          continue;
        }

        if (!leads || leads.length === 0) {
          result.errors.push(`Lead não encontrado: ${row.nome}`);
          result.skipped++;
          continue;
        }

        const leadId = leads[0].id;

        // Check if profile already exists
        const { data: existingProfile } = await supabase
          .from('lead_profiles')
          .select('id')
          .eq('lead_id', leadId)
          .maybeSingle();

        const profileData = {
          lead_id: leadId,
          idade: parseNumber(row.idade),
          cidade_estado: normalizeText(row.cidade_estado),
          situacao_profissional: normalizeText(row.situacao_profissional),
          experiencia_ia: normalizeText(row.experiencia_ia),
          canal_aquisicao: normalizeText(row.canal_aquisicao),
          area_aplicacao: normalizeText(row.area_aplicacao),
          maior_dificuldade: normalizeText(row.maior_dificuldade),
          objetivo_principal: normalizeText(row.objetivo_principal),
          desejo_realizar: normalizeText(row.desejo_realizar),
          expectativas: normalizeText(row.expectativas),
          nivel_organizacao: parseNumber(row.nivel_organizacao),
          nivel_produtividade: parseNumber(row.nivel_produtividade)
        };

        if (existingProfile) {
          // Update
          const { error: updateError } = await supabase
            .from('lead_profiles')
            .update(profileData)
            .eq('id', existingProfile.id);

          if (updateError) {
            result.errors.push(`Erro ao atualizar perfil de "${row.nome}": ${updateError.message}`);
          } else {
            result.updated++;
          }
        } else {
          // Insert
          const { error: insertError } = await supabase
            .from('lead_profiles')
            .insert(profileData);

          if (insertError) {
            result.errors.push(`Erro ao criar perfil de "${row.nome}": ${insertError.message}`);
          } else {
            result.created++;
          }
        }

      } catch (rowError: any) {
        result.errors.push(`Erro na linha ${i + 1}: ${rowError.message}`);
      }
    }

    console.log('✅ Importação de mapeamento concluída:', result);
    return result;

  } catch (error: any) {
    console.error('❌ Erro fatal na importação:', error);
    throw error;
  }
};
