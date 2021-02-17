//  Envie a mensagem recebida no servidor para todos os outros clientes, exceto para quem a enviou.
const app = require('express')();
const http = require('http').Server(app);
const cors = require('cors');
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  }
});
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('mensagem', (msg) => {
    socket.broadcast.emit('mensagemServer', msg);
  });

});

http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});
