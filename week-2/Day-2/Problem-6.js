/*
Write a function called “transformGeekData” that 
transforms some set of data from one format to another.
*/

var array = [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']],
		 [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];

function transformEmployeeData(arr) {
	var arr2 = []
	for(let i in arr){
		let temp = {}
		for(let j in arr[i]){
			temp[arr[i][j][0]] = arr[i][j][1]
		}
		arr2.push(temp)
	}
	return arr2
}

console.log(transformEmployeeData(array))