//  Exercício 1 : Crie uma API simples no node utilizando express . No arquivo index.js ,
//  crie uma rota do tipo get com o endereço raiz / que entregue como resposta o texto
//  "Está vivo!!!" num console.log . Faça o deploy no Heroku utilizando o CLI.
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log('Está vivo!!!');
  res.send('AE - inicializando protocolo de comunicação');
});

app.listen(PORT, () => {
  console.log(`Estou Ouvindo a porta ${PORT}`);
});
.