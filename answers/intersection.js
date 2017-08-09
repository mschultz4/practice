"use strict";

import test from "tape";

/**
 * Returns intersecting values found in two arrays 
 * @param {array} arr1 
 * @param {array} arr2 
 * @returns {array}
 * 
 * Assumptions
 * 1. No duplicates
 * 2. Order in returned array doesn't matter
 */

const intersection = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2))
    throw TypeError(`expected type array`);

  const intersection = [];

  arr1.forEach(x => {
    if (arr2.includes(x) && !intersection.includes(x)) intersection.push(x);
  });
  return intersection;
};

test("throws error for incorrect argument type", t => {
  t.throws(() => intersection("", []));
  t.throws(() => intersection([], {}));
  t.throws(() => intersection(3, {}));
  t.end();
});

test("finds the correct intersection", t => {
  t.deepEqual(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]), [1, 4]);
  t.deepEqual(intersection([5, 2], [8, 91, 4, 1, 3]), []);
  t.deepEqual(intersection([1, 4, 4, 2], [8, 91, 4, 1, 3]), [1, 4]);
  t.end();
});
