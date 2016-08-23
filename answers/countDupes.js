/** 
 * Assumptions
 * 1. Must be string
 * 2. No spaces or other special characters, e.g., \n
 * 3. Only alphabetic characters
 * 4. Case insensitive
 * 5. Each duplication counts once, e.g., "aaaab" has 1 duplicate "a"
 */

/**
 * Counts the number of duplicate characters in a string
 * @param {string} string The string to count
 * @returns {number} The number of duplicate characters
 */

function countDupes(text) {
    var textArray = [],
        dupes = [];

    // normalize string
    text = text.toLowerCase().replace(/\W/g, "");

    //convert to array
    textArray = text.split("").sort();
    textArray.reduce(function(prev, curr){
        if(prev === curr && dupes.indexOf(curr) < 0){
            dupes.push(curr);
        }
        return curr;
    });

    return dupes.length;
}

console.log(countDupes("aabbc") === 2);
console.log(countDupes("aaaaab") === 1)
console.log(countDupes("aabbc"));