// Invent Divide

const chaseDiv = (a, b) => {
    let count = 0

    while (a >= b) {
        a -= b
        count++
    }

    return count
}

console.log(chaseDiv(10,3))



// 10/3; 0  10 ; 1 7 ; 2 4 ; 3 1 





//O(1) constant time
// const constantTimeFnc = array => {
//     return array[0]
// }






//O(log n)





//O(n) linear time
// n
// n
// const linearTime = array => {

// }



//O(n log n)




//O(n²) quadratic time 






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