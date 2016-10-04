"use strict";

function productFib(max){
    let seq = [0, 1], 
          i = 1,
          prod = 1;

    while (prod < max){
        seq.push(seq[i - 1] + seq[i]);
        i++;
        prod = seq[i] * seq[i - 1];
    }

    return [seq[i - 1], seq[i], prod === max];
}