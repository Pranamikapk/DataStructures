class CircularQueue{
    constructor(capacity){
        this.items = new Array(capacity)
        this.capacity = capacity
        this.length = 0
        this.rear = -1
        this.front = -1
    }

    isEmpty(){
        return this.length === 0
    }

    isFull(){
        return this.length === this.capacity
    }

    enqueue(elem){
        if(!this.isFull()){
            this.rear = ( this.rear + 1 ) % this.capacity
            this.items[this.rear] = elem
            this.length++
            if(this.front===-1){
                this.front = this.rear
            }
        }else
        console.log("Queue is full");
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }
        const item = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front+1) % this.capacity
        this.length--
        if(this.isEmpty()){
            this.rear = -1
            this.front = -1
        }
        return item
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[this.front]
        }
    }

    display(){
        if(this.isEmpty()){
            console.log("Queue is empty");
        }else{
            let res = ' '
            let i
            for ( i = this.front; i !== this.rear ; i = (i + 1) % this.capacity) {
                res += this.items[i] + ' '
            }
            res += this.items[i] 
            console.log(res);

        }
    }
}

const circularQueue = new CircularQueue(5)
circularQueue.enqueue(1)
circularQueue.enqueue(2)
circularQueue.enqueue(3)
circularQueue.enqueue(4)
circularQueue.enqueue(5)
circularQueue.dequeue()
console.log(circularQueue.peek());
circularQueue.display()