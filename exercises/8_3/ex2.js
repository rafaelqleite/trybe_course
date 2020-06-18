const assert = require('assert')
//Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. Ou seja:

//Dica: use parâmetro rest.

// escreva sum abaixo
const sum = (...args) => args.reduce((acc, iterando) => acc + iterando,0);

assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)

