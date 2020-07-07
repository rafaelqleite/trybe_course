// Crie uma função que faça requisição para a api dog pictures.
// Mocke a requisição e crie dois testes. O primeiro deve interpretar
// que a requisição se resolveu e teve como valor "request sucess".
// O segundo deve interpretar que a requisição falhou e ter como valor "request failed".
// Crie todos os testes que achar necessário.

const fetch = require('node-fetch');
const URL = 'https://dog.ceo/api/breeds/list/all';
let apiDog = async (url) => {
  let data;
  try {
    const response = await fetch(url);
    data = await response.json();
  }
  catch {
    console.log('deu erro');
  }
  return data;
};

describe('testes com request sucess e fail', () => {
  apiDog = jest.fn();
  afterEach(apiDog.mockReset);

  it('teste com request sucess', async () => {
    apiDog.mockResolvedValue('request sucess');
    expect.assertions(1);
    await expect(apiDog()).resolves.toBe('request sucess');
  });

  it('teste com request failed', async () => {
    expect.assertions(1);
    apiDog.mockRejectedValue('request failed');
    return expect(apiDog()).rejects.toBe('request failed');
  });
});
