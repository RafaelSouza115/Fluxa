/*
 * mockTransactions.js - Model: exemplos fictícios iniciais.
 * Transações de exemplo para o dashboard demonstrativo.
 * Identificadas como exemplos para o exercício acadêmico.
 * Este módulo pode ser importado separadamente ou via financeModel.js.
 */

const mockTransactions = [
  {
    id: 'tx-1',
    descricao: 'Salário mensal',
    categoria: 'Remuneração',
    tipo: 'entrada',
    valor: 3500,
    data: '2026-10-01',
  },
  {
    id: 'tx-2',
    descricao: 'Lanchonete',
    categoria: 'Alimentação',
    tipo: 'saida',
    valor: 45.5,
    data: '2026-10-02',
  },
  {
    id: 'tx-3',
    descricao: 'Freelance - Design',
    categoria: 'Rendimentos',
    tipo: 'entrada',
    valor: 850,
    data: '2026-10-03',
  },
  {
    id: 'tx-4',
    descricao: 'Supermercado',
    categoria: 'Alimentação',
    tipo: 'saida',
    valor: 120,
    data: '2026-10-04',
  },
  {
    id: 'tx-5',
    descricao: 'Transporte público',
    categoria: 'Transporte',
    tipo: 'saida',
    valor: 30,
    data: '2026-10-05',
  },
]

export { mockTransactions }