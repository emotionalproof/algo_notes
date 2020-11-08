//Sliding Windows Pattern
//pattern involves creating a window which can either be an array or number
//from one position to another
//depending on a certain condition, the window either increases or closes
//and a new window is created
//very useful for keeping track of a subset of data in an array/string etc.

// function longestRun(string) {
//     let longest = 0
//     let charObj = {}
//     let start = 0
//     for (let end = start; end < string.length; end++) {
//         let current = string.charAt(end)
//         if (charObj[current]) {

//         }
//     }
// }

//example
//write a function called maxSubarrySum which accepts an array of integers
//and a number called n
//the function should calculate the max sum of n consecutive elements in the array

function maxSubarrySum(array, n) {
    let maxSum = -Infinity
    for (let i = 0; i < array.length - n + 1; i++) {
        let total = 0
        let count = 0
        while (count < n) {
            let current = array[i + count]
            total += current
            count++
        }
        maxSum = Math.max(maxSum, total)
    }
    return maxSum
}



function maxSubarrySum(array, n) {
    let maxSum = 0
    let tempSum = 0
    if (array.length < num) return null
    for (let i = 0; i < num; i++) {
        maxSum += array[i]
    }
    tempSum = maxSum
    for (let i = num; i < array.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
}

let array1 = [1,2,5,2,8,1,5,9,9,9,9]
let n = 4
console.log(maxSubarrySum(array1, n))

// class Dog {
//     constructor(firstName, favSnacks) {
//         this.firstName = firstName
//         this.favSnacks = favSnacks
//     }

//     sayName() {
//         console.log('woof my ame is ${this.firstName}')
//     }
// }

// const maizey = new Dog("Maizey", ['Treats', "tofu", 'hummus'])

// console.log(maizey)
