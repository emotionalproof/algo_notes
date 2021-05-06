//what a tree is
//compare with other ds
//differences between trees, binary trees, binary search trees
//implement operations on binary search trees BST

//tree
//ds that consists of nodes in a parent/child relationship
//get branching structures

//top is 9 
//each child will have a reference to parent 

//lists are linear
    //only one path
//trees are nonlinear
    //multiple path

//SLL could be thought of as a sort of tree

//in trees
    //node can only point to a child, not to a sibling
    //every node is moving away from the root 
    //needs to be one root
        //root cannot have sibling 

//Root - top node in a tree
//child - node directly connected to another node when moving away from the root
//parent - a node directly connected to another node when moving towards the root. converse of child
//sibling - a group of nodes with the same parent 
//lear - a node with no children
//Edge - the connection between one node and another

//Tree use-cases and applications
    //HTML DOM
    //Network Routing
    //abstract syntax trees
    //Artificial Intelligence (ex. minimax tree)
    //Folders in an OS

//Intro to binary trees
    //each parent/node can have at most two children, 0, 1, or 2

//binary search trees
    //at most 2 children 
    //used to store data that can be compared, generally numbers, but could be strings so long as it can be compared
    //if item is less than parent, it goes on the left, if it is greater than parent, it goes to the right

//Searching a BST
    //
class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        let newNode = new Node(val)

        function checkNode(current) {
            if (!current) return newNode

            if (val > current.value) {
                current.right = checkNode(current.right)
            } else if (val < current.value) {
                current.left = checkNode(current.left)
            }
            return current
        }
        this.root = checkNode(this.root)
        return this
    }

    // insert(val) {
    //     let newNode = new Node(val)
    //     if (!this.root) this.root = newNode
    //     let current = this.root

    //     while (current.value !== val) {
    //         if (val > current.value) {
    //             current.right ? current = current.right : current.right = newNode
    //         } else if (val < current.value) {
    //             current.left? current = current.left : current.left = newNode
    //         }
    //     }

    //     return this
        // let newNode = new Node(val)
        // if (!this.root) this.root = newNode
        // let current
        // let next = this.root
        // while (next) {
        //     current = next
        //     if (val > next.value) {
        //         next = next.right
        //     } else {
        //         next = next.left
        //     }
        // }

        // val > current.value ? current.right = newNode : current.left = newNode
    // }

    find(val) {
        function search(current) {
            if (!current) return null
            if (current.value === val) return current
            current = current.value < val ? search(current.right) : current = search(current.left)
            return current
        }
        let current = search(this.root)
        return current
    }
}



//how BTS work
    //every parent node has at most two children
    //every node to the left of a parent node is always less than the parent
    //every node to the right of a parent node is always greater than the parent
    // this is done to make searching much fast 
    //system of organization 

let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(15)
tree.insert(20)
tree.insert(6)
tree.insert(8)
// tree.insert(3)
// tree.insert(13)
// tree.insert(22)
// tree.insert(19)

// console.log(tree.root)
console.log(tree.find(9))


//Big O
//Insertion O(log n)
//Searching O(log n)

// o(log n) is not guaranteed 
//if the tree is lopsided, every child is greater than the parent
    //valid BST but would mean you are not eliminating have of the input in each iteration
//possible solution is to rewrite your tree from a middle value


