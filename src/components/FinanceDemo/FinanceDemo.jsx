/*
 * FinanceDemo.jsx - Demonstradora financeira funcional.
 * Formulário de transação, listagem, exclusão, indicadores em tempo real,
 * e botão Exportar Excel. Dados persistidos em localStorage.
 * Inicia com transações fictícias exemplos.
*/

import { useState } from 'react'
import { useFinanceViewModel } from '../../viewmodels/useFinanceViewModel'
import { useThemeViewModel } from '../../viewmodels/useThemeViewModel'
import styles from './FinanceDemo.module.css'

interface FinanceDemoProps {
  fecharDemo: () => void
  theme: string
  alternar: () => void
}

export default function FinanceDemo({ fecharDemo, theme, alternar }: FinanceDemoProps) {
  const { state, actions } = useFinanceViewModel()
  const [themeLocal, , , alternarLocal] = useThemeViewModel(theme)
  const [showExamples, setShowExamples] = useState(true)

  const { transacoes, totalEntradas, totalSaidas, saldo } = state
  const { adicionarTransacao, removerTransacao, exportarExcel, reiniciarDados } = actions
  const { mensagem } = state

  // Form state
  const [descricao, setDescricao] = useState('')
  const [tipo, setTipo] = useState<'entrada' | 'saida'>('entrada')
  const [categoria, setCategoria] = useState('')
  const [valor, setValor] = useState('')

  const handleSubmit = () => {
    const numValor = Number(valor)
    if (!descricao.trim() || !categoria.trim() || isNaN(numValor) || numValor <= 0) {
      setMensagem('Preencha todos os campos corretamente e certifique-se de que o valor seja maior que zero.')
      return
    }
    const success = adicionarTransacao(descricao, tipo, numValor, categoria)
    if (success) {
      setDescricao('')
      setCategoria('')
      setTipo('entrada')
      setValor('')
    }
  }

  const handleDelete = (id: string) => {
    removerTransacao(id)
  }

  const handleExport = () => {
    exportarExcel()
  }

  const handleReset = () => {
    reiniciarDados()
    setShowExamples(false)
    setTimeout(() => setShowExamples(true), 100)
  }

  return (
    <section id="demo" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading–secondary}>
          <span>{themeLocal === 'dark' ? 'Experimente' : 'Teste'} o Fluxa</span>
        </h2>

        {/* Status message */}
        {mensagem && (
          <p className={styles.message} role="alert">
            {mensagem}
          </p>
        )}

        {/* Formulário de transação */}
        <div className={styles.form}>
          <form>
            <div className={styles.formGroup}>
              <label htmlFor="descricao" className={styles.label}>
                Descrição
                <span className={styles.required}>*</span>
              </label>
              <input
                id="descricao"
                type="text"
                value={descricao}
                onChange={e => setDescricao(e.target.value)}
                required
                placeholder="Ex: Salário mensal"
                aria-label="Descrição da transação"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="tipo" className={styles.label}>
                Tipo
                <span className={styles.required}>*</span>
              </label>
              <div className={styles.formRadioGroup}>
                <label
                  className={styles.formRadioItem}
                  onClick={() => setTipo('entrada')}
                >
                  <input
                    type="radio"
                    name="tipo"
                    value="entrada"
                    checked={tipo === 'entrada'}
                    onChange={() => setTipo('entrada')}
                  />
                  Entrada
                </label>
                <label
                  className={styles.formRadioItem}
                  onClick={() => setTipo('saida')}
                >
                  <input
                    type="radio"
                    name="tipo"
                    value="saida"
                    checked={tipo === 'saida'}
                    onChange={() => setTipo('saida')}
                  />
                  Saída
                </label>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="categoria" className={styles.label}>
                Categoria
                <span className={styles.required}>*</span>
              </label>
              <input
                id="categoria"
                type="text"
                value={categoria}
                onChange={e => setCategoria(e.target.value)}
                required
                placeholder="Ex: Alimentação, Transporte, Remuneração"
                aria-label="Categoria da transação"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="valor" className={styles.label}>
                Valor (R$)
                <span className={styles.required}>*</span>
              </label>
              <input
                id="valor"
                type="number"
                step="0.01"
                value={valor}
                onChange={e => setValor(e.target.value)}
                required
                placeholder="0,00"
                aria-label="Valor da transação em reais"
              />
            </div>

            <button
              type="submit"
              className={styles.btn}
              onClick={handleSubmit}
              aria-label="Adicionar transação"
            >
              Adicionar movimentação
            </button>
          </form>
        </div>

        {/* Indicadores em tempo real */}
        <div className={styles.indicadores}>
          <div className={styles.indicador}>
            <p className={styles.label}>Total de Entradas</p>
            <p className={styles.valor}>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(totalEntradas)}
            </p>
          </div>
          <div className={styles.indicador}>
            <p className={styles.label}>Total de Saídas</p>
            <p className={styles.valor}>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(totalSaidas)}
            </p>
          </div>
          <div className={styles.indicador--saldo}>
            <p className={styles.label}>Saldo</p>
            <p className={styles.valor--saldo}>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(saldo)}
            </p>
          </div>
        </div>

        {/* Lista de transações */}
        <div className={styles.listaTransacoes}>
          <h3>Transações recentes</h3>
          {transacoes.length === 0 && (
            <p>Nenhuma transação ainda. Use o formulário acima para adicionar.</p>
          )}
          <ul>
            {transacoes.map((t) => (
              <li key={t.id} className={styles.listItem}>
                <span className={styles.listDesc}>
                  {t.descricao} -{' '}
                  <span className={styles.listTipo}>
                    {t.tipo === 'entrada' ? 'Ent' : 'Saída'}
                  </span>
                  -{' '}
                  <span className={styles.listValor}>
                    R{String(t.valor)
                      .split('.')
                      .reverse()
                      .join(',')}
                    </span>
                </span>
                <button
                  className={styles.btnExcluir}
                  onClick={() => handleDelete(t.id)}
                  aria-label="Excluir transação"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Ações: reset e exportar */}
        <div className={styles.acessoes}>
          <button
            className={styles.btn--secundario}
            onClick={handleReset}
            aria-label="Reiniciar dados de demonstração"
          >
            Reiniciar dados
          </button>
          <button
            className={styles.btn--secundario}
            onClick={handleExport}
            aria-label="Exportar para Excel"
          >
            Exportar Excel
          </button>
        </div>
      </div>
    </section>
  )
}