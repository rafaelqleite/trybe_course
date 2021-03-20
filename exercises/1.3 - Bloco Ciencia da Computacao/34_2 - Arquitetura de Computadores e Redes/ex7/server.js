// Exercício 7 : Agora iremos explorar o outro protocolo de transporte que aprendemos, o UDP.
// Crie um servidor utilizando o módulo dgram do Node.js. Para isso, as dicas que vimos no
// exercício 4 se aplicam aqui, procure na documentação o módulo que cria o servidor e como o
// evento deve ser nomeado. Uma coisa importante a se lembrar, é que enquanto o TCP faz controle
// de fluxo, o UDP não, então algumas diferenças serão percebidas no código também, nosso server deverá:
// Imprimir no console toda mensagem recebida (não esqueça de converter também para string).
// Utilize a versão 4 do protocolo ( udp4 ).
// Utilize a porta 8084.

const dgram = require('dgram');

const socket = dgram.createSocket('udp4');

socket.on('message', (message) => {
  console.log(message.toString());
});

const PORT = 8084;

socket.bind(PORT);

console.log(`Server UDP ativo!\nEscutando na porta: ${PORT}`);

//  https://nodejs.org/api/dgram.html
