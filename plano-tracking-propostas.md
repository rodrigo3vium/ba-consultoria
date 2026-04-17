# PLANO DE IMPLEMENTAÇÃO: Sistema de Tracking de Propostas e Follow-ups

## Contexto do Projeto

A BA Consultoria envia propostas comerciais personalizadas em `/propostas/*` e materiais de follow-up em `/follow-up/*`. O sistema de tracking deve permitir saber **qual lead específico** acessou qual proposta, quantas vezes, quanto tempo ficou, até onde scrollou — e usar esses dados para timing de follow-up e inteligência de pipeline.

### Arquitetura Atual

- **ba-site**: Frontend público (React 18 + Vite + TypeScript) — deploy via Lovable
- **Supabase**: Backend (PostgreSQL + Auth + Edge Functions + Realtime)
- **Tracker existente**: `src/lib/tracking.ts` — classe `LeadTracker` com events/sessions/leads via Edge Functions
- **Admin/CRM**: `src/pages/AdminCRM.tsx` + componentes em `src/components/crm/`

### Infraestrutura Existente (já deployada)

| Tabela Supabase | Uso |
|---|---|
| `leads` | Dados de leads (nome, email, whatsapp, status, score, attribution) |
| `events` | Eventos de tracking genéricos (page_view, cta_click, form_submitted) |
| `sessions` | Sessões de navegação (duration, landing_page, UTMs) |
| `lead_aliases` | Mapeamento anonymous_id → lead_id |
| `lead_interactions` | Interações manuais do admin (email, whatsapp, reunião, nota) |
| `scoring_rules` | Pontuação por tipo de evento |

| Edge Function | Uso |
|---|---|
| `track-event` | Insere eventos, resolve lead_id via lead_aliases, calcula score |
| `identify-lead` | Cria/encontra lead, cria alias, backfill de eventos anteriores |
| `session-heartbeat` | Atualiza duração da sessão |

### Schema Já Projetado (NÃO aplicado ainda)

O arquivo `proposal-tracking-schema.sql` na raiz do repo contém:
- 3 enums: `proposal_status`, `follow_up_type`, `tracking_event_type`
- 3 tabelas: `proposals`, `follow_ups`, `page_events`
- Trigger `handle_first_view` (auto-preenche `viewed_at`, muda status para 'viewed')
- Views: `v_proposal_analytics`, `v_pipeline_summary`
- Function `get_hot_proposals()` para identificar leads quentes
- Políticas RLS

### Problema Central: Identificação do Lead

As propostas são páginas públicas sem login. O tracker genérico exige consentimento (LGPD) e formulário para identificar o lead. Para propostas B2B enviadas diretamente, precisamos de outro mecanismo.

**Solução: Token na URL.** O admin gera um link com token único por lead:
```
https://baconsultoria.com.br/propostas/wesley-sardou?t=xK4m9pLQ
```
Quando a página carrega com `?t=`, o sistema resolve o token → identifica o lead → registra o page_view vinculado.

---

## ETAPA 1: Schema do Banco de Dados

### Objetivo
Aplicar o schema de propostas no Supabase, com adições para suportar tokens.

### Ações

1. **Modificar `proposal-tracking-schema.sql`** antes de aplicar:

   Adicionar à tabela `proposals`:
   ```sql
   lead_id  UUID REFERENCES leads(id) ON DELETE SET NULL,  -- vínculo com CRM
   token    TEXT UNIQUE,                                    -- token para URL rastreável
   ```
   ```sql
   CREATE INDEX idx_proposals_token ON proposals(token);
   CREATE INDEX idx_proposals_lead ON proposals(lead_id);
   ```

2. **Rodar o schema** no SQL Editor do Supabase

3. **Regenerar types** do Supabase para que `proposals`, `follow_ups` e `page_events` apareçam em `src/integrations/supabase/types.ts`

4. Validar com dados de teste (bloco SAMPLE DATA do schema)

### Resultado
Tabelas `proposals`, `follow_ups`, `page_events` disponíveis. Trigger `handle_first_view` operacional. Views de analytics funcionando.

---

## ETAPA 2: Edge Function — `track-proposal-event`

