import React from 'react';
import Data from './data';

class Pokemon extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pokemonIndex: 0
    };
  }

  nextPokemon = (state) => {
    this.setState({
      pokemonIndex: (state.pokemonIndex + 1) % Data.length
    });
  }

  handleClick = () => {
    this.nextPokemon(this.state);
  }



  render() {
    const { name, type, image, averageWeight: {  value, measurementUnit } } = Data[this.state.pokemonIndex];
    return (
      <div className="interface">
        <div className="pokemonUnit">
        Nome: { name }<br />
        <img src={image} alt={name} /><br />
        Tipo: {type}<br />
        Peso: {value} {measurementUnit}<br />
        </div>
        <button onClick={this.handleClick}>Próximo</button>
      </div>
      );
  }
}

export default Pokemon;
