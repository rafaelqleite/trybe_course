function isAbove(num1, num2) {
  return num1 > num2;
}

// implemente seus testes aqui
it('teste #1', () => {
  expect(isAbove(5,2)).toBeTruthy();
});

it('teste #1', () => {
  expect(isAbove(2,5)).toBeFalsy();
});