import React from 'react';
import './App.css';
import Pictures from './Pictures';
import PictureList from './PictureList';

function App() {
  return (
    <div className="App">
    <PictureList>
      <Pictures
        height={100}
        src="https://course.betrybe.com/images/logo_white.png"
        alt="Logo da Trybe"
        legenda="Elemento 1"
      />
      <Pictures
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyH8_Rrk1boHvNLFNOY5KE94SG9sE-BFHaRw&usqp=CAU"
        alt="imagem1"
        legenda="Elemento 2"
      />
    </PictureList>
    </div>
  );
}

export default App;