### Objetivo
Criar endpoint que recebe eventos de tracking de propostas, sem depender de consent do tracker genérico.

### Arquivo
`supabase/functions/track-proposal-event/index.ts`

### Padrões a seguir
Copiar structure de `supabase/functions/track-event/index.ts`: CORS com `ALLOWED_ORIGINS`, `createClient` com `SUPABASE_SERVICE_ROLE_KEY`.

### Input (POST)
```json
{
  "token": "xK4m9pLQ",
  "event_type": "pageview",
  "event_data": {},
  "session_id": "uuid",
  "user_agent": "...",
  "referrer": "...",
  "device_type": "mobile"
}
```

### Lógica
1. Resolver `token` → buscar em `proposals` (id, slug, lead_id, client_name)
2. Determinar `page_type` ('proposal' ou 'follow_up') e IDs
3. Inserir em `page_events` com dados enriquecidos (IP, device, etc.)
4. O trigger `handle_first_view` cuida automaticamente de:
   - Preencher `proposals.viewed_at` na primeira visualização
   - Mudar status de 'sent' para 'viewed'
5. Retornar `{ success, proposal_id, first_view: boolean }`

### Output
```json
{ "success": true, "proposal_id": "uuid", "first_view": true }
```

---

## ETAPA 3: Hook React — `useProposalTracking`

### Objetivo
Hook reutilizável que lê o token da URL e envia o evento de tracking.

### Arquivo
`src/hooks/useProposalTracking.ts`

### Implementação

```typescript
import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

export function useProposalTracking(pageName: string) {
  const [searchParams] = useSearchParams();
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const token = searchParams.get('t');
    if (!token) return; // sem token = visita anônima, sem tracking

    const sessionId = sessionStorage.getItem('_session_id') || crypto.randomUUID();

    supabase.functions.invoke('track-proposal-event', {
      body: {
        token,
        event_type: 'pageview',
        event_data: { page_name: pageName },
        session_id: sessionId,
        user_agent: navigator.userAgent,
        referrer: document.referrer,
        device_type: /Mobile|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop'
      }
    }).catch(err => console.warn('Proposal tracking failed:', err));
  }, []);
}
```

### Decisões de design
- **useRef guard**: Evita double-fire no React 18 StrictMode
- **Independente do consent**: Fala direto com `track-proposal-event`, não passa pelo `tracker.track()` que exige consent. Para B2B com link enviado diretamente, o legítimo interesse justifica
- **Sem token = sem tracking**: URLs sem `?t=` continuam funcionando normalmente, apenas sem tracking
- **Reutiliza session_id**: Se o tracker genérico já criou um, usa o mesmo

---

## ETAPA 4: Adicionar Hook às Páginas

### Objetivo
Instrumentar todas as páginas de proposta e follow-up com o hook.

### Arquivos a modificar (10 páginas)

| Arquivo | Rota | pageName |
|---------|------|----------|
| `src/pages/Proposta.tsx` | `/proposta` | "Proposta Geral" |
| `src/pages/PropostaPadrao.tsx` | `/proposta-padrao` | "Proposta Padrão" |
| `src/pages/PropostaDSLCarTexas.tsx` | `/proposta/dsl-car-texas` | "Proposta DSL Car Texas" |
| `src/pages/PropostaWesleySardou.tsx` | `/propostas/wesley-sardou` | "Proposta Wesley Sardou" |
| `src/pages/PropostaClinicaSupreme.tsx` | `/propostas/clinica-supreme` | "Proposta Clínica Supreme" |
| `src/pages/PropostaDudaBambil.tsx` | `/propostas/duda-bambil` | "Proposta Duda Bambil" |
| `src/pages/PropostaDanielleSena.tsx` | `/propostas/danielle-sena` | "Proposta Danielle Sena" |
| `src/pages/PropostaGiuliaSalvatora.tsx` | `/propostas/giulia-salvatore` | "Proposta Giulia Salvatore" |
| `src/pages/PropostaMonique.tsx` | `/propostas/monique-karasek` | "Proposta Monique Karasek" |
| `src/pages/FollowUpClinicaSupreme.tsx` | `/follow-up/clinica-supreme` | "Follow-Up Clínica Supreme" |

