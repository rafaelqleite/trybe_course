const inquirer = require('inquirer');

const calcIMCInquirer = () => {

  const questions = [
    {
      type: 'input',
      name: 'peso',
      message: 'Qual a sua massa em kg?',
      validate: function (input) {
        return !isNaN(parseFloat(input)) || 'Por favor, digite um número válido';
      },
    },
    {
      type: 'input',
      name: 'altura',
      message: 'Qual a sua altura em m ?',
      validate: function (input) {
        return !isNaN(parseFloat(input)) || 'Por favor, digite um número válido';
      },
    },
  ];

  inquirer.prompt(questions).then((answers) => {
    // console.log(JSON.stringify(answers, null, '  '));
    const imc = parseFloat((answers.peso/answers.altura/answers.altura).toFixed(2));
    if (imc < 18.5) {
      console.log ('Abaixo do peso (magreza)');
    } else if (imc >= 18.5 && imc <= 24.99) {
      console.log('Peso normal');
    } else if (imc >= 25 && imc <= 29.99) {
      console.log('Acima do peso (sobrepeso)');
    } else if (imc >= 30 && imc <= 34.99) {
      console.log('Obesidade grau I');
    } else if (imc >= 35 && imc <= 39.99) {
      console.log('Obesidade grau II');
    } else {
      console.log('Obesidade graus III e IV');
    }
  });


};

calcIMCInquirer();