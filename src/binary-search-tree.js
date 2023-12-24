const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.firstNode = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.firstNode;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    const newNode = new Node(data);
    this.firstNode = addWithin(this.firstNode, data);

    function addWithin(node, data) {
      if (!node) {
        return newNode;
      }

      if (node.data === data) {
        return node;
      }

      if (node.data < data) {
        node.right = addWithin(node.right, data);
      } else {
        node.left = addWithin(node.left, data);
      }

      return node;
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let hasValue = hasWithin(this.firstNode, data);

    function hasWithin(node, data) {
      if (!node) return false;

      if (node.data === data) return true;

      return data < node.data
        ? hasWithin(node.left, data)
        : hasWithin(node.right, data);
    }

    return hasValue;
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let nodeWithValue = findWithin(this.firstNode, data);

    function findWithin(node, data) {
      if (!node) return null;
      if (node.data === data) return node;
      return data < node.data
        ? findWithin(node.left, data)
        : findWithin(node.right, data);
    }
    return nodeWithValue;
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let removedNode = this.find(this.firstNode, data);
    this.firstNode = removeWithin(this.firstNode, data);

    function removeWithin(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeWithin(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeWithin(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeWithin(node.right, minFromRight.data);

        return node;
      }
    }
    return removedNode;
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!this.firstNode) return null;

    let currNode = this.firstNode;
    while (currNode.left) {
      currNode = currNode.left;
    }
    return currNode.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!this.firstNode) return null;

    let currNode = this.firstNode;
    while (currNode.right) {
      currNode = currNode.right;
    }
    return currNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};
