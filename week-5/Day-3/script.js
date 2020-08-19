var my_cont = document.createElement('div');
my_cont.setAttribute("class", "container my-cont");
var h3 = document.createElement('h3');
h3.innerText = "Rest Countries with Weather Capability";
var row = document.createElement('div');
row.setAttribute("class", "row");

my_cont.append(h3, row);
document.body.append(my_cont);

async function rest_countries(){
    try {
        var response = await fetch("https://restcountries.eu/rest/v2/all");
        if(response.status == 200){
            var data = await response.json();
            console.log(data);
            data.forEach((item)=>{
                row.append(createColAll(item['name'], item['flag'], item['capital'], item['region'], item['latlng'], item['alpha3Code']));
            })
        }
        else{
            throw `Status ${response.status}`
        }
    } catch (error) {
        var col = document.createElement('div');
        col.setAttribute("class", "col-4");
        var col2 = document.createElement('div');
        col2.setAttribute("class", "col-4");
        var col3 = document.createElement('div');
        col3.setAttribute("class", "col-4");
        var di = document.createElement('div');
        di.innerHTML = `<h1 style="color: red;">Error Occured: ${error}</h>`;
        col2.append(di);
        row.append(col, col2, col3);
    }
}
rest_countries();

async function open_weather(node){
    [lat,lon] = node.name.split('-').map(x => +x);
    let url = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=ea17e7428718f47c4451abbb9fe177f5";
    let st = "";
    try {
        var response = await fetch(url);
        if(response.status == 200){
            var data = await response.json();
            let temp = data['main']['temp'] - 271.15;
            st += "Country -> "+node.value+'\n\n';
            st += "Weather -> "+data['weather'][0]['description']+'\n\n';
            st += "Temperature -> "+temp+' degree Celsius\n\n';
            st += "Wind Speed -> "+data['wind']['speed']+ " meter/sec";
            alert(st);
        }
        else{
            throw `Status ${response.status}`
        }
    } catch (error) {
        alert(`Error Occured: ${error}`)
    }
}


function createColAll(name, flag, cap, reg, loc, code){
    var col = document.createElement('div');
    col.setAttribute("class", "col-lg-4 col-sm-12");
    var card = document.createElement('div');
    card.setAttribute("class", "card card-sty");
    var head = document.createElement('div');
    head.setAttribute("class", "card-header head");
    head.innerText = name;
    var content = document.createElement('div');
    content.setAttribute("class", "card-body content");
    var img = document.createElement('img');
    img.setAttribute("width", "100%");
    img.setAttribute("height", "200 rem");
    img.style = "margin-bottom: 10px";
    img.src = flag;
    var p_1 = document.createElement('p');
    p_1.innerText = "Capital: "+cap;
    var p_2 = document.createElement('p');
    p_2.innerText = "Region: "+reg;
    var p_3 = document.createElement('p');
    p_3.innerText = "Latitude: "+loc[0];
    var p_4 = document.createElement('p');
    p_4.innerText = "Longitude: "+loc[1];
    var p_5 = document.createElement('p');
    p_5.innerText = "Country Code: "+code;
    var a = document.createElement('a');
    a.setAttribute("class", "btn btn-primary");
    a.setAttribute("onclick", "open_weather(this)");
    a.innerText = "Click for Weather";
    a.name = loc.join("-");
    a.value = name;
    content.append(img, p_1, p_2, p_3, p_4, p_5, a);
    card.append(head, content);
    col.append(card);
    return col;
}
