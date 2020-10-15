const assert = require('assert');

function myIndexOf(arr, item) {
  let searchedIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (item === arr[i]) {
      searchedIndex = i;
    }
  }
  return searchedIndex;
}

// implemente seus testes aqui
let expected = myIndexOf([1, 2, 3, 4], 3);

assert.equal(expected, 2, 'A funcao nao pega o indice corretamente');

expected = myIndexOf([1, 2, 3, 4], 5);

assert.equal(expected, -1, 'A funcao nao pega o indice corretamente');


