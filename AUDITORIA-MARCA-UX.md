# Auditoria de Marca & UX - BA Consultoria

> **Data:** 2026-04-09
> **Escopo:** 38+ paginas, 40+ componentes, estilos e conteudo
> **Total de inconsistencias:** 29 (9 criticas, 11 altas, 8 medias, 1 baixa)

---

## Scorecard

| Dimensao              | Critica | Alta | Media | Baixa | Total  |
|-----------------------|---------|------|-------|-------|--------|
| 1. Identidade Visual  | 3       | 3    | 3     | 1     | **10** |
| 2. Voz & Copy         | 2       | 2    | 1     | 0     | **5**  |
| 3. Proposta de Valor  | 1       | 2    | 1     | 0     | **4**  |
| 4. Ofertas & Precos   | 1       | 1    | 1     | 0     | **3**  |
| 5. Arq. da Informacao | 2       | 3    | 2     | 0     | **7**  |
| **TOTAL**             | **9**   | **11** | **8** | **1** | **29** |

---

## Top 3 Problemas Criticos

### 1. Footer 100% quebrado + Link "BA" no header vai para 404
Problemas de navegacao basica que afetam TODOS os visitantes em TODAS as paginas. O footer e o ultimo recurso de navegacao e contato — e esta completamente inoperante. O link "BA" no header leva ao 404.
- **Arquivos:** `src/components/Footer.tsx`, `src/components/Header.tsx`

### 2. Identidade da empresa indefinida (consultoria vs escola vs tech vs agencia)
Enquanto nao houver resposta para "o que a BA faz?", qualquer refatoracao de copy sera superficial. Os 4 pilares competem entre si sem hierarquia, e 6 produtos educacionais se sobrepoem.
- **Arquivos:** `src/pages/BA.tsx`, `src/pages/Educacao.tsx`, `src/pages/Consultoria.tsx`, `src/pages/Tecnologia.tsx`, `src/pages/Servicos.tsx`

### 3. Fragmentacao visual critica (Home2, PropostaClinicaSupreme, OCaminho)
Tres paginas inteiras operam fora do design system, com fontes, cores e estilos proprios. Se um visitante chega por link direto, a experiencia e de "outro site".
- **Arquivos:** `src/pages/Home2.tsx`, `src/pages/PropostaClinicaSupreme.tsx`, `src/pages/OCaminho.tsx`

---

## Decisoes Estrategicas Pendentes

> Responder ANTES de qualquer refatoracao.

### Posicionamento
1. **Qual e o posicionamento primario da BA?** Consultoria de IA? Escola de IA? Empresa de tecnologia? Agencia? Ou tudo junto com hierarquia?
2. **Quem e o publico principal?** Solopreneurs? PMEs com 5+ pessoas? Empresas R$1-5M/ano? Todas as anteriores?
3. **Quem fala no site — Rodrigo ou BA Consultoria?** Marca pessoal ou corporativa?

### Produtos
4. **Qual a diferenca entre "IA do Zero" (R$49,90) e "Como Aplicar IA" (R$67)?** Sao o mesmo produto? Um substitui o outro?
5. **"O Caminho" ainda e um produto ativo?** Tem identidade visual e tom completamente diferentes.
6. **Existe uma escada de valor?** Qual e a progressao esperada: curso barato -> programa -> consultoria?
7. **Metodo Stark = A Revolucao?** Por que duas rotas para a mesma pagina?

### Design & Tecnico
8. **Home2 sera adotada como homepage?** Tem design completamente diferente da Home atual.
9. **Propostas comerciais devem seguir a identidade visual da BA ou podem ser customizadas por cliente?**
10. **O desconto "Black Friday" do IA do Zero e permanente?** Se sim, remover referencia a Black Friday.

### Navegacao
11. **Quais sao os itens prioritarios do menu principal?** Atualmente omite Educacao, Consultoria e Tecnologia.
12. **O footer deve espelhar o header ou ter estrutura propria?**

---

## Inventario Completo de Inconsistencias

