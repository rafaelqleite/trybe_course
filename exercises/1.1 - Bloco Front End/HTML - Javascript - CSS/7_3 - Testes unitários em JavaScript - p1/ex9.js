const assert = require('assert');

function change(param) {
  return !param;
}


// implemente seus testes aqui

assert.ok(change(true) === false, 'nao esta trocando os estados entre false e true');