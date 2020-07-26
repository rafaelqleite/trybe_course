import React from 'react';
import PropTypes from 'prop-types';

const PicturesList = (props) => {
    return (
      <ul className="ListaMapChildren">
        {props.children.map((filho, index) => <li key={ index }>{ filho }</li>)}
      </ul>
    );
}
export default PicturesList;

PicturesList.propTypes = {
  children: PropTypes.node.isRequired,
};
