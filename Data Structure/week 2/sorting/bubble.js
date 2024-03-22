//array
function bubblesort(arr){
    let swapped
    let c = 0
    do{
        swapped = false
        for(let i = 0 ; i < arr.length ; i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
                c++
            }
        }
    }while(swapped)
    console.log(c);
}

let arr = [ -8 , 3 , 29 , -2 , 11 ]
bubblesort(arr)
console.log(arr);


//linkedlist
class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class Linkedlist{
    constructor(){
        this.head = null
        this.size = 0
    }

    append(data){
        const newNode = new Node(data)
        if(this.head === null){
            this.head = newNode
        }else{
            let cur = this.head
            while(cur.next){
                cur =cur.next
            }
            cur.next = newNode
        }
        this.size++
    }

    display(){
        let cur = this.head
        let res = ''
        while(cur){
            res += cur.data + ' '
            cur = cur.next
        }
        console.log(res);
    }

    bubblesort(){
        let swapped
        let ptr1 
        let ptr2 = null
        if(this.head === null){
            return 
        }
        do{
            swapped = false
            ptr1 = this.head
            while(ptr1.next !== ptr2){
                if(ptr1.data > ptr1.next.data){
                    const temp = ptr1.data
                    ptr1.data = ptr1.next.data
                    ptr1.next.data = temp
                    swapped = true
                }
                ptr1 = ptr1.next
            }
            ptr2 = ptr1
        }
     while(swapped)
    }
}

const linkedList = new Linkedlist();
linkedList.append(64);
linkedList.append(34);
linkedList.append(25);
linkedList.append(12);
linkedList.append(22);
linkedList.append(11);
linkedList.append(90);

console.log("Before sorting:");
linkedList.display();

linkedList.bubblesort();

console.log("After sorting:");
linkedList.display();