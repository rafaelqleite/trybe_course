// POST /user - Cria um usuário no banco com os seguintes dados:
// id : Id única gerada automaticamente pelo banco;
// first_name : Nome do usuário (string obrigatória);
// last_name : Sobrenome do usuário (string obrigatória);
// email : Email do usuário (string obrigatória);
// password : Senha do usuário (string com pelos menos 6 caracteres obrigatória);
// O endpoint deve retornar um JSON com a mensagem Usuário criado com sucesso , juntamente com o
// status 201 ;
// Caso os dados não estejam de acordo com as regras de negócio o endpoint deve retornar um
// objeto com a mensagem Dados inválidos juntamente com o status 200 .


// GET /user - Retorna um array com todos os usuários cadastrados no banco de dados,
// sendo cada usuário um objeto diferente. Além disso o endpoint deve retornar também o status 200 .

// GET /user/:id - Retorna o objeto do usuário cujo id seja igual ao parâmetro id informado na URL.
// Além disso o endpoint deve retornar também o status 200 .
// Caso não exista um usuário com id informado o endpoint deve retornar um JSON com mensagem
// Usuário não encontrado , juntamente com o status 404 .

// PUT /user/:id - Edita informações do usuário cujo id seja igual ao parâmetro id informado na URL.
// O endpoint deve retornar um JSON com a mensagem Usuário editado com sucesso , juntamente com o
// status 200 ;
// Caso os dados não estejam de acordo com as regras de negócio o endpoint deve retornar um
// objeto com a mensagem Dados inválidos juntamente com o status 200 .

// DELETE /user/:id - Deleta o usuário cujo id seja igual ao parâmetro id informado na URL.
// Endpoint deve retornar um objeto com a mensagem Usuário deletado com sucesso , juntamente
// com o status 200 .

const express = require('express');
const bodyParser = require('body-parser');
const users = require('./model/users');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.post('/user', async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  if (!users.isValid(first_name, last_name, email, password)) {
    return res.status(400).json({ message: "dados inválidos" });
  }

  await users.create(first_name, last_name, email, password);
  res.status(201).json({ message: "Usuário criado com sucesso" });

});

app.get('/user', async (req, res) => {
  const saida = await users.getAllUsers();
  return res.status(200).json(saida);
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const saida = await users.getById(id);
  if (!saida) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }
  return res.status(200).json(saida[0]);
});

app.put('/user/:id', async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, password } = req.body;
  if (!users.isValid(first_name, last_name, email, password)) {
    return res.status(400).json({ message: "dados inválidos" });
  }
  const saida = await users.editUserById(id, first_name, last_name, email, password);
  if (!saida) {
    return res.status(404).json({ message: "Id inexistente" });
  }
  return res.status(200).json({ message: "Usuário editado com sucesso" });
});

app.delete('/user/:id', async (req, res) => {
  const { id } = req.params;
  const saida = await users.excludeById(id);
  if (!saida) {
    return res.status(404).json({ message: "Id inexistente!" });
  }
  return res.status(200).json({ message: "Usuário excluído com sucesso" });
});

app.listen(PORT, () => {
  console.log(`Estou monitorando a porta ${PORT}`);
});

// json de teste:
// {
//   "first_name": "Rafael",
//   "last_name": "Leite",
//   "email": "rafaelqleite@gmail.com",
//   "password": "senha"
// }