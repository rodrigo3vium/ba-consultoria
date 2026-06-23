import { tracker } from "@/lib/tracking";
import PropostaLayout from "@/components/pb/PropostaLayout";
import rodrigoPhoto from "@/assets/founders/rodrigo-albuquerque.webp";
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

const PropostaRoyalEagle = () => {
  return (
    <PropostaLayout cliente="Royal Eagle" projeto="Arquitetura de Receita">

      {/* METADADOS */}
      <div className="border-t border-pb-grid-strong py-16">
        <div className="grid grid-cols-3 border border-pb-grid-strong">
          <div className="p-6 border-r border-pb-grid-strong">
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted mb-2">Para</p>
            <p className="font-body text-pb-ink leading-snug">Edimara Dal Pozzo</p>
            <p className="font-mono text-[10px] text-pb-ink-muted mt-1">CEO · Royal Eagle</p>
          </div>
          <div className="p-6 border-r border-pb-grid-strong">
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted mb-2">Por</p>
            <p className="font-body text-pb-ink leading-snug">Rodrigo Albuquerque</p>
            <p className="font-mono text-[10px] text-pb-ink-muted mt-1">BA Consultoria</p>
          </div>
          <div className="p-6">
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted mb-2">Data</p>
            <p className="font-body text-pb-ink leading-snug">Junho · 2026</p>
          </div>
        </div>
        <p className="font-body text-pb-ink-soft leading-relaxed mt-8 max-w-2xl">
          Esse documento mapeou 8 pontos de falha no processo comercial atual.
        </p>
      </div>

      {/* 01 / DIAGNÓSTICO */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 01 DIAGNÓSTICO</p>
        <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">
          Diagnóstico de Arquitetura de Receita.
        </h2>

        {/* BLOCO 1 */}
        <div className="border border-pb-grid-strong bg-pb-void-card p-8 space-y-6">
          <div className="flex items-center gap-4 pb-4 border-b border-pb-grid-strong">
            <span className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-red border border-pb-red px-3 py-1">Crítico</span>
            <h3 className="font-display uppercase text-pb-ink text-[clamp(18px,2vw,24px)] leading-[0.95]">Sem infraestrutura de marketing.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 py-4 border-b border-pb-grid-strong/40">
            <p className="font-display uppercase text-pb-ink text-[18px] leading-[0.95]">Tráfego pago sem as ferramentas corretas.</p>
            <p className="font-body text-pb-ink-soft leading-relaxed">
              O Meta não tem informações o suficiente para encontrar os melhores leads. Sem a utilização da infraestrutura correta, o tráfego depende de sorte. Alguns meses gera resultado, outros não.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 py-4">
            <p className="font-display uppercase text-pb-ink text-[18px] leading-[0.95]">Sem produção de conteúdo.</p>
            <p className="font-body text-pb-ink-soft leading-relaxed">
              Sem produção de conteúdo e criativos de forma estratégica e consistente.
            </p>
          </div>
        </div>

        {/* BLOCO 2 */}
        <div className="border border-pb-grid-strong bg-pb-void-card p-8 space-y-6">
          <div className="flex items-center gap-4 pb-4 border-b border-pb-grid-strong">
            <span className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-red border border-pb-red px-3 py-1">Crítico</span>
            <h3 className="font-display uppercase text-pb-ink text-[clamp(18px,2vw,24px)] leading-[0.95]">Falta de processos comerciais estruturados.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 py-4 border-b border-pb-grid-strong/40">
            <p className="font-display uppercase text-pb-ink text-[18px] leading-[0.95]">Tempo de atendimento.</p>
            <p className="font-body text-pb-ink-soft leading-relaxed">
              Segundo o estudo do MIT com InsideSales.com (Dr. James Oldroyd, publicado na Harvard Business Review), leads contatados em até 5 minutos têm{" "}
              <span className="text-pb-cyan font-semibold">21× mais chance</span> de serem qualificados do que os contatados após 30 minutos. Em alguns casos, os leads da Royal Eagle esperaram até{" "}
              <span className="text-pb-cyan font-semibold">5 horas</span> pelo atendimento.
              <span className="block font-mono text-[10px] text-pb-ink-muted mt-2 tracking-mono-wide">¹ Oldroyd, J. — MIT/InsideSales.com, Harvard Business Review, 2011</span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 py-4 border-b border-pb-grid-strong/40">
            <p className="font-display uppercase text-pb-ink text-[18px] leading-[0.95]">Follow-up.</p>
            <p className="font-body text-pb-ink-soft leading-relaxed">
              Não há controle de quantidade de follow-up, e essa é a principal métrica de conversão.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 py-4">
            <p className="font-display uppercase text-pb-ink text-[18px] leading-[0.95]">Metas e acompanhamento.</p>
            <p className="font-body text-pb-ink-soft leading-relaxed">
              Não existem metas, processos, scripts e treinamento comercial para otimizar o faturamento da empresa com um método escalável.
            </p>
          </div>
        </div>

        {/* BLOCO 3 */}
        <div className="border border-pb-grid-strong bg-pb-void-card p-8 space-y-6">
          <div className="flex items-center gap-4 pb-4 border-b border-pb-grid-strong">
            <span className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-red border border-pb-red px-3 py-1">Crítico</span>
            <h3 className="font-display uppercase text-pb-ink text-[clamp(18px,2vw,24px)] leading-[0.95]">Falta de estratégia para expandir a base atual.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 py-4">
            <p className="font-display uppercase text-pb-ink text-[18px] leading-[0.95]">Base parada.</p>
            <p className="font-body text-pb-ink-soft leading-relaxed">
              Hoje, existem 6 mil clientes ativos na base que não estão sendo trabalhados. Esses clientes poderiam estar gerando indicações ou comprando novos produtos.
              <br /><br />
              Segundo pesquisa de Frederick Reichheld da Bain &amp; Company (Harvard Business Review), vender novamente para o mesmo cliente é de{" "}
              <span className="text-pb-cyan font-semibold">5 a 25× mais barato</span> do que adquirir um cliente novo. Na mesma pesquisa — que incluiu o setor de seguros — aumentar a retenção em apenas 5% gerou até{" "}
              <span className="text-pb-cyan font-semibold">85% mais lucro</span>.
              <span className="block font-mono text-[10px] text-pb-ink-muted mt-2 tracking-mono-wide">² Reichheld, F. &amp; Sasser Jr., W. E. — "Zero Defections", Harvard Business Review, 1990</span>
            </p>
          </div>
        </div>
      </div>

      {/* 02 / ESCOPO */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 02 ESCOPO</p>
        <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">4 Pilares.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 border border-pb-grid-strong">
          {[
            {
              letter: "A",
              name: "Pilar A",
              title: "Conteúdo & Criativo",
              items: [
                "30 posts/mês para o perfil principal",
                "30 posts/mês para o perfil secundário (em espanhol)",
                "4 vídeos do mascote por mês",
                "Direcionamento, roteirização e edição de criativos, landing pages e recursos necessários para otimizar o tráfego",
              ],
            },
            {
              letter: "B",
              name: "Pilar B",
              title: "Tráfego",
              items: [
                "Gestão estratégica do tráfego pago",
                "Construção de infraestrutura para potencializar o resultado atual",
                "Brainstorming semanal de criativos que estão trazendo o melhor retorno",
              ],
            },
            {
              letter: "C",
              name: "Pilar C",
              title: "Máquina Comercial",
              items: [
                "Estruturação do time comercial",
                "Construção de processos da área",
                "Scripts de venda com cadência de follow-up",
                "Treinamento comercial",
                "Reunião semanal com o time de vendas",
                "Metas claras e métricas de acompanhamento",
              ],
            },
            {
              letter: "D",
              name: "Pilar D",
              title: "Retenção & Base",
              items: [
                "Ativação da base de 6 mil clientes",
                "Redesign do programa de indicação",
                "Melhoria do processo de onboarding",
              ],
            },
          ].map((pilar, i) => (
            <div
              key={pilar.letter}
              className={[
                "p-8 relative bg-pb-void-card",
                i === 0 ? "border-b border-r border-pb-grid-strong" : "",
                i === 1 ? "border-b border-pb-grid-strong" : "",
                i === 2 ? "border-r border-pb-grid-strong" : "",
              ].join(" ")}
            >
              <span className="absolute top-4 right-6 font-display text-[64px] leading-none text-pb-cyan opacity-20">{pilar.letter}</span>
              <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// {pilar.name}</p>
              <h4 className="font-display uppercase text-pb-ink text-[22px] leading-[0.95] mb-4">{pilar.title}</h4>
              <ul className="space-y-2">
                {pilar.items.map((item) => (
                  <li key={item} className="font-body text-pb-ink-soft text-[13px] leading-relaxed flex gap-2">
                    <span className="text-pb-cyan mt-0.5 shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 03 / INVESTIMENTO */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 03 INVESTIMENTO</p>
        <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">Investimento.</h2>
        <div className="border border-pb-grid-strong bg-pb-void-card p-12 text-center">
          <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// Mensalidade</p>
          <div>
            <span className="font-display text-[clamp(48px,6vw,80px)] text-pb-cyan">R$ 3.000</span>
            <span className="font-mono text-[14px] text-pb-ink-muted">/mês</span>
          </div>
        </div>
      </div>

      {/* 04 / OPERADOR */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 04 OPERADOR</p>
        <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">Quem Assina.</h2>
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
            <p className="font-body text-pb-ink-soft leading-relaxed text-[17px]">
              Rodrigo Albuquerque liderou <strong className="text-pb-ink">R$80 milhões em vendas anuais</strong> antes de fundar a BA Consultoria, onde compilou o aprendizado de mais de 100 empresas atendidas. A BA opera nas quatro frentes que sustentam crescimento de receita: consultoria estratégica, execução de marketing, automação com IA e inteligência comercial.
            </p>
            <div className="grid grid-cols-2 border border-pb-grid-strong mt-8">
              {stats.map((s, i) => (
                <div
                  key={s.num}
                  className={[
                    "p-6",
                    i % 2 === 0 ? "border-r border-pb-grid-strong" : "",
                    i < 2 ? "border-b border-pb-grid-strong" : "",
                  ].join(" ")}
                >
                  <p className="font-display text-[40px] leading-none text-pb-cyan">{s.num}</p>
                  <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted mt-2">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 05 / REDE */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 05 REDE</p>
        <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">Referências.</h2>
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

      {/* CTA */}
      <div className="border-t border-pb-grid-strong py-20 text-center space-y-6">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan">// Próximo passo</p>
        <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">
          O diagnóstico está feito.<br />Falta a decisão.
        </h2>
        <div className="pt-4">
          <a
            href="https://wa.me/5511999718595"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            onClick={() => tracker.track("cta_click", { product: "royal-eagle", location: "proposta_cta" })}
          >
            Falar no WhatsApp <span aria-hidden>→</span>
          </a>
        </div>
      </div>

      {/* FECHAMENTO */}
      <div className="border-t border-pb-grid-strong py-12 flex flex-col sm:flex-row justify-between items-end gap-6 flex-wrap">
        <div>
          <p className="font-display uppercase text-pb-ink text-[24px] leading-none">Rodrigo Albuquerque</p>
          <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted mt-2">BA Consultoria · Junho 2026</p>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted text-right">
          <p>File PROP-RE-2026.06</p>
          <p>Ref. DIAG-RE-2026.05</p>
          <p>Fim do documento</p>
        </div>
      </div>

      {/* FOOTNOTES */}
      <div className="border-t border-pb-grid-strong/40 py-6 font-mono text-[9px] text-pb-ink-faint tracking-mono-wide leading-relaxed">
        <span className="text-pb-ink-muted">¹</span> Oldroyd, J. B. — "The Short Life of Online Sales Leads", MIT Sloan / InsideSales.com, publicado na Harvard Business Review, 2011.<br />
        <span className="text-pb-ink-muted">²</span> Reichheld, F. F. &amp; Sasser Jr., W. E. — "Zero Defections: Quality Comes to Services", Harvard Business Review, 1990.
      </div>

    </PropostaLayout>
  );
};

export default PropostaRoyalEagle;
