function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
describe('teste na funcao myRemoveWithoutCopy', () => {
  it('teste #1', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
  });
  it('teste2', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('verificar se o array passado por parametro nao sofreu alteracoes', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4])).toStrictEqual([1, 2, 3, 4]);
  });

});