import styles from './Testimonials.module.css'
const testemunhos = [
  { quote: 'Finalmente consigo enxergar quanto estou gastando sem abrir várias planilhas.', person: 'Ana M.', info: 'Estudante — depoimento fictício' },
  { quote: 'A ideia de registrar e já ter o resumo pronto economizaria muito tempo na minha rotina.', person: 'Pedro L.', info: 'Freelancer — depoimento fictício' },
  { quote: 'O botão de exportação é o detalhe que faria diferença na hora de organizar meus relatórios.', person: 'Mariana R.', info: 'Universitária — depoimento fictício' }
]
export default function Testimonials() {
  return <section id="depoimentos" className={`section ${styles.section}`}><div className="container"><span className="eyebrow">Prova social ilustrativa</span><h2 className="sectionTitle">Uma ideia que faz sentido no dia a dia.</h2><p className="sectionLead">Avaliações criadas para demonstrar a apresentação do produto. Não representam usuários reais.</p>
    <div className={styles.grid}>{testemunhos.map((t, i) => <article key={t.person} className={styles.card}><div className={styles.stars} aria-label="5 estrelas fictícias">★★★★★</div><blockquote>“{t.quote}”</blockquote><div className={styles.person}><span aria-hidden="true">{['AM','PL','MR'][i]}</span><div><strong>{t.person}</strong><small>{t.info}</small></div></div></article>)}</div>
  </div></section>
}
