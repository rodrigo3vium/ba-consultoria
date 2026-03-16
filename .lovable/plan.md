

# Plano: Seção "O Mundo Já Mudou" na página ClaudeCode

## Resumo

Adicionar uma nova seção entre "O que vou mostrar na prática" e "Detalhes do evento" com dados de empresas impactadas pela IA, adaptada à identidade visual Dark Academia verde-floresta já existente na página.

## Adaptação visual

Cores do HTML original → Dark Academia:
- `--red-blood/#C4372E` → `#c9a227` (gold) para acentos e destaques
- `--red-glow/#E84D43` → `#c9a227` para stats e badges
- `--bg-card/#110f0b` → `#1c2e1e` (card verde)
- `--cream/#F5F0E8` → `#f0e6d0` (parchment)
- `--cream-muted/#C4B9A5` → `#6b7d5a` (muted verde)
- `--gold-dim/#9A7A3C` → `rgba(201, 162, 39, 0.7)` (gold dim)
- Bordas vermelhas → bordas gold com mesmas opacidades
- Grid overlay vermelho → removido (já temos grain overlay global)
- Radial gradients vermelhos → gold sutil

## Conteúdo (exatamente como no HTML)

1. **Eyebrow + Título**: "Enquanto você espera" / "O mercado já está sentindo o impacto"
2. **Ticker tape**: Chegg ▼99%, Duolingo ▼82%, UiPath ▼50%, Adobe ▼30%, etc.
3. **Grid de 6 casualty cards**: Chegg, Duolingo, Stack Overflow, UiPath, Adobe/Salesforce, MIT Report — com stats, mini charts SVG, detalhes e fontes
4. **Headlines reais**: 6 manchetes de CNBC, Fortune, Gizmodo, etc.
5. **CTA bottom**: "A pergunta não é se a IA vai mudar tudo..." com botão "Garantir minha vaga"

## Arquivo: `src/pages/ClaudeCode.tsx`

- Inserir a nova seção + divisor ornamental entre a seção "Na prática" (linha ~344) e o divisor antes de "Detalhes do evento" (linha ~346)
- Manter fontes Playfair Display, Cormorant Garamond, IM Fell English
- Usar `font-mono` para labels monospace (JetBrains Mono do original → system mono)
- Mini charts SVG inline com paths idênticos ao HTML, cor gold em vez de vermelho
- Ticker animation via CSS keyframes (já existe `animate-scroll-slow` no projeto)
- Cards com hover border gold/40% (mesmo padrão dos outros cards da página)
- CTA final da seção usando `handleCTA("apocalypse")` com mesmo estilo border-only

