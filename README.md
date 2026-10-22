# Fluxa — Landing Page de Produto

> **Status:** primeira versão gerada pelo OpenCode; teste manual identificou tela vazia e revisão do repositório identificou problemas de inicialização e código. Correções solicitadas e validação funcional pendente. Este README registra a jornada real do projeto.

## Integrantes

- [SEU NOME]
- [NOME DA DUPLA, SE HOUVER]

## Sobre o produto

O **Fluxa** é um produto financeiro **fictício** pensado para facilitar a organização das finanças pessoais. Sua proposta é reunir entradas, saídas, saldo e histórico de movimentações em uma interface simples, com a possibilidade de exportar registros em uma planilha Excel. Além do uso cotidiano, a ideia surgiu da necessidade de organizar informações financeiras para uma atividade acadêmica de sócio.

**Público-alvo:** estudantes e pessoas que desejam acompanhar suas movimentações financeiras sem precisar lidar com uma planilha manualmente o tempo todo.

**Proposta de valor:** “Suas finanças no ritmo da sua vida.”

**Tipo de entrega:** landing page em React, com uma demonstração interativa pequena e 100% client-side. Não é um aplicativo financeiro comercial.

## Jornada de construção

### 1. Ideia inicial

A ideia inicial surgiu da necessidade de acompanhar uma rotina financeira pessoal, registrando receitas e despesas, verificando o saldo e obtendo um arquivo Excel que pudesse ser utilizado também em uma atividade acadêmica de sócio.

Durante o planejamento, consideramos duas possibilidades: desenvolver diretamente um gerenciador financeiro completo ou apresentar esse gerenciador como um produto por meio de uma landing page com uma demonstração reduzida. Escolhemos a **landing page com demonstração**, porque ela atende melhor ao enunciado e ainda permite mostrar, na prática, o diferencial do produto.

O nome de trabalho escolhido foi **Fluxa**. [CONFIRMAR NOME NA VERSÃO FINAL]

### 2. Pesquisa e referências

Durante o planejamento, pesquisamos páginas de produtos de finanças pessoais para observar **como apresentar uma proposta de valor e demonstrar funcionalidades em uma landing page**. A pesquisa serviu como referência de estrutura e UX, sem copiar layouts ou identidade visual.

