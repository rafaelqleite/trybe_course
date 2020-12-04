const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');

const stream = fs.createReadStream('./meu-arquivo.txt');

const form = FormData();

form.append('arquivo', stream);

const formHeaders = form.getHeaders();

axios.post('http://localhost:3000/upload/simples', form, {
  headers: {
    ...formHeaders,
  },
}).then((response) => console.log(response)).catch((err) => console.log(err));

// para testar usando axios: node send-file.js
// e deixar o "server" do multer-single rodando...
