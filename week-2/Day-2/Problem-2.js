/*
Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.
*/

var object = {name:'RajiniKanth', age: 33, hasPets : false};

function printAllValues(obj) {
	var arr = []
	for(let key in obj){
		arr.push(key)
	}
	return arr
}

console.log(printAllValues(object))