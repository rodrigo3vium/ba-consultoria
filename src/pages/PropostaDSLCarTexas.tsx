import PropostaLayout from "@/components/pb/PropostaLayout";
import { Accent, Card, SectionHeader, StatCard, SAAS_BTN_PRIMARY, SAAS_GRADIENT_TEXT } from "@/components/saas/ui";
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
      <div className="border-t border-white/[0.06] py-16 space-y-6">
        <div className="flex items-center gap-6">
          <div className="rounded-2xl border border-white/[0.09] overflow-hidden w-20 h-20 shrink-0">
            <img
              loading="lazy"
              src={dslLogo}
              alt="DSL Car Texas"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-1">Proposta Comercial</p>
            <p className="font-extrabold text-saas-ink text-[22px] leading-snug tracking-tight">DSL Car Texas · Guilherme Arcanjo</p>
          </div>
        </div>
        <p className="text-saas-body text-[17px] leading-relaxed max-w-2xl">
          Proposta de estruturação do funil de captação, qualificação e agendamento para a DSL Car Texas — transformando demanda crescente em operação comercial funcional e escalável.
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

      {/* 03 / CONTEXTO */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <SectionHeader eyebrow="03 · Contexto">
          Onde a DSL Car Texas está <Accent>hoje</Accent>.
        </SectionHeader>
        <p className="text-saas-body text-[17px] leading-relaxed max-w-2xl">
          O negócio já validou mercado, oferta e posicionamento. A demanda está crescendo com força — impulsionada por conteúdo, autoridade no nicho e indicação.
        </p>
        <Card className="p-8 space-y-4">
          <p className="text-saas-body text-[17px] leading-relaxed">
            A DSL Car Texas não depende de estoque físico, mas de um processo muito bem executado: entendimento do perfil do cliente, busca inteligente no inventário, curadoria dos veículos, inspeção presencial, confiança na recomendação e fechamento consultivo por ligação.
          </p>
          <p className="text-saas-body text-[17px] leading-relaxed">
            O principal gargalo agora não é gerar interesse — é{" "}
            <span className="text-saas-cyan italic">organizar, filtrar e transformar essa demanda em uma operação comercial funcional e escalável.</span>
          </p>
          <p className="text-saas-body text-[17px] leading-relaxed">
            O negócio já provou que vende. Agora precisa de estrutura para escalar sem perder qualidade no atendimento.
          </p>
        </Card>
      </div>

      {/* 04 / DIAGNÓSTICO */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <SectionHeader eyebrow="04 · Diagnóstico">
          O que mapeamos na <Accent>nossa conversa</Accent>.
        </SectionHeader>
        <p className="text-saas-body text-[17px] leading-relaxed max-w-2xl">
          Uma operação com fundações sólidas e gargalos claros que, uma vez resolvidos, destravam o próximo nível de escala.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
              <span className="inline-flex items-center rounded-full border border-saas-cyan/40 bg-white/[0.03] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan">Pontos Fortes</span>
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
                "Excesso de mensagens chegando sem organização",
                "Guilherme participa demais da triagem inicial",
                "Ausência de agenda estruturada",
                "Falta de processo comercial mapeado",
                "Ausência de estrutura de dados para futuro CRM",
                "Risco de perder oportunidade por falta de organização",
                "Dependência excessiva do operacional manual",
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

      {/* 05 / OBJETIVO */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <SectionHeader eyebrow="05 · Objetivo">
          O que este projeto vai <Accent>resolver</Accent>.
        </SectionHeader>
        <p className="text-saas-body text-[17px] leading-relaxed max-w-2xl">
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
            <Card key={obj.num} className="p-6">
              <p className={`text-[clamp(32px,3.5vw,44px)] font-extrabold leading-none mb-4 ${SAAS_GRADIENT_TEXT}`}>{obj.num}</p>
              <p className="text-saas-body leading-relaxed text-[14px]">{obj.text}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* 06 / INVESTIMENTO */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <SectionHeader eyebrow="06 · Investimento">
          Proposta <Accent>comercial</Accent>.
        </SectionHeader>
        <p className="text-saas-body text-[17px] leading-relaxed max-w-2xl">
          Duas opções para momentos diferentes. Ambas resolvem o problema — a segunda já adiciona inteligência artificial à operação.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Opção 1 */}
          <Card className="p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-3">Opção 1</p>
            <h3 className="font-extrabold text-saas-ink text-[20px] leading-snug tracking-tight mb-3">Estruturação Inicial da Operação</h3>
            <p className="text-saas-muted text-[14px] leading-relaxed mb-6">
              Resolve de forma prática e objetiva o problema atual, criando uma estrutura enxuta, funcional e pronta para rodar.
            </p>
            <div className="space-y-0 rounded-xl border border-white/[0.09] overflow-hidden">
              {[
                { label: "Investimento", value: "R$ 6.000" },
                { label: "Formato", value: "Pagamento único" },
                { label: "Prazo padrão", value: "15 dias úteis" },
              ].map((row, i) => (
                <div key={row.label} className={["flex justify-between items-baseline p-4", i < 2 ? "border-b border-white/[0.06]" : ""].join(" ")}>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-muted">{row.label}</span>
                  <span className={i === 0 ? `font-extrabold text-[22px] leading-none ${SAAS_GRADIENT_TEXT}` : "font-semibold text-saas-ink text-[15px]"}>{row.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl border border-white/[0.09] bg-white/[0.02] p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-1">Taxa de urgência</p>
              <p className="text-saas-body text-[13px] leading-relaxed">
                +R$ 4.000 → Total R$ 10.000 — entrega até sexta para rodar na segunda
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-white/[0.06]">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted mb-4">Entregáveis</p>
              <ul className="space-y-2">
                {[
                  "Landing page com VSL",
                  "Formulário de qualificação",
                  "Sistema de agendamento",
                  "Estrutura integrada e automatizada",
                  "Base de coleta de dados para futura transição para CRM",
                  "Mapeamento do processo comercial",
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
            <h3 className="font-extrabold text-saas-ink text-[20px] leading-snug tracking-tight mb-3">Estruturação com IA</h3>
            <p className="text-saas-muted text-[14px] leading-relaxed mb-6">
              Toda a estrutura da Opção 1, mais uma camada de inteligência e automação com IA para tornar a operação ainda mais eficiente e escalável.
            </p>
            <div className="space-y-0 rounded-xl border border-white/[0.09] overflow-hidden">
              {[
                { label: "Investimento", value: "R$ 10.000" },
                { label: "Manutenção mensal", value: "R$ 1.000/mês" },
                { label: "Prazo padrão", value: "15 dias úteis" },
              ].map((row, i) => (
                <div key={row.label} className={["flex justify-between items-baseline p-4", i < 2 ? "border-b border-white/[0.06]" : ""].join(" ")}>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-muted">{row.label}</span>
                  <span className={i === 0 ? `font-extrabold text-[22px] leading-none ${SAAS_GRADIENT_TEXT}` : "font-semibold text-saas-ink text-[15px]"}>{row.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl border border-white/[0.09] bg-white/[0.02] p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-1">Taxa de urgência</p>
              <p className="text-saas-body text-[13px] leading-relaxed">
                +R$ 4.000 → Total R$ 14.000 + R$ 1.000/mês — entrega até sexta
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-white/[0.06]">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted mb-4">Entregáveis</p>
              <ul className="space-y-2">
                {[
                  "Tudo da Opção 1 incluso",
                  "Implementação de agente com IA para atendimento no WhatsApp",
                  "Manutenção mensal do agente: segurança, ajustes e evolução, com zero custo variável para você",
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

      {/* CTA */}
      <div className="border-t border-white/[0.06] py-20 text-center space-y-6">
        <SectionHeader center eyebrow="Próximo passo">
          Vamos estruturar a DSL para o <Accent>próximo nível</Accent>?
        </SectionHeader>
        <p className="text-saas-body leading-relaxed max-w-xl mx-auto text-[18px] italic">
          Guilherme, teu negócio já passou da fase da ideia. Tu já construiu oferta, autoridade, confiança e demanda. O que está faltando agora não é mais validação — é estrutura para a operação acompanhar o nível do que você já construiu.
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

export default PropostaDSLCarTexas;
