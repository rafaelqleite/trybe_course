const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/* Crie uma função que verifique se o par (chave / valor) existe na função.
 Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave
  e o valor da chave. */

function verificaPar(objeto, chave, valor) {
  let aux = Object.entries(objeto);
  for (i in aux) {
    if ( aux[i][0] == chave && aux[i][1] == valor) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(verificaPar(lesson1, 'materia', 'Matemática'));
