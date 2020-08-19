
var cont = document.createElement('div');
cont.setAttribute("class", "container-fluid");
var row = document.createElement('div');
row.setAttribute("class", "row");
row.style = "margin-left: 30px; margin-top: 20px;";

cont.append(row);
document.body.append(cont);

function createCOL(name, capital, region, flag, pop){
    var col = document.createElement('div');
    col.setAttribute("class", "col-3");
    col.style = "margin-top: 20px;";
    var card = document.createElement('div');
    card.setAttribute("class", "card");
    card.style = 'width: 18rem;';
    var img = document.createElement('div');
    img.style = `background-image: url(${flag}); background-size: cover; background-repeat: no-repeat; height: 200px;`
    var card_body = document.createElement('div');
    card_body.setAttribute("class", "card-body");
    var h5 = document.createElement('h5');
    h5.innerText = name;
    var ul = document.createElement('ul');
    ul.setAttribute("class", "list-group list-group-flush");
    var li1 = document.createElement('li');
    li1.setAttribute("class", "list-group-item");
    li1.innerText = "Capital: "+capital;
    var li2  = document.createElement('li');
    li2.setAttribute("class", "list-group-item");
    li2.innerText = "Region: "+region;
    var li3  = document.createElement('li');
    li3.setAttribute("class", "list-group-item");
    li3.innerText = "Population: "+pop;
    card_body.append(h5);
    ul.append(li1, li2, li3);
    card.append(img, card_body, ul);
    col.append(card);
    return col;
}

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


fetch_rest_api("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
.then((data)=>{
    data.forEach((item)=>{
        row.append(createCOL(item['name'], item['capital'], item['region'], item['flag'], item['population']));
    })
})
.catch((Err)=>console.error("Error", Err));
