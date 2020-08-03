class Calculator{
	constructor(a, b){
		this.a = a
		this.b = b
	}
	get add(){
		return this.a+this.b
	}
	get sub(){
		return a-b
	}
	get mul(){
		return this.a * this.b
	}
}

cal = Calculator(-1, -1)
inp = prompt("Enter 2 space separeted intergers and space sign:").split(" ")
if(len(inp)!=3){
	console.log("Incorrect Input!")
}
else{
	cal.set_values = inp
	if(inp[2] == '+'){
		console.log(cal.add)
	}
	else if(inp[2] == '-'){
		console.log(cal.sub)
	}
	else if(inp[2] == '*'){
		console.log(cal.mul)
	}
	else{
		console.log("Not supported operation")
	}
}