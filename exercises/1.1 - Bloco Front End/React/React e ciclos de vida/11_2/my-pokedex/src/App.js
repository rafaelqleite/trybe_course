import React from 'react';
import './App.css';
import data from './data.js';
import PokedexList from './PokedexList.js';

function App() {
  return (
    <div className="App">
      <h1>PokeDex</h1>
      <PokedexList pokemons = { data }/>
    </div>
  );
}

export default App;
