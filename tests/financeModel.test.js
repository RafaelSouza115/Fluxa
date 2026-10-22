import test from 'node:test'
import assert from 'node:assert/strict'
import {
  calcularSaldo, totalEntradas, totalSaidas, validarTransacao, formatarReal,
  validarTransacoesSalvas, gerarId
} from '../src/models/financeModel.js'
import { mockTransactions } from '../src/models/mockTransactions.js'

test('totais das movimentações fictícias', () => {
  assert.equal(totalEntradas(mockTransactions), 4350)
  assert.equal(totalSaidas(mockTransactions), 195.5)
  assert.equal(calcularSaldo(mockTransactions), 4154.5)
})
test('total vazio retorna zero', () => {
  assert.equal(calcularSaldo([]), 0)
  assert.equal(totalEntradas([]), 0)
  assert.equal(totalSaidas([]), 0)
})
test('movimentação válida é aceita', () => {
  assert.equal(validarTransacao('Salário', 'entrada', 100, 'Remuneração').valido, true)
})
test('campos vazios, zero, tipo inválido e números não finitos são rejeitados', () => {
  for (const valor of [0, -5, NaN, Infinity]) assert.equal(validarTransacao('X', 'saida', valor, 'Y').valido, false)
  assert.equal(validarTransacao(' ', 'saida', 50, 'Y').valido, false)
  assert.equal(validarTransacao('X', 'entrada', 50, ' ').valido, false)
  assert.equal(validarTransacao('X', 'outro', 50, 'Y').valido, false)
})
test('formatação monetária em reais', () => {
  assert.match(formatarReal(4154.5), /4\.154,50/)
})
test('validação de dados recuperados do armazenamento', () => {
  assert.equal(validarTransacoesSalvas(mockTransactions), true)
  assert.equal(validarTransacoesSalvas([]), true)
  assert.equal(validarTransacoesSalvas([{ tipo: 'saida' }]), false)
  assert.equal(validarTransacoesSalvas({}), false)
})
test('IDs novos são únicos e não colidem com mocks', () => {
  const ids = new Set(Array.from({ length: 100 }, () => gerarId()))
  assert.equal(ids.size, 100)
  for (const registro of mockTransactions) assert.equal(ids.has(registro.id), false)
})
