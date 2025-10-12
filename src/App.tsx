import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BA from "./pages/BA";
import Consultoria from "./pages/Consultoria";
import Tecnologia from "./pages/Tecnologia";
import Educacao from "./pages/Educacao";
import IAParaNegocios from "./pages/IAParaNegocios";
import IADoZero from "./pages/IADoZero";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import AdminBlog from "./pages/AdminBlog";
import AdminCRM from "./pages/AdminCRM";
import AdminImport from "./pages/AdminImport";
import AdminFunnels from "./pages/AdminFunnels";
import AdminKanban from "./pages/AdminKanban";
import AdminEditor from "./pages/AdminEditor";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ba" element={<BA />} />
          <Route path="/consultoria" element={<Consultoria />} />
          <Route path="/tecnologia" element={<Tecnologia />} />
          <Route path="/educacao" element={<Educacao />} />
          <Route path="/educacao/ia-para-negocios" element={<IAParaNegocios />} />
          <Route path="/educacao/ia-do-zero" element={<IADoZero />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/blog" element={<AdminBlog />} />
          <Route path="/admin/crm" element={<AdminCRM />} />
          <Route path="/admin/crm/import" element={<AdminImport />} />
          <Route path="/admin/funnels" element={<AdminFunnels />} />
          <Route path="/admin/crm/kanban" element={<AdminKanban />} />
          <Route path="/admin/editor" element={<AdminEditor />} />
          <Route path="/admin/editor/:id" element={<AdminEditor />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
