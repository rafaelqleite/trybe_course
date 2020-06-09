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

/* Usando o objeto criado no exercício 5,
crie uma função que retorne o número total de estudantes em todas as aulas. */

const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});


function somaEstudantes(objeto) {
 let auxiliar = Object.entries(allLessons);
 let soma = 0;
 for (i in auxiliar) {
   let auxiliar2 = Object.entries(auxiliar[i][1]);
   soma = soma + auxiliar2[1][1];
 }
 console.log(soma);
}

somaEstudantes(allLessons);

//outra forma de se fazer, considerando-se que se dá a propriedade a ser contada
const somaEstudantes2 = (objeto, propriedade) => {
  let total = 0;
  const pegaChaves = Object.keys(objeto);
  for (item in pegaChaves) {
    total += objeto[pegaChaves[item]][propriedade];
  }
  return total;
}

console.log(somaEstudantes2(allLessons, 'numeroEstudantes'));