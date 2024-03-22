class Queue{
    constructor(){
        this.stack1 = []
        this.stack2 = []
    }

    enqueue(elem){
        return this.stack1.push(elem)
    }

    dequeue(){
        if(this.stack2.length===0){
            while(this.stack1.length){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }

    peek(){
        if(this.stack2.length===0){
            while(this.stack1.length){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2[this.stack2.length-1]
    }

    display(){
        const elements = this.stack1.concat(this.stack2.reverse())
        console.log(elements);
    }
}



const queue = new Queue()
queue.enqueue(3)
queue.enqueue(8)
queue.enqueue(2)
queue.enqueue(0)
queue.dequeue()
queue.display()
console.log(queue.peek());
