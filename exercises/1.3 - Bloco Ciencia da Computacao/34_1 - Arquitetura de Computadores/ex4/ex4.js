//  Faça um script que exibe o seu respectivo process id utilizando o módulo process do NodeJS e
//  então fique em execução por um determinado tempo. Agora utilizando os comandos de monitoramento
// visto no conteúdo, exiba os processos em execução e então identifique o seu processo.

const process = require('process');

console.log(`Process ID: ${process.pid}`);

//  https://nodejs.org/api/process.html#process_process_pid

//  ps aux | grep <PROCESS ID>
