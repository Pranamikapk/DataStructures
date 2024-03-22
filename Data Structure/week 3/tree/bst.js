class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class Tree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(data){
        const node = new Node(data)
        if(this.isEmpty()){
            this.root = node
        }
        else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(rootNode,newNode){
        if(newNode.data < rootNode.data){
            if(rootNode.left === null){
            console.log("Left");
            rootNode.left = newNode
            } else{
            this.insertNode(rootNode.left,newNode)
            }
        }
        else{
            if(rootNode.right === null){
                console.log("Right");
                rootNode.right = newNode
            }else{
                this.insertNode(rootNode.right,newNode)
            }
        }
    }

    searchNode(root,data){
        if(!root) return false
        else{
            if(root.data === data)
                return true
            else{
                if(data < root.data){
                    return this.searchNode(root.left,data)
                }else{
                    return this.searchNode(root.right,data)
                }
            }
        }
    }

    //DFS
    preorder(root){
        if(!root) return false
        else{
            console.log(root.data)
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }

    inorder(root){
        if(!root) return false
        else{
            this.inorder(root.left)
            console.log(root.data)
            this.inorder(root.right)
        }
    }

    postorder(root){
        if(root)
        {
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.data)
        }
    }

    BFS(){
        let queue = [];
        queue.push(this.root);
        while (queue.length > 0) {
            let curr = queue.shift();
            console.log(curr.data);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
    }

    min(root){
        if(!root.left){
            return root.data
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.data
        }else{
            return this.max(root.right)
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root,value)
    }

    deleteNode(root,data){
        if(root === null)
        return root
        if(data < root.data){
            root.left = this.deleteNode(root.left,data)
        }else if(data > root.data){
            root.right = this.deleteNode(root.right,data)
        }else{
            if(!root.left){
                return root.right
            }
            else if(!root.right){
                return root.left
            }
            root.data = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }
}

const bst = new Tree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

console.log(bst.searchNode(bst.root,11));
console.log(bst.isEmpty()); 
bst.preorder(bst.root);
// bst.inorder(bst.root);
// bst.postorder(bst.root);

// bst.BFS()

// console.log("Min:",bst.min(bst.root));

// console.log("Max:",bst.max(bst.root));

// bst.delete(5)
// bst.BFS()