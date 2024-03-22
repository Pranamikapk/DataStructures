class MaxHeap{
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
        const parentIndex = this.getParentIndex(index)
        if(parentIndex >= 0 && this.heap[parentIndex] < this.heap[index] ){
            this.swap(index,parentIndex)
            this.heapifyUp(parentIndex)
        }
    }

    heapifyDown(index){
        let leftChild = this.getLeftChildIndex(index)
        let rightChild = this.getRightChildIndex(index)
        let max = index

        if(leftChild <= this.heap.length && this.heap[leftChild] > this.heap[max]  )
        max = leftChild
        
        if(rightChild <= this.heap.length && this.heap[rightChild] > this.heap[max]  )
        max = rightChild

        if(max !== index){
            this.swap(index,max)
            this.heapifyDown(max)
        }
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }

    remove(){
        if(this.heap.length === 0) return null
        if(this.heap.length === 1) return this.heap.pop()
        const max = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return max
    }

    heapSort(){
        let sorted = []
        while(this.heap.length){
            sorted.push(this.remove())
        }
        return sorted
    }

    buildHeapFromArray(array){
        this.heap = array
        const firstNonLeafIndex = Math.floor((array.length-2)/2)
        for(let i = firstNonLeafIndex ; i>= 0 ; i--){
            this.heapifyDown(i)
        }
    }
}

const maxHeap = new MaxHeap()
maxHeap.buildHeapFromArray([3, 7, 2, 1, 9, 8])
console.log(maxHeap.heap);
maxHeap.remove()
console.log(maxHeap.heap);
console.log(maxHeap.heapSort());