import rodrigoPhoto from "@/assets/founders/rodrigo-albuquerque.webp";
import diegoBarretoPhoto from "@/assets/mentors/diego-barreto.webp";
import pedroSommaPhoto from "@/assets/mentors/pedro-somma.webp";
import vaboPhoto from "@/assets/mentors/vabo.webp";
import joaoOliverioPhoto from "@/assets/mentors/joao-oliverio.webp";
import joseDiogoPhoto from "@/assets/mentors/jose-diogo.webp";
import PropostaLayout from "@/components/pb/PropostaLayout";
import SectionHeader from "@/components/pb/SectionHeader";
import StratCard from "@/components/pb/StratCard";
import { Accent, StatCard, SAAS_BTN_PRIMARY } from "@/components/saas/ui";

const mentors = [
  { name: "Diego Barreto", role: "CEO - iFood", photo: diegoBarretoPhoto, bio: 'Autor do best-seller "Nova Economia," lidera a expansão e inovação no iFood.' },
  { name: "Pedro Somma", role: "Ex-COO - 99 Taxi", photo: pedroSommaPhoto, bio: "Papel fundamental na expansão e operação da 99, consolidando-a como líder em mobilidade." },
  { name: "Luis Vabo Jr.", role: "Ex-diretor - Stone", photo: vaboPhoto, bio: "Empreendedor serial, investidor e autor de 'Falar em público é para você!'." },
  { name: "João Olivério", role: "CEO - Sales As A System", photo: joaoOliverioPhoto, bio: "Especialista em vendas, Country Manager da Apollo.io e mentor no G4 Sales." },
  { name: "José Diogo C. Rodrigues", role: "CMO Latam - Tinder", photo: joseDiogoPhoto, bio: "Experiência em Brand Marketing na Nike, Red Bull e atualmente Tinder Latam & Canadá." },
];

