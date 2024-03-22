function selectionSort(arr){
    const n = arr.length
    for(let i = 0 ; i < n-1 ; i++){
        let minIndex = i
        for(let j = i+1 ; j < n ; j++){
            if(arr[j] < arr[minIndex])
            minIndex = j
        }
        [arr[minIndex],arr[i]] = [arr[i],arr[minIndex]]
    }
    return arr
}

let arr = [ 12 , 9 , -2 , 72 , -23]
console.log(selectionSort(arr));