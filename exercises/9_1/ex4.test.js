function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
describe('teste na funcao myRemove', () => {
  it('teste #1', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
  });
  it('teste2', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('verificar se o array passado por parametro nao sofreu alteracoes', () => {
    expect(myRemove([1, 2, 3, 4])).toStrictEqual([1, 2, 3, 4]);
  });

});