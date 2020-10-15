// Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma
// string e retorná-la em caixa alta. A segunda deve também receber uma string
// e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las.

// Faça o mock do arquivo. Faça uma nova implementação para a primeira função,
// mas agora ela deve retornar a string em caixa baixa. Para a segunda função,
// uma nova implementação deve retornar a última letra de uma string. A terceira
// deve receber três strings e concatená-las.

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

it('testes com a funcao: pegaPrimeiraLetra ', () => {
  pegaPrimeiraLetra = jest.fn();
  pegaPrimeiraLetra.mockImplementation((string) => {
    const ultimaLetra = string[string.length-1];
    return ultimaLetra;
  });
  expect(pegaPrimeiraLetra('aprendendo')).toBe('o');
});

it('testes com a funcao: concatenaStrings', () => {
  concatenaStrings = jest.fn();
  concatenaStrings.mockImplementation((string1, string2, string3) => {
    return `${string1} ${string2} ${string3}`
  });

  expect(concatenaStrings('teste1', 'teste2', 'teste3')).toBe('teste1 teste2 teste3');
});
