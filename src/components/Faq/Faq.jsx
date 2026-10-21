/*
 * Faq.jsx - Perguntas frequenciais expansíveis.
 * Cada pergunta tem um botão de acionamento com aria-expanded e aria-controls.
   As respostas são reveladas dinamicamente. Sobre registro, dados locais,
   exportação e proposta fictícia.
*/

import React, { useState } from 'react'
import styles from './Faq.module.css'

export default function Faq() {
  const [open, setOpen] = useState(false)

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading–secondary}>Perguntas Frequentes</h2>
        <div className={styles.faq}>
          <div className={styles.faqItem}>
            <button
              className={styles.faqButton}
              aria-expanded={open}
              aria-controls="faq1"
              onClick={() => setOpen(!open)}
            >
              Como registro minhas movimentações?
            </button>
            <div id="faq1" className={styles.faqContent}>
              <p>
                Basta clicar no botão na seção de demonstração, preencher o
                formulário com descrição, tipo (entrada/saída), categoria e valor.
                As transações são salvas no seu navegador.
              </p>
            </div>
          </div>
          <div className={styles.faqItem}>
            <button
              className={styles.faqButton}
              aria-expanded={!open}
              aria-controls="faq2"
              onClick={() => setOpen(!open)}
            >
              Onde são salvos os meus dados?
            </button>
            <div id="faq2" className={styles.faqContent}>
              <p>
                As transações são salvas no localStorage do seu navegador. Isso
                significa que seus dados ficam no seu dispositivo e não são
                sincronizados com servidor ou backup na nuvem.
              </p>
            </div>
          </div>
          <div className={styles.faqItem}>
            <button
              className={styles.faqButton}
              aria-expanded={open}
              aria-controls="faq3"
              onClick={() => setOpen(!open)}
            >
              Como funciona a exportação para Excel?
            </button>
            <div id="faq3" className={styles.faqContent}>
              <p>
                Na seção de demonstração, clique no botão "Exportar Excel". O
                sistema gerará um arquivo .xlsx real no seu navegador com duas
                abas: "Movimentações" (seus registros) e "Resumo" (entradas,
                saídas e saldo).
              </p>
            </div>
          </div>
          <div className={styles.faqItem}>
            <button
              className={styles.faqButton}
              aria-expanded={!open}
              aria-controls="faq4"
              onClick={() => setOpen(!open)}
            >
              O Fluxa é um aplicativo financeiro real?
            </button>
            <div id="faq4" className={styles.faqContent}>
              <p>
                Não. O Fluxa é um produto fictício criado para um exercício
                acadêmico. Não há conexão com bancos, processamento de pagamentos
                ou dados reais. Tudo ocorre exclusivamente no seu navegador.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}