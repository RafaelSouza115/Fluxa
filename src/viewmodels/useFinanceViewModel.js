/*
 * useFinanceViewModel.js - ViewModel: estado e operações financeiras.
 * Responsável por: gerenciar o array de transações, persistência no localStorage,
 * cálculos de entrada/saída/saldo, validação de formulário e ações como
 * adicionar, remover e reiniciar transações.
 * Esta camada conecta o Model (regras e dados) à View (interface React).
 * Regras financeiras permanecem no model; este hook foca em estado e ações UI.
*/

import { useState, useEffect, useCallback } from 'react'
import {
  Transaction,
  calcularSaldo,
  totalEntradas,
  totalSaidas,
  validarTransacao,
  formatarReal,
  gerarId,
} from '../models/financeModel'

// Chave do localStorage
const STORAGE_KEY = 'fluxa-transactions'

// Tenta recuperar transações do localStorage; se não houver, usa exemplos iniciais
const stored = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
const initialTransactions: Transaction[] = stored
  ? JSON.parse(stored)
  : [
      { id: 'tx-1', descricao: 'Salário mensal', categoria: 'Remuneração', tipo: 'entrada', valor: 3500, data: '2026-10-01' },
      { id: 'tx-2', descricao: 'Lanchonete', categoria: 'Alimentação', tipo: 'saida', valor: 45.5, data: '2026-10-02' },
      { id: 'tx-3', descricao: 'Freelance - Design', categoria: 'Rendimentos', tipo: 'entrada', valor: 850, data: '2026-10-03' },
      { id: 'tx-4', descricao: 'Supermercado', categoria: 'Alimentação', tipo: 'saida', valor: 120, data: '2026-10-04' },
      { id: 'tx-5', descricao: 'Transporte público', categoria: 'Transporte', tipo: 'saida', valor: 30, data: '2026-10-05' },
    ]

export type FinanceState = {
  transacoes: Transaction[]
  totalEntradas: number
  totalSaidas: number
  saldo: number
}

function exportarExcelHelper(transacoes: Transaction[], totalEntradas: number, totalSaidas: number, saldo: number) {
  const worksheet = require('xlsx').utils.json_to_sheet(
    transacoes.map(t => ({
      Data: t.data,
      Descrição: t.descricao,
      Categoria: t.categoria,
      Tipo: t.tipo,
      Valor: t.valor,
    }))
  )

  const workbook = require('xlsx').utils.book_new()
  require('xlsx').utils.book_append_sheet(workbook, worksheet, 'Movimentações')

  const resumo = [
    { Descrição: 'Entradas', Valor: totalEntradas },
    { Descrição: 'Saídas', Valor: totalSaidas },
    { Descrição: 'Saldo', Valor: saldo },
  ]
  const resumoWs = require('xlsx').utils.json_to_sheet(resumo)
  require('xlsx').utils.book_append_sheet(workbook, resumoWs, 'Resumo')

  const excelFile = require('xlsx').write(workbook, { bookType: 'xlsx', type: 'buffer' })
  const blob = new Blob([excelFile], { type: 'application/octet-stream' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'fluxa-movimentacoes.xlsx'
  a.click()
  URL.revokeObjectURL(url)
}

export function useFinanceViewModel(initialTransactions: Transaction[] = initialTransactions) {
  const [transacoes, setTransacoes] = useState<Transaction[]>(initialTransactions)
  const [mensagem, setMensagem] = useState<string>('')

  // Calculados derivados
  const totalEntradaCalc = totalEntradas(transacoes)
  const totalSaidaCalc = totalSaidas(transacoes)
  const saldoCalc = calcularSaldo(transacoes)

  // Persistir no localStorage sempre que as transações mudarem
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(transacoes))
    } catch (e) {
      console.warn('Não foi possível salvar no localStorage', e)
    }
  }, [transacoes])

  // Adicionar nova transação
  const adicionarTransacao = useCallback((descricao: string, tipo: 'entrada' | 'saida', valor: number, categoria: string) => {
    const { válido, erros } = validarTransacao(descricao, tipo, valor, categoria)
    if (!válido) {
      setMensagem(erros.join(' '))
      return false
    }
    const nova: Transaction = {
      id: gerarId(),
      descricao: descricao.trim(),
      categoria: categoria.trim(),
      tipo,
      valor,
      data: new Date().toISOString().split('T')[0],
    }
    setTransacoes(prev => [...prev, nova])
    setMensagem('')
    return true
  }, [])

  // Remover transação por ID
  const removerTransacao = useCallback((id: string) => {
    setTransacoes(prev => prev.filter(t => t.id !== id))
  }, [])

  // Reiniciar dados (substituir por exemplos)
  const reiniciarDados = useCallback(() => {
    setTransacoes([
      { id: 'tx-1', descricao: 'Salário mensal', categoria: 'Remuneração', tipo: 'entrada', valor: 3500, data: '2026-10-01' },
      { id: 'tx-2', descricao: 'Lanchonete', categoria: 'Alimentação', tipo: 'saida', valor: 45.5, data: '2026-10-02' },
      { id: 'tx-3', descricao: 'Freelance - Design', categoria: 'Rendimentos', tipo: 'entrada', valor: 850, data: '2026-10-03' },
      { id: 'tx-4', descricao: 'Supermercado', categoria: 'Alimentação', tipo: 'saida', valor: 120, data: '2026-10-04' },
      { id: 'tx-5', descricao: 'Transporte público', categoria: 'Transporte', tipo: 'saida', valor: 30, data: '2026-10-05' },
    ])
    setMensagem('')
  }, [])

  // Exportar para Excel (client-side)
  const exportarExcel = useCallback(() => {
    exportarExcelHelper(transacoes, totalEntradaCalc, totalSaidaCalc, saldoCalc)
  }, [transacoes, totalEntradaCalc, totalSaidaCalc, saldoCalc])

  return {
    state: {
      transacoes,
      totalEntradas: totalEntradaCalc,
      totalSaidas: totalSaidaCalc,
      saldo: saldoCalc,
    },
    actions: {
      adicionarTransacao,
      removerTransacao,
      reiniciarDados,
      exportarExcel,
    },
    status: {
      mensagem,
    },
  }
}