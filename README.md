# Fluxa — Suas finanças no ritmo da sua vida

> **Atividade 01 — Landing Page de Produto** · React + Vite · CSS Modules · Arquitetura MVVM · 100% client-side
>
> **Status da V5 (22/10/2026):** versão de recuperação do projeto entregue em ZIP. Os testes de lógica financeira passaram e os arquivos JSX/imports foram checados estaticamente; o build do Vite e os testes de navegação/Excel ainda precisam ser feitos na máquina do estudante.

## Integrantes

- **Rafael Souza**

## Sobre o produto

O **Fluxa** é a ideia de um organizador financeiro pessoal, voltado especialmente a estudantes e pessoas que desejam ter mais clareza sobre suas entradas e saídas. O objetivo é registrar movimentações, acompanhar totais e saldo e obter uma planilha Excel que pode auxiliar na organização de informações financeiras em atividades acadêmicas, incluindo uma atividade de sócio.

**Proposta de valor:** _“Suas finanças no ritmo da sua vida.”_

O trabalho é uma **landing page de produto fictício** com uma demonstração funcional, não um sistema bancário. Não tem backend, login, banco de dados, pagamento ou integração com bancos. Todos os registros são locais ao navegador.

### Funcionalidades apresentadas

- Hero com a proposta de valor e botão **Testar demonstração**;
- Benefícios, prévia ilustrativa do painel, explicação de três etapas e prova social explicitamente fictícia;
- Oferta de um plano grátis (R$ 0) e Pro (R$ 12,90/mês), **apenas conceituais**;
- FAQ expansível e navegação por âncoras;
- Demonstração financeira com inclusão/exclusão de movimentações e validações;
- Total de entradas, total de saídas e saldo calculados automaticamente;
- Persistência em `localStorage` (apenas no navegador usado);
- Exportação `.xlsx` com abas **Movimentações** e **Resumo**;
- Modo claro/escuro persistente, fonte Montserrat e identidade vermelha `#D7193F`.

## Arquitetura escolhida: MVVM

A arquitetura **MVVM (Model–View–ViewModel)** foi escolhida por ser uma das opções exigidas na atividade e por separar os cálculos financeiros da interface, sem acrescentar um backend desnecessário.

| Camada    | Arquivos principais                                             | Responsabilidade                                               |
| --------- | --------------------------------------------------------------- | -------------------------------------------------------------- |
| Model     | `src/models/financeModel.js`, `mockTransactions.js`             | Cálculos, validação, formatação e dados fictícios              |
| ViewModel | `src/viewmodels/useFinanceViewModel.js`, `useThemeViewModel.js` | Estado React, persistência local, operações, exportação e tema |
| View      | `src/views/LandingPage.jsx`, `src/components/`                  | Apresentação da landing page e demonstração financeira         |

Cada componente possui o próprio `.jsx` e `.module.css`; `styles/global.css` contém apenas estilos de base, variáveis de temas e utilitários globais.

## Jornada de construção

### 1. Ideia inicial

A proposta surgiu da necessidade de organizar a própria rotina financeira — anotar receitas e despesas, entender o saldo e emitir um Excel para uma atividade acadêmica de sócio. O tema, a cor principal vermelha, a fonte Montserrat e a ideia de modos claro e escuro foram definidos pelo estudante.

Durante o planejamento, consideramos duas alternativas: criar um sistema financeiro completo ou criar uma landing page que vende a ideia e inclui uma demonstração reduzida. **Escolhemos a segunda**, pois ela corresponde ao enunciado e permite mostrar o diferencial de exportação sem depender de backend.

O nome de trabalho escolhido foi **Fluxa**, remetendo ao fluxo das movimentações financeiras. [Confirmar se será o nome final.]

### 2. Pesquisa e referências

