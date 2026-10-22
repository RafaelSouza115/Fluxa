/*
 * financeModel.js - Model: regras puras de negócio e cálculos financeiros.
 * Este módulo encapsula a lógica de cálculo de entradas, saídas e saldo,
 * bem como validação de transações. Não tem dependência de DOM ou browser APIs
 * (exceto quando chamado do ViewModel que usa localStorage).
 */

/**
 * Estrutura de uma transação:
 * { id, descricao, categoria, tipo, valor, data }
 * tipo: 'entrada' | 'saida'
 */

const Transaction = {
  id: '',
  descricao: '',
  categoria: '',
  tipo: '',
  valor: 0,
  data: '',
}

/**
 * Calcula o saldo total a partir de um array de transações.
 * Saldo = soma das entradas - soma das saídas.
 */
function calcularSaldo(transacoes) {
  let entradas = 0
  let saidas = 0
  for (const t of transacoes) {
    if (t.tipo === 'entrada') {
      entradas += t.valor
    } else {
      saidas += t.valor
    }
  }
  return entradas - saidas
}

/**
 * Calcula o total de entradas.
 */
function totalEntradas(transacoes) {
  let soma = 0
  for (const t of transacoes) {
    if (t.tipo === 'entrada') {
      soma += t.valor
    }
  }
  return soma
}

/**
 * Calcula o total de saídas.
 */
function totalSaidas(transacoes) {
  let soma = 0
  for (const t of transacoes) {
    if (t.tipo === 'saida') {
      soma += t.valor
    }
  }
  return soma
}

/**
 * Valida se uma transação tem todos os campos preenchidos corretamente.
 * Retorna objeto com { válido: boolean, erros: string[] }
 */
function validarTransacao(descricao, tipo, valor, categoria) {
  const erros = []

  if (!descricao || descricao.trim().length === 0) {
    erros.push('Descrição é obrigatória.')
  }

  if (tipo !== 'entrada' && tipo !== 'saida') {
    erros.push('Tipo de transação inválido.')
  }

  if (typeof valor !== 'number' || isNaN(valor) || valor <= 0) {
    erros.push('Valor deve ser um número maior que zero.')
  }

  if (!categoria || categoria.trim().length === 0) {
    erros.push('Categoria é obrigatória.')
  }

  return {
    válido: erros.length === 0,
    erros,
  }
}

/**
 * Formata um valor em reais usando Intl.NumberFormat.
 */
function formatarReal(valor) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor)
}

/**
 * Gera um ID único usando crypto quando disponível, com fallback para o counter.
 */
function gerarId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return 'tx-' + crypto.randomUUID().substring(0, 8)
  }
  let ultimoId = 0
  ultimoId += 1
  return 'tx-' + ultimoId
}

/*
 * mockTransactions.js - Model: exemplos fictícios iniciais.
 * Fornece algumas transações pré-cadasptas para a demonstração inicial.
 * Identificadas claramente como exemplos para o exercício acadêmico.
 */

/**
 * Transações de exemplo para o dashboard demonstrativo.
 * Identificadas como exemplos para o exercício acadêmico.
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

export {
  calcularSaldo,
  totalEntradas,
  totalSaidas,
  validarTransacao,
  formatarReal,
  gerarId,
  mockTransactions,
}