import PropostaLayout from "@/components/pb/PropostaLayout";
import { Accent, Card, SectionHeader, StatCard, SAAS_BTN_PRIMARY, SAAS_GRADIENT_TEXT } from "@/components/saas/ui";
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
      <div className="border-t border-white/[0.06] py-10">
        <div className="flex items-center gap-6">
          <div className="rounded-2xl border border-white/[0.09] overflow-hidden w-20 h-20 shrink-0">
            <img
              loading="lazy"
              src={clientLogo}
              alt="[Nome do Cliente]"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      */}

      {/* INTRO */}
      <div className="border-t border-white/[0.06] py-16">
        <p className="text-saas-body text-[17px] leading-relaxed max-w-2xl">
          {/* Subtítulo — descrever a proposta em 1-2 frases para o [Nome do Cliente] */}
          Descrição breve da proposta para o [Nome do Cliente] — objetivo principal do projeto.
        </p>
      </div>

      {/* 01 / SOBRE */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <SectionHeader eyebrow="01 · Sobre">
          Quem está por trás <Accent>desta proposta</Accent>.
        </SectionHeader>
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
            <p className="text-saas-body text-[17px] leading-relaxed mb-4">
              Rodrigo Albuquerque investiu meio milhão de reais em mentoria com alguns dos maiores empreendedores do Brasil. Liderou R$80 milhões em vendas anuais e compilou na BA Consultoria o aprendizado extraído de mais de 100 empresas que receberam consultoria.
            </p>
            <p className="text-saas-body text-[17px] leading-relaxed mb-8">
              A BA Consultoria une consultoria estratégica, execução de marketing, automação com IA e inteligência comercial — tudo focado em gerar retorno financeiro real e escalável.
            </p>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {stats.map((s) => (
                <StatCard key={s.num} value={s.num} label={s.label} accent />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 02 / REFERÊNCIAS */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <SectionHeader eyebrow="02 · Referências">
          Nossos <Accent>Mentores</Accent> e Professores.
        </SectionHeader>
        <p className="text-saas-body text-[17px] leading-relaxed max-w-2xl">
          Aprendemos diretamente com alguns dos maiores líderes do mercado brasileiro.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {mentors.map((m) => (
            <Card key={m.name} className="p-5">
              <div className="rounded-xl border border-white/[0.09] overflow-hidden aspect-square mb-4">
                <img
                  loading="lazy"
                  src={m.photo}
                  alt={m.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-saas-ink text-[15px] leading-snug tracking-tight">{m.name}</h3>
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-saas-cyan mt-2 mb-3">{m.role}</p>
              <p className="text-saas-muted text-[12px] leading-relaxed">{m.bio}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* 03 / CONTEXTO — DINÂMICO */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <SectionHeader eyebrow="03 · Contexto">
          Onde o [Nome do Cliente] está <Accent>hoje</Accent>.
        </SectionHeader>
        <p className="text-saas-body text-[17px] leading-relaxed max-w-2xl">
          [Descrição do momento atual do cliente e do negócio.]
        </p>
        <Card className="p-8 space-y-4">
          <p className="text-saas-body text-[17px] leading-relaxed">
            [Parágrafo detalhando o contexto do cliente — como funciona o negócio, o modelo, o momento atual.]
          </p>
          <p className="text-saas-body text-[17px] leading-relaxed">
            O principal gargalo agora não é [problema superficial] — é{" "}
            <span className="text-saas-cyan italic">[problema real que a proposta resolve].</span>
          </p>
        </Card>
      </div>

      {/* 04 / DIAGNÓSTICO — DINÂMICO */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <SectionHeader eyebrow="04 · Diagnóstico">
          O que mapeamos na <Accent>nossa conversa</Accent>.
        </SectionHeader>
        <p className="text-saas-body text-[17px] leading-relaxed max-w-2xl">
          [Resumo do diagnóstico.]
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
              <span className="inline-flex items-center rounded-full border border-saas-cyan/40 bg-white/[0.03] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan">Pontos Fortes</span>
            </div>
            <ul className="space-y-3">
              {[
                "Ponto forte 1",
                "Ponto forte 2",
                "Ponto forte 3",
              ].map((item) => (
                <li key={item} className="text-saas-body text-[14px] leading-relaxed flex gap-2">
                  <span className="text-saas-cyan mt-0.5 shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
              <span className="inline-flex items-center rounded-full border border-saas-violet/40 bg-white/[0.03] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-saas-violet">Gargalos Atuais</span>
            </div>
            <ul className="space-y-3">
              {[
                "Gargalo 1",
                "Gargalo 2",
                "Gargalo 3",
              ].map((item) => (
                <li key={item} className="text-saas-body text-[14px] leading-relaxed flex gap-2">
                  <span className="text-saas-violet mt-0.5 shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>

      {/* 05 / OBJETIVO — DINÂMICO */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <SectionHeader eyebrow="05 · Objetivo">
          O que este projeto vai <Accent>resolver</Accent>.
        </SectionHeader>
        <p className="text-saas-body text-[17px] leading-relaxed max-w-2xl">
          [Resumo do objetivo principal.]
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { num: "01", text: "Objetivo 1" },
            { num: "02", text: "Objetivo 2" },
            { num: "03", text: "Objetivo 3" },
          ].map((obj) => (
            <Card key={obj.num} className="p-6">
              <p className={`text-[clamp(32px,3.5vw,44px)] font-extrabold leading-none mb-4 ${SAAS_GRADIENT_TEXT}`}>{obj.num}</p>
              <p className="text-saas-body leading-relaxed text-[14px]">{obj.text}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* 06 / INVESTIMENTO — DINÂMICO */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <SectionHeader eyebrow="06 · Investimento">
          Proposta <Accent>comercial</Accent>.
        </SectionHeader>
        <p className="text-saas-body text-[17px] leading-relaxed max-w-2xl">
          [Descrição das opções de investimento.]
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Opção 1 */}
          <Card className="p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-3">Opção 1</p>
            <h3 className="font-extrabold text-saas-ink text-[20px] leading-snug tracking-tight mb-3">[Nome da Opção 1]</h3>
            <p className="text-saas-muted text-[14px] leading-relaxed mb-6">
              [Descrição breve da opção 1.]
            </p>
            <div className="space-y-0 rounded-xl border border-white/[0.09] overflow-hidden">
              {[
                { label: "Investimento", value: "R$ X.XXX" },
                { label: "Formato", value: "Pagamento único" },
                { label: "Prazo padrão", value: "XX dias úteis" },
              ].map((row, i) => (
                <div key={row.label} className={["flex justify-between items-baseline p-4", i < 2 ? "border-b border-white/[0.06]" : ""].join(" ")}>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-muted">{row.label}</span>
                  <span className={i === 0 ? `font-extrabold text-[22px] leading-none ${SAAS_GRADIENT_TEXT}` : "font-semibold text-saas-ink text-[15px]"}>{row.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/[0.06]">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted mb-4">Entregáveis</p>
              <ul className="space-y-2">
                {[
                  "Entregável 1",
                  "Entregável 2",
                  "Entregável 3",
                ].map((item) => (
                  <li key={item} className="text-saas-body text-[13px] leading-relaxed flex gap-2">
                    <span className="text-saas-cyan mt-0.5 shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* Opção 2 — Featured */}
          <Card className="p-8 relative border-saas-violet/50 shadow-saas-btn">
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet px-3 py-1 font-mono text-[9px] uppercase tracking-[0.14em] font-bold text-saas-void">Recomendado</span>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-3">Opção 2</p>
            <h3 className="font-extrabold text-saas-ink text-[20px] leading-snug tracking-tight mb-3">[Nome da Opção 2]</h3>
            <p className="text-saas-muted text-[14px] leading-relaxed mb-6">
              [Descrição breve da opção 2.]
            </p>
            <div className="space-y-0 rounded-xl border border-white/[0.09] overflow-hidden">
              {[
                { label: "Investimento", value: "R$ XX.XXX" },
                { label: "Manutenção mensal", value: "R$ X.XXX/mês" },
                { label: "Prazo padrão", value: "XX dias úteis" },
              ].map((row, i) => (
                <div key={row.label} className={["flex justify-between items-baseline p-4", i < 2 ? "border-b border-white/[0.06]" : ""].join(" ")}>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-muted">{row.label}</span>
                  <span className={i === 0 ? `font-extrabold text-[22px] leading-none ${SAAS_GRADIENT_TEXT}` : "font-semibold text-saas-ink text-[15px]"}>{row.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/[0.06]">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted mb-4">Entregáveis</p>
              <ul className="space-y-2">
                {[
                  "Tudo da Opção 1 incluso",
                  "Entregável adicional 1",
                  "Entregável adicional 2",
                ].map((item) => (
                  <li key={item} className="text-saas-body text-[13px] leading-relaxed flex gap-2">
                    <span className="text-saas-cyan mt-0.5 shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </div>

      {/* CTA — DINÂMICO */}
      <div className="border-t border-white/[0.06] py-20 text-center space-y-6">
        <SectionHeader center eyebrow="Próximo passo">
          Vamos <Accent>começar</Accent>?
        </SectionHeader>
        <p className="text-saas-body leading-relaxed max-w-xl mx-auto text-[18px] italic">
          [Mensagem personalizada para o cliente — texto de fechamento motivacional.]
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

export default PropostaPadrao;
