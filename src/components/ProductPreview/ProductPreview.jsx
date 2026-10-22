/*
 * ProductPreview.jsx - Representação do produto: mockup de dashboard.
 * Apresenta um dashboard bem apresentado indicando entradas, saídas,
 * saldo e últimas transações. Todo o conteúdo é gerado em JSX + CSS Modules,
 * sem depender de fotos externas. Inclui um gráfico simples em SVG/CSS.
*/

import styles from './ProductPreview.module.css'

export default function ProductPreview() {
  const transactionData = [
    { descricao: 'Salário', tipo: 'entrada', valor: 3500 },
    { descricao: 'Lanchonete', tipo: 'saida', valor: 45.5 },
    { descricao: 'Freelance', tipo: 'entrada', valor: 850 },
    { descricao: 'Supermercado', tipo: 'saida', valor: 120 },
  ]

  return (
    <section id="produto" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles["heading-secondary"]}>Dashboard Fluxa</h2>
        <div className={styles.dashboard}>
          <div className={styles.kpis}>
            <div className={styles.kpi}>
              <p className={styles.kpiLabel}>Entradas</p>
              <p className={styles.kpiValue}>R$ 4.350,00</p>
            </div>
            <div className={styles.kpi}>
              <p className={styles.kpiLabel}>Saídas</p>
              <p className={styles.kpiValue}>R$ 165,50</p>
            </div>
            <div className={styles.kpi}>
              <p className={styles.kpiLabel}>Saldo</p>
              <p className={styles["kpiValue-destacado"]}>R$ 4.184,50</p>
            </div>
          </div>
          <div className={styles.grafico}>
            <h3>Movimentações últimas 7 dias</h3>
            <svg className={styles.graficoSvg} width="100%" height="120" viewBox="0 0 200 120">
              <g>
                <rect x="20" y="80" width="15" height="-35"></rect>
                <rect x="50" y="60" width="15" height="-4.55"></rect>
                <rect x="80" y="95" width="15" height="-85"></rect>
                <rect x="110" y="55" width="15" height="-12"></rect>
              </g>
              <g>
                <line x1="20" y1="80" x2="20" y2="100" />
                <line x1="50" y1="60" x2="50" y2="80" />
                <line x1="80" y1="95" x2="80" y2="110" />
                <line x1="110" y1="55" x2="110" y2="70" />
              </g>
            </svg>
          </div>
        </div>
        <ul className={styles.transacoesList}>
          {transactionData.map((t, i) => (
            <li key={i} className={styles.listItem}>
              <span className={styles.desc}>
                {t.descricao} -{' '}
                <span className={styles.tipoTipo}>
                  {t.tipo === 'entrada' ? 'Entrada' : 'Saída'}
                </span>
                -{' '}
                <span className={styles.valor}>
                  R$ {t.valor.toFixed(2).replace('.', ',')}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}