function change(param) {
  return !param;
}

// implemente seus testes aqui
it('teste se a funcao eh true or false', () => {
  expect(change(1)).toBeFalsy();
});
it('teste se a funcao eh true or false #2', () => {
  expect(change(0)).toBe(true);
});