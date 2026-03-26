
## Plano: atacar a causa mais provável no domínio customizado

### O que isso indica
Como funciona no preview, no localhost e no domínio publicado padrão, mas falha só em `benitesalbuquerque.com.br`, o problema muito provavelmente **não está na rota nem no React**. O suspeito mais forte é a **entrega do vídeo no domínio customizado**, especialmente para **seek/scrubbing por `currentTime`**.

### Causa mais provável
Esse efeito depende de o navegador conseguir “pular” para frames diferentes do MP4 conforme o scroll. Para isso, a entrega do vídeo precisa suportar bem:
- `Accept-Ranges: bytes`
- respostas `206 Partial Content` durante seek
- buffering rápido o suficiente para mudanças contínuas de `currentTime`

Um `200 OK` sozinho não garante que isso esteja funcionando corretamente. Em domínio customizado, proxy/CDN/cache pode:
- servir o arquivo sem range request adequado
- segurar cache antigo do vídeo
- alterar comportamento de streaming/seek
- responder de forma diferente do domínio padrão da plataforma

### Outro ponto importante
Hoje a seção 1 ainda depende de **scrubbing de vídeo** para o efeito “mundo partindo”. Se o vídeo carrega mas o seek falha/intermitente, os cards entram, mas o “partindo ao meio” não acontece visualmente.

### Plano de implementação
1. **Instrumentar o vídeo para diagnóstico real**
   - adicionar handlers de `onError`, `onCanPlay`, `onLoadedData`, `onSeeked`, `onStalled`
   - registrar `readyState`, `networkState`, `currentTime`, `duration`
   - isso confirma se o problema é de seek/buffer no domínio customizado

2. **Endurecer a lógica de prontidão**
   - não marcar o vídeo como pronto só em `loadedmetadata`
   - só liberar scrub quando houver dados suficientes (`readyState >= 2` ou `canplay`)
   - evitar atualizar `currentTime` cedo demais

3. **Adicionar fallback visual independente do MP4**
   - manter o vídeo quando funcionar
   - mas implementar o “mundo se dividindo” também com uma camada CSS/SVG baseada em `scrollProgress`
   - assim, mesmo que o seek do vídeo falhe no domínio customizado, o efeito visual continua

4. **Se necessário, substituir o efeito principal**
   - opção mais robusta: abandonar scrub do MP4 e fazer o efeito com:
     - duas metades da arte/imagem
     - `clip-path`, `transform`, `opacity`, blur leve
     - animação 100% controlada por scroll
   - isso elimina dependência de streaming, codec e proxy

### Arquivo principal
- `src/pages/MetodoStark.tsx`

### Detalhes técnicos
A hipótese mais forte é: **o vídeo abre, mas o navegador no domínio customizado não consegue fazer seek progressivo de forma confiável**.  
Isso explica perfeitamente o sintoma:
- cards animam = `scrollProgress` está funcionando
- vídeo existe e retorna 200 = arquivo está acessível
- efeito visual do “mundo dividindo” não acontece = o problema está na atualização do frame, não no scroll

### Resultado esperado
Depois dessa correção, a seção 1 ficará resiliente:
- no melhor caso, o MP4 continua scrubbando normalmente
- no pior caso, o fallback CSS mantém o efeito de “mundo se dividindo” igual para preview, localhost e domínio customizado
