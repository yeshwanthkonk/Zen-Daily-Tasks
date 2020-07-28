/*
Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
*/

var object = {name: 'ISRO', age: 35, role: 'Scientist'};

function convertListToObject(obj) {
	var arr = []
	for(let key in obj){
		arr.push([key, obj[key]])
	}
	return arr
}

console.log(convertListToObject(object))