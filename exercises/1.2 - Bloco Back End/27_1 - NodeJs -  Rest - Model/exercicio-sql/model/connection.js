const mysql = require('mysql2/promise');

const connection = mysql.createPool(
  {
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'db_users',
  },
);

module.exports = connection;
