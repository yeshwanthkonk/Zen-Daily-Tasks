let chunk = (arr, size:number)=>{
    let final = []
    if(size <= 0){
        return final;
    }
    while(arr.length > 0){
        final.push(arr.splice(0, size))
    }
    return final;
};
let arr_1 = [1,2,3,4,9,8,7,6];
console.log("Chunck Before ->", arr_1);
console.log("Chunck After ->", chunk(arr_1, 2));

//---------------------------------------------------------------
arr_1 = [1, 2, 3, 4, 9, 8, 7, 6];
let reduce = (arr, func, result=0)=>{
    for (let i in arr){
        result = func(arr[i], result);
    }
    return result;
}
console.log("Reduce with SUM", reduce(arr_1, (item, val)=> val+item, 0));
//---------------------------------------------------------------
arr_1 = [1, 2, 3, 4, 9, 8, 7, 6];
let filter = (arr, func)=>{
    let result = [];
    for (let i in arr){
        if(func(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log("Filter for Even Numbers", filter(arr_1, item => {if(item%2==0) return true; return false;}));
//-------------------------------------------------------------------
let users = [
    { user: 'barney', age: 36, active: true },
    { user: 'fred', age: 20, active: false },
    { user: 'pebbles', age: 1, active: true },
  ]
let find = (arr, func, st_in = 0)=>{
    for (let i=st_in; i<arr.length; i++){
        if(func(arr[i])){
            return arr[i];
        }
    }
}
console.log("Return age < 30 for find", find(users, (item => item.age < 30)))
//-------------------------------------------------------------------
let arr_2 = [1, 2, 3, 4, 5];
let sum = (arr:number[])=>{
    let su = 0;
    for (let i in arr){
        su += arr[i]
    }
    return su
}
console.log(sum(arr_2));