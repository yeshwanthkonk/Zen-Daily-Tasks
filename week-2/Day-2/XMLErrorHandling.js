/*
The response is interpreted into a ArrayBuffer, Blob, Document, JavaScript object, or a DOMString, depending on the value of XMLHttpRequest.responseType. 
responseText, on the other hand is the raw text, and you can handle it however you want. They are very similar in usage though.

1. You can use response when you get JSON from the server, and have it translated into a JavaScript object.
2. You can use responseText when you don't own the server, and the responseType is a format you don't want to use.
*/

var request = new XMLHttpRequest()
var url_string = 'https://dog.ceo/api/breeds/list/al';

request.open('GET',url_string, true )

//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget/onerror
request.onerror = function () {
  console.log("** An error occurred during the transaction **");
};

// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseText
request.onload = function() {
if (this.readyState === this.DONE) {
        if (this.status === 200) {
        	var data = JSON.parse(this.response)
            console.log(typeof(this.response));
            console.log(typeof(this.responseText));
            console.log(this.responseType);
            console.log(data);
        }
        else{
        	console.log("Error occured!", this.statusText, "with error code", this.status)
        }
    }
}

request.send();