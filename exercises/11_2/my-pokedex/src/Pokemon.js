import React from 'react';

class Pokemon extends React.Component {
  render(){
    const { name, image, type, averageWeight: { value, measurementUnit } } = this.props.abestado;
    return (
      <div className='wrapping-pokemonUnit'>
        <div className='left'>
          Nome: <b>{ name }</b><br/>
          Tipo: <strong><em>{ type }</em></strong><br/>
          Peso: <em><b>{value} {measurementUnit}</b></em><br/>
        </div>
        <div className='right'>
          <img src={ image } alt = {name}/><br/>
        </div>
      </div>
    );
  }
}

export default Pokemon;