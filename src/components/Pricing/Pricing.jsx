/*
 * Pricing.jsx - Oferta e preço.
 * Apresenta plano Demonstrativo Grátis (R$ 0) e plano Pro conceitual
   (R$ 12,90/mês). Identifica que não há compra real.
*/

import styles from './Pricing.module.css'

export default function Pricing() {
  return (
    <section id="preco" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles["heading-secondary"]}>Planos</h2>
        <div className={styles.plans}>
          <div className={styles.plan}>
            <div className={styles.planHeader}>
              <span className={styles.planName}>Plano Grátis</span>
              <span className={styles.planTag}>Grátis</span>
            </div>
            <p className={styles.planPrice}>R$ 0,00 <span>/mês</span></p>
            <ul className={styles.planList}>
              <li>Registrar movimentações ilimitadas</li>
              <li>Visualizar saldo e resumo</li>
              <li>Exportar para Excel (.xlsx)</li>
            </ul>
            <button className={styles.btn} disabled>
              Contratar
            </button>
          </div>
          <div className={styles["plan-pro"]}>
            <div className={styles.planHeader}>
              <span className={styles.planName}>Plano Pro</span>
              <span className={styles.planTag}>Conceitual</span>
            </div>
            <p className={styles.planPrice}>R$ 12,90 <span>/mês</span></p>
            <ul className={styles.planList}>
              <li>Tudo do plano Grátis</li>
              <li>Categorias personalizadas</li>
              <li>Backup automático na nuvem</li>
              <li>Suporte prioritário</li>
            </ul>
            <button className={styles.btn}>Começar agora</button>
            <p className={styles.planNote}>
              Identificação apenas ilustrativa. Não há compra real ou processamento
              de pagamento.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}