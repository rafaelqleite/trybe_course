// Utilizando as mesmas funções do exercício anterior,
// repita a implementação para a primeira função.
// Após repetir a implementação, restaure a implementação
// original e crie os testes necessários para validar.

let stringToCapslock = string => string.toUpperCase();

let pegaPrimeiraLetra = string => string[0];

let concatenaStrings = (string1, string2) => {
  const saida = `${string1} ${string2}`;
  return saida;
};

it('testes com a funcao stringToCapsLock', () => {
  stringToCapslock = jest.fn();
  stringToCapslock.mockImplementation(string => string.toLowerCase());
  expect(stringToCapslock('TESTANDO')).toBe('testando');
});

it('retornando a funcao para o parametro inicial', () => {
  stringToCapslock.mockReset();
  stringToCapslock.mockImplementation(string => string.toUpperCase());
  expect(stringToCapslock('teste')).toBe('TESTE');
});

it('testes com a funcao: pegaPrimeiraLetra ', () => {
  pegaPrimeiraLetra = jest.fn();
  pegaPrimeiraLetra.mockImplementation((string) => {
    const ultimaLetra = string[string.length-1];
    return ultimaLetra;
  });
  expect(pegaPrimeiraLetra('aprendendo')).toBe('o');
});

it('retornando a funcao pegaPrimeiraLetra pra funcao inicial', () => {
  pegaPrimeiraLetra.mockReset();
  pegaPrimeiraLetra.mockImplementation(string => string[0]);
  expect(pegaPrimeiraLetra('TESTANDO')).toBe('T');
});

it('testes com a funcao: concatenaStrings', () => {
  concatenaStrings = jest.fn();
  concatenaStrings.mockImplementation((string1, string2, string3) => {
    return `${string1} ${string2} ${string3}`
  });

  expect(concatenaStrings('teste1', 'teste2', 'teste3')).toBe('teste1 teste2 teste3');
});

it('retornando concatenaStrings para o retorno inicial', () => {
  concatenaStrings.mockReset();
  concatenaStrings.mockImplementation((string1, string2) => `${string1} ${string2}`);
  expect(concatenaStrings('testando', 'a funcao')).toBe('testando a funcao');
});