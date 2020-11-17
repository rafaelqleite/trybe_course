// Crie um endpoint que receba requisições do tipo POST no caminho /hello ,
// contendo o JSON { "name": "<nome do usuário>" } e retorne um JSON
// { "message": "Hello, <nome do usuário>!" } ;

const express = require('express');
const app = express();

app.use(express.json());

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.json({'message': `Hello, ${name}`});
});

app.listen(3000, () => {
  console.log('monitorando a porta 3000 para metodos post');
});

//  endereço de teste: http://localhost:3000/hello

// conteúdo do body:
// { "name": "rafael" }
