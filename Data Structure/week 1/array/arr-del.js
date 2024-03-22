let a = [ 15,82,67,93,10,70]
let pos = 3
for(let i = pos ; i< a.length ; i++){
    a[i]=a[i+1]
}
a.length -= 1
console.log(a);