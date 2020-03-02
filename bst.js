class Node {
    constructor(data, left = null, right = null) {
        this.data = data
        this.left = left
        this.right = right
    }
}

class BST {
    constructor() {
      this.root = null;
    }
    add(data) {
      const node = this.root;
      if (node === null) {
        this.root = new Node(data);
        return;
      } else {
        const searchTree = function(node) {
          if (data < node.data) {
            if (node.left === null) {
              node.left = new Node(data);
              return;
            } else if (node.left !== null) {
              return searchTree(node.left);
            }
          } else if (data > node.data) {
            if (node.right === null) {
              node.right = new Node(data);
              return;
            } else if (node.right !== null) {
              return searchTree(node.right);
            }
          } else {
            return null;
          }
        };
        return searchTree(node);
      }
    }

    findmin() {
        let node = this.root
        while(node.left !== null) {
            node = node.left
        }
        return node.data
    }

    findmax() {
        let node = this.root
        while(node.right !== null) {
            node = node.right
        }
        return node.data
    }

    find(data){
        if(data === this.root) {
            return this.root
        }
        let current = this.root
        while(current.data !== data) {
            if(data < current.data) {
                current = current.left
            }
            else {
                current = current.right
            }
            if(current === null) {
                return null
            }
        } 
        return current
    }

    remove(data) {
        const removeNode = function(node, data) {
          if (node == null) {
            return null;
          }
          if (data == node.data) {
            // node has no children 
            if (node.left == null && node.right == null) {
              return null;
            }
            // node has no left child 
            if (node.left == null) {
              return node.right;
            }
            // node has no right child 
            if (node.right == null) {
              return node.left;
            }
            // node has two children 
            var tempNode = node.right;
            while (tempNode.left !== null) {
              tempNode = tempNode.left;
            }
            node.data = tempNode.data;
            node.right = removeNode(node.right, tempNode.data);
            return node;
          } else if (data < node.data) {
            node.left = removeNode(node.left, data);
            return node;
          } else {
            node.right = removeNode(node.right, data);
            return node;
          }
        }
    this.root = removeNode(this.root, data);
    }

    dfsInorder() {
      let result = []
  
      const traverse = node => {
          if (node.left) traverse(node.left)
  
          result.push(node.data)
  
          if(node.right) traverse(node.right)
  
      }

      traverse(this.root)
      return result 
  }

  dfsPreOrder() {
      let result = []
          
      const traverse = node => {

          result.push(node.data)

          if (node.left) traverse(node.left)
      
          if(node.right) traverse(node.right)
  
      }

      traverse(this.root)
      return result 
  }

  dfsPostOrder() {
      let result = []
          
      const traverse = node => {
          if (node.left) traverse(node.left)
      
          if(node.right) traverse(node.right)

          result.push(node.data)

      }

      traverse(this.root)
      return result 
  }
}


//example
const bts = new BST()
bts.add(5)
bts.add(3)
bts.add(4)
bts.add(7)
bts.add(2)
bts.remove(7)


console.log(bts.findmin())
console.log(bts.findmax())


