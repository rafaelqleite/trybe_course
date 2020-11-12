// Exercício 1: Crie uma função que retorna uma promise.
// Essa função deve receber três parâmetros, fazendo o tratamento de erro caso
// algum dos parâmetros não seja um número.
// Caso algum dos parâmetros não seja do tipo Number, rejeite a promise e
// imprima na tela a frase "Digite apenas números".
// Caso todos os parâmetros sejam do tipo Number, você deve somar os dois
// primeiros.
// Depois, pegue o resultado da soma e multiplique pelo terceiro parâmetro,
// e caso seja menor que 50, rejeite a promise com a mensagem "Valor muito baixo".
// Caso contrário, aceite a promise, imprimindo o resultado da multiplicação na
// tela.

function criandoPromises (parametro1, parametro2, parametro3) {
  return new Promise((resolve, reject) => {
    if (typeof(parametro1) !== 'number' ||
    typeof(parametro2) !== 'number' || typeof(parametro3) !== 'number') {
      return reject("Digite apenas números");
    }
    resolve(parametro1 + parametro2);
  }).then((resultado) => {
    const final = resultado * parametro3;
    if (final < 50) return Promise.reject("Valor muito baixo");
    return console.log(final);
  }).catch((erro) => console.log(erro));
}

criandoPromises(2, 2, 3);