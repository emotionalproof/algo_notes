//objectives
  //motivate the need for something like BIG O notation
  //describe what big o notation is 
  //simplify Big O expressions
  //Define "time complexity" and "space complexity"
  //evaluate the time complexity and space complexity of different algorithms using Big O notation
  //describe what a logarithm is

//motivate the need for something like Big O Notation
//imagine we have multiple implementations of the same function
//how to determine which is best
//system for generalizing and talking about code

//write a function that accepts a string input and returns a reversed copy
const reverseString = str => {
    let reversed = ""
    let i = str.length - 1
    while (i >= 0) {
        reversed += str[i]
        i--
    }
    return reversed
}

console.log(reverseString("chase rabenn"))

//who cares about Big O?
    //important to have a precise vocab to talk about how our code performs
    //used for discussing trade-offs between different approaches
    //When your code slows down or crashes, identifying parts of the code that are inefficient 
        //can help us find pain points in our application
    //Less important: it comes up in interviews!

//An Examples
//write a function that calculates the sum of all numbers from 1 up to and including some number n

//PAY ATTENTION TO INSTRUCTIONS
const sumOfDigits = num => {
    let numSum = 0
    while (num > 0){
        numSum += (num % 10)
        num = Math.floor(num/10)
    }
    return numSum
}

console.log(sumOfDigits(234))

//first solution 
// const addUpTo = num => {
//     let total = 0
//     let i = 0
//     while (i <= num) {
//         total += i
//         i++
//     }
//     return total
// }

// console.log(addUpTo(6))

function add

