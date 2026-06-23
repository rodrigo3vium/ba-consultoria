import PropostaLayout from "@/components/pb/PropostaLayout";
import rodrigoPhoto from "@/assets/founders/rodrigo-albuquerque.webp";
import dslLogo from "@/assets/dsl-car-texas-logo.jpg";
import diegoBarretoPhoto from "@/assets/mentors/diego-barreto.webp";
import pedroSommaPhoto from "@/assets/mentors/pedro-somma.webp";
import vaboPhoto from "@/assets/mentors/vabo.webp";
import joaoOliverioPhoto from "@/assets/mentors/joao-oliverio.webp";
import joseDiogoPhoto from "@/assets/mentors/jose-diogo.webp";

const stats = [
  { num: "+R$130M", label: "gerados em vendas" },
  { num: "100+", label: "consultorias realizadas" },
  { num: "+7", label: "países atendidos" },
  { num: "+54", label: "avaliações 5 estrelas" },
];

const mentors = [
  { name: "Diego Barreto", role: "CEO - iFood", photo: diegoBarretoPhoto, bio: 'Autor do best-seller "Nova Economia," lidera a expansão e inovação no iFood.' },
  { name: "Pedro Somma", role: "Ex-COO - 99 Taxi", photo: pedroSommaPhoto, bio: "Papel fundamental na expansão e operação da 99, consolidando-a como líder em mobilidade." },
  { name: "Luis Vabo Jr.", role: "Ex-diretor - Stone", photo: vaboPhoto, bio: "Empreendedor serial, investidor e autor de 'Falar em público é para você!'." },
  { name: "João Olivério", role: "CEO - Sales As A System", photo: joaoOliverioPhoto, bio: "Especialista em vendas, Country Manager da Apollo.io e mentor no G4 Sales." },
  { name: "José Diogo C. Rodrigues", role: "CMO Latam - Tinder", photo: joseDiogoPhoto, bio: "Experiência em Brand Marketing na Nike, Red Bull e atualmente Tinder Latam & Canadá." },
];

