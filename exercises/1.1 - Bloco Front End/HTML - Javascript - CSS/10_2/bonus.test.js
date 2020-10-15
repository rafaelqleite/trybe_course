const fetch = require('node-fetch');
const API_URL = 'https://icanhazdadjoke.com/';

jest.mock('node-fetch');

const fetchJoke = () => {
  return fetch(API_URL, { headers: { Accept: 'application/json' }})
    .then(response => response.json())
    .then(data => data.joke);
};

// O código acima utiliza uma API de piadas e implementa o fetchJoke,
// que é um gerador de piadas ruins. As piadas são geradas aleatoriamente
// através do endpoint armazenado em API_URL. Faça um teste que verifique
// a chamada dessa API para um resultado específico. Para isso, faça um mock
// do fetch, que faz a chamada à API, utilizando os seguintes dados:

// {
//   'id': '7h3oGtrOfxc',
//   'joke': 'Whiteboards ... are remarkable.',
//   'status': 200
// }

test('teste requisitado', () => {
  const joke = {
    "id": "7h3oGtrOfxc",
    "joke": "Whiteboards ... are remarkable.",
    "status": 200
  }

  fetch.mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve(joke),
  }))

  return fetchJoke()
    .then((data) => expect(data).toEqual("Whiteboards ... are remarkable."))
})