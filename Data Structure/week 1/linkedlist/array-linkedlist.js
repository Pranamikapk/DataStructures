class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    //display the list
    display(){
        let res = ''
        let cur = this.head
        while(cur !== null){
            res += cur.data + " "
            cur = cur.next
        }
        return res
    }

    //insert an element at the end
    append(data){
        const newNode = new Node(data)
        if(this.head === null){
            this.head = newNode
        }else{
            let cur = this.head
            if(cur.next !== null){
                cur = cur.next 
            }
            cur.next = newNode
        }
        this.size++
    }
}

    function arrayToLinkedList(arr){
        const linkedList = new LinkedList()
        for(const item of arr){
            linkedList.append(item)
        }
        return linkedList
    }

const array = [1, 2, 3, 4, 5];
const linkedList = arrayToLinkedList(array);
console.log(linkedList);