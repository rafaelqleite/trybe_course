// Ainda com a mesma função do primeiro exercício, utilizando o mock,
// crie uma nova implementação que receba três parâmetros e retorne sua multiplicação.
// Após fazer os devidos testes para ela, resete sua implementação e crie uma nova,
// que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

let randomNumber = () => {
  const saida = Math.floor(Math.random() * 100);
  if (saida === 0) {
    return Math.floor(Math.random() * 100);
  }
  return saida;
};

it('testes solicitados', () => {
  randomNumber = jest.fn();
  randomNumber.mockImplementation((a, b, c) => a * b * c);
  randomNumber(2, 3, 4);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
  expect(randomNumber).toHaveBeenCalledWith(2, 3, 4);
  expect(randomNumber(2,3,4)).toBe(24);
  expect(randomNumber).toHaveBeenCalledTimes(2);

  randomNumber.mockReset();
  randomNumber.mockImplementation(a => 2*a);
  expect(randomNumber(2)).toBe(4);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
  expect(randomNumber).toHaveBeenCalledWith(2);
});