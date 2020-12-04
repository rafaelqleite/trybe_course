const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer({ dest: 'uploads' });

app.set('view engine', 'ejs');

const PORT = 3000;

app.post('/upload/simples', upload.single('arquivo'), (req, res) => {
  const file = req.file;
  console.log(file);
  res.status(200).json({ file });
});

app.get('/form', (req, res) => {
  res.render('form');
});

app.listen(PORT, () => {
  console.log(`Estou ouvindo na porta ${PORT}`);
});