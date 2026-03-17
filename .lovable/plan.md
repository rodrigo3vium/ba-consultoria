

## Problema

As meta tags OG no `index.html` estão com valores genéricos do Lovable:
- `og:title` = ID do projeto
- `og:description` = "Lovable Generated Project"
- `og:image` = imagem padrão do Lovable
- `twitter:image` = mesma imagem padrão

Quando você compartilha o link no WhatsApp ou redes sociais, essas são as informações que aparecem na pré-visualização.

## Solução

1. **Atualizar as meta tags no `index.html`** com informações da BA Consultoria:
   - `og:title` → "BA Consultoria - Inteligência Artificial para Empresas"
   - `og:description` → "Implementamos IA nas empresas com foco em produtividade e lucro"
   - `og:type` → "website" (já está)
   - `og:image` → uma imagem representativa (pode ser a logo ou uma imagem de capa)
   - `twitter:image` → mesma imagem

2. **Limitação importante**: Como este é um SPA (Single Page Application), as meta tags do `index.html` valem para TODAS as páginas. Para ter meta tags diferentes por página (ex: proposta DSL vs home), seria necessário usar uma biblioteca como `react-helmet-async` para definir tags dinâmicas por rota. Porém, crawlers de WhatsApp/redes sociais nem sempre executam JavaScript, então a solução mais confiável é atualizar o `index.html` com dados genéricos da marca.

## Mudanças

- **`index.html`**: Substituir os valores de `og:title`, `og:description`, `og:image` e `twitter:image` com informações reais da BA Consultoria.

