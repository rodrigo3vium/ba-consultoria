import rodrigoPhoto from "@/assets/founders/rodrigo-albuquerque.webp";
import diegoBarretoPhoto from "@/assets/mentors/diego-barreto.webp";
import pedroSommaPhoto from "@/assets/mentors/pedro-somma.webp";
import vaboPhoto from "@/assets/mentors/vabo.webp";
import joaoOliverioPhoto from "@/assets/mentors/joao-oliverio.webp";
import joseDiogoPhoto from "@/assets/mentors/jose-diogo.webp";
import PropostaLayout from "@/components/pb/PropostaLayout";
import SectionHeader from "@/components/pb/SectionHeader";
import StratCard from "@/components/pb/StratCard";

const mentors = [
  { name: "Diego Barreto", role: "CEO - iFood", photo: diegoBarretoPhoto, bio: 'Autor do best-seller "Nova Economia," lidera a expansão e inovação no iFood.' },
  { name: "Pedro Somma", role: "Ex-COO - 99 Taxi", photo: pedroSommaPhoto, bio: "Papel fundamental na expansão e operação da 99, consolidando-a como líder em mobilidade." },
  { name: "Luis Vabo Jr.", role: "Ex-diretor - Stone", photo: vaboPhoto, bio: "Empreendedor serial, investidor e autor de 'Falar em público é para você!'." },
  { name: "João Olivério", role: "CEO - Sales As A System", photo: joaoOliverioPhoto, bio: "Especialista em vendas, Country Manager da Apollo.io e mentor no G4 Sales." },
  { name: "José Diogo C. Rodrigues", role: "CMO Latam - Tinder", photo: joseDiogoPhoto, bio: "Experiência em Brand Marketing na Nike, Red Bull e atualmente Tinder Latam & Canadá." },
];

const diagnosticCards = [
  { flag: "CRÍTICO", title: "CRM desalinhado com a operação real", text: "Os sistemas tradicionais não foram pensados para uma operação médica/estética com múltiplas especialidades, protocolos complementares, histórico longo de pacientes e jornadas não-lineares. O Pipedrive virou um Frankenstein que a equipe não preenche." },
  { flag: "CRÍTICO", title: "429 tarefas/dia no comercial", text: "Dependência excessiva de esforço humano em tarefas mecânicas. Hoje, o time copia, cola, lembra, preenche e executa manualmente — exatamente o tipo de trabalho que pode e deve ser automatizado." },
  { flag: "CRÍTICO", title: "Base grande sem inteligência acionável", text: "~30 mil pacientes desde 2016, mas grande parte desse valor fica \"parada\" — sem resgate estruturado, sem priorização inteligente e sem personalização real de follow-up. Nenhum CRM conseguiu migrar por completo." },
  { flag: "CRÍTICO", title: "Receita perdida no resgate", text: "Pacientes que receberam protocolos de 10+ itens e não voltaram para concluir. Sem régua de reativação personalizada, esse dinheiro fica na mesa. Converter 1–2% disso já mudaria o faturamento mensal." },
  { flag: "CRÍTICO", title: "Cross-sell entre especialidades travado", text: "A paciente da dermatologia que menciona queda de libido não é conectada automaticamente à nutrologia. A da nutrologia que emagrece não é acionada para a dermatologia estética. Depende de pessoas pensando — e elas têm 429 tarefas." },
  { flag: "ATENÇÃO", title: "Falta de documentação extensiva", text: "Para que IA opere bem, não basta ter ferramenta. É preciso organizar contexto: especialidades, médicos, protocolos, tecnologias, regras comerciais, etapas da jornada e lógica de encaminhamento interno. Hoje isso não existe de forma estruturada." },
];

