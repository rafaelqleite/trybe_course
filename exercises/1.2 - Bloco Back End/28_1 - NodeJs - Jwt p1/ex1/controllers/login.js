const User = require('../models/user');
const jwt = require('jsonwebtoken');

/* Sua chave secreta. É com ela que os dados do seu usuário serão encriptados.
   Em projetos reais, seja cauteloso com essa chave, pois só quem tem acesso
   a ela poderá descriptografar os dados encriptados. */
const secret = 'seusecretdetoken';

 /* A propriedade expiresIn aceita o tempo de forma bem descritiva. Por exemplo: '7d' = 7 dias. '8h' = 8 horas. */
 const jwtConfig = {
  expiresIn: '1m',
  algorithm: 'HS256',
};

module.exports = async (req, res) => {
  try {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) return res.status(401).json({ message: 'É necessário usuário e senha para fazer login' });

  const user = await User.findUser(username);

  if (!user || user.password !== password) return res.status(401).json({ message: 'Usuário não existe ou senha inválida' });

  // Aqui é quando assinamos de fato nossa mensagem com a nossa "chave secreta".
  // Mensagem essa que contém dados do seu usuário e/ou demais dados que você
  // quiser colocar dentro de "data".
  // O resultado dessa função será equivalente a algo como:
  //  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjVlNTQ1OTBiYTQ5NDQ4ZjdlNWZhNzNjMCIsInVzZXJuYW1lIjoiaXRhbHNzb2RqIiwicGFzc3dvcmQiOiJzZW5oYTEyMyIsIl9fdiI6MH0sImlhdCI6MTU4MjU4NzMyNywiZXhwIjoxNTg0Nzc0NzE0OTA4fQ.UdSZi7K105aaVnoKSW-dnw-Kv7H3oKMtE9xv4jwyfSM

  const token = jwt.sign({ data: user }, secret, jwtConfig);
  //  Por fim, nós devolvemos essa informação ao usuário. */
  return res.status(200).json({ token });
  // return res.status(200).json({ message: 'Login efetuado com sucesso'});
  } catch (e) {
    return res.status(500).json({ message: 'Erro interno', error: e });
  }
};
