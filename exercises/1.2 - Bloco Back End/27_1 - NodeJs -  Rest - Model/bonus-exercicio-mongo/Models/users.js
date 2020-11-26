const connection = require('./connection');
const { ObjectId } = require('mongodb');

const isValid = (first_name, last_name, email, password) => {
  if (!first_name || typeof(first_name) !== 'string') return false;
  if (!last_name || typeof(last_name) !== 'string') return false;
  if (!email || typeof(email) !== 'string') return false;
  if (!password || password.length < 6) return false;
  return true;
};

const create = async (first_name, last_name, email, password) => connection()
  .then((db) => db.collection('users').insertOne({ first_name, last_name, email, password }));

const getAllUsers = async() => connection().then((db) => db.collection('users').find({}).toArray());

const getById = async(id) => {
  const users = await connection().then((db) =>
  db.collection('users').findOne(ObjectId(id))
);
  if (users.length === 0) {
    return null;
  }
  return users;
};

const editUserById = async (id, first_name, last_name, email, password) => {
  await connection()
    .then((db) => db.collection('users').updateOne(
      { _id: ObjectId(id) },
      { $set: { first_name, last_name, email, password } }
    ));
  return true;
};

const excludeById = async (id) => {
  await connection().then((db) => db.collection('users').deleteOne({ _id: ObjectId(id) }));
}

module.exports = {
  create,
  isValid,
  getAllUsers,
  getById,
  editUserById,
  excludeById,
};
