/*
Write a function called “printAllValues” which returns an newArray of all the input object’s values.
*/

var object = {name:'RajiniKanth', age: 33, hasPets : false};

function printAllValues(obj) {
	var arr = []
	for(let key in obj){
		arr.push(obj[key])
	}
	return arr
}

console.log(printAllValues(object))