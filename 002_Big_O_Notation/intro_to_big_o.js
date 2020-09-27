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
// const reverseString = str => {
//     let reversed = ""
//     let i = str.length - 1
//     while (i >= 0) {
//         reversed += str[i]
//         i--
//     }
//     return reversed
// }

// console.log(reverseString("chase rabenn"))

//who cares about Big O?
    //important to have a precise vocab to talk about how our code performs
    //used for discussing trade-offs between different approaches
    //When your code slows down or crashes, identifying parts of the code that are inefficient 
        //can help us find pain points in our application
    //Less important: it comes up in interviews!

//An Examples
//write a function that calculates the sum of all numbers from 1 up to and including some number n

//PAY ATTENTION TO INSTRUCTIONS
// const sumOfDigits = num => {
//     let numSum = 0
//     while (num > 0){
//         numSum += (num % 10)
//         num = Math.floor(num/10)
//     }
//     return numSum
// }

// console.log(sumOfDigits(234))

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

//second solution
// function addUpTo(n) {
//     return n * (n + 1) / 2
// }

// 6 * (6 + 1) / 2

// theorem for arithmetic series

//What does better mean?
    //faster?
    //less-memory intensive?
    //more readable?
    //brevity?

//speed and memory are most important 

//how to evaluate speed
//could use a timer

// function addUpTo(n) {
//     let total = 0;
//     for (let i = 1; i <= n; i++) {
//         total += 1;
//     }
//     return total;
// }

//can use performance.now() in browser
// performance time elapsed before function
// let t1 = performance.now();
// addUpTo(1000000000);

//performance time elapsed after function
// let t2 = performance.now()
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds `)

//using a timer is not that reliable. 
//not a good way to talk about the time differences
//different machines will record different times
//the same machine will record different times
//for fast algorithms, speed measurements may not be precise enough
    // fractions of a second may not be properly represented in language
//we also need to test the code in real time
    // if it takes four hours to complete an algo, we have to wait four hours

//rather than counting seconds, which are so variable
    //let's count the number of simple operations the computer needs to perform
    // this will be the same regardless of system

//Counting operations
// function addUpTo(n) {
//     return n * (n + 1) / 2
// }

//three operations
    //multiplication
    //addition
    //division 

//will always be three operations, regardless of the size of n

//Compare to other solution
// function addUpTo(n) {
//     let total = 0;  //1
//     for (let i = 1; i <= n; i++) { //1 + (3 * n)
//         total += 1;
//     }
//     return total;
// }

//operations
    //could be as much as 5n + 2
    // set initial value of total
    // set initial value of i
    // for each iteration in loop
        // i < n
        // i = n
        // i + 1
        // i = i + 1
    //could be 2n or 5n + 2
//regardless of the exact number of operations
    //the number of operations will grow, roughly with n

//Big O
//a way to formalize fuzzy counting
//it allows us to talk formally about how the runtime
    //of an algorithm grows as the inputs grow
    //relationship of input size to the runtime of that input

//we say that an algorithm of O(f(n))
    //function with input of n
    //if the number of simple operations the computer has to do
    //is eventually less than a constant times f(n), as n increases
    //f(n) could be linear f(n) = n
    //f(n) could be quadratic f(n) = n^2
    //f(n) could be constant f(n) = 1
    //f(n) could be something entirely different!
//Big O is worst case scenario, the upper runtime

// function countUpAndDown(n) {
//     console.log("Going up!");
//     for (let i = 0; i < n; i++) {
//         console.log(i);
//     }
//     console.log("At the top!\nGoing down..");
//     for (let j = n -1; j >= 0; j--) {
//         console.log(j)
//     }
//     console.log("Back down. Bye!")
// }

// countUpAndDown(10)

//looking at both loops. they grow as n grows
//so this would be something like 2n, so we would say Big-O of 2n

//Nested loops

function printAllPairs(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}

//outer loop is O(n) and inner loop is O(n)
    //n * n = n²