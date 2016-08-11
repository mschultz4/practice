"use strict";

var test = require('tape');

/**
 * Calculate the value at the nth value of the fibonacci sequence.
 * @param {number} num Location of fibonacci sequence to retrieve value from
 * @returns {number} the value 
 */
function fibonacci(num){
    // start beginning of sequence
    var seq = [1, 1];

    // verify correct type
    if(typeof num !== 'number'){
        throw TypeError('must be a number');
    }

    // add previous two values to get next sequence value
    for(var i=2; i < num; i++){
         seq.push(seq[i-1] + seq[i-2]);
    }

    return seq[num-1];
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
}

module.exports = {fibonacci: fibonacci, tests: tests};