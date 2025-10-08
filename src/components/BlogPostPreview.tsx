import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, User, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogPostPreviewProps {
  title: string;
  author: string;
  category: string;
  excerpt: string;
  content: string;
  image?: string;
  date: string;
}

export const BlogPostPreview = ({
  title,
  author,
  category,
  excerpt,
  content,
  image,
  date
}: BlogPostPreviewProps) => {
  return (
    <div className="h-full overflow-y-auto bg-slate-900 p-6 rounded-lg">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4 text-sm text-slate-400 font-semibold">PREVIEW</div>
        
        <Card className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50">
          {image && (
            <div className="aspect-video overflow-hidden rounded-t-lg">
              <img 
                src={image} 
                alt={title || "Preview"}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          )}
          
          <CardContent className="p-8">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex gap-2">
                {category && (
                  <Badge variant="secondary" className="text-sm bg-orange-400/20 text-orange-300 border-orange-400/30">
                    {category}
                  </Badge>
                )}
              </div>
              <div className="flex items-center text-sm text-slate-400 gap-4">
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4" />
                  {date || new Date().toLocaleDateString('pt-BR')}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  5 min
                </div>
                {author && (
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {author}
                  </div>
                )}
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="ml-auto border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                disabled
              >
                <Share2 className="w-4 h-4 mr-2" />
                Compartilhar
              </Button>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-white font-poppins">
              {title || "Título do Post"}
            </h1>

            {content ? (
              <div 
                className={cn(
                  "prose prose-lg max-w-none prose-invert",
                  "prose-headings:text-white prose-p:text-slate-200 prose-strong:text-white",
                  "prose-li:text-slate-200 prose-blockquote:text-slate-300",
                  "prose-a:text-blue-400 prose-code:text-pink-400",
                  "prose-pre:bg-slate-950/50 prose-pre:border prose-pre:border-slate-700"
                )}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            ) : (
              <div className="text-slate-400 italic">
                O conteúdo aparecerá aqui conforme você escreve...
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
