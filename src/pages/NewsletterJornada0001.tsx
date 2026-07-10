import { useEffect } from "react";
import { Link } from "react-router-dom";
import Coordinates from "@/components/pb/Coordinates";
import MetaBar from "@/components/pb/MetaBar";
import Stamp from "@/components/pb/Stamp";
import Tag from "@/components/pb/Tag";
import StratCard from "@/components/pb/StratCard";
import { Accent, SAAS_BTN_PRIMARY } from "@/components/saas/ui";
import { tracker } from "@/lib/tracking";

const PAGE_TITLE = "Diário de Jornada — Ed. 001 · O número mais importante da minha semana foi zero";

const p = "text-saas-body text-[17px] leading-[1.7] mb-[26px]";

const PLACAR: { label: string; value: string; delta: string; accent?: boolean }[] = [
  { label: "Travas de privacidade ativadas", value: "0", delta: "Fechadura sem tranca", accent: true },
  { label: "Pessoas em dobro no sistema", value: "44", delta: "Dedup em execução" },
  { label: "Da fila sem lastro pra estar lá", value: "1/3", delta: "Porteiro em build" },
  { label: "Produção manual de conteúdo", value: "4h/d", delta: "Alvo da máquina" },
];

const Divider = ({ label }: { label: string }) => (
  <div className="flex items-center gap-5 mt-[72px] mb-12">
    <span className="h-px flex-1 bg-white/[0.10]" />
    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-saas-cyan whitespace-nowrap">
      {label}
    </span>
    <span className="h-px flex-1 bg-white/[0.10]" />
  </div>
);

