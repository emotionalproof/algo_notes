//how do we visit every node one time in a tree
//can be completely unsorted
//travelling salesman 
// route is easy if the graph is a SLL
//what about a tree
//not a BST
//binary tree, unordered 
//would have to check every node to is a particular value was there
//start with root
//four common approaches 

// find(val) {
//     function search(current) {
//         if (!current) return null
//         if (current.value === val) return current
//         current = current.value < val ? search(current.right) : current = search(current.left)
//         return current
//     }
//     let current = search(this.root)
//     return current
// }


//two main approaches for traversing a tree
//Breadth-first Search
//Depth-first search 
//refer to the general directions 


//                     (10)
//                     /   \
//                  (6)    (15)
//                  / \      \
//               (3)   (8)   (20)

//BFS
//  ----------------->  (10)
//                     /   \
//  --------------> (6) -->(15)
//                  / \      \
//  -----------> (3)->(8)--->(20)
//think about moving across the tree levels/siblings
//[root, root.left, root.right, root.left.left, root.left.right, root.right.right]
//[10, 6, 15, 3, 8, 20]


//Depth-first Search or DFS
//                     (10)
//                     /   \
//                  (6)    (15)
//                  / \      \
//               (3)   (8)   (20)
    //three main orders
    //primary direction is down and then going back up 
    //InOrder
        // [3, 6, 8, 10, 15, 20]
    //PreOrder
        //[10, 6, 3, 8, 15, 20]
    //PostOrder
        //[3, 8, 6, 20, 15, 10]
