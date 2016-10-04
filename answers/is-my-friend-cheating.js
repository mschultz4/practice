"use strict";

function sumAll(n){
    let sum = 0;
    
    for (let i = 1; i <= n; i++){
      sum += i;
    }

    return sum;
}

function findCombos(n){
    let combos = [];

    for ( let i = 1; i <= n; i++){
        for ( let j = 1; j <= n; j++) {
            if (j !== i){
                combos.push([i, j]);
            }
        }
    }

    return combos;
}

function removeNb(n){
    let removed = [];
    let sum = sumAll(n);
    
    if (n === 0) return removed;
    
    findCombos(n).forEach(function(combo){
        let comboSum = combo[0] + combo[1];

        if (sum - comboSum === combo[0] * combo[1]){
            removed.push(combo);
        }
    });

    return removed;
}
