//  Classe que simula a memória Secundária
const fs = require('fs')

const DISK_PATH = './disk'

class SecondaryMemory {
  load (value) {
    //  No load , utilizando o método writeFileSync do fs , escreva o código que crie um novo
    //  arquivo utilizando nextFileName como path e salve o value no conteúdo deste novo arquivo.
    const disk = fs.readdirSync(DISK_PATH);
    const nextFileName = `${DISK_PATH}/cel${disk.length}`;
    fs.writeFileSync(nextFileName, value);
  }

  get (index) {
    //  No get , retorne o conteúdo do arquivo fileName , utilize o método readFileSync do fs.
    //  Não esqueça de converter o valor para numérico ( float ou int ).
    const fileName = `${DISK_PATH}/cel${index}`;
    return parseInt(fs.readFileSync(fileName), 10);
  }

  clean () {
    fs.rmdirSync(DISK_PATH, { recursive: true });
    fs.mkdirSync(DISK_PATH);
  }
}

module.exports = SecondaryMemory;

//  https://nodejs.org/api/fs.html#fs_fs_writefilesync_file_data_options
//  https://nodejs.org/api/fs.html
