import { useState, useEffect } from 'react';
import { useRequireAuth } from '@/hooks/useRequireAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface CaseForm {
  titulo: string;
  cliente_nome: string;
  cliente_logo_url: string;
  categoria: string;
  setor: string;
  descricao_curta: string;
  desafio: string;
  solucao: string;
  metrica_principal: string;
  depoimento: string;
  depoimento_autor: string;
  depoimento_autor_cargo: string;
  tecnologias_usadas: string;
  timeline: string;
  slug: string;
  status: string;
  ordem: number;
}

const AdminCases = () => {
  const { loading: authLoading } = useRequireAuth(true);
  const [cases, setCases] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCase, setEditingCase] = useState<any | null>(null);
  const [formData, setFormData] = useState<CaseForm>({
    titulo: '',
    cliente_nome: '',
    cliente_logo_url: '',
    categoria: 'Tecnologia',
    setor: '',
    descricao_curta: '',
    desafio: '',
    solucao: '',
    metrica_principal: '',
    depoimento: '',
    depoimento_autor: '',
    depoimento_autor_cargo: '',
    tecnologias_usadas: '',
    timeline: '',
    slug: '',
    status: 'rascunho',
    ordem: 0,
  });

  const categories = ['Tecnologia', 'Vendas', 'Marketing', 'Customer Success', 'Operacional', 'RH'];

  useEffect(() => {
    if (!authLoading) {
      fetchCases();
    }
  }, [authLoading]);

  const fetchCases = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('cases')
      .select('*')
      .order('ordem', { ascending: true });

    if (error) {
      toast.error('Erro ao carregar cases');
      console.error(error);
    } else {
      setCases(data || []);
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const tecnologias = formData.tecnologias_usadas
      ? formData.tecnologias_usadas.split(',').map(t => t.trim())
      : [];

    const caseData = {
      ...formData,
      tecnologias_usadas: tecnologias,
    };

    if (editingCase) {
      const { error } = await supabase
        .from('cases')
        .update(caseData)
        .eq('id', editingCase.id);

      if (error) {
        toast.error('Erro ao atualizar case');
        console.error(error);
      } else {
        toast.success('Case atualizado com sucesso!');
        setIsDialogOpen(false);
        setEditingCase(null);
        fetchCases();
      }
    } else {
      const { error } = await supabase
        .from('cases')
        .insert([caseData]);

      if (error) {
        toast.error('Erro ao criar case');
        console.error(error);
      } else {
        toast.success('Case criado com sucesso!');
        setIsDialogOpen(false);
        fetchCases();
      }
    }

    resetForm();
  };

  const handleEdit = (caseItem: any) => {
    setEditingCase(caseItem);
    setFormData({
      titulo: caseItem.titulo,
      cliente_nome: caseItem.cliente_nome,
      cliente_logo_url: caseItem.cliente_logo_url || '',
      categoria: caseItem.categoria,
      setor: caseItem.setor || '',
      descricao_curta: caseItem.descricao_curta,
      desafio: caseItem.desafio,
      solucao: caseItem.solucao,
      metrica_principal: caseItem.metrica_principal,
      depoimento: caseItem.depoimento || '',
      depoimento_autor: caseItem.depoimento_autor || '',
      depoimento_autor_cargo: caseItem.depoimento_autor_cargo || '',
      tecnologias_usadas: caseItem.tecnologias_usadas?.join(', ') || '',
      timeline: caseItem.timeline || '',
      slug: caseItem.slug || '',
      status: caseItem.status,
      ordem: caseItem.ordem,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir este case?')) return;

    const { error } = await supabase
      .from('cases')
      .delete()
      .eq('id', id);

    if (error) {
      toast.error('Erro ao excluir case');
      console.error(error);
    } else {
      toast.success('Case excluído com sucesso!');
      fetchCases();
    }
  };

  const toggleStatus = async (caseItem: any) => {
    const newStatus = caseItem.status === 'publicado' ? 'rascunho' : 'publicado';
    
    const { error } = await supabase
      .from('cases')
      .update({ status: newStatus })
      .eq('id', caseItem.id);

    if (error) {
      toast.error('Erro ao alterar status');
      console.error(error);
    } else {
      toast.success(`Case ${newStatus === 'publicado' ? 'publicado' : 'despublicado'} com sucesso!`);
      fetchCases();
    }
  };

  const resetForm = () => {
    setFormData({
      titulo: '',
      cliente_nome: '',
      cliente_logo_url: '',
      categoria: 'Tecnologia',
      setor: '',
      descricao_curta: '',
      desafio: '',
      solucao: '',
      metrica_principal: '',
      depoimento: '',
      depoimento_autor: '',
      depoimento_autor_cargo: '',
      tecnologias_usadas: '',
      timeline: '',
      slug: '',
      status: 'rascunho',
      ordem: 0,
    });
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Gerenciar Cases</h1>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => { resetForm(); setEditingCase(null); }}>
                <Plus className="w-4 h-4 mr-2" />
                Novo Case
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{editingCase ? 'Editar Case' : 'Novo Case'}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="titulo">Título *</Label>
                    <Input
                      id="titulo"
                      value={formData.titulo}
                      onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="cliente_nome">Nome do Cliente *</Label>
                    <Input
                      id="cliente_nome"
                      value={formData.cliente_nome}
                      onChange={(e) => setFormData({ ...formData, cliente_nome: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="categoria">Categoria *</Label>
                    <Select value={formData.categoria} onValueChange={(value) => setFormData({ ...formData, categoria: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="setor">Setor</Label>
                    <Input
                      id="setor"
                      value={formData.setor}
                      onChange={(e) => setFormData({ ...formData, setor: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="descricao_curta">Descrição Curta *</Label>
                  <Textarea
                    id="descricao_curta"
                    value={formData.descricao_curta}
                    onChange={(e) => setFormData({ ...formData, descricao_curta: e.target.value })}
                    rows={2}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="desafio">Desafio *</Label>
                  <Textarea
                    id="desafio"
                    value={formData.desafio}
                    onChange={(e) => setFormData({ ...formData, desafio: e.target.value })}
                    rows={3}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="solucao">Solução *</Label>
                  <Textarea
                    id="solucao"
                    value={formData.solucao}
                    onChange={(e) => setFormData({ ...formData, solucao: e.target.value })}
                    rows={3}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="metrica_principal">Métrica Principal *</Label>
                    <Input
                      id="metrica_principal"
                      value={formData.metrica_principal}
                      onChange={(e) => setFormData({ ...formData, metrica_principal: e.target.value })}
                      placeholder="+2x obras qualificadas"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="slug">Slug (URL amigável)</Label>
                    <Input
                      id="slug"
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      placeholder="prospeccao-obras-ia"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="tecnologias_usadas">Tecnologias (separadas por vírgula)</Label>
                  <Input
                    id="tecnologias_usadas"
                    value={formData.tecnologias_usadas}
                    onChange={(e) => setFormData({ ...formData, tecnologias_usadas: e.target.value })}
                    placeholder="IA, Machine Learning, Python"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="status">Status</Label>
                    <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rascunho">Rascunho</SelectItem>
                        <SelectItem value="publicado">Publicado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="ordem">Ordem</Label>
                    <Input
                      id="ordem"
                      type="number"
                      value={formData.ordem}
                      onChange={(e) => setFormData({ ...formData, ordem: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button type="submit" className="flex-1">
                    {editingCase ? 'Atualizar' : 'Criar'} Case
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancelar
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((caseItem) => (
            <Card key={caseItem.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{caseItem.titulo}</CardTitle>
                  <Badge variant={caseItem.status === 'publicado' ? 'default' : 'secondary'}>
                    {caseItem.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {caseItem.descricao_curta}
                </p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(caseItem)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => toggleStatus(caseItem)}
                  >
                    {caseItem.status === 'publicado' ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(caseItem.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminCases;
