import rodrigoPhoto from "@/assets/founders/rodrigo-albuquerque.webp";
import diegoBarretoPhoto from "@/assets/mentors/diego-barreto.webp";
import pedroSommaPhoto from "@/assets/mentors/pedro-somma.webp";
import vaboPhoto from "@/assets/mentors/vabo.webp";
import joaoOliverioPhoto from "@/assets/mentors/joao-oliverio.webp";
import joseDiogoPhoto from "@/assets/mentors/jose-diogo.webp";
import PropostaLayout from "@/components/pb/PropostaLayout";
import SectionHeader from "@/components/pb/SectionHeader";
import StratCard from "@/components/pb/StratCard";

const stats = [
  { num: "+R$130M", label: "gerados em vendas" },
  { num: "100+", label: "consultorias realizadas" },
  { num: "+7", label: "países atendidos" },
  { num: "+54", label: "avaliações 5 estrelas" },
];

const mentors = [
  {
    name: "Diego Barreto",
    role: "CEO - iFood",
    photo: diegoBarretoPhoto,
    bio: 'Autor do best-seller "Nova Economia," lidera a expansão e inovação no iFood.',
  },
  {
    name: "Pedro Somma",
    role: "Ex-COO - 99 Taxi",
    photo: pedroSommaPhoto,
    bio: "Papel fundamental na expansão e operação da 99, consolidando-a como líder em mobilidade.",
  },
  {
    name: "Luis Vabo Jr.",
    role: "Ex-diretor - Stone",
    photo: vaboPhoto,
    bio: "Empreendedor serial, investidor e autor de 'Falar em público é para você!'.",
  },
  {
    name: "João Olivério",
    role: "CEO - Sales As A System",
    photo: joaoOliverioPhoto,
    bio: "Especialista em vendas, Country Manager da Apollo.io e mentor no G4 Sales.",
  },
  {
    name: "José Diogo C. Rodrigues",
    role: "CMO Latam - Tinder",
    photo: joseDiogoPhoto,
    bio: "Experiência em Brand Marketing na Nike, Red Bull e atualmente Tinder Latam & Canadá.",
  },
];

const deliveryItems = [
  {
    idx: "01",
    title: "Análise automatizada da pré-venda",
    desc: "Todo atendimento da secretária / SDR é processado por IA contra um padrão de qualidade definido com você. Cada conversa recebe uma nota, com o trecho exato que justifica a nota. No fim do mês, fica claro em qual etapa do atendimento a equipe está perdendo lead — não no achismo, no dado.",
  },
  {
    idx: "02",
    title: "Análise automatizada das reuniões de fechamento",
    desc: "Cada call é processada contra o método comercial da Areluna. O sistema mostra quais etapas foram cumpridas, quais foram puladas, quais objeções apareceram, qual vendedor está executando melhor. Cada call vira diagnóstico — não mais \"ele disse que correu bem\".",
  },
  {
    idx: "03",
    title: "Dashboard de aderência ao método",
    desc: "Uma tela que mostra, em tempo real, o quão fiel a operação está ao método definido. Por vendedor, por semana, por etapa. A pergunta \"minha equipe está realmente fazendo o que eu treinei?\" deixa de ser pergunta.",
  },
  {
    idx: "04",
    title: "Pontos de melhoria comercial acionáveis",
    desc: "Toda semana, o sistema entrega 3 a 5 ações concretas baseadas no que foi analisado. Não relatório bonito pra ninguém ler — recomendação prática, com o caso real que motivou a recomendação.",
  },
];

const objectives = [
  "Traduzir o método comercial da Areluna em critérios objetivos avaliáveis por IA",
  "Codificar o padrão de qualidade do atendimento de pré-venda",
  "Instalar a infraestrutura de análise automatizada de conversa e reunião",
  "Calibrar a leitura da IA com casos reais até bater com leitura de líder comercial",
  "Entregar dashboard de aderência ao método por vendedor, semana e etapa",
  "Treinar equipe interna para operar o sistema sem dependência da BA",
  "Estabelecer ciclo de revisão semanal baseado em dado, não em relato",
];

