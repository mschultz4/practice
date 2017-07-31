"use strict";

const assert = require("assert");

/**
 * Determines if an array of numbers is sorted 
 * @param {array} arr The array to test 
 * @returns {boolean} 
 */

const isSortedDuh = arr => {
  if (!Array.isArray(arr))
    throw TypeError(
      `Expected an Array but received ${Object.prototype.toString.call(arr)}`
    );
  
  // Only supports an array of numbers
  arr.forEach(num => {
    if(Number.isNaN(num) || typeof num !== "number") throw Error("Must be an error of numbers")
  })

  let arrClone = [...arr].sort((a, b) => {
    // Node's sort doesn't sort -Infinity properly
    if (a === -Infinity) return -1;
    if (b === -Infinity) return 1;
    return a < b ? -1 : 1;
  });

  return arr.every((val, index) => arrClone[index] === val);
};

const isSortedLoop = arr => {
  let i = 0;
  while (i < arr.length - 1) {
    if (arr[i] > arr[i + 1]) return false;
    i += 1;
  }
  return true;
};

test(isSortedDuh);
test(isSortedLoop);

function test(func) {
  assert.ok(func([]), "empty array is ok");
  assert.ok(func([-Infinity, -5, 0, 3, 9]), "returns true if sorted");
  assert.equal(func([3, 9, -3, 10]), false, "returns false if not sorted");
  assert.equal(func([3, 5, 6, 10, 9]), false, "returns false if not sorted");
}
