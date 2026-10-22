import styles from './Header.module.css'

export default function Header({ theme, alternar, onTestar }) {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#inicio" className={styles.brand} aria-label="Fluxa — início">
          <span className={styles.logo} aria-hidden="true">↗</span><span>fluxa<span className={styles.dot}>.</span></span>
        </a>
        <nav className={styles.nav} aria-label="Navegação principal">
          <a href="#beneficios">Benefícios</a><a href="#produto">Produto</a><a href="#como">Como funciona</a><a href="#precos">Planos</a><a href="#faq">FAQ</a>
        </nav>
        <div className={styles.actions}>
          <button type="button" className={styles.themeButton} onClick={alternar} aria-label={`Ativar modo ${theme === 'dark' ? 'claro' : 'escuro'}`} title="Alternar tema">
            <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
          </button>
          <button type="button" onClick={onTestar} className={`btnPrimary ${styles.cta}`}>Testar grátis <span aria-hidden="true">↗</span></button>
        </div>
      </div>
    </header>
  )
}