const NewsletterJornada0001 = () => {
  useEffect(() => {
    tracker.page("Diário de Jornada — Ed. 001");

    const prevTitle = document.title;
    document.title = PAGE_TITLE;
    document.body.style.paddingTop = "0";

    return () => {
      document.title = prevTitle;
      document.body.style.paddingTop = "";
    };
  }, []);

  const handleCtaClick = () => {
    tracker.track("cta_click", { product: "a-revolucao", location: "newsletter-jornada-001-ps" });
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative min-h-screen bg-saas-void text-saas-body antialiased overflow-x-hidden">

      <MetaBar
        dot="cyan"
        left={<>Diário de Jornada&nbsp;·&nbsp;<span className="text-saas-cyan">Ed. 001</span></>}
        right={<span>2026.06.27 &rarr; 2026.07.03</span>}
      />

      {/* HERO */}
      <header className="relative overflow-hidden max-w-[1080px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-14 md:pb-18">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-16 w-[420px] h-[420px] rounded-full bg-saas-violet/15 blur-[120px]" />
          <div className="absolute -top-6 right-0 w-[380px] h-[320px] rounded-full bg-saas-cyan/10 blur-[120px]" />
        </div>

        <div className="hidden md:block absolute top-12 right-8 lg:right-12 z-10">
          <Coordinates
            align="right"
            entries={[
              { label: "FILE", value: "JORNADA-001" },
              { label: "BUILD", value: "2026.07.03" },
              { label: "OWNER", value: "R. ALBUQUERQUE" },
              { label: "STATE", value: "ACTIVE" },
            ]}
          />
        </div>

        <div className="relative z-10">
          <div className="mb-10">
            <Stamp>Edição 001 / Documentação de jornada</Stamp>
          </div>

          <h1 className="font-extrabold text-saas-ink text-[clamp(30px,5vw,56px)] leading-[1.08] tracking-tight max-w-[820px]">
            O número mais importante da minha semana foi <Accent>zero</Accent>.
          </h1>

          <p className="mt-8 italic text-saas-muted text-lg leading-relaxed max-w-[560px]">
            Uma auditoria que me humilhou na quarta, uma arquitetura que me orgulhou na quinta — e o que isso tem a ver com a operação que você toca todo dia.
          </p>

          <div className="mt-10 flex flex-wrap gap-2.5">
            <Tag variant="cyan">Semana 27/jun — 03/jul</Tag>
            <Tag>Auditoria com IA</Tag>
            <Tag>Máquina de conteúdo</Tag>
            <Tag>Leitura: 5 min</Tag>
          </div>
        </div>
      </header>

      {/* ARTIGO */}
      <main className="max-w-[680px] mx-auto px-6 md:px-8 pb-24">

        <p
          className={`${p} first-letter:font-semibold first-letter:text-6xl first-letter:leading-[0.82] first-letter:float-left first-letter:pr-3 first-letter:pt-1.5 first-letter:text-saas-ink`}
        >
          Quarta-feira, 1º de julho, de manhã. Eu abri o CRM da minha operação, olhei pra fila de contatos e disse em voz alta:
        </p>

        <div className="font-extrabold tracking-tight text-[clamp(24px,4vw,38px)] leading-[1.12] text-saas-ink my-9 pl-6 border-l-2 border-saas-cyan/60">
          "Isso aqui tá uma bosta."
        </div>

        <p className={p}>
          Não era drama. Era diagnóstico. A fila me mostrava leads que não faziam sentido estar ali. Eu clicava num contato e não tinha pra onde ir. Eu marcava um follow-up como feito e a tela continuava idêntica — como se o meu dia de trabalho não tivesse existido.
        </p>

        <p className={p}>
          A reação padrão seria abrir o sistema e sair consertando. Ou pior: pedir pra IA "conserta isso aí" e torcer.
        </p>

        <p className={p}>
          Eu fiz diferente. Coloquei o Claude Code — o modo do Claude que trabalha direto dentro dos meus sistemas — pra fazer uma auditoria de leitura: proibido de mexer em qualquer linha, obrigado a me trazer provas do que encontrasse.
        </p>

        <p className={p}>
          O Karpathy, ex-diretor de IA da Tesla, repete isso há meses: o gargalo de trabalhar com IA não é gerar — é verificar. Todo mundo quer a IA construindo. Quase ninguém usa a IA pra conferir o que já foi construído.
        </p>

        <Divider label="01 / O que a auditoria encontrou" />

        <p className={p}>
          A auditoria voltou com três achados. Cada um vale mais que a maioria das aulas de IA que você vai assistir esse mês.
        </p>

        <StratCard className="mb-5">
          <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-3.5">
            Achado 01 / Privacidade
          </span>
          <p className="text-base mb-3.5 last:mb-0">
            Em junho eu construí uma trava de privacidade no sistema — um mecanismo pra impedir a IA de analisar conversas de contatos específicos (família, por exemplo). A auditoria contou quantos contatos tinham essa trava ativada.
          </p>
          <p className="text-base mb-3.5 last:mb-0">
            <strong className="text-saas-ink font-semibold">Zero.</strong>
          </p>
          <p className="text-base mb-3.5 last:mb-0">
            Eu construí a fechadura e nunca tranquei a porta. E descobri que, mesmo se trancasse, três telas do sistema ignoravam a fechadura na hora de ler.
          </p>
        </StratCard>

        <StratCard className="mb-5">
          <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-3.5">
            Achado 02 / O botão que mentia
          </span>
          <p className="text-base mb-3.5 last:mb-0">
            O botão "Feito" do follow-up gravava tudo certinho no banco de dados... e não tirava o contato da fila. O sistema funcionava por dentro e mentia por fora. Um dia inteiro trabalhado parecia uma fila intocada.
          </p>
        </StratCard>

        <StratCard className="mb-5">
          <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-3.5">
            Achado 03 / Identidade duplicada
          </span>
          <p className="text-base mb-3.5 last:mb-0">
            44 pessoas existiam em dobro no sistema — cada metade sem enxergar a outra. E quase um terço dos perfis na fila não tinha informação suficiente pra merecer estar lá.
          </p>
        </StratCard>

        <div className="relative rounded-2xl border border-white/[0.09] bg-white/[0.02] text-center px-8 pt-12 pb-10 my-12">
          <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-saas-muted mb-5">
            Travas de privacidade ativadas / contagem na base
          </span>
          <span className="block font-extrabold text-[clamp(120px,20vw,200px)] leading-[0.85] bg-gradient-to-r from-saas-cyan to-saas-violet bg-clip-text text-transparent">
            0
          </span>
          <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-saas-faint mt-6">
            Feature construída ≠ feature funcionando
          </span>
        </div>

        <p className={p}>Aqui vem a parte que interessa a você.</p>

        <p className={p}>
          Nada disso apareceu porque o sistema "quebrou". O sistema rodava. Deployado, bonito, no ar. <strong className="text-saas-ink font-semibold">Feature construída não é feature funcionando</strong> — e a distância entre as duas tem nome: verificação.
        </p>

        <div className="my-12 py-2 pl-7 border-l-2 border-saas-cyan/40">
          <p className="italic text-saas-ink text-[21px] leading-[1.55] mb-3">
            A vida não examinada não vale a pena ser vivida.
          </p>
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted">Sócrates</span>
        </div>

        <p className={p}>
          Eu digo o equivalente operacional: <strong className="text-saas-ink font-semibold">o sistema não auditado não merece a tua confiança.</strong>
        </p>

        <p className={p}>
          E você tem um "zero" desses na tua operação agora. A automação que você pagou e nunca conferiu se roda. O funil que "tá no ar" e você não sabe a taxa. A planilha de indicadores que ninguém abre desde março.
        </p>

        <p className={p}>
          Você não precisa de mais uma ferramenta. Você precisa mandar a inteligência que você já tem auditar as que você já pagou.
        </p>

        <Divider label="02 / O que eu construí" />

        <p className={p}>
          No dia seguinte, quinta, eu fechei a arquitetura do projeto mais importante do semestre: a minha máquina de conteúdo.
        </p>

        <p className={p}>
          Contexto: eu gasto perto de 4 horas por dia produzindo conteúdo na mão. A máquina inverte isso — qualquer matéria-prima minha (um vídeo, um áudio gravado no carro, uma referência que li) vira peças prontas na minha voz: posts, carrossel, roteiro, esta newsletter.
        </p>

        <p className={p}>
          E a decisão mais importante da arquitetura não foi técnica. Foi uma regra: <strong className="text-saas-ink font-semibold">peça sem fato real de origem não nasce.</strong> Se a IA não consegue apontar de qual momento vivido saiu aquela cena ou aquele dado, a peça é reprovada automaticamente, antes de eu ver.
        </p>

        <p className={p}>
          Porque IA sem régua produz volume. IA com régua produz volume que parece você. A diferença entre as duas é a razão de metade da internet estar virando pasta de amendoim genérica.
        </p>

        <Divider label="03 / Placar da semana" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 my-12">
          {PLACAR.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/[0.09] bg-white/[0.02] p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint leading-relaxed mb-3">
                {s.label}
              </div>
              <div
                className={`text-[clamp(32px,5vw,44px)] font-extrabold leading-none ${
                  s.accent
                    ? "bg-gradient-to-r from-saas-cyan to-saas-violet bg-clip-text text-transparent"
                    : "text-saas-ink"
                }`}
              >
                {s.value}
              </div>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted">
                {s.delta}
              </div>
            </div>
          ))}
        </div>

        <p className={p}>
          O placar da semana, então: uma auditoria que me humilhou na quarta, uma arquitetura que me orgulhou na quinta, e um número — zero — que eu vou emoldurar.
        </p>

        <div className="font-extrabold text-saas-ink text-[clamp(26px,4vw,42px)] leading-[1.14] tracking-tight my-12">
          O progresso, na maior parte das semanas, não é construir o novo.<br />
          É ter coragem de descobrir a verdade sobre <Accent>o velho</Accent>.
        </div>

        {/* P.S. */}
        <StratCard className="mt-[72px] p-10">
          <Stamp>P.S. / História de origem</Stamp>
          <p className="text-base mt-6 mb-[18px]">
            Tudo que você leu aqui — a auditoria, a máquina, o segundo cérebro que guarda cada decisão dessas — eu construí errando. Refiz arquitetura mais de uma vez, queimei meses e dinheiro em ferramentas que não conversavam entre si.
          </p>
          <p className="text-base mb-[18px]">
            Quando comecei, procurei um curso de IA aplicada a negócios que não fosse raso demais nem virasse aula de programação. Não encontrei.
          </p>
          <p className="text-base mb-7">
            Por isso construí <strong className="text-saas-ink font-semibold">A Revolução</strong>. É o caminho que eu queria ter recebido pronto.
          </p>
          <Link to="/educacao/a-revolucao" onClick={handleCtaClick} className={SAAS_BTN_PRIMARY}>
            Conhecer A Revolução <span aria-hidden>↗</span>
          </Link>
        </StratCard>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] mt-8 px-6 md:px-8 py-8 flex flex-wrap justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint">
        <span>PB / Diário de Jornada <span className="text-saas-cyan/60">·</span> Ed. 001</span>
        <span>Rodrigo Albuquerque <span className="text-saas-cyan/60">·</span> 2026</span>
        <span>Próxima edição: 2026.07.10</span>
      </footer>

    </div>
  );
};

export default NewsletterJornada0001;
