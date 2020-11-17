// Crie um endpoint que receba requisições do tipo POST no caminho /hello ,
// contendo o JSON { "name": "<nome do usuário>", "age": "<idade do usuário>" } .
// Caso o usuário tenha idade superior a 17 anos, retorne um JSON
// { "message": "Hello, <nome do usuário>!" } com o status code 200 .
// Caso contrário, retorne o JSON { "message": "Unauthorized"} com o status
// code 401 ;

const express = require('express');
const app = express();

app.use(express.json());

app.post('/hello', (req, res) => {
  const { name, age } = req.body;
  if (age > 17) {
    res.status(200);
    res.json({ message: `Hello, ${name}`});
  } else {
    res.status(401);
    res.json({ message: 'unauthorized'});
  }
});

app.listen(3000, () => {
  console.log('monitorando post na 3000');
});

//  endereço de teste: http://localhost:3000/hello

//  body enviado foi:
// {
//   "name": "rafael",
//   "age": 18 }