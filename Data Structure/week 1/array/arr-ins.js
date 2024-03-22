let arr = [20,34,53,93,20]
let el = 50
let pos = 4
    console.log(arr)
    console.log("Insert element:", el);
    console.log("Insert element at position:",pos);
for(let i = arr.length - 1 ; i >= 0 ; i--){
    if(i>=pos){
        arr[i+1]=arr[i]
        if(i === pos){
            arr[i] = el
        }
    }
}
console.log(arr);


