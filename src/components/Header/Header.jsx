/*
 * Header.jsx - Componente de cabeçalho.
 * Contém logotipo textual, navegação entre seções por âncoras e
 * botão de alternância de tema.
 * Recebe tema e funções de alternância do ViewModel.
*/

import styles from './Header.module.css'

export default function Header({ theme, alternar }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span>Fluxa</span>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><a href="#hero" className={styles.link}>Início</a></li>
          <li><a href="#beneficios" className={styles.link}>Benefícios</a></li>
          <li><a href="#produto" className={styles.link}>Produto</a></li>
          <li><a href="#como" className={styles.link}>Como funciona</a></li>
          <li><a href="#depoimentos" className={styles.link}>Depoimentos</a></li>
          <li><a href="#faq" className={styles.link}>FAQ</a></li>
        </ul>
      </nav>
      <div className={styles.actions}>
        <button
          className={styles.btn}
          onClick={alternar}
          aria-label="Alternar modo tema"
        >
          {theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}
        </button>
      </div>
    </header>
  )
}