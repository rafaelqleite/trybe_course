// Crie uma função que gere um número aleatório entre 0 e 100.
// Você irá criar também os testes para essa função. Utilizando o mock,
// defina o retorno padrão como 10. Teste se a função foi chamada, qual
// seu retorno e quantas vezes foi chamada.

let randomNumber = () => {
  const saida = Math.floor(Math.random() * 100);
  if (saida === 0) {
    return Math.floor(Math.random() * 100);
  }
  return saida;
};

it('testes solicitados', () => {
  randomNumber = jest.fn().mockReturnValue(10);
  randomNumber();
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
  expect(randomNumber()).toBe(10);
  expect(randomNumber).toHaveBeenCalledTimes(2);
});