const comparisonRows = [
  { dim: "Follow-up de pacientes", old: "Manual, copia-cola, esquecido", now: "Automatizado por IA com contexto individual" },
  { dim: "Cross-sell entre especialidades", old: "Depende da memória humana", now: "Gatilhos automáticos baseados em transcrição" },
  { dim: "Resgate de pacientes inativos", old: "Não existe de forma estruturada", now: "Régua inteligente ativa por segmento" },
  { dim: "CRM", old: "Genérico e subutilizado", now: "Customizado para o fluxo real da clínica" },
  { dim: "Base de dados (~30k)", old: "Presa em sistema legado", now: "Migrada, limpa e acionável" },
  { dim: "Transcrição de consultas", old: "Não existe", now: "IA transcreve + extrai insights comerciais" },
  { dim: "Comunicação com paciente", old: "Régua genérica por persona", now: "Personalização individual em escala" },
  { dim: "Inteligência para closers", old: "Nenhuma informação prévia", now: "Contexto do paciente disponível no fechamento" },
];

const phases = [
  {
    tag: "Fase 1 — Diagnóstico + Engenharia de Contexto",
    title: "Entender a operação antes de construir qualquer coisa",
    desc: "Antes de automatizar, precisamos que a IA entenda profundamente o universo da Supreme. Vamos mapear a operação real, documentar o contexto da clínica e definir as prioridades de implementação.",
    items: [
      "Mapeamento das especialidades, linhas de receita e lógica de atendimento",
      "Documentação extensiva: médicos, protocolos, tecnologias, preços e regras de encaminhamento",
      "Mapeamento do fluxo completo do paciente (da captação ao pós-protocolo)",
      "Priorização dos primeiros casos de uso por impacto × facilidade",
    ],
    note: "Essa etapa é decisiva. Sem isso, qualquer automação futura vira improviso.",
  },
  {
    tag: "Fase 2 — MVP no Ar",
    title: "Primeiro protótipo funcional rodando na operação",
    desc: "Com o diagnóstico feito, colocamos no ar o primeiro protótipo funcional — simples, customizado para a Supreme e focado no caso de uso que gera mais impacto imediato na receita.",
    items: [
      "Protótipo funcional do caso de uso prioritário (definido na Fase 1)",
      "Validação com a equipe no dia a dia real da clínica",
      "Ajustes rápidos baseados em feedback da operação",
    ],
    note: "O objetivo é ter algo útil rodando — não perfeito, mas funcional e gerando resultado.",
  },
  {
    tag: "Fase 3 — Substituição da Stack Atual",
    title: "Migração e consolidação da nova estrutura operacional",
    desc: "Com o MVP validado, avançamos para substituir gradualmente as ferramentas atuais que não atendem a operação — migrando dados, consolidando processos e expandindo as automações para novos casos de uso.",
    items: [
      "Migração da base de dados e consolidação do histórico de pacientes",
      "Transição gradual das ferramentas atuais para a nova estrutura",
      "Expansão para novos casos de uso priorizados (resgate, cross-sell, follow-up, etc.)",
      "Rotina contínua de evolução e ajuste — enquanto a parceria existir, a estrutura evolui",
    ],
    note: "A substituição é gradual e segura — nada é desligado até a nova estrutura estar validada.",
  },
];

