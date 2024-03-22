function quickSort(arr){
    if(arr.length < 2){
        return arr
    }
    let pivot = arr[arr.length-1]
    let left = []
    let right = []
    
    for(let i = 0 ; i < arr.length-1 ; i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
let arr = [ 8 , 20 , -2 , 4 , -6 ]
console.log(quickSort(arr));

//linkedlist
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    toArray() {
        const arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.data);
            current = current.next;
        }
        return arr;
    }

    fromArray(arr) {
        this.head = null;
        for (let i = 0; i < arr.length; i++) {
            this.addNode(arr[i]);
        }
    }

    quickSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }

        const pivot = arr[Math.floor(arr.length / 2)];
        const left = [];
        const right = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else if (arr[i] > pivot) {
                right.push(arr[i]);
            }
        }

        return this.quickSort(left).concat([pivot], this.quickSort(right));
    }

    sort() {
        const arr = this.toArray();
        const sortedArr = this.quickSort(arr);
        this.fromArray(sortedArr);
    }

    display() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Example usage:
const list = new LinkedList();
list.addNode(5);
list.addNode(2);
list.addNode(9);
list.addNode(1);
list.addNode(7);

console.log("Before sorting:");
list.display();
list.sort();
console.log("After sorting:");
list.display();
