"use strict";

var test = require("tape");

/**
 * Merge two previously sorted lists
 * @param {array} l The left array
 * @param {array} r The right array
 * @returns {array} Merged array
 * 
 * Assumptions
 * 1. Params are arrays
 * 2. arrays are previously sorted
 * 3. all array nodes are numbers
 */

function merge(l, r) {
  var merged = [],
    li = 0,
    ri = 0;

  while (li < l.length && ri < r.length) {
    if (l[li] <= r[ri]) {
      merged.push(l[li]);
      li += 1;
    } else {
      merged.push(r[ri]);
      ri += 1;
    }
  }
  return merged.concat(l.slice(li).concat(r.slice(ri)));
}

/**
 * Sorts a single array
 * @param {array} arr
 * @returns {array} The sorted array
 */
function mergeSort(arr) {
  var left, right, middle;

  // base case: lists of length 1 do not require sorting
  if (arr.length <= 1) {
    return arr;
  }

  // split into two arrays
  middle = Math.floor(arr.length / 2);
  left = arr.slice(0, middle);
  right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

// merge tests

test("merges varying lengths", function(t) {
  var l = [1, 2, 4, 6, 8];
  var r = [2, 5, 7];

  t.deepEquals(merge(l, r), [1, 2, 2, 4, 5, 6, 7, 8]);
  t.end();
});

// mergeSort tests

test("sorts an array of numbers", function(t) {
  var arr = [4, 1, 7, 3];

  t.deepEquals(mergeSort(arr), [1, 3, 4, 7]);
  t.end();
});

test("sorts an array of strings", function(t) {
  var arr = ["hi", "bye", "cat"];

  t.deepEquals(mergeSort(arr), ["bye", "cat", "hi"]);
  t.end();
});

/**
 * 
 * @param {*} arr1 
 * @param {*} arr2 
 * Assumptions
 * 1. The array arguments will be sorted
 * 2. The arrays are composed of Numbers
 * 3. Must pass two arrays
 */
const merge2 = (arrA, arrB) => {
  if (!Array.isArray(arrA) || !Array.isArray(arrB))
    throw TypeError(`Expected an array`);

  const merged = [];
  let a = 0;
  let b = 0;

  while (a < arrA.length && b < arrB.length) {
    if (arrA[a] <= arrB[b]) {
      merged.push(arrA[a]);
      a++;
    } else {
      merged.push(arrB[b]);
      b++;
    }
  }

  return merged.concat(arrA.slice(a), arrB.slice(b));
};

test("throws merge2 error if non array passed in", t => {
  t.throws(() => merge2({}, 34));
  t.throws(() => merge2("bob", []));
  t.throws(() => merge2([], "hello"));
  t.end();
});

const mergeSort2 = arr => {
  // terminal case
  if (arr.length < 2) return arr;

  let middle = Math.floor(arr.length / 2);

  return merge2(
    mergeSort2(arr.slice(0, middle)),
    mergeSort2(arr.slice(middle))
  );
};

const merge3 = (arr1, arr2) => {
  let i1 = 0;
  let i2 = 0;
  const merged = [];

  while (i1 < arr1.length && i2 < arr2.length) {
    if (arr1[i1] <= arr2[i2]) {
      merged.push(arr1[i1]);
      i1 += 1;
    } else {
      merged.push(arr2[i2]);
      i2 += 1;
    }
  }

  return merged.concat(arr1.slice(i1), arr2.slice(i2));
};

const mergeSort3 = arr => {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge3(
    mergeSort3(left),
    mergeSort3(right)
  );
};

/************* */
test("merge3 correctly merges two sorted arrays", t => {
  const arrA = [1, 6, 7, 145];
  const arrB = [5, 8, 249];
  t.deepEquals(merge3(arrA, arrB), [1, 5, 6, 7, 8, 145, 249]);
  t.deepEquals(merge3(arrB, arrA), [1, 5, 6, 7, 8, 145, 249]);
  t.end();
});

test("Sorts given array properly", t => {
  t.deepEqual(mergeSort3([1, 9, 34, 2, 89, 5]), [1, 2, 5, 9, 34, 89]);
  t.notDeepEqual(mergeSort3([1, 9, 34, 2, 89, 5]), [3, 2, 5, 34, 89]);
  t.deepEqual(mergeSort3([1, 9, Infinity, 34, 2, 89, 5, -Infinity]), [
    -Infinity,
    1,
    2,
    5,
    9,
    34,
    89,
    Infinity
  ]);
  t.deepEqual(mergeSort3([]), []);
  t.end();
});
