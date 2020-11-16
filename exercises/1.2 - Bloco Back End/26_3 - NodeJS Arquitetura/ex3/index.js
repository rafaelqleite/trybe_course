// Crie um script NodeJS que, utilizando apenas funções síncronas e módulos
// padrão do NodeJS, receba o nome de uma pasta e:
// Escreva a quantidade de arquivos existentes dentro dela;
// Escreva a soma do tamanho de todos os arquivos presentes nela;
// Escreva no terminal o tempo total de execução do script.

const fs = require('fs');
const readline = require('readline-sync');
let tamanhoTotal = 0;
let contaArquivos = 0;
const initialTime = Date.now();

const pergunta = readline.questionPath('Qual o caminho de pasta a ser utilizado ? ');
const resposta = fs.readdirSync(pergunta);

//  Diferentemente do readdir Assíncrono, o readdirSync retorna inclusive as pastas.

resposta.map((item) => {
  if (item.includes('.')) {
    const tamanho = fs.readFileSync(item).byteLength;
    console.log(`O arquivo ${item} possui ${tamanho} bytes`);
    tamanhoTotal += tamanho;
    contaArquivos += 1;
  } else {
    console.log(`A pasta ${item} não será avaliada.`);
  }
});
console.log(`Totalizando ${contaArquivos} arquivos em um total de ${tamanhoTotal} bytes`);
console.log(`A execução desse script levou: ${Date.now() - initialTime} ms`);

//  https://nodejs.org/api/fs.html#fs_fs_readdirsync_path_options
//  https://nodejs.org/api/readline.html#readline_readline
