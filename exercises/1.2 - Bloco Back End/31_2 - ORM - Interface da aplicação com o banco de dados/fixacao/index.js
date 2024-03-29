const express = require('express');
const bodyParser = require('body-parser');

const userController = require('./controllers/userControllerExample');

const PORT = 3000;

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users/', userController);

app.listen(PORT, () => {
  console.log(`Estou ouvindo na ${PORT}.`);
});