### 1. IDENTIDADE VISUAL

#### [IV-01] CRITICA — Link "BA" no Header aponta para rota inexistente
- **Arquivos:** `src/components/Header.tsx:48`, `src/components/Header.tsx:130`
- **Problema:** O link "BA" na navegacao aponta para `/ba`, mas essa rota nao existe. A homepage esta em `/`.
- **Evidencia:** `<Link to="/ba">` no desktop (L48) e mobile (L130); em App.tsx a rota e `path="/"`
- **Impacto:** Clicar em "BA" no menu leva ao 404.
- **Recomendacao:** Mudar `to="/ba"` para `to="/"`

#### [IV-02] CRITICA — Home2.tsx usa sistema visual completamente separado
- **Arquivo:** `src/pages/Home2.tsx`
- **Problema:** Pagina alternativa com paleta de cores propria (greens/golds), fonte Cormorant Garamond (serif), e ~50+ inline styles que ignoram o design system.
- **Evidencia:** Constantes locais `C.bg = '#0e1a0f'`, `C.gold = '#c9a227'`; fonte `font-cormorant` definida inline; nenhuma CSS variable usada.
- **Impacto:** Se esta pagina esta ativa, cria experiencia visual completamente desconectada do resto do site.
- **Recomendacao:** Decidir se Home2 sera adotada (e migrar o design system) ou descartada.

#### [IV-03] CRITICA — PropostaClinicaSupreme.tsx com paleta propria e inline styles
- **Arquivo:** `src/pages/PropostaClinicaSupreme.tsx:9-20`
- **Problema:** Define constantes locais de cor (`gold = "#C6A84E"`, `goldLight = "#D4BC72"`) e usa ~200+ inline styles, Playfair Display como fonte.
- **Evidencia:** Nenhuma CSS variable ou classe Tailwind da marca utilizada; sistema visual completamente isolado.
- **Impacto:** Propostas comerciais nao refletem a identidade visual da BA.
- **Recomendacao:** Criar template de propostas padronizado usando design tokens da marca.

#### [IV-04] ALTA — OCaminho.tsx usa amber ao inves de ba-orange
- **Arquivo:** `src/pages/OCaminho.tsx`
- **Problema:** Usa `text-amber-400` e `font-serif` extensivamente ao inves dos tokens da marca.
- **Evidencia:** 10+ instancias de `text-amber-400` (L122, L133, L198, L200, L202, L219, L237, L254, L276).
- **Impacto:** Pagina tem identidade visual desconectada do restante.
- **Recomendacao:** Migrar para `text-ba-orange` e tipografia padrao.

#### [IV-05] ALTA — IADoZero.tsx mistura bg-white com tema dark
- **Arquivo:** `src/pages/IADoZero.tsx`
- **Problema:** Secoes com `bg-white` (L131, L180, L214, L305) e `text-gray-900`/`text-gray-700` em pagina que deveria seguir tema escuro.
- **Evidencia:** Cards `bg-white rounded-lg` em contexto de pagina dark; `text-gray-900` conflita com o tema.
- **Impacto:** Secoes parecem "coladas" de outro site.
- **Recomendacao:** Migrar para `bg-black/80 border-ba-blue-light/20` ou padroes escuros do design system.

#### [IV-06] ALTA — IAParaNegocios.tsx com 15+ cores hardcoded
- **Arquivo:** `src/pages/IAParaNegocios.tsx`
- **Problema:** Usa `text-red-500`, `text-blue-400`, `text-green-400`, `text-yellow-400`, e gradientes custom (`from-green-500 to-green-600`, `from-blue-400 to-blue-500`).
- **Evidencia:** Linhas 554, 558, 562, 590, 622, 639, 663, 697, 750, 762, 860.
- **Impacto:** Botoes e destaques nao seguem a paleta da marca; CTA verde parece de outro site.
- **Recomendacao:** Substituir por tokens da marca (ba-blue-light, ba-orange, etc.).

