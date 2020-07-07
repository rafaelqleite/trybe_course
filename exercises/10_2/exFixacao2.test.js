const math = require('./math');
jest.mock("./math");

// Faça o mock da funcão subtrair e teste sua chamada

test("#subtrair", () => {
  // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
  math.subtrair(5,1);
  expect(math.subtrair).toHaveBeenCalled();
  expect(math.subtrair).toHaveBeenCalledTimes(1);
  expect(math.subtrair).toHaveBeenCalledWith(5,1);
  expect(math.subtrair(5,1)).toBe(undefined);
  expect(math.subtrair).toHaveBeenCalledTimes(2);
});

// Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.
it('#multiplicar', () => {
  math.multiplicar.mockReturnValue(10);
  math.multiplicar()
  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar).toHaveBeenCalledTimes(1);
  expect(math.multiplicar(5,2)).toBe(10);
  expect(math.multiplicar).toHaveBeenCalledTimes(2);
});

//  Faça o mock da função somar e implemente uma função que recebe dois valores
//  e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.

it('#somar', () => {
  math.somar.mockImplementation((a,b) => a+b);
  math.somar(5,3);
  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(5,3);
  expect(math.somar(5,3)).toBe(8);
  expect(math.somar).toHaveBeenCalledTimes(2);
});

//  Faça o mock da função dividir e implemente um retorno padrão com o valor '15'.
//  Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'.
//  Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.

it('#dividir', () => {
  math.dividir.mockReturnValue(15).mockReturnValueOnce(2).mockReturnValueOnce(5);

  expect(math.dividir(5,3)).toBe(2);
  expect(math.dividir).toHaveBeenCalled();
  expect(math.dividir).toHaveBeenCalledWith(5,3);
  expect(math.dividir).toHaveBeenCalledTimes(1);

  expect(math.dividir(15,8)).toBe(5);
  expect(math.dividir).toHaveBeenCalled();
  expect(math.dividir).toHaveBeenCalledWith(15,8);
  expect(math.dividir).toHaveBeenCalledTimes(2);

  expect(math.dividir(30,6)).toBe(15);
  expect(math.dividir).toHaveBeenCalled();
  expect(math.dividir).toHaveBeenCalledWith(30,6);
  expect(math.dividir).toHaveBeenCalledTimes(3);
});

// Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original.
// Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno.
// Restaure a implementação original da função e teste sua execução.

it('#subtrair com spyOn', () => {
  const mockSubtrair = jest.spyOn(math, 'subtrair');
  mockSubtrair.mockReturnValue(20);

  expect(mockSubtrair(5,2)).toBe(20);
  expect(mockSubtrair).toHaveBeenCalled();
  expect(mockSubtrair).toHaveBeenCalledTimes(3);
  expect(mockSubtrair).toHaveBeenCalledWith(5,2);

  mockSubtrair.mockRestore();
  expect(mockSubtrair(5,2)).toBe(undefined);
});