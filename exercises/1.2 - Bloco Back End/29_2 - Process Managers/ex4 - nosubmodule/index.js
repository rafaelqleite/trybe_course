const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`Teste heroku ${process.env.AMBIENTE}`);
});

app.listen(PORT, () => {
  console.log(`Estou ouvindo na porta ${PORT}`);
});

// Exercício 4 : Adicione monitoramento à sua API:
// Crie uma conta no PM2;
// Adicione o monitoramento à API dos exercícios anteriores, utilizando o comando do CLI do PM2;
// Verifique se o dashboard web está exibindo as informações de sua API.

// Instruçoes
// Acessar https://id.keymetrics.io/api/oauth/login
// git init
// heroku create
// configurar o ecosystem.conf.yml
// adicionar ao package.json
// em start:
//     "start": "pm2-runtime start ecosystem.conf.yml --env homolog"
// git add .
// git commit -m "bleh"
// git push heroku master
// pm2 plus pra fazer a conexao
// npm start
// ou via config (ver anotaçoes).