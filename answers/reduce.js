const test = require("tape");

/** 
 * Reduce
 * 
 */

Array.prototype.redooz = function redooz(callback, initialValue) {
  if (!this) throw new TypeError("reduce called on null or undefined");
  if (typeof callback !== "function")
    throw new TypeError(`${cb} is not a function`);

  let i, accumulator;
  if (initialValue === undefined) {
    i = 1;
    accumulator = this[0];
  } else {
    i = 0;
    accumulator = initialValue;
  }

  while (i < this.length) {
    accumulator = callback(accumulator, this[i], i, this);
    i++;
  }

  return accumulator;
};

const nums = [1, 3, 4, 8, 9];
const sum = (prev, next) => prev + next;
const flatten = (prev, next) => prev.concat(next);
const words = ["hello", "today", "is", "monday"];
const joinSentence = (prev, next) => `${prev} ${next}`;

test("built in reduce works", t => {
  t.equal(nums.reduce(sum, 0), 25);
  t.equal(words.reduce(joinSentence, ""), " hello today is monday", "joinSentence works");
  t.deepEqual([[1, 2], [3, 4], [5, 6]].reduce(flatten, []), [1, 2, 3, 4, 5, 6], "test deep equal of flatten");
  t.end();
});

test("redooz works with accumulator", t => {
  t.equal(nums.redooz(sum, 0), 25);
  t.deepEqual([[1, 2], [3, 4], [5, 6]].redooz(flatten, []), [1, 2, 3, 4, 5, 6]);
  t.equal(words.redooz(joinSentence, ""), " hello today is monday");
  t.end();
});

test("redooz works without accumulator", t => {
  t.equal(nums.redooz(sum), 25);
  t.deepEqual([[1, 2], [3, 4], [5, 6]].redooz(flatten), [1, 2, 3, 4, 5, 6]);
  t.equal(words.redooz(joinSentence), "hello today is monday");
  t.end();
});