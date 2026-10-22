import styles from './HowItWorks.module.css'
const etapas = [
  { numero: '01', icon: '✎', titulo: 'Registre suas movimentações', texto: 'Adicione uma entrada ou saída com descrição, categoria e valor.' },
  { numero: '02', icon: '◫', titulo: 'Acompanhe seu saldo', texto: 'Veja os indicadores e todas as movimentações atualizados na hora.' },
  { numero: '03', icon: '⇩', titulo: 'Exporte quando quiser', texto: 'Baixe uma planilha Excel com seus registros e um resumo financeiro.' }
]
export default function HowItWorks({ onMostrarDemo }) {
  return <section id="como" className="section"><div className="container">
    <div className={styles.center}><span className="eyebrow">É simples começar</span><h2 className="sectionTitle">Três passos. Mais controle.</h2><p className="sectionLead">Da primeira movimentação ao relatório, sem cadastro e sem complicação.</p></div>
    <div className={styles.steps}>{etapas.map(item => <article className={styles.step} key={item.numero}><span className={styles.number}>{item.numero}</span><div className={styles.icon} aria-hidden="true">{item.icon}</div><h3>{item.titulo}</h3><p>{item.texto}</p></article>)}</div>
    <div className={styles.action}><button type="button" className="btnPrimary" onClick={onMostrarDemo}>Experimentar agora ↗</button></div>
  </div></section>
}
