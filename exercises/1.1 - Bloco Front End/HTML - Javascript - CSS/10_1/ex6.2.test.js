// 2. Adicione uma nova funcionalidade para buscar pela idade dos animais.
// O retorno deve ser um array de objetos, mas, caso não ache nenhum,
// retorne uma mensagem de erro. Escreva tanto a função como o seu teste.

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

//  funcao adicionada:
const findAnimalsByAge = (age) => {
  return new Promise ((resolve, reject) => {
    const arrayAnimaisPorIdade = Animals.filter(animal => animal.age === age);
  if (arrayAnimaisPorIdade) return resolve(arrayAnimaisPorIdade);
  return reject('nao encontrou nenhum animal com essa idade');
  });

};
const findAnimalByName = (name) => {
  // Adicione o código aqui.
  return new Promise((resolve, reject) => {
    const procuraAnimal = Animals.find(animal => animal.name === name);
    if (procuraAnimal) return resolve(procuraAnimal);
    return reject('Nenhum animal com esse nome!');
  });

}

const getAnimal = (name) => {
  // Adicione o código aqui.
  return findAnimalByName(name).then(animal => animal);
}
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('mostrando o array de objetos com animais da idade solicitada', () => {
  it('testando para quando existe animal com a idade', () => {
    expect.assertions(1);
    const arrayComparar = [{ name: 'Preguiça', age: 5, type: 'Cat' }];
    return findAnimalsByAge(5).then((animal) => {
      expect(animal).toEqual(expect.arrayContaining(arrayComparar));
    });
  });
});