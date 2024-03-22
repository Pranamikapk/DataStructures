let arr = [ 10, 50, 60, 70, 90]
let target = 70 , index = undefined
for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] === target){
        index = i
    }
}
console.log(index);