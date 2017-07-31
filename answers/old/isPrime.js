"use strict";

/** 
 * Is Prime
 * tests whether a number is prime or not
 * @param {number} num Number to test
 * @returns {boolean} 
 */
function isPrime(num){
    // type check
    if(typeof num !== 'number'){
        console.log('not a number');
        return false;
    }

    // 2 is prime
    if(num === 2){return true;}

    // remove even, 1, and negative numbers
    if(num % 2 === 0 || num <= 1){return false;}

    var divisor = 3;
    while(divisor < num){
        //if there is no remainder it is not prime
        if(num % divisor === 0){
            return false;
        
        // number can't be divided by greater than half itself
        }else if(divisor >= num/2){
            return true;
        } else {
            divisor++;
        }
    }

    return true;
}

function tests(){
    console.log('A string is prime: ' + isPrime('boot'));
    console.log('An object is prime: ' + isPrime({bob: 'hello'}))
    console.log('Even number is prime: ' + isPrime(6));
    console.log('A negative is prime: ' + isPrime(-7));
    console.log('997 is prime: ' + (isPrime(997)));
    console.log('1 is prime: ' + (isPrime(1)));
    console.log('2 is prime: ' + (isPrime(2)));
    console.log('3 is prime: ' + (isPrime(3)));
}

module.exports = {isPrime: isPrime, tests: tests};
