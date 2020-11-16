// Crie um script que realize as mesmas funcionalidades que o script do
// exercício 1, mas utilizando apenas funções assíncronas, de forma que os dois
// arquivos sejam lidos ao mesmo tempo.

const fs = require('fs');

const startScriptTime = Date.now();

const startFile1Time = Date.now();

let timeFile1;
let timeFile2;

const calcScriptTime = () => {
  if (timeFile2 && timeFile1) {
    console.log(`A execução do script levou um tempo total de: ${Date.now() -
      startScriptTime} ms`);
  }
};

fs.readFile('teste.txt', (err, data1) => {
  timeFile1 = Date.now() - startFile1Time;
  console.log(`O primeiro arquivo foi carregado em ${timeFile1}
   ms e possui ${data1.byteLength} bytes`);
  calcScriptTime();
});

const startFile2Time = Date.now();

fs.readFile('teste2.txt', (err, data2) => {
  timeFile2 = Date.now() - startFile2Time;
  console.log(`O segundo arquivo foi carregado em ${timeFile2}
   ms e possui ${data2.byteLength} bytes`);
  calcScriptTime();
});
