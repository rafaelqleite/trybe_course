import React from 'react';

const Users = ({ greetingMessage = 'Hi There', match }) => (
  <div>
    <h2> Users </h2>
    <p> {greetingMessage}, this is my awesome Users component </p>
    {console.log(match)}
    <p>{match.params.usersID}</p>
  </div>
);

export default Users;