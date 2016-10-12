// finding matches on ranges
// find overlap range, merge
// (1,3): 1,2,3
// (2,4): 2,3,4
// (1,4)

 "use strict";

 /** Find match on ranges
  * @param {string} rangeA the first range to merge
  * @param {string} rangeB the second range to merge
  * @returns {array} The ranges merged in array
  * Assumptions
    1. ranges will be positive (first value greater than last)
    2. only two ranges to merge
    3. 
  */

 function mergeRanges(rangeA, rangeB){
     // first convert string arranges to arrays
     let reg    = /(^\d+),\s*(\d+$)/,
         a      = rangeA.match(reg),
         b      = rangeB.match(reg),
         merged = [],
         beg    = a[1] < b[1] ? a[1] : b[1],
         end    = a[2] > b[2] ? a[2] : b[2]; 

    // if no overlap, don't merge
     if (a[2] < b[1]  || b[2] < a[1]){
         return merged;
     }

    for (let i = parseInt(beg); i <= end; i++){
        merged.push(i);
    }

    return merged;
 }

 mergeRanges("90, 32", "41, 89");