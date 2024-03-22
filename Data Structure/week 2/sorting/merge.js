function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let leftArr = arr.slice(0 , mid)
    let rightArr = arr.slice(mid)
    console.log(leftArr);
    console.log(rightArr);
    return merge(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(leftArr,rightArr){
    const sortedArr = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<rightArr[0]){
            sortedArr.push(leftArr.shift())
            console.log("left:",sortedArr);
        }else{
            sortedArr.push(rightArr.shift())
            console.log("right:",sortedArr);

        }
    }
    return [...sortedArr,...leftArr,...rightArr]
}

let arr = [ 12 ,-3 , 9, -2 , 20]
console.log(mergeSort(arr));