const PropostaClinicaSupreme = () => {
  return (
    <PropostaLayout cliente="Clínica Supreme" projeto="Arquitetura de Receita" data="Março 2026">

      {/* ========== SOBRE ========== */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <SectionHeader
          idx="// 01"
          label="Sobre"
          headline="Quem está por trás desta proposta"
        />

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 items-start">
          <div className="overflow-hidden border border-pb-grid-strong aspect-square">
            <img
              loading="lazy"
              src={rodrigoPhoto}
              alt="Rodrigo Albuquerque"
              className="w-full h-full object-cover"
              style={{ filter: "grayscale(100%) contrast(1.1) brightness(0.85)" }}
            />
          </div>
          <div className="space-y-5">
            <p className="font-body text-pb-ink-soft leading-relaxed">
              Rodrigo Albuquerque investiu meio milhão de reais em mentoria com alguns dos maiores empreendedores do Brasil. Liderou R$80 milhões em vendas anuais e compilou na BA Consultoria o aprendizado extraído de mais de 100 empresas que receberam consultoria.
            </p>
            <p className="font-body text-pb-ink-soft leading-relaxed">
              A BA Consultoria une consultoria estratégica, execução de marketing, automação com IA e inteligência comercial — tudo focado em gerar retorno financeiro real e escalável.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { num: "+R$130M", label: "gerados em vendas" },
                { num: "100+", label: "consultorias realizadas" },
                { num: "+7", label: "países atendidos" },
                { num: "+54", label: "avaliações 5 estrelas" },
              ].map((s) => (
                <StratCard key={s.num}>
                  <div className="font-display text-pb-cyan text-2xl leading-none mb-1">{s.num}</div>
                  <div className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">{s.label}</div>
                </StratCard>
              ))}
            </div>
          </div>
        </div>

        <div className="border border-pb-grid-strong bg-pb-void-card p-5">
          <div className="flex flex-wrap gap-8">
            {[
              { label: "Preparado para", value: "Dayana Dornelas" },
              { label: "Preparado por", value: "Rodrigo Albuquerque" },
              { label: "Data", value: "Março 2026" },
              { label: "Ciclo inicial", value: "90 dias" },
            ].map((m) => (
              <div key={m.label}>
                <p className="font-mono text-[9px] uppercase tracking-mono-wide text-pb-ink-muted mb-1">{m.label}</p>
                <p className="font-display text-pb-cyan text-base leading-tight">{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========== REFERÊNCIAS ========== */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <SectionHeader
          idx="// 02"
          label="Referências"
          headline="Nossos Mentores e Professores"
          sub="Aprendemos diretamente com alguns dos maiores líderes do mercado brasileiro."
          align="center"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {mentors.map((m) => (
            <StratCard key={m.name} className="text-center p-6">
              <div className="w-16 h-16 overflow-hidden border border-pb-grid-strong mx-auto mb-4">
                <img
                  loading="lazy"
                  src={m.photo}
                  alt={m.name}
                  className="w-full h-full object-cover"
                  style={{ filter: "grayscale(100%) contrast(1.1) brightness(0.85)" }}
                />
              </div>
              <div className="font-display text-pb-ink text-sm uppercase leading-tight mb-1">{m.name}</div>
              <div className="font-mono text-[9px] uppercase tracking-mono-wide text-pb-cyan mb-2">{m.role}</div>
              <div className="font-body text-pb-ink-muted text-xs leading-relaxed">{m.bio}</div>
            </StratCard>
          ))}
        </div>
      </div>

      {/* ========== CONTEXTO ========== */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <SectionHeader
          idx="// 03"
          label="Contexto"
          headline="A Supreme como operação"
        />

        <div className="border border-pb-grid-strong bg-pb-void-card p-8 space-y-5">
          <p className="font-body text-pb-ink-soft text-sm leading-relaxed">
            A Supreme é uma clínica médica multidisciplinar com posicionamento premium, fundada pela Dra. Maria Lígia Mendonça (dermatologista e mentora de médicos em todo o Brasil) e pelo Dr. Arthur Rocha (nutrologia avançada e responsável técnico), com operação em Goiânia e um time de aproximadamente 10 médicos atuando de forma integrada.
          </p>
          <p className="font-body text-pb-ink-soft text-sm leading-relaxed">
            A clínica reúne dermatologia e estética avançada, nutrologia, vascular, blefaroplastia, transplante capilar, ginecologia íntima, fisioterapia especializada e tecnologias de ponta como Fotona 5D, Morpheus, Sofwave, Liftera 2, Oligio X, Lipo AI e mais de 20 plataformas — uma operação naturalmente complexa, com jornadas de paciente não-lineares e múltiplas oportunidades de cross-sell.
          </p>
          <p className="font-body text-pb-ink-soft text-sm leading-relaxed">
            Em operações como essa, o desafio deixa de ser apenas captar pacientes. O ponto crítico passa a ser <strong className="text-pb-ink font-medium">organizar dados de forma útil, transformar interações em inteligência comercial, garantir follow-up consistente, criar personalização em escala</strong> e, acima de tudo, estruturar processos simples o suficiente para que a equipe realmente use.
          </p>
          <p className="font-body text-pb-ink-soft text-sm leading-relaxed">
            O principal gargalo identificado não é ausência de esforço da equipe — é a limitação estrutural dos sistemas atuais para atender a realidade da clínica.
          </p>
        </div>
      </div>

      {/* ========== DIAGNÓSTICO ========== */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <SectionHeader
          idx="// 04"
          label="Diagnóstico"
          headline="Os pontos críticos mapeados"
          sub="Com base na nossa conversa, estes são os gargalos que estão impedindo a Supreme de operar na sua capacidade máxima de receita."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {diagnosticCards.map((c) => (
            <StratCard key={c.title}>
              <p className="font-mono text-[9px] uppercase tracking-mono-wide text-pb-red mb-3">{c.flag}</p>
              <h3 className="font-display uppercase text-pb-ink text-base leading-tight mb-3">{c.title}</h3>
              <p className="font-body text-pb-ink-soft text-xs leading-relaxed">{c.text}</p>
            </StratCard>
          ))}
        </div>
      </div>

      {/* ========== VISÃO ========== */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <SectionHeader
          idx="// 05"
          label="Visão"
          headline="Para onde estamos indo"
          sub="O objetivo não é entregar mais um sistema. É construir — junto com você — a estrutura operacional que a Supreme precisa e que nenhuma software house entregaria, porque elas não entendem o processo da clínica."
        />

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left font-mono text-[9px] uppercase tracking-mono-wide text-pb-ink-muted border-b border-pb-grid-strong">Dimensão</th>
                <th className="p-4 text-left font-mono text-[9px] uppercase tracking-mono-wide text-pb-ink-muted border-b border-pb-grid-strong">Hoje</th>
                <th className="p-4 text-left font-mono text-[9px] uppercase tracking-mono-wide text-pb-ink-muted border-b border-pb-grid-strong">Com a implementação</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((r) => (
                <tr key={r.dim} className="border-b border-pb-grid-strong last:border-0">
                  <td className="p-4 font-body text-pb-ink-soft text-sm font-medium">{r.dim}</td>
                  <td className="p-4 font-body text-pb-red text-sm">{r.old}</td>
                  <td className="p-4 font-body text-pb-cyan text-sm">{r.now}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ========== PLANO DE IMPLEMENTAÇÃO ========== */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <SectionHeader
          idx="// 06"
          label="Plano de Implementação"
          headline="Três fases, resultado incremental"
          sub="Cada fase entrega valor imediato enquanto constrói a base para a próxima. Sem esperar 5 meses por um protótipo — resultados desde as primeiras semanas."
        />

        <div className="space-y-4">
          {phases.map((phase) => (
            <StratCard key={phase.tag}>
              <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">{phase.tag}</p>
              <h3 className="font-display uppercase text-pb-ink text-xl leading-tight mb-4">{phase.title}</h3>
              <p className="font-body text-pb-ink-soft text-sm leading-relaxed mb-5">{phase.desc}</p>
              <ul className="space-y-3 mb-5">
                {phase.items.map((item) => (
                  <li key={item} className="font-body text-pb-ink-soft text-sm leading-relaxed flex gap-2">
                    <span className="text-pb-cyan shrink-0 mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="font-mono text-[10px] text-pb-ink-muted italic">{phase.note}</p>
            </StratCard>
          ))}
        </div>
      </div>

      {/* ========== ALINHAMENTO DE EXPECTATIVAS ========== */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <SectionHeader
          idx="// 07"
          label="Alinhamento de Expectativas"
          headline="O que esta proposta não é"
          sub="Para evitar qualquer ruído, desde o início:"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Não é uma software house", text: "Não vamos levar 5 meses para entregar um protótipo. A construção é progressiva, com resultados desde a primeira semana." },
            { title: "Não é um projeto fechado", text: 'Não é "paga X e recebe Y no final". É co-construção contínua, com entregas incrementais e priorização por impacto real.' },
            { title: "Não é troca de CRM genérico", text: "Não vamos substituir o Pipedrive por outro Frankenstein. A proposta é criar algo simples, personalizado e aderente à realidade da Supreme." },
          ].map((c) => (
            <StratCard key={c.title}>
              <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-red mb-3">✕ {c.title}</p>
              <p className="font-body text-pb-ink-soft text-sm leading-relaxed">{c.text}</p>
            </StratCard>
          ))}
        </div>
      </div>

      {/* ========== INVESTIMENTO ========== */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <SectionHeader
          idx="// 08"
          label="Investimento"
          headline="Duas formas de trabalhar juntos"
          sub="A escolha depende de quanto a equipe interna vai participar ativamente da construção versus quanto vocês preferem que eu acelere a execução."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <StratCard>
            <p className="font-mono text-[9px] uppercase tracking-mono-wide text-pb-ink-muted mb-2">Opção 1</p>
            <h3 className="font-display uppercase text-pb-ink text-lg leading-tight mb-3">Consultoria + Direcionamento</h3>
            <p className="font-body text-pb-ink-muted text-xs leading-relaxed mb-5">
              Eu diagnostico, priorizo e direciono. A equipe da Supreme executa com meu acompanhamento.
            </p>
            <div className="mb-1">
              <span className="font-display text-pb-cyan text-[clamp(36px,4vw,52px)] leading-none">R$ 5.000</span>
            </div>
            <p className="font-mono text-[10px] text-pb-ink-muted mb-6">por mês · ciclo mínimo de 90 dias</p>
            <ul className="space-y-2">
              {[
                "1 reunião estratégica por semana",
                "Diagnóstico da operação e priorização de casos de uso",
                "Engenharia de contexto (documentação extensiva)",
                "Direcionamento técnico: o que construir, como e em que ordem",
                "Revisão do que a equipe construiu + correção de rota",
                "Suporte assíncrono entre encontros",
              ].map((item) => (
                <li key={item} className="font-body text-pb-ink-soft text-xs leading-relaxed flex gap-2">
                  <span className="text-pb-cyan shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </StratCard>

          <div className="border border-pb-cyan bg-pb-void-card p-8 relative">
            <p className="font-mono text-[9px] uppercase tracking-mono-wide text-pb-cyan absolute top-4 right-4">// Recomendada</p>
            <p className="font-mono text-[9px] uppercase tracking-mono-wide text-pb-ink-muted mb-2">Opção 2</p>
            <h3 className="font-display uppercase text-pb-ink text-lg leading-tight mb-3">Consultoria + Implementação</h3>
            <p className="font-body text-pb-ink-muted text-xs leading-relaxed mb-5">
              Tudo da Opção 1 — mais eu botando a mão na massa. Construo os protótipos, automações e integrações junto com vocês.
            </p>
            <div className="mb-1">
              <span className="font-display text-pb-cyan text-[clamp(36px,4vw,52px)] leading-none">R$ 8.000</span>
            </div>
            <p className="font-mono text-[10px] text-pb-ink-muted mb-6">por mês · ciclo mínimo de 90 dias</p>
            <ul className="space-y-2">
              {[
                "Tudo da Opção 1",
                "Construção direta dos protótipos e MVPs",
                "Desenvolvimento de automações e integrações (WhatsApp, CRM, IA)",
                "Implementação de prompts, fluxos e lógicas operacionais",
                "2 reuniões por semana (estratégia + trabalho técnico)",
                "Disponibilidade ampliada para destravar gargalos em tempo real",
              ].map((item) => (
                <li key={item} className="font-body text-pb-ink-soft text-xs leading-relaxed flex gap-2">
                  <span className="text-pb-cyan shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-2">
          <p className="font-body text-pb-ink-soft text-sm text-center max-w-xl mx-auto leading-relaxed">
            Ciclo inicial de 90 dias — tempo necessário para entender a operação, organizar o contexto, validar o MVP e construir uma estrutura utilizável pela equipe. Menos do que isso tende a virar diagnóstico sem transformação real.
          </p>
          <p className="font-body text-pb-ink-soft text-sm text-center max-w-xl mx-auto leading-relaxed">
            Em ambas as opções, tudo que for construído é propriedade da Supreme. Sem lock-in, sem dependência permanente.
          </p>
        </div>
      </div>

      {/* ========== DIFERENCIAL ========== */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <SectionHeader
          idx="// 09"
          label="Diferencial"
          headline="Por que este modelo funciona"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Velocidade real", text: "O que uma software house leva 5 meses para prototipar, a gente coloca para rodar em semanas usando ferramentas de IA e integração modernas." },
            { title: "Experiência no nicho", text: "Quase 2 anos atuando em clínicas médicas. Conheço os problemas porque já sofri com eles — CRM que ninguém preenche, médico que não vende, secretária que esquece." },
            { title: "Processo antes de tecnologia", text: "80% das empresas falham na automação porque não têm documentação extensiva de processos. A gente resolve isso primeiro — depois automatiza." },
            { title: "Transferência de conhecimento", text: "O objetivo é que a equipe se torne autônoma. Ensino a pescar enquanto construo junto — não crio dependência permanente." },
          ].map((c) => (
            <StratCard key={c.title}>
              <h3 className="font-display uppercase text-pb-ink text-lg leading-tight mb-3">{c.title}</h3>
              <p className="font-body text-pb-ink-soft text-sm leading-relaxed">{c.text}</p>
            </StratCard>
          ))}
        </div>
      </div>

      {/* ========== PRÓXIMOS PASSOS ========== */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <SectionHeader
          idx="// 10"
          label="Próximos Passos"
          headline="Como começamos"
          align="center"
        />

        <div className="max-w-xl mx-auto space-y-0">
          {[
            "Aprovação da proposta e escolha da opção de investimento",
            "Reunião de kickoff — mapeamento da operação atual",
            "Engenharia de contexto e priorização dos casos de uso",
            "MVP no ar — primeiro protótipo funcional rodando",
            "Migração e substituição gradual da stack atual",
          ].map((step, i) => (
            <div key={i} className="flex gap-5 items-start py-5 border-b border-pb-grid-strong last:border-0 first:border-t first:border-pb-grid-strong">
              <span className="font-display text-pb-cyan text-2xl leading-none shrink-0 pt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-body text-pb-ink-soft text-sm leading-relaxed">{step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ========== CTA ========== */}
      <div className="border-t border-pb-grid-strong py-16 text-center space-y-8">
        <h2 className="font-display uppercase text-pb-ink text-[clamp(28px,4vw,48px)] leading-[0.95] max-w-2xl mx-auto">
          A Supreme já tem tudo que é difícil de construir.<br />
          <span className="text-pb-cyan">Falta a estrutura.</span>
        </h2>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-lg mx-auto">
          Posicionamento forte, operação robusta, múltiplas linhas de serviço, base relevante e visão clara de onde quer chegar. O que falta agora é transformar essa complexidade em vantagem competitiva.
        </p>
        <a
          href="https://wa.me/5511999718595"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2"
        >
          Falar com Rodrigo →
        </a>
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-faint">
          Resposta em até 24 horas · Documento confidencial
        </p>
      </div>

    </PropostaLayout>
  );
};

export default PropostaClinicaSupreme;
