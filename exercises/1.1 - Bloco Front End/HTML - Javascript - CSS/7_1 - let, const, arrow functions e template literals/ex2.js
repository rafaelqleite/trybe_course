/* Crie uma função que receba uma frase e retorne qual a maior palavra.

Exemplo:
longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

 */

let longestWord = palavra => {
  let separado = palavra.split(' ');
  let maior = 0;
  let indice = 0;
  for (let i=0; i<separado.length; i += 1) {
    if (separado[i].length > maior) {
      maior = separado[i].length;
      indice = i;
    }
  }
   return separado[indice];
 }

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));