#### [IV-07] MEDIA — NotFound.tsx ignora design system
- **Arquivo:** `src/pages/NotFound.tsx`
- **Problema:** Usa `bg-gray-100`, `text-gray-600`, `text-blue-500` — cores genericas do Tailwind.
- **Impacto:** Pagina 404 parece template generico, nao parte da marca.
- **Recomendacao:** Redesenhar com identidade visual da BA.

#### [IV-08] MEDIA — Heading sizes inconsistentes entre paginas
- **Problema:** Hero h1 varia entre `text-3xl md:text-5xl` (IADoZero) e `text-5xl md:text-7xl` (BA, Consultoria). Section h2 varia entre `text-3xl md:text-4xl` e `text-4xl md:text-5xl`.
- **Evidencia:** BA.tsx L94 `text-5xl md:text-7xl`; IADoZero.tsx L73 `text-3xl md:text-5xl`; Consultoria.tsx L30 `text-5xl md:text-7xl`.
- **Impacto:** Hierarquia tipografica inconsistente enfraquece a identidade.
- **Recomendacao:** Definir escala tipografica padrao: h1=`text-5xl md:text-7xl`, h2=`text-3xl md:text-5xl`.

#### [IV-09] MEDIA — Container widths sem padrao (6 valores diferentes)
- **Problema:** `max-w-4xl` (62x), `max-w-6xl` (36x), `max-w-3xl` (31x), `max-w-5xl` (24x), `max-w-2xl` (15x), `max-w-7xl` (4x) para secoes similares.
- **Impacto:** Largura do conteudo "pula" entre secoes na mesma pagina.
- **Recomendacao:** Padronizar: hero=`max-w-6xl`, conteudo=`max-w-4xl`, grids=`max-w-6xl`.

#### [IV-10] BAIXA — Border-radius inconsistente (6 valores)
- **Problema:** Mix de `rounded-2xl`, `rounded-3xl`, `rounded-xl`, `rounded-lg` para cards similares.
- **Evidencia:** BA.tsx L586 `rounded-2xl` vs L432 `rounded-3xl`; PropostaClinicaSupreme `borderRadius: 4`.
- **Recomendacao:** Padronizar cards como `rounded-2xl`.

---

### 2. VOZ & COPY

#### [VC-01] CRITICA — 3 personas diferentes competindo no site
- **Problema:** O site alterna entre 3 vozes distintas sem logica clara:
  1. **Rodrigo (1a pessoa singular):** "Sou especialista...", "Minha consultoria" (`Consultoria.tsx` L57-60, L156)
  2. **BA Consultoria (1a pessoa plural):** "Nos somos uma empresa pro-vida" (`Consultoria.tsx` L15, `Educacao.tsx` L71, `Tecnologia.tsx` L60)
  3. **Voce direto:** "Se torne o lider do seu mercado" (`IAParaNegocios.tsx` L88)
- **Impacto:** Visitante nao sabe se esta falando com uma pessoa, uma empresa, ou lendo um anuncio.
- **Recomendacao:** Escolher voz dominante e criar guia de tom.

#### [VC-02] CRITICA — 7+ variacoes de CTA para a mesma acao (WhatsApp)
- **Problema:** Todos levam ao mesmo WhatsApp `5511999718595` mas com textos diferentes:

| CTA | Pagina | Linha |
|-----|--------|-------|
| "Falar com um especialista" | Consultoria, Educacao, Tecnologia | L43, L100, L89 |
| "Quero Agendar Minha Call" | Consultoria | L260 |
| "Agendar Demonstracao" | Tecnologia | L263 |
| "Falar com Consultor" | Educacao | L271 |
| "Fale Conosco" | Header (nao funcional) | L110 |
| "Solicitar Orcamento" | Tecnologia | L254 |
| "Quero meu diagnostico gratuito" | GoogleMeuNegocio | — |

- **Impacto:** Fragmentacao da mensagem; visitante nao sabe o que esperar ao clicar.
- **Recomendacao:** Padronizar maximo 2-3 CTAs com hierarquia clara.

