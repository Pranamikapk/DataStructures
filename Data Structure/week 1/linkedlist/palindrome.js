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

    append(data){
        const newNode = new Node(data)
        if(this.head === null){
            this.head = newNode
        }else{
            let cur = this.head
            while(cur.next!==null){
                cur = cur.next
            }
            cur.next = newNode
        }
        this.size++
    }
    
    isPalindrome(){
        function rev(head){
            let prev = null
            let cur = head
            while(cur){
                let next = cur.next
                cur.next = prev
                prev = cur
                cur = next
            }
            return prev
        }

        function compare(list1,list2){
            let cur1 = list1
            let cur2 = list2
            while(cur1 !==null && cur2 !== null){
            if(cur1.data !== cur2.data){
                return false
            }
            cur1 = cur1.next
            cur2 = cur2.next
            }
            return true
        }
        const list = this.head
        const reversedlist = rev(this.head)
        return compare(list,reversedlist)
    }
}

const linkedList = new LinkedList()
linkedList.append('r')
linkedList.append('a')
linkedList.append('d')
linkedList.append('i')
linkedList.append('o')
console.log(linkedList.isPalindrome());
