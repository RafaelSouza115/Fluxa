/*
 * Hero.jsx - Seção hero da landing page.
 * Apresenta o nome do produto, proposta de valor, frase de destaque,
 * descrição breve, CTA "Testar demonstração" e prévia visual do produto.
 * Recebe a função setMostrarDemo do pai para abrir a demonstração.
 */

import styles from './Hero.module.css'

export default function Hero({ onMostrarDemo }) {
  return (
    <section id="hero" className={`${styles.section} ${styles['section-height']}`}>
      <div className={styles.container}>
        <h1 className={styles.heading-primary}>
          Fluxa - Suas finanças no ritmo da sua vida
        </h1>
        <p className={styles.heading-secondary}>
          Organize suas entradas, saídas e saldo em um só lugar
        </p>
        <p className={styles.text-lead}>
          Controle suas movimentações financeiras, visualize seu resumo
          diário e exporte seus dados para planilha Excel com poucos cliques.
        </p>
        <div>
          <button
            className={styles.btn}
            onClick={onMostrarDemo}
            aria-label="Acessar demonstração do Fluxa"
          >
            Testar demonstração
          </button>
        </div>
      </div>
    </section>
  )
}