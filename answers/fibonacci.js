const test = require("tape");

("use strict");

/**
 * Return nth value of fibonacci sequence 
 * @param {number} num The sequence number n
 * @returns {number} The nth value
 */

const fib = num => {
  if (typeof num !== "number")
    throw TypeError(
      `num must be a number.  You passed ${Object.prototype.toString.call(num)}`
    );

  if (Number.isNaN(num) || num < 1 || num % 1 !== 0)
    throw Error(`num must be positive integer`);

  const seq = [0, 1];
  let i = 2;
  while (num >= i) {
    seq.push(seq[i - 1] + seq[i - 2]);
    i += 1;
  }

  return seq[num - 1];
};

// sequence for reference => [0,1,1,2,3,5,8,13,21,34,55]
test("fib returns value as expected", t => {
  t.equals(fib(3), 1);
  t.equals(fib(1), 0);
  t.equals(fib(11), 55);
  t.end();
});

test("throws error if non number passed in", t => {
  t.throws(() => fib("some string"));
  t.throws(() => fib(() => null));
  t.throws(() => fib());
  t.throws(() => fib(NaN));
  t.throws(() => fib(19.45));
  t.throws(() => fib(-23));
  t.end();
});

const fibRecursive = num => {
  if (typeof num !== "number")
    throw TypeError(
      `num must be a number.  You passed ${Object.prototype.toString.call(num)}`
    );

  if (Number.isNaN(num) || num < 1 || num % 1 !== 0)
    throw Error(`num must be positive integer`);

  if (num === 1) return 0;
  if (num === 2) return 1;

  return fibRecursive(num - 1) + fibRecursive(num - 2);
};

test("fibRecursive returns value as expected", t => {
  t.equals(fibRecursive(3), 1);
  t.equals(fibRecursive(1), 0);
  t.equals(fibRecursive(11), 55);
  t.end();
});

test("fibRecursive throws error if non number passed in", t => {
  t.throws(() => fibRecursive("some string"));
  t.throws(() => fibRecursive(() => null));
  t.throws(() => fibRecursive());
  t.throws(() => fibRecursive(NaN));
  t.throws(() => fibRecursive(19.45));
  t.throws(() => fibRecursive(-23));
  t.end();
});
