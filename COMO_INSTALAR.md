# Como instalar o Fluxa corrigido

1. Faça backup da sua pasta original do Fluxa.
2. Extraia o ZIP e abra a pasta `Fluxa-corrigido` no VS Code.
3. No terminal da pasta do projeto, execute `npm install`.
4. Execute `npm run dev` e abra o endereço informado (geralmente http://localhost:5173).
5. Rode `npm test` para testar as regras financeiras.
6. Rode `npm run build` para conferir a compilação com Vite.
7. Teste o botão **Testar demonstração**, cadastre entrada e saída, remova um registro, troque de tema, abra o FAQ e exporte o Excel.

## Como colocar no seu repositório

Você pode copiar os arquivos corrigidos para sua pasta Git local mantendo a pasta `.git` **do repositório original**. Não copie `node_modules/` ou `dist/`. Depois de conferir:

```bash
git status
git add .
git commit -m "fix: corrigir landing page e demonstracao financeira"
git push
```

**Atenção:** o ZIP não contém `.git`, nem substitui automaticamente o repositório no GitHub. O README V5 registra a reconstrução feita a partir do código público, sem afirmar que foi um commit no repositório.
