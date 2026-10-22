import { useState } from 'react'
import styles from './Faq.module.css'
const perguntas = [
  ['Preciso criar uma conta para usar?', 'Não. O Fluxa é um protótipo acadêmico, e a demonstração funciona no seu navegador, sem cadastro.'],
  ['Onde ficam os dados que eu registrar?', 'Os registros ficam no localStorage do navegador usado. Eles não são enviados a servidores e podem ser apagados caso você limpe os dados do navegador.'],
  ['Como funciona a exportação para Excel?', 'Na demonstração, clique em Exportar Excel. Um arquivo .xlsx será criado com as abas Movimentações e Resumo.'],
  ['O modo escuro fica salvo?', 'Sim, se o navegador permitir o armazenamento local. A preferência será aplicada quando você abrir o Fluxa novamente.'],
  ['Os planos e depoimentos são reais?', 'Não. Os planos, preços e depoimentos são fictícios, criados para cumprir a apresentação da atividade. Não existe contratação nem cobrança.']
]
export default function Faq() {
  const [aberto, setAberto] = useState(null)
  return <section id="faq" className={`section ${styles.section}`}><div className={`container ${styles.layout}`}><div><span className="eyebrow">Dúvidas frequentes</span><h2 className="sectionTitle">Perguntas? Temos respostas.</h2><p className="sectionLead">Entenda como funciona a demonstração do Fluxa.</p></div><div className={styles.items}>{perguntas.map(([pergunta, resposta], i) => <div key={pergunta} className={styles.item}><h3><button type="button" aria-expanded={aberto === i} aria-controls={`resposta-${i}`} onClick={() => setAberto(anterior => anterior === i ? null : i)}>{pergunta}<span aria-hidden="true">{aberto === i ? '−' : '+'}</span></button></h3><div id={`resposta-${i}`} hidden={aberto !== i} className={styles.answer}><p>{resposta}</p></div></div>)}</div></div></section>
}
