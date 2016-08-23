/**
 * 

likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this
 * 
 */
/** 
 * Accepts a list of names and returns preformatted text
 * @parameter {array} names An array of names
 * @returns {string} preformatted text string
 */
function likes(names){
    switch(names.length){
        case 0: return "no one likes this";
        case 1: return names[0] + " likes this";
        case 2: return names[0] + " and " + names[1] + " like this";
        case 3: return names[0] + ", " + names[1] + ", and " + names[2] + " like this";
        default: return names[0] + ", " + names[1] + " and " + (names.length-2) + " others like this"; 
    }
}

console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Jacob", "Alex", "Mark", "Max"]));