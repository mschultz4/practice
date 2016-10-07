"use strict";

function sumAll(n){
    let sum = 0;
    
    for (let i = 1; i <= n; i++){
      sum += i;
    }
    
    return sum;
}

function removeNb(n){
    let start = performance.now();
    let combos = [];
    let sum = sumAll(n);
    
    test:
    for ( let i = Math.floor(n/2); i <= n; i++){
        for ( let j = i + 1; j <= n; j++) {
                let prod = j * i;
                let tot = sum - j - i;

                if (prod === tot){
                    combos.push([i, j], [j, i]);
                     break;
                }

                if (prod > tot){
                    break;
                }
        }
    }

    console.log(performance.now() - start);

    return combos;
}