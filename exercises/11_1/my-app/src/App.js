import React from 'react';
import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
};

const compromissos = ['teste1', 'teste2', 'teste3', 'test4', 'test5'];

function App() {
  return (
    <div className="App">
      {task('valor')}
      {compromissos.map(item => task(item))}
    </div>
  );
}

export default App;
