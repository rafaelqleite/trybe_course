import React from 'react';
import PropTypes from 'prop-types';

class Pictures extends React.Component {

  render() {
    const { height, src, alt, legenda } = this.props;
    return (
      <div>
        <h3>{legenda}</h3>
        <img src={src} alt={alt} height={height} />
        <br />
      </div>
    );
  }
}

export default Pictures;

Pictures.defaultProps = {
  height: 200,
}

Pictures.propTypes = {
  height: PropTypes.number.isRequired,
  src: PropTypes.string,
  alt: PropTypes.string,
  legenda: PropTypes.string,
};
