/*  Crie uma função para mostrar o tamanho de um objeto. */

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


function tamanhoObjeto(objeto) {
  let aux = Object.keys(objeto).length;
  console.log(aux);
}

tamanhoObjeto(lesson2);

//outra forma de se fazer:

const tamanhoObjeto2 = objeto => { return Object.keys(objeto).length; }
console.log(tamanhoObjeto2(lesson2));