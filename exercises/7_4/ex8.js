function secondThirdSmallest(array) {
  let results = []
  array.sort(function (x, y) {
      return x - y;
  });

/*   a função de comparação dentro do sort compara se x-y é um número negativo
  se for, significa que x é menor do que y, e portanto deve ser colocado em uma
  posicao anterior a de y
  a função dentro do sort é necessária, pois ela ordena strings, então nao
  se aplica diretamente...
  explicacao em: https://www.w3schools.com/js/js_array_sort.asp */

  results = [array[1], array[2]];
  return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];
/*
Use a variável parameter como parâmetro da função acima, escreva testes
para verificar se a mesma está retornando a como se vê na variável result
e, caso não esteja, altere o código para que ele passe nos testes.
Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo
a função aos poucos:
*/

const assert = require('assert');
assert.strictEqual(typeof(secondThirdSmallest), 'function');
assert.deepEqual(secondThirdSmallest(parameter), result);