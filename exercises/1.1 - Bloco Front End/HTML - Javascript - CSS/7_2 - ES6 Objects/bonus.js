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

 const contaEstudantes2 = (objeto, materia) => {
   const pegaChaves = Object.keys(objeto);
   let somaEstudantes = 0;
   for (item in pegaChaves) {
     if (objeto[pegaChaves[item]]['materia'] == materia) {
       somaEstudantes += objeto[pegaChaves[item]]['numeroEstudantes'];
     }
   }
   return somaEstudantes;
 }

console.log(contaEstudantes2(allLessons, 'Matemática'));

/*   Crie uma função que deverá retornar um objeto que representa o relatório do
  professor ou professora, as aulas que ele ou ela ministrou e o número total
  de estudantes. Use o objeto criado no exercício 5: */
  /* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */

const relatorioProfessor = (objeto, nomeProfessor) => {
  const pegaChaves = Object.keys(objeto);
  let arrayAulas = [];
  let total = 0;
  for (item in pegaChaves) {
    if (objeto[pegaChaves[item]]['professor'] == nomeProfessor) {
      arrayAulas.push(objeto[pegaChaves[item]]['materia']);
      total += objeto[pegaChaves[item]]['numeroEstudantes'];
    }
  }
  const novoObjeto = {};
  novoObjeto.professor = nomeProfessor;
  novoObjeto.aulas = arrayAulas;
  novoObjeto.estudantes = total;
  return novoObjeto;
}

console.log(relatorioProfessor(allLessons, 'Maria Clara'));