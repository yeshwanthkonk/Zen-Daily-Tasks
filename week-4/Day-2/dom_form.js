const urlParams = new URLSearchParams(window.location.search);

var container = document.createElement('div');
container.setAttribute('class', "container");
var row = document.createElement('div');
row.setAttribute("class", "row margin-row");
var col_6_form = document.createElement('div');
col_6_form.setAttribute("class", "col-6");
var form = document.createElement('form');
form.setAttribute("onsubmit", "return sendData()");
form.setAttribute("class", "bg-success");
form.setAttribute('autocomplete', "off")

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

var label_2 = document.createElement('label');
label_2.setAttribute("class", "col-form-label");
label_2.innerText = "Last Name";
var input_2 = document.createElement('input');
input_2.setAttribute("type", "text");
input_2.setAttribute("id", "last");
input_2.setAttribute("name", "last");
input_2.setAttribute("class", "form-control");
input_2.setAttribute("placeholder", "Last Name");
input_2.setAttribute("required", "");
form.append(label_2, input_2);

var label_3 = document.createElement('label');
label_3.setAttribute("class", "col-form-label");
label_3.innerText = "Address";
var input_3 = document.createElement('input');
input_3.setAttribute("type", "text");
input_3.setAttribute("id", "address");
input_3.setAttribute("name", "address");
input_3.setAttribute("class", "form-control");
input_3.setAttribute("placeholder", "Address");
input_3.setAttribute("required", "");
form.append(label_3, input_3);

var label_4 = document.createElement('label');
label_4.setAttribute("class", "col-form-label");
label_4.innerText = "Pin Code";
var input_4 = document.createElement('input');
input_4.setAttribute("type", "number");
input_4.setAttribute("id", "pin");
input_4.setAttribute("name", "pin");
input_4.setAttribute("class", "form-control");
input_4.setAttribute("placeholder", "Pin Code");
input_4.setAttribute("required", "");
form.append(label_4, input_4);

var label_gen = document.createElement('label');
label_gen.setAttribute("class", "col-form-label");
label_gen.innerText = "Gender";
form.append(label_gen);

var br = document.createElement('br');
form.append(br);

var label_5 = document.createElement('label');
label_5.setAttribute("for", "male");
label_5.innerText = "Male";
var input_5 = document.createElement('input');
input_5.setAttribute("type", "radio");
input_5.setAttribute("id", "male");
input_5.setAttribute("name", "gender");
input_5.setAttribute("value", "Male");
input_5.setAttribute("required", "");
form.append(input_5, label_5);

var label_6 = document.createElement('label');
label_6.setAttribute("for", "female");
label_6.innerText = "Female";
var input_6 = document.createElement('input');
input_6.setAttribute("type", "radio");
input_6.setAttribute("id", "female");
input_6.setAttribute("name", "gender");
input_6.setAttribute("value", "Female");
input_6.setAttribute("required", "");
form.append(input_6, label_6);

var label_7 = document.createElement('label');
label_7.setAttribute("class", "col-form-label");
label_7.setAttribute("for", "food");
label_7.innerText = "Select Atleast two food items";
var select_7 = document.createElement('select');
select_7.setAttribute("class", "custom-select");
select_7.setAttribute("id", "food");
select_7.setAttribute("name", "food");
select_7.setAttribute("size", "2");
select_7.setAttribute("required", "");
select_7.setAttribute("multiple", "");
var option_7_1 = document.createElement('option');
option_7_1.setAttribute("value", "Banana");
option_7_1.innerText = "Banana";
var option_7_2 = document.createElement('option');
option_7_2.setAttribute("value", "Apple");
option_7_2.innerText = "Apple";
var option_7_3 = document.createElement('option');
option_7_3.setAttribute("value", "Grapes");
option_7_3.innerText = "Grapes";
var option_7_4 = document.createElement('option');
option_7_4.setAttribute("value", "Eggs");
option_7_4.innerText = "Eggs";
var option_7_5 = document.createElement('option');
option_7_5.setAttribute("value", "Milk");
option_7_5.innerText = "Milk";
var option_7_6 = document.createElement('option');
option_7_6.setAttribute("value", "Chineses");
option_7_6.innerText = "Chineses";
select_7.append(option_7_1, option_7_2, option_7_3, option_7_4, option_7_5, option_7_6);
form.append(label_7, select_7);

var label_8 = document.createElement('label');
label_8.setAttribute("class", "col-form-label");
label_8.setAttribute("for", "state");
label_8.innerText = "Choose State";
var select_8 = document.createElement('select');
select_8.setAttribute("class", "custom-select");
select_8.setAttribute("id", "state");
select_8.setAttribute("name", "state");
select_8.setAttribute("required", "");
var option_8_1 = document.createElement('option');
option_8_1.setAttribute("value", "Telangana");
option_8_1.innerText = "Telangana";
var option_8_2 = document.createElement('option');
option_8_2.setAttribute("value", "Tamil Nadu");
option_8_2.innerText = "Tamil Nadu";
var option_8_3 = document.createElement('option');
option_8_3.setAttribute("value", "Assam");
option_8_3.innerText = "Assam";
var option_8_4 = document.createElement('option');
option_8_4.setAttribute("value", "Andhra Pradesh");
option_8_4.innerText = "Andhra Pradesh";
var option_8_5 = document.createElement('option');
option_8_5.setAttribute("value", "Himachal Pradesh");
option_8_5.innerText = "Himachal Pradesh";
select_8.append(option_8_1, option_8_2, option_8_3, option_8_4, option_8_5);
form.append(label_8, select_8);

