/*
 * useFinanceViewModel.js - ViewModel: estado e operações financeiras.
 * Responsável por: gerenciar o array de transações, persistência no localStorage,
 * cálculos de entrada/saída/saldo, validação de formulário e ações como
 * adicionar, remover e reiniciar transações.
 * Esta camada conecta o Model (regras e dados) à View (interface React).
 * Regras financeiras permanecem no model; este hook foca em estado e ações UI.
 */

import { useState, useEffect, useCallback } from 'react'
import * as XLSX from 'xlsx'
import {
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
// O parse é envolto em try/catch para não quebrar a aplicação se os dados estiverem corrompidos
let initialTransactions = []
try {
  const stored = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
  initialTransactions = stored ? JSON.parse(stored) : [
    { id: 'tx-1', descricao: 'Salário mensal', categoria: 'Remuneração', tipo: 'entrada', valor: 3500, data: '2026-10-01' },
    { id: 'tx-2', descricao: 'Lanchonete', categoria: 'Alimentação', tipo: 'saida', valor: 45.5, data: '2026-10-02' },
    { id: 'tx-3', descricao: 'Freelance - Design', categoria: 'Rendimentos', tipo: 'entrada', valor: 850, data: '2026-10-03' },
    { id: 'tx-4', descricao: 'Supermercado', categoria: 'Alimentação', tipo: 'saida', valor: 120, data: '2026-10-04' },
    { id: 'tx-5', descricao: 'Transporte público', categoria: 'Transporte', tipo: 'saida', valor: 30, data: '2026-10-05' },
  ]
} catch (e) {
  console.warn('localStorage dados corrompidos, usando exemplos iniciais', e)
  initialTransactions = [
    { id: 'tx-1', descricao: 'Salário mensal', categoria: 'Remuneração', tipo: 'entrada', valor: 3500, data: '2026-10-01' },
    { id: 'tx-2', descricao: 'Lanchonete', categoria: 'Alimentação', tipo: 'saida', valor: 45.5, data: '2026-10-02' },
    { id: 'tx-3', descricao: 'Freelance - Design', categoria: 'Rendimentos', tipo: 'entrada', valor: 850, data: '2026-10-03' },
    { id: 'tx-4', descricao: 'Supermercado', categoria: 'Alimentação', tipo: 'saida', valor: 120, data: '2026-10-04' },
    { id: 'tx-5', descricao: 'Transporte público', categoria: 'Transporte', tipo: 'saida', valor: 30, data: '2026-10-05' },
  ]
}

// Gera ID único usando crypto quando disponível, com fallback para o counter do model
function gerarIdUnico() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return 'tx-' + crypto.randomUUID().substring(0, 8)
  }
  return gerarId()
}

export function useFinanceViewModel(initialTransactionsParam = initialTransactions) {
  const [transacoes, setTransacoes] = useState(initialTransactionsParam)
  const [mensagem, setMensagem] = useState('')

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
  const adicionarTransacao = useCallback((descricao, tipo, valor, categoria) => {
    const { válido, erros } = validarTransacao(descricao, tipo, valor, categoria)
    if (!válido) {
      setMensagem(erros.join(' '))
      return false
    }
    const nova = {
      id: gerarIdUnico(),
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
  const removerTransacao = useCallback((id) => {
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
    const worksheet = XLSX.utils.json_to_sheet(
      transacoes.map(t => ({
        Data: t.data,
        Descrição: t.descricao,
        Categoria: t.categoria,
        Tipo: t.tipo,
        Valor: t.valor,
      }))
    )

    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Movimentações')

    // Aba Resumo
    const resumo = [
      { Descrição: 'Entradas', Valor: totalEntradaCalc },
      { Descrição: 'Saídas', Valor: totalSaidaCalc },
      { Descrição: 'Saldo', Valor: saldoCalc },
    ]
    const resumoWs = XLSX.utils.json_to_sheet(resumo)
    XLSX.utils.book_append_sheet(workbook, resumoWs, 'Resumo')

    // Gerar e disparar download
    XLSX.writeFile(workbook, 'fluxa-movimentacoes.xlsx')
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