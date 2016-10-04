'use strict';

let test = require('tape');


/**
 * Pascal's triangle
 * return nth level of triangle in flattened array
 * @param {integer} n Level to return
 * @returns {array}
 */

function pascalsTriangle(n){
	// start with one level
	let levels = [[1]];
    
	if (n === 0) return levels[0];

	for (let i = 0; i < n - 1; i++){
    	let prevLevel = levels[i];
    	let newLevel = [1];

    	for (let i = 1; i < prevLevel.length; i++){
          	newLevel.push((prevLevel[i - 1] + prevLevel[i]));
     	}

    	newLevel.push(1);
    	levels.push(newLevel);
	}
    
	return flatten(levels);
}

function flatten(arr){
	return arr.reduce((prev, curr) => {
    	return prev.concat(curr);
	});
}

test("normal uses", function(t){
	t.deepEquals(pascalsTriangle(4),[1,1,1,1,2,1,1,3,3,1]);
	t.deepEquals(pascalsTriangle(0),[1]);
	t.end();
});

test("flatten", function(t){
	t.deepEquals(flatten([[1,2],[1,2,3],[3,4,5,6]]), [1,2,1,2,3,3,4,5,6]);
	t.end();
});


