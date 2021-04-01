// Invent Divide

const chaseDiv = (a, b) => {
    let count = 0

    while (a > b) {
        a -= b
        count++
    } 

    return count
}


















// const chaseDiv = (a, b) => {
//     let count = 0

//     while (a >= b) {
//         a -= b
//         count++
//     }

//     return count
// }

console.log(chaseDiv(10,3))



//search






//sort












// Big O Notation
// 







// n = input size



O(1) constant time
const constantTimeFnc = array => {
    return array[1]
}






//O(log n)
//binary search 

// logarithm or log 
// time complexity = log₂(n)


// (2 ^ number of operations) = n
// the number of operations is equal to 2 to the power of the input size

// n = 1
// 0 = log₂(1)

// n = 2
// 1 = log₂(2)

// n = 4
// 2 = log₂(4)

// n = 8
// 3 = log₂(8)

// n = 16
// 4 = log₂(16)





//O(n) linear time
// n
// n
const linearTime = array => {
    //loop
}



//O(n log n)
//sorting algorithms




//O(n*n) quadratic time 
//insertion sort
const quadTime = array => {
    
}




//O(n³) cubic time






//O(2ⁿ)






//O(n!)

// const insertionSort = array => {
//     for (let i = 1; i < array.length; i++) {
//         let key = array[i]
//         let j = i - 1

//         while (j >= 0 && array[j] > key) {
//             array[j + 1] = array[j]
//             j--
//         }
//         array[j + 1] = key
//     }
//     return array 
// }