class Stack{
    constructor(capacity){
        this.q1 = []
        this.q2 = []
    }

    push(elem){
        while(this.q1.length !== 0){
            this.q2.push(this.q1.shift())
        }
        this.q1.push(elem)
        while (this.q2.length !== 0) {
            this.q1.push(this.q2.shift())
        }
    }

    pop(){
        return this.q1.shift()
    }

    peek(){
        return this.q1[0]
    }

    display(){
        console.log(this.q1);
    }
}

const stack = new Stack()
stack.push(3)
stack.push(5)
stack.push(9)
stack.push(1)
stack.display()
console.log(stack.peek());