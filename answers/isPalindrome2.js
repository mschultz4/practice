"use strict";

var test = require('tape');

/**
 * Test if string is a palindrome
 * Assumptions
 * 1. Spaces and punctuation don't count
 * 2. Underscores included 
 * 3. Case doesn't count in palindrome
 * @paramater {string} testString String to test
 * @returns {boolean} 
 */

function isPalindrome(testString) {
    var beg,
        end;

    //Verify input is string
    if (typeof testString !== 'string') {
        throw TypeError("Expected string, but got: " + Object.prototype.toString.call(testString));
    }

    //normalize string
    testString = testString
        .toLowerCase()
        .replace(/\W/ig, '');

    //Compare end of string with beginning and work towards center
    beg = 0;
    end = testString.length - 1;
    while (end > beg) {
        if (testString[beg] !== testString[end]) {
            return false
        }
        beg++;
        end--;
    }

    // else return true
    return true;
}

function tests() {
    test("It should throw error if not passed string", function (t) {
        t.throws(function () {
            isPalindrome(2);
        });
        t.throws(function () {
            isPalindrome([3, 4]);
        });
        t.end();
    });

    test("It should test valid palindromes", function (t) {
        t.ok(isPalindrome("A DoggOd, a"));
        t.ok(isPalindrome("a god dog a"));
        t.ok(isPalindrome("The 232eht"));
        t.ok(isPalindrome("jello_ wow_ olleJ'"));
        t.end();
    })

    test("It should test invalid palindromes", function (t) {
        t.notOk(isPalindrome("A3DoggOd, a"));
        t.end();
    })
}

module.exports = { isPalindrome: isPalindrome, tests: tests };