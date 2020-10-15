const assert = require('assert');
// escreva a função removeMiddle para passar nos testes abaixo:

const removeMiddle = array => {
  const novoArray = [];
  const tamanho = array.length;
  let meio;
  if (tamanho % 2 !== 0) {
    meio = (tamanho+1)/2;
    meio -= 1;
    novoArray.push(array[meio]);
    array.splice(meio,1);
  }
  console.log(novoArray);
  return novoArray;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepEqual(output, expectedOutput);
assert.deepEqual(words, expectedWords);
