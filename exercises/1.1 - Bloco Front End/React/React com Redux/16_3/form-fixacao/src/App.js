import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Consolidado from './Consolidado';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render () {
    return (
      <div>
        <Provider store={store}>
          <Form />
          <Consolidado />
        </Provider>
      </div>
    );
  }
}

export default App;