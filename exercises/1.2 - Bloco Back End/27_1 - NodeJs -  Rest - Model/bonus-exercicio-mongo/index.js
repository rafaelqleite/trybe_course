const express = require('express');
const bodyParser = require('body-parser');

const users = require('./Models/users');

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
  await users.editUserById(id, first_name, last_name, email, password);
  return res.status(200).json({ message: "Usuário editado com sucesso" });
});

app.delete('/user/:id', async (req, res) => {
  const { id } = req.params;
  await users.excludeById(id);
  return res.status(200).json({ message: "Usuário excluído com sucesso" });
});

app.listen(PORT, () => {
  console.log(`Estou monitorando a porta ${PORT}`);
});