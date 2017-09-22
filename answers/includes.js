const test = require("tape");

/**
 * Tests whether a given value is in a sorted array 
 * @param {array} arr A sorted array of values 
 * @param {number} val The integer to test 
 * @returns {boolean}
 * Assumptions
 * 1. The array is sorted
 * 2. The array is numeric
 * 3. We can trust the inputs will be of correct type and values
 */
const includes = (arr, val) => {
  const middle = Math.ceil(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle)

  console.log(arr[middle])
  if (arr[middle] === val) return true;
  if (arr.length === 1) return false;

  return val > arr[middle] ? includes(right, val): includes(left, val);
};

test("verify includes returns correct value", t => {
  t.ok(includes([1, 3, 8, 10], 8));
  t.ok(includes([1, 3, 8, 8, 15], 15));
  t.ok(includes([1, 3, 8, 8, Infinity], Infinity));
  t.notOk(includes([1, 3, 8, 10, 15], 9));
  t.notOk(includes([1, 3, 8, 10, 15], -2));
  t.notOk(includes([1, 3, 8, 10, 15], 23));
  t.end();
});
