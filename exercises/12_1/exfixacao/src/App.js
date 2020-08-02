import React from 'react';
import './App.css';

class MyLabel extends React.Component {
  render() {
    console.log(this.props);
    return <p>Cliquei no: {this.props.text}</p>
  }
}

class MyButton extends React.Component {
  render() {
    return <button onClick={() => {this.props.handleClick(this.props.label)}}>{this.props.label}</button>
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {labelText: ''};
  };
  setLabelText = (labelText) => {
    this.setState({ labelText });
  };
  render() {
    return (
      <div className="App">

      <MyLabel text={this.state.labelText} />
      <MyButton label="Botao 1" handleClick={this.setLabelText} />
      <MyButton label="Botao 2" handleClick={this.setLabelText} />
      <MyButton label="Botao 3" handleClick={this.setLabelText} />
      </div>
    );
  }
}

export default App;
