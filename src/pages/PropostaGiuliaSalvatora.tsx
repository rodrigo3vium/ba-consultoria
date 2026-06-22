import PropostaLayout from "@/components/pb/PropostaLayout";

const PropostaGiuliaSalvatora = () => {
  return (
    <PropostaLayout
      cliente="Giulia Salvatore"
      projeto="Receita, Tecnologia e Inteligência para a Sal"
    >
      {/* ══════════ INTRO ══════════ */}
      <div className="border-t border-pb-grid-strong py-16 space-y-6">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 01 VISÃO GERAL</p>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-2xl">
          Uma parceria estratégica para transformar a Sal em um ecossistema de receita inteligente — com IA aplicada, funil otimizado e infraestrutura própria.
        </p>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-2xl">
          Meu papel é ser o braço direito da Sal em receita e tecnologia. Um olhar integrado que conecta inteligência artificial, otimização comercial e infraestrutura interna.
        </p>
      </div>

      {/* ══════════ ESCOPO ══════════ */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 02 ESCOPO DE ATUAÇÃO</p>
        <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-[clamp(32px,4vw,56px)]">Três frentes, um objetivo — fazer a Sal faturar mais.</h2>

        {/* FRENTE 1 */}
        <div className="border border-pb-grid-strong bg-pb-void-card p-8 space-y-5">
          <div className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan">Frente I</div>
          <h3 className="font-display uppercase text-pb-ink text-[clamp(22px,3vw,36px)] leading-[0.95]">Inteligência Artificial aplicada à operação e ao produto</h3>
          <p className="font-body text-pb-ink-soft leading-relaxed italic">
            Soluções que agregam valor direto para suas clientes e diferenciam a Sal no mercado. O foco é transformar o Método Sal em tecnologia — sem perder autenticidade.
          </p>
          <ul className="space-y-3">
            {[
              "Bot completo de produção de conteúdo alimentado pelo Método Sal, árvore de conteúdo, manual de marca individual e referências — gera roteiros de Stories personalizados por cliente, conectados aos galhos temáticos, pautas quentes e posicionamento de cada aluna.",
              "Monitoramento automatizado de Stories das clientes com relatórios diários — análise de produção baseada nos seus parâmetros, com feedback individual e personalizado.",
              "Adaptação de referências virais: a aluna sobe um vídeo que performou bem em outro perfil e a IA adapta para o contexto, tom de voz e nicho dela.",
              "Produção de carrosséis com IA usando regras avançadas de design — hierarquia visual, tipografia, espaçamento — adaptados à identidade visual da Sal.",
            ].map((item) => (
              <li key={item} className="flex gap-3 font-body text-pb-ink-soft text-sm leading-relaxed">
                <span className="text-pb-cyan flex-shrink-0 mt-0.5">→</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="border border-pb-grid-strong p-4 mt-2">
            <p className="font-body text-pb-cyan text-sm leading-relaxed">
              Esse bot pode se tornar um produto à parte, vendido por assinatura junto com o curso de produção de conteúdo — uma nova linha de receita recorrente.
            </p>
          </div>
        </div>

        {/* FRENTE 2 */}
        <div className="border border-pb-grid-strong bg-pb-void-card p-8 space-y-5">
          <div className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan">Frente II</div>
          <h3 className="font-display uppercase text-pb-ink text-[clamp(22px,3vw,36px)] leading-[0.95]">Otimização do funil de receita de ponta a ponta</h3>
          <p className="font-body text-pb-ink-soft leading-relaxed italic">
            Trabalho de CRO — Chief Revenue Officer. Mapeamento e melhoria contínua de todas as taxas de conversão, do topo do funil até o pós-venda. Cada etapa vira um ponto de alavancagem.
          </p>
          <ul className="space-y-3">
            {[
              "Mapeamento completo do funil: site → formulário de filtro → call de vendas → fechamento → ascensão entre produtos.",
              "Reunião semanal de vendas — acompanhamento de métricas e proposição de testes para melhorar conversão.",
              "Processo de repescagem de leads: toda a base que entrou, demonstrou interesse, foi cliente antiga ou disse \"agora não\" volta a ser trabalhada de forma sistemática.",
              "Estratégia de ascensão entre produtos — levar clientes dos cursos de entrada para mentoria e ofertas de maior ticket.",
              "Insights comerciais gerados por IA a partir dos dados da operação — conforme a base cresce, a personalização das abordagens melhora exponencialmente.",
            ].map((item) => (
              <li key={item} className="flex gap-3 font-body text-pb-ink-soft text-sm leading-relaxed">
                <span className="text-pb-cyan flex-shrink-0 mt-0.5">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* FRENTE 3 */}
        <div className="border border-pb-grid-strong bg-pb-void-card p-8 space-y-5">
          <div className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan">Frente III</div>
          <h3 className="font-display uppercase text-pb-ink text-[clamp(22px,3vw,36px)] leading-[0.95]">Infraestrutura tecnológica interna</h3>
          <p className="font-body text-pb-ink-soft leading-relaxed italic">
            Eliminar a dependência de múltiplas plataformas pagas que não se integram, reduzir custos e dar liberdade total para customizar. Tudo fica da Sal, sem lock-in.
          </p>
          <ul className="space-y-3">
            {[
              "CRM próprio para organizar a base, gerar alertas de follow-up e dar visibilidade ao pipeline comercial.",
              "Formulários internos substituindo Typeform/Respondi.",
              "Automações de e-mail e integração com WhatsApp.",
              "Tudo construído sobre plataformas open source — código é nosso, custo é mínimo, liberdade é total.",
            ].map((item) => (
              <li key={item} className="flex gap-3 font-body text-pb-ink-soft text-sm leading-relaxed">
                <span className="text-pb-cyan flex-shrink-0 mt-0.5">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ══════════ MODELO COMERCIAL ══════════ */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 03 MODELO COMERCIAL</p>
        <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-[clamp(32px,4vw,56px)]">Alinhamento total com o seu resultado.</h2>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-2xl italic">
          Se eu não gerar resultado, eu não ganho. Meu incentivo está 100% atrelado ao faturamento da Sal.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-pb-grid-strong bg-pb-void-card p-8 text-center">
            <div className="font-display text-[clamp(64px,8vw,96px)] text-pb-cyan leading-none">15<span className="text-[40px]">%</span></div>
            <div className="font-body text-pb-ink text-base mt-2">Mentorias e novos produtos</div>
            <div className="font-mono text-[9px] uppercase tracking-mono-wide text-pb-ink-muted mt-1">Faturamento gerado · Repasse mensal</div>
          </div>
          <div className="border border-pb-grid-strong bg-pb-void-card p-8 text-center">
            <div className="font-display text-[clamp(64px,8vw,96px)] text-pb-cyan leading-none">20<span className="text-[40px]">%</span></div>
            <div className="font-body text-pb-ink text-base mt-2">Curso — Método Sal</div>
            <div className="font-mono text-[9px] uppercase tracking-mono-wide text-pb-ink-muted mt-1">Mantido conforme acordado</div>
          </div>
        </div>

        <div className="border border-pb-grid-strong bg-pb-void-card p-6">
          <p className="font-body text-pb-ink-soft leading-relaxed italic">
            Custos de operação como ferramentas e infraestrutura são negociados conforme surgirem. Precisa ser bom para os dois lados. Não estou vendendo horas — estou assumindo a responsabilidade de fazer a Sal faturar mais.
          </p>
        </div>
      </div>

      {/* ══════════ PRÓXIMOS PASSOS ══════════ */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 04 PRÓXIMOS PASSOS</p>
        <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-[clamp(32px,4vw,56px)]">O que acontece depois do sim.</h2>

        <div className="space-y-0">
          {[
            { bold: "Confirmar o aceite desta proposta", rest: " para iniciar formalmente a parceria." },
            { bold: "Sessão de trabalho de 2–3 horas", rest: " para absorver o Método Sal completo e estruturar o bot de conteúdo." },
            { bold: "Envio dos primeiros roteiros gerados por IA", rest: " baseados nas transcrições dos seus vídeos, para validação." },
            { bold: "Mapeamento completo do funil", rest: " e estruturação do processo de repescagem de leads." },
            { bold: "Definição e implementação do CRM interno", rest: " para organizar a base e dar visibilidade ao pipeline." },
            { bold: "Teste da integração Claude + ManyChat", rest: " para automação de DM." },
          ].map((step, i) => (
            <div key={step.bold} className="flex items-start gap-5 py-5 border-b border-pb-grid-strong last:border-b-0">
              <div className="font-display text-pb-cyan text-xl flex-shrink-0 min-w-[32px]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="font-body text-pb-ink-soft leading-relaxed">
                <span className="text-pb-ink font-medium">{step.bold}</span>{step.rest}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════ CTA ══════════ */}
      <div className="border-t border-pb-grid-strong py-24 text-center space-y-6">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan">// 05 ACEITE</p>
        <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-[clamp(40px,6vw,72px)]">Pronta para construir o ecossistema da Sal?</h2>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-md mx-auto">
          Vamos transformar método, dados e tecnologia em receita.
        </p>
        <div>
          <a
            href="https://wa.me/5511999718595?text=Aceito%20a%20nossa%20parceria!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Confirmar Proposta
          </a>
        </div>
        <p className="font-mono text-[10px] text-pb-ink-muted pt-4">
          Proposta confidencial — Abril 2026
        </p>
      </div>
    </PropostaLayout>
  );
};

export default PropostaGiuliaSalvatora;
