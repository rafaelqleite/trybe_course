//  Recrie o script do exercício 3 utilizando apenas funções assíncronas.

const fs = require('fs');
const readline = require('readline');
let tamanhoTotal = 0;
let contaArquivos = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const initialTime = Date.now();

rl.question('Qual o caminho de pasta a ser utilizado ? ', (resposta) => {
  rl.close();
  const leitura = fs.readdir(resposta, (err, files) => {
    if (err) return console.log('Erro ao ler o arquivo', err.message);
    files.map((item) => {
      const tamanho = fs.readFileSync(item).byteLength;
      console.log(`O arquivo ${item} possui ${tamanho} bytes`);
      tamanhoTotal += tamanho;
      contaArquivos += 1;
    });
    console.log(`Totalizando ${contaArquivos} arquivos em um total de ${tamanhoTotal} bytes`);
    console.log(`A execução desse script levou: ${Date.now() - initialTime} ms`);
  });
});

//  https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback
//  https://nodejs.org/api/readline.html#readline_readline
