/*
 * HowItWorks.jsx - Como funciona: 3 passos.
 * Apresenta três etapas do produto com ícones e descrições.
*/

import styles from './HowItWorks.module.css'

export default function HowItWorks() {
  return (
    <section id="como" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading–secondary}>Como funciona</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.number}>1</div>
          </div>
          <div className={styles.line} />
          <div className={styles.step}>
            <div className={styles.number}>2</div>
          </div>
          <div className={styles.line} />
          <div className={styles.step}>
            <div className={styles.number}>3</div>
          </div>
        </div>
      </div>
    </section>
  )
}