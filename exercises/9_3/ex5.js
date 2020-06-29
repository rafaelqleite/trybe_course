// Agora, um passo para trás: vamos fazer, passo a passo, uma Promise.
// Primeiramente, instancie uma Promise. Dentro dela, você deve produzir um array com dez
// números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
// Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida.
// Caso contrário, ela deve ser rejeitada. Acresça um then e um catch à Promise com
// qualquer coisa dentro só para que o código funcione.

// Tente usar Higher Order Functions! Lembre-se de que tanto uma
// quanto a outra recebem, como parâmetro, funções!
// Quando a promise for resolvida com sucesso, retorne o resultado
// da divisão desse número por 2, 3, 5 e 10 em um array.
// Quando a Promise for rejeitada, imprima, via console.log,
// a frase "É mais de oito mil! Essa promise deve estar quebrada!"
//Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.

const umaPromise = new Promise((resolve, reject) => {
  const arrayAleatorio = [];
  for(let i=1; i <= 10; i += 1) {
    arrayAleatorio.push(Math.round(Math.random()*50)**2);
  }
  const somaArrayAleatorio = arrayAleatorio.reduce((atual, iterando) => {
    return atual += iterando;
  },0);
  (somaArrayAleatorio < 8000) ? resolve(somaArrayAleatorio) : reject('É mais de oito mil! Essa promise deve estar quebrada!');
});
umaPromise.then((resultado) => {
  const divisores = [2, 3, 5, 10];
  const numerosDivididos = divisores.map(divisor => resultado/divisor);
  console.log(numerosDivididos);
  return numerosDivididos;
}).then(resultadoAnterior => {
  console.log('ja esta na segunda promise', resultadoAnterior);
  const somatorio = resultadoAnterior.reduce((acumulador,item) => acumulador += item);
  console.log(somatorio);
  return somatorio;
  }
).catch(errorMsg => console.log(errorMsg));