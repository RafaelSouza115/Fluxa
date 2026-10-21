# Fluxa — Landing Page de Produto

> **Status:** planejamento inicial. Este README é um documento vivo e será atualizado conforme o projeto for desenvolvido.

## Integrantes

- RAFAEL SOUZA

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

| Referência pesquisada                                                                                                       | O que observamos                                                                                                       | O que aproveitamos ou descartamos                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Mobills — site oficial](https://www.mobills.com.br/) e [apresentação de planos](https://www.mobills.com.br/sebraeconnect/) | Mensagem principal objetiva, benefícios apresentados em blocos, prévia das funcionalidades e opção de plano grátis.    | Aproveitamos a ideia de seções curtas de benefícios e CTA visível. Não copiamos a marca, cores nem funcionalidades de integração bancária.                        |
| [Organizze — página do produto](https://www.organizze.com.br/app-de-financas/)                                              | Combinação de chamada principal, representações do painel, explicação de funcionamento, preços e perguntas frequentes. | Aproveitamos a organização da jornada de leitura (problema → solução → demonstração → oferta → FAQ). Não incorporamos conexão bancária, por estar fora do escopo. |

**A validar durante a implementação:** se essas referências permanecem úteis após os primeiros testes de responsividade e navegabilidade.

### 3. Ferramentas utilizadas

**Utilizada no planejamento:**

- ChatGPT — organização da ideia, delimitação do escopo, proposta inicial de arquitetura, prompt para geração e estrutura do README.

**Planejadas para o desenvolvimento (confirmar conforme o uso):**

- React + Vite (JavaScript/JSX)
- CSS Modules
- VS Code ou outro editor utilizado na implementação
- OpenCode (assistente de programação)
- Figma, se houver prototipação
- Biblioteca `xlsx`, caso a exportação real de Excel seja implementada

> Na entrega final, mover para a lista de ferramentas utilizadas somente o que de fato foi usado.

### 4. Uso de IA

**Modelo utilizado na etapa de planejamento:**

- **ChatGPT (GPT-6)** — utilizado para organizar requisitos da atividade, definir um recorte viável, sugerir a arquitetura MVVM, propor a identidade inicial e estruturar o prompt do OpenCode.

**Como as sugestões foram avaliadas:**

- **Mantida:** ideia do próprio estudante de criar um produto voltado ao acompanhamento financeiro e à exportação para Excel.
- **Mantidas:** preferência definida pelo estudante por vermelho como cor principal, fonte Montserrat e temas claro/escuro.
- **Decisão tomada durante o planejamento:** limitar o produto a uma landing page com uma demonstração funcional, em vez de tentar entregar uma plataforma financeira completa.
- **A validar:** nome “Fluxa”, tom exato de vermelho, disposição final das seções e formato exigido pela atividade acadêmica para exportação.

**Próximos registros necessários:**

- Modelo de IA realmente usado no OpenCode: [PREENCHER]
- Por que o modelo foi escolhido: [PREENCHER]
- Quais sugestões do OpenCode funcionaram: [PREENCHER]
- Quais tiveram problemas e por quê: [PREENCHER]
- Quais sugestões foram modificadas ou descartadas: [PREENCHER]
- Trocas de modelo e justificativa, se ocorrerem: [PREENCHER]

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

**Mudanças durante a implementação:** [PREENCHER DEPOIS DE IMPLEMENTAR]

**Erros, tentativas e aprendizados:** [PREENCHER COM FATOS DO DESENVOLVIMENTO]

### 6. Resultado final

**Pendente:** escrever após testar a landing page. Comentar o que ficou bom, o que mudou em relação à ideia inicial, limitações atuais e o que poderia ser melhorado com mais tempo.

## Arquitetura escolhida — MVVM

- **Model:** dados e regras de negócio, como cadastro/validação de movimentações e cálculo de entradas, saídas e saldo.
- **ViewModel:** estado da tela e ações que conectam a interface aos dados, incluindo persistência no navegador.
- **View:** componentes React responsáveis pela apresentação, navegação e interações da landing page.

A arquitetura MVVM foi escolhida por facilitar a separação de responsabilidades sem exigir uma estrutura excessivamente complexa para o escopo da atividade.

## Como executar

[COMPLETAR DEPOIS DA GERAÇÃO DO PROJETO. PREVISÃO: `npm install` e `npm run dev`.]

## Registro contínuo de decisões

| Data       | Decisão ou evento                                   | Motivo                                                                                                   | Situação               |
| ---------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ---------------------- |
| 21/10/2026 | Criar um produto fictício de organização financeira | Aproveitar uma necessidade real de organização financeira e entrega de planilha para atividade acadêmica | Definido               |
| 21/10/2026 | Priorizar a landing page com demonstração pequena   | Atender ao escopo acadêmico sem construir um sistema financeiro completo                                 | Definido               |
| 21/10/2026 | Usar identidade vermelha e Montserrat               | Preferência visual do estudante                                                                          | Definido               |
| 21/10/2026 | Incluir modo claro e escuro                         | Dar liberdade de visualização ao visitante                                                               | Definido               |
| 21/10/2026 | Adotar MVVM                                         | Uma das arquiteturas exigidas pela atividade; boa divisão de responsabilidades                           | Definido               |
| 21/10/2026 | Nome de trabalho “Fluxa”                            | Representar o fluxo das movimentações financeiras                                                        | Provisório             |
| 21/10/2026 | Pesquisar Mobills e Organizze                       | Entender como soluções financeiras apresentam benefícios, demonstração, planos e FAQ                     | Pesquisa inicial feita |

## Aviso

Este é um **protótipo acadêmico** de um produto fictício. Dados, preços e depoimentos são ilustrativos. Não há conexão com bancos, processamento de pagamentos nem armazenamento em servidor.
