function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

describe('testes sobre a função add', () => {
  it('testa se o retorno de (numero1,numero2) eh numero1+numero2', () => {
    expect(add(4,5)).toBe(9);
    expect(add(0,0)).toBe(0);
  });

});

describe('teste de erro sobre a funcao add', () => {
  test('teste de tHrow', () => {
    expect(() => {
      add(4,"5");
    }).toThrow();
  });

  it('teste de throw checando a mensagem', () => {
    expect(() => {
      add("4",5);
    }).toThrow(new Error('parameters must be numbers'));
  });
});