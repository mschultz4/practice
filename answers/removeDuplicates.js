"use strict";

var test = require('tape');

/**
 * Remove duplicate values from array
 * Assumptions:
 *  1. Do not mutate original array.  Must return a new array.
 *  2. Array elements of different types are duplicates (e.g., "2" !== 2)
 *  3. Empty arrays are considered duplicates
 *  4. Order of returned array doesn't matter
 *  5. NaN cannot be duplicate
 *  6. Array elements must be number or string: no objects.
 * @param {array} arr Array to remove duplicates from
 * @returns {array} 
 */

function removeDuplicates(arr){
    var newArr = [],
        index;
    //check type 
    if(Object.prototype.toString.call(arr) !== '[object Array]'){
        throw TypeError('Expected String, but got: ' + Object.prototype.toString.call(arr));
    }

    //Empty arrays are considered duplicates
    if(arr.length < 1){
        return [];
    }

    for(var i = 0; i < arr.length; i++){
        index = newArr.indexOf(arr[i]);
        if(index < 0 && arr[i]){
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

function tests(){
    test("Throws type exception", function(t){
        t.throws(function(){
            removeDuplicates({someObject: 'duh'});
        });
        t.end();
    });

    test("accepts array", function(t){
        t.ok(removeDuplicates([1,2]));
        t.end();
    });

    test("returns correct values", function(t){
        t.deepEqual(removeDuplicates([1,2, 4, 5, 4, 2]), [1,2,4,5]);
        t.notDeepEqual(removeDuplicates([1,2, "4", 5, 4, 2]), [1,2,4,5], "with string");
        t.end();
    });
}

module.exports = {removeDuplicates: removeDuplicates, tests: tests};