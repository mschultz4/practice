"use strict";

/**
 * Find the nth value of fibonacci sequence
 * @param {number} n The value to return
 * @returns {number} The nth value of the sequence
 * 
 * Assumptions
 * 1. n will be an integer > 0
 * 2. sequence starts at 1
 */

var fib = (n) => {

    let a = 0,
        b = 1,
        seq = [1];

    while (seq.length < n) {
        seq.push(a + b);
        a = b;
        b = seq[seq.length - 1];
    }

    return seq[seq.length - 1];
}

console.log(fib(5));