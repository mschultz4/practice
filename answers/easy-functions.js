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

/**
 * Factorial returns the factorial of a given number
 * @param {number} num 
 * @returns {number} The factorial
 * Assumptions
 * num must be a postive integer
 */

const factorial = num => {
  if (typeof num !== "number")
    throw TypeError(
      `expected type number but received ${Object.prototype.toString.call(num)}`
    );

  if (num < 0 || Number.isNaN(num) || num % 1 !== 0)
    throw Error("num must be a positive integer");

  if (num === 0) return 1;

  let i = 1,
    fac = num;
  while (i < num) {
    fac *= num - i;
    i += 1;
  }

  return fac;
};

test("factorial correctly calculates factorial", t => {
  t.equals(factorial(0), 1);
  t.equals(factorial(1), 1);
  t.equals(factorial(2), 2);
  t.equals(factorial(5), 120);
  t.end();
});

test("factorial rejects invalid input", t => {
  t.throws(() => factorial([]));
  t.throws(() => factorial({}));
  t.throws(() => factorial("hello"));
  t.throws(() => factorial(NaN));
  t.throws(() => factorial(-34));
  t.throws(() => factorial(3.9));
  t.end();
});

Array.prototype.reverse = function reverse() {
  let reversed = [];
  this.forEach(x => reversed.unshift(x));
  return reversed;
};

test("reverse correctly reverses an array", t => {
  t.deepEqual([1, 2, 3, 4, 5].reverse(), [5, 4, 3, 2, 1]);
  t.deepEqual(["hello", "goodbye", "shmello"].reverse(), [
    "shmello",
    "goodbye",
    "hello"
  ]);
  t.deepEqual(["hello"].reverse(), ["hello"]);
  t.deepEqual([].reverse(), []);
  t.end();
});

Array.prototype.indexOf = function indexOf(x) {
  for (let i = 0; i < this.length; i++) {
    if (x === this[i]) return i;
  }

  return -1;
};

test("indexOf indentifies the correct index", t => {
  const obj = { name: 2 };
  const arr = [obj, 1, 4, "hello", NaN];

  t.equal(arr.indexOf(1), 1);
  t.equal(arr.indexOf("hello"), 3);
  t.equal(arr.indexOf(NaN), -1);
  t.equal(arr.indexOf(34), -1);
  t.equal(arr.indexOf(obj), 0);
  t.end();
});

/**
 * Find the missing number in sequence
 * Assumptions
 * 1. no repeats
 * 2. no spaces
 * 3. sequence starts at 1
 */
const missing = arr => {
  for (let i = 0; i < arr.length; i++) {
    arr.sort();
    if (i + 1 !== arr[i]) return i + 1;
  }
  return undefined;
};

test("missing correctly identifies the missing value in sequence", t => {
  t.equals(missing([]), undefined);
  t.equals(missing([1, 4, 3]), 2);
  t.equals(missing([2, 3, 4]), 1);
  t.equals(missing([5, 1, 4, 2]), 3);
  t.equals(missing([1, 2, 3, 4]), undefined);
  t.end();
});

const missingFancy = arr => {
  const sum = arr.reduce((a, b) => a + b, 0);
  const sumSequence = len => len / 2 * (len + 1);

  if (sumSequence(arr.length) === sum) return undefined;

  return sumSequence(arr.length + 1) - sum;
};

test("missing Fancy correctly identifies the missing value in sequence", t => {
  t.equals(missingFancy([]), undefined);
  t.equals(missingFancy([1, 4, 3]), 2);
  t.equals(missingFancy([2, 3, 4]), 1);
  t.equals(missingFancy([5, 1, 4, 2]), 3);
  t.equals(missingFancy([1, 2, 3, 4]), undefined);
  t.end();
});

const isBalanced = str => {
  if (typeof str !== "string")
    throw TypeError(
      `expected string but received ${Object.prototype.toString.call(str)}`
    );
  let removed = str.replace(/[^{}]/g, "");
  let reversed = removed
    .replace(/{|}/g, match => (match === "{" ? "}" : "{"))
    .split("")
    .reverse()
    .join("");

  return removed === reversed && removed[0] !== "}";
};

test("isbalanced correctly identifies balanced strings", t => {
  t.notOk(isBalanced("}{"));
  t.notOk(isBalanced("{{}"));
  t.notOk(isBalanced("{{{}"));
  t.ok(isBalanced("{}{}"));
  t.ok(isBalanced("foo { bar { baz } boo }"));
  t.notOk(isBalanced("foo { bar { baz }"));
  t.notOk(isBalanced("foo { bar } }"));
  t.end();
});
