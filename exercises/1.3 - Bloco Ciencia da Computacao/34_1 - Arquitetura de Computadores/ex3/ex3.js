//  Exercício 3 : Faça um script que, a cada intervalo de segundo, mostre no console a memória
//  utilizada do sistema operacional vs a memória total (ambos em megabytes ).

const os = require('os');

setInterval(() => {
  const totalMemory = os.totalmem() / 1024 / 1024;
  const freeMemory = os.freemem() / 1024 / 1024;

  const usedMemory = (totalMemory - freeMemory).toFixed(2);

  console.log(`Uso de memória: ${usedMemory}/${totalMemory} MB`);
}, 1000);
