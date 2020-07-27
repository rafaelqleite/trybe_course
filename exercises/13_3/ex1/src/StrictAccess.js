import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends Component {
  render() {
    const { username, password } = this.props;

    if (username === 'joao' && password === '1234') {
      return <div>"Welcome João"</div>;
    } else {
      alert('Access denied');
      return <Redirect to="/" />;
    }
  }
}

export default StrictAccess;