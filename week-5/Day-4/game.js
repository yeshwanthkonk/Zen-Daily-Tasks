function next(node){
    if(data[quest_no].correct_answer == node.children[2].innerText){
        score.innerText = parseInt(score.innerText) + 10;
    }
    quest_no++;
    if(quest_no >= 10){
        let queryString = "?score="+score.innerText;
        window.location.href = "end.html" + queryString;
        return;
    }
    progressText.innerText = `Question ${quest_no+1}/10`;
    progressBar.style = `width: ${(quest_no+1)*10}%`;
    col_4_quest.innerHTML = data[quest_no].question;
    let corr = Math.floor((Math.random()*10))%4;
    option_arr[corr].children[1].children[2].innerText = data[quest_no].correct_answer;
    let j = 0;
    for(let i=0;i<4;i++){
        if(i!=corr){
            option_arr[i].children[1].children[2].innerText = data[quest_no].incorrect_answers[j];
            j++;
        }
    }
}

async function start(){
    try {
        var response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
        if(response.status == 200){
            data = (await response.json())['results'];
            console.log(data);
            progressText.innerText = `Question ${quest_no+1}/10`;
            progressBar.style = `width: ${(quest_no+1)*10}%`;
            col_4_quest.innerHTML = data[quest_no].question;
            let corr = Math.floor((Math.random()*10))%4;
            option_arr[corr].children[1].children[2].innerHTML = data[quest_no].correct_answer;
            let j = 0;
            for(let i=0;i<4;i++){
                if(i!=corr){
                    option_arr[i].children[1].children[2].innerText = data[quest_no].incorrect_answers[j];
                    j++;
                }
            }
            cont.append(row, row_quest, option_arr[0], option_arr[1], option_arr[2], option_arr[3]);
            document.body.append(cont);
        }
        else{
            throw "Status: "+response.status;
        }

    } catch (error) {
        alert("Error Occured: "+error);
    }
}

start();
var quest_no = 0;
var cont = document.createElement('div');
cont.setAttribute('class', "container  questions");
var row = document.createElement('div');
row.setAttribute('class', "row row-style");
var col_2_1 = document.createElement('div');
col_2_1.setAttribute('class', "col-2");
var col_4_1 = document.createElement('div');
col_4_1.setAttribute('class', "col-4");
var progressText = document.createElement('div');
progressText.setAttribute('id', "progressText");
progressText.innerText = "Question";
var progress = document.createElement('div');
progress.setAttribute('class', "progress");
progress.style="height: 20px; width: 100%";
var progressBar = document.createElement('div');
progressBar.setAttribute('class', "progress-bar");
progressBar.style="width: 70%";
progress.append(progressBar);
col_4_1.append(progressText, progress);
var col_2_2 = document.createElement('div');
col_2_2.setAttribute('class', "col-2");
var col_2_3 = document.createElement('div');
col_2_3.setAttribute('class', "col-2");
var div_score = document.createElement('div');
div_score.innerText = "Score";
var score = document.createElement('div');
score.setAttribute('class', "score");
score.innerText = "0";
div_score.append(score);
col_2_3.append(div_score);
row.append(col_2_1, col_4_1, col_2_2, col_2_3);

var row_quest = document.createElement('div');
row_quest.setAttribute('class', "row");
var col_2_quest = document.createElement('div');
col_2_quest.setAttribute('class', "col-2");
var col_4_quest = document.createElement('div');
col_4_quest.setAttribute('class', "col-8 ques");
col_4_quest.innerText = "Where is?";
row_quest.append(col_2_quest, col_4_quest);

var option_arr = [createQuest('A'), createQuest('B'), createQuest('C'), createQuest('D')];



function createQuest(opt){
    var row_option = document.createElement('div');
    row_option.setAttribute('class', "row");
    var col_2_option = document.createElement('div');
    col_2_option.setAttribute('class', "col-2");
    var col_4_option = document.createElement('div');
    col_4_option.setAttribute('class', "col-8 choice-text");
    col_4_option.setAttribute('onclick', "next(this)")
    var br = document.createElement('br');
    var span_1 = document.createElement('span');
    span_1.setAttribute('class', "bg-primary");
    span_1.style="color: white; width: 10%; padding: 10px 2%;";
    span_1.innerText = opt;
    var span_2 = document.createElement('span');
    span_2.style="width: 90%; display: inline-block; padding: 8px 2%;";
    span_2.innerText="\n";
    col_4_option.append(br, span_1, span_2);
    row_option.append(col_2_option, col_4_option);
    return row_option;
}
