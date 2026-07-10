import rodrigoPhoto from "@/assets/founders/rodrigo-albuquerque.webp";
import diegoBarretoPhoto from "@/assets/mentors/diego-barreto.webp";
import pedroSommaPhoto from "@/assets/mentors/pedro-somma.webp";
import vaboPhoto from "@/assets/mentors/vabo.webp";
import joaoOliverioPhoto from "@/assets/mentors/joao-oliverio.webp";
import joseDiogoPhoto from "@/assets/mentors/jose-diogo.webp";
import PropostaLayout from "@/components/pb/PropostaLayout";
import SectionHeader from "@/components/pb/SectionHeader";
import StratCard from "@/components/pb/StratCard";
import { Accent, SAAS_BTN_PRIMARY, SAAS_GRADIENT_TEXT } from "@/components/saas/ui";

const mentors = [
  {
    name: "Diego Barreto",
    role: "CEO — iFood",
    photo: diegoBarretoPhoto,
    bio: 'Autor do best-seller "Nova Economia", lidera a expansão e inovação no iFood.',
  },
  {
    name: "Pedro Somma",
    role: "Ex-COO — 99 Taxi",
    photo: pedroSommaPhoto,
    bio: "Papel fundamental na expansão e operação da 99, consolidando-a como líder em mobilidade.",
  },
  {
    name: "Luis Vabo Jr.",
    role: "Ex-diretor — Stone",
    photo: vaboPhoto,
    bio: 'Empreendedor serial, investidor e autor de "Falar em público é para você!".',
  },
  {
    name: "João Olivério",
    role: "CEO — Sales As A System",
    photo: joaoOliverioPhoto,
    bio: "Especialista em vendas, Country Manager da Apollo.io e mentor no G4 Sales.",
  },
  {
    name: "José Diogo C. Rodrigues",
    role: "CMO Latam — Tinder",
    photo: joseDiogoPhoto,
    bio: "Experiência em Brand Marketing na Nike, Red Bull e atualmente Tinder Latam & Canadá.",
  },
];

const stats = [
  { num: "+R$130M", label: "gerados em vendas" },
  { num: "100+", label: "consultorias realizadas" },
  { num: "+7", label: "países atendidos" },
  { num: "+54", label: "avaliações 5 estrelas" },
];

