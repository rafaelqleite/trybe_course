//  Adicione um nickname para cada pessoa usuária. Os nomes não precisam vir da pessoa usuária/front-end.

const app = require('express')();
const http = require('http').Server(app);
const cors = require('cors');
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  }
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const users = [];

io.on('connection', (socket) => {
  const nickname = 'Usuario - ' + users.length;
  socket.nickname = nickname;
  users.push(socket.nickname);

  socket.on('mensagem', (msg) => {
    console.log(socket.nickname);
    io.emit('mensagemServer', `${socket.nickname}: ${msg}`);
  });
});

http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});
