import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listTodo: [],
      selected: '',
      disabled: true,
    };

    this.addTodo = this.addTodo.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  selectItem(event) {
    const booleanToggle = event.target.classList.toggle('selected');
    if (booleanToggle) {
      this.setState({
        selected: event.target.innerHTML,
        disabled: false
      });
    } else {
      this.setState({
        selected: '',
      });
    }
  }

  removeItem() {
    const updatedList = [];
    const { listTodo, selected } = this.state;
    if (listTodo.length > 1) {
      listTodo.forEach((item) => {
        if (item !== selected) {
          updatedList.push(item);
        }
      });
    }
    this.setState({listTodo: updatedList, disabled: true});
  }

  render() {
    const { listTodo, disabled } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={(todo) => this.addTodo(todo)} />
        <input type="button" value="Remover" data-testid="id-remove" disabled={disabled} onClick={() => this.removeItem()} />
        {listTodo &&
          <ul>
            {
              listTodo.map((todo, index) => (
                <li key={index + 1} onClick={(event) => this.selectItem(event)}>
                  <Item content={todo} />
                </li>
              ))
            }
          </ul>
        }
      </div>
    );
  }
}
export default App;
