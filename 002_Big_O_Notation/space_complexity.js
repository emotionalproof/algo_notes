//Space Complexity

//so far, we've been focusing on time complexity
    //how long an operation will take
    //runtime
    //how the runtime of an algorithm increases
        //as the size of the input increases
//we can also use big O notation to analyze space complexity
    //how much memory is taken up
    //how much additional memory do we need to allocate
        //in order to run the code in our algorithm

//what about the inputs?
    //as n grows as we approach infinity
        //the size of the input itself is going to grow
    // auxillary space complexity
        //the space required by the algorithm
        //not including the space taken up by the inputs
            //this is what we care about 
    //unless otherwise noted
        //when we talk bout space complexity
            //technically we'll be talking about auxillary space complexity
            //what happens inside the algorithm

// Space Complexity in JS 
    // Rules of Thumb
        //Most primitives (booleans, numbers, undefined, null)
            //are constant space
        //string require O(n) space 
            //where n is the string length
        // reference types are generally O(n)
            //where n is the length (for array) or number of keys in an object

// Example
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total;
}

//looking at space, not time
//have one variable to hold the total, and i for the index
//regardless of the size of the input, we only have two variable
//O(1) space, will always be the same

//Examples
function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr
}
//each element in an array is a separate reference
//space is directly proportionate to n
//O(n) space


