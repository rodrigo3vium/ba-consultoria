import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRequireAuth } from "@/hooks/useRequireAuth";
import { SITE_ROUTES, CATEGORY_LABELS, CATEGORY_ORDER, SiteCategory } from "@/lib/siteMap";
import { ExternalLink, Globe, Layers, FileText, Image } from "lucide-react";

const STATUS_COLOR: Record<string, string> = {
  ativa: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  stub: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  quebrada: "bg-red-500/20 text-red-300 border-red-500/30",
};

export default function Admin() {
  useRequireAuth(true);

  const totalPages = SITE_ROUTES.length;
  const landingPages = SITE_ROUTES.filter((r) => r.isLandingPage).length;
  const stubs = SITE_ROUTES.filter((r) => r.status === "stub").length;
  const broken = SITE_ROUTES.filter((r) => r.status === "quebrada").length;

  const grouped = CATEGORY_ORDER.reduce<Record<SiteCategory, typeof SITE_ROUTES>>(
    (acc, cat) => {
      acc[cat] = SITE_ROUTES.filter((r) => r.category === cat);
      return acc;
    },
    {} as Record<SiteCategory, typeof SITE_ROUTES>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-10 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-1">Admin</h1>
          <p className="text-muted-foreground">Mapa do site e gestão de conteúdo</p>
        </div>

        {/* Nav rápida */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Button asChild variant="outline" size="sm">
            <Link to="/admin/blog"><FileText className="w-4 h-4 mr-2" />Blog</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link to="/admin/cases"><Image className="w-4 h-4 mr-2" />Cases</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link to="/admin/landing-pages"><Layers className="w-4 h-4 mr-2" />Landing Pages</Link>
          </Button>
        </div>

        {/* Métricas */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total de páginas", value: totalPages, icon: Globe },
            { label: "Landing Pages", value: landingPages, icon: Layers },
            { label: "Stubs pendentes", value: stubs, icon: FileText },
            { label: "Quebradas", value: broken, icon: ExternalLink },
          ].map(({ label, value, icon: Icon }) => (
            <Card key={label} className="shadow-card">
              <CardContent className="pt-4 pb-3">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Icon className="w-4 h-4" />
                  <span className="text-xs">{label}</span>
                </div>
                <p className="text-2xl font-bold text-foreground">{value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mapa do site por categoria */}
        <div className="space-y-6">
          {CATEGORY_ORDER.map((cat) => {
            const routes = grouped[cat];
            if (!routes.length) return null;
            return (
              <Card key={cat} className="shadow-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base text-foreground">{CATEGORY_LABELS[cat]}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="divide-y divide-border">
                    {routes.map((route) => (
                      <div key={route.path} className="flex items-center justify-between py-2.5 gap-3">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-sm font-medium text-foreground truncate">{route.label}</span>
                          {route.isLandingPage && (
                            <Badge variant="outline" className="text-xs px-1.5 py-0 border-ba-blue-light/40 text-ba-blue-light shrink-0">
                              LP
                            </Badge>
                          )}
                          {route.status !== "ativa" && (
                            <Badge variant="outline" className={`text-xs px-1.5 py-0 shrink-0 ${STATUS_COLOR[route.status]}`}>
                              {route.status}
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <code className="text-xs text-muted-foreground hidden sm:block">{route.path}</code>
                          {!route.path.includes(":") && (
                            <a
                              href={route.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
