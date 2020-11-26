const connection = require('./connection');

const isValid = (first_name, last_name, email, password) => {
  if (!first_name || typeof(first_name) !== 'string') return false;
  if (!last_name || typeof(last_name) !== 'string') return false;
  if (!email || typeof(email) !== 'string') return false;
  if (!password || password.length < 6) return false;
  return true;
};

const create = async (first_name, last_name, email, password) => connection.execute(
    'INSERT INTO db_users.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
    [first_name, last_name, email, password],
);


const getAllUsers = async() => {
  const [users] = await connection.execute('SELECT * FROM db_users.users');
  return users;
}

const getById = async(id) => {
  const [users] = await connection.execute('SELECT * FROM db_users.users WHERE id = ?', [id]);
  if (users.length === 0) {
    return null;
  }
  return users;
};

const editUserById = async (id, first_name, last_name, email, password) => {
  const [users] = await connection.execute('SELECT * FROM db_users.users WHERE id = ?', [id]);
  if (users.length === 0) {
    return null;
  }
  await connection.execute(
    'UPDATE db_users.users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?',
    [first_name, last_name, email, password, id],
  );
  return true;
};

const excludeById = async (id) => {
  const [users] = await connection.execute('SELECT * FROM db_users.users WHERE id = ?', [id]);
  if (users.length === 0) {
    return null;
  }
  await connection.execute('DELETE FROM db_users.users WHERE id = ?', [id]);
  return true;
}

module.exports = {
  create,
  isValid,
  getAllUsers,
  getById,
  editUserById,
  excludeById,
};