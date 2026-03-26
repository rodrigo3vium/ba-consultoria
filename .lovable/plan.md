
## Plan: tornar o “mundo partindo” 100% independente do vídeo

### Diagnóstico
O problema mais provável agora não é o scroll nem o carregamento do arquivo. O ponto frágil está aqui:

- o fallback visual só aparece quando `videoReady === false`
- em produção, o vídeo pode ficar “ready” o suficiente para disparar `onCanPlay`, mas ainda falhar no scrub por `currentTime`
- resultado: os cards entram, mas o efeito principal nunca aparece porque:
  - o vídeo não responde bem ao seek
  - o fallback também não entra

### Solução
Transformar o efeito de “mundo se dividindo” em uma animação visual própria da seção, controlada apenas por `scrollProgress`, sem depender do scrub do MP4.

### O que vou alterar

**Arquivo:** `src/pages/MetodoStark.tsx`

1. **Remover a dependência do efeito principal em `videoReady`**
   - o vídeo passa a ser apenas pano de fundo/decorativo
   - o split visual deixa de depender do estado de prontidão do vídeo

2. **Renderizar a camada de divisão sempre**
   - manter duas metades animadas por `scrollProgress`
   - abrir as metades horizontalmente com `transform`
   - manter o brilho/fenda central entre elas

3. **Colocar a camada de split acima do vídeo**
   - ordem visual:
     - vídeo no fundo
     - camada de divisão por cima
     - overlay escuro
     - textos/cards no topo

4. **Simplificar ou remover o scrub do vídeo**
   - se necessário, parar de usar `video.currentTime` como motor do efeito
   - deixar o vídeo estático ou apenas ambientando, para não quebrar em produção

5. **Ajustar o visual para ficar forte o suficiente**
   - garantir que a abertura fique visível no published
   - aumentar contraste/abertura se hoje estiver sutil demais

### Resultado esperado
A animação da seção 1 vai funcionar da mesma forma em:
- preview
- localhost
- `ba-consultoria.lovable.app`
- `benitesalbuquerque.com.br`

porque o efeito deixará de depender do comportamento de streaming/seek do navegador em produção.

### Observação técnica
O bug atual faz sentido com o código existente: o fallback está preso a `!videoReady`, mas em produção o vídeo pode estar “pronto” sem scrubbing confiável. Então o próximo passo correto é promover o fallback para efeito principal da seção.

### Arquivo a editar
- `src/pages/MetodoStark.tsx`
