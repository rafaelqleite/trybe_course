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
  const somatorio = umArrayQualquer.reduce((somatorio, item) => somatorio += item, 0);
  if (somatorio < 8000) {
    resolve();
  }
  else {
    reject();
  }
});

umaPromise.then(function deuCerto() {
  console.log('Eh menor que 8000');
}).catch(function deuErro() {
  console.log('Deu erro, eh maior que 8000');
});


