const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
let expected = myRemove([1, 2, 3, 4], 3);

assert.deepEqual(expected, [1, 2, 4], 'nao esta removendo corretamente');

assert.notDeepEqual(expected, [1, 2, 3, 4], 'Se for igual essa msg aparece');

//Verifique se o array passado por parâmetro não sofreu alterações
assert.deepEqual(myRemove([1, 2, 3, 4]), [1, 2, 3, 4], 'está trocando o valor passado por referencia');

//Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
expected = myRemove([1, 2, 3, 4], 5)
assert.deepStrictEqual(expected, [1, 2, 3, 4], 'Verifica se deixou de remover');