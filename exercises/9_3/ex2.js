// Agora, um passo para trás: vamos fazer, passo a passo, uma Promise.
// Primeiramente, instancie uma Promise. Dentro dela, você deve produzir um array com dez
// números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
// Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida.
// Caso contrário, ela deve ser rejeitada. Acresça um then e um catch à Promise com
// qualquer coisa dentro só para que o código funcione.

// Tente usar Higher Order Functions! Lembre-se de que tanto uma
// quanto a outra recebem, como parâmetro, funções!

const umaPromise = new Promise((resolve, reject) => {
  const arrayAleatorio = [];
  for(let i=1; i <= 10; i += 1) {
    arrayAleatorio.push(Math.round(Math.random()*50)**2);
  }
  const somaArrayAleatorio = arrayAleatorio.reduce((atual, iterando) => {
    return atual += iterando;
  },0);
  (somaArrayAleatorio < 8000) ? resolve(somaArrayAleatorio) : reject('Deu erro, a soma eh maior que 8000');
});
umaPromise.then((resultado) => console.log(resultado)).catch(errorMsg => console.log(errorMsg));