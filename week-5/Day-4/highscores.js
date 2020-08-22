var cont = document.createElement('div');
cont.setAttribute('class', "container my-cont");
var head = document.createElement('div');
head.setAttribute('class', "head");
head.innerText = "High Scores";

var btn_div = document.createElement('div');
btn_div.style="width: 50%; margin:auto;";

var goHome = document.createElement('button');
goHome.setAttribute("class", "butt");
goHome.innerText = "Go Home";
goHome.setAttribute("onclick", "location.href='./index.html'");
goHome.id = "goHome";

var keys = Object.keys(localStorage);
var scores = [];
for(let i=0;i<keys.length;i++){
    scores.push([keys[i], localStorage.getItem(keys[i])]);
}
if(scores.length > 0){
    scores.sort((a,b)=>b[1]-a[1]);

    for(let i=0;i<scores.length;i++){
        var h1 = document.createElement('h1');
        h1.innerText = scores[i][0]+" - "+scores[i][1];
        btn_div.append(h1);
    }
}
else{
    var h1 = document.createElement('h1');
    h1.innerText = "No Data to Show";
    btn_div.append(h1);
}

btn_div.append(goHome);

cont.append(head, btn_div);

document.body.append(cont);