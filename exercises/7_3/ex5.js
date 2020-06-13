const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
let expected;

//Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
expected = myRemoveWithoutCopy([1, 2, 3, 4], 3);
assert.deepEqual(expected, [1,2,4], 'Nao removeu corretamente.');

//Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
expected = myRemoveWithoutCopy([1, 2, 3, 4], 3);
assert.notDeepEqual(expected, [1, 2, 3, 4], 'retornou [1, 2, 3, 4]');

/* Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro
 sofreu alterações */

 assert.deepEqual(myRemoveWithoutCopy([1, 2, 3, 4]), [1, 2, 3, 4], 'está trocando o valor passado por referencia');


//Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
expected = myRemoveWithoutCopy([1, 2, 3, 4], 5);
assert.deepEqual(expected, [1, 2, 3, 4], 'A funcao removeu algo que não deveria.');