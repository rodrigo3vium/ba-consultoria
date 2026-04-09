import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { usePageViewTracking } from "@/hooks/usePageViewTracking";
import NotFound from "./pages/NotFound";
import BA from "./pages/BA";

const Cases = lazy(() => import("./pages/Cases"));
const CaseDetails = lazy(() => import("./pages/CaseDetails"));
const Consultoria = lazy(() => import("./pages/Consultoria"));
const Servicos = lazy(() => import("./pages/Servicos"));
const Tecnologia = lazy(() => import("./pages/Tecnologia"));
const Educacao = lazy(() => import("./pages/Educacao"));
const IAParaNegocios = lazy(() => import("./pages/IAParaNegocios"));
const IADoZero = lazy(() => import("./pages/IADoZero"));
const GoogleMeuNegocio = lazy(() => import("./pages/GoogleMeuNegocio"));
const ComoAplicarIA = lazy(() => import("./pages/ComoAplicarIA"));
const OCaminho = lazy(() => import("./pages/OCaminho"));
const ClaudeCode = lazy(() => import("./pages/ClaudeCode"));
const MetodoStark = lazy(() => import("./pages/MetodoStark"));
const ImersaoClaude = lazy(() => import("./pages/ImersaoClaude"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Auth = lazy(() => import("./pages/Auth"));
const Admin = lazy(() => import("./pages/Admin"));
const AdminBlog = lazy(() => import("./pages/AdminBlog"));
const AdminCRM = lazy(() => import("./pages/AdminCRM"));
const AdminImport = lazy(() => import("./pages/AdminImport"));
const AdminImportDirect = lazy(() => import("./pages/AdminImportDirect"));
const AdminImportMapping = lazy(() => import("./pages/AdminImportMapping"));
const AdminFunnels = lazy(() => import("./pages/AdminFunnels"));
const AdminKanban = lazy(() => import("./pages/AdminKanban"));
const AdminEditor = lazy(() => import("./pages/AdminEditor"));
const AdminCases = lazy(() => import("./pages/AdminCases"));
const Newsletter = lazy(() => import("./pages/Newsletter"));
const NewsletterSimples = lazy(() => import("./pages/NewsletterSimples"));
const NewsletterRating = lazy(() => import("./pages/NewsletterRating"));
const Home2 = lazy(() => import("./pages/Home2"));
const Proposta = lazy(() => import("./pages/Proposta"));
const PropostaDSLCarTexas = lazy(() => import("./pages/PropostaDSLCarTexas"));
const PropostaDudaBambil = lazy(() => import("./pages/PropostaDudaBambil"));
const PropostaMonique = lazy(() => import("./pages/PropostaMonique"));
const PropostaPadrao = lazy(() => import("./pages/PropostaPadrao"));
const PropostaClinicaSupreme = lazy(() => import("./pages/PropostaClinicaSupreme"));
const PropostaGiuliaSalvatora = lazy(() => import("./pages/PropostaGiuliaSalvatora"));
const PropostaWesleySardou = lazy(() => import("./pages/PropostaWesleySardou"));
const PropostaDanielleSena = lazy(() => import("./pages/PropostaDanielleSena"));
const FollowUpClinicaSupreme = lazy(() => import("./pages/FollowUpClinicaSupreme"));

const queryClient = new QueryClient();

const PageViewTracker = () => {
  usePageViewTracking();
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PageViewTracker />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-background"><div className="w-8 h-8 border-2 border-ba-blue-light border-t-transparent rounded-full animate-spin" /></div>}>
        <Routes>
          <Route path="/" element={<BA />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/cases/:id" element={<CaseDetails />} />
          <Route path="/consultoria" element={<Consultoria />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/tecnologia" element={<Tecnologia />} />
          <Route path="/educacao" element={<Educacao />} />
          <Route path="/educacao/ia-para-negocios" element={<IAParaNegocios />} />
          <Route path="/educacao/ia-do-zero" element={<IADoZero />} />
          <Route path="/educacao/como-aplicar-ia" element={<ComoAplicarIA />} />
          <Route path="/educacao/o-caminho" element={<OCaminho />} />
          <Route path="/educacao/claude-code" element={<ClaudeCode />} />
          <Route path="/educacao/a-revolucao" element={<MetodoStark />} />
          <Route path="/educacao/metodo-stark" element={<MetodoStark />} />
          <Route path="/educacao/imersao-claude" element={<ImersaoClaude />} />
          <Route path="/servicos/google-meu-negocio" element={<GoogleMeuNegocio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/blog" element={<AdminBlog />} />
          <Route path="/admin/crm" element={<AdminCRM />} />
          <Route path="/admin/crm/import" element={<AdminImport />} />
          <Route path="/admin/import-direct" element={<AdminImportDirect />} />
          <Route path="/admin/import-mapping" element={<AdminImportMapping />} />
          <Route path="/admin/funnels" element={<AdminFunnels />} />
          <Route path="/admin/crm/kanban" element={<AdminKanban />} />
          <Route path="/admin/editor" element={<AdminEditor />} />
          <Route path="/admin/editor/:id" element={<AdminEditor />} />
          <Route path="/admin/cases" element={<AdminCases />} />
          <Route path="/newsletter-ia" element={<Newsletter />} />
          <Route path="/newsletter" element={<NewsletterSimples />} />
          <Route path="/avaliacao-newsletter" element={<NewsletterRating />} />
          <Route path="/home-2" element={<Home2 />} />
          <Route path="/proposta/dsl-car-texas" element={<PropostaDSLCarTexas />} />
          <Route path="/proposta" element={<Proposta />} />
          <Route path="/propostas/duda-bambil" element={<PropostaDudaBambil />} />
          <Route path="/propostas/monique-karasek" element={<PropostaMonique />} />
              <Route path="/proposta-padrao" element={<PropostaPadrao />} />
              <Route path="/propostas/clinica-supreme" element={<PropostaClinicaSupreme />} />
          <Route path="/propostas/giulia-salvatore" element={<PropostaGiuliaSalvatora />} />
          <Route path="/propostas/wesley-sardou" element={<PropostaWesleySardou />} />
          <Route path="/propostas/danielle-sena" element={<PropostaDanielleSena />} />
          <Route path="/follow-up/clinica-supreme" element={<FollowUpClinicaSupreme />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
