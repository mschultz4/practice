const test = require("tape");

const merge = (arr1, arr2) => {
  const merged = [];
  let i = 0;
  let j = 0;  

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i])
      i += 1;
    } else {
      merged.push(arr2[j])
      j += 1;
    }
  }
  return merged.concat(arr1.slice(i), arr2.slice(j));
}

const mergeSort = arr => {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

/************* */
test("merge correctly merges two sorted arrays", t => {
  const arrA = [1, 6, 7, 145];
  const arrB = [5, 8, 249];
  t.deepEquals(merge(arrA, arrB), [1, 5, 6, 7, 8, 145, 249]);
  t.deepEquals(merge(arrB, arrA), [1, 5, 6, 7, 8, 145, 249]);
  t.end();
});

test("Sorts given array properly", t => {
  t.deepEqual(mergeSort([1, 9, 34, 2, 89, 5]), [1, 2, 5, 9, 34, 89]);
  t.notDeepEqual(mergeSort([1, 9, 34, 2, 89, 5]), [3, 2, 5, 34, 89]);
  t.deepEqual(mergeSort([1, 9, Infinity, 34, 2, 89, 5, -Infinity]), [
    -Infinity,
    1,
    2,
    5,
    9,
    34,
    89,
    Infinity
  ]);
  t.deepEqual(mergeSort([]), []);
  t.end();
});
