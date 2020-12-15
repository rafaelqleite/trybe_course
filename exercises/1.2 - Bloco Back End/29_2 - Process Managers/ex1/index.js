const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Fala comigo, companheiro!!!');
});

app.listen(PORT, () => {
  console.log(`Estou ouvindo na porta ${PORT}`);
});

//  Exercício 1 : Crie uma API simples que retorne uma mensagem. Feito isso, gerencie seus
// processos da seguinte maneira:
// 1.1 - Crie UM processo no PM2 utilizando o CLI;
// 1.2 - Restart e recarregue o processo utilizando o CLI do PM2 (lembre-se que há comandos distintos
//   para cada um);
// 1.3 - Pare o processo;
// 1.4 - (Bônus) - Escalone para mais 5 processos;
// 1.5 - (Bônus) - Defina para 3 a quantidade de processos;
// 1.6 - Remova o processo da listagem do PM2 ;

//  1.1 - pm2 start index.js --name ProcessoDoCompanheiro --watch
//  1.2 - pm2 restart ProcessoDoCompanheiro
//  1.2 - pm2 reload ProcessoDoCompanheiro
//  1.3 - pm2 stop ProcessoDoCompanheiro
//  1.4 - pm2 start index.js --instances 5 --name ProcessoComCluster
//  1.5 - pm2 start index.js --instances 3 --name ProcessoComLoadBalancer
//  1.6 - pm2 delete all
