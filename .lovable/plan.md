

## Plan: Update Full Landing Page Copy for Método Stark

### Summary
Update copy across 5 component files and 1 page file to match the provided new text. No structural/layout changes — only text content updates.

---

### 1. `src/pages/MetodoStark.tsx` — Hero + Seção 01

**Hero (lines 180-201):**
- H1 already matches. Subtitle already matches. No changes needed here.

**Seção 01 — O Mundo Se Dividiu (lines 286-414):**
- Update Grupo A description: Add "Tem a sensação de que não usa IA no seu máximo potencial." and restructure text per new copy
- Update Grupo A title text to match new copy
- Update Grupo B description: "Dominou a construção de sistemas de IA, com agentes trabalhando 24h por dia para ele e seus clientes. Consegue fazer mais, mais rápido e ganhando mais dinheiro. Não 'usa' IA, comanda um time de agentes."
- Update "difference" section: Change "não é inteligência" → keep, but change "É arquitetura" → "É quem consegue arquitetar as melhores soluções."
- Update closing paragraph to new copy about "conhecimento" and "diferença entre quem aprendeu a usar ferramentas e quem aprendeu a construir sistemas"

### 2. `src/components/claudecode/ApocalypseSection.tsx`

**Header (lines 486-504):**
- Subtitle: Update to "Empresas bilionárias estão derretendo em tempo real. Os números não mentem. Quem não se adapta à inteligência artificial está sendo engolido por quem já se adaptou."

**Casualty cards data (lines 64-151):**
- Chegg: Update `ticker` to "NYSE: CHGG", update `badge` to "Extinta", keep stat/detail as-is (already matches)
- Duolingo: Already matches
- Stack Overflow: Update `ticker` to "Prosus" (already has it), already matches
- UiPath: Already matches
- Adobe/Salesforce/ServiceNow: Already matches
- "O outro lado": Already matches

**News clippings (lines 167-240):** Already match the provided copy.

**CTA block (lines 540-586):**
- Replace H3: "Mas não está ruim para todo mundo. O dinheiro não pode simplesmente evaporar. Ele está mudando de mãos."
- Replace subtitle: "E para onde esse dinheiro está indo? Para quem aprendeu a jogar o jogo da IA como arquiteto."
- Keep button text

### 3. `src/components/metodostark/OpportunitySection.tsx`

**Header (lines 80-97):**
- Keep eyebrow "O outro lado da moeda"
- Update subtitle to: "Enquanto empresas bilionárias derretem, pessoas comuns estão construindo negócios milionários. Sozinhas, sem equipe, sem investidor. Apenas comandando um time de agentes de IA."

**CTA block (lines 173-191):**
- Update H3: "Essas pessoas não são gênios. Elas só começaram antes."
- Update text: "Se você também não quer ficar para trás, clique aqui para fazer parte do Método Stark."
- Update button text to "Fazer parte do Método Stark"

### 4. `src/components/metodostark/MechanismSection.tsx`

**Seção 03 — O Mecanismo (lines ~100-170):**
- Change statement from "Não é um curso. É uma crença." → "Não é um curso. É um Ecossistema."
- Update intro paragraph to new two-paragraph text
- Update belief card texts with subtle wording changes (remove em-dashes, update phrasing)
- Add new "From builder to builder" block before closing
- Update closing: "Essa mentalidade muda o jogo." (was "Essa mentalidade muda tudo.")

**Seção 04 — O Que É o Método Stark (lines ~180-270):**
- Update description text to new copy about "ecossistema que integra: educação, prática, templates e comunidade" and "Agentes de IA trabalhando para você desde o primeiro módulo"
- Update alphaItems text with minor wording changes

### 5. `src/components/metodostark/ClosingSection.tsx`

**Seção 05 — Para Quem É (lines 49-121):**
- Update H2: "Para quem decidiu aproveitar a segunda onda da IA"
- Update intro: "O Método STARK não foi feito para curiosos. Foi feito para quem já percebeu que o modelo antigo está condenado."
- Replace `forYouItems` with 4 new items per provided copy
- Keep "Você não precisa" but update items to ["saber programar", "ter experiência com IA"]
- Update closing: "Estar disposto a aprender a pensar como arquiteto ao invés de como usuário"

**Seção 06 — Para Quem Não É (lines 125-197):**
- Replace `notForYouItems` with single item: "Quer se tornar programador e entender o detalhe do detalhe técnico"
- Remove "atalhos/hacks/dinheiro fácil" block and "se você está procurando" text

**Seção 07 — O Que Você Recebe (lines 201-261):**
- Update intro text: "É um sistema pensado para que você saia com algo funcionando."
- Update Bônus: Change "R$20 a R$30 mil" → "R$5 a R$30 mil"

**Pricing (lines 267-362):**
- Update text to match new copy about "1 projeto de R$5.000" or "1 projeto de R$10.000" and "isso já muda completamente o seu jogo"

**Final CTA (lines 367-422):**
- Update "aprender um modelo que já está funcionando agora" → "aprender um modelo revolucionário que já está funcionando agora"
- Update button text: "Quero aprender o Método STARK e começar a criar meus sistemas de IA"

---

### Files to edit (5 files)
1. `src/pages/MetodoStark.tsx` — Seção 01 copy updates
2. `src/components/claudecode/ApocalypseSection.tsx` — Subtitle + CTA copy
3. `src/components/metodostark/OpportunitySection.tsx` — Subtitle + CTA copy
4. `src/components/metodostark/MechanismSection.tsx` — Seção 03 + 04 copy
5. `src/components/metodostark/ClosingSection.tsx` — Seções 05-07 + Pricing + Final CTA

