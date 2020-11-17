// Crie uma aplicação express que receba uma requisição do tipo GET no caminho
// /ping e retorne o JSON { "message": "Pong!" } .

const express = require('express');
const app = express();

app.get('/ping', (req, res) => {
  res.send({ message: "Pong!" });
});

app.listen(3000, () => {
  console.log('monitorando a porta 3000');
});
