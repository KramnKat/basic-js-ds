const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    let curr = this.rootNode;
    if (!this.rootNode) {
      this.rootNode = new Node(data);
    } else {
      while (curr) {
        if (data > curr.data) {
          if (!curr.right) {
            curr.right = new Node(data);
            return;
          }
          curr = curr.right
        } else {
          if (!curr.left) {
            curr.left = new Node(data);
            return;
          }
          curr= curr.left;
        }
      }
    }
  }

  has(data) {
    let curr = this.rootNode;
    if (!this.rootNode) {
      return false;
    } else {
      while (curr) {
        if (data === curr.data) {
         return true;
        } else if (data > curr.data) {
          if (!curr.right) {
            return false;
          }
          curr = curr.right;
        } else {
          if(!curr.left) {
            return false
          }
         curr = curr.left;
        }
      }
      return false;
    }
  }

  find(data) {
    let curr = this.rootNode;
    if (!this.rootNode) {
      return null;
    } else {
      while (curr) {
        if (data === curr.data) {
         return curr;
        } else if (data > curr.data) {
          if (!curr.right) {
            return null;
          }
          curr = curr.right;
        } else {
          if(!curr.left) {
            return null;
          }
         curr = curr.left;
        }
      }
      return null;
    }
  }

  remove(data) {
    if (!this.rootNode) return null;
  }

  min() {
    let curr = this.rootNode;
    while (curr.left) {
      curr = curr.left
    }
    return curr.data
  }

  max() {
    let curr = this.rootNode;
    while (curr.right) {
      curr = curr.right
    }
    return curr.data
  }
}

module.exports = {
  BinarySearchTree
};