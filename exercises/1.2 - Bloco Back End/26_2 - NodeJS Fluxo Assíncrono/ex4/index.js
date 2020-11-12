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

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const exercicio4 = () => {
  rl.question('Qual arquivo deseja utilizar ? ', (nomeDoArquivo) => {
    fs.readFile(nomeDoArquivo, 'utf8', (err, data) => {
      if (err) return console.log('Erro ao ler o arquivo: ', err.message);
      console.log('Conteúdo do arquivo:');
      console.log('Início do arquivo:--------------------');
      console.log(data);
      console.log('Fim do arquivo.-----------------------');

      rl.question('Qual a palavra a ser substituida ? ', (palavra) => {
        rl.question('Por qual palavra deseja substituir ? ', (palavraASubstituir) => {
          const newContent = data.replace(new RegExp(palavra, 'g'), palavraASubstituir);
          console.log('--------------');
          console.log('Novo conteúdo');
          console.log('--------------');
          console.log(newContent);
          console.log('Fim do novo conteúdo');
          console.log('--------------');
          rl.question('Qual o nome do arquivo de destino com as modificações ? ', (novoNomeArquivo) => {
            if (novoNomeArquivo === nomeDoArquivo) {
              rl.question('Deseja realmente sobreescrever o arquivo ? (s/n)', (sobrescrever) => {
                if (sobrescrever === 'n') return rl.close();
                fs.writeFile(novoNomeArquivo, newContent, (err) => {
                  if (err) {
                    throw err;
                  }
                  console.log('Arquivo salvo');
                  return rl.close();
                });
              });
            }
          });
        });
      });
    });
  });
};

exercicio4();
