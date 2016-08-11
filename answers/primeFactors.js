"use strict";

var isPrime = require('./isPrime.js').isPrime;

/**
 * Returns all prime factors of a number
 * @param {number} num Number to test
 * @returns {array} An array of prime factors
 */

function primeFactors(num) {
    //array for storing primes
    var primes = [];

    //test type
    if (typeof num !== 'number') {
        console.log('must be a number');
        return false;
    }

    //start at two
    var divisor = 2;

    //no idea how this works
    while (num > 2) {
        if (num % divisor === 0) {
            num = num / divisor
            primes.indexOf(divisor) < 0 ? primes.push(divisor) : null;
        } else {
            divisor++;
        }
    }

    return primes;
}

function tests() {
    var tests = [
        {name: 'strings not accepted', test: !primeFactors('test') },
        {name: 'undefined not accepted', test: !primeFactors()}
    ];

    for (var i = 0; i < tests.length; i++) {
        var name = tests[i].name;
        if (!tests[i].test) {
            console.log(name + ': FAILED');
        } else {
            console.log(name + ': PASSED');
        }
    }

    console.log('Returns an array: ' + (Object.prototype.toString.call(primeFactors(4)) === '[object Array]'));
    console.log('Prime factors of 8 is: ' + primeFactors(8));
    console.log('Prime factors of 16 is [2]: ' + primeFactors(16));
    console.log(testPrimes(primeFactors(98452)));
    console.log(testPrimes(primeFactors(456454542)));
    console.log(testPrimes([4, 9, 0]));
    console.log(primeFactors(16).length === 1);
}

function testPrimes(arr) {
    return arr.every(function (num) {
        return isPrime(num);
    });
}

module.exports = { primeFactors: primeFactors, tests: tests };
