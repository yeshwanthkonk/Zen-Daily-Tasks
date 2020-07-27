
var request = new XMLHttpRequest()
var url_string = 'https://dog.ceo/api/breeds/list/all';

request.open('GET',url_string, true )
// request.setRequestHeader('Access-Control-Allow-Origin','*')
request.send();

request.onload = function() {

var data = JSON.parse(this.response)
console.log(data);
}

