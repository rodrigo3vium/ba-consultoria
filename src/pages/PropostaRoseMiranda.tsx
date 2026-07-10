import PropostaLayout from "@/components/pb/PropostaLayout";
import {
  Accent,
  Eyebrow,
  StatCard,
  SAAS_BTN_PRIMARY,
  SAAS_CARD,
  SAAS_GRADIENT_TEXT,
} from "@/components/saas/ui";
import rodrigoPhoto from "@/assets/founders/rodrigo-albuquerque.webp";
import diegoBarretoPhoto from "@/assets/mentors/diego-barreto.webp";
import pedroSommaPhoto from "@/assets/mentors/pedro-somma.webp";
import vaboPhoto from "@/assets/mentors/vabo.webp";
import joaoOliverioPhoto from "@/assets/mentors/joao-oliverio.webp";
import joseDiogoPhoto from "@/assets/mentors/jose-diogo.webp";

const PHOTO_FILTER = { filter: "grayscale(100%) contrast(1.1) brightness(0.85)" };
const SECTION_H2 =
  "mt-5 font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight";

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

const PropostaRoseMiranda = () => {
  return (
    <PropostaLayout cliente="Rose Miranda" projeto="Estrutura Digital para Acelerar seus Negócios">

      {/* INTRO */}
      <div className="border-t border-white/[0.06] py-16">
        <p className="text-saas-body text-[17px] leading-relaxed max-w-2xl">
          Automação, presença digital e geração de demanda para a consultoria da Rose Miranda — tudo o que você precisa para ir ao mercado com estrutura profissional.
        </p>
      </div>

      {/* 01 / SOBRE */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <div>
          <Eyebrow>01 · Sobre</Eyebrow>
          <h2 className={SECTION_H2}>
            Quem está por trás desta <Accent>proposta</Accent>.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 items-start">
          <div className={SAAS_CARD + " overflow-hidden aspect-square"}>
            <img
              loading="lazy"
              src={rodrigoPhoto}
              alt="Rodrigo Albuquerque"
              className="w-full h-full object-cover"
              style={PHOTO_FILTER}
            />
          </div>
          <div>
            <p className="text-saas-body text-[17px] leading-relaxed mb-4">
              Rodrigo Albuquerque investiu meio milhão de reais em mentoria com alguns dos maiores empreendedores do Brasil. Liderou R$80 milhões em vendas anuais e compilou na BA Consultoria o aprendizado extraído de mais de 100 empresas que receberam consultoria.
            </p>
            <p className="text-saas-body text-[17px] leading-relaxed mb-8">
              A BA Consultoria une consultoria estratégica, execução de marketing, automação com IA e inteligência comercial — tudo focado em gerar retorno financeiro real e escalável.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <StatCard key={s.num} value={s.num} label={s.label} accent />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 02 / REFERÊNCIAS */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <div>
          <Eyebrow>02 · Referências</Eyebrow>
          <h2 className={SECTION_H2}>
            Nossos <Accent>Mentores e Professores</Accent>.
          </h2>
        </div>
        <p className="text-saas-body text-[17px] leading-relaxed max-w-2xl">
          Aprendemos diretamente com alguns dos maiores líderes do mercado brasileiro.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {mentors.map((m) => (
            <div key={m.name} className={SAAS_CARD + " p-5"}>
              <div className="rounded-xl border border-white/[0.09] overflow-hidden aspect-square mb-4">
                <img
                  loading="lazy"
                  src={m.photo}
                  alt={m.name}
                  className="w-full h-full object-cover"
                  style={PHOTO_FILTER}
                />
              </div>
              <h3 className="font-bold text-saas-ink text-[16px] leading-tight">{m.name}</h3>
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-saas-cyan mt-2 mb-3">{m.role}</p>
              <p className="text-saas-muted text-[12px] leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 03 / CONTEXTO */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <div>
          <Eyebrow>03 · Contexto</Eyebrow>
          <h2 className={SECTION_H2}>
            Onde a Rose está <Accent>hoje</Accent>.
          </h2>
        </div>
        <p className="text-saas-body text-[17px] leading-relaxed max-w-2xl">
          Empresária há mais de 25 anos, Rose está iniciando uma nova fase profissional — e precisa de infraestrutura digital para transformar experiência em escala.
        </p>
        <div className={SAAS_CARD + " p-8 space-y-4"}>
          <p className="text-saas-body text-[17px] leading-relaxed">
            Rose Miranda é empresária desde os 18 anos, já passou por quatro segmentos diferentes e acumula mais de 25 anos de experiência com vendas, gestão de times comerciais e atendimento ao cliente. Dona da Íntegra há décadas, construiu uma base de mais de 10 mil contatos e um networking forte em São Paulo — inclusive com convites para palestrar em grupos de Alphaville.
          </p>
          <p className="text-saas-body text-[17px] leading-relaxed">
            Agora, Rose quer fazer a transição para consultoria empresarial, ajudando outras empresas a estruturar suas áreas comerciais, CRM e processos de vendas. A demanda orgânica já começou a aparecer — pessoas estão procurando ela depois de posts em redes sociais. O principal gargalo agora não é falta de experiência ou de rede —{" "}
            é <Accent>a ausência de estrutura digital para captar, organizar e converter essa demanda em clientes de consultoria.</Accent>
          </p>
        </div>
      </div>

      {/* 04 / DIAGNÓSTICO */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <div>
          <Eyebrow>04 · Diagnóstico</Eyebrow>
          <h2 className={SECTION_H2}>
            O que mapeamos <Accent>na nossa conversa</Accent>.
          </h2>
        </div>
        <p className="text-saas-body text-[17px] leading-relaxed max-w-2xl">
          Uma profissional com bagagem imensa, mas que precisa de ferramentas para transformar potencial em operação.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={SAAS_CARD + " p-8"}>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.09]">
              <span className="inline-flex items-center rounded-full border border-white/[0.14] bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan">Pontos Fortes</span>
            </div>
            <ul className="space-y-3">
              {[
                "25+ anos de experiência empresarial e comercial em múltiplos segmentos",
                "Base de mais de 10 mil contatos construída organicamente ao longo de décadas",
                "Networking ativo em São Paulo — convites para palestras e grupos empresariais em Alphaville",
                "Demanda orgânica já aparecendo — pessoas procurando seus serviços pelas redes sociais",
                "Visão 360° do negócio — entende que resultado depende da integração entre marketing, vendas e operação",
              ].map((item) => (
                <li key={item} className="text-saas-body text-[14px] leading-relaxed flex gap-2">
                  <span className="text-saas-cyan mt-0.5 shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={SAAS_CARD + " p-8"}>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.09]">
              <span className="inline-flex items-center rounded-full border border-white/[0.14] bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted">Gargalos Atuais</span>
            </div>
            <ul className="space-y-3">
              {[
                "Zero estrutura digital — sem site, sem landing page, sem CRM implementado",
                "Comunicação manual e individual — envia mensagens uma a uma para cada contato no WhatsApp",
                "Sem processo de captação ativa — demanda chega por acaso, não por estratégia",
                "Falta de material de apresentação profissional para fechar com novos clientes",
                "Transição de modelo de negócio sem infraestrutura de suporte tecnológico",
              ].map((item) => (
                <li key={item} className="text-saas-body text-[14px] leading-relaxed flex gap-2">
                  <span className="text-saas-faint mt-0.5 shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 05 / OBJETIVO */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <div>
          <Eyebrow>05 · Objetivo</Eyebrow>
          <h2 className={SECTION_H2}>
            O que este projeto <Accent>vai resolver</Accent>.
          </h2>
        </div>
        <p className="text-saas-body text-[17px] leading-relaxed max-w-2xl">
          Criar a infraestrutura digital completa para Rose operar sua consultoria com profissionalismo e escala.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { num: "01", text: "Automação de WhatsApp + CRM personalizado para gerenciar a base de 10 mil contatos, disparar mensagens segmentadas e acompanhar o funil de vendas de forma organizada — sem precisar mandar um a um." },
            { num: "02", text: "Presença digital profissional com site completo que posicione Rose como referência em consultoria empresarial e comercial, transmitindo credibilidade para fechar com novos clientes." },
            { num: "03", text: "Máquina de geração de demanda com landing page otimizada e gestão de tráfego pago para atrair empresários qualificados de forma contínua e previsível." },
          ].map((obj) => (
            <div key={obj.num} className={SAAS_CARD + " p-6"}>
              <p className={SAAS_GRADIENT_TEXT + " font-extrabold text-[clamp(48px,6vw,80px)] leading-none mb-4"}>{obj.num}</p>
              <p className="text-saas-body text-[14px] leading-relaxed">{obj.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 06 / INVESTIMENTO */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <div>
          <Eyebrow>06 · Investimento</Eyebrow>
          <h2 className={SECTION_H2}>
            Proposta <Accent>comercial</Accent>.
          </h2>
        </div>
        <p className="text-saas-body text-[17px] leading-relaxed max-w-2xl">
          Serviços disponíveis para montar a estrutura ideal para o seu momento.
        </p>
        <div className={"overflow-hidden " + SAAS_CARD}>
          <div className="grid grid-cols-3 border-b border-white/[0.09] bg-white/[0.02]">
            <div className="p-4 font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan">Serviço</div>
            <div className="p-4 font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan border-l border-white/[0.09]">Observação</div>
            <div className="p-4 font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan border-l border-white/[0.09] text-right">Valor</div>
          </div>
          {[
            { servico: "Automação WhatsApp + CRM", obs: "Implementação personalizada", valor: "R$ 8.000" },
            { servico: "Landing Page", obs: "Página única", valor: "R$ 1.500" },
            { servico: "Site Completo", obs: "—", valor: "R$ 3.000" },
            { servico: "Gestão de Tráfego Pago", obs: "Recorrente", valor: "R$ 1.500/mês" },
          ].map((row) => (
            <div key={row.servico} className="grid grid-cols-3 border-b border-white/[0.06] last:border-b-0">
              <div className="p-5 text-saas-ink text-[15px]">{row.servico}</div>
              <div className="p-5 text-saas-body text-[14px] border-l border-white/[0.06]">{row.obs}</div>
              <div className="p-5 font-extrabold text-saas-ink text-[18px] border-l border-white/[0.06] text-right">{row.valor}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-white/[0.06] py-20 text-center space-y-6">
        <Eyebrow>Próximo passo</Eyebrow>
        <h2 className="font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight">
          Vamos <Accent>começar</Accent>?
        </h2>
        <p className="text-saas-ink text-[18px] italic leading-relaxed max-w-xl mx-auto">
          Rose, você tem 25 anos de experiência, uma rede forte e a demanda já está batendo na porta. O que falta é a estrutura para capturar tudo isso. Vamos construir juntos.
        </p>
        <div className="pt-4">
          <a
            href="https://wa.me/5511999718595"
            target="_blank"
            rel="noopener noreferrer"
            className={SAAS_BTN_PRIMARY}
          >
            Falar no WhatsApp <span aria-hidden>→</span>
          </a>
        </div>
      </div>

    </PropostaLayout>
  );
};

export default PropostaRoseMiranda;
