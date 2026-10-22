/** ViewModel (MVVM): estado, persistência, ações e exportação. */
import { useCallback, useEffect, useMemo, useState } from 'react'
import * as XLSX from 'xlsx'
import {
  calcularSaldo, totalEntradas, totalSaidas, validarTransacao,
  validarTransacoesSalvas, gerarId, dataLocal
} from '../models/financeModel.js'
import { mockTransactions } from '../models/mockTransactions.js'

const STORAGE_KEY = 'fluxa-transactions'
const exemplos = () => mockTransactions.map(t => ({ ...t }))

function carregarTransacoes() {
  try {
    const texto = window.localStorage.getItem(STORAGE_KEY)
    if (texto === null) return exemplos()
    const dados = JSON.parse(texto)
    return validarTransacoesSalvas(dados) ? dados : exemplos()
  } catch {
    return exemplos()
  }
}

export function useFinanceViewModel() {
  const [transacoes, setTransacoes] = useState(carregarTransacoes)
  const [mensagem, setMensagem] = useState('')
  const [aviso, setAviso] = useState('')

  const totais = useMemo(() => ({
    totalEntradas: totalEntradas(transacoes),
    totalSaidas: totalSaidas(transacoes),
    saldo: calcularSaldo(transacoes)
  }), [transacoes])

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(transacoes))
      setAviso('')
    } catch {
      setAviso('Seu navegador bloqueou o armazenamento local. Os registros podem não persistir após atualizar a página.')
    }
  }, [transacoes])

  const adicionarTransacao = useCallback((descricao, tipo, valor, categoria) => {
    const resultado = validarTransacao(descricao, tipo, valor, categoria)
    if (!resultado.valido) {
      setMensagem(resultado.erros.join(' '))
      return false
    }
    setTransacoes(anteriores => [...anteriores, {
      id: gerarId(),
      descricao: descricao.trim(), categoria: categoria.trim(), tipo, valor,
      data: dataLocal()
    }])
    setMensagem('Movimentação adicionada com sucesso!')
    return true
  }, [])

  const removerTransacao = useCallback(id => {
    setTransacoes(anteriores => anteriores.filter(t => t.id !== id))
    setMensagem('Movimentação removida.')
  }, [])

  const reiniciarDados = useCallback(() => {
    setTransacoes(exemplos())
    setMensagem('Dados fictícios restaurados.')
  }, [])

  const exportarExcel = useCallback(() => {
    try {
      const planilha = XLSX.utils.json_to_sheet(transacoes.map(t => ({
        Data: t.data, Descrição: t.descricao, Categoria: t.categoria,
        Tipo: t.tipo === 'entrada' ? 'Entrada' : 'Saída', Valor: t.valor
      })), { header: ['Data', 'Descrição', 'Categoria', 'Tipo', 'Valor'] })
      planilha['!cols'] = [{ wch: 14 }, { wch: 32 }, { wch: 20 }, { wch: 12 }, { wch: 16 }]
      for (let linha = 2; linha <= transacoes.length + 1; linha++) {
        const celula = planilha[`E${linha}`]
        if (celula) celula.z = '"R$" #,##0.00'
      }
      const resumo = XLSX.utils.json_to_sheet([
        { Indicador: 'Entradas', Valor: totais.totalEntradas },
        { Indicador: 'Saídas', Valor: totais.totalSaidas },
        { Indicador: 'Saldo', Valor: totais.saldo }
      ])
      resumo['!cols'] = [{ wch: 20 }, { wch: 18 }]
      for (let linha = 2; linha <= 4; linha++) resumo[`B${linha}`].z = '"R$" #,##0.00'
      const pasta = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(pasta, planilha, 'Movimentações')
      XLSX.utils.book_append_sheet(pasta, resumo, 'Resumo')
      XLSX.writeFile(pasta, 'fluxa-movimentacoes.xlsx')
      setMensagem('Planilha Excel gerada com sucesso!')
    } catch (error) {
      console.error('Erro ao exportar planilha:', error)
      setMensagem('Não foi possível exportar o Excel. Tente novamente.')
    }
  }, [transacoes, totais])

  return {
    state: { transacoes, ...totais },
    status: { mensagem, aviso },
    actions: { adicionarTransacao, removerTransacao, reiniciarDados, exportarExcel }
  }
}
