

# Plano: Criar página /proposta/dsl-car-texas

## Resumo
Criar uma nova página dedicada à proposta comercial da DSL Car Texas, mantendo **exatamente** a IDV do HTML fornecido (tons de gold/cream sobre fundo escuro `#0a0a0a`), sem adaptar para Dark Academia.

## Arquivos

### 1. Criar `src/pages/PropostaDSLCarTexas.tsx`
Página standalone (sem Header/Footer global, com `useEffect` para override do body background como a Proposta existente). Conteúdo fiel ao HTML:

- **Hero**: Badge "Proposta Exclusiva", H1 "Estrutura para escalar sem perder controle", subtítulo sobre DSL Car Texas, meta info (proponente, cliente)
- **Sobre (Who)**: Grid avatar RA + texto + 4 stats (R$80M, 100+, R$500K, 5x)
- **Contexto**: Callout box com borda esquerda gold, 3 parágrafos sobre onde a DSL está hoje
- **Diagnóstico**: Grid 2 colunas — Pontos Fortes (green accent `#6ba87a`) e Gargalos (red accent `#a86b6b`), listas com ícones distintos
- **Objetivo**: Grid de 7 cards numerados (01-07)
- **Investimento**: 2 pricing cards — Opção 1 (R$6.000) e Opção 2 featured (R$10.000 + R$1.000/mês), com urgency badges, entregáveis
- **CTA**: Texto personalizado para Guilherme + botão "Falar com Rodrigo"
- **Footer**: "BA Consultoria © 2026 — Proposta válida por 7 dias"

Toda a estilização via Tailwind inline + CSS custom properties idênticas ao HTML (`--bg-dark: #0a0a0a`, `--gold: #c8956c`, `--cream: #f5efe6`, etc.), usando classes inline e `style` props para manter fidelidade total.

### 2. Atualizar `src/App.tsx`
- Importar `PropostaDSLCarTexas`
- Adicionar rota: `<Route path="/proposta/dsl-car-texas" element={<PropostaDSLCarTexas />} />`
- Posicionar **antes** da rota `/proposta` para evitar conflito

## Detalhes técnicos
- Componente standalone com `useEffect` para `document.body.style` overrides (background, color)
- Cleanup no return do useEffect
- Animações CSS (`fadeUp`, `fadeDown`, `pulse-dot`) via `@keyframes` em tag `<style>` inline ou Tailwind `animate-`
- Fontes: Playfair Display + DM Sans (já importadas no projeto)
- Responsive: grid 1col em mobile para diag-columns, pricing-cards, who-grid, del-grid; timeline vertical em mobile

