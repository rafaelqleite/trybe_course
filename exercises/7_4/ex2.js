const assert = require('assert');
// escreva a função wordLengths para passar nos testes abaixo:
const wordLengths = array => {
  let novoArray = [];
  for (let i=0; i<array.length; i+= 1) {
    novoArray.push(array[i].length);
  }
  return novoArray;
}


//
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);