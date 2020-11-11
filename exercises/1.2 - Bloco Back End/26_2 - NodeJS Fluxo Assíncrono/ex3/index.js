//  https://nodejs.org/api/readline.html

// Pergunte ao usuário qual arquivo deseja ler.
// Leia o arquivo indicado (Não se esqueça de realizar tratamento de erros
//   caso o usuário informe um arquivo que não existe).
// Escreva na tela o conteúdo do arquivo e a quantidade de bytes.

const readline = require('readline');
const fs = require('fs');


const readFilePromise = async (nomeDoArquivo) => {
  await fs.readFile(nomeDoArquivo, 'utf8', (err, data) => {
    if (err) return console.log('Erro ao ler o arquivo: ', err.message);
    console.log('Conteúdo do arquivo:');
    console.log('Início do arquivo:--------------------');
    console.log(data);
    console.log('Fim do arquivo.-----------------------');
    const stats = fs.statSync(nomeDoArquivo);
    const fileSizeInBytes = stats.size;
    console.log(`O arquivo possui ${fileSizeInBytes} bytes`);
  });
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Insira o nome do arquivo a ser lido: ', (resposta) => {
  readFilePromise(resposta);
  rl.close();
});
