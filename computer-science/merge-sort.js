"use strict";

var test = require('tape');

/**
 * Merge two previously sorted lists
 * @param {array} l The left array
 * @param {array} r The right array
 * @returns {array} Merged array
 * 
 * Assumptions
 * 1. Params are arrays
 * 2. arrays are previously sorted
 * 3. all array nodes are numbers or strings
 * 4. arrays are of like types
 */

function merge(l,r){
   var merged = [], 
           li = 0, 
           ri = 0;

    while(li < l.length && ri < r.length){
        if(l[li] <= r[ri]){
            merged.push(l[li]);
            li += 1;
        } else {
            merged.push(r[ri]);
            ri += 1;
        }
    }
   return merged.concat(l.slice(li).concat(r.slice(ri))); 
}

/**
 * Sorts a single array
 * @param {array} arr
 * @returns {array} The sorted array
 */
function mergeSort(arr){
    var left,
    right,
    middle;

    // base case: lists of length 1 do not require sorting
    if(arr.length <= 1){
        return arr;
    }

    // split into two arrays
    middle = Math.floor(arr.length/2); 
    left = arr.slice(0, middle);
    right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

// merge tests

test("merges varying lengths", function(t){
    var l = [1,2,4,6,8];
    var r = [2,5,7];
    
    t.deepEquals(merge(l,r),[1,2,2,4,5,6,7,8]);
    t.end();
});

// mergeSort tests

test("sorts an array of numbers", function(t){
    var arr = [4,1,7,3];

    t.deepEquals(mergeSort(arr),[1,3,4,7]);
    t.end();
});

test("sorts an array of strings", function(t){
    var arr = ['hi', 'bye', 'cat'];

    t.deepEquals(mergeSort(arr),['bye', 'cat', 'hi']);
    t.end();
});