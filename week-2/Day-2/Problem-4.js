/*
Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
1) the first element of the array as the object’s key, and
2) the last element of the array as that key’s value.
*/

var array = ['GUVI', 'I', 'am', 'Geek'];

function transformFirstAndLast(arr) {
	var obj = {}
	var i = 0
	var j = arr.length - 1
	while(i<j){
		obj[arr[i]] = arr[j]
		i++
		j--
	}
	return obj
}

console.log(transformFirstAndLast(array))