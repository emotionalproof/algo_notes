class Node {
  constructor(value) {
    this.value = value;
    this.count = 1;
    this.left = null;
    this.right = null;
  }
}

class BSTit {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this.root;
    }
    let current = this.root;
    let parent = null;
    let isLeftChild = true;
    while (current && current.value !== value) {
      parent = current;
      if (value < current.value) {
        current = current.left;
        isLeftChild = true;
      } else {
        current = current.right;
        isLeftChild = false;
      }
    }
    if (!current) {
      if (isLeftChild) {
        parent.left = newNode;
      } else {
        parent.right = newNode;
      }
      return this.root;
    }

    if (current.value === value) {
      current.count++;
      return this.root;
    }
  }

  find(value) {
    if (!this.root) return null;
    let current = this.root;
    while (current) {
      if (current.value === value) return current;
      if (current.value > value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  remove(value) {
    if (!this.root) return null;
    let current = this.root;
    let parent = null;
    let isLeftChild = true;
    while (current && current.value !== value) {
      parent = current;
      if (current.value > value) {
        current = current.left;
        isLeftChild = true;
      } else {
        current = current.right;
        isLeftChild = false;
      }
    }
    if (!current) return null;
    if (current.count > 1) {
      current.count--;
      return this.root;
    }
    if (!current.left || !current.right) {
      let child = current.left ? current.left : current.right;
      if (!parent) {
        this.root = child;
      } else if (isLeftChild) {
        parent.left = child;
      } else if (!isLeftChild) {
        parent.right = child;
      }
    } else {
      let successor = current.right;
      let successorParent = current;
      while (successor.left) {
        successorParent = successor;
        successor = successor.left;
      }
      current.value = successor.value;
      current.count = successor.count;
      let child = successor.right;
      if (successorParent === current) {
        successorParent.right = child;
      } else {
        successorParent.left = child;
      }
    }
    return this.root;
  }

  // Traversal

  // In Order Traversal Left-Node-right;
  inOrder() {
    // Stack to track nodes while traversing
    const stack = [];
    // Final result array
    const result = [];
    // Start from the root
    let current = this.root;
    // While there are nodes in the stack
    // OR we are at a valid node
    while (stack.length || current) {
      // Step 1: Traverse left subtree as far as possible
      while (current) {
        // Store node before going left
        stack.push(current);
        current = current.left;
      }

      // Step 2: Pop from stack and process node
      // Get the last stored node
      current = stack.pop();

      // Since the node might have duplicates, add it 'count' times
      for (let i = 0; i < current.count; i++) {
        result.push(current.value);
      }

      // Step 3: Traverse right subtree
      current = current.right;
    }

    return result;
  }

  inOrder() {
    let stack = [];
    let result = [];
    let current = this.root;
    while (stack.length || current) {
      while (current) {
        stack.push(current);
        current = current.left;
      }

      current = stack.pop();

      for (let i = 0; i < current.count; i++) {
        result.push(current.value);
      }

      current = current.right;
    }
    return result;
  }

  inOrder1() {
    if (!this.root) return undefined;
    let stack = [];
    let result = [];
    let current = this.root;
    while (stack.length || current) {
      while (current) {
        stack.push(current);
        current = current.left;
      }
      current = stack.pop();
      result.push(current);

      current = current.right;
    }
    return result;
  }

  preOrder1() {
    if (!this.root) return undefined;
    let stack = [this.root];
    let result = [];
    while (stack.length) {
      let node = stack.pop();

      result.push(node);

      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
    return result;
  }
  // Node, Left, Right
  preOrder() {
    const result = [];
    if (!this.root) return result;
    const stack = [this.root];
    while (stack.length) {
      const node = stack.pop();
      result.push(node.value);
    //   for (let i = 0; i < node.count; i++) {
    //     result.push(node.value);
    //   }

      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
    return result;
  }

  postOrder1() {
    if (!this.root) return undefined;
    let stack1 = [this.root];
    let stack2 = [];
    let result = [];
    while (stack1.length) {
      let node = stack1.pop();
      stack2.push(node);
      if (node.left) stack1.push(node.left);
      if (node.right) stack1.push(node.right);
    }
    while (stack2.length) {
      const node = stack2.pop();
      result.push(node);
    }
    return result;
  }

  // Left, Right, Node
  postOrder() {
    const result = [];
    if (!this.root) return result;
    const stack1 = [this.root];
    const stack2 = [];

    while (stack1.length) {
      const node = stack1.pop();
      stack2.push(node);

      if (node.left) stack1.push(node.left);
      if (node.right) stack1.push(node.right);
    }
    while (stack2.length) {
      const node = stack2.pop();
      for (let i = 0; i < node.count; i++) {
        result.push(node.value);
      }
    }
    return result;
  }

  levelOrderBFS() {
    if (!this.root) return undefined;
    let queue = [this.root];
    let result = [];
    while (queue.length) {
      const node = queue.shift();
      result.push(node);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return result;
  }

  levelOrder() {
    const result = [];
    if (!this.root) return result;

    const queue = [this.root];

    while (queue.length) {
      const node = queue.shift();
      for (let i = 0; i < node.count; i++) {
        result.push(node.value);
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return result;
  }
}

class BSTrec {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const _insertNode = (node, value) => {
      if (!node) return new Node(value);
      if (value === node.value) {
        node.count++;
      } else if (value < node.value) {
        node.left = _insertNode(node.left, value);
      } else {
        node.right = _insertNode(node.right, value);
      }
      return node;
    };
    this.root = _insertNode(this.root, value);
    return this.root;
  }

  find(value) {
    const _findNode = (node, value) => {
      if (!node) return null;
      if (value === node.value) return node;
      if (value < node.value) {
        return node.left, value;
      } else {
        return node.right, value;
      }
    };
    return _findNode(this.root, value);
  }

  remove(value) {
    const _removeNode = (node, value) => {
      if (!node) return null;
      if (value < node.value) {
        node.left = _removeNode(node.left, value);
        return node;
      } else if (value > node.value) {
        node.right = _removeNode(node.right, value);
        return node;
      }

      if (node.count > 1) {
        node.count--;
        return node;
      }

      if (!node.left) return node.right;
      if (!node.right) return node.left;

      let successor = node.right;
      while (successor.left) {
        successor = successor.left;
      }
      node.value = successor.value;
      node.count = successor.count;

      node.right = _removeNode(node.right, successor.value);
      return node;
    };
    this.root = _removeNode(this.root, value);
    return this.root;
  }

  inOrder(node = this.root, result = []) {
    if (!node) return result;
    this.inOrder(node.left, result);
    for (let i = 0; i < node.count; i++) {
      result.push(node.value);
    }
    this.inOrder(node.right, result);
    return result;
  }

  inOrderRec1(node = this.root, result = []) {
    if (!node) return result;
    this.inOrderRec1(node.left, result);
    result.push(node.value);
    this.inOrderRec1(node.right, result);
    return result;
  }

  preOrderRec1(node = this.root, result = []) {
    if (!node) return result;
    result.push(node.value);
    this.preOrderRec1(node.left, result);
    this.preOrderRec1(node.right, result);
    return result;
  }
  preOrder(node = this.root, result = []) {
    if (!node) return result;
    for (let i = 0; i < node.count; i++) {
      result.push(node.value);
    }
    this.preOrder(node.left, result);
    this.preOrder(node.right, result);
    return result;
  }

  postOrderRec1(node = this.root, result = []) {
    if (!node) return result;
    this.postOrderRec1(node.left, result);
    this.postOrderRec1(node.right, result);
    result.push(node.value);
    return result;
  }
  postOrder(node = this.root, result = []) {
    if (!node) return result;
    this.postOrder(node.left, result);
    this.postOrder(node.right, result);
    for (let i = 0; i < node.count; i++) {
      result.push(node.value);
    }
    return result;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    let parent = null;
    let isLeftChild = true;
    while (current) {
      parent = current;
      if (value === current.value) {
        current.count++;
        return this.root;
      } else if (value < current.value) {
        isLeftChild = true;
        current = current.left;
      } else {
        isLeftChild = false;
        current = current.right;
      }
    }
    if (isLeftChild) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }
  }

  insertRec(value) {
    const _insertNode = (node, value) => {
      if (!node) return new Node(value);
      if (node.value === value) {
        node.count++;
      } else if (node.value > value) {
        node.left = _insertNode(node.left, value);
      } else {
        node.right = _insertNode(node.right, value);
      }
    };
    this.root = _insertNode(this.root, value);
    return this;
  }

  remove(value) {
    if (!this.root) return this;
    let current = this.root;
    let parent = null;
    let isLeftChild = true;

    while (current && current.value !== value) {
      parent = current;
      if (current.value > value) {
        current = current.left;
        isLeftChild = true;
      } else {
        isLeftChild = false;
        current = current.right;
      }
    }
    if (!current) return null;
    if (current.count > 1) {
      current.count--;
      return this.root;
    }

    if (!current.left || !current.right) {
      let child = current.left ? current.left : current.right;
      if (!parent) {
        this.root = child;
      } else if (isLeftChild) {
        parent.left = child;
      } else if (!isLeftChild) {
        parent.right = child;
      }
    } else {
      let successor = current.right;
      let successorParent = current;
      while (successor.left) {
        successorParent = successor;
        successor = successor.left;
      }

      current.value = successor.value;
      current.count = successor.count;

      let successorChild = successor.right;
      if (successorParent === current) {
        successorParent.right = successorChild;
      } else {
        successorParent.left = successorChild;
      }
    }
    return this.root;
  }

  removeRec(value) {
    const _removeNode = (node, value) => {
      if (!node) return null;
      if (node.value > value) {
        node.left = _removeNode(node.left, value);
        return node;
      } else if (node.value < value) {
        node.right = _removeNode(node.right, value);
        return node;
      }

      if (node.count > 1) {
        node.count--;
        return this;
      }

      if ((!node, right)) return node.left;
      if (!node.left) return node.right;

      let successor = node.right;
      while (successor.left) {
        successor = successor.left;
      }

      node.value = successor.value;
      node.count = successor.count;
      node.right = _removeNode(node.right, successor.value);
      return node;
    };
    this.root = _removeNode(this.root, value);
    return this.root;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  inOrder() {
    if (!this.root) return null;
    let stack = [];
    let result = [];
    let current = this.root;
    while (current || stack.length) {
      while (current) {
        stack.push(current);
        current = current.left;
      }
      current = stack.pop();
      result.push(current.value);
      current = current.right;
    }
    return result;
  }

  preOrder() {
    if (!this.root) return null;
    let stack = [this.root];
    let result = [];
    while (stack.length) {
      let node = stack.pop();
      result.push(node.value);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
    return result;
  }

  postOrder() {
    if (!this.root) return null;
    let stack1 = [this.root];
    let stack2 = [];
    let result = [];
    while (stack1.length) {
      let node = stack1.pop();
      stack2.push(node);
      if (node.left) stack1.push(node.left);
      if (node.right) stack1.push(node.right);
    }
    while (stack2.length) {
      let node = stack2.pop();
      result.push(node.value);
    }
    return result;
  }

  levelOrder() {
    if (!this.root) return null;
    let queue = [this.root];
    let result = [];
    while (queue.length) {
      let node = queue.shift();
      result.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return result;
  }

  inOrderRec(node = this.root, result = []) {
    if (!node) return null;
    this.inOrderRec(node.left, result);
    result.push(node.value);
    this.inOrderRec(node.right, result);
  }

  preOrder(node = this.root, result = []) {
    if (!node) return null;
    result.push(node.value);
    this.preOrder(node.left, result);
    this.preOrder(node.right, result);
  }

  postOrder(node = this.root, result = []) {
    if (!node) return null;
    this.postOrder(node.left, result);
    this.postOrder(node.right, result);
    result.push(node.value);
  }

  inOrderRec1() {}

  isBalanced(node = this.root) {
    // An empty tree is balanced
    if (!node) return true;

    const getLeftHeight = (node) => {
      let count = 1;
      while (node.left) {
        count++;
        node = node.left;
      }
      return count;
    };
    const getRightHeight = (node) => {
      let count = 1;
      while (node.right) {
        count++;
        node = node.right;
      }
      return count;
    };
    let leftHeight = getLeftHeight(node);
    let rightHeight = getRightHeight(node);
    let diff = Math.abs(leftHeight - rightHeight);
    if (diff > 1) return false;
    this.isBalanced(node.left);
    this.isBalanced(node.right);
  }

  isBalanced(node = this.root) {
    const checkHeight = (node) => {
      // Base case: heigh of empty tree is 0
      if (!node) return 0;

      let leftHeight = checkHeight(node.left);
      // Left subtree is unbalanced
      if (leftHeight === -1) return -1;

      let rightHeight = checkHeight(node.right);
      // Right subtree is unbalanced
      if (rightHeight === -1) return -1;

      // Current node is unbalanced
      if (Math.abs(leftHeight - rightHeight) > 1) return -1;

      // Return heigh of current node
      return 1 + Math.max(leftHeight, rightHeight);
    };

    // If checkHeight returns -1, tree is unbalanced
    return checkHeight(node) !== -1;
  }

  isBalancedRec(node = this.root) {
    const checkHeight = (node) => {
      if (!node) return 0;
      let leftHeight = checkHeight(node.left);
      if (leftHeight === -1) return -1;

      let rightHeight = checkHeight(node.right);
      if (rightHeight === -1) return -1;

      if (Math.abs(leftHeight - rightHeight) > 1) return -1;
      return 1 + Math.max(leftHeight, rightHeight);
    };
    return checkHeight(node) !== -1;
  }

  isBalancedRec2(node = this.root) {
    // create recursive function for chekcing height that accepts a node
    const checkHeight = (node) => {
      // if there is no node return 0 because there is not height
      if (!node) return 0;
      // save the left height to a variable
      let leftHeight = checkHeight(node.left);
      // if leftheight is -1 return -1
      if (leftHeight === -1) return -1;

      // get right height and if -1, return -1
      let rightHeight = checkHeight(node.right);
      if (rightHeight === -1) return -1;

      // if the difference between the left and right height is greater than 1
      // return -1
      if (Math.abs(leftHeight - rightHeight) > 1) return -1;

      //return 1 + the larger of the two subtrees
      return 1 + Math.max(leftHeight, rightHeight);
    };

    // return a binary on
    return checkHeight(node) !== -1;
  }
}

// define function that accepts node with a default value of the root
// create a nested function to checkHeight that accepts a node
// inside the nested function
// if there is no node, then there is no height so return 0
// get the height of the left subtree
// if it is -1, return -1;
// do the same for the right subtree
// if the difference between the heights of left and right is greater than 1, return -1
// return 1 + the height of the taller subtree
// in the outer function, return if checkHeight(node) !== -1

isBalanced(node = this.root) {
    const checkHeight = (node) => {
        if (!node) return 0;

        let leftHeight = checkHeight(node.left);
        if (leftHeight === -1) return -1;

        let rightHeight = checkHeight(node.right)
        if (rightHeight === -1) return -1;

        if (Math.abs(leftHeight - rightHeight) > 1) return -1;

        return 1 + Math.max(leftHeight, rightHeight)
    }
    return checkHeight(node) !== -1
}
