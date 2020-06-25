/* vamos fazer, passo a passo, uma Promise. Primeiramente, instancie uma Promise.
Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50
e elevá-los todos ao quadrado. Se a soma de todos esses elementos for inferior a 8000,
a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada.
Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.
Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções! */

const umaPromise = new Promise((resolve, reject) => {
  const umArrayQualquer = [];
  for (let i =1; i <= 10; i += 1) {
    umArrayQualquer.push(Math.round((Math.random() * 50)**2));
  }
  let somatorio = umArrayQualquer.reduce((somatorio, item) => somatorio += item, 0);
  if (somatorio < 8000) {
    resolve(somatorio);
  }
  else {
    reject('É mais de oito mil! Essa promise deve estar quebrada!');
  }
});

umaPromise.then(function deuCerto(resultadoDaRequisicao) {
  const arraySucesso = [];
  arraySucesso.push(resultadoDaRequisicao/2);
  arraySucesso.push(resultadoDaRequisicao/3);
  arraySucesso.push(resultadoDaRequisicao/5);
  arraySucesso.push(resultadoDaRequisicao/10);
  console.log('Eh menor que 8000', arraySucesso);
}).catch(function deuErro(error) {
  console.log(error);
});

//Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.
//Quando a Promise for rejeitada, imprima, via console.log, a frase “É mais de oito mil! Essa promise deve estar quebrada!”