#### [VC-03] ALTA — Tom oscila entre apocaliptico, tecnico e aspiracional
- **Problema:**
  - IADoZero L115: "Nos proximos 12 meses, o mundo vai se dividir" (apocaliptico)
  - MetodoStark L177: "Pare de usar IA como um Google melhorado" (confrontacional)
  - Consultoria L31: "Transforme sua Empresa" (profissional)
  - Home2: Tom "dark academia", elegante, serif fonts (aspiracional)
- **Impacto:** Visitante que navega entre paginas percebe mudanca brusca de personalidade.
- **Recomendacao:** Definir guidelines de tom (ex: "confiante mas acessivel") e aplicar em todas as paginas.

#### [VC-04] ALTA — "Black Friday 74% desconto" como oferta permanente
- **Arquivo:** `src/pages/IADoZero.tsx:70`
- **Problema:** Texto "Oferta de Black Friday com 74% de desconto" exibido como oferta corrente, sem condicional de data.
- **Impacto:** Destroi credibilidade — visitante em abril ve "Black Friday".
- **Recomendacao:** Remover referencia a Black Friday; manter desconto se desejado mas com linguagem atemporal.

#### [VC-05] MEDIA — Nomenclatura de produtos inconsistente
- **Problema:** Mesmos conceitos com nomes diferentes:
  - "Imersao" vs "Curso" vs "Treinamento" para ofertas educacionais
  - "Metodo Stark" vs "A Revolucao" (duas rotas: `/educacao/metodo-stark` e `/educacao/a-revolucao`)
  - "IA para Negocios" descrito como "Programa" em um lugar e "Assessoria" em outro
- **Recomendacao:** Criar glossario oficial de nomes de produtos.

---

### 3. PROPOSTA DE VALOR

#### [PV-01] CRITICA — Identidade da empresa ambigua (4 identidades simultaneas)
- **Problema:** BA Consultoria se posiciona simultaneamente como:
  1. **Consultoria** (`Consultoria.tsx`): "Minha Consultoria"
  2. **Escola** (`Educacao.tsx`): "Nossos Cursos"
  3. **Empresa de tecnologia** (`Tecnologia.tsx`): "Nossas Solucoes"
  4. **Agencia de servicos** (`Servicos.tsx`): 4 servicos diferentes (branding, sites, automacoes, marketing)
- **Evidencia:** Homepage `BA.tsx` L48-73 lista 4 "pilares" sem hierarquia clara.
- **Impacto:** Visitante nao consegue responder "o que a BA faz?"
- **Recomendacao:** Definir posicionamento primario e subordinar os outros.

#### [PV-02] ALTA — Promessa "sem contratar" vs "auxilia sua equipe"
- **Problema:** `Consultoria.tsx` L34 promete "Aumente seus lucros sem contratar mais gente"; `IAParaNegocios.tsx` L96 fala "auxilia voce e sua equipe na implementacao" (implica equipe existente).
- **Impacto:** Mensagens contraditorias sobre o modelo de entrega.
- **Recomendacao:** Alinhar: "otimize sua equipe atual" ou "substitua necessidade de contratar".

#### [PV-03] ALTA — Publico-alvo muda entre paginas
- **Problema:**
  - Consultoria L288: "empresas com mais de 5 pessoas"
  - IAParaNegocios L210: "empresa que fatura entre R$1-5mi/ano"
  - IADoZero: qualquer pessoa individual
  - Home2: tudo — de "captacao de leads" a "RH"
- **Impacto:** Sem segmentacao clara, marketing disperso.
- **Recomendacao:** Definir persona primaria por produto/servico.

#### [PV-04] MEDIA — Timelines de resultado divergentes
- **Problema:** Consultoria: "30 minutos" (call); IAParaNegocios: "90 dias" (ROI); IADoZero: "acesso imediato"; Tecnologia: "poucas semanas".
- **Impacto:** Expectativas desalinhadas.
- **Recomendacao:** Criar jornada temporal clara por produto.

