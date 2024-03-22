let a = [ 14, 25, 83, 78, 12, 93 ]
let el = 83
index = undefined
for(let i = 0 ; i <= a.length ; i++){
    if(a[i] === el){
        index = i
    }
}
console.log(index);