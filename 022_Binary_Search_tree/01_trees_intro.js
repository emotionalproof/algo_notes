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


class BinarySearchTree {
    constructor() {
        this.root = null
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}