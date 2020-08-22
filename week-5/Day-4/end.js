
const urlParams = new URLSearchParams(window.location.search);
const score_val = urlParams.get('score');
var cont = document.createElement('div');
cont.setAttribute('class', "container my-cont");
var score = document.createElement('div');
score.setAttribute('class', "score");
score.innerText = score_val;
var input = document.createElement('input');
input.setAttribute("class", 'form-control');
input.setAttribute("onchange", 'btnToggle(this)');
input.id = "username";
input.type = "text";
input.placeholder = "username";
var btn_div = document.createElement('div');
btn_div.style="width: 50%; margin:auto;";
var saveScoreBtn = document.createElement('button');
saveScoreBtn.setAttribute("class", "butt");
saveScoreBtn.innerText = "Save";
saveScoreBtn.setAttribute("onclick", "saveScore()");
saveScoreBtn.id = "saveScoreBtn";
saveScoreBtn.disabled = true;
var playAgain = document.createElement('button');
playAgain.setAttribute("class", "butt");
playAgain.innerText = "Play Again";
playAgain.setAttribute("onclick", "location.href='./game.html'");
playAgain.id = "playAgain";
var goHome = document.createElement('button');
goHome.setAttribute("class", "butt");
goHome.innerText = "Go Home";
goHome.setAttribute("onclick", "location.href='./index.html'");
goHome.id = "goHome";
var br_1 = document.createElement('br');
var br_2 = document.createElement('br');
btn_div.append(saveScoreBtn, br_1, playAgain, br_2, goHome);
cont.append(score, input, btn_div);
document.body.append(cont);

function btnToggle(node){

    if(node.value == ""){
        saveScoreBtn.disabled = true;
    }
    else{
        saveScoreBtn.disabled = false;
    }
}

function saveScore(){
    let user = document.getElementById('username').value;
    localStorage.setItem(user, score_val);
    console.log(localStorage.getItem(user));
    document.getElementById('username').value = "";
}
