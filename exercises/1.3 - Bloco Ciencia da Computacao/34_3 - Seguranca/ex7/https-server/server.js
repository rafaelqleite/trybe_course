const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
};

https
  .createServer(options, (_req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  })
  .listen(8000);

//  para acessar o servidor, vá ao navegador e acesse:
// https://localhost:8000

//  certificado não é reconhecido pelo navegador, mas está presente.

//  testar no cmd com curl https://localhost:8000

// testar com curl --insecure https://localhost:8000

//  https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener
