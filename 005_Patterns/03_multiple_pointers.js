//Multiple Pointers

//creating pointers or values that correspond to an index
// or position and move towards the beginning, end or middle based on a certain condition
//very efficient for solving problems with minimal space complexity as well

//write a function called sumZero which accepts a sorted array of integers
//function should find the first pair where the sum is 0
//Return an array that includes both values that sum to zero or undefined if a pair does not exist

function sumZero(array) {
    let pair 
    let left = 0
    let right = array.length - 1
    while (left < right) {
        let sum = array[left] + array[right]
        if (sum === 0) {
            pair = [array[left], array[right]]
            return pair
        } else if (sum < 0) {
            left++
        } else if (sum > 0) {
            right--
        }
    }
    return pair
}

//time: O(n)
//space: O(1)


// let array1 = [-3,-2, -1, 0, 1, 2, 3]
// let array2 = [-2, -1, 0, 1, 2, 3]
// let array3 = [-3,-2, -1, 0, 1, 2]
// let array4 = [-5, -4, 0, 1, 2, 3]
// let array5 = [-5, -4, 0, 1, 2, 3]
// let array6 = [-1, 1, 2, 3]

// console.log(sumZero(array6))


//countUniqueValues
//implement a function
//called countUniqueValues
//which accepts a sorted array, and counts the unique values in the array
//there can be negative numbers in the array, but it will always be sorted

// function countUniqueValues(array) {
//     let count = 0
//     let left = 0
//     let right = 1
//     while (right <= array.length) {
//         if (array[left] !== array[right]) {
//             count++
//             left = right
//             right++
//             console.log(left, right)
//         } else if (array[left] === array[right]){
//             right++
//             console.log(left, right)
//         }
//     }
//     return count
// }


function countUniqueValues(array) {
    if (array.length === 0) {
        return 0
    }
    let count = 0
    let left = 0
    let right = 1
    while (right < array.length) {
        if (array[left] !== array[right]) {
            left++
            array[left] = array[right]
            right++
        } else if (array[left] === array[right]){
            right++
        }
    }
    return left + 1
}

function countUniqueValues(array) {
    if (array.length === 0) {
        return 0
    }
    let left = 0
    for (let right = 1; right < array.length; right++) {
        if (array[left] !== array[right]) {
            left++
            array[left] = array[right]
        }
    }
    return left + 1
}


let array1 = [1,1,1,1,1,2]
let array2 = [1,2,3,4,4,4,7,7,12,12,13]
let array3 = []
let array4 = [-2,-1,-1,0,1]

console.log(countUniqueValues(array4))
