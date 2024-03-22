class Node{
    constructor(data){
        this.data=data
        this.left = null
        this.right = null
    }
}

function insert(root,data){
    if(!root){
        return new Node(data)
    }
    if(data< root.data){
        root.left = insert(root.left,data)
    }
    else{
        root.right = insert(root.right,data)
    }
    return root
}

function isBST(node, minKey = Number.MIN_SAFE_INTEGER, maxKey = Number.MAX_SAFE_INTEGER) {
    // Base case
    if (!node) {
        return true;
    }

    if (node.data < minKey || node.data > maxKey) {
        return false;
    }

    return isBST(node.left, minKey, node.data) && isBST(node.right, node.data, maxKey);
}

function checkBST(root) {
    if (isBST(root)) {
        console.log("The tree is a BST.");
    } else {
        console.log("The tree is not a BST!");
    }
}

function main() {
    const keys = [15, 10, 20, 8, 12, 16, 25];

    let root = null;
    for (let key of keys) {
        root = insert(root, key);
    }

    [root.left, root.right] = [root.right, root.left];
    checkBST(root);
}

main();