var label_9 = document.createElement('label');
label_9.setAttribute("class", "col-form-label");
label_9.setAttribute("for", "country");
label_9.innerText = "Choose Country";
var select_9 = document.createElement('select');
select_9.setAttribute("class", "custom-select");
select_9.setAttribute("id", "country");
select_9.setAttribute("name", "country");
select_9.setAttribute("required", "");
var option_9_1 = document.createElement('option');
option_9_1.setAttribute("value", "India");
option_9_1.innerText = "India";
var option_9_2 = document.createElement('option');
option_9_2.setAttribute("value", "Andorra");
option_9_2.innerText = "Andorra";
var option_9_3 = document.createElement('option');
option_9_3.setAttribute("value", "Albania");
option_9_3.innerText = "Albania";
var option_9_4 = document.createElement('option');
option_9_4.setAttribute("value", "Algeria");
option_9_4.innerText = "Algeria";
var option_9_5 = document.createElement('option');
option_9_5.setAttribute("value", "Afganistan");
option_9_5.innerText = "Afganistan";
var option_9_6 = document.createElement('option');
option_9_6.setAttribute("value", "American Samoa");
option_9_6.innerText = "American Samoa";
select_9.append(option_9_1, option_9_2, option_9_3, option_9_4, option_9_5, option_9_6);
form.append(label_9, select_9);


var input_sub = document.createElement('input');
input_sub.setAttribute("type", "submit");
input_sub.setAttribute("class", "btn btn-dark");
input_sub.setAttribute("value", "Submit");
form.append(input_sub);



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

var tr3 = document.createElement('tr');
var th3 = document.createElement('th');
th3.innerText = "Last Name";
var td3 = document.createElement('td');
if(String(urlParams.get('last')) == 'null'){
    td3.innerText = ""
}
else{
    td3.innerText = urlParams.get('first');
}
tr3.append(th3, td3);
tbody.append(tr3);

var tr4 = document.createElement('tr');
var th4 = document.createElement('th');
th4.innerText = "Address";
var td4 = document.createElement('td');
if(String(urlParams.get('address')) == 'null'){
    td4.innerText = ""
}
else{
    td4.innerText = urlParams.get('address');
}
tr4.append(th4, td4);
tbody.append(tr4);

var tr5 = document.createElement('tr');
var th5 = document.createElement('th');
th5.innerText = "Pin Code";
var td5 = document.createElement('td');
if(String(urlParams.get('pin')) == 'null'){
    td5.innerText = ""
}
else{
    td5.innerText = urlParams.get('pin');
}
tr5.append(th5, td5);
tbody.append(tr5);

var tr6 = document.createElement('tr');
var th6 = document.createElement('th');
th6.innerText = "Gender";
var td6 = document.createElement('td');
if(String(urlParams.get('gender')) == 'null'){
    td6.innerText = ""
}
else{
    td6.innerText = urlParams.get('gender');
}
tr6.append(th6, td6);
tbody.append(tr6);

var tr7 = document.createElement('tr');
var th7 = document.createElement('th');
th7.innerText = "Food Choice";
var td7 = document.createElement('td');
let temp = urlParams.getAll('food');
if(temp.length == 0){
    td7.innerText = ""
}
else{
    let st = ""
    temp.forEach((item)=>{st+=item + "\n"});
    td7.innerText = st.trim();
}
tr7.append(th7, td7);
tbody.append(tr7);

var tr8 = document.createElement('tr');
var th8 = document.createElement('th');
th8.innerText = "State";
var td8 = document.createElement('td');
if(String(urlParams.get('state')) == 'null'){
    td8.innerText = ""
}
else{
    td8.innerText = urlParams.get('state');
}
tr8.append(th8, td8);
tbody.append(tr8);

var tr9 = document.createElement('tr');
var th9 = document.createElement('th');
th9.innerText = "Country";
var td9 = document.createElement('td');
if(String(urlParams.get('country')) == 'null'){
    td9.innerText = ""
}
else{
    td9.innerText = urlParams.get('country');
}
tr9.append(th9, td9);
tbody.append(tr9);

tabl.append(tbody);
col_6_table.append(tabl);
row.append(col_6_table);

container.append(row);

document.body.append(container);
var td_list = [td2, td3, td4, td5, td6, td7, td8, td9];
function sendData(){
    var sel = document.getElementById('food');
    if(([...sel.options].filter(option => option.selected)).length >=2 ){
        alert("Form has been submitted,\nThank you!");
        return true;
    }
    else{
        alert("Food Selection incomplete");
        for(let i=0;i<td_list.length;i++){
            td_list[i].innerText = "";
        }
        return false;
    }
}