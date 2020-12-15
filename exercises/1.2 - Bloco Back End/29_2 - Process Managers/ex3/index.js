const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`Este eh o seguinte ambiente: ${process.env.AMBIENTE}`);
});

app.listen(PORT, () => {
  console.log(`Estou ouvindo na porta ${PORT}`);
});

// Exercício 3 : Explorando variáveis de ambiente:
// Adicione à API o uso de uma variável de ambiente que altere a mensagem exibida em sua resposta
// ou outro comportamento que preferir;
// Adicione ao arquivo ecosystem do exercício anterior dois contextos de variáveis: env_prod e
// env_homolog .
// Execute o processo utilizando o contexto prod . Em seguida, execute o processo utilizando o
// contexto homolog . Valide se o comportamento foi alterado.

//  para testar, rodar o pm2 com o seguinte comando:
//  pm2 start ecosystem.conf.yml --env homolog
//  ou
//  pm2 start ecosystem.conf.yml --env prod
