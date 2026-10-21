/*
 * Footer.jsx - Rodapé da landing page.
 * Navegação e indicação de projeto acadêmico fictício.
*/

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerLeft}>
          <span>Fluxa</span>
          <p className={styles.desc}>
            Organize suas finanças no ritmo da sua vida. Projeto acadêmico
            fictício para atividade de sócio.
          </p>
        </div>
        <nav className={styles.footerNav}>
          <ul>
            <li><a href="#hero">Início</a></li>
            <li><a href="#beneficios">Benefícios</a></li>
            <li><a href="#produto">Produto</a></li>
            <li><a href="#como">Como funciona</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </nav>
        <div className={styles.footerRight}>
          <p className={styles.copyright}>
            2026 Fluxa - Projeto Acadêmico Fictício
          </p>
        </div>
      </div>
    </footer>
  )
}