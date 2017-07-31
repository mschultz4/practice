import test from "tape";

/**
 * isPrime detects if input is prime 
 * @param {number} num The number to check
 * @returns {boolean} 
 * 
 * Assumptions
 * 1. 1, decimals, and negatives are not prime
 */

const isPrime = num => {
  if (typeof num !== "number") {
    throw TypeError(
      "Expected type number but received: " +
        Object.prototype.toString.call(num)
    );
  }

  // remove simple cases: NaN, negatives and 1, and decimals
  if (Number.isNaN(num) || num < 2 || num % 1 !== 0) return false;
  if (num === 2) return true;

  let divisor = 2;

  // numbers divided by more than their half will return decimal
  while (divisor < num / 2) {
    if (num % divisor === 0) return false;
    divisor += 1;
  }
  return true;
};

test("num is a number", t => {
  t.throws(() => isPrime("boot"));
  t.throws(() => isPrime({ bob: "hello" }));
  t.throws(() => isPrime(["hello"]));
  t.end();
});

test("num is not negative, decimal, or NaN", t => {
  t.notOk(isPrime(-34));
  t.notOk(isPrime(0.34));
  t.notOk(isPrime(NaN));
  t.end();
});

test("isPrime detects prime successfully", t => {
  t.ok(isPrime(997), "997 is prime");
  t.ok(isPrime(2), "2 is prime");
  t.ok(isPrime(3), "3 is prime");
  t.end();
});

test("isPrime returns false for non primes", t => {
  t.notOk(isPrime(6));
  t.notOk(isPrime(1));
  t.notOk(isPrime(15));
  t.end();
});
