const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};



const fetchJoke = () => {
  // Adicionar lógica aqui!
  const pegaPosPiadas = document.getElementById('jokeContainer');
  fetch(API_URL, myObject).then(response => response.json()).then(data => pegaPosPiadas.innerHTML = data.joke);
};

window.onload = () => fetchJoke();