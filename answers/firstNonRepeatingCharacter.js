/**
 * Return the first Non Repeating Character of a String
 * Requirements
 * 1. case insensitive
 * 2. return empty string if all repeated
 * 
 * Assumptions:
 * 1. input is a string
 * 2. 
 * 
 * @param {string} str String to test
 * @returns {string} 
 */
function firstNonRepeatingCharacter(str) {
    if (typeof str !== "string") {
        throw TypeError("Expected string, but got: " + Object.prototype.toString.call(str));
    }

    var stringArray = str.toLowerCase().split("");
    var repeatingCharacters = [];

    if (str) {
        stringArray.sort().reduce(function(prev, curr) {
            prev === curr ? repeatingCharacters.push(curr) : null;
            return curr;
        });

        for (var i = 0; i < stringArray.length; i++) {
            if (repeatingCharacters.indexOf(str.toLowerCase().split('')[i]) < 0) {
                return str[i];
            }
        }
    }
        return "";
}

    //Tests
    console.log(firstNonRepeatingCharacter("stabs") === "t");
    console.log(firstNonRepeatingCharacter("sTabs") === "T");
    console.log(firstNonRepeatingCharacter("Howdy doth") === "w");
    try {
        firstNonRepeatingCharacter(234)
    }
    catch (error) {
        console.log(error.message);
    }
    
    //find first non repeating character

function nonRepeat(str){
    for(var i=0; i < str.length; i++){
        var matches = str.match(new RegExp(str[i], "ig"));
        if(matches.length < 2){
            return str[i];
        }
    }
}


nonRepeat("hhttaabbr");
