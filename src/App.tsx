import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Consultoria from "./pages/Consultoria";
import Tecnologia from "./pages/Tecnologia";
import Educacao from "./pages/Educacao";
import IAParaNegocios from "./pages/IAParaNegocios";
import IADoZero from "./pages/IADoZero";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
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
          <Route path="/consultoria" element={<Consultoria />} />
          <Route path="/tecnologia" element={<Tecnologia />} />
          <Route path="/educacao" element={<Educacao />} />
          <Route path="/ia-para-negocios" element={<IAParaNegocios />} />
          <Route path="/ia-do-zero" element={<IADoZero />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
