class Node {
    constructor(data) {
      this.data = data;
      this.children = [];
    }
  }
  
  class Tree {
    constructor() {
      this.root = null;
    }
  
    create(data) {
      this.root = new Node(data);
    }
  
    insert(parentData, data) {
      const parent = this.searchNode(parentData);
      if (parent) {
        const newNode = new Node(data);
        parent.children.push(newNode);
      } else {
        console.log(`Parent node with data ${parentData} not found.`);
      }
    }
  
    searchNode(data, node = this.root) {
      if (!node) return null;
      if (node.data === data) return node;
      for (const child of node.children) {
        const foundNode = this.searchNode(data, child);
        if (foundNode) return foundNode;
      }
      return null;
    }
  
    preorderTraversal(node = this.root) {
      if (!node) return;
      console.log(node.data);
      for (const child of node.children) {
        this.preorderTraversal(child);
      }
    }
  
    inorderTraversal(node = this.root) {
      if (!node) return;
      for (const child of node.children) {
        this.inorderTraversal(child);
        console.log(node.data);
      }
    }
  
    postorderTraversal(node = this.root) {
      if (!node) return;
      for (const child of node.children) {
        this.postorderTraversal(child);
      }
      console.log(node.data);
    }
  }
  
  const tree = new Tree();
  tree.create(1);
  tree.insert(1, 2);
  tree.insert(1, 3);
  tree.insert(2, 4);
  tree.insert(2, 5);
  tree.insert(3, 6);
  tree.insert(3, 7);
  
  console.log("Preorder traversal:");
  tree.preorderTraversal();
  console.log("\nInorder traversal:");
  tree.inorderTraversal();
  console.log("\nPostorder traversal:");
  tree.postorderTraversal();
  