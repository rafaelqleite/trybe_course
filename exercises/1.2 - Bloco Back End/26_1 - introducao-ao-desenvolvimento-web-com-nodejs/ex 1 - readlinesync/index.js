// IMC = peso / altura²
const readline = require('readline-sync');

const calculaIMC = () => {
  const peso = readline.questionInt('Insira a sua massa em kg: ');
  const altura = parseFloat(readline.questionFloat('Insira a sua altura em m: ').toFixed(2));
  console.log(`A massa é ${peso} kg e a altura é ${altura} m`);
  // console.log(typeof(altura));

  const imc = parseFloat((peso/altura/altura).toFixed(2));
  console.log(`Seu IMC é ${imc} kg/m²`);
  console.log(typeof(imc));

  // IMC	Situação
  // Abaixo de 18,5	Abaixo do peso (magreza)
  // Entre 18,5 e 24,9    	Peso normal
  // Entre 25,0 e 29,9	Acima do peso (sobrepeso)
  // Entre 30,0 e 34,9	Obesidade grau I
  // Entre 35,0 e 39,9	Obesidade grau II
  // 40,0 e acima	Obesidade graus III e IV

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
};

calculaIMC();
