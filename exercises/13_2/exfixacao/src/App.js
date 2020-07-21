import React from 'react';
import Counter from './Counter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log("construtor");
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.setState({counter: 10});
  }

  render() {
    return (
      <div>
      <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}>
          Soma
      </button>
        <Counter value={this.state.counter}/>
      </div>
    );
  }
}

export default App;