// Crie um script que realize as mesmas funcionalidades que o script do
// exercício 1, mas utilizando apenas funções assíncronas, de forma que os dois
// arquivos sejam lidos ao mesmo tempo.
// criação usando async/await

const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

let tempoArquivo1;
let tempoArquivo2;

const exercicio2Async = async () => {
  const startScriptTime = Date.now();
  const startArquivo1Time = Date.now();

  const arquivo1 = await readFile('teste.txt');

  tempoArquivo1 = Date.now() - startArquivo1Time;

  console.log(`O primeiro arquivo foi carregado em ${tempoArquivo1} ms e possui ${arquivo1.byteLength} bytes`);

  const startFile2Time = Date.now();
  const arquivo2 = await readFile('teste2.txt');
  tempoArquivo2 = Date.now() - startFile2Time;
  console.log(`O segundo arquivo foi carregado em ${tempoArquivo2} ms e possui ${arquivo2.byteLength} bytes`);

  const endScriptTime = Date.now() - startScriptTime;
  console.log(`O tempo total de execução do script foi de ${endScriptTime} ms`);
};

exercicio2Async();