---

### 4. OFERTAS & PRECOS

#### [OP-01] CRITICA — 6 produtos educacionais com sobreposicao e sem jornada clara
- **Problema:** Ofertas educacionais sem diferenciacao:

| Produto | Preco | Tipo | Publico |
|---------|-------|------|---------|
| IA do Zero | R$49,90 (era R$197) | Curso + prompts | Individual |
| Como Aplicar IA | R$67 | 3 aulas | Individual |
| Imersao Claude | R$97 | 3 aulas | Individual |
| IA para Negocios | ? ("Disponivel") | 12 semanas | PME |
| Metodo Stark | ? (Hotmart) | Sistemas IA | High-ticket |
| O Caminho | ? | Filosofico | ? |

- **Impacto:** Visitante nao sabe qual escolher; "IA do Zero" e "Como Aplicar IA" parecem o mesmo produto.
- **Recomendacao:** Criar escada de valor clara com diferenciacao explicita.

#### [OP-02] ALTA — WhatsApp placeholder em Proposta.tsx
- **Arquivo:** `src/pages/Proposta.tsx:227`
- **Problema:** Numero `5551999999999` (placeholder) ao inves do numero real `5511999718595`.
- **Impacto:** Cliente potencial nao consegue contato apos ver proposta.
- **Recomendacao:** Substituir pelo numero correto imediatamente.

#### [OP-03] MEDIA — Mix de transparencia de precos sem logica
- **Problema:** Cursos baratos mostram preco (R$49-97); cursos caros e consultoria escondem ("Disponivel", sem preco).
- **Impacto:** Pode gerar desconfianca no segmento B2B.
- **Recomendacao:** Definir estrategia: "ate R$X mostramos preco, acima e sob consulta" com justificativa.

---

### 5. ARQUITETURA DA INFORMACAO

#### [AI-01] CRITICA — Footer com todos os links quebrados
- **Arquivo:** `src/components/Footer.tsx:167-195`
- **Problema:** 100% dos links do footer sao `href="#"` ou apontam para ancoras inexistentes (`#sobre`, `#casos`, `#contato`).
- **Evidencia:** Linhas 167 (LinkedIn), 170 (WhatsApp), 173 (Email), 182-185 (Servicos), 192-195 (Empresa).
- **Impacto:** Footer parece abandonado; visitantes que buscam contato/info nao encontram.
- **Recomendacao:** Preencher todos os links com URLs reais.

#### [AI-02] CRITICA — Pilar "Servicos" no homepage aponta para /consultoria
- **Arquivo:** `src/pages/BA.tsx:71`
- **Problema:** O card "Servicos" na homepage tem `link: '/consultoria'` ao inves de `link: '/servicos'`.
- **Evidencia:** `{ icon: Briefcase, title: 'Servicos', ... link: '/consultoria' }`
- **Impacto:** Visitante clica em "Servicos", chega em "Consultoria" — confuso.
- **Recomendacao:** Mudar para `link: '/servicos'`.

#### [AI-03] ALTA — Navegacao principal omite 3 pilares do negocio
- **Arquivo:** `src/components/Header.tsx:46-60`
- **Problema:** Header mostra apenas: BA, Cases, Servicos, Blog. Nao inclui Educacao, Consultoria, Tecnologia — que sao 3 dos 4 pilares do negocio.
- **Impacto:** Pilares centrais so sao acessiveis via homepage ou URL direto.
- **Recomendacao:** Redesenhar navegacao para incluir todos os pilares (possivelmente com dropdown).

#### [AI-04] ALTA — Rotas de propostas inconsistentes
- **Arquivo:** `src/App.tsx:99-107`
- **Problema:** Mistura de prefixos:
  - `/proposta/dsl-car-texas` (singular)
  - `/proposta` (singular, generico)
  - `/propostas/duda-bambil` (plural, correto)
  - `/proposta-padrao` (hifen, sem prefixo)
  - `/follow-up/clinica-supreme` (prefixo diferente)
