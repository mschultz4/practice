/*
 * Sort an integer descending
 * @param {number} num Integer to sort
 * @return {number} sorted number
 * 
 * Assumptions
 * 1. integer must be positive
 * 2. integer must be type number
 * 3. cannot be NaN
 * 4. 0 included
 */ 

function descendingOrder(num){
   if(typeof num !== "number"){
       throw TypeError("Expected number, but received: " + Object.prototype.toString.call(num));
   }

   if(num !== num || num < 0 || num % 1 !== 0){
       throw Error("Argument must be a positive integer");
   }

   
    return parseInt(num
        .toString()
        .split("")
        .sort(function(a,b){
            return b - a;
        })
        .join());
}

//console.log(descendingOrder(NaN));
console.log(descendingOrder(0) === 0);
console.log(descendingOrder(1) === 1);
console.log(descendingOrder(123456789) === 987654321);
