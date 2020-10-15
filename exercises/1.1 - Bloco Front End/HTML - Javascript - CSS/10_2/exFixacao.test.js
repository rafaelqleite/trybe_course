// defina uma função que retorna um número aleatório entre 1 e 100.
// A seguir, defina uma outra função que recebe um parâmetro e checa se o número aleatório é divisível
// pelo número do parâmetro.

let randomNumber = () => {
  const saida = Math.floor(Math.random() * 100);// Lógica de gerar o número
  if (saida === 0) return Math.floor(Math.random() * 100);
  return saida;
}

function isDivisible(number) {
  if (randomNumber() % number === 0) {
    return true;
  }
  return false;
}
// Feito isso, escreva um teste que verifica que a função randomNumber()
// é chamada quando invocamos a isDivisible().

it('teste se a funcao randomNumber eh chamada apos invocar isDivisible', () => {
 randomNumber = jest.fn();
 isDivisible();
 expect(randomNumber).toHaveBeenCalled();
});

// Teste que, quando a randomNumber() retorna um número par e isDivisible()
// recebe um dois, o retorno é true.
it('teste com randomNumber retornando par e isDivisible retorna true', () => {
  randomNumber = jest.fn().mockReturnValue(2);
  expect(isDivisible(randomNumber())).toBe(true);
});

// Simule (mocke) dois valores para a função randomNumber() retornar e um terceiro valor default.
// Chame a função isDivisible() quatro vezes num mesmo teste e cheque que os retornos são conforme esperado.

it('dois mocke para randomNumber e um terceiro default', () => {
  randomNumber = jest.fn()
  .mockReturnValue(5)
  .mockReturnValueOnce(2)
  .mockReturnValueOnce(3);

  expect(isDivisible(2)).toBe(true);
  expect(randomNumber).toHaveBeenCalledTimes(1);

  expect(isDivisible(3)).toBe(true);
  expect(randomNumber).toHaveBeenCalledTimes(2);

  expect(isDivisible(5)).toBe(true);
  expect(randomNumber).toHaveBeenCalledTimes(3);

  expect(isDivisible(2)).toBe(false);
  expect(randomNumber).toHaveBeenCalledTimes(4);
});