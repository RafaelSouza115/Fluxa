import styles from './ProductPreview.module.css'
import { formatarReal } from '../../models/financeModel.js'
const registros = [
  { nome: 'Salário mensal', categoria: 'Remuneração', valor: 3500, tipo: 'entrada' },
  { nome: 'Supermercado', categoria: 'Alimentação', valor: 120, tipo: 'saida' },
  { nome: 'Freelance - Design', categoria: 'Rendimentos', valor: 850, tipo: 'entrada' },
  { nome: 'Lanchonete', categoria: 'Alimentação', valor: 45.5, tipo: 'saida' }
]
export default function ProductPreview() {
  return <section id="produto" className={`section ${styles.section}`}><div className="container">
    <div className={styles.heading}><div><span className="eyebrow">Visão do produto</span><h2 className="sectionTitle">Visualize o que realmente importa.</h2><p className="sectionLead">Veja como as informações ficam organizadas no seu painel. Valores fictícios para demonstração.</p></div><span className="tag">PRÉVIA DO PAINEL</span></div>
    <div className={styles.preview}>
      <aside className={styles.sidebar}><div className={styles.brand}>↗ <strong>fluxa.</strong></div><span className={styles.active}>▦ &nbsp; Visão geral</span><span>⇄ &nbsp; Movimentações</span><span>▥ &nbsp; Relatórios</span><span>⚙ &nbsp; Configurações</span><small>Interface ilustrativa</small></aside>
      <div className={styles.main}><div className={styles.top}><div><strong>Olá! 👋</strong><p>Acompanhe seu resumo financeiro.</p></div><span className="tag">Outubro de 2026</span></div>
        <div className={styles.kpis}><div><span>↗ Entradas</span><strong>{formatarReal(4350)}</strong></div><div><span>↘ Saídas</span><strong>{formatarReal(195.5)}</strong></div><div className={styles.highlight}><span>◉ Saldo</span><strong>{formatarReal(4154.5)}</strong></div></div>
        <div className={styles.lower}><div className={styles.chartCard}><strong>Resumo de movimentações</strong><p>Distribuição ilustrativa por período</p><div className={styles.chart} aria-hidden="true">{[45,68,34,76,58,93,74,59].map((altura,i) => <span key={i} style={{ height: `${altura}%` }} />)}</div><div className={styles.days}><span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sáb</span><span>Dom</span><span>—</span></div></div>
          <div className={styles.listCard}><strong>Últimas movimentações</strong>{registros.map(r => <div className={styles.transaction} key={r.nome}><span className={styles.dot} aria-hidden="true">{r.tipo === 'entrada' ? '↗' : '↘'}</span><div><strong>{r.nome}</strong><small>{r.categoria}</small></div><b className={r.tipo === 'entrada' ? styles.positive : styles.negative}>{r.tipo === 'entrada' ? '+' : '-'} {formatarReal(r.valor)}</b></div>)}</div></div>
      </div>
    </div>
  </div></section>
}
