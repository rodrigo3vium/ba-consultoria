import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRequireAuth } from '@/hooks/useRequireAuth';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RichTextEditor } from '@/components/RichTextEditor';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, ArrowLeft, CalendarDays, Clock, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const postSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório').max(200, 'Título muito longo'),
  slug: z.string()
    .min(1, 'Slug é obrigatório')
    .max(200, 'Slug muito longo')
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug deve conter apenas letras minúsculas, números e hífens'),
  author: z.string().min(1, 'Autor é obrigatório').max(100, 'Nome muito longo'),
  category: z.string().min(1, 'Categoria é obrigatória'),
  excerpt: z.string().min(1, 'Resumo é obrigatório').max(500, 'Resumo muito longo'),
  content: z.string().min(1, 'Conteúdo é obrigatório'),
  image: z.string().url('URL inválida').optional().or(z.literal('')),
  date: z.string(),
  status: z.enum(['draft', 'published']).default('published')
});

type PostForm = z.infer<typeof postSchema>;

const categories = [
  'O mapa do Sucesso',
  'Inteligência Artificial',
  'Machine Learning',
  'Tecnologia',
  'Inovação',
  'Negócios',
  'Transformação Digital'
];

const AdminEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading: authLoading } = useRequireAuth(true);
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const form = useForm<PostForm>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: '',
      slug: '',
      author: '',
      category: '',
      excerpt: '',
      content: '',
      image: '',
      date: new Date().toLocaleDateString('pt-BR', { 
        day: '2-digit', 
        month: 'long', 
        year: 'numeric' 
      }),
      status: 'published'
    }
  });

  // Auto-generate slug from title
  const watchTitle = form.watch('title');
  useEffect(() => {
    if (watchTitle && !id) {
      const generatedSlug = watchTitle
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      form.setValue('slug', generatedSlug);
    }
  }, [watchTitle, id]);

  useEffect(() => {
    if (id) {
      loadPost();
    }
  }, [id]);

  const loadPost = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', parseInt(id))
        .single();

      if (error) throw error;

      if (data) {
        form.reset({
          title: data.title,
          slug: data.slug || '',
          author: data.author,
          category: data.category,
          excerpt: data.excerpt,
          content: data.content,
          image: data.image || '',
          date: data.date,
          status: (data.status as 'draft' | 'published') || 'published'
        });
      }
    } catch (error: any) {
      toast({
        title: "Erro ao carregar post",
        description: error.message,
        variant: "destructive"
      });
      navigate('/admin');
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (values: PostForm, isDraft = false) => {
    setIsSaving(true);
    try {
      const status: 'draft' | 'published' = isDraft ? 'draft' : 'published';
      const postData = {
        title: values.title,
        slug: values.slug,
        author: values.author,
        category: values.category,
        excerpt: values.excerpt,
        content: values.content,
        image: values.image || null,
        date: values.date,
        status: status
      };

      if (id) {
        // Update existing post
        const { error } = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('id', parseInt(id));

        if (error) throw error;

        toast({
          title: isDraft ? "Rascunho salvo!" : "Post atualizado!",
          description: isDraft 
            ? "Seu rascunho foi salvo com sucesso." 
            : "As alterações foram salvas com sucesso."
        });
      } else {
        // Create new post
        const { error } = await supabase
          .from('blog_posts')
          .insert([postData]);

        if (error) throw error;

        toast({
          title: isDraft ? "Rascunho criado!" : "Post criado!",
          description: isDraft 
            ? "Seu rascunho foi salvo com sucesso." 
            : "O novo post foi publicado com sucesso."
        });
      }

      navigate('/admin/blog');
    } catch (error: any) {
      // Check for unique constraint violation on slug
      if (error.message?.includes('duplicate key') || error.code === '23505') {
        toast({
          title: "Erro ao salvar post",
          description: "Este slug já está em uso. Por favor, escolha outro.",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Erro ao salvar post",
          description: error.message,
          variant: "destructive"
        });
      }
    } finally {
      setIsSaving(false);
    }
  };

  if (authLoading || (id && isLoading)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const formValues = form.watch();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 px-4 py-8">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="outline" onClick={() => navigate('/admin/blog')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                {id ? 'Editar Post' : 'Novo Post'}
              </h1>
              <p className="text-muted-foreground text-sm">
                {id ? 'Faça as alterações necessárias no post' : 'Crie um novo post para o blog'}
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Editor Form */}
            <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
              <Card>
                <CardHeader>
                  <CardTitle>Informações do Post</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form
                      className="space-y-6"
                      onSubmit={form.handleSubmit(
                        async (values) => {
                          await onSubmit(values, false);
                        },
                        () => {
                          toast({
                            title: "Preencha os campos obrigatórios",
                            description: "Verifique título, slug, autor, categoria, resumo e conteúdo.",
                            variant: "destructive",
                          });
                        }
                      )}
                    >
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Título *</FormLabel>
                            <FormControl>
                              <Input placeholder="Digite o título do post" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="slug"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Slug (URL amigável) *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="meu-artigo-incrivel" 
                                {...field}
                              />
                            </FormControl>
                            <p className="text-xs text-muted-foreground">
                              URL: /blog/{field.value || 'slug-do-artigo'}
                            </p>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="author"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Autor *</FormLabel>
                              <FormControl>
                                <Input placeholder="Nome do autor" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="category"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Categoria *</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Selecione uma categoria" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {categories.map((cat) => (
                                    <SelectItem key={cat} value={cat}>
                                      {cat}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>URL da Imagem (opcional)</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="https://exemplo.com/imagem.jpg" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="excerpt"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Resumo *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Breve descrição do post (aparece na listagem)" 
                                className="min-h-[100px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Conteúdo *</FormLabel>
                            <FormControl>
                              <RichTextEditor
                                value={field.value}
                                onChange={field.onChange}
                                placeholder="Escreva o conteúdo completo do post aqui..."
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex gap-4 justify-end pt-4 border-t">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => navigate('/admin/blog')}
                          disabled={isSaving}
                        >
                          Cancelar
                        </Button>
                        <Button
                          type="button"
                          variant="secondary"
                          onClick={async (e) => {
                            e.preventDefault();
                            const values = form.getValues();
                            await onSubmit(values, true);
                          }}
                          disabled={isSaving}
                        >
                          {isSaving ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Salvando...
                            </>
                          ) : (
                            'Salvar Rascunho'
                          )}
                        </Button>
                        <Button 
                          type="submit" 
                          disabled={isSaving}
                        >
                          {isSaving ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Salvando...
                            </>
                          ) : (
                            id ? 'Publicar Post' : 'Publicar'
                          )}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Preview */}
            <div className="sticky top-8 max-h-[calc(100vh-200px)]">
              <div className="h-full overflow-y-auto bg-slate-900 p-6 rounded-lg">
                <div className="max-w-4xl mx-auto">
                  <div className="mb-4 text-sm text-slate-400 font-semibold">PREVIEW</div>
                  
                  <Card className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50">
                    {formValues.image && (
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        <img 
                          src={formValues.image} 
                          alt={formValues.title || "Preview"}
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
                          {formValues.category && (
                            <Badge variant="secondary" className="text-sm bg-orange-400/20 text-orange-300 border-orange-400/30">
                              {formValues.category}
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center text-sm text-slate-400 gap-4">
                          <div className="flex items-center gap-2">
                            <CalendarDays className="w-4 h-4" />
                            {formValues.date || new Date().toLocaleDateString('pt-BR')}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            5 min
                          </div>
                          {formValues.author && (
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4" />
                              {formValues.author}
                            </div>
                          )}
                        </div>
                      </div>

                      <h1 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-white font-poppins">
                        {formValues.title || "Título do Post"}
                      </h1>

                      {formValues.content ? (
                        <div className="prose prose-lg max-w-none prose-invert prose-headings:text-white prose-p:text-slate-200 prose-strong:text-white prose-li:text-slate-200 prose-blockquote:text-slate-300 prose-a:text-blue-400 prose-code:text-pink-400 prose-pre:bg-slate-950/50 prose-pre:border prose-pre:border-slate-700">
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>{formValues.content}</ReactMarkdown>
                        </div>
                      ) : (
                        <div className="text-slate-400 italic">
                          O conteúdo aparecerá aqui conforme você escreve...
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminEditor;