const PropostaMonique = () => {
  return (
    <PropostaLayout cliente="Monique Scalon Karasek" projeto="Agenda cheia até julho">

      {/* ========== SOBRE ========== */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <SectionHeader
          idx="// 01"
          label="Sobre"
          headline={<>Quem está por trás desta <Accent>proposta</Accent></>}
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
              {[
                { num: "+R$130M", label: "gerados em vendas" },
                { num: "100+", label: "consultorias realizadas" },
                { num: "+7", label: "países atendidos" },
                { num: "+54", label: "avaliações 5 estrelas" },
              ].map((s) => (
                <StatCard key={s.num} value={s.num} label={s.label} accent />
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
          headline="Nossos Mentores e Professores"
          sub="Aprendemos diretamente com alguns dos maiores líderes do mercado brasileiro."
          align="center"
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
              <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-saas-cyan mb-2">{m.role}</div>
              <div className="text-saas-muted text-xs leading-relaxed">{m.bio}</div>
            </StratCard>
          ))}
        </div>
      </div>

      {/* ========== CONTEXTO ========== */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <SectionHeader
          idx="// 03"
          label="Contexto"
          headline="Onde a Monique está hoje"
          sub="Monique está retomando com mais força sua atuação presencial em Dourados, com foco principal no público feminino. O objetivo de curto prazo é claro: preencher horários vagos da agenda até julho."
        />

        <div className="space-y-4">
          <div className="rounded-2xl border border-white/[0.09] bg-saas-card p-6">
            <p className="text-saas-body text-sm leading-relaxed">
              Hoje já existe produção de conteúdo em andamento — um ativo importante para fortalecer autoridade e percepção de valor. No entanto, ainda não há uma estratégia de tráfego pago implementada para acelerar a geração de demanda.
            </p>
          </div>
          <div className="rounded-2xl border border-white/[0.09] bg-saas-card p-6">
            <p className="text-saas-body text-sm leading-relaxed">
              Em um segundo momento, a intenção é expandir a atuação para produtos e serviços de grupo: grupos terapêuticos, workshops e iniciativas presenciais voltadas para mulheres.
            </p>
          </div>
          <div className="rounded-2xl border border-white/[0.09] bg-saas-card p-6">
            <p className="text-saas-body text-sm leading-relaxed">
              A estratégia mais adequada agora é <strong className="text-saas-cyan font-medium">priorizar a captação direta de pacientes, com foco em resultado no curto prazo, sem perder de vista a construção de marca pessoal no médio prazo.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* ========== OBJETIVO ========== */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <SectionHeader
          idx="// 04"
          label="Objetivo"
          headline={<>O que este projeto vai <Accent>resolver</Accent></>}
        />

        <StratCard>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-3">Objetivo principal</p>
          <p className="text-saas-body text-sm leading-relaxed">
            Preencher até julho os horários vagos da agenda com novos pacientes alinhados ao perfil de atendimento da Monique.
          </p>
        </StratCard>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { text: "Fortalecer o posicionamento da Monique como psicóloga de referência em Dourados" },
            { text: "Aumentar a previsibilidade na geração de novos contatos qualificados" },
            { text: "Estruturar base de aquisição que futuramente apoie grupos terapêuticos, workshops e novos produtos" },
          ].map((obj, i) => (
            <StratCard key={i}>
              <p className="text-saas-body text-sm leading-relaxed">
                <span className="text-saas-cyan mr-2">→</span>
                {obj.text}
              </p>
            </StratCard>
          ))}
        </div>
      </div>

      {/* ========== DIRECIONAMENTO ========== */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <SectionHeader
          idx="// 05"
          label="Direcionamento"
          headline={<>Dois caminhos possíveis — <Accent>um recomendado</Accent></>}
          sub="Identificamos dois caminhos dentro do tráfego pago. A recomendação é clara: começar pelo que gera resultado mais rápido."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <StratCard>
            <h3 className="font-bold text-saas-ink text-lg leading-tight tracking-tight mb-4">Crescimento de perfil e autoridade</h3>
            <p className="text-saas-body text-sm leading-relaxed">
              Estratégia focada em aumentar seguidores, alcance e reconhecimento. Construção importante, mas tende a gerar resultado de conversão em prazo mais longo. Ideal para uma segunda etapa.
            </p>
          </StratCard>

          <div className="relative rounded-2xl border border-saas-violet/40 bg-saas-card p-8">
            <p className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-saas-void">Recomendado</p>
            <h3 className="font-bold text-saas-ink text-lg leading-tight tracking-tight mb-4">Captação direta de pacientes</h3>
            <p className="text-saas-body text-sm leading-relaxed">
              Estratégia focada em atrair pessoas com potencial real de contratação, conduzindo o contato para um canal de atendimento e conversão. Atende diretamente ao objetivo de preencher a agenda até julho.
            </p>
          </div>
        </div>
      </div>

      {/* ========== ESTRATÉGIA / FASES ========== */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <SectionHeader
          idx="// 06"
          label="Estratégia"
          headline="Como vamos executar"
          sub="Duas fases complementares — a primeira resolve o problema imediato, a segunda constrói o ativo de longo prazo."
        />

        <StratCard>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-2">Fase 1 — Agora</p>
          <h3 className="font-extrabold text-saas-ink text-xl leading-tight tracking-tight mb-4">Captação de pacientes</h3>
          <p className="text-saas-body text-sm leading-relaxed mb-6">
            Gerar contatos de potenciais pacientes em Dourados e região, com campanhas orientadas para conversão.
          </p>
          <ul className="space-y-3">
            {[
              "Definição da proposta de valor e comunicação da Monique",
              "Construção de mensagens com tom direto, objetivo e posicionamento firme",
              "Criação e estruturação da campanha de tráfego pago",
              "Segmentação de público compatível com o ticket de atendimento",
              "Direcionamento para canal de contato ideal",
              "Monitoramento dos leads e otimização contínua",
            ].map((item) => (
              <li key={item} className="text-saas-body text-sm leading-relaxed flex gap-2">
                <span className="text-saas-cyan shrink-0 mt-0.5">→</span>
                {item}
              </li>
            ))}
          </ul>
        </StratCard>

        <StratCard>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted mb-2">Fase 2 — Após preencher a agenda</p>
          <h3 className="font-extrabold text-saas-ink text-xl leading-tight tracking-tight mb-4">Posicionamento e autoridade</h3>
          <p className="text-saas-body text-sm leading-relaxed mb-6">
            Com a agenda preenchida, a estratégia evolui para fortalecimento de marca e crescimento do ativo digital.
          </p>
          <ul className="space-y-3">
            {[
              "Crescimento qualificado do Instagram",
              "Fortalecimento de autoridade local em Dourados",
              "Construção de audiência para grupos terapêuticos e workshops",
              "Preparação para eventos presenciais e novos produtos",
            ].map((item) => (
              <li key={item} className="text-saas-body text-sm leading-relaxed flex gap-2">
                <span className="text-saas-cyan shrink-0 mt-0.5">→</span>
                {item}
              </li>
            ))}
          </ul>
        </StratCard>
      </div>

      {/* ========== INVESTIMENTO ========== */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <SectionHeader
          idx="// 07"
          label="Investimento"
          headline="Proposta comercial"
          sub="Gestão estratégica e operacional de tráfego pago com visão de negócio — não apenas subir anúncios."
        />

        <StratCard>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-2">Gestão de Tráfego Pago + Consultoria Estratégica</p>
          <h3 className="font-extrabold text-saas-ink text-xl leading-tight tracking-tight mb-6">Captação de Pacientes + Posicionamento</h3>

          <div className="space-y-0">
            {[
              { label: "Gestão estratégica mensal", value: "R$ 1.500", isNote: false },
              { label: "Verba de mídia recomendada", value: "R$ 1.000/mês", isNote: false },
              { label: "Prazo inicial recomendado", value: "3 meses", isNote: false },
              { label: "Nota sobre verba de mídia", value: "Paga diretamente para a plataforma. Não está inclusa no valor da gestão.", isNote: true },
            ].map((row) => (
              <div key={row.label} className="flex justify-between items-baseline py-4 border-b border-white/[0.08] last:border-0 gap-4">
                <span className="text-saas-body text-sm">{row.label}</span>
                {row.isNote ? (
                  <span className="text-saas-muted text-xs text-right max-w-[280px]">{row.value}</span>
                ) : (
                  <span className="font-extrabold text-saas-ink text-xl leading-none tracking-tight shrink-0">{row.value}</span>
                )}
              </div>
            ))}
          </div>

          <div className="border-t border-white/[0.08] pt-6 mt-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted mb-5">O que está incluso</p>
            <div className="space-y-3">
              {[
                "Diagnóstico inicial da estratégia",
                "Definição do objetivo e planejamento da campanha",
                "Estruturação e configuração dos anúncios",
                "Gestão e acompanhamento dos resultados",
                "Otimizações periódicas de custo e desempenho",
                "Reuniões de alinhamento estratégico",
                "Apoio estratégico em posicionamento, aquisição e conversão",
                "Visão conectada entre anúncio, contato e fechamento",
              ].map((item) => (
                <div key={item} className="flex gap-2 items-start">
                  <span className="text-saas-cyan shrink-0 mt-0.5">→</span>
                  <span className="text-saas-body text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </StratCard>
      </div>

      {/* ========== PONTOS DE ATENÇÃO ========== */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <SectionHeader
          idx="// 08"
          label="Pontos de atenção"
          headline="O que vamos alinhar em conjunto"
          sub="Para que a estratégia de captação tenha melhor desempenho, alguns pontos serão trabalhados juntos desde o início."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Clareza da oferta", desc: "Definição precisa do que está sendo oferecido, para quem, e por que a Monique é a escolha certa." },
            { title: "Canal de entrada", desc: "Escolha do melhor canal para receber os interessados — WhatsApp, formulário, agendamento direto." },
            { title: "Velocidade de resposta", desc: "Estrutura mínima para responder leads de forma ágil. Tempo de resposta impacta diretamente na conversão." },
            { title: "Coerência de posicionamento", desc: "Alinhamento entre anúncios, conteúdo orgânico e posicionamento profissional para gerar confiança." },
          ].map((item) => (
            <StratCard key={item.title}>
              <h4 className="font-bold text-saas-ink text-base leading-tight tracking-tight mb-3">{item.title}</h4>
              <p className="text-saas-muted text-sm leading-relaxed">{item.desc}</p>
            </StratCard>
          ))}
        </div>
      </div>

      {/* ========== PRAZO ========== */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <SectionHeader
          idx="// 09"
          label="Prazo"
          headline="Período inicial recomendado: 3 meses"
          sub="Tempo necessário para estruturar, validar, otimizar e gerar volume suficiente para análise e tomada de decisão."
        />

        <div className="rounded-2xl border border-white/[0.09] bg-saas-card overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              { label: "Mês 1", title: "Estruturação", desc: "Onboarding, diagnóstico, definição de público, criação das campanhas e início da operação." },
              { label: "Mês 2", title: "Validação", desc: "Primeiros leads chegando, ajustes de comunicação, otimização de custo e segmentação." },
              { label: "Mês 3", title: "Otimização", desc: "Campanhas maduras, previsibilidade de contatos, análise de resultados para decisão sobre próximos passos." },
            ].map((phase, i) => (
              <div key={phase.label} className={`p-6 ${i < 2 ? "border-b md:border-b-0 md:border-r border-white/[0.08]" : ""}`}>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-2">{phase.label}</p>
                <h4 className="font-bold text-saas-ink text-lg leading-tight tracking-tight mb-3">{phase.title}</h4>
                <p className="text-saas-muted text-xs leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========== CTA ========== */}
      <div className="border-t border-white/[0.06] py-16 text-center space-y-8">
        <SectionHeader
          idx="// 10"
          label="Próximo passo"
          headline={<>Vamos <Accent>começar</Accent>?</>}
          align="center"
        />
        <p className="text-saas-body leading-relaxed max-w-xl mx-auto">
          Se a proposta fizer sentido, o próximo passo é uma reunião de onboarding estratégico para aprofundar perfil de público, diferenciais, oferta atual e direcionar as mensagens e criativos das campanhas.
        </p>
        <a
          href="https://wa.me/5511999718595"
          target="_blank"
          rel="noopener noreferrer"
          className={SAAS_BTN_PRIMARY}
        >
          Falar com Rodrigo →
        </a>
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint">
          BA Consultoria © 2026 — Proposta válida por 7 dias
        </p>
      </div>

    </PropostaLayout>
  );
};

export default PropostaMonique;