const antiCards = [
  {
    title: "Não é CRM",
    desc: "O CRM atual da Areluna continua sendo o CRM. Atlas Insight não substitui, não migra, não compete — adiciona a camada de inteligência que falta em cima do que já roda.",
  },
  {
    title: "Não é ferramenta genérica",
    desc: "Ferramenta genérica entrega transcrição e sentiment analysis. Atlas Insight analisa contra o método comercial específico da Areluna — calibrado, não pronto de prateleira.",
  },
  {
    title: "Não é treinamento de equipe",
    desc: "Treinamento ensina o que fazer. Atlas Insight mostra se está sendo feito. São dois problemas diferentes — e Atlas Insight resolve só um deles, mas resolve direito.",
  },
];

const timeline = [
  {
    week: "01",
    title: "Codificação do método",
    desc: "Sessão de descoberta pra traduzir o método comercial da Areluna e o padrão de atendimento da pré-venda em critérios objetivos que a IA possa avaliar. Sem isso, qualquer análise vira ruído.",
  },
  {
    week: "02",
    title: "Configuração e integração",
    desc: "Sistema instalado, conectado às fontes de áudio e conversa da operação. Primeiras análises começam a rodar com casos reais da Areluna.",
  },
  {
    week: "03",
    title: "Calibração",
    desc: "Você e o time validam as primeiras análises com casos reais. Ajustamos critérios até a leitura da máquina bater com o que um líder comercial seu enxergaria na mesma conversa.",
  },
  {
    week: "04",
    title: "Go-live + treinamento operacional",
    desc: "Sistema entregue funcionando, equipe treinada para usar os dashboards, ciclo de revisão semanal estabelecido. A partir daqui, decisão comercial passa a ser tomada com base em dado de execução real.",
  },
];

