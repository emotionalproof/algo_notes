// Computer Science topic: Binary




// Problem Solving Patterns
// Arrays
// Using Built-ins
// Classic Algorithm Review: Binary Search


// Counting in Binary

0
1
10  2
11   
100  4
101 
110  
111
0001 8
1001
1010  10
1011
1100
1101
1110
1111
10000 16








// REACTO 
// Read 
// Examples
// restrictions 
// array sorted 
// empty array
// data type of elements matter 

// Approach


// Code


// Test


// Optimization 






// Searching for an element

// Linear Search
// takes in a sorted array and a target value
// checks each element of the array for the target value
// if you find the target value, return the index
//otherwise go to the next element
// if target value is not found, return -1


const linearSearch = (arr, val) => {
    arr.forEach((ele, i) => {
        if (ele === val) return i 
    })
    return -1 
}

// O(n)





//Binary Search

// start with a SORTED array and a target value 
// create variable to mark the beginning the search field
//create a variable to mark the end of the search field
//loop
// find the middle of the array and check its value
// if the middle value equals the target value, return the middle index
// If the middle value is less than the target value, set the beginning of the search field to middle + 1
// If the middle value is greater than the target value, set the end of the search field to middle - 1
// if the target value is not found, return -1 
// 
// ex. [1,2,3,4,5,6,7,8,9], 3; return 2
// ex. [1,2,3,4,5,6], 1; return 0
// ex. [], 10; return -1
// ex. [1,2,3,4,5,6], 10; return -1
[1,2,3,4,5,6,7,8,9]; 6
start 0
middle = 5
[6,7,8,9]; 6
start = 6


const binarySearch = (arr, val) => {
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
        let middle = Math.floor((start + end)/2)
        if (arr[middle] === val) {
            return middle
        } else if (val < middle) {
            end = middle - 1
        } else if (val > middle) {
            start = middle +1
        }
    }
    return -1
}

O(log n)























const binarySearch = (array, target) => {
    let startIndex = 0;
    let endIndex = array.length - 1;
    while(startIndex <= endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2)

        if(target === array[middleIndex]) {
            return middleIndex
        } else if(target > array[middleIndex]) {
        startIndex = middleIndex + 1;
        } else if(target < array[middleIndex]) {
        endIndex = middleIndex - 1;
        }
    }

    return -1
}


console.log(binarySearch([1,2,3,4,5,6,7], 5))