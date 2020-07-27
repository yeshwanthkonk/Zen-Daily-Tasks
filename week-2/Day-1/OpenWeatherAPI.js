
var request = new XMLHttpRequest()

var url_string = 'https://api.openweathermap.org/data/2.5/weather?zip=500013,in&appid=ea17e7428718f47c4451abbb9fe177f5';

request.open('GET',url_string, true )

request.send();

request.onload = function() {

var data = JSON.parse(this.response)
console.log(data);
}