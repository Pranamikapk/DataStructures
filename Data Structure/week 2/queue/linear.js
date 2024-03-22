class Queue{
    constructor(){
        this.items = {}
        this.rear = 0
        this.front = 0
    }

    enqueue(elem){
        this.items[this.rear] = elem
        this.rear++
    }

    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        console.log(item); 
    }

    isEmpty(){
        return this.rear - this.front === 0 
    }

    peek(){
        return this.items[this.front]
    }

    size(){
        return this.rear - this.front
    }

    print(){
        console.log(this.items);
    }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.dequeue()
queue.print()
console.log(queue.isEmpty());
console.log(queue.peek());
