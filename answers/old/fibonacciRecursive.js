"use strict";

var test = require('tape');

/**
 * Calculate the value at the nth value of the fibonacci sequence.
 * @param {number} num Location of fibonacci sequence to retrieve value from
 * @returns {number} the value 
 */
function fibonacci(num){
    // verify correct type
    if(typeof num !== 'number'){
        throw TypeError('must be a number');
    }

    // num must be positive integer greater than 0
    if(num < 1 || num % 1 !== 0 || isNaN(num)){
        console.log('must be positive number');
        return;
    }

    if(num === 2 || num === 1){
        return 1;
    }

    return fibonacci(num-1) + fibonacci(num-2);     
}

function tests(){
    test("value at 12", function(t){
        t.equal(fibonacci(12), 144 );
        t.end();
    });

    test("value at 1st", function(t){
        t.equal(fibonacci(1), 1);
        t.end();
    });

    test("throws an exception if not a number", function(t){
        t.throws(function(){
            fibonacci('string');
        });
        t.throws(function(){
            fibonacci();            
        });
        t.end();
    });

    test("requires positive integer", function(t){
        t.notOk(fibonacci(-1));
        t.notOk(fibonacci(1.5));
        t.notOk(fibonacci(NaN));
        t.end();
    });
}

module.exports = {fibonacci: fibonacci, tests: tests};