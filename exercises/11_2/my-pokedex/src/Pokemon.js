import React from 'react';

class Pokemon extends React.Component {
  render(){
    const { name, image, type, averageWeight: { value, measurementUnit } } = this.props.abestado;
    return (
      <p>
      <div className='wrapping-pokemonUnit'>
        <b>{ name }</b><br/>
        <img src={ image } alt = {name}/><br/>
        Tipo: <strong><em>{ type }</em></strong><br/>
        Peso: <em><b>{value} {measurementUnit}</b></em><br/>
      </div>
      </p>
    );
  }
}

export default Pokemon;