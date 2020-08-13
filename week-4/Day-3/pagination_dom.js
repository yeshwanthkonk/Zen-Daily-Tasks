var data;
(()=>{
    var request = new XMLHttpRequest()
    var url_string = 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json';
    
    request.open('GET',url_string, true )
    request.onerror = function () {
    alert("** An error occurred during the transaction **");
      console.log("** An error occurred during the transaction **");
    };
    request.onload = function() {
    if (this.readyState === this.DONE) {
            if (this.status === 200) {
                data = JSON.parse(this.response)
                setTimeout(start, 1);
                // console.log(data);
            }
            else{
                alert("Error occured!" + this.statusText + "with error code" + this.status);
                console.log("Error occured!", this.statusText, "with error code", this.status)
            }
        }
    }
    
    request.send();
})();


var view = document.createElement('div');
view.setAttribute("class", "view");
var table = document.createElement('table');
var thead = document.createElement('thead');
var tr_h = document.createElement('tr');
var th_h = document.createElement('th');
th_h.setAttribute("class", "heading");
th_h.setAttribute("style", "text-align: center;");
th_h.setAttribute("colspan", "3");
th_h.innerText = "Pagination Data";
tr_h.append(th_h);
thead.append(tr_h);

var tr_h_n = document.createElement('tr');
var th_h_n_1 = document.createElement('th');
th_h_n_1.innerText = "Id";
var th_h_n_2 = document.createElement('th');
th_h_n_2.innerText = "Name"
var th_h_n_3 = document.createElement('th');
th_h_n_3.innerText = "Email";
tr_h_n.append(th_h_n_1, th_h_n_2, th_h_n_3);
thead.append(tr_h_n);
table.append(thead);

var tbody = document.createElement('tbody');
table.append(tbody);

var butt_div = document.createElement('div');
butt_div.setAttribute('class', 'button-row');

var first = document.createElement('button');
first.setAttribute('onclick', "first_func()");
first.setAttribute('id', "first");
first.innerText = "Go First";
butt_div.append(first);

var prev = document.createElement('button');
prev.setAttribute('onclick', "prev_func()");
prev.setAttribute('id', "prev");
prev.innerText = "Go Back";
butt_div.append(prev);

var num_div = document.createElement('div');
num_div.setAttribute('id','num_div');
butt_div.append(num_div);

var next = document.createElement('button');
next.setAttribute('onclick', "next_func()");
next.setAttribute('id', "next");
next.innerText = "Go Next";
butt_div.append(next);

var last = document.createElement('button');
last.setAttribute('onclick', "last_func()");
last.setAttribute('id', "last");
last.innerText = "Go End";
butt_div.append(last);

view.append(table, butt_div);
document.body.append(view);

//---------------------------------------------------------
var present = 0;
var itemPerPage = 10;
var dataRows = [];
var totalPages;

var a_1 = document.createElement('button');
a_1.setAttribute("onclick", "func(this)");
var a_2 = document.createElement('button');
a_2.setAttribute("onclick", "func(this)");
var a_3 = document.createElement('button');
a_3.setAttribute("onclick", "func(this)");
var a_4 = document.createElement('button');
a_4.setAttribute("onclick", "func(this)");
var a_5 = document.createElement('button');
a_5.setAttribute("onclick", "func(this)");

var num_but = [a_1, a_2, a_3, a_4, a_5];

function showNumber(){
    let st;
    let en;
    if(present-2 >=0 && present+2 <= totalPages-1){
        st = present-2;
        en = present+3;
    }
    else if(present-2 >= 0){
        st = present - 2;
        en = totalPages;
    }
    else{
        st = 0;
        en = 5;
    }
    let but_st=0;
    var num_div_1 = document.createElement('div');
    num_div_1.setAttribute('id','num_div');
    for(let i=st;i<en;i++){
        if(i == present){
        num_but[but_st].style = "background-color: darkslategrey;";
        }
        else{
            num_but[but_st].style = "";
        }
        num_but[but_st].innerText = i+1;
        num_but[but_st].id = i+1;
        num_div_1.append(num_but[but_st]);
        but_st++;
    }
    let old = document.getElementById('num_div');
    butt_div.replaceChild(num_div_1, old);
}

function show(){
    let j = present*itemPerPage;
    var tbody = document.createElement('tbody');
    dataRows.forEach((item)=>{
        item.children[0].innerText = data[j].id;
        item.children[1].innerText = data[j].name;
        item.children[2].innerText = data[j].email;
        j++;
        console.log(item.children);
        tbody.append(item);
    })
    var page_num = document.createElement('th');
    page_num.setAttribute('style', "text-align: center");
    page_num.setAttribute('colspan', "3");
    page_num.setAttribute('class', "heading");
    page_num.innerText = `Page ${present+1}/${totalPages}`;
    var page_num_r = document.createElement('tr');
    page_num_r.append(page_num);
    tbody.append(page_num_r);
    let old = document.getElementsByTagName('tbody');
    // console.log(old[0]);
    table.replaceChild(tbody, old[0]);
    if(present == 0){
        document.getElementById('prev').disabled = true;
        document.getElementById('next').disabled = false;
    }
    else if(present == totalPages-1){
        document.getElementById('prev').disabled = false;
        document.getElementById('next').disabled = true;
    }
    else{
        document.getElementById('prev').disabled = false;
        document.getElementById('next').disabled = false;
    }
    showNumber();
}
function createRow(){
    var tr = document.createElement("tr");
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    tr.append(td1, td2, td3);
    return tr;
}
function start(){
    totalPages = Math.ceil(data.length/itemPerPage);
    dataRows = [];
    for(let i=0;i<itemPerPage;i++){
        dataRows.push(createRow());
    }
    show();
}

function next_func(){
    present++;
    show();
}

function prev_func(){
    present--;
    show();
}

function first_func(){
    present = 0;
    show();
}

function last_func(){
    present = totalPages-1;
    show();
}

function func(node){
    present = parseInt(node.id) - 1;
    show();
    console.log(node.id);
}