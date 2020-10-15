import React from 'react';

class Counter extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    console.log('entrou no shouldComponentUpdate');
    console.log('------------------');
    console.log('nextProps', nextProps);
    if (nextProps.value >12 && nextProps.value < 16) return false;
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", prevState, prevProps);
  }

  render() {
    console.log("render");
    return (
      <div>
        counter: {this.props.value}
      </div>
    );
  }
}

export default Counter;
