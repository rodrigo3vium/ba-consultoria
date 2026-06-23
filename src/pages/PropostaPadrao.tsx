import PropostaLayout from "@/components/pb/PropostaLayout";
import rodrigoPhoto from "@/assets/founders/rodrigo-albuquerque.webp";
import diegoBarretoPhoto from "@/assets/mentors/diego-barreto.webp";
import pedroSommaPhoto from "@/assets/mentors/pedro-somma.webp";
import vaboPhoto from "@/assets/mentors/vabo.webp";
import joaoOliverioPhoto from "@/assets/mentors/joao-oliverio.webp";
import joseDiogoPhoto from "@/assets/mentors/jose-diogo.webp";

// Logo do cliente — descomentar e importar quando necessário
// import clientLogo from "@/assets/[slug-cliente]-logo.jpg";

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

const PropostaPadrao = () => {
  return (
    <PropostaLayout cliente="[Nome do Cliente]" projeto="[Nome do Projeto]">

      {/* LOGO DO CLIENTE — descomentar e adaptar quando necessário */}
      {/*
      <div className="border-t border-pb-grid-strong py-10">
        <div className="flex items-center gap-6">
          <div className="border border-pb-grid-strong overflow-hidden w-20 h-20 shrink-0">
            <img
              loading="lazy"
              src={clientLogo}
              alt="[Nome do Cliente]"
              className="w-full h-full object-cover"
              style={{ filter: 'grayscale(100%) contrast(1.1) brightness(0.85)' }}
            />
          </div>
        </div>
      </div>
      */}

      {/* INTRO */}
      <div className="border-t border-pb-grid-strong py-16">
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-2xl">
          {/* Subtítulo — descrever a proposta em 1-2 frases para o [Nome do Cliente] */}
          Descrição breve da proposta para o [Nome do Cliente] — objetivo principal do projeto.
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

      {/* 03 / CONTEXTO — DINÂMICO */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 03 CONTEXTO</p>
        <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">
          Onde o [Nome do Cliente] está hoje.
        </h2>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-2xl">
          [Descrição do momento atual do cliente e do negócio.]
        </p>
        <div className="border border-pb-grid-strong bg-pb-void-card p-8 space-y-4">
          <p className="font-body text-pb-ink-soft leading-relaxed">
            [Parágrafo detalhando o contexto do cliente — como funciona o negócio, o modelo, o momento atual.]
          </p>
          <p className="font-body text-pb-ink-soft leading-relaxed">
            O principal gargalo agora não é [problema superficial] — é{" "}
            <span className="text-pb-cyan italic">[problema real que a proposta resolve].</span>
          </p>
        </div>
      </div>

      {/* 04 / DIAGNÓSTICO — DINÂMICO */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 04 DIAGNÓSTICO</p>
        <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">
          O que mapeamos na nossa conversa.
        </h2>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-2xl">
          [Resumo do diagnóstico.]
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-pb-grid-strong bg-pb-void-card p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-pb-grid-strong">
              <span className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan border border-pb-cyan px-3 py-1">Pontos Fortes</span>
            </div>
            <ul className="space-y-3">
              {[
                "Ponto forte 1",
                "Ponto forte 2",
                "Ponto forte 3",
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
                "Gargalo 1",
                "Gargalo 2",
                "Gargalo 3",
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

      {/* 05 / OBJETIVO — DINÂMICO */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 05 OBJETIVO</p>
        <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">
          O que este projeto vai resolver.
        </h2>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-2xl">
          [Resumo do objetivo principal.]
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { num: "01", text: "Objetivo 1" },
            { num: "02", text: "Objetivo 2" },
            { num: "03", text: "Objetivo 3" },
          ].map((obj) => (
            <div key={obj.num} className="border border-pb-grid-strong bg-pb-void-card p-6">
              <p className="font-display text-[clamp(36px,4vw,56px)] text-pb-cyan leading-none mb-4">{obj.num}</p>
              <p className="font-body text-pb-ink-soft leading-relaxed text-[14px]">{obj.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 06 / INVESTIMENTO — DINÂMICO */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 06 INVESTIMENTO</p>
        <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">
          Proposta comercial.
        </h2>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-2xl">
          [Descrição das opções de investimento.]
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Opção 1 */}
          <div className="border border-pb-grid-strong bg-pb-void-card p-8">
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-3">// Opção 1</p>
            <h3 className="font-display uppercase text-pb-ink text-[22px] leading-[0.95] mb-3">[Nome da Opção 1]</h3>
            <p className="font-body text-pb-ink-muted text-[14px] leading-relaxed mb-6">
              [Descrição breve da opção 1.]
            </p>
            <div className="space-y-0 border border-pb-grid-strong">
              {[
                { label: "Investimento", value: "R$ X.XXX" },
                { label: "Formato", value: "Pagamento único" },
                { label: "Prazo padrão", value: "XX dias úteis" },
              ].map((row, i) => (
                <div key={row.label} className={["flex justify-between items-baseline p-4", i < 2 ? "border-b border-pb-grid-strong" : ""].join(" ")}>
                  <span className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-ink-muted">{row.label}</span>
                  <span className={["font-display uppercase", i === 0 ? "text-pb-cyan text-[22px]" : "text-pb-ink text-[16px]"].join(" ")}>{row.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-pb-grid-strong">
              <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted mb-4">Entregáveis</p>
              <ul className="space-y-2">
                {[
                  "Entregável 1",
                  "Entregável 2",
                  "Entregável 3",
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
            <h3 className="font-display uppercase text-pb-ink text-[22px] leading-[0.95] mb-3">[Nome da Opção 2]</h3>
            <p className="font-body text-pb-ink-muted text-[14px] leading-relaxed mb-6">
              [Descrição breve da opção 2.]
            </p>
            <div className="space-y-0 border border-pb-grid-strong">
              {[
                { label: "Investimento", value: "R$ XX.XXX" },
                { label: "Manutenção mensal", value: "R$ X.XXX/mês" },
                { label: "Prazo padrão", value: "XX dias úteis" },
              ].map((row, i) => (
                <div key={row.label} className={["flex justify-between items-baseline p-4", i < 2 ? "border-b border-pb-grid-strong" : ""].join(" ")}>
                  <span className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-ink-muted">{row.label}</span>
                  <span className={["font-display uppercase", i === 0 ? "text-pb-cyan text-[22px]" : "text-pb-ink text-[16px]"].join(" ")}>{row.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-pb-grid-strong">
              <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted mb-4">Entregáveis</p>
              <ul className="space-y-2">
                {[
                  "Tudo da Opção 1 incluso",
                  "Entregável adicional 1",
                  "Entregável adicional 2",
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

      {/* CTA — DINÂMICO */}
      <div className="border-t border-pb-grid-strong py-20 text-center space-y-6">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan">// Próximo passo</p>
        <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">Vamos começar?</h2>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-xl mx-auto text-[18px] italic">
          [Mensagem personalizada para o cliente — texto de fechamento motivacional.]
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

export default PropostaPadrao;
