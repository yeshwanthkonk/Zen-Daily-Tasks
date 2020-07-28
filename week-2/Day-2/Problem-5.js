/*
Write a function “fromListToObject” which takes in an array of arrays, 
and returns an object with each pair of elements in the array as a key-value pair.
*/

var array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];

function fromListToObject(arr) {
	var obj = {}
	for(let i in arr){
		obj[arr[i][0]] = arr[i][1]
	}
	return obj
}

console.log(fromListToObject(array))