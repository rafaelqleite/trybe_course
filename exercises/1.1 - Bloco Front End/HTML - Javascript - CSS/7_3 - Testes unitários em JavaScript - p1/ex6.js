const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
let expected;

//Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
expected = myFizzBuzz(15);
assert.strictEqual(expected, 'fizzbuzz', 'Não está verificando se eh divisivel por 3 e 5.');

//Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
expected = myFizzBuzz(3);
assert.strictEqual(expected, 'fizz', 'não está verificando se eh divisivel por 3 apenas');

//Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
expected = myFizzBuzz(5);
assert.strictEqual(expected, 'buzz', 'nao esta verificando se eh divisivel por 5 apenas');

//Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
expected = myFizzBuzz(7);
assert.strictEqual(expected, 7, 'nao esta dando a saida para numeros nao divisiveis por 3 ou 5');

//Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
expected = myFizzBuzz('7');
assert.strictEqual(expected, false, 'nao esta verificando se a entrada eh um numero');