### Mudança por página (2 linhas)
```typescript
// Adicionar import
import { useProposalTracking } from "@/hooks/useProposalTracking";

// Dentro do componente, antes do return
useProposalTracking("Proposta Wesley Sardou");
```

---

## ETAPA 5: Admin — Geração de Links com Token

### Objetivo
Permitir que o admin gere links rastreáveis pelo CRM.

### Arquivo a modificar
`src/components/crm/LeadDetailsModal.tsx`

### Nova seção: "Links de Proposta"

Adicionar após a seção de dados pessoais:

1. **Listar links existentes** do lead:
   - Query `proposals` WHERE `lead_id = lead.id`
   - Exibir: slug, URL completa com token, open_count (via page_events), last_viewed_at

2. **Botão "Gerar Link de Proposta":**
   - Select com rotas de proposta disponíveis
   - Ao clicar: gera token de 8 chars (`crypto.randomUUID().slice(0, 8)`), insere em `proposals` com `lead_id`, `slug`, `token`, `status: 'sent'`, `sent_at: now()`
   - Exibe URL completa com botão de copiar: `https://baconsultoria.com.br/propostas/slug?t=TOKEN`

### Nova seção: "Atividade na Proposta"

Adicionar após "Histórico de Interações":

1. Query `page_events` via `proposal_id` (das proposals vinculadas ao lead)
2. Timeline: event_type, data/hora, device, tempo na página
3. Badge especial para primeiro acesso
4. Métricas resumidas (total de views, último acesso) usando `v_proposal_analytics`

---

## ETAPA 6: Notificações em Tempo Real

### Objetivo
Alertar quando um lead acessa uma proposta, especialmente leads "quentes".

### Opção A: Supabase Edge Function + Database Webhook (recomendada)

1. Criar Edge Function `notify-proposal-view`:
   - Trigger no INSERT de `page_events` WHERE `event_type = 'pageview'`
   - Busca dados da proposta (client_name, value, status)
   - Conta acessos anteriores
   - Envia notificação via Evolution API (WhatsApp) ou Telegram

2. Mensagem:
   ```
   PROPOSTA ACESSADA

   Cliente: Supreme Clínica
   Proposta: /propostas/supreme-clinica
   Acesso: 3a visualização
   Horário: 14:32 (há 2 min)
   Enviada há: 3 dias
   Device: Mobile

   Lead quente — considere ligar agora.
   ```

3. Regras de throttle:
   - Sempre notificar no 1o acesso
   - 2o+ acesso: apenas se passou >1h desde última notificação
   - Sempre notificar se 3+ acessos em 48h (lead quente — usar `get_hot_proposals()`)

### Opção B: n8n Webhook (alternativa)
- Trigger chama webhook do n8n que processa e envia
- Mais fácil de editar visualmente, mas depende do n8n estar online

---

## ETAPA 7: Tracking Avançado (Client-Side)

### Objetivo
Capturar dados de engajamento além do pageview.

### Componente: `ProposalTracker.tsx`
`src/components/ProposalTracker.tsx` — Client Component incluído nas páginas.

### Eventos a capturar

1. **Scroll Depth**: Intersection Observer com sentinelas em 25/50/75/100%. Cada threshold dispara uma vez por sessão (`scroll_25`, `scroll_50`, `scroll_75`, `scroll_100`)

2. **Tempo na página**: Timer que incrementa a cada segundo. A cada 15s, envia `time_update` com `{ seconds: N }`. Pausa quando aba não visível (`visibilitychange`). No `beforeunload`, envia tempo final

3. **Clique em seções**: Detecta cliques em `[data-section]`. Envia `click_section` com `{ section: "pricing" }`

4. **Exit**: No `beforeunload`, envia `exit` com tempo total e scroll máximo

### Envio
- `navigator.sendBeacon` para exit/beforeunload
- `fetch` com `keepalive: true` para os demais
- Batch a cada 5s para reduzir requests
- Endpoint: Edge Function `track-proposal-event`

---

## ETAPA 8: Pixels de Remarketing

### Objetivo
Meta Pixel e Google Tag nas páginas de proposta para remarketing.

