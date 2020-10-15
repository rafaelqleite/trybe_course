import React from 'react';
import Pokemon from './Pokemon.js';

class PokedexList extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className='wrapping-pokemonList'>
        {pokemons.map(element => <Pokemon key={element.name} abestado={element}/>)}
      </div>
    );
  }
}

export default PokedexList;