const PropostaDanielleSena = () => {
  return (
    <PropostaLayout cliente="Danielle Sena" projeto="Posicionamento Premium">

      {/* ========== QUEM ESTÁ POR TRÁS ========== */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <SectionHeader
          idx="// 01"
          label="Sobre"
          headline="Quem está por trás"
        />

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 items-start">
          <div className="overflow-hidden rounded-2xl border border-white/[0.09] aspect-square">
            <img
              loading="lazy"
              src={rodrigoPhoto}
              alt="Rodrigo Albuquerque"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-5">
            <p className="text-saas-body leading-relaxed">
              Rodrigo Albuquerque investiu meio milhão de reais em mentoria com alguns dos maiores empreendedores do Brasil. Liderou R$80 milhões em vendas anuais e compilou na BA Consultoria o aprendizado extraído de mais de 100 empresas que receberam consultoria.
            </p>
            <p className="text-saas-body leading-relaxed">
              A BA Consultoria une consultoria estratégica, execução de marketing, automação com IA e inteligência comercial — tudo focado em gerar retorno financeiro real e escalável.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <StratCard key={s.num}>
                  <div className={`text-2xl font-extrabold leading-none mb-1 ${SAAS_GRADIENT_TEXT}`}>{s.num}</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-saas-muted">{s.label}</div>
                </StratCard>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ========== REFERÊNCIAS ========== */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <SectionHeader
          idx="// 02"
          label="Referências"
          headline="Mentores e professores"
          sub="Aprendemos diretamente com alguns dos maiores líderes do mercado brasileiro — e é essa bagagem que sustenta cada decisão estratégica da consultoria."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {mentors.map((m) => (
            <StratCard key={m.name} className="text-center p-6">
              <div className="w-16 h-16 overflow-hidden rounded-full border border-white/[0.09] mx-auto mb-4">
                <img
                  loading="lazy"
                  src={m.photo}
                  alt={m.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-bold text-saas-ink text-sm leading-tight mb-1">{m.name}</div>
              <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-saas-cyan mb-2">{m.role}</div>
              <div className="text-saas-muted text-xs leading-relaxed">{m.bio}</div>
            </StratCard>
          ))}
        </div>
      </div>

      {/* ========== O CENÁRIO ========== */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <SectionHeader
          idx="// 03"
          label="O Cenário"
          headline="O problema real"
        />

        <div className="space-y-4">
          <div className="rounded-2xl border border-white/[0.09] bg-saas-card p-6">
            <p className="text-saas-body leading-relaxed">
              Você tem <strong className="text-saas-ink font-medium">cinco anos de experiência</strong>, um trabalho de excelência e uma visão clara do nível de clínica que quer construir. O que ainda não existe é a imagem que comunica isso ao público que você quer alcançar.
            </p>
          </div>
          <div className="rounded-2xl border border-white/[0.09] bg-saas-card p-6">
            <p className="text-saas-body leading-relaxed">
              A maioria das estratégias de marketing resolve o problema do <strong className="text-saas-ink font-medium">volume</strong>. O que você precisa é de posicionamento — a construção deliberada de uma percepção de valor que atraia quem reconhece qualidade e paga por ela.
            </p>
          </div>
          <div className="rounded-2xl border border-white/[0.09] bg-saas-card p-6">
            <p className="text-saas-body leading-relaxed">
              Não é sobre gravar mais. Não é sobre roteiro. É sobre <strong className="text-saas-ink font-medium">entender o que em você gera desejo nesse público</strong> — e amplificar isso de forma autêntica.
            </p>
          </div>
        </div>
      </div>

      {/* ========== O PROCESSO ========== */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <SectionHeader
          idx="// 04"
          label="O Processo"
          headline="Três meses, três fases"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              num: "Mês 01",
              title: "Fundação",
              items: [
                "Sessão de imersão: quem você é, pra quem, e o seu diferencial real",
                "Documento de posicionamento: ICP, proposta de valor e tom de voz",
                "Auditoria completa do Instagram com diretrizes de ajuste",
                "Guia de identidade de linguagem — o que dizer e o que evitar",
              ],
            },
            {
              num: "Mês 02",
              title: "Ajustes",
              items: [
                "Ciclos semanais de avaliação e refinamento",
                "Análise do que está funcionando e do que precisa mudar",
                "Calibração de conteúdo com base em dados reais",
                "Desenvolvimento da consistência de posicionamento",
              ],
            },
            {
              num: "Mês 03",
              title: "Consolidação",
              items: [
                "Ciclos semanais com foco em escala e consistência",
                "Revisão geral do posicionamento construído",
                "Plano de continuidade — o que você faz sozinha daqui pra frente",
                "Documento final consolidado com tudo que foi construído",
              ],
            },
          ].map((phase) => (
            <StratCard key={phase.num}>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-saas-muted mb-2">{phase.num}</p>
              <h3 className="font-extrabold text-saas-ink text-xl leading-tight tracking-tight mb-6">{phase.title}</h3>
              <ul className="space-y-3">
                {phase.items.map((item) => (
                  <li key={item} className="text-saas-body text-sm leading-relaxed flex gap-2">
                    <span className="text-saas-cyan mt-0.5 shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </StratCard>
          ))}
        </div>

        <StratCard>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-saas-cyan mb-6">// Ciclos semanais — meses 2 e 3</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { num: "01", label: "O que foi executado na semana" },
              { num: "02", label: "Análise dos resultados e reações" },
              { num: "03", label: "Hipóteses e melhorias propostas" },
              { num: "04", label: "Próxima ação definida" },
            ].map((step) => (
              <div key={step.num} className="rounded-xl border border-white/[0.09] bg-white/[0.02] p-4 text-center">
                <div className="font-mono text-[10px] text-saas-cyan mb-2">{step.num}</div>
                <div className="text-saas-body text-xs leading-relaxed">{step.label}</div>
              </div>
            ))}
          </div>
        </StratCard>
      </div>

      {/* ========== INVESTIMENTO ========== */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <SectionHeader
          idx="// 05"
          label="Investimento"
          headline="Proposta comercial"
        />

        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="shrink-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-saas-muted mb-1">Valor total</p>
            <Accent className="font-extrabold text-[clamp(48px,6vw,80px)] leading-none">R$ 6.000</Accent>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-saas-muted mt-2">3 meses de consultoria</p>
          </div>

          <div className="flex-1 space-y-3">
            <div className="rounded-2xl border border-white/[0.09] bg-saas-card p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-saas-cyan mb-1">Pix</p>
              <p className="text-saas-body text-sm">50% na contratação + 50% após 30 dias</p>
            </div>
            <div className="rounded-2xl border border-white/[0.09] bg-saas-card p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-saas-cyan mb-1">Cartão de crédito</p>
              <p className="text-saas-body text-sm">3x de R$ 2.000</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-saas-muted mb-5">O que está incluído</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "1 call semanal de acompanhamento (45–60 min)",
              "Canal direto para dúvidas no meio do caminho",
              "Documento de posicionamento + guia de linguagem",
              "Entrega final consolidada ao término dos 3 meses",
            ].map((item) => (
              <div key={item} className="flex gap-3 items-start">
                <span className="text-saas-cyan shrink-0 mt-0.5">→</span>
                <span className="text-saas-body text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========== CTA ========== */}
      <div className="border-t border-white/[0.06] py-16 text-center space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-saas-muted">
          O luxo é a cultura da excelência. Tudo começa com a percepção de quem você é.
        </p>
        <a
          href="https://wa.me/5511999718595"
          target="_blank"
          rel="noopener noreferrer"
          className={SAAS_BTN_PRIMARY}
        >
          Falar com Rodrigo →
        </a>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-saas-faint">
          ÁUREA PERFORMANCE · RODRIGO ALBUQUERQUE
        </p>
      </div>

    </PropostaLayout>
  );
};

export default PropostaDanielleSena;
