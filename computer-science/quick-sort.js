"use strict";

/**
 * Swap
 * swap two positions in an array
 * @param {array} arr 
 * @param {*} pos1 First position
 * @param {*} pos2 Second position
 */
function swap(items, pos1, pos2) {
    let temp = items[pos1];
    items[pos1] = items[pos2];
    items[pos2] = temp;

    return items;
}

//[4, 2, 6, 5, 3, 9]
function partition(items, left, right) {
    let i     = left,
        j     = right,
        pivot = items[Math.floor((left + right) / 2)];

    while (i <= j) {
        while(items[i] < pivot){
            i += 1;
        }

        while (items[j] > pivot){
            j -= 1;
        }

        if (i <= j){
            swap(items, i, j);
            i += 1;
            j -= 1;
        }

    }
    return i;
}

function quickSort(items, left, right){
    let index;

    // length of 1 or 0 do not require sorting
    if (items.length < 2){
        return items;
    }

    index = partition(items, left, right);

    if (left < index - 1){
        quickSort(items, left, index - 1)
    }

    if (index < right){
        quickSort(items, index, right)
    }

    return items;
}

// Tests

var test = require("tape");

test("swap swaps two positions", (t) => {
    var arr = [1, 2, 3, 4, 5];
    t.deepEquals(swap(arr, 1, 4), [1, 5, 3, 4, 2]);
    t.end();
});

test("partition", (t) => {
    var items = [4, 2, 6, 5, 3, 9];
    t.equals(partition(items, 0, items.length -1), 4);
    t.deepEquals(items, [4, 2, 3, 5, 6, 9]);
    t.end();
});

test("quickSort", (t) => {
    var hello = [4, 2, 6, 5, 3, 9];
    t.deepEquals(quickSort(hello, 0, hello.length - 1), [2,3,4,5,6,9]);
    t.end();
})