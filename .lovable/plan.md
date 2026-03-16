
# Plano: Atualizar ApocalypseSection com novo layout

## Mudanças principais

O HTML atualizado traz duas grandes novidades em relação à versão atual:

### 1. Casualty Cards — novo layout com logo row + stat/chart side-by-side
- **Logo row**: ícone colorido (36x36, iniciais da empresa) + nome + ticker/subtítulo + badge
- **Data row**: stat e mini-chart lado a lado (flex row) em vez de empilhados
- Card MIT sem chart (apenas stat)
- Textos ligeiramente ajustados (mais curtos)
- Rounded corners `12px` em vez de `4px`

### 2. News Clippings — substitui o headline strip antigo
- Grid de 6 cards simulando browser clips (com barra de browser: dots + URL)
- Cada card tem: ícone colorido da fonte, nome, data, headline com destaque, excerpt
- Layout grid 2-3 colunas (1 col no mobile)

### Adaptação à IDV Dark Academia
- Vermelho → gold (#c9a227) para stats, badges, acentos
- bg-card → #1c2e1e (verde floresta)
- bg-news → #162318 (verde escuro alternativo)
- cream → #f0e6d0 (parchment)
- cream-muted → #6b7d5a (muted verde)
- Ícones das empresas: manter cores originais (são logos neutros)
- Ícones das fontes de notícia: manter cores originais
- Destaques `.hl` nas headlines: gold em vez de vermelho
- Bordas hover: gold/40% em vez de red/30%
- Top line nos cards hover: gold gradient em vez de red

### Arquivo: `src/components/claudecode/ApocalypseSection.tsx`
Reescrever completamente com:

**Dados atualizados:**
- `casualties` array: adicionar campos `ticker`, `logoInitials`, `logoColor`, `hasChart`
- `newsClippings` array (novo): 6 items com `source`, `sourceInitials`, `sourceColor`, `url`, `date`, `headline`, `highlightText`, `excerpt`

**Componentes:**
- `LogoIcon` — div 36x36 com cor de fundo e iniciais
- `CasualtyCard` — novo layout (logo row → data row → detail → source)
- `NewsClip` — card com browser bar + content
- `MiniChart` — mantém igual, só usado quando `hasChart: true`
- `TickerTrack` — mantém igual

**Seção Headlines → News Grid:**
- Substituir lista de headlines por grid de NewsClip cards
- Label "Manchetes reais" com linha decorativa `::after`

**CTA e ticker:** mantêm-se iguais, apenas mantendo IDV gold/verde.
