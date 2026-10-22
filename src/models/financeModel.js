/** Model (MVVM): regras financeiras puras, sem React ou acesso ao DOM. */
export function totalEntradas(transacoes) {
  return transacoes.filter(t => t.tipo === 'entrada').reduce((soma, t) => soma + t.valor, 0)
}

export function totalSaidas(transacoes) {
  return transacoes.filter(t => t.tipo === 'saida').reduce((soma, t) => soma + t.valor, 0)
}

export function calcularSaldo(transacoes) {
  return totalEntradas(transacoes) - totalSaidas(transacoes)
}

export function formatarReal(valor) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)
}

export function validarTransacao(descricao, tipo, valor, categoria) {
  const erros = []
  if (typeof descricao !== 'string' || !descricao.trim()) erros.push('Informe a descrição.')
  if (!['entrada', 'saida'].includes(tipo)) erros.push('Escolha entrada ou saída.')
  if (typeof categoria !== 'string' || !categoria.trim()) erros.push('Informe a categoria.')
  if (typeof valor !== 'number' || !Number.isFinite(valor) || valor <= 0) erros.push('O valor deve ser maior que zero.')
  return { valido: erros.length === 0, erros }
}

export function validarTransacoesSalvas(dados) {
  return Array.isArray(dados) && dados.every(t =>
    t && typeof t.id === 'string' && typeof t.data === 'string' &&
    typeof t.descricao === 'string' && typeof t.categoria === 'string' &&
    (t.tipo === 'entrada' || t.tipo === 'saida') &&
    Number.isFinite(t.valor) && t.valor > 0
  )
}

export function gerarId() {
  if (typeof globalThis.crypto?.randomUUID === 'function') return `tx-${globalThis.crypto.randomUUID()}`
  return `tx-${Date.now()}-${Math.random().toString(36).slice(2)}`
}

export function dataLocal() {
  const hoje = new Date()
  const ano = hoje.getFullYear()
  const mes = String(hoje.getMonth() + 1).padStart(2, '0')
  const dia = String(hoje.getDate()).padStart(2, '0')
  return `${ano}-${mes}-${dia}`
}