const PropostaInstitutoAreluna = () => {
  return (
    <PropostaLayout cliente="Instituto Areluna" projeto="Atlas Insight">

      {/* ========== SOBRE ========== */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <SectionHeader
          idx="// 01"
          label="Sobre"
          headline={<>Quem está por trás<br />desta proposta</>}
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
              Rodrigo Albuquerque liderou <strong className="text-pb-ink font-medium">R$80 milhões em vendas anuais</strong> antes de fundar a BA Consultoria, onde compilou o aprendizado de mais de 100 empresas atendidas. A BA opera nas quatro frentes que sustentam crescimento de receita: consultoria estratégica, execução de marketing, automação com IA e inteligência comercial.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <StratCard key={s.num}>
                  <div className="font-display text-pb-cyan text-2xl leading-none mb-1">{s.num}</div>
                  <div className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">{s.label}</div>
                </StratCard>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ========== REFERÊNCIAS ========== */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <SectionHeader
          idx="// 02"
          label="Referências"
          headline="Nossos mentores e professores"
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

      {/* ========== A ENTREGA ========== */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <SectionHeader
          idx="// 03"
          label="A Entrega"
          headline={<>Quatro camadas de visibilidade<br />sobre a operação atual</>}
          sub="Atlas Insight não é ferramenta genérica de análise de call. É um sistema calibrado no método comercial específico da Areluna."
        />

        <div className="space-y-4">
          {deliveryItems.map((item) => (
            <div key={item.idx} className="border border-pb-grid-strong bg-pb-void-card p-6 flex gap-6 items-start">
              <div className="font-display text-pb-cyan text-4xl leading-none shrink-0">{item.idx}</div>
              <div>
                <h3 className="font-display uppercase text-pb-ink text-xl leading-tight mb-3">{item.title}</h3>
                <p className="font-body text-pb-ink-soft leading-relaxed text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========== OBJETIVO ========== */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <SectionHeader
          idx="// 04"
          label="Objetivo"
          headline={<>O que este projeto<br />vai resolver</>}
          sub="Sete frentes cobertas pela implementação, do diagnóstico técnico ao ciclo de revisão semanal."
        />

        <div className="space-y-0">
          {objectives.map((text, i) => (
            <div key={i} className="flex gap-6 items-center py-5 border-b border-pb-grid-strong first:border-t first:border-pb-grid-strong">
              <div className="font-display text-pb-cyan text-xl leading-none shrink-0 w-10">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-body text-pb-ink-soft leading-relaxed text-sm">{text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ========== PARA QUE FIQUE CLARO ========== */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <SectionHeader
          idx="// 05"
          label="Para Que Fique Claro"
          headline={<>O que Atlas Insight<br />não é.</>}
          sub="A clareza sobre o que o produto não é evita expectativa errada e garante que o resultado final seja o esperado."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {antiCards.map((card) => (
            <StratCard key={card.title}>
              <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">{card.title}</p>
              <p className="font-body text-pb-ink-soft text-sm leading-relaxed">{card.desc}</p>
            </StratCard>
          ))}
        </div>
      </div>

      {/* ========== A IMPLEMENTAÇÃO ========== */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <SectionHeader
          idx="// 06"
          label="A Implementação"
          headline={<>Quatro semanas,<br />escopo travado</>}
          sub="Cronograma fechado, sem extensões e sem evolução de escopo durante a execução. Discovery acontece no início, ajuste fino na calibração."
        />

        <div className="space-y-0">
          {timeline.map((row) => (
            <div key={row.week} className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 py-9 border-b border-pb-grid-strong first:border-t first:border-pb-grid-strong items-start">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-1">Semana</p>
                <span className="font-display text-pb-ink text-5xl leading-none">{row.week}</span>
              </div>
              <div>
                <h3 className="font-display uppercase text-pb-ink text-xl leading-tight mb-3">{row.title}</h3>
                <p className="font-body text-pb-ink-soft text-sm leading-relaxed">{row.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========== INVESTIMENTO ========== */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <SectionHeader
          idx="// 07"
          label="Investimento"
          headline={<>Projeto fechado,<br />escopo travado.</>}
        />

        <StratCard brackets className="text-center space-y-6">
          <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan">Implementação Completa</p>
          <div>
            <span className="font-display text-[clamp(56px,8vw,84px)] text-pb-ink leading-none">R$ 12.000</span>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">4 Semanas · Pagamento Único · Suporte 30 Dias</p>

          <div className="border-t border-pb-grid-strong pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-3">Inclui</p>
              <p className="font-body text-pb-ink-soft text-sm leading-relaxed">Implementação completa, codificação do método, integração com as fontes de áudio, calibração, treinamento operacional da equipe e 30 dias de suporte pós-go-live para ajuste fino de critérios.</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-3">Não inclui</p>
              <p className="font-body text-pb-ink-soft text-sm leading-relaxed">Dispositivos de captura de áudio das reuniões presenciais. Recomendação técnica é fornecida durante a implementação — aquisição é por conta do cliente.</p>
            </div>
          </div>
        </StratCard>
      </div>

      {/* ========== CTA ========== */}
      <div className="border-t border-pb-grid-strong py-16 text-center space-y-8">
        <SectionHeader
          idx="// 08"
          label="Próximo Passo"
          headline={<>Alinhar implementação<br />e cronograma</>}
          align="center"
        />
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-xl mx-auto">
          Próximo passo é uma reunião de 30 minutos para revisar a proposta, ajustar pontos específicos da operação da Areluna e definir data de início.
        </p>
        <a
          href="https://wa.me/5511999718595"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2"
        >
          Agendar Reunião →
        </a>
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-faint">
          BA Consultoria © 2026 — Proposta válida por 7 dias · Proposta confidencial
        </p>
      </div>

    </PropostaLayout>
  );
};

export default PropostaInstitutoAreluna;
