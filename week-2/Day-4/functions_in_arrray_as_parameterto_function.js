var add = function(a,b){
	return a+b
}

var sub = function(a,b){
	return a-b
}

var mul = function(a,b){
	return a*b
}

function math_operations(oper, operations){
	var val1 = 10;
	var val2 = 20;
	return operations[oper](val1, val2);
}

operations = [add, sub, mul]
console.log(math_operations(0, operations))
console.log(math_operations(1, operations))
console.log(math_operations(2, operations))