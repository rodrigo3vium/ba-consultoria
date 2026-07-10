import { tracker } from "@/lib/tracking";
import PropostaLayout from "@/components/pb/PropostaLayout";
import { Accent, Eyebrow, Card, StatCard, SAAS_BTN_PRIMARY } from "@/components/saas/ui";
import rodrigoPhoto from "@/assets/founders/rodrigo-albuquerque.webp";
import diegoBarretoPhoto from "@/assets/mentors/diego-barreto.webp";
import pedroSommaPhoto from "@/assets/mentors/pedro-somma.webp";
import vaboPhoto from "@/assets/mentors/vabo.webp";
import joaoOliverioPhoto from "@/assets/mentors/joao-oliverio.webp";
import joseDiogoPhoto from "@/assets/mentors/jose-diogo.webp";

const H2_CLS =
  "font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight";

const CRITICO_BADGE =
  "inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan";

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
      <div className="border-t border-white/[0.06] py-16">
        <div className="grid grid-cols-3 rounded-2xl border border-white/[0.09] bg-saas-card overflow-hidden divide-x divide-white/[0.06]">
          <div className="p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted mb-2">Para</p>
            <p className="text-saas-ink leading-snug">Edimara Dal Pozzo</p>
            <p className="font-mono text-[10px] text-saas-faint mt-1">CEO · Royal Eagle</p>
          </div>
          <div className="p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted mb-2">Por</p>
            <p className="text-saas-ink leading-snug">Rodrigo Albuquerque</p>
            <p className="font-mono text-[10px] text-saas-faint mt-1">BA Consultoria</p>
          </div>
          <div className="p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted mb-2">Data</p>
            <p className="text-saas-ink leading-snug">Junho · 2026</p>
          </div>
        </div>
        <p className="text-saas-body leading-relaxed mt-8 max-w-2xl">
          Esse documento mapeou 8 pontos de falha no processo comercial atual.
        </p>
      </div>

      {/* 01 / DIAGNÓSTICO */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <div>
          <Eyebrow>01 Diagnóstico</Eyebrow>
          <h2 className={"mt-5 " + H2_CLS}>
            Diagnóstico de Arquitetura de Receita.
          </h2>
        </div>

        {/* BLOCO 1 */}
        <Card className="p-8 space-y-6">
          <div className="flex flex-wrap items-center gap-4 pb-4 border-b border-white/[0.06]">
            <span className={CRITICO_BADGE}>Crítico</span>
            <h3 className="font-extrabold text-saas-ink text-[clamp(18px,2vw,24px)] leading-tight tracking-tight">Sem infraestrutura de marketing.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 py-4 border-b border-white/[0.06]">
            <p className="font-bold text-saas-ink text-[16px] leading-snug">Tráfego pago sem as ferramentas corretas.</p>
            <p className="text-saas-body leading-relaxed">
              O Meta não tem informações o suficiente para encontrar os melhores leads. Sem a utilização da infraestrutura correta, o tráfego depende de sorte. Alguns meses gera resultado, outros não.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 py-4">
            <p className="font-bold text-saas-ink text-[16px] leading-snug">Sem produção de conteúdo.</p>
            <p className="text-saas-body leading-relaxed">
              Sem produção de conteúdo e criativos de forma estratégica e consistente.
            </p>
          </div>
        </Card>

        {/* BLOCO 2 */}
        <Card className="p-8 space-y-6">
          <div className="flex flex-wrap items-center gap-4 pb-4 border-b border-white/[0.06]">
            <span className={CRITICO_BADGE}>Crítico</span>
            <h3 className="font-extrabold text-saas-ink text-[clamp(18px,2vw,24px)] leading-tight tracking-tight">Falta de processos comerciais estruturados.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 py-4 border-b border-white/[0.06]">
            <p className="font-bold text-saas-ink text-[16px] leading-snug">Tempo de atendimento.</p>
            <p className="text-saas-body leading-relaxed">
              Segundo o estudo do MIT com InsideSales.com (Dr. James Oldroyd, publicado na Harvard Business Review), leads contatados em até 5 minutos têm{" "}
              <span className="text-saas-cyan font-semibold">21× mais chance</span> de serem qualificados do que os contatados após 30 minutos. Em alguns casos, os leads da Royal Eagle esperaram até{" "}
              <span className="text-saas-cyan font-semibold">5 horas</span> pelo atendimento.
              <span className="block font-mono text-[10px] text-saas-faint mt-2 tracking-[0.14em]">¹ Oldroyd, J. — MIT/InsideSales.com, Harvard Business Review, 2011</span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 py-4 border-b border-white/[0.06]">
            <p className="font-bold text-saas-ink text-[16px] leading-snug">Follow-up.</p>
            <p className="text-saas-body leading-relaxed">
              Não há controle de quantidade de follow-up, e essa é a principal métrica de conversão.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 py-4">
            <p className="font-bold text-saas-ink text-[16px] leading-snug">Metas e acompanhamento.</p>
            <p className="text-saas-body leading-relaxed">
              Não existem metas, processos, scripts e treinamento comercial para otimizar o faturamento da empresa com um método escalável.
            </p>
          </div>
        </Card>

        {/* BLOCO 3 */}
        <Card className="p-8 space-y-6">
          <div className="flex flex-wrap items-center gap-4 pb-4 border-b border-white/[0.06]">
            <span className={CRITICO_BADGE}>Crítico</span>
            <h3 className="font-extrabold text-saas-ink text-[clamp(18px,2vw,24px)] leading-tight tracking-tight">Falta de estratégia para expandir a base atual.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 py-4">
            <p className="font-bold text-saas-ink text-[16px] leading-snug">Base parada.</p>
            <p className="text-saas-body leading-relaxed">
              Hoje, existem 6 mil clientes ativos na base que não estão sendo trabalhados. Esses clientes poderiam estar gerando indicações ou comprando novos produtos.
              <br /><br />
              Segundo pesquisa de Frederick Reichheld da Bain &amp; Company (Harvard Business Review), vender novamente para o mesmo cliente é de{" "}
              <span className="text-saas-cyan font-semibold">5 a 25× mais barato</span> do que adquirir um cliente novo. Na mesma pesquisa — que incluiu o setor de seguros — aumentar a retenção em apenas 5% gerou até{" "}
              <span className="text-saas-cyan font-semibold">85% mais lucro</span>.
              <span className="block font-mono text-[10px] text-saas-faint mt-2 tracking-[0.14em]">² Reichheld, F. &amp; Sasser Jr., W. E. — "Zero Defections", Harvard Business Review, 1990</span>
            </p>
          </div>
        </Card>
      </div>

      {/* 02 / ESCOPO */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <div>
          <Eyebrow>02 Escopo</Eyebrow>
          <h2 className={"mt-5 " + H2_CLS}>4 Pilares.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          ].map((pilar) => (
            <Card key={pilar.letter} className="p-8 relative overflow-hidden">
              <span
                aria-hidden
                className="absolute top-4 right-6 font-extrabold text-[64px] leading-none bg-gradient-to-br from-saas-cyan to-saas-violet bg-clip-text text-transparent opacity-25"
              >
                {pilar.letter}
              </span>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-cyan mb-4">{pilar.name}</p>
              <h4 className="font-extrabold text-saas-ink text-[20px] leading-tight tracking-tight mb-4">{pilar.title}</h4>
              <ul className="space-y-2">
                {pilar.items.map((item) => (
                  <li key={item} className="text-saas-body text-[13.5px] leading-relaxed flex gap-2">
                    <span className="text-saas-cyan mt-0.5 shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      {/* 03 / INVESTIMENTO */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <div>
          <Eyebrow>03 Investimento</Eyebrow>
          <h2 className={"mt-5 " + H2_CLS}>Investimento.</h2>
        </div>
        <Card className="p-12 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-cyan mb-4">Mensalidade</p>
          <div>
            <span className="font-extrabold tracking-tight text-[clamp(48px,6vw,80px)] leading-none">
              <Accent>R$ 3.000</Accent>
            </span>
            <span className="font-mono text-[14px] text-saas-muted">/mês</span>
          </div>
        </Card>
      </div>

      {/* 04 / OPERADOR */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <div>
          <Eyebrow>04 Operador</Eyebrow>
          <h2 className={"mt-5 " + H2_CLS}>Quem Assina.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 items-start">
          <div className="rounded-2xl border border-white/[0.09] overflow-hidden aspect-square">
            <img
              loading="lazy"
              src={rodrigoPhoto}
              alt="Rodrigo Albuquerque"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-saas-body leading-relaxed text-[17px]">
              Rodrigo Albuquerque liderou <strong className="text-saas-ink">R$80 milhões em vendas anuais</strong> antes de fundar a BA Consultoria, onde compilou o aprendizado de mais de 100 empresas atendidas. A BA opera nas quatro frentes que sustentam crescimento de receita: consultoria estratégica, execução de marketing, automação com IA e inteligência comercial.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((s, i) => (
                <StatCard key={s.num} value={s.num} label={s.label} accent={i === 0} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 05 / REDE */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <div>
          <Eyebrow>05 Rede</Eyebrow>
          <h2 className={"mt-5 " + H2_CLS}>Referências.</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {mentors.map((m) => (
            <Card key={m.name} className="overflow-hidden">
              <div className="overflow-hidden aspect-square">
                <img
                  loading="lazy"
                  src={m.photo}
                  alt={m.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-5">
                <h3 className="font-extrabold text-saas-ink text-[16px] leading-tight tracking-tight">{m.name}</h3>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mt-2 mb-3">{m.role}</p>
                <p className="text-saas-muted text-[12.5px] leading-relaxed">{m.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-white/[0.06] py-20 text-center space-y-6">
        <div className="flex justify-center">
          <Eyebrow>Próximo passo</Eyebrow>
        </div>
        <h2 className="font-extrabold text-saas-ink text-[clamp(30px,4.6vw,56px)] leading-[1.08] tracking-tight">
          O diagnóstico está feito.<br />Falta a <Accent>decisão</Accent>.
        </h2>
        <div className="pt-4">
          <a
            href="https://wa.me/5511999718595"
            target="_blank"
            rel="noopener noreferrer"
            className={SAAS_BTN_PRIMARY}
            onClick={() => tracker.track("cta_click", { product: "royal-eagle", location: "proposta_cta" })}
          >
            Falar no WhatsApp <span aria-hidden>→</span>
          </a>
        </div>
      </div>

      {/* FECHAMENTO */}
      <div className="border-t border-white/[0.06] py-12 flex flex-col sm:flex-row justify-between items-end gap-6 flex-wrap">
        <div>
          <p className="font-extrabold text-saas-ink text-[22px] leading-none tracking-tight">Rodrigo Albuquerque</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint mt-2">BA Consultoria · Junho 2026</p>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint text-right">
          <p>File PROP-RE-2026.06</p>
          <p>Ref. DIAG-RE-2026.05</p>
          <p>Fim do documento</p>
        </div>
      </div>

      {/* FOOTNOTES */}
      <div className="border-t border-white/[0.06] py-6 font-mono text-[10px] text-saas-faint-2 leading-relaxed">
        <span className="text-saas-faint">¹</span> Oldroyd, J. B. — "The Short Life of Online Sales Leads", MIT Sloan / InsideSales.com, publicado na Harvard Business Review, 2011.<br />
        <span className="text-saas-faint">²</span> Reichheld, F. F. &amp; Sasser Jr., W. E. — "Zero Defections: Quality Comes to Services", Harvard Business Review, 1990.
      </div>

    </PropostaLayout>
  );
};

export default PropostaRoyalEagle;
