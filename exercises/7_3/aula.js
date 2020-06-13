const assert = require('assert');
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
const expected = myRemove([1, 2, 3, 4], 4)
assert.deepEqual(expected, [1, 2, 3])