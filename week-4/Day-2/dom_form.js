const urlParams = new URLSearchParams(window.location.search);

var container = document.createElement('div');
container.setAttribute('class', "container");
var row = document.createElement('div');
row.setAttribute("class", "row margin-row");
var col_6_form = document.createElement('div');
col_6_form.setAttribute("class", "col-6");
var form = document.createElement('form');
form.setAttribute("onsubmit", "sendData()");
form.setAttribute("class", "bg-success");

var label_1 = document.createElement('label');
label_1.setAttribute("class", "col-form-label");
label_1.innerText = "First Name";
var input_1 = document.createElement('input');
input_1.setAttribute("type", "text");
input_1.setAttribute("id", "first");
input_1.setAttribute("name", "first");
input_1.setAttribute("class", "form-control");
input_1.setAttribute("placeholder", "First Name");
input_1.setAttribute("required", "");

form.append(label_1, input_1);
col_6_form.append(form);
row.append(col_6_form);

var col_6_table = document.createElement('div');
col_6_table.setAttribute("class", "col-6");
var tabl = document.createElement('table');
tabl.setAttribute("class", "table");
var thead = document.createElement('thead');
thead.setAttribute("class", "thead-dark");
var tr1 = document.createElement('tr');
tr1.align = "center";
var th1 = document.createElement('th');
th1.setAttribute("colspan", "2");
th1.innerText = "Details Entered in Form";
tr1.append(th1);
thead.append(tr1);
tabl.append(thead);

var tbody = document.createElement('tbody');
var tr2 = document.createElement('tr');
var th2 = document.createElement('th');
th2.innerText = "First Name";
var td2 = document.createElement('td');
if(String(urlParams.get('first')) == 'null'){
    td2.innerText = ""
}
else{
    td2.innerText = urlParams.get('first');
}
tr2.append(th2, td2);


tbody.append(tr2);
tabl.append(tbody);
col_6_table.append(tabl)
row.append(col_6_table);

container.append(row);

document.body.append(container);

function sendData(){
    
    var fn = document.getElementById('first').value;
    alert(fn);
    console.log(fn);
    document.getElementById("table_first").innerText = fn;
}