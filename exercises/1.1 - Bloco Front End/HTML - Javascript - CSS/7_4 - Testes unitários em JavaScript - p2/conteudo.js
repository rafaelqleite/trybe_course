/* Como exercícios de fixação, faça o seguinte: - Começe a praticar TDD fazendo uma função
 que valida que um array de números não possui múltiplos de 3, 5, 7 e 11 -
 Agora, revivendo exercícios passados do curso, faça com TDD uma função que recebe um
 número natural n e retorna todos os números primos de 0 a esse número.
 */
const assert = require('assert');
let arrayValidos = [ 1, 2, 4, 8, 13, 16, 17, 19, 23, 26, 29, 31, 32, 34, 37, 38, 41, 43, 46, 47 ];
let arrayInvalidos = [ 3,
  5,
  6,
  7,
  9,
  10,
  11,
  12,
  14,
  15,
  18,
  20,
  21,
  22,
  24,
  25,
  27,
  28,
  30,
  33,
  35,
  36,
  39,
  40,
  42,
  44,
  45,
  48,
  49,
  50 ];

const criaNaomultiplos = number => {
  let novoArray = [];
  for (let i = 1; i<=number; i += 1 ) {
    if ( i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0 && i % 11 !== 0) {
      novoArray.push(i);
    }
  }
  return novoArray;
};

const criaMultiplos = number => {
  let novoArray = [];
  for (let i = 1; i<=number; i += 1 ) {
    if ( i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0 && i % 11 !== 0) {

    } else {
      novoArray.push(i);
    }
  }
  return novoArray;
}

const validaDados = array => {
  for (let i=0; i<array.length; i += 1) {
    if ( array[i] % 3 === 0 || array[i] % 5 === 0 || array[i] % 7 === 0 || array[i] % 11 === 0 ) {
      return false;
    }
  }
  return true;
};

assert.strictEqual(validaDados(arrayValidos), true, 'tem numero divisivel por 3 ou 5 ou 7 ou 11 no array. Array invalido');