- **Recomendacao:** Padronizar tudo sob `/propostas/*`.

#### [AI-05] ALTA — Rota duplicada MetodoStark
- **Arquivo:** `src/App.tsx:77-78`
- **Problema:** Duas rotas apontam para o mesmo componente: `/educacao/a-revolucao` e `/educacao/metodo-stark`.
- **Impacto:** Confusao SEO; links internos podem usar uma ou outra; marca diluida.
- **Recomendacao:** Escolher uma, redirecionar a outra.

#### [AI-06] MEDIA — Indentacao inconsistente no App.tsx
- **Arquivo:** `src/App.tsx:103-104`
- **Problema:** Linhas 103-104 tem indentacao extra vs resto das rotas.
- **Impacto:** Codigo desorganizado dificulta manutencao.
- **Recomendacao:** Padronizar indentacao.

#### [AI-07] MEDIA — Home2 existe mas nao esta linkada
- **Arquivo:** `src/App.tsx:98`
- **Problema:** `/home-2` definida como rota mas nao acessivel de nenhuma navegacao.
- **Impacto:** Pagina orfao — se e alternativa deveria ter A/B test; se e rascunho, remover.
- **Recomendacao:** Decidir: adotar como homepage ou remover.

---

## Plano de Consolidacao

### Fase 1: Correcoes urgentes (impacto imediato, sem decisao estrategica necessaria)

- [ ] **IV-01** — Corrigir link `/ba` no Header para `/`
- [ ] **AI-02** — Corrigir link "Servicos" na homepage para `/servicos`
- [ ] **AI-01** — Preencher TODOS os links do Footer com URLs reais
- [ ] **OP-02** — Corrigir WhatsApp placeholder em `Proposta.tsx`
- [ ] **VC-04** — Remover "Black Friday" do `IADoZero.tsx`
- [ ] **AI-06** — Padronizar indentacao do `App.tsx`

### Fase 2: Decisoes estrategicas (workshop — responder as 12 perguntas acima)

- [ ] Definir posicionamento primario da BA
- [ ] Definir persona principal por produto
- [ ] Decidir: marca pessoal (Rodrigo) ou corporativa (BA)
- [ ] Definir escada de valor dos produtos educacionais
- [ ] Decidir destino de Home2, OCaminho

### Fase 3: Navegacao e arquitetura (depende da Fase 2)

- [ ] **AI-03** — Redesenhar Header com todos os pilares
- [ ] **AI-01** — Redesenhar Footer funcional
- [ ] **AI-04** — Padronizar rotas de propostas sob `/propostas/*`
- [ ] **AI-05** — Escolher rota unica para MetodoStark (redirect da outra)
- [ ] **AI-07** — Remover/arquivar paginas orfas

### Fase 4: Design system enforcement (depende da Fase 2)

- [ ] **IV-02** — Migrar Home2.tsx para design system (ou descartar)
- [ ] **IV-03** — Migrar PropostaClinicaSupreme.tsx para template padrao
- [ ] **IV-04** — Migrar OCaminho.tsx para tokens da marca
- [ ] **IV-06** — Substituir cores hardcoded em IAParaNegocios.tsx
- [ ] **IV-05** — Substituir bg-white em IADoZero.tsx
- [ ] **IV-08** — Padronizar heading sizes
- [ ] **IV-09** — Padronizar container widths
- [ ] **IV-07** — Redesenhar NotFound.tsx

### Fase 5: Copy e voz (depende da Fase 2)

- [ ] **VC-01** — Criar guia de voz (tom, persona, terminologia)
- [ ] **VC-02** — Padronizar CTAs (maximo 3 variacoes com regras claras)
- [ ] **VC-05** — Alinhar nomenclatura de produtos
- [ ] **PV-01** — Revisar copy pagina por pagina seguindo o guia
- [ ] **PV-02/PV-03** — Alinhar propostas de valor e publico-alvo entre paginas
- [ ] **OP-01** — Criar pagina comparativa de produtos educacionais
