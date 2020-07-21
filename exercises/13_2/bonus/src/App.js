import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      name: '',
      array: [],
    };
    this.fetchDog = this.fetchDog.bind(this);
    this.addDog = this.addDog.bind(this);
  }

  componentDidMount() {
    if (localStorage.array) {
      const parseStorage = JSON.parse(localStorage.array);
      console.log('achoulocal', parseStorage[0]);
      const lastDog = parseStorage[parseStorage.length - 1].message;
      return this.setState({ data: { message: lastDog } });
    }
    this.fetchDog();
  }

  async fetchDog() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    console.log('data:', data);
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      return alert('Raça do cachorro: ' + this.state.data.message.split('/breeds/')[1].split('/')[0]);
    }
    localStorage.setItem('array', JSON.stringify(this.state.array));
  }

  addDog() {
    const { data: {message}, name, array } = this.state;
    const objectArray = { message, name };
    const novoArray = [ ...array, objectArray ];
    this.setState({ array : novoArray });
    this.setState({ name: '' });
    console.log(this.state);
  }

  render() {
    if (this.state.data === '') return "loading...";
    return (
      <div>
        <p>API cachorros randomicos</p><br />
        <label htmlFor='giveName'>Dê um nome para o cachorro: </label>
        <input id='giveName' type="text" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value})}/>
        <button onClick={this.addDog}>Salvar</button><br /> <br />
        <button onClick={this.fetchDog}>Mais um Cachorro!</button><br /><br />
        <div>
          <img src={this.state.data.message} alt="teste" />
        </div>
      </div>
    );
  }
}

export default App;
