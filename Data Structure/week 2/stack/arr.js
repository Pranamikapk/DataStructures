class Stack {
    constructor(capacity) {
        this.items = [];
        this.capacity = capacity;
    }

    // Add element to the top of the stack (push)
    push(element) {
        if (!this.isFull()) {
            this.items.push(element);
            return true;
        } else {
            console.log("Stack overflow");
            return false;
        }
    }

    // Remove and return the top element from the stack (pop)
    pop() {
        if (this.isEmpty()) {
            console.log("Stack underflow");
            return null;
        }
        return this.items.pop();
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Check if the stack is full
    isFull() {
        return this.items.length === this.capacity;
    }

    // Return the top element of the stack without removing it (peek)
    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return null;
        }
        return this.items[this.items.length - 1];
    }

    // Return the total number of elements available in the stack (count)
    count() {
        return this.items.length;
    }

    // Change the element at the given position (change)
    change(position, newValue) {
        if (position < 0 || position >= this.items.length) {
            console.log("Invalid position");
            return false;
        }
        this.items[position] = newValue;
        return true;
    }

    // Display the elements of the stack
    display() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return;
        }
        console.log("Stack elements:");
        for (let i = this.items.length - 1; i >= 0; i--) {
            console.log(this.items[i]);
        }
    }
}

// Example usage:
const stack = new Stack(5);
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Peek:", stack.peek()); // Output: 30
console.log("Count:", stack.count()); // Output: 3
stack.display(); // Output: 30 20 10
stack.change(1, 25); // Change element at position 1 to 25
stack.display(); // Output: 30 25 10
console.log("Is Full:", stack.isFull()); // Output: false
console.log("Is Empty:", stack.isEmpty()); // Output: false
stack.push(40);
stack.push(50);
console.log("Is Full:", stack.isFull()); // Output: true
stack.push(60); // Output: Stack overflow
stack.pop(); // Output: 50
stack.pop(); // Output: 40
stack.pop(); // Output: 30
stack.pop(); // Output: 25
stack.pop(); // Output: 10
stack.pop(); // Output: Stack underflow
