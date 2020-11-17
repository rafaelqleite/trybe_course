// Crie um endpoint do tipo GET na rota /simpsons/:id que deve retornar apenas
//  o personagem com o id informado na URL da requisição.
// Caso não exista nenhum personagem com o id especificado, deve ser retornado
// um array vazio.

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

app.get('/simpsons/:id', async (req, res) => {
  let output = await leArquivo(res);
  output = await JSON.parse(output);
  const { id } = req.params;
  let personagem = output.find((item) => (item.id === id)) || [];
  console.log(personagem);
  res.json(personagem);
});

app.listen(3000, () => {
  console.log('monitorando get na porta 3000');
});
