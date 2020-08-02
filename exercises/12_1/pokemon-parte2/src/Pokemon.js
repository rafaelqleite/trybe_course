import React from 'react';
import Data from './data';

class Pokemon extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pokemonIndex: 0,
      filterType: 'Fire'
    };
  }

  nextPokemon = (state, listLength) => {
    this.setState({
      pokemonIndex: (state.pokemonIndex + 1) % listLength
    });
  }

  handleClick = (listLength) => {
    this.nextPokemon(this.state, listLength);
  }

  setFilterType = (state, type) => {
    this.setState({
      pokemonIndex: state.pokemonIndex,
      filterType: type
    });
  }


  render() {
    const filteredPokemon = Data.filter((pokemon) => pokemon.type === this.state.filterType);
    const { name, type, image, averageWeight: {  value, measurementUnit } } = filteredPokemon[this.state.pokemonIndex];
    return (
      <div className="interface">
        <div className="pokemonUnit">
        Nome: { name }<br />
        <img src={image} alt={name} /><br />
        Tipo: {type}<br />
        Peso: {value} {measurementUnit}<br />
        </div>
        <div className="botoes">
          <button onClick={() => this.handleClick(filteredPokemon.length)}>Próximo</button>
          <button onClick={() => this.setFilterType(this.state, 'Fire')}>Fire</button>
          <button onClick={() => this.setFilterType(this.state, 'Psychic')}>Psychic</button>
        </div>
      </div>
      );
  }
}

export default Pokemon;
