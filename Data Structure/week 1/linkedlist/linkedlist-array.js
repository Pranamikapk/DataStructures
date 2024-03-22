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

    toArray(){
        const res = []
        let cur = this.head
        while(cur !== null){
            res.push(cur.data)
            cur = cur.next
        }
        return res
    }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

const arrayRepresentation = linkedList.toArray();
console.log(arrayRepresentation);