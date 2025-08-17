import { cn } from "@/lib/utils";

interface BlogContentProps {
  content: string;
  className?: string;
}

export const BlogContent = ({ content, className }: BlogContentProps) => {
  // Parse markdown-style content to HTML
  const parseContent = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold mb-4 mt-8 text-foreground">$1</h3>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mb-6 mt-10 text-foreground">$1</h2>')
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mb-8 mt-12 text-foreground">$1</h1>')
      .replace(/^> (.*$)/gm, '<blockquote class="border-l-4 border-primary pl-4 py-2 my-4 bg-muted/50 italic text-muted-foreground">$1</blockquote>')
      .replace(/^---$/gm, '<hr class="my-8 border-border">')
      .replace(/💡 \*\*(.*?)\*\*/g, '<div class="bg-accent/10 border border-accent/20 rounded-lg p-4 my-6"><div class="flex items-start gap-3"><span class="text-accent text-xl">💡</span><div class="text-accent-foreground"><strong>$1</strong></div></div></div>')
      .replace(/^(\d+)\. (.*$)/gm, '<li class="mb-2"><strong>$1.</strong> $2</li>')
      .replace(/^- (.*$)/gm, '<li class="mb-2">$1</li>')
      .replace(/\n\n/g, '</p><p class="mb-4">')
      .replace(/\n/g, '<br>');
  };

  const htmlContent = parseContent(content);

  return (
    <div 
      className={cn(
        "prose prose-lg max-w-none",
        "prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground",
        "prose-li:text-foreground prose-blockquote:text-muted-foreground",
        className
      )}
      dangerouslySetInnerHTML={{ 
        __html: `<p class="mb-4">${htmlContent}</p>` 
      }}
    />
  );
};