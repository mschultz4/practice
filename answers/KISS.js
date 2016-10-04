"use strict";

function isKiss( words ){
  let arr = words.split(" ");
  let length = arr.length;
  let response;
 	
 	return arr.some(test) ? "Keep It Simple Stupid" : "Good work Joe!" 
  
  function test(word){
		return word.length > length;
	}
}

