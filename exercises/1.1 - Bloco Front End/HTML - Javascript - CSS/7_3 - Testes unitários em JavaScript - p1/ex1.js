const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

let expected = sum(4, 5);
assert.equal(expected, 9, 'Está fazendo a soma errado!');

expected = sum(0, 0);
assert.equal(expected, 0, 'Está fazendo a soma de zeros errado!');

expected = sum(4, "5");
assert.throws(() => { sum(4, "5"); }, /^Error: parameters must be numbers$/);