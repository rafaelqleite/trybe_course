// Crie um endpoint do tipo GET na rota /simpsons que deve retornar a lista
//  completa de personagens.
// Como fonte de dados, você vai utilizar um arquivo JSON.

const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const express = require('express');
const app = express();

const leArquivo = async (res) => {
  try {
    const file = await readFile('simpsons.json');
    res.status(200);
    return file;
  }
  catch {
    res.status(500);
  }
};

app.get('/simpsons', async (req, res) => {
  let output = await leArquivo(res);
  output = await JSON.parse(output);
  const listaDeNomes = output.map(({name}) => name);
  console.log(listaDeNomes);
  res.json(listaDeNomes);
});

app.listen(3000, () => {
  console.log('monitorando get na porta 3000');
});
