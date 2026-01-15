import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { usePageViewTracking } from "@/hooks/usePageViewTracking";
import BA from "./pages/BA";
import Cases from "./pages/Cases";
import CaseDetails from "./pages/CaseDetails";
import Consultoria from "./pages/Consultoria";
import Servicos from "./pages/Servicos";
import Tecnologia from "./pages/Tecnologia";
import Educacao from "./pages/Educacao";
import IAParaNegocios from "./pages/IAParaNegocios";
import IADoZero from "./pages/IADoZero";
import GoogleMeuNegocio from "./pages/GoogleMeuNegocio";
import ComoAplicarIA from "./pages/ComoAplicarIA";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import AdminBlog from "./pages/AdminBlog";
import AdminCRM from "./pages/AdminCRM";
import AdminImport from "./pages/AdminImport";
import AdminImportDirect from "./pages/AdminImportDirect";
import AdminImportMapping from "./pages/AdminImportMapping";
import AdminFunnels from "./pages/AdminFunnels";
import AdminKanban from "./pages/AdminKanban";
import AdminEditor from "./pages/AdminEditor";
import AdminCases from "./pages/AdminCases";
import Newsletter from "./pages/Newsletter";
import NewsletterRating from "./pages/NewsletterRating";
import NotFound from "./pages/NotFound";

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
          <Route path="/avaliacao-newsletter" element={<NewsletterRating />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
