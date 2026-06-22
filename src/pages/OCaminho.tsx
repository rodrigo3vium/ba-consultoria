import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Helmet } from "react-helmet";
import { Check, X, ChevronDown, Menu, X as CloseIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { supabase } from "@/integrations/supabase/client";
import { tracker } from "@/lib/tracking";
import { toast } from "sonner";

const formSchema = z.object({
  nome: z.string().min(2, "Nome é obrigatório").max(100),
  email: z.string().email("Email inválido").max(255),
  whatsapp: z.string().min(10, "WhatsApp inválido").max(20),
});

type FormData = z.infer<typeof formSchema>;

const OCaminho = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = '#05090B';
    document.body.style.paddingTop = '0';
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.paddingTop = '';
    };
  }, []);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      whatsapp: "",
    },
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('submit-contact', {
        body: {
          name: data.nome,
          email: data.email,
          whatsapp: data.whatsapp,
          source: 'o-caminho',
        },
      });

      if (error) throw error;

      await tracker.identify(data.email, data.whatsapp, data.nome);
      await tracker.track("lead_capture", {
        product: "o-caminho",
        source: "landing-page",
      });

      toast.success("Inscrição realizada com sucesso");
      form.reset();
    } catch (error) {
      console.error("Erro ao salvar lead:", error);
      toast.error("Erro ao processar inscrição. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const menuItems = [
    { label: "O que é", id: "problema" },
    { label: "Como funciona", id: "mecanismo" },
    { label: "Conteúdo", id: "curriculo" },
    { label: "Para quem", id: "para-quem" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <div className="min-h-screen bg-pb-void text-pb-ink">
      <Helmet>
        <title>O Caminho - Propósito, Direção e Autogoverno</title>
        <meta
          name="description"
          content="Encontre propósito. Construa direção. Governe a si mesmo. Um curso para quem quer parar de se perder em metas vazias e começar a caminhar com direção."
        />
      </Helmet>

      {/* Header Fixo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-pb-void/80 backdrop-blur-xl border-b border-pb-grid-strong">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection("hero")}
              className="font-display uppercase text-pb-cyan text-xl md:text-2xl tracking-mono-wide"
            >
              O Caminho
            </button>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted hover:text-pb-cyan transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="hidden md:block">
              <button
                onClick={() => scrollToSection("inscricao")}
                className="btn-primary"
              >
                Quero entrar
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-pb-ink"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <CloseIcon size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted hover:text-pb-cyan transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("inscricao")}
                className="btn-primary justify-center w-full"
              >
                Quero entrar
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 md:pt-40 pb-20 overflow-hidden">
        {/* Corner decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-0 w-32 h-px bg-gradient-to-r from-pb-cyan/50 to-transparent" />
          <div className="absolute top-20 left-0 w-px h-32 bg-gradient-to-b from-pb-cyan/50 to-transparent" />
          <div className="absolute top-20 right-0 w-32 h-px bg-gradient-to-l from-pb-cyan/50 to-transparent" />
          <div className="absolute top-20 right-0 w-px h-32 bg-gradient-to-b from-pb-cyan/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display uppercase text-pb-ink leading-[0.92] text-4xl md:text-5xl lg:text-6xl mb-6">
                Encontre <span className="text-pb-cyan">propósito</span>.<br />
                Construa <span className="text-pb-cyan">direção</span>.<br />
                Governe <span className="text-pb-cyan">a si mesmo</span>.
              </h1>

              <p className="font-body text-pb-ink-soft leading-relaxed text-lg md:text-xl mb-8">
                Você não precisa de mais produtividade. Você precisa de uma vida que faça
                sentido — e de um jeito prático de organizar o que você faz em torno desse
                sentido.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Descubra a narrativa que você quer contar com a sua vida",
                  "Defina objetivos que você realmente respeita (e não modas)",
                  "Crie a base do autogoverno: narrativa → ambiente → corpo → mente",
                  "Pare de se perder em metas vazias e comece a caminhar com direção",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-pb-cyan mt-1 flex-shrink-0" />
                    <span className="font-body text-pb-ink-soft">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("inscricao")}
                  className="btn-primary"
                >
                  Quero começar o Caminho
                </button>
                <button
                  onClick={() => scrollToSection("curriculo")}
                  className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan hover:text-pb-ink transition-colors flex items-center gap-2"
                >
                  Ver o conteúdo
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card decorativo */}
            <div className="relative">
              <div className="bg-pb-void-card border border-pb-grid-strong p-8 md:p-10">
                <span className="absolute -top-3 left-8 bg-pb-cyan text-pb-void font-mono text-[10px] uppercase tracking-mono-wide px-3 py-1">
                  Começa pelo começo
                </span>
                <p className="font-body text-pb-ink leading-relaxed text-xl md:text-2xl mb-6">
                  Autogoverno não nasce de força de vontade.
                  <br />
                  <span className="text-pb-cyan font-medium">Nasce de um eixo.</span>
                </p>
                <div className="border-l-2 border-pb-cyan/50 pl-4">
                  <p className="font-body text-pb-ink-muted italic">
                    "Sem narrativa, disciplina vira tortura."
                  </p>
                </div>
              </div>
              {/* Decoração do card */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-pb-grid-strong -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Seção: O Problema */}
      <section id="problema" className="py-20 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-pb-cyan/50 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-3xl md:text-4xl lg:text-5xl mb-8">
              Você não está perdido por falta de <span className="text-pb-cyan">informação</span>.
            </h2>

            <ul className="space-y-4 mb-10 font-body text-pb-ink-soft text-lg">
              <li className="flex items-start gap-3">
                <span className="text-pb-cyan mt-1">•</span>
                Você funciona… mas por dentro sente que está construindo a vida errada.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pb-cyan mt-1">•</span>
                Você começa e para.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pb-cyan mt-1">•</span>
                Você consome conteúdo, mas não cria direção.
              </li>
            </ul>

            <blockquote className="bg-pb-void-card border-l-4 border-pb-cyan p-6 md:p-8">
              <p className="font-body text-pb-ink leading-relaxed text-xl md:text-2xl italic">
                "Sem propósito, disciplina vira tortura.
                <br />
                Sem narrativa, organização vira estética."
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Seção: A Promessa */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-3xl md:text-4xl lg:text-5xl mb-6">
              O Caminho não é sobre ficar <span className="text-pb-cyan">motivado</span>.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {[
              { title: "Clareza real", desc: "Saber o que você quer de verdade" },
              { title: "Um mapa", desc: "Um caminho claro a seguir" },
              { title: "Um critério", desc: "Para dizer sim e não com convicção" },
              { title: "Base sólida", desc: "Para hábitos e objetivos que duram" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-pb-void-card border border-pb-grid-strong p-6 hover:border-pb-cyan/30 transition-all"
              >
                <div className="w-10 h-10 border border-pb-cyan/30 bg-pb-cyan/10 flex items-center justify-center mb-4">
                  <span className="font-mono text-pb-cyan font-bold">{index + 1}</span>
                </div>
                <h3 className="font-display uppercase text-pb-ink text-lg mb-2">{item.title}</h3>
                <p className="font-body text-pb-ink-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="font-body text-pb-ink-soft text-center text-xl md:text-2xl max-w-2xl mx-auto">
            Propósito não é um sentimento bonito.
            <br />
            <span className="text-pb-cyan font-medium">Propósito é uma estrutura.</span>
          </p>
        </div>
      </section>

      {/* Seção: O Mecanismo (3 Ordens de Influência) */}
      <section id="mecanismo" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-3xl md:text-4xl lg:text-5xl mb-12 text-center">
              As 3 Ordens de <span className="text-pb-cyan">Influência</span>
            </h2>

            <div className="space-y-4 mb-12">
              {[
                { num: "1", title: "Governar a si mesmo" },
                { num: "2", title: "Governar a sua família" },
                { num: "3", title: "Governar a sua comunidade" },
              ].map((item) => (
                <div
                  key={item.num}
                  className="flex items-center gap-6 bg-pb-void-card border border-pb-grid-strong p-6 hover:border-pb-cyan/30 transition-all"
                >
                  <div className="w-16 h-16 bg-pb-cyan flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-2xl font-bold text-pb-void">{item.num}</span>
                  </div>
                  <h3 className="font-display uppercase text-pb-ink text-xl md:text-2xl">{item.title}</h3>
                </div>
              ))}
            </div>

            <p className="font-body text-pb-ink-soft text-center text-lg max-w-2xl mx-auto">
              A maioria tenta pular etapas…
              <br />
              <span className="text-pb-cyan">O Caminho começa onde deveria: em você.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Seção: Coração do Curso - Narrativa */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-3xl md:text-4xl mb-8">
              Se alguém escrevesse um livro sobre você…
            </h2>

            <p className="font-display uppercase text-pb-cyan leading-[0.92] text-2xl md:text-4xl lg:text-5xl mb-10">
              "O que você gostaria que estivesse escrito no final?"
            </p>

            <p className="font-body text-pb-ink-soft leading-relaxed text-lg mb-10">
              A narrativa é o seu eixo. É ela que dá sentido às suas escolhas, aos seus
              sacrifícios, aos seus "nãos". Sem uma narrativa escolhida, alguém escolhe por
              você — a moda, a expectativa, o status, a ansiedade.
            </p>

            <blockquote className="bg-pb-void-card border border-pb-grid-strong p-8 md:p-10">
              <p className="font-body text-pb-ink leading-relaxed text-xl md:text-2xl italic">
                "Histórias movem pessoas.
                <br />
                Pessoas movem o mundo."
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Seção: Como a Transformação Acontece */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-3xl md:text-4xl lg:text-5xl mb-12 text-center">
            Você vai construir direção em <span className="text-pb-cyan">camadas</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {/* Camada 1 */}
            <div className="bg-pb-void-card border border-pb-grid-strong p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-pb-cyan flex items-center justify-center">
                  <span className="font-display text-xl font-bold text-pb-void">1</span>
                </div>
                <div>
                  <h3 className="font-display uppercase text-pb-ink text-xl">Narrativa</h3>
                  <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan">O eixo</p>
                </div>
              </div>
              <ul className="space-y-3 font-body text-pb-ink-soft">
                <li className="flex items-start gap-2">
                  <span className="text-pb-cyan mt-1">•</span>
                  Valores reais vs. valores emprestados
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pb-cyan mt-1">•</span>
                  A sombra: o inimigo interno
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pb-cyan mt-1">•</span>
                  Seu norte verdadeiro
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pb-cyan mt-1">•</span>
                  Critério para decisões
                </li>
              </ul>
            </div>

            {/* Camada 2 */}
            <div className="bg-pb-void-card border border-pb-grid-strong p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-pb-cyan flex items-center justify-center">
                  <span className="font-display text-xl font-bold text-pb-void">2</span>
                </div>
                <div>
                  <h3 className="font-display uppercase text-pb-ink text-xl">Bases do Autogoverno</h3>
                  <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan">Os 4 pilares</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["Narrativa", "Ambiente", "Corpo", "Mente"].map((pilar, index) => (
                  <div
                    key={index}
                    className="bg-pb-void border border-pb-grid-strong p-4 text-center"
                  >
                    <span className="font-body text-pb-ink-soft">{pilar}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="font-body text-pb-ink-soft text-center text-xl max-w-2xl mx-auto">
            Você não vai só aprender.
            <br />
            <span className="text-pb-cyan font-medium">
              Você vai sair com uma direção escrita.
            </span>
          </p>
        </div>
      </section>

      {/* Seção: Conteúdo das Aulas (Currículo) */}
      <section id="curriculo" className="py-20 relative">
        <div className="absolute right-0 top-1/3 w-1 h-32 bg-gradient-to-b from-transparent via-pb-cyan/50 to-transparent" />

        <div className="container mx-auto px-4">
          <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-3xl md:text-4xl lg:text-5xl mb-12 text-center">
            O que tem nas <span className="text-pb-cyan">aulas</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {/* Aula 1 */}
            <div className="bg-pb-void-card border border-pb-grid-strong p-8 hover:border-pb-cyan/30 transition-all">
              <span className="inline-block font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan border border-pb-cyan/30 bg-pb-cyan/10 px-3 py-1 mb-4">
                Aula 1
              </span>
              <h3 className="font-display uppercase text-pb-ink text-2xl mb-6">As Ordens de Influência</h3>
              <ul className="space-y-3 font-body text-pb-ink-soft">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-pb-cyan mt-1 flex-shrink-0" />
                  Ordem natural do amadurecimento
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-pb-cyan mt-1 flex-shrink-0" />
                  Por que conteúdo novo não é necessariamente melhor
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-pb-cyan mt-1 flex-shrink-0" />
                  Governar a si mesmo como fundamento
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-pb-cyan mt-1 flex-shrink-0" />
                  Educação da vontade e ordenação dos amores
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-pb-cyan mt-1 flex-shrink-0" />
                  Beleza e pontualidade como sinais de autogoverno
                </li>
              </ul>
            </div>

            {/* Aula 2 */}
            <div className="bg-pb-void-card border border-pb-grid-strong p-8 hover:border-pb-cyan/30 transition-all">
              <span className="inline-block font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan border border-pb-cyan/30 bg-pb-cyan/10 px-3 py-1 mb-4">
                Aula 2
              </span>
              <h3 className="font-display uppercase text-pb-ink text-2xl mb-2">A Narrativa</h3>
              <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted mb-4">(o núcleo do Caminho)</p>
              <ul className="space-y-3 font-body text-pb-ink-soft">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-pb-cyan mt-1 flex-shrink-0" />
                  A pergunta definitiva: que história eu quero contar?
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-pb-cyan mt-1 flex-shrink-0" />
                  Por que a narrativa move o mundo
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-pb-cyan mt-1 flex-shrink-0" />
                  Jornada do Herói aplicada à vida real
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-pb-cyan mt-1 flex-shrink-0" />
                  Sombra: o inimigo interno
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-pb-cyan mt-1 flex-shrink-0" />
                  Por que um porquê sustenta a travessia
                </li>
              </ul>
            </div>
          </div>

          {/* Exercício Guiado */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-pb-void-card border border-pb-cyan/20 p-8">
              <h3 className="font-display uppercase text-pb-ink text-xl mb-6 text-center">
                Exercício guiado <span className="text-pb-cyan">(prático)</span>
              </h3>
              <div className="space-y-4">
                {[
                  "Separar um momento de silêncio",
                  'Escrever ~1000 palavras: "Como eu quero que termine o livro da minha vida?"',
                  "Resumir em 1 parágrafo: sua narrativa",
                  "Transformar isso em critério de decisão",
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-pb-cyan flex items-center justify-center flex-shrink-0">
                      <span className="font-mono text-sm font-bold text-pb-void">{index + 1}</span>
                    </div>
                    <p className="font-body text-pb-ink-soft pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Para Quem É / Não É */}
      <section id="para-quem" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-3xl md:text-4xl lg:text-5xl mb-12 text-center">
            Para quem é <span className="text-pb-cyan">(e para quem não é)</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* É pra você */}
            <div className="bg-pb-void-card border border-green-500/20 p-8">
              <h3 className="font-display uppercase text-green-400 text-xl mb-6">É pra você se…</h3>
              <ul className="space-y-4">
                {[
                  "Você sente que está construindo a vida errada",
                  "Você quer parar de começar e parar",
                  "Você quer um critério claro para dizer sim e não",
                  "Você quer uma estrutura, não apenas motivação",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="font-body text-pb-ink-soft">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Não é pra você */}
            <div className="bg-pb-void-card border border-red-500/20 p-8">
              <h3 className="font-display uppercase text-red-400 text-xl mb-6">Não é pra você se…</h3>
              <ul className="space-y-4">
                {[
                  "Você quer soluções rápidas e superficiais",
                  "Você não está disposto a fazer o trabalho interno",
                  "Você prefere terceirizar suas escolhas",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="font-body text-pb-ink-soft">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Resultado Esperado */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-3xl md:text-4xl lg:text-5xl mb-10">
              O que muda depois do <span className="text-pb-cyan">Caminho</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {["Um norte", "Uma história escolhida", "Um critério", "Autogoverno sólido"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="bg-pb-void-card border border-pb-grid-strong p-6 hover:border-pb-cyan/30 transition-all"
                  >
                    <p className="font-body text-pb-ink font-medium">{item}</p>
                  </div>
                )
              )}
            </div>

            <p className="font-display uppercase leading-[0.92] text-2xl md:text-3xl">
              <span className="text-pb-ink-muted">Ocupado…</span>
              <br />
              <span className="text-pb-cyan">construindo a vida errada.</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final + Formulário de Inscrição */}
      <section id="inscricao" className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-3xl md:text-4xl lg:text-5xl mb-4">
              Você não precisa de mais um <span className="text-pb-cyan">método</span>.
            </h2>
            <p className="font-body text-pb-ink-soft text-xl mb-10">
              Você precisa escolher quem você vai ser.
            </p>

            <div className="bg-pb-void-card border border-pb-grid-strong p-8 md:p-10">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <input
                            placeholder="Seu nome"
                            className="pb-input w-full"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <input
                            type="email"
                            placeholder="Seu melhor email"
                            className="pb-input w-full"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <input
                            placeholder="Seu WhatsApp"
                            className="pb-input w-full"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary justify-center w-full"
                  >
                    {isSubmitting ? "Enviando..." : "Quero receber acesso"}
                  </button>

                  <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-faint text-center">
                    Ao enviar, você concorda em receber comunicações sobre o curso.
                  </p>
                </form>
              </Form>
            </div>

            <p className="mt-8 font-body text-pb-ink-muted">
              Comece pelo começo: <span className="text-pb-cyan">governar a si mesmo</span>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-3xl md:text-4xl lg:text-5xl mb-12 text-center">
            Perguntas <span className="text-pb-cyan">frequentes</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="bg-pb-void-card border border-pb-grid-strong px-6 data-[state=open]:border-pb-cyan/30"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-body text-pb-ink text-lg">Eu não tenho clareza nenhuma. Serve pra mim?</span>
                </AccordionTrigger>
                <AccordionContent className="font-body text-pb-ink-soft pb-6">
                  Serve principalmente pra você. O Caminho foi desenhado para quem sente que está
                  perdido, funcionando no automático ou construindo algo que não faz sentido. Se
                  você já tivesse clareza, não precisaria do curso.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-pb-void-card border border-pb-grid-strong px-6 data-[state=open]:border-pb-cyan/30"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-body text-pb-ink text-lg">Isso é muito filosófico?</span>
                </AccordionTrigger>
                <AccordionContent className="font-body text-pb-ink-soft pb-6">
                  É profundo, mas é prático. Você vai sair com exercícios feitos, uma narrativa
                  escrita e um critério claro para suas decisões. Não é teoria — é aplicação.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-pb-void-card border border-pb-grid-strong px-6 data-[state=open]:border-pb-cyan/30"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-body text-pb-ink text-lg">E se eu não tiver tempo?</span>
                </AccordionTrigger>
                <AccordionContent className="font-body text-pb-ink-soft pb-6">
                  Você não precisa de tempo livre. Você precisa de clareza sobre o que fazer com o
                  tempo que já tem. O curso é compacto e os exercícios podem ser feitos em momentos
                  curtos de reflexão.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-pb-void-card border border-pb-grid-strong px-6 data-[state=open]:border-pb-cyan/30"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-body text-pb-ink text-lg">Isso é sobre carreira?</span>
                </AccordionTrigger>
                <AccordionContent className="font-body text-pb-ink-soft pb-6">
                  É sobre vida. A carreira é uma parte da sua vida, não o centro. O Caminho te
                  ajuda a definir o centro primeiro — e a partir daí, organizar todo o resto,
                  incluindo trabalho.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-pb-grid-strong">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="font-display uppercase text-pb-cyan text-xl mb-2">O Caminho</p>
              <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">
                &copy; {new Date().getFullYear()} Todos os direitos reservados.
              </p>
            </div>

            <nav className="flex flex-wrap justify-center gap-6">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted hover:text-pb-cyan transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-faint text-center mt-8">
            Este curso não substitui acompanhamento psicológico ou terapêutico.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default OCaminho;
