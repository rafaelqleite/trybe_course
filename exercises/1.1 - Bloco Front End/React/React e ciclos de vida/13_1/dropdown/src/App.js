import React, { Component } from 'react';
import Dropdown from './Dropdown'

class App extends Component {
  render() {
    const content = [
      { id: 1, item: 'k' },
      { id: 2, item: 'b' },
      { id: 3, item: 'c' },
      { id: 4, item: 'd' },
    ];

    return (
      <div className="main">
        <Dropdown list={content}></Dropdown>
      </div>
    );
  }
}

export default App;