import { useEffect } from "react";
import { ArrowRight, Check, Minus } from "lucide-react";
import {
  Accent,
  Eyebrow,
  Card,
  Section,
  SectionHeader,
  StatCard,
  SAAS_BTN_PRIMARY,
} from "@/components/saas/ui";
import rodrigoPhoto from "@/assets/founders/rodrigo-albuquerque.webp";
import diegoBarretoPhoto from "@/assets/mentors/diego-barreto.webp";
import pedroSommaPhoto from "@/assets/mentors/pedro-somma.webp";
import vaboPhoto from "@/assets/mentors/vabo.webp";
import joaoOliverioPhoto from "@/assets/mentors/joao-oliverio.webp";
import joseDiogoPhoto from "@/assets/mentors/jose-diogo.webp";

/* ── Dados fixos ───────────────────────────────────────────── */

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

const pontosFortes = [
  "Você já atrai interessados de forma consistente",
  "Cada lead é atendido pessoalmente, com o cuidado que fideliza",
  "Marca própria conectada ao ecossistema do Studio Sal",
];

const gargalos = [
  "Triagem manual, conversa por conversa, no WhatsApp",
  "Sem filtro entre o curioso e quem realmente tem perfil",
  "Site travado: mudar um texto ou imagem vira uma pequena obra",
  "Cada proposta nova exige montar uma página quase do zero",
];

const objetivos = [
  {
    num: "01",
    text: "Um site novo, rápido e focado em converter — que você edita sozinha: textos, imagens e páginas de proposta novas em minutos, sem depender de ninguém.",
  },
  {
    num: "02",
    text: "Um motor de qualificação: um formulário inteligente recebe e filtra cada interessada, e os leads com perfil chegam organizados, prontos pra você abordar no WhatsApp e marcar a reunião.",
  },
  {
    num: "03",
    text: "Treinamento em vídeo, direto ao ponto: você assiste uma vez, consulta sempre que bater dúvida e fica dona da operação de ponta a ponta.",
  },
];

const steps = [
  {
    num: "01",
    title: "Site + painel de edição",
    desc: "Estruturo o site novo e o painel que te dá autonomia total sobre o conteúdo.",
  },
  {
    num: "02",
    title: "Motor de qualificação",
    desc: "Coloco de pé o formulário, a lógica que qualifica os leads e o encaminhamento organizado pro WhatsApp.",
  },
  {
    num: "03",
    title: "Treinamento + entrega",
    desc: "Ajustes finais, gravação do treinamento e entrega do sistema completo, funcionando.",
  },
];

/* ── Componente ────────────────────────────────────────────── */

