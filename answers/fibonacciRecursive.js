const test = require("tape")

"use strict";

/**
 * Returns nth value in fibonacci sequence
 * @param {number} num 
 * @returns {number}
 */

const fib = num => {
  if (typeof num !== "number")
    throw TypeError(
      `Expected type Number but received ${Object.prototype.toString.call(num)}`
    );

  if (num < 1 || Number.isNaN(num) || num % 1 !== 0)
    throw Error("num must be positive integer");

  if (num === 1) return 0;
  if (num === 2) return 1;

  return fib(num - 1) + fib(num -2);
};

test("fib throws error", t => {
  t.throws(() => fib("hello"));
  t.throws(() => fib(0));
  t.throws(() => fib(-5));
  t.throws(() => fib(1.4));
  t.throws(() => fib(NaN));
  t.end();
})

test("fib returns correct value", t => {
  t.equals(fib(3), 1)
  t.equals(fib(4), 2)
  t.equals(fib(5), 3)
  t.equals(fib(6), 5)
  t.end();
})