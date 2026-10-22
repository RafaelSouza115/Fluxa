/*
 * Testimonials.jsx - Prova social com depoimentos.
 * Apresenta 2 ou 3 depoimentos explicitamente identificados como fictícios,
 * pois é um exercício acadêmico. Cada depoimento tem o nome, perfil e
 * texto comentado.
 */

import styles from './Testimonials.module.css'

export default function Testimonials() {
  return (
    <section id="depoimentos" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading-secondary}>Prova Social</h2>
        <div className={styles.grid}>
          <article className={styles.testimonial}>
            <p className={styles.texto}>
              "O Fluxa me ajudou a organizar minhas finanças estudantis de uma
              forma tão simples que eu mal noto mais a diferença no meu dia a
              dia. O visual do saldo me motiva a economizar mais."
            </p>
            <div className={styles.author}>
              <span className={styles.nome}>Maria S., estudante</span>
              <span className={styles.ficticio}>(fictício)</span>
            </div>
          </article>
          <article className={styles.testimonial}>
            <p className={styles.texto}>
              "Achei muito prático exportar minhas movimentações para Excel. Consegu
              usar o relatório no trabalho e nos estudos sem reentrar os dados."
            </p>
            <div className={styles.author}>
              <span className={styles.nome}>João P., profissional</span>
              <span className={styles.ficticio}>(fictício)</span>
            </div>
          </article>
          <article className={styles.testimonial}>
            <p className={styles.texto}>
              "O dashboard é limpo e intuitivo. Conseguo ver minhas entradas e
              saídas em um olhar só, sem complicação nenhuma."
            </p>
            <div className={styles.author}>
              <span className={styles.nome}>Ana T., freelancer</span>
              <span className={styles.ficticio}>(fictício)</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}