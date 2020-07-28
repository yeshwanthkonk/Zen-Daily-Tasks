/*
I have a mock data of security Questions and Answers. 
You function should take the object and a pair of strings and 
should return if the quest is present and if its valid answer
*/

var securityQuestions = [
 {
 question: 'What was your first pet’s name?',
 expectedAnswer: 'FlufferNutter'
 },
 {
 question: 'What was the model year of your first car?',
 expectedAnswer: '1985'
 },
 {
 question: 'What city were you born in?',
 expectedAnswer: 'NYC'
 }
]

function chksecurityQuestions(securityQuestions,question, answer) {
	for(let i = 0;i<securityQuestions.length;i++){
		if(securityQuestions[i].question == question){
			if(securityQuestions[i].expectedAnswer == answer){
				return true
			}
			else{
				false
			}
		}
	}
	return false
 // your code here return true or false; 
}

//Test case1:var ques = “What was your first pet’s name?”;
var ans  =  'FlufferNutter';
var ques = 'What was your first pet’s name?';
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // true

//Test case2:var ques = “What was your first pet’s name?”;
var ans  =  'DufferNutter';
var ques = 'What was your first pet’s name?';
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // flase
