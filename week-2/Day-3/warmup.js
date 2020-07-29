var num = 10;
function addFive(num) { 
return num+5;
}
var result = addFive(num)
console.log(result)
//-------------------------------------------------
num = 5;
function getOpposite(num){
return -num;
}
result = getOpposite(num)
console.log(result)
//-------------------------------------------------
var min = 5;
function toSeconds(min){
return min*60;
}
var secs = toSeconds(min)
console.log(secs)
//-------------------------------------------------
var mystr = "5";
function toInteger(mystr){
return +mystr
}
var myint = toInteger(mystr)
console.log(myint)
//-------------------------------------------------
var myint = 0;
function nextNumber(myint){
return myint+1;
}
var myNextint = nextNumber(myint)
console.log(myNextint)
//-------------------------------------------------
var arr = [1, 2, 3];
function getFirstElement(arr){
return arr[0]
}
var data = getFirstElement(arr)
console.log(data)
//-------------------------------------------------
var hours = 5;
function hourToSeconds(hours){
return hours*60*60
}
var data = hourToSeconds(hours)
console.log(data)
//-------------------------------------------------
function findPerimeter(num1,num2){
return 2*(num2+num1);
}
var peri = findPerimeter(6,7)
console.log(peri)
//-------------------------------------------------
function lessThan100(num1,num2) {
if(num1+num2 < 100){
	return true
}
return false
}
var res = lessThan100(22,15)
console.log(res)
//-------------------------------------------------
function remainder(num1,num2) {
return num1%num2
}
var res = remainder(1,3)
console.log(res)
//-------------------------------------------------
function CountAnimals(tur,horse,pigs) {
return tur*2 + 4*horse + 4*pigs;
}
var legs = CountAnimals(2,3,5)
console.log(legs)
//-------------------------------------------------
function frames(num1,num2){
return 60*num1*num2;
}
var fps = frames(1,2)
console.log(fps)
//-------------------------------------------------
function isEven(num){
 if(num%2 != 0 || String("g"%2) === String(NaN)){
 	return false
 }
 return true
}
var even = isEven(5)
console.log(even)
//-------------------------------------------------
function getDistance(x1, y1, x2, y2)
{
 return Math.sqrt((y2-y1)**2 + (x2-x1)**2)
}
console.log(getDistance(100, 100, 400, 300));
//-------------------------------------------------
var obj = {
 mykey: 5678
};
function addProperty(obj, key){
	obj.key = 1234
}
addProperty(obj, "2ndkey")
console.log(obj)
//-------------------------------------------------
printPrimes(100);// Function prints the first nPrimes numbers
function printPrimes(nPrimes)
{
 var n = 0;
 var i = 2;
 
 while(n < nPrimes)
 {
 if (isPrime(i))
 {
 console.log(n, " → ", i);
 n++;
 }
 
 i++;
 }
}
function isPrime(n)
{
	for(let i = 2;i<=Math.sqrt(n);i++){
		if(n%i == 0){
			return false;
		}
	}
	return true;
}