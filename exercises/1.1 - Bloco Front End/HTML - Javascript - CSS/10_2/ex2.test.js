// Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação,
// que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo.
// Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

let randomNumber = () => {
  const saida = Math.floor(Math.random() * 100);
  if (saida === 0) {
    return Math.floor(Math.random() * 100);
  }
  return saida;
};

it('testes solicitados', () => {
  randomNumber = jest.fn();
  randomNumber.mockImplementation((a, b) => a / b);
  randomNumber(4,2);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
  expect(randomNumber).toHaveBeenCalledWith(4,2);
  expect(randomNumber(4,2)).toBe(2);
  expect(randomNumber).toHaveBeenCalledTimes(2);
});