As páginas do [Mobills](https://www.mobills.com.br/) e [Organizze](https://www.organizze.com.br/app-de-financas/) foram utilizadas como referências de **organização do conteúdo**, incluindo apresentação da proposta de valor, benefícios, prévias do produto, oferta e perguntas frequentes. A identidade visual foi definida para o Fluxa; não copiamos layouts nem simulamos integrações bancárias dessas empresas.

### 3. Ferramentas utilizadas

- **React + Vite:** desenvolvimento e execução do frontend.
- **JavaScript/JSX e CSS Modules:** componentes e estilos encapsulados.
- **Montserrat:** tipografia definida para a marca.
- **`localStorage`:** guardar registros da demonstração e preferência de tema, quando permitido pelo navegador.
- **`xlsx`:** gerar planilha Excel no próprio navegador.
- **ChatGPT (GPT-6):** planejamento, definição do recorte, criação de prompts, revisão de erros e reconstrução corretiva V5.
- **OpenCode:** geração original da primeira versão e tentativas de correção, conforme os retornos relatados durante o desenvolvimento.
- **Editor utilizado pelo grupo:** [Preencher com VS Code, OpenCode etc. conforme uso real.]
- **Figma:** [Informar se foi efetivamente utilizado ou retirar.]

### 4. Uso de IA: decisões, acertos e problemas

**Planejamento:** o ChatGPT foi utilizado para interpretar os requisitos e transformar a ideia financeira em uma landing page compatível com a disciplina, com arquitetura MVVM e CSS Modules. Foi criado um prompt para o OpenCode. **Modelo escolhido dentro do OpenCode:** [preencher; OpenCode é a ferramenta, não o modelo].

**Primeira geração (V1, 21/10/2026):** o OpenCode relatou criação das seções obrigatórias, da demonstração, dos temas, do `localStorage` e do Excel, além de informar que o build passou. Quando o estudante executou a aplicação, porém, apareceu uma **tela vazia**. Isso demonstrou que o relatório de geração não substitui a execução manual.

**Revisões seguintes (V2–V4):** foram identificadas e encaminhadas correções para o entrypoint React, imports, tipagem TypeScript em arquivos JavaScript, exportação Excel, IDs, tema e CSS Modules. O console do navegador revelou `ReferenceError: secondary is not defined` em diversos componentes e depois `ReferenceError: destacado is not defined` no ProductPreview. Expressões como `styles.heading-secondary` e `styles.kpiValue-destacado` eram interpretadas pelo JavaScript como subtrações, não como nomes de classes.

**Decisões mantidas:** ideia de produto, cor vermelha, Montserrat, tema claro/escuro, React, MVVM, proposta de demonstração e planilha `.xlsx`.

**Decisões alteradas:** passou-se a utilizar nomes de classes em `camelCase`, um único ViewModel de tema, formulário com `onSubmit` e `preventDefault`, FAQs independentes e CTAs que abrem a demonstração. A planilha foi mantida com duas abas, mas foram reforçadas validações e formatação de valores.

**Sugestões rejeitadas ou não incorporadas:** não construímos backend, integração bancária, pagamento real ou backup em nuvem, pois não fazem parte do escopo. O plano Pro permanece apenas como exemplo visual de oferta.

**Troca de modelo:** [se ocorreu, informar qual e por quê; não inventar].

### 5. Evolução da solução

| Etapa                              | O que ocorreu                                                                                                                                          | Aprendizado / decisão                                                               |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| V0 — Planejamento                  | Escolha de produto financeiro, escopo de landing page, cor, fonte e MVVM                                                                               | Manter a atividade 100% client-side                                                 |
| V1 — Primeira geração              | OpenCode produziu a implementação inicial                                                                                                              | Código gerado precisa ser testado, não apenas descrito                              |
| V2 — Primeira auditoria            | Erros em arquivos de entrada, JavaScript/JSX, Excel, IDs e temas foram investigados                                                                    | Revisar dependências entre arquivos e execução no navegador                         |
| V3 — Tela vazia                    | Console indicou vários erros `secondary is not defined`                                                                                                | Classes de CSS Modules com hífen exigem acesso correto                              |
| V4 — Outra falha                   | Console indicou `destacado is not defined` no ProductPreview                                                                                           | Corrigir padrões repetidos no projeto inteiro, não um erro isolado                  |
| V5 — Recuperação corretiva (22/10) | Versão reconstruída a partir da estrutura e requisitos do repositório público, com componentes e lógica separados, novos testes e estilos padronizados | Preservar a proposta, simplificar a interface do código e validar antes de entregar |

#### Correções técnicas aplicadas na V5

1. Estrutura React/JSX e entrada `index.html` → `main.jsx` → `App.jsx` → `LandingPage.jsx`.
2. Componentes com classes CSS Modules em `camelCase` (sem acessos do tipo `styles.x-y`).
3. Formulário com envio controlado, validação de valores finitos e mensagens exibidas pelo ViewModel.
4. Cálculo de totais centralizado no Model e formatação com `Intl.NumberFormat('pt-BR')`.
5. Identificadores gerados sem colisão com registros de exemplo.
6. `localStorage` carregado com tratamento de dados inválidos ou indisponibilidade.
7. Tema claro/escuro gerenciado por um único hook no topo da página.
8. FAQ com abertura independente e atributos de acessibilidade.
9. Gráficos visuais com barras de altura positiva e layout responsivo.
10. Exportação `.xlsx` client-side com movimentações, resumo e formato monetário.

**Observação sobre a entrega V5:** neste ambiente não foi possível clonar o repositório pelo Git. A versão corrigida é uma **reconstrução dos arquivos** baseada na estrutura e nos trechos públicos consultados, e não um commit aplicado ao GitHub original. O estudante deve conferir e integrar ao próprio repositório após os testes.

### 6. Resultado e avaliação

O Fluxa apresenta os elementos exigidos para a landing page e usa uma demonstração para tornar o produto mais concreto. O maior aprendizado foi perceber que arquivos que compilam ou respostas de IA que declaram sucesso não garantem ausência de erros durante a renderização.

O Model da V5 passou por **7 testes automatizados** cobrindo cálculos, validação, formatação e IDs. O JSX, caminhos de import e referências a classes CSS Modules passaram por verificação estática. **A compilação Vite e os testes reais no navegador ainda devem ser realizados:** as dependências não estavam instaladas neste ambiente, sem acesso à rede para obtê-las. Não estamos declarando esses testes como concluídos.

Com mais tempo, faríamos testes automatizados de componentes (incluindo navegação, fluxo do formulário e exportação Excel) e mais ajustes após testes em dispositivos móveis.

## Como executar

Requisitos: Node.js 18+ e npm.

```bash
npm install
npm run dev
```

Abra a URL indicada pelo Vite (normalmente `http://localhost:5173`).

Para os testes e build:

```bash
npm test
npm run build
```

O projeto **não inclui** `node_modules` nem `dist` no Git/ZIP; essas pastas são geradas localmente.

## Checklist antes da entrega no Moodle

- [ ] Preencher nomes dos integrantes e identificar o modelo usado no OpenCode.
- [ ] Instalar dependências e confirmar `npm run build` sem erros.
- [ ] Abrir a página, verificar Hero, benefícios, prévia, funcionamento, avaliações, preços, FAQ e rodapé.
- [ ] Testar navegação, tema claro/escuro e persistência da preferência.
- [ ] Testar formulário: uma entrada, uma saída, valores inválidos, exclusão e restauração dos exemplos.
- [ ] Recarregar a página e verificar se as movimentações permanecem.
- [ ] Exportar Excel, abrir o `.xlsx` e conferir ambas as abas e os totais.
- [ ] Testar desktop e celular, conferindo legibilidade e ausência de rolagem horizontal.
- [ ] Atualizar o repositório público e conferir que ele abre sem autenticação.
- [ ] Se for em dupla, ambos devem enviar o link no Moodle.

> **Aviso:** valores financeiros, avaliações e planos são fictícios. Os dados da demonstração ficam apenas no navegador; não use como sistema de armazenamento de finanças reais.
