var chunk = function (arr, size) {
    var final = [];
    if (size <= 0) {
        return final;
    }
    while (arr.length > 0) {
        final.push(arr.splice(0, size));
    }
    return final;
};
var arr_1 = [1, 2, 3, 4, 9, 8, 7, 6];
console.log("Chunck Before ->", arr_1);
console.log("Chunck After ->", chunk(arr_1, 2));
//---------------------------------------------------------------
arr_1 = [1, 2, 3, 4, 9, 8, 7, 6];
var reduce = function (arr, func, result) {
    if (result === void 0) { result = 0; }
    for (var i in arr) {
        result = func(arr[i], result);
    }
    return result;
};
console.log("Reduce with SUM", reduce(arr_1, function (item, val) { return val + item; }, 0));
//---------------------------------------------------------------
arr_1 = [1, 2, 3, 4, 9, 8, 7, 6];
var filter = function (arr, func) {
    var result = [];
    for (var i in arr) {
        if (func(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
};
console.log("Filter for Even Numbers", filter(arr_1, function (item) { if (item % 2 == 0)
    return true; return false; }));
//-------------------------------------------------------------------
var users = [
    { user: 'barney', age: 36, active: true },
    { user: 'fred', age: 20, active: false },
    { user: 'pebbles', age: 1, active: true },
];
var find = function (arr, func, st_in) {
    if (st_in === void 0) { st_in = 0; }
    for (var i = st_in; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i];
        }
    }
};
console.log("Return age < 30 for find", find(users, (function (item) { return item.age < 30; })));
//-------------------------------------------------------------------
var arr_2 = [1, 2, 3, 4, 5];
var sum = function (arr) {
    var su = 0;
    for (var i in arr) {
        su += arr[i];
    }
    return su;
};
console.log(sum(arr_2));
