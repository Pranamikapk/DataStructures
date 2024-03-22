function insertionSort(arr){
    for(let i = 0 ; i < arr.length ; i++){
        let n = arr[i]
        let j = i-1
        while(j>=0 && arr[j]>n){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = n
    }
}

let arr = [-8 , -6 , 17 , 3 , 1]
insertionSort(arr)
console.log(arr);

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

    // Method to add a new node to the linked list
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

    // Method to perform insertion sort
    insertionSort(data) {
        if (!this.head || !this.head.next) {
            return; // No need to sort if there are 0 or 1 elements
        }

        let sorted = null; // Initialize sorted sublist

        let current = this.head;
        while (current) {
            const nextNode = current.next; // Store the next node
            this.sortedInsert(current); // Insert current node into sorted sublist
            current = nextNode; // Move to the next node
        }
    }

    // Helper method to insert a node into the sorted sublist
    sortedInsert(newNode) {
        if (!this.head || this.head.data >= newNode.data) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next && current.next.data < newNode.data) {
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
        }
    }

    // Method to display the elements of the linked list
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

list.insertionSort();

console.log("After sorting:");
list.display();

