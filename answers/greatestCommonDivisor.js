/**
 * Assumptions
 * 1. Divisor includes self
 * 2. Positive integers only
 */

"use strict";

var test = require('tape');

/**
 * find the greatest common divisor between two numbers
 * @param {number} first number
 * @param {number} second number
 * @returns {number} the commond divisor
 */
function greatestCommonDivisor(a, b) {
    var div = 2;
    var greatestDiv = 1;

   // type check
   if(typeof a !== 'number' || typeof b !== 'number'){
       throw TypeError('must be a number');
   } 

   // test not NaN 
   if(isNan(a*b)){
       console.log('can\'t be Nan');
       return;
   }

   if(a < 0 || b < 0){
       console.log('must be positive integer');
       return;
   }

    while (a >= div && b >= div) {
        if (a % div === 0 && b % div === 0) {
            greatestDiv = div;
        }
        div++;
    }



    return greatestDiv;
}

function tests() {
    test('valid output', function(t){
        t.equals(greatestCommonDivisor(12, 24), 12);
        t.equals(greatestCommonDivisor(15, 10), 5);
        t.end();
    });
    test('valid input', function(t){
        t.notOk(greatestCommonDivisor(NaN, 4));
        t.notOk(greatestCommonDivisor(-4, -5));
        t.throws(function(){
            greatestCommonDivisor("string", something)
        });
        t.end();
    });
}

function isNan(num){
    return num !== num;
}

module.exports = {
    greatestCommonDivisor: greatestCommonDivisor,
    tests: tests
};