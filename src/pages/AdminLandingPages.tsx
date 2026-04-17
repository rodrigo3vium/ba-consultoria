import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRequireAuth } from "@/hooks/useRequireAuth";
import { SITE_ROUTES, CATEGORY_LABELS, SiteCategory } from "@/lib/siteMap";
import { ArrowLeft, Copy, ExternalLink, Check } from "lucide-react";

export default function AdminLandingPages() {
  useRequireAuth(true);

  const [copiedPath, setCopiedPath] = useState<string | null>(null);

  const landingPages = SITE_ROUTES.filter((r) => r.isLandingPage);

  const grouped = landingPages.reduce<Partial<Record<SiteCategory, typeof SITE_ROUTES>>>(
    (acc, route) => {
      if (!acc[route.category]) acc[route.category] = [];
      acc[route.category]!.push(route);
      return acc;
    },
    {}
  );

  const copyLink = (path: string) => {
    const url = `${window.location.origin}${path}`;
    navigator.clipboard.writeText(url);
    setCopiedPath(path);
    setTimeout(() => setCopiedPath(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-10 max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <Button asChild variant="ghost" size="sm">
            <Link to="/admin"><ArrowLeft className="w-4 h-4 mr-1" />Admin</Link>
          </Button>
        </div>

        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-1">Landing Pages</h1>
          <p className="text-muted-foreground">{landingPages.length} landing pages ativas no site</p>
        </div>

        <div className="space-y-6">
          {(Object.entries(grouped) as [SiteCategory, typeof SITE_ROUTES][]).map(([cat, routes]) => (
            <Card key={cat} className="shadow-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-base text-foreground">{CATEGORY_LABELS[cat]}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="divide-y divide-border">
                  {routes.map((route) => (
                    <div key={route.path} className="flex items-center justify-between py-3 gap-3">
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{route.label}</p>
                        <code className="text-xs text-muted-foreground">{route.path}</code>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <Badge
                          variant="outline"
                          className={
                            route.status === "ativa"
                              ? "text-xs border-emerald-500/30 text-emerald-300"
                              : "text-xs border-yellow-500/30 text-yellow-300"
                          }
                        >
                          {route.status}
                        </Badge>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 text-muted-foreground hover:text-foreground"
                          onClick={() => copyLink(route.path)}
                          title="Copiar link"
                        >
                          {copiedPath === route.path ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </Button>
                        <a
                          href={route.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          title="Abrir"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
