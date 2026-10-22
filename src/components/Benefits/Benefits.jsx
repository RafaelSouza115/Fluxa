import styles from './Benefits.module.css'
const benefits = [
  { icon: '▦', title: 'Tudo em um só lugar', description: 'Registre entradas e saídas sem se perder entre anotações e planilhas.' },
  { icon: '◉', title: 'Seu saldo em tempo real', description: 'Entenda quanto entrou, quanto saiu e quanto ainda tem disponível.' },
  { icon: '✧', title: 'Simples de verdade', description: 'Uma experiência intuitiva para deixar a organização financeira mais leve.' },
  { icon: '⇩', title: 'Excel em um clique', description: 'Exporte suas movimentações e o resumo financeiro para uma planilha .xlsx.' }
]
export default function Benefits() {
  return <section id="beneficios" className="section"><div className="container">
    <span className="eyebrow">Vantagens do Fluxa</span><h2 className="sectionTitle">Menos preocupação. Mais clareza.</h2>
    <p className="sectionLead">Uma forma fácil de acompanhar seu dinheiro sem perder tempo com ferramentas complicadas.</p>
    <div className={styles.grid}>{benefits.map(item => <article className={styles.item} key={item.title}>
      <div className={styles.icon} aria-hidden="true">{item.icon}</div><h3>{item.title}</h3><p>{item.description}</p>
    </article>)}</div>
  </div></section>
}
