// Are they the "same"?

"use strict";

function comp(a, b) {
    if (!a || !b) return false;
    if (a.length !== b.length) return false;

    a = a.sort();
    b = b.map(function(num) {
        return Math.sqrt(num);
    }).sort();

    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }

    return true;
}