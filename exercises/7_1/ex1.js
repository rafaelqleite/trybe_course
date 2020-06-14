/*
Crie uma função que receba um número e retorne seu fatorial.

Na matemática, o fatorial de um número não negativo N, com a notação N!,
é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

Bônus (opcional): tente fazer o mesmo exercício de forma recursiva .
Spoiler: É possível resolver com uma linha. */

function fatorial(n) {
  let resultado = 1;

  for (let i = 1; i <= n ; i += 1) {
    resultado *= i;
  }
  return resultado;
}

console.log(fatorial(5));

//bonus
function fatorialRecursivo(n){
  if (n == 0) {
      return 1;
  } else {
      return n * fatorialRecursivo(n-1);
  }
}

console.log(fatorialRecursivo(5));

//agora com arrow function:

let fatorialArrow = k => (k<2)?1:fatorial(k-1)*k;

console.log(fatorialArrow(5));