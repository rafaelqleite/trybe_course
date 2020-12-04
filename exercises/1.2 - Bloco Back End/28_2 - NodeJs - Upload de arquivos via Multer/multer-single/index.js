const express = require('express');
const multer = require('multer');
const app = express();
const PORT = 3000;

const upload = multer({
  dest: 'uploads',
});
app.post('/upload/simples', upload.single('arquivo'), (req, res) => {
  const file = req.file;
  console.log(file);
  res.status(200).json({ file });
});

app.listen(PORT, () => {
  console.log(`Monitorando a porta: ${PORT}`);
});

// ************ATENÇÃO************
// ------------------------------------
// Para testar no postman:
// selecionar modo POST, rota: /upload/simples
// Selecionar Body, depois "form-data"
// em "KEY" selecionar FILE
// e colocar o nome que está dentro do upload.single(). no caso é o arquivo
// Em "VALUE" clicar em "Select file" e selecionar o arquivo.
