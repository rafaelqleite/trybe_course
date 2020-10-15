import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Users from './Users';
import StrictAccess from './StrictAccess';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Link to="/strict-access">Strict Access</Link>

        <Switch>
          <Route
            path="/strict-access"
            render={(props) => <StrictAccess {...props} username="joao" password="12345" />}
            />
          <Route
            path="/users/:usersID"
            render={(props) => <Users {...props} greetingMessage="Good Morning" />}
          />
          <Route
            exact path="/users"
            render={(props) => <Users {...props} greetingMessage="Good Morning" />}
          />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;