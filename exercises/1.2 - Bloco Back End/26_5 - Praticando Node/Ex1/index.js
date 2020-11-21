// Atividade 1:
// Rota: /login
// Objetivo: Receber uma requisição que envie email/senha e receba um token como
// resposta. O formato desse token deve ser uma string aleatória com 12
// caracteres. O email recebido deve ter o formato email@mail.com e a senha
// deve conter no mínimo 4 caracteres e no máximo 8, todos números. Caso algum
// desses campos seja enviado em formato incorreto, deve-se retornar uma
// mensagem de erro email or password is incorrect. e seu devido status code.

const express = require('express');
const app = express();
const crypto = require('./generate-token.js');

const middlewareErro = (err, req, res, next) => {
  res.status(401);
  res.json({"message": "Email ou senha inválida"});
};

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

app.use(express.json());

app.post('/login', (req, res, next) => {
  const {email, senha} = req.body;
  const tamanhoSenha = senha.length;
  if (tamanhoSenha >= 4 && tamanhoSenha <= 8 && validateEmail(email)) {
    res.status(200).json({ "token": crypto() });
  } else {
    next("deu erro");
  }
});

app.use(middlewareErro);

app.listen(3000, () => {
  console.log('estou monitorando o post na porta 3000');
});
