// Agora você vai criar uma API de listagem dos personagens da série Simpsons.
// Como fonte de dados, você vai utilizar um arquivo JSON.

const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

const teste = async () => {
  const file = await readFile('simpsons.json', 'utf8');
  console.log(file);
};

teste();
