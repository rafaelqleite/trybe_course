const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);

/* Agora, para praticar, crie uma função que receba três parâmetros,
sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa
função deve ser o objeto já com a nova chave adicionada nele. */

function abobrinha(objeto, chave, valor) {
  objeto[chave] = valor;
  return objeto;
} // adicionando nos objetos

console.log(abobrinha(customer, 'pegadinha', 'do Malandro'));

var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(an_obj)); // console: ['2', '7', '100']

var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

let consumidor = {
  primeiroNome: 'Maria',
  idade: 23,
  trabalho: 'dona de casa',
  lastName: 'da Silva',
  };

  console.log(Object.keys(consumidor));
  console.log(Object.keys(123)); // []
  console.log(Object.keys("hi")); // [ '0', '1' ]


  //exercicio da parte de conteudo trabalhando com keys:
  const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };

  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

/*   Tente criar uma função que exiba as habilidades do objeto student. Cada
  habilidade deve ser exibida no formato “Nome da habilidade, Nível: valor
  da chave referente à habilidade”. Após tentar criar a função, veja a sugestão
  de resposta logo abaixo e compare com a sua solução. */

function exibeObjetos(objeto) {
  let arrayAux = Object.keys(objeto);
  //console.log(arrayAux);
  //observe que objeto.length nao funciona
  //console.log(objeto.length);
  for (let i = 0; i < arrayAux.length; i += 1) {
    console.log(`${arrayAux[i]}, Nível: ${objeto[arrayAux[i]]}`);
    //console.log(arrayAux[i]);
    //console.log(objeto[arrayAux[i]]);
  }
}

exibeObjetos(student1);
console.log("Agora o estudante 2");
exibeObjetos(student2);

// agora com arrayFunction
const listaEstudantes = objetoQualquer => {
  const arrayAux = Object.keys(objetoQualquer);
  for (i in arrayAux) {
    console.log(`${arrayAux[i]}, Nível: ${objetoQualquer[arrayAux[i]]}`);
  }
}
console.log("testando com arrayFunction");
listaEstudantes(student2);

console.log("novo teste");
const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

for(i in pairKeyValue) {
  console.log('--------');
  console.log('Pais:', pairKeyValue[i][0]);
  console.log('Capital:', pairKeyValue[i][1]);
};

const person = {
  name: 'Roberto',
};

const lastName1 = {
  lastName: 'Silva',
};

const clone = Object.assign(person, lastName1);

console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
console.log(person); // { name: 'Roberto', lastName: 'Silva' }

console.log("*****************************************************");

const person1 = {
  name:'Roberto',
};

const lastName2 = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person1,lastName2);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person1);
