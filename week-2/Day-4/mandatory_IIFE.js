//Print odd numbers in an array.
console.log("Print odd numbers in an array.")
var arr = [12, 23, 43,  56, 765734, 34234, 645, 4353, 65, 45, 789, 342];
console.log(arr);
(function(){
	arr.forEach((item)=>{
		if(item%2 != 0){
			console.log(item)
		}
	})
})();

//Convert all the strings to title caps in a string array
console.log("Convert all the strings to title caps in a string array");
var str_arr = ["GUVI GEEK", "TASTE NUT", "bEST wishes","TO LOGIN", "TO THIS", "SITE and watch"];
console.log("Before", str_arr);
(function(){
	for(let i in str_arr){
		str_arr[i] = str_arr[i].charAt(0).toUpperCase() + str_arr[i].substr(1).toLowerCase();
	}
	console.log("After", str_arr)
})();

//Sum of all numbers in an array
console.log("Sum of all numbers in an array");
console.log(arr);
(function(){
	var sum = 0
	arr.forEach((item)=>{
		sum += item
	})
	console.log(sum)
})();

//Return all the prime numbers in an array
console.log("Return all the prime numbers in an array")
console.log(arr);
var isPrime = function(n)
{
	for(let i = 2;i<=Math.sqrt(n);i++){
		if(n%i == 0){
			return false;
		}
	}
	return true;
}
var primes = (function(){
	var arr2 = []
	arr.forEach((item)=>{
		if(isPrime(item)){
			arr2.push(item)
		}
	})
	return arr2
})();
console.log("Primes are",primes);

//Return all the palindromes in an array
console.log("Return all the palindromes in an array")
var str_arr = ["122", "131", "333", "anna", "kayak", "fool"];
console.log(str_arr)
var isPalindrome = function(word){
	let i = 0
	let j = word.length-1;
	while(i<j){
		if(word[i] != word[j]){
			return false
		}
		i++;
		j--;
	}
	return true
}
var palindromes = (function(){
	var arr2 = []
	str_arr.forEach((item)=>{
		if(isPalindrome(item)){
			arr2.push(item)
		}
	})
	return arr2
})();
console.log("Palindromes are", palindromes)

//Return median of two sorted arrays of same size 
console.log("Return median of two sorted arrays of same size")
var arr = [1,2,3,4]
var arr2 = [5,6,7,9,10]
var median = (function(){
	let n = arr.length
	let m = arr2.length
	let t = n + m
	let i = 0
	let j = 0
	let arr3 = []
	while(i<n && j<m){
		if(arr[i]>arr2[j]){
			arr3.push(arr2[j])
			j++;
		}
		else{
			arr3.push(arr[i])
			i++;
		}
	}
	while(i<n){
		arr3.push(arr[i]);
		i++;
	}
	while(j<m){
		arr3.push(arr2[j]);
		j++;
	}
	let k = Math.floor(t/2)
	if(t%2 == 0){
		return (arr3[k-1]+arr3[k])/2
	}
	else{
		return arr3[k]
	}

})();
console.log(median)

//Remove duplicates from an array
console.log("Remove duplicates from an array")
var arr = [1,2,3,1,2,3,456,1,9,4,9,8,323,7,8]
console.log(arr)
arr = new Set(arr)
console.log("Removed Duplicates", arr)

//Rotate an array by k times and return the rotated array
var arr = [1, 2, 3, 4, 5, 6, 7 ,8 ,9, 10];
console.log("Before Rotating", arr);
var rotate  = function(k){
	for(let i = 0;i<k;i++){
		let temp = arr[arr.length - 1]
		for(let j = arr.length - 1;j >= 1;j--){
			arr[j] = arr[j-1];
		}
		arr[0] = temp
	}
};
rotate(4)
console.log("After right rotating 4 position", arr)