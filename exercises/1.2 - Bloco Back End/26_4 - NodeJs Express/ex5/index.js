// Crie um endpoint que receba requisições do tipo PUT no caminho
// /users/:name/:age
// e retorne o JSON
// { "message": "Seu nome é <name> e você tem <age> anos de idade" } .

const express = require('express');
const app = express();

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.json({ message: `Seu nome é ${name} e você tem ${age} anos de idade`});
});

app.listen(3000, () => {
  console.log('monitorando put no 3000');
});

//  url de teste: http://localhost:3000/users/rafael/18
//  método PUT.

//  https://pt.stackoverflow.com/questions/92870/qual-%C3%A9-a-diferen%C3%A7a-entre-o-m%C3%A9todo-put-e-o-post