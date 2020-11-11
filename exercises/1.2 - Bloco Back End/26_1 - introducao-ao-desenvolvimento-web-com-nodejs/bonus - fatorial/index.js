const inquirer = require('inquirer');

const validaEntrada = (input) => {
  if (parseInt(input) !== parseFloat(input) ) return 'Por favor, digite um número inteiro';
  //  não existe NaN === NaN, por isso,
  //  quando um texto é digitado ao invés de um número, o if é sempre verdadeiro
  //  além disso, se o número de entrada for um float (Ex 12.1) o parseInt
  //  será diferente do ParseFloat
  return true;
};

const calculeFatorial = (n) => {
  if (n <= 1) return 1;
  return n * calculeFatorial(n-1);
};

const pergunta = {
  type: 'input',
  name: 'entrada',
  message: 'Você quer o fatorial de qual número inteiro ? Insira o número: ',
  validate: validaEntrada,
};

inquirer.prompt(pergunta).then((resposta) => {
  console.log(calculeFatorial(resposta.entrada));
});
