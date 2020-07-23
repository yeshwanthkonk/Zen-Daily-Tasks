arr = [1,11,111,2,22,222]
let ma = arr[0]
for(let i=1;i<arr.length;i++){
  ma = Math.max(ma,arr[i])
}
console.log(ma)