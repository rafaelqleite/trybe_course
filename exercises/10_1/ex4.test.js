const fetch = require('node-fetch');

const URL = 'https://api.github.com/users/tryber/repos?per_page=100';

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

// O código acima busca no GitHub de um usuário, de acordo com a URL, seus repositórios,
// e retorna uma lista como resultado.
// Dada a URL 'https://api.github.com/users/tryber/repos',
// faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list'
// e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.

// describe('testes com a API do github', () => {
//   it('teste se o respositorio do todolist existe', () => {

//   });
// });

describe('testes conteudo retorno da funcao getRepos', () => {
  it('verificando se possui sd-01-week4-5-project-todo-list', async () => {
    const arrayTeste = await getRepos(URL);
    expect.assertions(1);
    expect(arrayTeste).toContain('sd-01-week4-5-project-todo-list');
  });
  it('verificando se possui sd-01-week4-5-project-meme-generator', async () => {
    const arrayTeste = await getRepos(URL);
    expect(arrayTeste).toContain('sd-01-week4-5-project-meme-generator');
  });
});

//  outra forma de fazer:
describe('testes conteudo retorno da funcao getRepos', () => {
  it('testando se o conteudo do array com os projetos esta no array retorno', async () => {
    const retornoGetRepos = await getRepos(URL);
    const arrayComparar = ['sd-01-week4-5-project-meme-generator', 'sd-01-week4-5-project-todo-list'];
    expect(retornoGetRepos).toEqual(expect.arrayContaining(arrayComparar));
  });
});

//  documentacao do teste acima: https://jestjs.io/docs/en/expect#expectarraycontainingarray