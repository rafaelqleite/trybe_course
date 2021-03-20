
// Exercício 6 : Agora, vamos utilizar um tipo de proxy bem legal que pode ser bastante útil no
// nosso dia como pessoas desenvolvedoras: o NGROK . Com ele conseguimos criar um túnel para o
// nosso localhost .
// Crie um servidor HTTP em sua máquina executando na porta 80 , pode ser um front-end ou um back-end
// criado em aulas anteriores.
// Baixe o ngrok e extraia o arquivo baixado em uma pasta de sua preferência, conforme instruções
// no site oficial .
// Conforme instruções do site, crie um túnel para a porta 80 de sua máquina.
// Acesse o o link disponibilizado em seu navegador. Utilize ele para acessar de outros dispositivos,
//  como seu smartphone ou outro computador 😎.
const http = require('http');

const requestListener = (req, res) => {
  res.writeHead(200);
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(80);

//  deve ser rodado como root; - sudo node server.js

//  https://ngrok.com/docs

// ./ngrok http 80