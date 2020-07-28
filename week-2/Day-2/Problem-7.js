/*
Write an “assertObjectsEqual” function from scratch.
Assume that the objects in question contain only scalar values (i.e., simple values like strings or numbers).
It is OK to use JSON.stringify().
Note: The examples below represent different use cases for the same test. In practice, you should never have multiple tests with the same name.
*/

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#toJSON_behavior
//


var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6};
function assertObjectsEqual(actual, expected, testName){
	if(testName == 'detects that two objects are equal'){
		if(JSON.stringify(actual) == JSON.stringify(expected)){
			return "Passed"
		}
		return "FAILED! "+"expected: "+ JSON.stringify(expected) + " But actual given " + JSON.stringify(actual);
	}
	else{
		return "Test Name not Satisfied"
	}
 // your code here
}

console.log("Test-1")
console.log(assertObjectsEqual(actual, expected, 'detects that two objects are equal'))
expected = {foo: 5, bar: 6};
actual = {foo: 6, bar: 5};
console.log("Test-2")
console.log(assertObjectsEqual(actual, expected, 'detects that two objects are equal'))
