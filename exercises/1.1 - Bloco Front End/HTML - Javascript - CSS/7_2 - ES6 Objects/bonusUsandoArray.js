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

const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});

/*
Crie uma função para contar quantos estudantes assistiram às aulas de Matemática.
 Use o objeto criado no exercício 5. */

function contaEstudantes(objeto, materia) {
  let auxiliar = Object.entries(objeto);
  let somaEstudantes = 0;
  for (i in auxiliar) {
    let auxiliar2 = Object.entries(auxiliar[i][1]);
    if (auxiliar2[0][1] == materia) {
      somaEstudantes += auxiliar2[1][1];
    }
  }
  return somaEstudantes;
}

console.log(contaEstudantes(allLessons, 'História'));

/* Crie uma função que deverá retornar um objeto que representa o relatório do professor
ou professora, as aulas que ele ou ela ministrou e o número total de estudantes.
Use o objeto criado no exercício 5: */

/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */

function createReport(objeto, nomeProfessor) {
  let auxiliar = Object.entries(objeto);
  let somaEstudantes = 0;
  let arrayAulas = [];

  for (i in auxiliar) {
    let auxiliar2 = Object.entries(auxiliar[i][1]);
    if (auxiliar2[2][1] == nomeProfessor) {
      somaEstudantes += auxiliar2[1][1];
      arrayAulas.push(auxiliar2[0][1]);
    }
  }
  let objetoRelatorio = {}
  objetoRelatorio.professor = nomeProfessor;
  objetoRelatorio.aulas = arrayAulas;
  objetoRelatorio.estudantes = somaEstudantes;
  return(objetoRelatorio);
}

console.log(createReport(allLessons, 'Maria Clara'));
