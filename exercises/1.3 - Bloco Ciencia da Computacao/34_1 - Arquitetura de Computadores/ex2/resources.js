//  Crie um script chamado resources.js e utilize-o para exibir no console as seguintes informações:
//  Para isso utilize o módulo os do NodeJS

const os = require('os');
const cpus = os.cpus();

//  A plataforma que estamos utilizando, por exemplo: linux , win32 , darwin , etc.,
console.log(`Plataforma: ${os.platform()}`);

//  a arquitetura, por exemplo, x32 ou x64 , e a versão (release).
console.log(`Arquitetura: ${os.arch()}`);

console.log(`Versão: ${os.release()}`);

//  Adicione o código para exibir a quantidade de cores da sua CPU e o modelo e a velocidade em
//  gigahertz - GHz de cada um (utilize o valor vindo em speed e faça a conversão 😎).
console.log(`CPU ${cpus.length} cores:`);

cpus.forEach((core, index) => {
  console.log(`Core ${index + 1} - Modelo: ${core.model} | Velocidade ${core.speed / 1000}GHz`)
});

//  Exiba também a quantidade total de memória RAM disponível em sua máquina em gigabytes -
//  GB (faça a conversão também 😉).
console.log(`Memória total: ${os.totalmem() / 1024 / 1024 / 1024} GB`);
