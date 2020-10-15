import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
    this.fetchDog = this.fetchDog.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  async fetchDog() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    console.log(data);
    this.setState({ data: data });
  }

  //Outra forma de se fazer o fetchDog:
  // fetchDog() {
  //   fetch("https://dog.ceo/api/breeds/image/random")
  //     .then(res => res.json())
  //     .then(result => this.setState({ data: result }));
  // }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.data.message.includes('terrier')) {
      return false
    }
    return true;
  }

  componentDidUpdate() {
    localStorage.setItem('url', this.state.data.message);
    alert('Raça do cachorro: ' + this.state.data.message.split('/breeds/')[1].split('/')[0]);
  }

  render() {
    if (this.state.data === '') return "loading...";
    return (
      <div>
        <p>API cachorros randomicos</p><br />
        <button onClick={this.fetchDog}>Mais um Cachorro!</button><br /><br />
        <div>
          <img src={this.state.data.message} alt="teste" />
        </div>
      </div>
    );
  }
}

export default App;