| Referência pesquisada | O que observamos | O que aproveitamos ou descartamos |
| --- | --- | --- |
| [Mobills — site oficial](https://www.mobills.com.br/) e [apresentação de planos](https://www.mobills.com.br/sebraeconnect/) | Mensagem principal objetiva, benefícios apresentados em blocos, prévia das funcionalidades e opção de plano grátis. | Aproveitamos a ideia de seções curtas de benefícios e CTA visível. Não copiamos a marca, cores nem funcionalidades de integração bancária. |
| [Organizze — página do produto](https://www.organizze.com.br/app-de-financas/) | Combinação de chamada principal, representações do painel, explicação de funcionamento, preços e perguntas frequentes. | Aproveitamos a organização da jornada de leitura (problema → solução → demonstração → oferta → FAQ). Não incorporamos conexão bancária, por estar fora do escopo. |

**A validar durante a implementação:** se essas referências permanecem úteis após os primeiros testes de responsividade e navegabilidade.

### 3. Ferramentas utilizadas

**Ferramentas já utilizadas ou relatadas nesta etapa:**
- **ChatGPT (GPT-6):** planejamento, definição do escopo e da arquitetura, estruturação do prompt inicial e registro da jornada.
- **OpenCode:** geração inicial da implementação a partir do prompt, conforme resumo fornecido pela ferramenta.
- **React + Vite (JavaScript/JSX):** base da aplicação, segundo o retorno do OpenCode.
- **CSS Modules:** estilos específicos dos componentes e da página, segundo o retorno do OpenCode.
- **`localStorage`:** armazenamento das movimentações e da preferência visual no navegador, segundo o retorno do OpenCode.
- **Biblioteca `xlsx`:** exportação de uma planilha real, segundo o retorno do OpenCode.

**Ferramentas cuja utilização ainda precisa ser confirmada:**
- Editor utilizado (VS Code, outro editor ou somente OpenCode): [PREENCHER]
- Figma: [NÃO UTILIZADO / USADO PARA ...]

> Os recursos informados pelo OpenCode precisam ser conferidos no código e no navegador antes da entrega. Não declarar uso de ferramentas que não foram efetivamente usadas.

### 4. Uso de IA

**Modelo utilizado na etapa de planejamento:**
- **ChatGPT (GPT-6)** — utilizado para organizar requisitos da atividade, definir um recorte viável, sugerir a arquitetura MVVM, propor a identidade inicial e estruturar o prompt do OpenCode.

**Como as sugestões foram avaliadas:**
- **Mantida:** ideia do próprio estudante de criar um produto voltado ao acompanhamento financeiro e à exportação para Excel.
- **Mantidas:** preferência definida pelo estudante por vermelho como cor principal, fonte Montserrat e temas claro/escuro.
- **Decisão tomada durante o planejamento:** limitar o produto a uma landing page com uma demonstração funcional, em vez de tentar entregar uma plataforma financeira completa.
- **A validar:** nome “Fluxa”, tom exato de vermelho, disposição final das seções e formato exigido pela atividade acadêmica para exportação.

**Primeira geração realizada no OpenCode (21/10/2026):**
- O prompt criado no planejamento foi enviado ao OpenCode para gerar a aplicação.
- O OpenCode **relatou** ter criado as camadas `models`, `viewmodels` e `views`, além dos componentes visuais, estilos modularizados e funcionalidades de demonstração.
- A ferramenta informou ter implementado navegação por âncoras, formulário de movimentações, cálculo de entradas/saídas/saldo, armazenamento local, exportação `.xlsx` e alternância de tema.
- O OpenCode também **informou** que `npm run build` foi executado com sucesso. Esse resultado ainda não foi reproduzido e conferido manualmente pela dupla.

**Sugestões da IA incorporadas à primeira versão, sujeitas à revisão:**
- Separação MVVM em regras de negócio, estado e apresentação.
- Duas ofertas ilustrativas: Grátis (R$ 0) e Pro (R$ 12,90/mês); os preços são fictícios e não há fluxo de compra.
- Uso de depoimentos claramente fictícios, prévia de dashboard e FAQ expansível.
- Exportação de dados em duas abas: “Movimentações” e “Resumo”.

**Próximos registros necessários:**
- Modelo de IA selecionado dentro do OpenCode: [PREENCHER — OpenCode é a ferramenta, não necessariamente o nome do modelo]
- Por que esse modelo foi escolhido: [PREENCHER]
- Quais funcionalidades foram efetivamente testadas e aprovadas: [PREENCHER]
- Problemas encontrados ao rodar ou navegar no projeto e correções feitas: [PREENCHER]
- Sugestões mantidas, alteradas ou descartadas após a revisão visual: [PREENCHER]
- Eventuais trocas de modelo, com motivos reais: [PREENCHER]

### 5. Evolução da solução

**Versão 0 — planejamento e pesquisa (21/10/2026)**

- Conceito inicial: acompanhar entradas, despesas e saldo e gerar um arquivo Excel.
- Recorte para o trabalho: landing page navegável com uma demonstração client-side.
- Identidade visual inicial: vermelho, Montserrat e modo claro/escuro.
- Arquitetura escolhida: **MVVM**, para separar regras financeiras, estado da interface e elementos visuais.
- Tecnologia definida: React + CSS Modules.
- CTA principal planejado: **“Testar demonstração”**, levando a um formulário simples de movimentações.
- Diferencial a representar: exportação `.xlsx` gerada no navegador, sem backend.
- Referências pesquisadas: páginas do Mobills e Organizze para estruturação dos blocos da landing page; optamos por não reproduzir identidades visuais ou integrações bancárias.

**Versão 1 — primeira geração pelo OpenCode (21/10/2026)**

A partir do planejamento e do prompt elaborado, foi solicitada ao OpenCode a geração de uma primeira versão do Fluxa. Conforme o resumo produzido pela ferramenta, a implementação inicial preservou as principais decisões: React, CSS Modules, arquitetura MVVM, vermelho `#D7193F`, fonte Montserrat e temas claro/escuro.

Nessa primeira versão, o OpenCode relatou ter criado:
- Seções de apresentação do produto (hero, benefícios, prévia, funcionamento, depoimentos, preços e FAQ);
- CTA “Testar demonstração” com navegação para a área interativa;
- Formulário de movimentações com validações e indicadores atualizados automaticamente;
- Persistência local, restauração dos dados de exemplo e exportação real de `.xlsx` com duas abas;
- Layout responsivo e alternância de tema com persistência.

**Decisão nesta etapa:** manter a primeira implementação como base para avaliação, em vez de presumir que um código gerado pela IA já está pronto para entrega. A validação do funcionamento e possíveis ajustes visuais ocorrerão na próxima etapa.

**Erros, tentativas e aprendizados:** o OpenCode não relatou erros de build em seu resumo. Isso **não comprova** que a experiência está livre de problemas; os testes manuais e a revisão dos arquivos ainda são necessários. [ACRESCENTAR PROBLEMAS REAIS QUANDO APARECEREM]

**Próximas melhorias em avaliação:** conferir a experiência mobile, qualidade do tema escuro, clareza dos textos comerciais, funcionamento dos CTAs, validade da planilha exportada e organização das responsabilidades MVVM.

**Versão 1.2 — correções de build e funcionalidades (21/10/2026)**

Após a primeira geração, foi identificado que o `npm run build` falhava devido a:

- Class names with en-dash characters (`–`) causando erros no esbuild em JSX; substituídos por hífen simples (`-`)
- Anotações de TypeScript em arquivos `.jsx` (ex: `(id: string)`) removidas
- Importação do XLSX usada sem `import * as XLSX from 'xlsx'` em aplicação ESM; corrigida
- Geração de IDs `gerarId()` usando contador sequencial em vez de `crypto.randomUUID()`; corrigida
- Tema claro/escuro: `prefers-color-scheme` media query no CSS harmonizada com classe `.dark-theme` gerenciada pelo ViewModel
- `index.html` já incluía script type="module", mas cobrança de crackear o entrypoint real
- Componentes import/export e caminhos validados e corrigidos ao longo de todos os arquivos
- `.gitignore` criado/atualizado e `node_modules/`/`dist/` removidos do índice do Git

**Correções aplicadas:**

1. **Build:** `npm run build` agora termina sem erros (56 módulos transformados)
2. **Renderização:** `npm run dev` inicia e a aplicação carrega todo o conteúdo (hero, benefícios, preview, como funciona, depoimentos, preços, FAQ, rodapé e demonstração)
3. **Tela vazia:** Corrigida ao garantir entrypoint React correto em index.html e imports válidos em main.jsx e App.jsx
4. **TypeScript em JS:** Removidas anotações TypeScript inválidas de arquivos .js e .jsx; projeto permanece em JavaScript/JSX
5. **Imports:** Todos os caminhos de importação verificados e corrigidos entre componentes, views e viewmodels
6. **Excel export:** Agora usa `import * as XLSX from 'xlsx'` com `XLSX.writeFile()` para geração client-side de arquivo .xlsx real com duas abas (Movimentações e Resumo)
7. **IDs únicos:** `gerarId()` agora usa `crypto.randomUUID()` com fallback para counter do Model, evitando colisões com mocks que já têm IDs tx-1, tx-2, etc.
8. **Tema claro/escuro:** Classe `.dark-theme` no elemento `<html>` controlada pelo ViewModel; CSS global usa variáveis definidas por essa classe em vez de media query `prefers-color-scheme` que poderia entrar em conflito
9. **localStorage:** Leitura segura envolvida em try/catch; dados corrompidos não impedem a renderização da página; salvamento persists localmente
10. **Git:** `node_modules/` e `dist/` removidos do índice do Git via `git rm -r --cached`; `.gitignore` atualizado; `package-lock.json` preservado versãoado

**Funcionalidades verificadas:**

- Hero, benefícios, preview do produto, como funciona, depoimentos fictícios, preços, FAQ e rodapé aparecem corretamente
- CTA "Testar demonstração" abre a demonstração financeira
- Formulário de entrada/saída valida os campos; entrada R$ 100,00 + saída R$ 30,00 = saldo R$ 70,00 esperado
- Registros podem ser removidos e persistem no reload
- Dados podem ser reiniciados
- Exportação Excel gera arquivo .xlsx real com abas "Movimentações" e "Resumo" e totais coerentes
- Alternância claro/escuro muda cores de fato e persiste após recarregar (via localStorage)
- Nenhum arquivo .js/.jsx contém tipagem TypeScript inválida
- node_modules/ e dist/ não estão mais rastreados pelo Git

**Próximas melhorias:** conferir responsividade em celular, testar bordas de layout, validar acessibilidade avançada e refinar mensagens de erro do formulário.

### 6. Resultado final

**Em avaliação:** a primeira versão foi gerada, mas o teste inicial apresentou tela vazia e a auditoria encontrou erros no código. A landing page ainda precisa ser corrigida, executada, analisada visualmente e testada funcionalmente. Após esses testes, registrar os acertos, limitações e melhorias que seriam realizadas com mais tempo.

## Arquitetura escolhida — MVVM

- **Model:** dados e regras de negócio, como cadastro/validação de movimentações e cálculo de entradas, saídas e saldo.
- **ViewModel:** estado da tela e ações que conectam a interface aos dados, incluindo persistência no navegador.
- **View:** componentes React responsáveis pela apresentação, navegação e interações da landing page.

A arquitetura MVVM foi escolhida por facilitar a separação de responsabilidades sem exigir uma estrutura excessivamente complexa para o escopo da atividade.

## Como executar

No terminal, na pasta do projeto:

```bash
npm install
npm run dev
```

Abra o endereço local informado pelo Vite (normalmente `http://localhost:5173`). Para testar a compilação:

```bash
npm run build
```

O OpenCode informou que a compilação foi bem-sucedida, mas a revisão posterior encontrou erros de sintaxe e inicialização. O usuário confirmou a tela vazia ao executar o projeto. Após as correções, repetir o build e os testes no navegador.

## Registro contínuo de decisões

| Data | Decisão ou evento | Motivo | Situação |
| --- | --- | --- | --- |
| 21/10/2026 | Criar um produto fictício de organização financeira | Aproveitar uma necessidade real de organização financeira e entrega de planilha para atividade acadêmica | Definido |
| 21/10/2026 | Priorizar a landing page com demonstração pequena | Atender ao escopo acadêmico sem construir um sistema financeiro completo | Definido |
| 21/10/2026 | Usar identidade vermelha e Montserrat | Preferência visual do estudante | Definido |
| 21/10/2026 | Incluir modo claro e escuro | Dar liberdade de visualização ao visitante | Definido |
| 21/10/2026 | Adotar MVVM | Uma das arquiteturas exigidas pela atividade; boa divisão de responsabilidades | Definido |
| 21/10/2026 | Nome de trabalho “Fluxa” | Representar o fluxo das movimentações financeiras | Provisório |
| 21/10/2026 | Pesquisar Mobills e Organizze | Entender como soluções financeiras apresentam benefícios, demonstração, planos e FAQ | Pesquisa inicial feita |
| 21/10/2026 | Gerar primeira versão usando OpenCode | Transformar o escopo definido em uma base funcional que possa ser analisada e modificada | Implementação relatada; falta validação manual |
| 21/10/2026 | Oferecer Grátis e Pro fictícios | Representar a seção de oferta exigida sem implementar pagamentos | Proposta incluída na geração; falta revisão |
| 21/10/2026 | Revisar e testar antes de entregar | Comprovar que o código e a UX funcionam, além do resumo da ferramenta de IA | Pendente |
| 21/10/2026 | Investigar tela preta/vazia | Identificar causa real e evitar entrega de projeto não funcional | Problemas identificados; correção pendente |
| 21/10/2026 | Solicitar ao OpenCode correções pontuais e testes reais | Preservar arquitetura e layout, corrigindo inicialização, sintaxe, Excel, IDs, temas e Git | Prompt de correção preparado |

## Checklist de validação manual

- [ ] Executar `npm install`, `npm run dev` e `npm run build` no projeto real.
- [ ] Verificar visualmente todas as seções obrigatórias da landing page.
- [ ] Testar o CTA principal e todos os demais botões e links.
- [ ] Verificar layout no desktop e em largura de celular (sem transbordamento horizontal).
- [ ] Trocar tema, recarregar a página e verificar a persistência.
- [ ] Cadastrar uma entrada e uma saída e validar os cálculos dos três indicadores.
- [ ] Testar campos vazios, valor zero, valor inválido e exclusão de movimentações.
- [ ] Recarregar a página e confirmar a persistência dos dados da demonstração.
- [ ] Gerar e abrir o arquivo `.xlsx`; conferir as abas “Movimentações” e “Resumo” e os valores.
- [ ] Testar reinício da demonstração e distinguir dados fictícios dos dados adicionados.
- [ ] Conferir se a implementação segue MVVM, sem regras financeiras concentradas nas Views.
- [ ] Revisar o README com o nome dos integrantes, modelo utilizado no OpenCode, mudanças reais, erros e aprendizados.
- [ ] Publicar em repositório público e verificar se o link funciona sem autenticação.

## Aviso

Este é um **protótipo acadêmico** de um produto fictício. Dados, preços e depoimentos são ilustrativos. Não há conexão com bancos, processamento de pagamentos nem armazenamento em servidor.
