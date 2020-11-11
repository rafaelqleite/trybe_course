const inquirer = require('inquirer');

const validaEntrada = (input) => {
  if (input <= 0 || parseInt(input) !== parseFloat(input) ) return 'Por favor, digite um número Natural válido';
  //  não existe NaN === NaN, por isso,
  //  quando um texto é digitado ao invés de um número, o if é sempre verdadeiro
  //  além disso, se o número de entrada for um float (Ex 12.1) o parseInt
  //  será diferente do ParseFloat
  return true;
};

const calculaFibonacci = (n) => {
  if (n === 1 ) return n;
  let a = 0;
  let b = 1;
  let final = 0;
  const array = [ 1 ];
  for (let i=1; i < n; i += 1 ) {
    final = a + b;
    array.push(final);
    a = b;
    b = final;
  }
  console.log(array);
};

const perguntaFibo = {
  type: 'input',
  name: 'inputFibo',
  message: 'Quantos elementos da sequencia de Fibonacci você quer ver? Insira o número de elementos: ',
  validate: validaEntrada,
};

inquirer.prompt(perguntaFibo).then((respostaFibo) => {
  calculaFibonacci(respostaFibo.inputFibo);
});
