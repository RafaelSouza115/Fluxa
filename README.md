# Fluxa — Suas finanças no ritmo da sua vida

> **Atividade 01 — Landing Page de Produto**  
> **Documentação: V4 | 21/10/2026**  
> **Situação:** protótipo em desenvolvimento e correção. A página apresentou erros de execução durante os testes locais; a validação completa da V4 ainda está pendente.

**Repositório:** [github.com/RafaelSouza115/Fluxa](https://github.com/RafaelSouza115/Fluxa)

## Integrantes

- Rafael Souza
- [Adicionar integrante, caso o trabalho seja realizado em dupla]

## Sobre o produto

O **Fluxa** é um produto financeiro fictício criado para facilitar o acompanhamento das finanças pessoais. A proposta é permitir que uma pessoa registre **entradas e saídas**, acompanhe o **saldo disponível**, visualize um histórico de movimentações e **exporte os registros para Excel**.

A ideia surgiu de uma necessidade prática: organizar a própria rotina financeira e gerar uma planilha que também possa ser utilizada em uma atividade acadêmica de sócio. O público-alvo são estudantes e pessoas que procuram uma maneira simples de controlar receitas e despesas.

Em vez de desenvolver um sistema financeiro completo, optamos por uma **landing page de apresentação do produto com uma demonstração interativa**. Essa escolha atende ao objetivo da atividade e permite que o visitante experimente a proposta. Todos os dados são locais ou fictícios: o projeto não possui backend, banco de dados, autenticação, conexão bancária ou pagamentos reais.

### Identidade e proposta de valor

| Elemento | Escolha | Motivo |
| --- | --- | --- |
| Nome | **Fluxa** | Referência ao fluxo de dinheiro e às movimentações do dia a dia. |
| Frase principal | **“Suas finanças no ritmo da sua vida.”** | Comunicar praticidade e organização. |
| Cor principal | Vermelho `#D7193F` | Criar uma identidade marcante, conforme a ideia inicial. |
| Fonte | Montserrat | Priorizar legibilidade e um visual moderno. |
| Aparência | Modos claro e escuro | Permitir diferentes preferências de visualização. |
| CTA principal | **Testar demonstração** | Fazer o visitante conhecer o produto por meio de uma interação real. |

## Funcionalidades e seções da landing page

O escopo definido para o protótipo inclui:

- **Header:** identidade da marca, navegação e alternância de tema.
- **Hero:** nome, proposta de valor e CTA principal.
- **Benefícios e diferenciais:** organização, acompanhamento do saldo, simplicidade e exportação.
- **Prévia do produto:** representação visual de um painel financeiro com indicadores e movimentações fictícias.
- **Como funciona:** apresentação do processo de registrar, acompanhar e exportar.
- **Prova social:** avaliações fictícias, identificadas como tal.
- **Oferta:** planos ilustrativos Grátis (R$ 0) e Pro (R$ 12,90/mês), sem compra real.
- **FAQ:** respostas para dúvidas sobre o produto.
- **Demonstração financeira:** inclusão de entradas e saídas, exibição de totais e saldo, histórico e exportação `.xlsx`.
- **Footer:** informações finais e navegação complementar.

A demonstração foi planejada para funcionar **100% no navegador**, com `localStorage` para manter os dados entre atualizações e a biblioteca `xlsx` para gerar uma planilha com as abas **Movimentações** e **Resumo**. Essas funcionalidades fazem parte da implementação proposta; sua verificação final deve ocorrer nos testes descritos ao fim deste documento.

## Arquitetura escolhida: MVVM

Escolhemos **MVVM (Model–View–ViewModel)**, uma das arquiteturas permitidas na atividade, para separar regras financeiras, controle de estado e interface.

```text
src/
├── app/
│   └── App.jsx
├── models/
│   ├── financeModel.js
│   └── mockTransactions.js
├── viewmodels/
│   ├── useFinanceViewModel.js
│   └── useThemeViewModel.js
├── views/
│   ├── LandingPage.jsx
│   └── LandingPage.module.css
└── components/
    └── [Componentes da landing page com JSX e CSS Modules]
```

- **Model:** contém estruturas de dados, validações e cálculos financeiros, sem depender dos componentes visuais.
- **ViewModel:** utiliza hooks React para administrar estado, interações, persistência e ações da demonstração.
- **View:** apresenta os dados e recebe interações nos componentes da landing page.

Optamos por essa divisão porque permite corrigir e evoluir cada responsabilidade sem transformar a landing page em um único componente grande. **CSS Modules** foi escolhido para isolar os estilos dos componentes, conforme exigido pela atividade.

---

# Jornada de construção

## 1. Ideia inicial

Inicialmente, a intenção era criar um produto de organização financeira pessoal que acompanhasse entradas, despesas e saldo, além de gerar um Excel para outra atividade acadêmica. Ao analisar o enunciado, percebemos que o foco da entrega não era um sistema financeiro completo, mas sim **apresentar e vender a ideia de um produto por meio de uma landing page**.

Consideramos, portanto, duas alternativas: criar um gerenciador financeiro completo ou criar uma página comercial com uma pequena demonstração. Escolhemos a segunda, porque oferece uma experiência navegável, permite demonstrar o diferencial da exportação e mantém o escopo compatível com React client-side e dados mockados.

A identidade visual também foi definida desde o início: vermelho como cor principal, Montserrat e alternância entre modo claro e escuro.

## 2. Pesquisa e referências

Pesquisamos como serviços de organização financeira apresentam seus benefícios e conduzem o visitante até uma ação.

| Referência | O que observamos | Como influenciou o Fluxa |
| --- | --- | --- |
| [Mobills](https://www.mobills.com.br/) | Proposta de valor objetiva, blocos de benefícios e chamadas para ação. | Influenciou a apresentação rápida das vantagens e a visibilidade do CTA. |
| [Organizze](https://www.organizze.com.br/app-de-financas/) | Demonstrações visuais, explicações de funcionamento, ofertas e perguntas frequentes. | Ajudou a pensar na sequência de seções da landing page. |

Utilizamos essas páginas como **referências de estrutura e experiência**, sem reproduzir sua identidade visual. Decidimos também **não incluir integrações com bancos**, pois isso extrapolaria o escopo client-side da atividade.

## 3. Ferramentas utilizadas

| Ferramenta/tecnologia | Utilização |
| --- | --- |
| **React** | Construção dos componentes e da interface interativa. |
| **Vite** | Ambiente de desenvolvimento e compilação. |
| **JavaScript e JSX** | Lógica e estrutura da aplicação. |
| **CSS Modules** | Estilos organizados por componente. |
| **Montserrat** | Tipografia da identidade visual. |
| **localStorage** | Persistência local de movimentações e preferência de tema, conforme implementação proposta. |
| **xlsx** | Exportação de planilha Excel pelo navegador. |
| **Git e GitHub** | Versionamento e entrega do projeto. |
| **ChatGPT (GPT-6)** | Planejamento, elaboração de prompts, revisão do código, análise do console e documentação da jornada. |
| **OpenCode** | Geração da primeira implementação e execução das solicitações de correção. |

**Editor usado no desenvolvimento:** [confirmar se foi VS Code ou outro].  
**Figma ou outras ferramentas visuais:** [informar apenas se foram realmente utilizadas].

## 4. Uso de inteligência artificial

Utilizamos IA como apoio durante a criação, mas as decisões de produto partiram do objetivo da atividade e das preferências definidas para o Fluxa.

### ChatGPT — planejamento e revisão

O ChatGPT foi utilizado para interpretar os requisitos da atividade, ajudar a definir um escopo viável, sugerir MVVM, estruturar o prompt enviado ao OpenCode e investigar problemas encontrados durante a execução.

### OpenCode — implementação

O primeiro prompt solicitou a criação da landing page com React, CSS Modules, identidade vermelha, fonte Montserrat, temas claro/escuro e demonstração financeira. O OpenCode apresentou um resumo das funcionalidades implementadas e informou que o build tinha sido concluído com sucesso.

Ao executar a aplicação localmente, entretanto, **a página permaneceu preta/vazia**, mostrando que o relato da ferramenta não substituía testes no navegador. A partir desse resultado, passamos a utilizar prompts menores e direcionados para corrigir problemas específicos, preservando a estrutura já desenvolvida.

**Modelo de IA selecionado dentro do OpenCode:** [informar o modelo utilizado — OpenCode é a ferramenta, não o nome do modelo].  
**Troca de modelos:** [registrar apenas se ocorreu; caso contrário, escrever “não houve”].

### Sugestões mantidas, modificadas e não adotadas

- **Mantidas:** MVVM, React, CSS Modules, demonstração client-side, exportação de Excel, dados fictícios e identidade visual escolhida.
- **Ajustada:** a estratégia de desenvolvimento. Em vez de aceitar a entrega inicial da IA como pronta, adotamos análise do repositório, leitura dos erros do console e correções iterativas.
- **Corrigidas ou solicitadas para correção:** inicialização do React, incompatibilidades JavaScript/TypeScript, importação da biblioteca Excel e uso de CSS Modules.
- **Não adotadas no escopo:** backend, autenticação, banco de dados, integração bancária e pagamentos reais.
- **Em avaliação:** melhorias estéticas, detalhes de responsividade e a clareza de todas as ações da interface.

## 5. Evolução da solução — V1 até V4

### V1 — Primeira geração do projeto

**Objetivo:** transformar a ideia inicial em uma landing page navegável com demonstração.

O OpenCode gerou uma estrutura baseada em MVVM, os componentes de apresentação, a demonstração de entradas e saídas, o tema claro/escuro e a proposta de exportação para Excel. O relatório da ferramenta descreveu também validações de formulário, dados de exemplo e persistência local.

**Primeiro teste real:** ao executar o projeto e abrir o endereço local do Vite, a página não mostrou os componentes: permaneceu vazia/preta. Esse foi o primeiro indício de que havia diferenças entre o resultado informado pela IA e o funcionamento observado no navegador.

**Aprendizado:** um projeto compilar ou ser descrito como concluído não significa que consiga renderizar e funcionar corretamente.

### V2 — Revisão da base e problemas estruturais

**Objetivo:** identificar por que a aplicação não iniciava e revisar a implementação sem recomeçá-la.

A inspeção do repositório apontou problemas de inicialização e compatibilidade, incluindo:

- Falta inicial do script que carrega `main.jsx` em `index.html`.
- Divergência de imports e caminhos de arquivos que precisavam ser conferidos.
- Sintaxe de TypeScript em arquivos `.js` ou `.jsx`, apesar da configuração em JavaScript/JSX.
- Uso de `require('xlsx')` em código direcionado ao navegador, em vez de uma importação compatível com módulos ES.
- Possibilidade de colisões de IDs entre novos registros e dados fictícios.
- Inconsistências entre a classe usada para o tema escuro e as regras de CSS.
- Presença inicial de pastas geradas, como `node_modules` e `dist`, no versionamento.

Foi solicitado ao OpenCode que corrigisse esses pontos. Uma revisão posterior indicou que parte dessas alterações aparecia no código, como o script de entrada do React, a existência de `App.jsx` e a importação da biblioteca `xlsx`.

**Decisão:** preservar o conceito, a identidade visual e a arquitetura; corrigir os problemas técnicos de forma incremental.

### V3 — Erros `secondary is not defined`

**Objetivo:** investigar a causa da tela vazia com evidências obtidas diretamente no console do navegador.

O console apresentou o erro:

```text
Uncaught ReferenceError: secondary is not defined
```

O mesmo erro ocorreu em componentes como `Hero`, `Benefits`, `ProductPreview`, `HowItWorks`, `Testimonials`, `Pricing` e `Faq`.

Identificamos um padrão de acesso incorreto às classes do CSS Modules. Por exemplo:

```jsx
// Incorreto: o hífen é interpretado como subtração.
<h2 className={styles.heading-secondary}>Benefícios</h2>

// Correto: a chave da classe é acessada por uma string.
<h2 className={styles['heading-secondary']}>Benefícios</h2>
```

Solicitamos ao OpenCode uma varredura geral dos componentes, inclusive em classes com outros nomes compostos e caracteres de hífen semelhantes. Essa etapa mostrou a importância de ler a mensagem e a linha do erro, em vez de alterar o layout por tentativa e erro.

**Resultado observado:** depois da sequência de correções, o console passou a apontar outro identificador não definido, indicando que ainda existia ao menos mais um acesso incorreto a classes CSS.

### V4 — Erro `destacado is not defined` e revisão dos CSS Modules

**Objetivo:** corrigir os casos restantes e evitar que a página volte a quebrar durante a renderização.

O novo erro apresentado pelo console foi:

```text
Uncaught ReferenceError: destacado is not defined
    at ProductPreview (ProductPreview.jsx:34:45)
```

A investigação localizou uma expressão do mesmo tipo no componente `ProductPreview`:

```jsx
// Incorreto
<p className={styles.kpiValue-destacado}>R$ 4.184,50</p>

// Correto
<p className={styles['kpiValue-destacado']}>R$ 4.184,50</p>
```

Esse problema não está relacionado ao cálculo financeiro: ele ocorre porque `styles.kpiValue-destacado` é interpretado pelo JavaScript como uma subtração envolvendo a variável inexistente `destacado`.

**O que foi solicitado na V4:**

1. Corrigir o acesso a `kpiValue-destacado`.
2. Buscar o mesmo padrão em **todos** os componentes JSX e JS, inclusive em expressões condicionais.
3. Confirmar que os nomes correspondem aos seletores definidos em cada arquivo `.module.css`.
4. Verificar outros `ReferenceError` e problemas que interrompam a renderização.
5. Preservar os requisitos da atividade e testar a aplicação no navegador, além de executar o build.

**Situação da V4:** o erro foi identificado e a correção foi especificada. **Ainda não foi confirmado nesta jornada que a última correção foi aplicada e que toda a landing page funciona sem erros.** A finalização depende dos testes manuais abaixo e da publicação do código atualizado.

### Resumo das decisões ao longo das versões

| Etapa | Situação encontrada | Decisão tomada | Aprendizado |
| --- | --- | --- | --- |
| V1 | Primeira geração, mas página vazia | Revisar código e execução | Resumo da IA não equivale a teste real. |
| V2 | Problemas de entrada, imports, sintaxe e integração local | Corrigir sem reescrever | Conferir compatibilidade entre ferramentas e tecnologias. |
| V3 | `secondary is not defined` em várias seções | Revisar padrão de classes CSS Modules | Um erro de JavaScript pode interromper a interface inteira. |
| V4 | `destacado is not defined` em `ProductPreview` | Corrigir e procurar todas as ocorrências semelhantes | Correções pontuais devem ser acompanhadas de uma varredura completa. |

## 6. Resultado e avaliação até a V4

O Fluxa evoluiu de uma ideia pessoal de acompanhamento financeiro para um protótipo acadêmico estruturado em React, com uma landing page de produto e uma demonstração financeira planejada. As principais decisões de escopo, arquitetura e identidade visual permaneceram consistentes desde o início.

O maior desafio até a V4 foi a **estabilidade da aplicação**. Houve erros de código gerados ou mantidos nas iterações com IA que impediram o carregamento normal da página. A análise dos erros do console permitiu encontrar causas concretas e orientar correções mais específicas.

**Avaliação atual:** a estrutura e a proposta estão alinhadas ao enunciado, mas o resultado **ainda depende da comprovação de funcionamento em navegador e do teste de todas as interações**. Não consideramos o produto finalizado apenas porque a IA informou que concluiu a implementação.

**Com mais tempo, gostaríamos de:** melhorar detalhes visuais e responsivos, acrescentar testes automatizados para cálculos financeiros e renderização, aperfeiçoar acessibilidade e tornar as mensagens do formulário mais claras — sem fugir do escopo acadêmico.

---

## Como executar

**Pré-requisitos:** Node.js e npm instalados.

```bash
npm install
npm run dev
```

Abra o endereço apresentado no terminal pelo Vite, normalmente `http://localhost:5173`.

Para verificar se o projeto compila:

```bash
npm run build
```

> **Atenção:** o build não é suficiente para detectar todos os erros de execução. Depois dele, abra a página, pressione `F12`, confira a aba **Console** e teste os componentes e CTAs.

## Checklist antes da entrega

- [ ] A aplicação abre sem tela vazia e sem `ReferenceError` no console.
- [ ] `npm run build` termina sem erros.
- [ ] Todas as seções obrigatórias da landing page aparecem corretamente.
- [ ] O CTA **Testar demonstração** leva à área interativa.
- [ ] O menu e os demais CTAs possuem ações coerentes, reais ou simuladas.
- [ ] O modo claro/escuro muda a aparência e preserva a preferência após atualizar a página.
- [ ] É possível cadastrar uma entrada e uma saída.
- [ ] O saldo corresponde ao cálculo de entradas menos saídas.
- [ ] Exclusão, validações e persistência local funcionam como esperado.
- [ ] A exportação gera um `.xlsx` válido, com abas **Movimentações** e **Resumo**.
- [ ] O FAQ expande e recolhe as respostas.
- [ ] A interface se adapta a telas menores sem transbordamento.
- [ ] O repositório público contém os arquivos do projeto e o README atualizado.
- [ ] O(s) integrante(s) e o modelo de IA usado no OpenCode foram preenchidos neste documento.

## Considerações finais

O Fluxa é um **protótipo fictício criado para fins acadêmicos**. Os depoimentos, preços, planos e registros exemplificativos não representam um serviço comercial real. Não há conexão com instituições financeiras, autenticação, pagamentos ou armazenamento de dados em servidor.
