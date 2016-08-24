/**
 * Find Longest Collatz
 * @param {array} ints Array of positive integers
 * @returns {number} the integer requiring the most Collatz moves
 */

function longestCollatz(ints) {
    var steps = 0, pos;

    ints.forEach(function (int, index) {
        var count = 0;
        while (int !== 1) {
            if (int % 2 === 0) {
               int = int/2; 
            }else{
                int = 3*int + 1;
            }
            count++;
        }
        if(count > steps){
            steps = count;
            pos = index;
        }

    });

    return ints[pos];
}

console.log(longestCollatz([2, 3, 4]));
console.log(longestCollatz([2, 5, 32]))