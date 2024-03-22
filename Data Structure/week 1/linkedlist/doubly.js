class Node{
    constructor(data){
        this.data = data
        this.prev = null
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    prepend(data){
        const newNode = new Node(data)
        if(this.head === null){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.size++
    }

    append(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size++
    }

    insert(data,index){
        const newNode = new Node(data)
        if(index<0 || index>this.size ){
            return null
        }
        if(index === 0){
            this.prepend(data)
        }
        if(index === this.size){
            this.append(data)
        }
        let cur = this.head
        for(let i = 0 ; i < index-1 ; i++){
            cur = cur.next
        }
        newNode.prev = cur
        cur = cur.next
        cur.next.prev = newNode
        cur.next = newNode
        this.size++
    }

    reverse(){
        let cur = this.head
        let prev = null
        while(cur){
            let next = cur.next
            cur.next = prev
            cur.prev = next
            prev = cur
            cur = next
        }
        this.tail = this.head
        this.head = prev
    }

    remove(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
    
        let cur;
    
        // Case when removing the first node
        if (index === 0) {
            cur = this.head;
            this.head = cur.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }
        } else if (index === this.size - 1) { // Case when removing the last node
            cur = this.tail;
            this.tail = cur.prev;
            this.tail.next = null;
        } else { // Case when removing a node in between
            cur = this.head;
            for (let i = 0; i < index; i++) {
                cur = cur.next;
            }
            cur.prev.next = cur.next;
            cur.next.prev = cur.prev;
        }
    
        this.size--;
    }
    
     
    get(index){
        if(index<0 || index>=this.size){
            return null
        }
        let cur = this.head
        for(let i = 0 ; i < index ; i++){
            cur = cur.next
        }
        return cur.data
    }

    display(){
        let cur = this.head
        let res = ''
        while(cur){
            res += cur.data + '<->'
            cur = cur.next
        }
        console.log(res,'null');
    }
}

const linkedList = new LinkedList()

linkedList.append(1)
linkedList.append(2)
linkedList.append(3)
linkedList.remove(2)
linkedList.display()
console.log(linkedList.get(0)); 

linkedList.reverse()
 console.log(linkedList.get(0)); 
linkedList.display()
