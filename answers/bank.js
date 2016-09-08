"use strict";

var test = require('tape');

function fortune(f0, p, c0, n, i){
    var balance = f0,
    withdrawl = c0,
    year = 0;

    while(year < n){
        balance = Math.floor(balance * (1 + (p * .01)) - withdrawl);
        withdrawl = Math.floor(withdrawl * (1 + (i * .01)));

        if(balance <= 0){
            return false;
        }
        year += 1;
    }
    return true;
}


test("test positive", function(t){
   t.ok(fortune(100000, 1, 2000, 15, 1));
    t.ok(fortune(100000, 1, 10000, 10, 1));
    t.notOk(fortune(100000, 1, 9185, 12, 1));
    t.end();
});