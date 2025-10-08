import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Code, GraduationCap, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import chatgptLogo from "@/assets/chatgpt-logo.png";
import grokLogo from "@/assets/grok-logo.png";
import geminiLogo from "@/assets/gemini-logo.png";
import claudeLogo from "@/assets/claude-logo.png";
import n8nLogo from "@/assets/n8n-logo.png";
import typebotLogo from "@/assets/typebot-logo.png";
import lovableLogo from "@/assets/lovable-logo.png";
import makeLogo from "@/assets/make-logo.png";
import worldMap from "@/assets/world-map.jpeg";
import hurbana from "@/assets/clients/hurbana.png";
import client2 from "@/assets/clients/client-2.png";
import vocical from "@/assets/clients/vocical.png";
import client4 from "@/assets/clients/client-4.png";
import pincelos from "@/assets/clients/pincelos.png";
import ftx from "@/assets/clients/ftx.png";
import mjr from "@/assets/clients/mjr.png";
import cfBuffet from "@/assets/clients/cf-buffet.png";
import dionello from "@/assets/clients/dionello.png";
import client10 from "@/assets/clients/client-10.png";

const BA = () => {
  const clientLogos = [
    hurbana,
    client2,
    vocical,
    client4,
    pincelos,
    ftx,
    mjr,
    cfBuffet,
    dionello,
    client10,
  ];

  const pillars = [
    {
      icon: Code,
      title: 'Tecnologia',
      description: 'Soluções tecnológicas inovadoras para impulsionar seu negócio'
    },
    {
      icon: GraduationCap,
      title: 'Educação',
      description: 'Capacitação e desenvolvimento de equipes de alta performance'
    },
    {
      icon: TrendingUp,
      title: 'Consultoria',
      description: 'Estratégias personalizadas para crescimento empresarial'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Pro-Life Banner */}
      <div className="bg-ba-blue-medium text-white py-3 px-4 text-center font-medium text-sm relative z-50">
        Nós somos uma empresa pró-vida. Somos contra todo o tipo de aborto.
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-ba-blue-light/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-ba-orange/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-ba-blue-light via-white to-ba-orange bg-clip-text text-transparent leading-tight">
              Benites Albuquerque é um Ecossistema de soluções empresariais construído para fazer empreendedores brasileiros prosperarem.
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Tudo o que você precisa para aumentar a geração de receita da sua empresa. Marketing, Vendas, CS e Tecnologia.
            </h2>
            <div className="pt-8">
              <Button size="lg" variant="hero" className="text-lg px-10 py-6">
                Conheça Nossas Soluções
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 px-4 relative bg-black border-y border-ba-blue-light/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Nossos Fundadores
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Rodrigo Albuquerque */}
            <div className="space-y-6">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-ba-blue-light/20 bg-gradient-to-br from-ba-blue-dark/50 to-black/50 backdrop-blur-sm">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <div className="w-24 h-24 mx-auto rounded-full bg-gradient-primary/20 flex items-center justify-center">
                        <svg className="w-12 h-12 text-ba-blue-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p className="text-muted-foreground text-sm">Foto do fundador</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -z-10 top-8 -right-8 w-72 h-72 bg-ba-blue-light/10 rounded-full blur-3xl"></div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                Rodrigo Albuquerque
              </h3>
              <p className="text-xl font-bold bg-gradient-to-r from-ba-blue-light to-ba-orange bg-clip-text text-transparent">
                CO-FUNDADOR
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Rodrigo Albuquerque passou alguns anos sendo mentorado e aprendendo com alguns dos maiores empreendedores do país.
                </p>
                <p>
                  É apaixonado por Marketing e Negócios.
                </p>
                <p>
                  Tem como hobbie estudar filosofia e psicologia. Já tendo realizado diversos cursos na área (Stanford, Jordan Peterson, Jonas Madureira…)
                </p>
                <p>
                  Compilou na Benites Albuquerque o aprendizado que adquiriu nessas experiências e que extraiu das mais de 100 consultorias que deu.
                </p>
              </div>
            </div>

            {/* Francielli Benites */}
            <div className="space-y-6">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-ba-blue-light/20 bg-gradient-to-br from-ba-blue-dark/50 to-black/50 backdrop-blur-sm">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <div className="w-24 h-24 mx-auto rounded-full bg-gradient-primary/20 flex items-center justify-center">
                        <svg className="w-12 h-12 text-ba-blue-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p className="text-muted-foreground text-sm">Foto da fundadora</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-ba-orange/10 rounded-full blur-3xl"></div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                Francielli Benites
              </h3>
              <p className="text-xl font-bold bg-gradient-to-r from-ba-blue-light to-ba-orange bg-clip-text text-transparent">
                CO-FUNDADORA
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Francielli Benites tem um histórico de conquistas que carrega desde a adolescência em uma gama de atividades. Conquistou o sétimo lugar do país em um concurso de redação, tem diversas medalhas da olimpíada de matemática, além de ter cursado matemática e Engenharia Civil ao mesmo tempo.
                </p>
                <p>
                  Ao sair da faculdade, expandiu seus interesses para a área de humanas, mergulhando em literatura clássica.
                </p>
                <p>
                  Na Benites Albuquerque, ela usa o seu amplo conhecimento da realidade para ter ideias únicas para resolver desafios de forma eficiente e criativa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 px-4 relative bg-gradient-to-b from-black via-ba-gray-dark/20 to-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Nossos Pilares
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="group relative bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 rounded-2xl p-8 hover:shadow-glow hover:border-ba-blue-light/40 transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <pillar.icon className="w-8 h-8 text-background" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{pillar.description}</p>
                  <Link 
                    to={`/${pillar.title.toLowerCase()}`}
                    className="inline-block"
                  >
                    <Button 
                      variant="outline"
                      className="border-ba-blue-light/40 text-foreground hover:bg-ba-blue-light/10 rounded-full"
                    >
                      Saiba Mais
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 relative bg-black border-y border-ba-blue-light/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Tecnologias
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Utilizamos as mais avançadas ferramentas e plataformas para entregar soluções de ponta
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Lovable */}
            <div className="group bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 rounded-2xl p-6 hover:shadow-glow hover:border-ba-blue-light/40 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center justify-center aspect-square">
              <div className="text-center">
                <img src={lovableLogo} alt="Lovable" className="w-16 h-16 mb-3 mx-auto object-contain" />
                <h3 className="text-lg font-bold text-foreground mb-2">Lovable</h3>
                <p className="text-xs text-muted-foreground">Desenvolvimento rápido</p>
              </div>
            </div>

            {/* n8n */}
            <div className="group bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 rounded-2xl p-6 hover:shadow-glow hover:border-ba-blue-light/40 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center justify-center aspect-square">
              <div className="text-center">
                <img src={n8nLogo} alt="n8n" className="w-16 h-16 mb-3 mx-auto object-contain" />
                <h3 className="text-lg font-bold text-foreground mb-2">n8n</h3>
                <p className="text-xs text-muted-foreground">Automação avançada</p>
              </div>
            </div>

            {/* ChatGPT */}
            <div className="group bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 rounded-2xl p-6 hover:shadow-glow hover:border-ba-blue-light/40 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center justify-center aspect-square">
              <div className="text-center">
                <img src={chatgptLogo} alt="ChatGPT" className="w-16 h-16 mb-3 mx-auto object-contain" />
                <h3 className="text-lg font-bold text-foreground mb-2">ChatGPT</h3>
                <p className="text-xs text-muted-foreground">IA conversacional</p>
              </div>
            </div>

            {/* Gemini */}
            <div className="group bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 rounded-2xl p-6 hover:shadow-glow hover:border-ba-blue-light/40 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center justify-center aspect-square">
              <div className="text-center">
                <img src={geminiLogo} alt="Gemini" className="w-16 h-16 mb-3 mx-auto object-contain" />
                <h3 className="text-lg font-bold text-foreground mb-2">Gemini</h3>
                <p className="text-xs text-muted-foreground">IA multimodal</p>
              </div>
            </div>

            {/* Claude */}
            <div className="group bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 rounded-2xl p-6 hover:shadow-glow hover:border-ba-blue-light/40 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center justify-center aspect-square">
              <div className="text-center">
                <img src={claudeLogo} alt="Claude" className="w-16 h-16 mb-3 mx-auto object-contain" />
                <h3 className="text-lg font-bold text-foreground mb-2">Claude</h3>
                <p className="text-xs text-muted-foreground">IA analítica</p>
              </div>
            </div>

            {/* Grok */}
            <div className="group bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 rounded-2xl p-6 hover:shadow-glow hover:border-ba-blue-light/40 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center justify-center aspect-square">
              <div className="text-center">
                <img src={grokLogo} alt="Grok" className="w-16 h-16 mb-3 mx-auto object-contain" />
                <h3 className="text-lg font-bold text-foreground mb-2">Grok</h3>
                <p className="text-xs text-muted-foreground">IA em tempo real</p>
              </div>
            </div>

            {/* Make */}
            <div className="group bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 rounded-2xl p-6 hover:shadow-glow hover:border-ba-blue-light/40 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center justify-center aspect-square">
              <div className="text-center">
                <img src={makeLogo} alt="Make" className="w-16 h-16 mb-3 mx-auto object-contain" />
                <h3 className="text-lg font-bold text-foreground mb-2">Make</h3>
                <p className="text-xs text-muted-foreground">Integração visual</p>
              </div>
            </div>

            {/* Typebot */}
            <div className="group bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 rounded-2xl p-6 hover:shadow-glow hover:border-ba-blue-light/40 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center justify-center aspect-square">
              <div className="text-center">
                <img src={typebotLogo} alt="Typebot" className="w-16 h-16 mb-3 mx-auto object-contain" />
                <h3 className="text-lg font-bold text-foreground mb-2">Typebot</h3>
                <p className="text-xs text-muted-foreground">Chatbots inteligentes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Carousel Section */}
      <section className="py-20 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ba-blue-light/3 to-transparent"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Cases de Uso
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Soluções comprovadas que transformam negócios
          </p>
          
          <div className="relative">
            <div className="flex animate-scroll-slow gap-6">
              {[
                {
                  title: "Prospecção de obras orientada por IA",
                  category: "Captação de leads",
                  description: "Selecionamos, entre 20.000 obras em bases oficiais, as 100 com maior probabilidade de contrato para sua construtora.",
                  metric: "+2x obras qualificadas"
                },
                {
                  title: "Automação de Notas Fiscais",
                  category: "Operacional",
                  description: "A automação de processamento de Notas Fiscais integrado com o seu ERP poupa horas de trabalho manual e permite foco em tarefas que agregam valor.",
                  metric: "+30% eficiência"
                },
                {
                  title: "Atendimento Inteligente 24/7",
                  category: "Customer Success",
                  description: "Sistema de chatbot com IA que resolve dúvidas, agenda reuniões e qualifica leads automaticamente, mesmo fora do horário comercial.",
                  metric: "+40% conversão"
                },
                {
                  title: "Análise Preditiva de Vendas",
                  category: "Vendas",
                  description: "Machine learning para prever tendências de vendas, identificar oportunidades e otimizar estratégias comerciais com base em dados históricos.",
                  metric: "+25% receita"
                },
                {
                  title: "Gestão de Campanhas com IA",
                  category: "Marketing",
                  description: "Otimização automática de campanhas publicitárias usando IA para maximizar ROI e alcançar o público certo no momento ideal.",
                  metric: "-35% custo por lead"
                },
                {
                  title: "Onboarding Automatizado",
                  category: "RH",
                  description: "Processo completo de integração de novos colaboradores automatizado, desde documentação até treinamentos personalizados por IA.",
                  metric: "50% mais rápido"
                }
              ].concat([
                {
                  title: "Prospecção de obras orientada por IA",
                  category: "Captação de leads",
                  description: "Selecionamos, entre 20.000 obras em bases oficiais, as 100 com maior probabilidade de contrato para sua construtora.",
                  metric: "+2x obras qualificadas"
                },
                {
                  title: "Automação de Notas Fiscais",
                  category: "Operacional",
                  description: "A automação de processamento de Notas Fiscais integrado com o seu ERP poupa horas de trabalho manual e permite foco em tarefas que agregam valor.",
                  metric: "+30% eficiência"
                },
                {
                  title: "Atendimento Inteligente 24/7",
                  category: "Customer Success",
                  description: "Sistema de chatbot com IA que resolve dúvidas, agenda reuniões e qualifica leads automaticamente, mesmo fora do horário comercial.",
                  metric: "+40% conversão"
                },
                {
                  title: "Análise Preditiva de Vendas",
                  category: "Vendas",
                  description: "Machine learning para prever tendências de vendas, identificar oportunidades e otimizar estratégias comerciais com base em dados históricos.",
                  metric: "+25% receita"
                },
                {
                  title: "Gestão de Campanhas com IA",
                  category: "Marketing",
                  description: "Otimização automática de campanhas publicitárias usando IA para maximizar ROI e alcançar o público certo no momento ideal.",
                  metric: "-35% custo por lead"
                },
                {
                  title: "Onboarding Automatizado",
                  category: "RH",
                  description: "Processo completo de integração de novos colaboradores automatizado, desde documentação até treinamentos personalizados por IA.",
                  metric: "50% mais rápido"
                }
              ]).map((useCase, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[380px] bg-black/90 backdrop-blur-sm border border-ba-blue-light/20 rounded-3xl p-8 hover:shadow-glow hover:border-ba-blue-light/40 transition-all duration-500"
                >
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 bg-white/10 text-foreground border border-white/20 rounded-full text-sm font-medium">
                      {useCase.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground min-h-[64px]">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 min-h-[96px]">
                    {useCase.description}
                  </p>
                  <div className="pt-4 border-t border-ba-blue-light/20">
                    <p className="text-ba-orange font-bold text-lg">
                      {useCase.metric}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 px-4 bg-black border-y border-ba-blue-light/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Nossos Clientes
          </h2>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300 relative"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
                    <img
                      src={logo}
                      alt={`Cliente ${index + 1}`}
                      className="h-16 md:h-24 w-auto object-contain opacity-70 hover:opacity-100 relative z-10"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-black border-t border-ba-blue-light/10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Perguntas Frequentes
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços e soluções
          </p>
          
          <div className="space-y-4">
            <div className="bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 rounded-2xl overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-white/5 transition-colors">
                  <h3 className="text-lg font-semibold text-foreground">
                    Como a IA pode ajudar meu negócio?
                  </h3>
                  <svg className="w-5 h-5 text-ba-blue-light transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground">
                  <p>A IA pode automatizar processos repetitivos, analisar grandes volumes de dados para insights estratégicos, melhorar o atendimento ao cliente e otimizar operações. Implementamos soluções personalizadas que se adaptam às necessidades específicas do seu negócio.</p>
                </div>
              </details>
            </div>

            <div className="bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 rounded-2xl overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-white/5 transition-colors">
                  <h3 className="text-lg font-semibold text-foreground">
                    Quanto tempo leva para implementar uma solução?
                  </h3>
                  <svg className="w-5 h-5 text-ba-blue-light transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground">
                  <p>O tempo de implementação varia conforme a complexidade do projeto. Soluções simples podem estar operacionais em 2-4 semanas, enquanto projetos mais robustos podem levar de 2 a 3 meses. Trabalhamos com metodologias ágeis para entregar valor rapidamente.</p>
                </div>
              </details>
            </div>

            <div className="bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 rounded-2xl overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-white/5 transition-colors">
                  <h3 className="text-lg font-semibold text-foreground">
                    Vocês oferecem suporte após a implementação?
                  </h3>
                  <svg className="w-5 h-5 text-ba-blue-light transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground">
                  <p>Sim! Oferecemos suporte contínuo com diferentes planos de manutenção. Isso inclui monitoramento, atualizações, treinamento de equipe e suporte técnico dedicado para garantir que sua solução continue performando no máximo.</p>
                </div>
              </details>
            </div>

            <div className="bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 rounded-2xl overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-white/5 transition-colors">
                  <h3 className="text-lg font-semibold text-foreground">
                    Qual o investimento necessário?
                  </h3>
                  <svg className="w-5 h-5 text-ba-blue-light transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground">
                  <p>O investimento varia conforme o escopo e complexidade do projeto. Oferecemos consultoria gratuita para entender suas necessidades e apresentar uma proposta personalizada com melhor custo-benefício. Entre em contato para um orçamento sem compromisso.</p>
                </div>
              </details>
            </div>

            <div className="bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 rounded-2xl overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-white/5 transition-colors">
                  <h3 className="text-lg font-semibold text-foreground">
                    Preciso ter conhecimento técnico para usar as soluções?
                  </h3>
                  <svg className="w-5 h-5 text-ba-blue-light transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground">
                  <p>Não! Desenvolvemos soluções com interfaces intuitivas e oferecemos treinamento completo para sua equipe. Nosso objetivo é tornar a tecnologia acessível e fácil de usar, independentemente do nível de conhecimento técnico.</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* World Map Section */}
      <section className="py-20 px-4 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ba-blue-light/3 to-transparent"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            BA Consultoria no Mundo
          </h2>
          <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden border border-ba-blue-light/20 bg-black/90 backdrop-blur-sm">
            <img 
              src={worldMap} 
              alt="Mapa Mundi - BA Consultoria no Mundo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Presença global, impacto local. Levando expertise empresarial brasileira para o mundo.
            </p>
          </div>
        </div>
      </section>

      {/* Leaders Section */}
      <section className="py-20 px-4 relative bg-black border-t border-ba-blue-light/10">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Líderes que Confiaram em Nós
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Diego Barreto */}
            <div className="group bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 rounded-2xl p-6 hover:shadow-glow hover:border-ba-blue-light/40 transition-all duration-500">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground mb-1">Diego Barreto</h3>
                <p className="text-ba-orange font-semibold text-sm mb-2">CEO - iFood</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Com vasta experiência em estratégia e finanças, Diego lidera a expansão e inovação no iFood, impulsionando o crescimento da empresa no setor de tecnologia e delivery. Autor do best-seller "Nova Economia," ele se destaca por sua visão disruptiva e abordagem orientada a dados para transformar o mercado brasileiro de delivery.
                </p>
              </div>
            </div>

            {/* Pedro Somma */}
            <div className="group bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 rounded-2xl p-6 hover:shadow-glow hover:border-ba-blue-light/40 transition-all duration-500">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground mb-1">Pedro Somma</h3>
                <p className="text-ba-orange font-semibold text-sm mb-2">Ex-COO - 99 Taxi</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Com uma trajetória de destaque na área de mobilidade urbana, Pedro foi COO da 99 Taxi, onde desempenhou um papel fundamental na expansão e operação da empresa. Sua experiência em gestão e inovação contribuiu para consolidar a 99 como uma das principais plataformas de transporte no Brasil, impulsionando a transformação do setor de mobilidade no país.
                </p>
              </div>
            </div>

            {/* Luis Vabo Jr. */}
            <div className="group bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 rounded-2xl p-6 hover:shadow-glow hover:border-ba-blue-light/40 transition-all duration-500">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground mb-1">Luis Vabo Jr.</h3>
                <p className="text-ba-orange font-semibold text-sm mb-2">Ex-diretor - Stone</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Empreendedor serial e investidor com ampla experiência em venture capital, Luis Vabo Jr. foi diretor e sócio da Stone. Nos últimos anos, tem se destacado pela sua atuação voltada a Softskills, além de ser OPM por Harvard e Autor do livro "Falar em público é para você!".
                </p>
              </div>
            </div>

            {/* João Olivério */}
            <div className="group bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 rounded-2xl p-6 hover:shadow-glow hover:border-ba-blue-light/40 transition-all duration-500">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground mb-1">João Olivério</h3>
                <p className="text-ba-orange font-semibold text-sm mb-2">CEO - Sales As A System | Country Manager - Apollo.io</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Especialista em vendas e tecnologia, João Olivério é CEO da Sales As A System, onde criou uma metodologia inovadora para líderes de vendas, e Country Manager da Apollo.io, plataforma de inteligência de leads. Com passagens pela Zendesk, onde liderou operações globais desde 2013, e como mentor no G4 Sales, ele se destaca por sua visão estratégica, apoiando startups e empreendedores a alcançarem excelência no mercado.
                </p>
              </div>
            </div>

            {/* José Diogo Costódio Rodrigues */}
            <div className="group bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 rounded-2xl p-6 hover:shadow-glow hover:border-ba-blue-light/40 transition-all duration-500">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground mb-1">José Diogo Costódio Rodrigues</h3>
                <p className="text-ba-orange font-semibold text-sm mb-2">CMO Latam & Canada - Tinder</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Com ampla experiência em Branding Marketing, José Costódio passou por algumas das mais Icônicas empresas do mundo, tendo sido Brand Manager na Nike e Redbull. Atualmente, é diretor geral de marketing do Tinder na América Latina e Canadá.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        @keyframes scroll-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-slow {
          animation: scroll-slow 60s linear infinite;
        }
        .animate-scroll-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default BA;
