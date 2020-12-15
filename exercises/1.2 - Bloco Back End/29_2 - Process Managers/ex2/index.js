const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Fala comigo, companheiro!!!');
});

app.listen(PORT, () => {
  console.log(`Estou ouvindo na porta ${PORT}`);
});

// Exercício 2 : Crie um arquivo ecosystem . O arquivo configurará o PM2 para:
// Observar alterações no diretório da aplicação e, caso ocorram, reiniciar automaticamente sua
// aplicação;
// Ativar o modo cluster e configurar a quantidade de processos rodando para o máximo possível;
// Reiniciar o processo sempre que ele alcançar o consumo de 100MB de memória.

//  Foi criado o arquivo ecosystem.conf.yml