import styles from './Hero.module.css'

export default function Hero({ onMostrarDemo }) {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.content}>
          <div className={styles.badge}><span className={styles.pulse} /> CONTROLE FINANCEIRO SEM COMPLICAÇÃO</div>
          <h1>Seu dinheiro, <span>sob controle.</span> Sua vida, no seu ritmo.</h1>
          <p>Entradas, saídas e saldo em um só lugar. Organize suas finanças com leveza e exporte tudo para Excel quando precisar.</p>
          <div className={styles.actions}>
            <button type="button" className="btnPrimary" onClick={onMostrarDemo}>Testar demonstração <span aria-hidden="true">↗</span></button>
            <a href="#como" className="btnSecondary">Como funciona <span aria-hidden="true">↓</span></a>
          </div>
          <div className={styles.trust}><span className={styles.check}>✓</span> Sem cadastro <span className={styles.separator}>·</span> 100% no navegador <span className={styles.separator}>·</span> Projeto acadêmico</div>
        </div>
        <div className={styles.art} aria-label="Representação do painel financeiro Fluxa">
          <div className={styles.glow} />
          <div className={styles.panel}>
            <div className={styles.panelHeading}><span className={styles.panelLogo}>↗</span><strong>Visão geral</strong><span className={styles.panelDots}>•••</span></div>
            <p className={styles.small}>Saldo disponível</p><p className={styles.balance}>R$ 4.184,50</p>
            <div className={styles.chart} aria-hidden="true"><span style={{height:'38%'}}/><span style={{height:'57%'}}/><span style={{height:'45%'}}/><span style={{height:'77%'}}/><span style={{height:'63%'}}/><span style={{height:'95%'}}/><span style={{height:'80%'}}/></div>
            <div className={styles.panelGrid}><div><span>↗ Entradas</span><strong>R$ 4.350,00</strong></div><div><span>↘ Saídas</span><strong>R$ 165,50</strong></div></div>
          </div>
          <div className={styles.float}><span>✓</span><div><strong>Tudo organizado!</strong><small>Suas finanças em dia</small></div></div>
        </div>
      </div>
    </section>
  )
}
