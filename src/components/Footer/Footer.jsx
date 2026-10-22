import styles from './Footer.module.css'
export default function Footer({ onTestar }) {
  return <footer className={styles.footer}><div className={`container ${styles.top}`}><div><a className={styles.logo} href="#inicio">↗ fluxa.</a><p>Suas finanças no ritmo da sua vida.</p><small>Protótipo acadêmico fictício. Não é um serviço bancário.</small></div><div className={styles.links}><a href="#inicio">Início</a><a href="#beneficios">Benefícios</a><a href="#produto">Produto</a><a href="#faq">FAQ</a></div><button type="button" className="btnPrimary" onClick={onTestar}>Experimentar grátis ↗</button></div><div className={`container ${styles.bottom}`}><span>© 2026 Fluxa — Projeto acadêmico</span><span>Feito em React + CSS Modules · MVVM</span></div></footer>
}
