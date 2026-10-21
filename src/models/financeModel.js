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

export type Transaction = {
  id: string
  descricao: string
  categoria: string
  tipo: 'entrada' | 'saida'
  valor: number
  data: string
}

/**
 * Calcula o saldo total a partir de um array de transações.
 * Saldo = soma das entradas - soma das saídas.
*/
export function calcularSaldo(transacoes: Transaction[]): number {
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
export function totalEntradas(transacoes: Transaction[]): number {
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
export function totalSaidas(transacoes: Transaction[]): number {
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
export function validarTransacao(
  descricao: string,
  tipo: 'entrada' | 'saida',
  valor: number,
  categoria: string
): { válido: boolean; erros: string[] } {
  const erros: string[] = []

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
export function formatarReal(valor: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor)
}

/**
 * Gera um ID único (simple counter-based para o demonstrador).
 */
let ultimoId = 0
export function gerarId(): string {
  ultimoId += 1
  return `tx-${ultimoId}`
}

/*
 * mockTransactions.js - Model: exemplos fictícios iniciais.
 * Fornece algumas transações pré-cadasptas para a demonstração inicial.
 * Identificadas claramente como exemplos para o exercício acadêmico.
*/

export const mockTransactions: Transaction[] = [
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