const PropostaTreevium = () => {
  useEffect(() => {
    const prev = {
      bg: document.body.style.backgroundColor,
      color: document.body.style.color,
      pt: document.body.style.paddingTop,
    };
    document.body.style.backgroundColor = "#0A0A13";
    document.body.style.color = "#B7B8C7";
    document.body.style.paddingTop = "0";
    return () => {
      document.body.style.backgroundColor = prev.bg;
      document.body.style.color = prev.color;
      document.body.style.paddingTop = prev.pt;
    };
  }, []);

  return (
    <div className="min-h-screen bg-saas-void text-saas-body antialiased">
      {/* ========== HERO ========== */}
      <header className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-saas-violet/20 blur-[110px]" />
          <div className="absolute -top-10 right-0 w-[520px] h-[420px] rounded-full bg-saas-cyan/15 blur-[110px]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[92vh] flex flex-col items-center justify-center text-center py-16">
          <div className="animate-fade-in">
            <Eyebrow>Proposta Exclusiva · Julho 2026</Eyebrow>
          </div>

          <h1
            className="animate-fade-in mt-7 font-extrabold text-saas-ink text-[clamp(28px,4.2vw,52px)] leading-[1.1] tracking-tight max-w-[24ch]"
            style={{ animationDelay: "0.15s" }}
          >
            Uma porta de entrada <Accent>à altura do evento</Accent> que seu
            cliente vai fechar
          </h1>

          <p
            className="animate-fade-in mt-6 text-saas-body text-base md:text-lg leading-relaxed max-w-[58ch]"
            style={{ animationDelay: "0.3s" }}
          >
            Um site que você edita sozinha e um sistema que captura, qualifica e organiza
            cada interessada até a reunião — o mesmo motor que roda por trás do
            ecossistema do{" "}
            <strong className="font-semibold text-saas-ink">Studio Sal</strong>.
          </p>

          <div
            className="animate-fade-in mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] text-saas-faint"
            style={{ animationDelay: "0.45s" }}
          >
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet" />
              Proponente: Rodrigo Albuquerque
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet" />
              Preparado para: Dani Barcelos · Treevium
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet" />
              BA Consultoria
            </span>
          </div>
        </div>
      </header>

      {/* ========== CONTEXTO ========== */}
      <Section container="max-w-3xl">
        <SectionHeader eyebrow="O ponto de partida">
          Hoje, quase tudo depende de você — <Accent>na mão</Accent>.
        </SectionHeader>
        <p className="mt-5 text-saas-muted text-base md:text-lg leading-relaxed max-w-[62ch]">
          Um site que resiste às suas mudanças e uma triagem que consome as suas horas.
          A proposta abaixo resolve as duas pontas.
        </p>

        <Card className="mt-10 p-7 md:p-8 space-y-4 text-saas-body text-[15.5px] leading-relaxed">
          <p>
            Cada lead é respondido e qualificado por você, uma conversa de cada vez,
            direto no WhatsApp. Não existe um filtro antes de chegar em você: o
            interessado real e o curioso ocupam exatamente o mesmo tempo.
          </p>
          <p>
            E o site trava do outro lado — mudar um texto ou uma imagem vira uma pequena
            obra, e cada proposta nova exige montar uma página quase do zero.
          </p>
          <p>
            O gargalo agora não é falta de interessados — é o{" "}
            <Accent className="font-semibold">
              tempo que a triagem manual e um site engessado roubam de você, colocando
              um teto no quanto você consegue crescer.
            </Accent>
          </p>
        </Card>
      </Section>

      {/* ========== DIAGNÓSTICO ========== */}
      <Section container="max-w-5xl" className="bg-saas-void-2">
        <SectionHeader eyebrow="Diagnóstico">
          O que mapeamos na nossa conversa
        </SectionHeader>
        <p className="mt-5 text-saas-muted text-base md:text-lg leading-relaxed max-w-[62ch]">
          Você já tem a demanda e o atendimento no ponto. O que falta é a estrutura que
          trabalha antes de você e obedece você.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {/* Pontos Fortes */}
          <Card className="p-7 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex w-9 h-9 rounded-full bg-saas-green/10 items-center justify-center">
                <Check className="text-saas-green" size={18} />
              </span>
              <h3 className="font-bold text-saas-ink text-base">Pontos Fortes</h3>
            </div>
            <ul className="space-y-3.5">
              {pontosFortes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14.5px] text-saas-body leading-relaxed">
                  <Check className="w-4 h-4 text-saas-green flex-none mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          {/* Gargalos */}
          <Card className="p-7 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex w-9 h-9 rounded-full bg-saas-violet/10 items-center justify-center">
                <Minus className="text-saas-violet" size={18} />
              </span>
              <h3 className="font-bold text-saas-ink text-base">Gargalos Atuais</h3>
            </div>
            <ul className="space-y-3.5">
              {gargalos.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14.5px] text-saas-body leading-relaxed">
                  <Minus className="w-4 h-4 text-saas-violet flex-none mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* ========== OBJETIVOS ========== */}
      <Section container="max-w-5xl">
        <SectionHeader eyebrow="O que vamos entregar">
          Um ecossistema próprio, <Accent>em três partes</Accent>
        </SectionHeader>
        <p className="mt-5 text-saas-muted text-base md:text-lg leading-relaxed max-w-[62ch]">
          Um site que obedece você, uma triagem que trabalha antes de você e a autonomia
          para operar tudo sozinha.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {objetivos.map((obj) => (
            <Card
              key={obj.num}
              className="p-6 md:p-7 hover:border-white/[0.18] transition-colors"
            >
              <div className="text-3xl font-extrabold leading-none bg-gradient-to-r from-saas-cyan to-saas-violet bg-clip-text text-transparent mb-4">
                {obj.num}
              </div>
              <p className="text-[14.5px] text-saas-body leading-relaxed">{obj.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ========== CRONOGRAMA ========== */}
      <Section container="max-w-3xl" className="bg-saas-void-2">
        <SectionHeader eyebrow="Como vamos construir">
          Do aceite ao <Accent>sistema rodando</Accent>
        </SectionHeader>

        <div className="mt-10">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`grid grid-cols-[auto_1fr] gap-6 md:gap-8 py-7 ${
                i > 0 ? "border-t border-white/[0.06]" : ""
              }`}
            >
              <div className="text-4xl font-extrabold leading-none bg-gradient-to-r from-saas-cyan to-saas-violet bg-clip-text text-transparent">
                {step.num}
              </div>
              <div>
                <h3 className="font-bold text-saas-ink text-lg">{step.title}</h3>
                <p className="mt-1.5 text-[14.5px] text-saas-body leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/[0.14] px-6 py-3 text-sm text-saas-body">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet animate-pulse" />
          <span>
            Prazo estimado de entrega:{" "}
            <b className="font-semibold text-saas-ink">até 3 semanas</b> após o aceite
          </span>
        </div>
      </Section>

      {/* ========== INVESTIMENTO ========== */}
      <Section container="max-w-3xl">
        <SectionHeader eyebrow="Investimento" center>
          Valor único pelo <Accent>projeto completo</Accent>
        </SectionHeader>

        <div className="mt-12 max-w-[560px] mx-auto">
          <Card className="relative overflow-hidden p-9 md:p-11 text-center shadow-saas-card">
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-saas-cyan to-saas-violet"
            />
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-saas-cyan mb-3">
              Projeto Completo
            </div>
            <h3 className="font-extrabold text-saas-ink text-2xl tracking-tight mb-3">
              Ecossistema Treevium
            </h3>
            <p className="text-sm text-saas-muted leading-relaxed max-w-[42ch] mx-auto mb-8">
              Site editável, motor de qualificação de leads e treinamento gravado — tudo
              entregue funcionando e sob o seu controle.
            </p>

            <div className="text-[clamp(44px,9vw,64px)] font-extrabold leading-none tracking-tight bg-gradient-to-r from-saas-cyan to-saas-violet bg-clip-text text-transparent">
              R$&nbsp;6.000,00
            </div>
            <div className="mt-3 text-[13px] text-saas-muted">Valor único · sem mensalidade</div>

            <div className="mt-9 pt-7 border-t border-white/[0.09] text-left">
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-faint mb-5">
                O que está incluso
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-[14.5px] text-saas-body leading-relaxed">
                  <Check className="w-4 h-4 text-saas-green flex-none mt-0.5" />
                  <span>
                    <strong className="font-semibold text-saas-ink">Site editável por você</strong>{" "}
                    — painel simples pra trocar textos e imagens e montar páginas de
                    proposta em minutos
                  </span>
                </li>
                <li className="flex items-start gap-3 text-[14.5px] text-saas-body leading-relaxed">
                  <Check className="w-4 h-4 text-saas-green flex-none mt-0.5" />
                  <span>
                    <strong className="font-semibold text-saas-ink">Motor de qualificação</strong>{" "}
                    — formulário inteligente que filtra cada interessada e entrega os
                    leads organizados pro WhatsApp
                  </span>
                </li>
                <li className="flex items-start gap-3 text-[14.5px] text-saas-body leading-relaxed">
                  <Check className="w-4 h-4 text-saas-green flex-none mt-0.5" />
                  <span>
                    <strong className="font-semibold text-saas-ink">Treinamento gravado</strong>{" "}
                    — passo a passo em vídeo pra você operar tudo sem depender de mim
                  </span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </Section>

      {/* ========== SOBRE / QUEM SOU EU (FIXO) ========== */}
      <Section container="max-w-5xl">
        <SectionHeader eyebrow="Quem sou eu">
          Quem está por trás desta proposta
        </SectionHeader>

        <div className="mt-12 grid md:grid-cols-[1fr_2fr] gap-10 items-start">
          <div className="max-w-[220px] md:max-w-none mx-auto md:mx-0 w-full aspect-square rounded-2xl overflow-hidden border border-white/[0.09]">
            <img
              loading="lazy"
              src={rodrigoPhoto}
              alt="Rodrigo Albuquerque"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-saas-body text-[15.5px] leading-relaxed mb-4">
              Rodrigo Albuquerque investiu meio milhão de reais em mentoria com alguns
              dos maiores empreendedores do Brasil. Liderou R$80 milhões em vendas anuais
              e compilou na BA Consultoria o aprendizado extraído de mais de 100 empresas
              que receberam consultoria.
            </p>
            <p className="text-saas-body text-[15.5px] leading-relaxed">
              A BA Consultoria une consultoria estratégica, execução de marketing,
              automação com IA e inteligência comercial — tudo focado em gerar retorno
              financeiro real e escalável.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <StatCard key={s.num} value={s.num} label={s.label} accent />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ========== MENTORES (FIXO) ========== */}
      <Section container="max-w-6xl">
        <SectionHeader eyebrow="Referências" center>
          Nossos Mentores e Professores
        </SectionHeader>
        <p className="mt-5 text-saas-muted text-base md:text-lg leading-relaxed max-w-[62ch] mx-auto text-center">
          Aprendemos diretamente com alguns dos maiores líderes do mercado brasileiro.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {mentors.map((m) => (
            <Card
              key={m.name}
              className="p-5 text-center hover:border-white/[0.18] transition-colors"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 border border-white/[0.10]">
                <img
                  loading="lazy"
                  src={m.photo}
                  alt={m.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-saas-ink text-[15px] mb-1">{m.name}</h3>
              <p className="text-xs font-semibold text-saas-cyan mb-2">{m.role}</p>
              <p className="text-xs text-saas-faint leading-relaxed">{m.bio}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ========== CTA ========== */}
      <Section container="max-w-3xl" className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[360px] rounded-full bg-saas-violet/10 blur-[110px]" />
        </div>
        <div className="relative text-center">
          <SectionHeader eyebrow="Próximo passo" center>
            É só dar o <Accent>sinal verde</Accent>.
          </SectionHeader>
          <p className="mt-6 italic text-saas-muted text-base md:text-lg leading-relaxed max-w-[56ch] mx-auto">
            A partir do aceite, alinhamos o kickoff e a construção começa na mesma semana.
            Você acompanha cada etapa e, no fim, recebe tudo rodando e sob o seu controle.
            Vamos construir isso, Dani.
          </p>
          <a
            href="https://wa.me/5511999718595"
            target="_blank"
            rel="noopener noreferrer"
            className={SAAS_BTN_PRIMARY + " mt-10"}
          >
            Falar com Rodrigo <ArrowRight size={16} />
          </a>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] py-10 text-center text-[13px] text-saas-faint">
        BA Consultoria © 2026 — Proposta válida por 7 dias
      </footer>
    </div>
  );
};

export default PropostaTreevium;