### Eventos customizados
- `ProposalViewed` (slug, service_type, value)
- `ProposalScrolledToPrice` (seção de investimento)
- `FollowUpViewed` (slug, sequence_number, type)

### Públicos de remarketing (configurar no Meta Ads Manager)
- **Proposta Aberta (7d)**: `ProposalViewed` nos últimos 7 dias
- **Proposta Quente**: `ProposalViewed` 2+ vezes em 14 dias
- **Viu Preço**: `ProposalScrolledToPrice`
- **Follow-up Aberto**: `FollowUpViewed` sem conversão
- **Excluir Convertidos**: Lista de clientes fechados

---

## ORDEM DE EXECUÇÃO

| # | Etapa | Depende de | Prioridade |
|---|-------|-----------|------------|
| 1 | Schema no Supabase | — | ALTA |
| 2 | Edge Function `track-proposal-event` | Etapa 1 | ALTA |
| 3 | Hook `useProposalTracking` | Etapa 2 | ALTA |
| 4 | Adicionar hook às 10 páginas | Etapa 3 | ALTA |
| 5 | Admin: geração de links + atividade no CRM | Etapa 1 | ALTA |
| 6 | Notificações (WhatsApp/Telegram) | Etapa 2 | MÉDIA |
| 7 | Tracking avançado (scroll, tempo, cliques) | Etapa 2 | MÉDIA |
| 8 | Pixels de remarketing | Etapa 4 | BAIXA |

**Etapas 1-5 formam o MVP** — já permite saber qual lead abriu qual proposta e quando.
Etapas 6-8 são melhorias incrementais.

### Por que essa ordem?
- Banco primeiro (sem tabelas, nada funciona)
- Edge function (receptor de eventos precisa existir antes do emissor)
- Hook + páginas (client-side que envia pro servidor)
- Admin UI (visualizar os dados que estão fluindo)
- Notificações e tracking avançado (valor adicional sobre a base)
- Remarketing por último (depende de tudo funcionando + configuração externa)

---

## ARQUIVOS CRÍTICOS

| Arquivo | Ação |
|---------|------|
| `proposal-tracking-schema.sql` | Modificar (add lead_id, token) e aplicar no Supabase |
| `src/integrations/supabase/types.ts` | Regenerar após migration |
| `supabase/functions/track-proposal-event/index.ts` | Criar (nova edge function) |
| `supabase/functions/track-event/index.ts` | Referência (copiar patterns de CORS) |
| `src/hooks/useProposalTracking.ts` | Criar (novo hook) |
| `src/pages/Proposta*.tsx` + `FollowUp*.tsx` | Modificar (adicionar hook — 10 arquivos) |
| `src/components/crm/LeadDetailsModal.tsx` | Modificar (seções de links e atividade) |

---

## FLUXO COMPLETO (visão end-to-end)

```
Admin (CRM)                          Lead (Browser)
    |                                      |
    |-- Gera token para lead+proposta      |
    |-- Envia link via WhatsApp            |
    |                                      |
    |                            Clica no link
    |                            /propostas/slug?t=TOKEN
    |                                      |
    |                            Hook lê ?t=TOKEN
    |                            Chama track-proposal-event
    |                                      |
    |                            Edge Function:
    |                            - Resolve token → proposal + lead
    |                            - Insere page_events
    |                            - Trigger atualiza viewed_at/status
    |                                      |
    |<-- Notificação WhatsApp -------------|
    |    "Wesley abriu a proposta!"        |
    |                                      |
    |-- Abre CRM → vê atividade           |
    |-- Decide timing do follow-up         |
```

---

## NOTAS DE DESIGN

- As páginas de proposta mantêm o padrão visual **Dark Premium** existente (fundo #0A0A0A, dourado, Playfair Display + DM Sans)
- O tracking é **invisível para o lead** — sem banner de cookies (tracking próprio server-side via token, não via cookies de terceiros)
- Para os pixels de remarketing (Meta/Google), avaliar necessidade de banner de consentimento
- **Performance**: o hook de tracking não bloqueia a renderização (fire-and-forget com `.catch()`)
- **URLs sem token continuam funcionando** — apenas sem tracking. Não quebra links existentes
- **Tokens são curtos** (8 chars) para não poluir a URL visualmente
