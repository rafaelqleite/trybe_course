//  https://nodejs.org/api/readline.html

// Pergunte ao usuário qual arquivo deseja ler.
// Leia o arquivo indicado (Não se esqueça de realizar tratamento de erros
//   caso o usuário informe um arquivo que não existe).
// Escreva na tela o conteúdo do arquivo e a quantidade de bytes.

const readline = require('readline');
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

const question = (pergunta) => {

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(pergunta, (resposta) => {
      rl.close();
      resolve(resposta);
    });
  });
};

const readFilePromise = async (nomeDoArquivo) => {
  try {
    const data = await readFile(nomeDoArquivo, 'utf8');
    console.log('Conteúdo do arquivo:');
    console.log('Início do arquivo:--------------------');
    console.log(data);
    console.log('Fim do arquivo.-----------------------');
    const stats = fs.statSync(nomeDoArquivo);
    const fileSizeInBytes = stats.size;
    console.log(`O arquivo possui ${fileSizeInBytes} bytes`);
  }
  catch (err) {
    return console.log('Erro ao ler o arquivo: ', err.message);
  }
};

const ex3 = async () => {
  const resposta = await question('Insira o nome do arquivo a ser lido: ');
  await readFilePromise(resposta);
};

ex3();
