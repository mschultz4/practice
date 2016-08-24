/**
 * Turn a DNA strand into it's match
 * @param {string} dna 
 * @return {string}
 */

function DNAStrand(dna){
    if(typeof dna !== "string"){
        throw TypeError("Expected string, but got " 
            + Object.prototype.toString.call(dna));
    }

    if(dna.match(/[^TAGC]/g)){
       throw Error("invalid DNA");
    }
    
    return dna.replace(/A/g, "t")
            .replace(/T/g, "A")
            .replace(/G/g, "c")
            .replace(/C/g, "G")
            .toUpperCase();   
}

// TESTs

//console.log(DNAStrand(function(){}));
console.log(DNAStrand("ATTGC") === "TAACG"); // return "TAACG"
console.log(DNAStrand("GTAT") === "CATA"); // return "CATA"
//console.log(DNAStrand("GTATaffasr"));


function DNAStrand2(dna){
    var pairs = {
        T:"A",
        A: "T",
        G:"C",
        C:"G"
    }

    return dna.replace(/./g, function(c){
        return pairs[c];
    });    
}