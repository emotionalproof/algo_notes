//Objectives
//understand how objects and arrays work through the lense of Big O
//explain why adding elements tot he beginning of an array is costly
//compare and contrast the runtime for Arrayed s and objects as well as built-in methods

let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
}

//unordered data structures
//everything stored in key/value pairs

//when you don't need order
//when you want fast access/insertion and removal

//Big O of Objects
    //Insertion O(1)
    //Removal O(1)
    //Searching O(n)
        //checking for value
    //Access O(1)

//hash maps are doing the work behind the scenes
//searching for values: would need to check each pair
    // big o grows as n grows

//Big O of Object Methods
    // Object.keys O(n)
        //Object.keys(instructor)
        //iterates over each key and pushes to return array
    // Object.values O(n)
    // Object.entries O(n)
        //returns AoA with each sub-array [key, value]
    // hasOwnProperty O(1)
        //returns true if object has given key
        //same as Access




