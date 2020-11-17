// Crie um endpoint do tipo POST na rota /simpsons que será responsável por
// cadastrar novos personagens.
// O corpo da requisição deve receber os campos id e name ;

const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
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

app.use(express.json());

app.post('/simpsons', async (req, res) => {
  let output = await leArquivo(res);
  output = await JSON.parse(output);
  const { id } = req.body;
  const checaId = output.some((item) => (item.id === id));
  if (checaId) {
    res.status(400);
    res.send('Já existe este id! Personagem não cadastrado');
  } else {
    output.push(req.body);
    await writeFile('simpsons.json', JSON.stringify(output));
    res.send('Personagem cadastrado');
  }
});

app.listen(3000, () => {
  console.log('monitorando post da porta 3000');
});