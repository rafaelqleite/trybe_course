//Utilize somente Higher Order Functions para fazer as operações com o array;
//fatore a Promise para utilizar somente async e await. (baseado no ex5).
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
const randomSquared = () => {
  const arrayAleatorio = [];
  for (let i=1; i <= 10; i +=1) {
    arrayAleatorio.push(Math.round(Math.random()*50)**2);
  }
  const somaArrayAleatorio = arrayAleatorio.reduce((acumulador, iterando) => acumulador += iterando);
  return somaArrayAleatorio;
}

const divididoSomado = (resultado) => {
  const divisores = [2, 3, 5, 10];
  const resultadoDivisores = divisores.map(divisor => resultado/divisor);
  console.log(resultadoDivisores);
  const somatorioAposDividir = resultadoDivisores.reduce((atual, iterando) => atual += iterando,0);
  return somatorioAposDividir;
}

async function exercicio() {
  const somatorioRandom = await randomSquared();
  if (somatorioRandom > 8000) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  } else {
    const novoSomatorio = await divididoSomado(somatorioRandom);
    console.log(novoSomatorio);
    return novoSomatorio;
  }
}
exercicio().catch(()=> console.log('ocorreu algum erro'));