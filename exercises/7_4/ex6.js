const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let contador = 0;

  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === 'a' ||
      characters[i] === 'o' ||
      characters[i] === 'i' ||
      characters[i] === 'e' ||
      characters[i] === 'u' ||
      characters[i] === 'A' ||
      characters[i] === 'E' ||
      characters[i] === 'I' ||
      characters[i] === 'O' ||
      characters[i] === 'U'
    ) {
      contador += 1;
      results.push(contador);
    } else {
      results.push(characters[i]);
    }
  }
  const saida = results.join('');
  return saida;
};


const parameter = 'Dayane';
const result = 'D1y2n3';

console.log(removeVowels(parameter));
/*
  Use a variável parameter como parâmetro da função acima, escreva testes
  para verificar se a mesma está retornando a como se vê na variável result
  e, caso não esteja, altere o código para que ele passe nos testes.
  Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo
  a função aos poucos:
*/

const assert = require('assert');

assert.strictEqual(typeof(removeVowels), 'function');
assert.strictEqual(removeVowels('D'), 'D');
assert.strictEqual(removeVowels('a'), '1');
assert.strictEqual(removeVowels('ao'), '12');
assert.strictEqual(removeVowels('bo'), 'b1');
assert.strictEqual(removeVowels('dA'), 'd1');
assert.strictEqual(removeVowels(parameter), result);
