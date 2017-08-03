"use strict";

import test from "tape";

/**
 * Returns nth value of fibonacci sequence with ability to large values 
 * @param {number} num The nth value
 * @returns {number}
 * Assumptions:
 * 1. fib sequence starts with 0.  That is, value for n = 1 is 0
 */

const fib = num => {
  if (typeof num !== "number")
    throw TypeError(
      `expected number but received ${Object.prototype.toString.call(num)}`
    );

  if (Number.isNaN(num) || num % 1 !== 0 || num < 0)
    throw Error("argument must be positive integer");
  
  const seq = [0,1];
  let i = 2;
  while (i <= num){
    seq.push(seq[i - 2] + seq[i-1])
    i += 1;
  }

  return seq[num - 1];
};

test("fib returns correct value", t => {
  t.equal(fib(1), 0);
  t.equal(fib(2), 1);
  t.equal(fib(5), 3)
  t.equal(fib(11), 55);
  t.equal(fib(51), 12586269025);
  t.end();
});

test("fib throws error if input not valid", t => {
  t.throws(() => fib("4"));
  t.throws(() => fib([]));
  t.throws(() => fib(-1));
  t.throws(() => fib(0.3434));
  t.throws(() => fib(NaN));
  t.end();
});

