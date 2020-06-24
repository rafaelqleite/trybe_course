const assert = require('assert');

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

// implemente seus testes aqui
describe('testes sobre a funcao mySum', () => {
  it('teste 1 na funcao', () => {
    expect(mySum([1, 2, 3, 4])).toBe(10);
  });
  it('teste #2 na funcao', () => {
    expect(mySum([1, -2, -3, 4])).toBe(0);
  });
});