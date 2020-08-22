var cont = document.createElement('div');
cont.setAttribute('class', "container my-cont");
var head = document.createElement('div');
head.setAttribute('class', "head");
head.innerText = "Quick Quiz";


var btn_div = document.createElement('div');
btn_div.style="width: 50%; margin:auto;";

var play = document.createElement('button');
play.setAttribute("class", "btn-block btn-lg butt");
play.innerText = "Play";
play.setAttribute("onclick", "location.href='./game.html'");
play.id = "play";

var highScores = document.createElement('button');
highScores.setAttribute("class", "btn-block btn-lg butt");
highScores.innerText = "High Scores";
highScores.setAttribute("onclick", "location.href='./highscores.html'");
highScores.id = "highScores";
btn_div.append(play, highScores);
cont.append(head, btn_div);
document.body.append(cont);
