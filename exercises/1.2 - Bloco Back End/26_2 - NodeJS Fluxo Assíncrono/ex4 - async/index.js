// Exercício 4: Crie um script que, sem utilizar módulos de terceiros,
// substitua uma palavra por outra em um arquivo escolhido pelo usuário com o
// seguinte fluxo:
// Perguntar ao usuário qual arquivo deseja utilizar.
// Ler o arquivo (Não se esqueça de realizar tratamento de erros caso o usuário
// informe um arquivo que não exista).
// Solicitar a palavra a ser substituída.
// Solicitar a nova palavra, que deve substituir a palavra anterior.
// Mostrar o novo conteúdo do arquivo e realizar a substituição.
// Perguntar o nome do arquivo de destino.
// Salvar o novo arquivo no caminho de destino (caso o usuário informe um arquivo
// já existente, confirmar antes de sobrescrever).
// Dica: Utilize a classe RegExp do JS para substituir todas as ocorrências da
// palavra com replace(new RegExp(palavra, 'g'), novaPalavra).

const fs = require('fs');
const readline = require('readline');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

function question(pergunta) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(pergunta, (resposta) => {
      rl.close();
      return resolve(resposta);
    });
  });
}

const exercicio4 = async () => {
  try {
    const nomeDoArquivo = await question('Qual arquivo deseja utilizar ? ');
    const data = await readFile(nomeDoArquivo, 'utf8');
    console.log('Conteúdo do arquivo:');
    console.log('Início do arquivo:--------------------');
    console.log(data);
    console.log('Fim do arquivo.-----------------------');
    const palavra = await question('Qual a palavra a ser substituida ? ');
    const novaPalavra = await question('Por qual palavra deseja substituir ? ');
    const newContent = data.replace(new RegExp(palavra, 'g'), novaPalavra);
    console.log('--------------');
    console.log('Novo conteúdo');
    console.log('--------------');
    console.log(newContent);
    console.log('Fim do novo conteúdo');
    console.log('--------------');
    const novoNomeArquivo = await question('Qual o nome do arquivo de destino com as modificações ? ');
    if (novoNomeArquivo === nomeDoArquivo) {
      const sobrescrever = await question('Deseja realmente sobreescrever o arquivo ? (s/n)');
      if (sobrescrever !== "s") return;
    }
    await writeFile(novoNomeArquivo, newContent);
    return console.log('Arquivo salvo');
  }
  catch (err) {
    console.log('Erro ao ler o arquivo: ', err.message);
  }
}

exercicio4();
