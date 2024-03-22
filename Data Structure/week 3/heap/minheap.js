class MinHeap{
    constructor(){
        this.heap = []
    }

    getParentIndex(index){
        return Math.floor((index-1)/2)
    }

    getLeftChildIndex(index){
        return 2 * index + 1
    }

    getRightChildIndex(index){
        return 2 * index + 2
    }

    swap(index1,index2){
        let temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }

    heapifyUp(index){
        let parentIndex = this.getParentIndex[index]
        if(parentIndex >= 0 && this.heap[parentIndex] > this.heap[index]){
            this.swap(index,parentIndex)
            this.heapifyUp(parentIndex)
        }
    }

    heapifyDown(index){
        const leftChild = this.getLeftChildIndex(index)
        const rightChild = this.getRightChildIndex(index)
        let minIndex = index

        if(leftChild < this.heap.length && this.heap[leftChild] < this.heap[minIndex] ){
            minIndex = leftChild
        }

        if(rightChild < this.heap.length && this.heap[rightChild] < this.heap[minIndex] ){
            minIndex = rightChild
        }

        if(minIndex !== index){
            this.swap(index,minIndex)
            this.heapifyDown(minIndex)
        }
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }

    remove(){
        if(this.heap.length === 0){
            return null
        }
        if(this.heap.length === 1){
            return this.heap.pop()
        }
        const min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return min
    }

    heapSort(){
        const sorted = []
        while(this.heap.length > 0 ){
            sorted.push(this.remove())
        }
        return sorted
    }

    buildHeapFromArray(array){
        this.heap = array
        const firstNonLeafIndex = Math.floor((array.length -2 )/2)

        for(let i = firstNonLeafIndex; i>=0 ; i--){
            this.heapifyDown(i)
        }
    }
}

const minHeap = new MinHeap();

minHeap.buildHeapFromArray([3, 7, 2, 1, 9, 8]);

console.log(minHeap.heap); // [1, 3, 2, 7, 9, 8]

console.log(minHeap.remove()); // 1

console.log(minHeap.heap); // [2, 3, 8, 7, 9]
  
console.log(minHeap.heapSort()); // [2, 3, 7, 8, 9]-