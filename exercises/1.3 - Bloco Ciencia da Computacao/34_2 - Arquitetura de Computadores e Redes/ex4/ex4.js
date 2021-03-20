// Exercício 4 : Agora iremos para a camada de transporte, crie um server TCP, utilizando o módulo
// NET do Node.js, o server deverá:
// Responder com um "Olá, client", logo quando estabelecer uma conexão.
// Imprimir no console todo dado recebido (não esqueça de converter o data para string para ficar
//   legível para nós, humanos).
// Utilize a porta 8085.

const net = require('net');

const server = net.createServer((socket) => {
  socket.write('Olá, client!\n');

  socket.on('data', (data) => {
    console.log(data.toString());
  });
});

const PORT = 8085;

server.listen(PORT);

console.log(`Server TCP ativo!\nEstou ouvindo na porta: ${PORT}`);

//  https://nodejs.org/api/net.html
