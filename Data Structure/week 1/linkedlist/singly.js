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

    // to check if the list is empty
    isEmpty(){
        return this.size === 0
    }

    // to get the size of the list
    getSize(){
        return this.size
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

    //insert an element at the beginning of the list
    prepend(data){
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
        this.size++
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

    //insert at a given index
    insert(data,index){
        if(index < 0 || index > this.size){
            return false
        }
        if(index === 0)
        this.prepend(data)
        const newNode = new Node(data)
        let cur = this.head
        for(let i = 0 ; i < index-1 ; i++){
            cur = cur.next
        }
        newNode.next = cur.next
        cur.next = newNode
        this.size++
    }

    //Remove at a specific index
    remove(index){
        let cur = this.head
        let removedNode
        if(index < 0 || index >= this.size)
        return false
        if(index === 0){
            this.head = cur.next
        }else{
            for(let i = 0 ; i < index-1 ; i++)
                cur = cur.next
            removedNode = cur.next
            cur.next = removedNode.next
        }
        this.size--
        return removedNode.data
    }

    //remove a value from a list
    removeValue(data){
        if(this.head === null)
        return null
        if(this.head.data === data){
            this.head = this.head.next
            this.size--
        }else{
            let cur = this.head
            let removedNode 
            while(cur.next && cur.next.data!==data)
            cur = cur.next
            if(cur.next){
                removedNode = cur.next
                cur.next = removedNode.next
                this.size--
            }
        }
    }

    //search
    search(data){
        if(this.head === null)
        return null
        let cur = this.head
        let i = 0
        while(cur){
            if(cur.data === data)
            return i
            cur = cur.next
            i++
        }
        return -1
    }

    //reverse
    reverse(){
        let prev = null
        let cur = this.head
        while(cur){
            let next = cur.next
            cur.next = prev
            prev = cur
            cur = next
        }
        this.head = prev
    }
}

const linkedList = new LinkedList()
linkedList.append(2)
linkedList.prepend(1)
linkedList.append(3)
linkedList.insert(4,3)
linkedList.insert(5,4)
linkedList.remove(2)
linkedList.removeValue(2)
console.log("Is empty?",linkedList.isEmpty());
console.log("Size",linkedList.getSize());
console.log("List:",linkedList.display());
linkedList.reverse()
console.log("Reversed List:",linkedList.display());
console.log("Found at Index:",linkedList.search(4));

