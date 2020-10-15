/* Crie uma página que contenha:

Um botão ao qual será associado um event listener;

Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;

Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável
clickCount é atualizada.
 */

let contador = 0;
const posDiv = document.querySelector('.imprimeClicks');
// com arrow function

let arrowConta = event => {
  contador += 1;
  posDiv.innerHTML = '';
  posDiv.innerHTML = contador;
}

const posBotao = document.querySelector('.pleura');
console.log(posBotao);
posBotao.addEventListener('click', arrowConta);

