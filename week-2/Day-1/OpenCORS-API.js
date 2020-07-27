
var request = new XMLHttpRequest()
var url_string = 'https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com';

// request.open('GET',url_string, true )
// // request.setRequestHeader('Access-Control-Allow-Origin','*')
// request.send();

// request.onload = function() {

// var data = JSON.parse(this.response)
// console.log(data);
// }

fetch(url_string, {mode: "no-cors"}) // Call the fetch function passing the url of the API as a parameter
.then(res=>res.json())
.then(data=>console.log(data))