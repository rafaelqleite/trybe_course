const assert = require('assert');

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

// implemente seus testes aqui

let expected = mySum([1, 2, 3, 4]);

assert.equal(expected, 10, 'A funcao soma nao esta funcionando corretamente');

expected = mySum([1, -2, -3, 4]);

assert(expected === 0, 'A funcao nao soma corretamente');