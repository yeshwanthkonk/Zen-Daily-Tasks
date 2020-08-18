
function fetch_rest_api(url){
    var request = new XMLHttpRequest();

    return new Promise((resolve, reject)=>{
        request.open('GET',url, true );

        request.onload = function() {
        if (this.readyState === this.DONE) {
                if (this.status === 200) {
                    var data = JSON.parse(this.responseText);
                    console.log(data);
                    resolve(data);
                }
                else{
                    reject(" Error occured! " + this.statusText + " with error code " + this.status);
                    console.log("Error occured!", this.statusText, "with error code", this.status)
                }
            }
        }

        request.onerror = function() {
            console.log("** An error occurred during the transaction with Network **");
            reject("** An error occurred during the transaction with Network **");
        };
        
        request.send();
    });
}


fetch_rest_api("https://restcountries.eu/rest/v2/all")
.then((data)=>{
    data.forEach((item)=>{
        let div = document.createElement('div');
        let p = document.createElement('p');
        let img = document.createElement('img');
        p.innerHTML += "Name: "+item['name'];
        p.innerHTML += "<br> Capital: "+item['capital'];
        p.innerHTML += "<br> Region: "+item['region'];
        img.src = item['flag'];
        div.append(p, img);
        document.body.append(div);
    })
})
.catch((Err)=>console.error("Error", Err));