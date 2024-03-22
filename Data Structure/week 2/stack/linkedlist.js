class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class Stack{
    constructor(maxsize){
        this.top = null
        this.size = 0
        this.maxsize = maxsize
    }

    push(data){
        if(this.isFull()){
            console.log("Stack overflow");
        }else{
            const newNode = new Node(data)
            newNode.next = this.top
            this.top = newNode
            this.size++
        }
    }

    pop(){
        if(this.isEmpty()){
            console.log("Stack underflow");
        }
        let poppedData = this.top.data
        this.top = this.top.next
        this.size--
        return poppedData
    }

    peek(){
        if(this.isEmpty()){
            console.log("Stack is empty");
        }
        return this.top.data
    }

    isEmpty(){
        return this.size === 0
    }

    count(){
        return this.size
    }

    isFull(){
        return this.size === this.maxsize
    }

    display(){
        let res = ''
        let cur = this.top
        while(cur){
            res += cur.data + ' '
            cur = cur.next
        }
        console.log(res);
    }
}

const stack = new Stack(5)
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)
stack.pop()
stack.display()
console.log(stack.isEmpty());
console.log(stack.isFull());
console.log(stack.count());
console.log(stack.peek());


