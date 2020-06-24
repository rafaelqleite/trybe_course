function myIndexOf(arr, item) {
  let searchedIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (item === arr[i]) {
      searchedIndex = i;
    }
  }
  return searchedIndex;
}
console.log(myIndexOf([1, 2, 3, 4], 3));
// implemente seus testes aqui
describe('testes da função myIndexof', () => {
  it('teste se retorna valor esperado 1', () => {
    expect(myIndexOf([1, 2, 3, 4], 3)).toBe(2);
  });

  it('teste #2', () => {
    expect(myIndexOf([1, 2, 3, 4], 5)).toBe(-1);
  });
});