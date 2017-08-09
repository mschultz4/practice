"use strict";

import test from "tape";

/**
 * Combines two objects - like Object.assign
 * @param {object} Object to merge
 * @param {object} Object to merge
 * Assumptions
 * 1. only two objects
 * 2. objects are composed only of other objects and numbers
 * 3. no need to deep clone objects, can reference same object
 */

const assignDeep = (objA, objB) => {
  if (!isObject(objA) || !isObject(objB))
    throw TypeError("Only objects can be passed as arguments");

  const assigned = {};
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  const uniqueKeysB = keysB.filter(key => !keysA.includes(key));

  for (let key in objA) {
    // if there is a matching key
    if (keysB.includes(key)) {
      // if either A or B is not an object then A takes B's value
      if (!isObject(objA[key]) || !isObject(objB[key])) {
        assigned[key] = objB[key];
      } else {
        // if both are objects, assignDeep
        assigned[key] = assignDeep(objA[key], objB[key]);
      }
    } else {
      // if no matching key
      assigned[key] = objA[key];
    }
  }

  // assign non matches
  uniqueKeysB.forEach(key => {
    assigned[key] = objB[key];
  });

  return assigned;
};

function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

function deepClone(obj) {
  const clone = {};

  for (let key in obj) {
    if (isObject(obj[key])) {
      clone[key] = deepClone(obj[key]);
    } else {
      clone[key] = obj[key];
    }
  }
  return clone;
}

test("returns correct value", t => {
  t.deepEqual(assignDeep({ a: 1 }, {}), { a: 1 });
  t.deepEqual(assignDeep({ a: 1 }, { a: 2 }), { a: 2 });
  t.deepEqual(assignDeep({ a: 1 }, { a: { b: 2 } }), { a: { b: 2 } });
  t.deepEqual(
    assignDeep(
      { r: 5, a: { b: { c: 1 } } },
      { a: { b: { d: 2 } }, e: 3, q: 4 }
    ),
    { a: { b: { c: 1, d: 2 } }, e: 3, q: 4, r: 5 }
  );
  t.end();
});

test("throws error if non object passed", t => {
  t.throws(() => assignDeep([], "string"));
  t.end();
});

test("deepClone functions properly", t => {
  const origB = { c: 4 };
  const orig = { a: origB };

  t.notEqual(deepClone(orig), orig);
  t.deepEqual(deepClone(orig), { a: { c: 4 } });
  t.notEqual(deepClone(orig.b), origB);
  t.end();
});
