/*
 * Benefits.jsx - Benefícios e diferenciais.
 * Apresenta 4 cards com: organização, visualização de saldo,
 * simplicidade e exportação. Cada card tem ícone SVG criado em CSS
 * e um título/descrição.
*/

import styles from './Benefits.module.css'

export default function Benefits() {
  return (
    <section id="beneficios" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading-secondary}>Benefícios</h2>
        <div className={styles.grid}>
          <article className={styles.card}>
            <div className={styles.icon} />
            <h3>Organização</h3>
            <p className={styles.desc}>
              Registre todas as suas movimentações em categorias personalizadas
              e tenha o controle total das suas finanças.
            </p>
          </article>
          <article className={styles.card}>
            <div className={styles.icon} />
            <h3>Visualização de saldo</h3>
            <p className={styles.desc}>
              Acompanhe seu saldo em tempo real, com diferenciação visual de
                entradas e saídas.
            </p>
          </article>
          <article className={styles.card}>
            <div className={styles.icon} />
            <h3>Simplicidade</h3>
            <p className={styles.desc}>
              Interface limpa e intuitiva, sem complexidade desnecessária. Focar
              no que realmente importa para o seu dia a dia.
            </p>
          </article>
          <article className={styles.card}>
            <div className={styles.icon} />
            <h3>Exportação</h3>
            <p className={styles.desc}>
              Gere um arquivo Excel (.xlsx) real com suas movimentações e resumo
              financeiro para usar como preferir.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}