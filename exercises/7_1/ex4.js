/* Crie um código JavaScript com a seguinte especificação:
Não se esqueça de usar template literals
Função 1: Escreva uma função que vai receber uma string como parâmetro.
Sua função deverá procurar pela letra x em uma string qualquer que você determinar
e substituir pela string que você passou como parâmetro. Sua função deve retornar essa
nova string.
Exemplo:
String determinada: “Tryber x aqui!”
Parâmetro: “Bebeto”
Retorno: “Tryber Bebeto aqui!”
 */
const procuraX = (string, parametro) => {
  let vetorAux = string.split(' ');
  for (let i=0; i < vetorAux.length; i += 1) {
    for (let j=0; j < vetorAux[i].length; j += 1) {
      if (vetorAux[i][j] === 'x' || vetorAux[i][j] == 'X') {
        vetorAux[i] = parametro;
      }
    }
  }
  return vetorAux.join(' ');
}
console.log(procuraX('Tryber x faz coisas que ninguém imagina', 'rafael'));

/* Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro.
Essa função deve concatenar as skills do array global à string que foi passada para a Função 2
via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar
essa nova string.
Exemplo:
“Tryber x aqui!
Minhas cinco principais habilidades são:
JavaScript;
HTML; …
#goTrybe”. */

const variavelGlobal = `Minhas cinco principais habilidades são:
Javascript;
HTML;
CSS;
Python;
Linux;
#goTrybe`;

const concatenaSkills = string => `${string} e agora ${variavelGlobal}`;

console.log(concatenaSkills(procuraX('Tryber x faz coisas que ninguém imagina', 'rafael')));