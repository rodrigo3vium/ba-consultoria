import { useEffect } from "react";
import { buildHotmartCheckoutUrl } from "@/lib/hotmartUtils";
import { tracker } from "@/lib/tracking";
import { Calendar, Clock, Video, MessageCircle, Zap, DollarSign, Brain, Rocket, ArrowRight } from "lucide-react";
import ApocalypseSection from "@/components/claudecode/ApocalypseSection";
import metodoStarkLogo from "@/assets/metodo-stark-logo.svg";
import {
  Accent,
  Eyebrow,
  Section,
  SectionHeader,
  SAAS_BTN_PRIMARY,
  SAAS_CARD,
} from "@/components/saas/ui";

const HOTMART_BASE_URL = "https://pay.hotmart.com/T104822269G";

const ClaudeCode = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#0A0A13";
    document.body.style.paddingTop = "0";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.paddingTop = "";
    };
  }, []);

  useEffect(() => {
    tracker.page("Masterclass Claude Code");
  }, []);

  const handleCTA = (location: string) => {
    tracker.track("cta_click", {
      product: "claude-code",
      cta_location: location,
      page: "/educacao/claude-code",
    });
    const url = buildHotmartCheckoutUrl({ baseUrl: HOTMART_BASE_URL });
    window.open(url, "_blank");
  };

  const learningTopics = [
    {
      icon: Brain,
      title: "Fundamentos do Claude",
      description: "Por que ele é diferente das outras IAs e como isso muda a forma de trabalhar.",
    },
    {
      icon: Zap,
      title: "Chat, Code e Coworking",
      description: "A diferença entre os três modos e quando usar cada um na prática.",
    },
    {
      icon: Rocket,
      title: "Skills e MCPs",
      description: "Como utilizar Skills e MCPs para trabalhar melhor na nova era da IA.",
    },
    {
      icon: MessageCircle,
      title: "Automações práticas",
      description: "Como pensar automações sem complicação, mesmo para quem nunca abriu uma IDE.",
    },
  ];

  const practicalExamples = [
    {
      icon: DollarSign,
      text: "Como deixei de pagar mais de R$500 em aplicativos que repliquei com Claude",
    },
    {
      icon: Clock,
      text: "Claude Coworking + Notion = mais de 4 horas economizadas por semana",
    },
    {
      icon: Rocket,
      text: "Os aplicativos mais ousados que estou construindo e que estão mudando minha tese de negócios",
    },
    {
      icon: Brain,
      text: "O que a Y Combinator está dizendo sobre esse movimento",
    },
  ];

  return (
    <div className="min-h-screen bg-saas-void text-saas-body antialiased">
      {/* Minimal Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/[0.06] bg-saas-void/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-[64px] flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img loading="lazy" src={metodoStarkLogo} alt="Método Stark" className="w-8 h-8" />
            <span className="font-bold text-saas-ink text-[15px]">MÉTODO STARK</span>
          </div>
          <button onClick={() => handleCTA("nav")} className={SAAS_BTN_PRIMARY + " !px-5 !py-2.5 !text-[13px]"}>
            Inscrever-se
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden">
        {/* Radial glows */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-saas-violet/20 blur-[110px]" />
          <div className="absolute -top-10 right-0 w-[520px] h-[420px] rounded-full bg-saas-cyan/15 blur-[110px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-24 md:pb-28 text-center space-y-8 animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center">
            <img loading="lazy" src={metodoStarkLogo} alt="Método Stark" className="w-24 h-24 md:w-32 md:h-32" />
          </div>

          {/* Badge */}
          <div className="flex justify-center">
            <Eyebrow>Masterclass ao vivo · 25/03 às 19h</Eyebrow>
          </div>

          {/* Title */}
          <h1 className="font-extrabold text-saas-ink text-[clamp(25px,3.5vw,42px)] leading-[1.1] tracking-tight">
            Ganhe mais, trabalhe menos. <Accent>Automatizando sua vida com Claude Code.</Accent>
          </h1>

          {/* Subtitle */}
          <p className="text-saas-body text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Aprenda como pessoas comuns estão usando IA para cortar custos, automatizar
            tarefas operacionais e ganhar mais dinheiro. Sem precisar de equipe e sem saber programar.
          </p>

          {/* CTA */}
          <div className="pt-2">
            <button onClick={() => handleCTA("hero")} className={SAAS_BTN_PRIMARY}>
              Garantir minha vaga
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* O que você vai aprender */}
      <Section container="max-w-5xl" className="bg-saas-void-2">
        <SectionHeader eyebrow="O que você vai aprender" center className="mb-14 animate-fade-in">
          Da teoria à <Accent>prática</Accent>
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 animate-fade-in">
          {learningTopics.map((topic, index) => (
            <div key={index} className={SAAS_CARD + " p-7 hover:border-white/[0.16] transition-colors"}>
              <span className="inline-flex w-10 h-10 rounded-full bg-gradient-to-br from-saas-cyan to-saas-violet items-center justify-center mb-4">
                <topic.icon className="w-5 h-5 text-saas-void" />
              </span>
              <h3 className="font-bold text-saas-ink text-lg mb-2">{topic.title}</h3>
              <p className="text-saas-muted text-[15px] leading-relaxed">{topic.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* O que vou mostrar na prática */}
      <Section container="max-w-4xl">
        <SectionHeader eyebrow="Na prática" center className="mb-12 animate-fade-in">
          O que vou <Accent>mostrar ao vivo</Accent>
        </SectionHeader>

        {/* Quote */}
        <p className="italic text-saas-ink text-center text-[clamp(18px,2.4vw,24px)] leading-relaxed max-w-3xl mx-auto mb-14 animate-fade-in">
          "Vou abrir parte do que eu já venho construindo na prática — incluindo o que está mudando
          completamente minha tese de negócios."
        </p>

        <div className="space-y-4 animate-fade-in">
          {practicalExamples.map((item, index) => (
            <div
              key={index}
              className={SAAS_CARD + " flex items-start gap-5 p-6 hover:border-white/[0.16] transition-colors"}
            >
              <item.icon className="w-5 h-5 mt-1 flex-shrink-0 text-saas-cyan" />
              <p className="text-saas-body text-base md:text-lg leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* O Mundo Já Mudou */}
      <ApocalypseSection onCTA={handleCTA} />

      {/* Detalhes do evento */}
      <Section container="max-w-3xl" className="bg-saas-void-2">
        <SectionHeader eyebrow="Detalhes" center className="mb-12 animate-fade-in">
          Quando e onde
        </SectionHeader>

        <div className={SAAS_CARD + " p-8 md:p-12 text-center shadow-saas-card animate-fade-in"}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            <div className="flex flex-col items-center gap-3">
              <span className="inline-flex w-10 h-10 rounded-full bg-gradient-to-br from-saas-cyan to-saas-violet items-center justify-center">
                <Calendar className="w-5 h-5 text-saas-void" />
              </span>
              <div>
                <p className="font-bold text-saas-ink text-xl">25 de março de 2026</p>
                <p className="text-saas-muted text-sm">Terça-feira</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="inline-flex w-10 h-10 rounded-full bg-gradient-to-br from-saas-cyan to-saas-violet items-center justify-center">
                <Clock className="w-5 h-5 text-saas-void" />
              </span>
              <div>
                <p className="font-bold text-saas-ink text-xl">19h (Horário de São Paulo)</p>
                <p className="text-saas-muted text-sm">Ao vivo</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <div className="flex items-center gap-2">
              <Video className="w-5 h-5 text-saas-cyan" />
              <span className="text-saas-body text-base">Google Meet</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-saas-cyan" />
              <span className="text-saas-body text-base">Dúvidas ao vivo no final</span>
            </div>
          </div>

          {/* CTA */}
          <button onClick={() => handleCTA("details")} className={SAAS_BTN_PRIMARY}>
            Garantir minha vaga
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </Section>

      {/* CTA Final */}
      <section className="relative overflow-hidden border-t border-white/[0.06] py-24 md:py-28">
        {/* Subtle glow */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[380px] rounded-full bg-saas-violet/15 blur-[110px]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 animate-fade-in">
          <p className="italic text-saas-body text-xl md:text-2xl leading-relaxed">
            "A melhor hora para começar foi ontem. A segunda melhor é agora."
          </p>

          <h2 className="font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight">
            Comece a construir com <Accent>Claude</Accent>
          </h2>

          <p className="text-saas-muted text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Masterclass ao vivo, 25 de março às 19h. Vagas limitadas pelo Google Meet.
          </p>

          <button onClick={() => handleCTA("final")} className={SAAS_BTN_PRIMARY + " !px-9 !py-4 !text-[15px]"}>
            Garantir minha vaga agora
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <img loading="lazy" src={metodoStarkLogo} alt="Método Stark" className="w-10 h-10" />
            <span className="font-bold text-saas-ink text-base">MÉTODO STARK</span>
          </div>
          <p className="text-saas-muted text-sm">por Rodrigo Albuquerque</p>
          <p className="text-saas-faint text-xs">
            © {new Date().getFullYear()} BA Consultoria. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ClaudeCode;
