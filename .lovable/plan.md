

# Plano: Página de Vendas /educacao/claude-code

## Resumo

Criar uma landing page de vendas para a Masterclass ao vivo sobre Claude, seguindo o padrão visual das páginas de vendas existentes (ComoAplicarIA, IADoZero) — fundo preto, standalone (sem Header/Footer global), com CTAs direcionando para o checkout Hotmart via `buildHotmartCheckoutUrl`.

## Arquivo: `src/pages/ClaudeCode.tsx` (novo)

Página standalone com `useEffect` para body styles, usando `buildHotmartCheckoutUrl` com base URL `https://pay.hotmart.com/T104822269G` e tracking via `tracker.track`.

### Seções

1. **Hero** — Badge "Masterclass ao vivo · 25/03 às 19h", H1 impactante sobre automatizar a vida com Claude, subtítulo com proposta da live, CTA principal
2. **O que você vai aprender** — Grid de 4 cards:
   - Fundamentos do Claude e por que é diferente
   - Diferença entre Claude Chat, Claude Code e Claude Coworking
   - Como utilizar Skills e MCPs
   - Como pensar automações de forma prática
3. **O que vou mostrar na prática** — Lista com ícones:
   - Economizou +R$500 em apps replicados com Claude
   - Claude Coworking + Notion = 4h/semana economizadas
   - Apps ousados mudando a tese de negócios
   - O que a Y Combinator está dizendo sobre esse movimento
4. **Detalhes do evento** — Card destaque: data 25/03, 19h (São Paulo), Google Meet, dúvidas ao vivo
5. **CTA final** — Repetição do botão de compra
6. **Footer mínimo** — Copyright BA Consultoria

### Padrão visual

- Mesmo estilo das outras landing pages: fundo preto, gradientes sutis azul/laranja, FlickeringGrid no hero
- CTAs com `buildHotmartCheckoutUrl({ baseUrl: 'https://pay.hotmart.com/T104822269G' })`
- Tracking: `tracker.track('cta_click', { product: 'claude-code', ... })`

## Arquivo: `src/App.tsx` (modificar)

- Importar `ClaudeCode` e adicionar rota `/educacao/claude-code`

