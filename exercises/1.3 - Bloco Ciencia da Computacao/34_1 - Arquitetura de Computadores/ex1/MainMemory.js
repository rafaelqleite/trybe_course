//  Classe que simula a MEMÓRIA RAM!
class MainMemory {
  constructor () {
    this.loadedMemory = [];
  }

  load (value) {
    //  No load você irá adicionar ( push ) o elemento passado ( value ) ao array loadedMemory .
    this.loadedMemory.push(value);
  }

  get (index) {
    //  No get você irá retornar a posição dada ( index ) do array de loadedMemory .
    //  Não esqueça de converter o valor para numérico ( float ou int ).
    return parseFloat(this.loadedMemory[index]) || 0;
  }

  clean () {
    this.loadedMemory = [];
  }

}

module.exports = MainMemory;
