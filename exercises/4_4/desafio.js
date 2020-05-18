//let romanos = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
//let arabicos = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
//Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
console.log(converteRomanoEmNumero("MMXCV"));

function converteRomanoEmNumero(algarismoRomano) {
  let equivalencia = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000,
  };
  let arabico = 0;
  i = algarismoRomano.length;
  while (i) {
    i -= 1;
    if (equivalencia[algarismoRomano[i]] < equivalencia[algarismoRomano[i + 1]]) {
      arabico = arabico - equivalencia[algarismoRomano[i]];
    } else {
      arabico = arabico + equivalencia[algarismoRomano[i]];
    }
  }
  return arabico;
}

