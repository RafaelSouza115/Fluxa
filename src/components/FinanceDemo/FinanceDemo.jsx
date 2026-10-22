import { useState } from 'react'
import { useFinanceViewModel } from '../../viewmodels/useFinanceViewModel.js'
import { formatarReal } from '../../models/financeModel.js'
import styles from './FinanceDemo.module.css'

/** View: formulário e tabela. Regras financeiras ficam em Model e ViewModel. */
export default function FinanceDemo({ onFechar }) {
  const { state, status, actions } = useFinanceViewModel()
  const { transacoes, totalEntradas, totalSaidas, saldo } = state
  const { mensagem, aviso } = status
  const { adicionarTransacao, removerTransacao, reiniciarDados, exportarExcel } = actions

  const [descricao, setDescricao] = useState('')
  const [categoria, setCategoria] = useState('')
  const [tipo, setTipo] = useState('entrada')
  const [valor, setValor] = useState('')

  function enviar(evento) {
    evento.preventDefault()
    const numValor = Number(valor)
    if (adicionarTransacao(descricao, tipo, numValor, categoria)) {
      setDescricao('')
      setCategoria('')
      setValor('')
      setTipo('entrada')
    }
  }

  return (
    <section className={`section ${styles.section}`} aria-labelledby="demo-title">
      <div className="container">
        <div className={styles.top}>
          <div><span className="eyebrow">Demonstração interativa</span><h2 className="sectionTitle" id="demo-title">Sua vez de experimentar o Fluxa.</h2><p className="sectionLead">Adicione uma movimentação, veja os totais mudarem e exporte o Excel. Tudo aqui acontece no navegador.</p></div>
          <button type="button" className={`btnSecondary ${styles.close}`} onClick={onFechar} aria-label="Fechar demonstração">Fechar ✕</button>
        </div>
        <div className={styles.demoGrid}>
          <div className={styles.panel}>
            <h3>Nova movimentação</h3><p className={styles.sub}>Registre uma entrada ou saída financeira.</p>
            <form onSubmit={enviar} className={styles.form}>
              <fieldset className={styles.choice}><legend>Tipo de movimentação</legend><label className={tipo === 'entrada' ? styles.selected : ''}><input type="radio" name="tipo" value="entrada" checked={tipo === 'entrada'} onChange={() => setTipo('entrada')} /> ↗ Entrada</label><label className={tipo === 'saida' ? styles.selected : ''}><input type="radio" name="tipo" value="saida" checked={tipo === 'saida'} onChange={() => setTipo('saida')} /> ↘ Saída</label></fieldset>
              <label htmlFor="descricao">Descrição</label><input id="descricao" name="descricao" type="text" maxLength={100} placeholder="Ex.: Mercado" required value={descricao} onChange={e => setDescricao(e.target.value)} />
              <label htmlFor="categoria">Categoria</label><input id="categoria" name="categoria" type="text" maxLength={60} placeholder="Ex.: Alimentação" required value={categoria} onChange={e => setCategoria(e.target.value)} />
              <label htmlFor="valor">Valor (R$)</label><input id="valor" name="valor" type="number" min="0.01" step="0.01" placeholder="0.00" required value={valor} onChange={e => setValor(e.target.value)} />
              <button type="submit" className="btnPrimary">+ Adicionar movimentação</button>
            </form>
            {mensagem && <p role="status" aria-live="polite" className={styles.message}>{mensagem}</p>}
            {aviso && <p role="alert" className={styles.warning}>{aviso}</p>}
          </div>
          <div className={styles.right}>
            <div className={styles.kpis}>
              <div><span>↗ Entradas</span><strong>{formatarReal(totalEntradas)}</strong></div>
              <div><span>↘ Saídas</span><strong>{formatarReal(totalSaidas)}</strong></div>
              <div className={styles.balance}><span>◉ Saldo</span><strong>{formatarReal(saldo)}</strong></div>
            </div>
            <div className={styles.listPanel}>
              <div className={styles.listHeading}><h3>Suas movimentações</h3><span>{transacoes.length} registro(s)</span></div>
              {transacoes.length === 0 ? <p className={styles.empty}>Nenhuma movimentação. Use o formulário para adicionar uma.</p> : <div className={styles.records} role="list" aria-label="Movimentações financeiras">{[...transacoes].reverse().map(t => <div className={styles.record} role="listitem" key={t.id}>
                <span className={`${styles.recordIcon} ${t.tipo === 'entrada' ? styles.income : styles.expense}`} aria-hidden="true">{t.tipo === 'entrada' ? '↗' : '↘'}</span>
                <div className={styles.recordInfo}><strong>{t.descricao}</strong><small>{t.categoria} · {t.data.split('-').reverse().join('/')}</small></div>
                <b className={t.tipo === 'entrada' ? styles.incomeText : styles.expenseText}>{t.tipo === 'entrada' ? '+' : '−'} {formatarReal(t.valor)}</b>
                <button type="button" className={styles.deleteButton} onClick={() => removerTransacao(t.id)} aria-label={`Remover movimentação ${t.descricao}`}>✕</button>
              </div>)}</div>}
              <div className={styles.bottomActions}>
                <button type="button" className="btnSecondary" onClick={reiniciarDados}>Restaurar exemplos</button>
                <button type="button" className="btnPrimary" onClick={exportarExcel}>⇩ Exportar Excel</button>
              </div>
              <p className={styles.note}>Os dados começam com exemplos fictícios e ficam salvos somente neste navegador. A exportação contém duas abas: Movimentações e Resumo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