const PropostaDSLCarTexas = () => {
  return (
    <PropostaLayout cliente="DSL Car Texas" projeto="Estrutura para Escalar sem Perder Controle">

      {/* LOGO + INTRO */}
      <div className="border-t border-pb-grid-strong py-16 space-y-6">
        <div className="flex items-center gap-6">
          <div className="border border-pb-grid-strong overflow-hidden w-20 h-20 shrink-0">
            <img
              loading="lazy"
              src={dslLogo}
              alt="DSL Car Texas"
              className="w-full h-full object-cover"
              style={{ filter: 'grayscale(100%) contrast(1.1) brightness(0.85)' }}
            />
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-1">// Proposta Comercial</p>
            <p className="font-display uppercase text-pb-ink text-[22px] leading-[0.95]">DSL Car Texas · Guilherme Arcanjo</p>
          </div>
        </div>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-2xl">
          Proposta de estruturação do funil de captação, qualificação e agendamento para a DSL Car Texas — transformando demanda crescente em operação comercial funcional e escalável.
        </p>
      </div>

      {/* 01 / SOBRE */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 01 SOBRE</p>
        <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">
          Quem está por trás desta proposta.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 items-start">
          <div className="border border-pb-grid-strong overflow-hidden aspect-square">
            <img
              loading="lazy"
              src={rodrigoPhoto}
              alt="Rodrigo Albuquerque"
              className="w-full h-full object-cover"
              style={{ filter: 'grayscale(100%) contrast(1.1) brightness(0.85)' }}
            />
          </div>
          <div>
            <p className="font-body text-pb-ink-soft leading-relaxed mb-4">
              Rodrigo Albuquerque investiu meio milhão de reais em mentoria com alguns dos maiores empreendedores do Brasil. Liderou R$80 milhões em vendas anuais e compilou na BA Consultoria o aprendizado extraído de mais de 100 empresas que receberam consultoria.
            </p>
            <p className="font-body text-pb-ink-soft leading-relaxed mb-8">
              A BA Consultoria une consultoria estratégica, execução de marketing, automação com IA e inteligência comercial — tudo focado em gerar retorno financeiro real e escalável.
            </p>
            <div className="grid grid-cols-2 border border-pb-grid-strong">
              {stats.map((s, i) => (
                <div
                  key={s.num}
                  className={[
                    "p-6",
                    i % 2 === 0 ? "border-r border-pb-grid-strong" : "",
                    i < 2 ? "border-b border-pb-grid-strong" : "",
                  ].join(" ")}
                >
                  <p className="font-display text-[36px] leading-none text-pb-cyan">{s.num}</p>
                  <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted mt-2">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 02 / REFERÊNCIAS */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 02 REFERÊNCIAS</p>
        <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">
          Nossos Mentores e Professores.
        </h2>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-2xl">
          Aprendemos diretamente com alguns dos maiores líderes do mercado brasileiro.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {mentors.map((m) => (
            <div key={m.name} className="border border-pb-grid-strong bg-pb-void-card p-5">
              <div className="border border-pb-grid-strong overflow-hidden aspect-square mb-4">
                <img
                  loading="lazy"
                  src={m.photo}
                  alt={m.name}
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(100%) contrast(1.1) brightness(0.85)' }}
                />
              </div>
              <h3 className="font-display uppercase text-pb-ink text-[16px] leading-[0.95]">{m.name}</h3>
              <p className="font-mono text-[9px] uppercase tracking-mono-wide text-pb-cyan mt-2 mb-3">{m.role}</p>
              <p className="font-body text-pb-ink-muted text-[12px] leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 03 / CONTEXTO */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 03 CONTEXTO</p>
        <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">
          Onde a DSL Car Texas está hoje.
        </h2>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-2xl">
          O negócio já validou mercado, oferta e posicionamento. A demanda está crescendo com força — impulsionada por conteúdo, autoridade no nicho e indicação.
        </p>
        <div className="border border-pb-grid-strong bg-pb-void-card p-8 space-y-4">
          <p className="font-body text-pb-ink-soft leading-relaxed">
            A DSL Car Texas não depende de estoque físico, mas de um processo muito bem executado: entendimento do perfil do cliente, busca inteligente no inventário, curadoria dos veículos, inspeção presencial, confiança na recomendação e fechamento consultivo por ligação.
          </p>
          <p className="font-body text-pb-ink-soft leading-relaxed">
            O principal gargalo agora não é gerar interesse — é{" "}
            <span className="text-pb-cyan italic">organizar, filtrar e transformar essa demanda em uma operação comercial funcional e escalável.</span>
          </p>
          <p className="font-body text-pb-ink-soft leading-relaxed">
            O negócio já provou que vende. Agora precisa de estrutura para escalar sem perder qualidade no atendimento.
          </p>
        </div>
      </div>

      {/* 04 / DIAGNÓSTICO */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 04 DIAGNÓSTICO</p>
        <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">
          O que mapeamos na nossa conversa.
        </h2>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-2xl">
          Uma operação com fundações sólidas e gargalos claros que, uma vez resolvidos, destravam o próximo nível de escala.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-pb-grid-strong bg-pb-void-card p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-pb-grid-strong">
              <span className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan border border-pb-cyan px-3 py-1">Pontos Fortes</span>
            </div>
            <ul className="space-y-3">
              {[
                "Oferta diferenciada e difícil de copiar",
                "Autoridade crescente no nicho",
                "Conteúdo com alto poder de atração",
                "Forte confiança gerada no atendimento",
                "Operação validada na prática",
                "Ticket e margem que justificam investir em estrutura",
                "Potencial real de escala",
              ].map((item) => (
                <li key={item} className="font-body text-pb-ink-soft text-[14px] leading-relaxed flex gap-2">
                  <span className="text-pb-cyan mt-0.5 shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-pb-grid-strong bg-pb-void-card p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-pb-grid-strong">
              <span className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-red border border-pb-red px-3 py-1">Gargalos Atuais</span>
            </div>
            <ul className="space-y-3">
              {[
                "Excesso de mensagens chegando sem organização",
                "Guilherme participa demais da triagem inicial",
                "Ausência de agenda estruturada",
                "Falta de processo comercial mapeado",
                "Ausência de estrutura de dados para futuro CRM",
                "Risco de perder oportunidade por falta de organização",
                "Dependência excessiva do operacional manual",
              ].map((item) => (
                <li key={item} className="font-body text-pb-ink-soft text-[14px] leading-relaxed flex gap-2">
                  <span className="text-pb-red mt-0.5 shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 05 / OBJETIVO */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 05 OBJETIVO</p>
        <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">
          O que este projeto vai resolver.
        </h2>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-2xl">
          Construir uma estrutura comercial e operacional que permita à DSL Car Texas transformar demanda em receita — com velocidade, simplicidade e eficiência.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { num: "01", text: "Organizar os contatos que chegam pelo Instagram, WhatsApp e formulários" },
            { num: "02", text: "Filtrar automaticamente os leads com base no perfil ideal" },
            { num: "03", text: "Centralizar as informações estratégicas da operação" },
            { num: "04", text: "Agendar ligações nos melhores horários da rotina do Guilherme" },
            { num: "05", text: "Reduzir o volume de conversas improdutivas" },
            { num: "06", text: "Aumentar eficiência do atendimento e capacidade de fechamento" },
            { num: "07", text: "Preparar a operação para automação com IA e CRM" },
          ].map((obj) => (
            <div key={obj.num} className="border border-pb-grid-strong bg-pb-void-card p-6">
              <p className="font-display text-[clamp(36px,4vw,56px)] text-pb-cyan leading-none mb-4">{obj.num}</p>
              <p className="font-body text-pb-ink-soft leading-relaxed text-[14px]">{obj.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 06 / INVESTIMENTO */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 06 INVESTIMENTO</p>
        <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">
          Proposta comercial.
        </h2>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-2xl">
          Duas opções para momentos diferentes. Ambas resolvem o problema — a segunda já adiciona inteligência artificial à operação.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Opção 1 */}
          <div className="border border-pb-grid-strong bg-pb-void-card p-8">
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-3">// Opção 1</p>
            <h3 className="font-display uppercase text-pb-ink text-[22px] leading-[0.95] mb-3">Estruturação Inicial da Operação</h3>
            <p className="font-body text-pb-ink-muted text-[14px] leading-relaxed mb-6">
              Resolve de forma prática e objetiva o problema atual, criando uma estrutura enxuta, funcional e pronta para rodar.
            </p>
            <div className="space-y-0 border border-pb-grid-strong">
              {[
                { label: "Investimento", value: "R$ 6.000" },
                { label: "Formato", value: "Pagamento único" },
                { label: "Prazo padrão", value: "15 dias úteis" },
              ].map((row, i) => (
                <div key={row.label} className={["flex justify-between items-baseline p-4", i < 2 ? "border-b border-pb-grid-strong" : ""].join(" ")}>
                  <span className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-ink-muted">{row.label}</span>
                  <span className={["font-display uppercase", i === 0 ? "text-pb-cyan text-[22px]" : "text-pb-ink text-[16px]"].join(" ")}>{row.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 border border-pb-grid-strong p-4">
              <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-1">Taxa de urgência</p>
              <p className="font-body text-pb-ink-soft text-[13px] leading-relaxed">
                +R$ 4.000 → Total R$ 10.000 — entrega até sexta para rodar na segunda
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-pb-grid-strong">
              <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted mb-4">Entregáveis</p>
              <ul className="space-y-2">
                {[
                  "Landing page com VSL",
                  "Formulário de qualificação",
                  "Sistema de agendamento",
                  "Estrutura integrada e automatizada",
                  "Base de coleta de dados para futura transição para CRM",
                  "Mapeamento do processo comercial",
                ].map((item) => (
                  <li key={item} className="font-body text-pb-ink-soft text-[13px] leading-relaxed flex gap-2">
                    <span className="text-pb-cyan mt-0.5 shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Opção 2 — Featured */}
          <div className="border border-pb-cyan bg-pb-void-card p-8 relative">
            <div className="absolute top-4 right-4">
              <span className="font-mono text-[9px] uppercase tracking-mono-wide text-pb-cyan border border-pb-cyan px-2 py-1">Recomendado</span>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-3">// Opção 2</p>
            <h3 className="font-display uppercase text-pb-ink text-[22px] leading-[0.95] mb-3">Estruturação com IA</h3>
            <p className="font-body text-pb-ink-muted text-[14px] leading-relaxed mb-6">
              Toda a estrutura da Opção 1, mais uma camada de inteligência e automação com IA para tornar a operação ainda mais eficiente e escalável.
            </p>
            <div className="space-y-0 border border-pb-grid-strong">
              {[
                { label: "Investimento", value: "R$ 10.000" },
                { label: "Manutenção mensal", value: "R$ 1.000/mês" },
                { label: "Prazo padrão", value: "15 dias úteis" },
              ].map((row, i) => (
                <div key={row.label} className={["flex justify-between items-baseline p-4", i < 2 ? "border-b border-pb-grid-strong" : ""].join(" ")}>
                  <span className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-ink-muted">{row.label}</span>
                  <span className={["font-display uppercase", i === 0 ? "text-pb-cyan text-[22px]" : "text-pb-ink text-[16px]"].join(" ")}>{row.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 border border-pb-grid-strong p-4">
              <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-1">Taxa de urgência</p>
              <p className="font-body text-pb-ink-soft text-[13px] leading-relaxed">
                +R$ 4.000 → Total R$ 14.000 + R$ 1.000/mês — entrega até sexta
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-pb-grid-strong">
              <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted mb-4">Entregáveis</p>
              <ul className="space-y-2">
                {[
                  "Tudo da Opção 1 incluso",
                  "Implementação de agente com IA para atendimento no WhatsApp",
                  "Manutenção mensal do agente: segurança, ajustes e evolução, com zero custo variável para você",
                ].map((item) => (
                  <li key={item} className="font-body text-pb-ink-soft text-[13px] leading-relaxed flex gap-2">
                    <span className="text-pb-cyan mt-0.5 shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-pb-grid-strong py-20 text-center space-y-6">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan">// Próximo passo</p>
        <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">
          Vamos estruturar a DSL para o próximo nível?
        </h2>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-xl mx-auto text-[18px] italic">
          Guilherme, teu negócio já passou da fase da ideia. Tu já construiu oferta, autoridade, confiança e demanda. O que está faltando agora não é mais validação — é estrutura para a operação acompanhar o nível do que você já construiu.
        </p>
        <div className="pt-4">
          <a
            href="https://wa.me/5511999718595"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Falar no WhatsApp <span aria-hidden>→</span>
          </a>
        </div>
      </div>

    </PropostaLayout>
  );
};

export default PropostaDSLCarTexas;
