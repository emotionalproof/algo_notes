//Intro to Problem Solving Approach
//define algorithm
//devise a plan to solve algo
//compare and contrast problem solving patterns
    //including
        //frequency counters
        //two pointer problems
        //divide and conquer

//process or set of steps to accomplish a certain task

//devise a plan for solving problems
//master common problem solving patterns


//problem solving strategies 
    //understand the problem
    //explore concrete examples
    //break it down
    //solve/simplify
    //look back and refactor
//George Polya, How to Solve It

//Understanding the Problem
    //can you restate the problem in your own words
    //what are the inputs that go into the problem
    //what are the outputs that should come from the solution to the problem
    //can the outputs be determined form the inputs?
    // do i have enough info to solve the problem?
    //How should i label the important pieces of data that are part of the problem

//write a function that takes two numbers and returns their sum

//restate in my own words
    //implement addition
//what are the inputs that go into the problem?
    //integers? Float? How large? How small?
    //is it always two numbers? Could it be less? Could it be more?
//what are the outputs?
    //integer? Float? String?
//can the outputs be determined from the inputs?
    //do we have enough info? What if someone leaves a number off?
//How should i label the important pieces of data
    //we have the inputs and outputs
    //what should we label the return value
    //what should we call the function

//EXPLORE CONCRETE EXAMPLES

//can help you understand the problem better
//sanity check
//user stories

//EXPLORE EXAMPLES
//start with simple examples
    //write 2 or 3 
    //easiest use cases
//progress to more complex
//edge cases
    //empty inputs
    //invalid inputs

//write a function that takes in a string and returns counts of each character in the string

//restate problem

// charCount("aaaa") // {a:4}
//simple example
// charCount("hello") //{h:1, e:1, l:2, o:1}

//do we want to include values that are not there with a 0 count

// "my phone number is 182763"
//do we want to include spaces? Numbers? Case sensitive?

//EXPLORE EXAMPLES WITH EMPTY INPUTS
// charCount()
// charCount("")
// charCount(1)
//invalid inputs?


//Break It Down
//take the steps of the problem and break it down
//not necessarily full pseudocode
//explicitly write the steps you need
//forces you to think abou the code before you write it
//helps you catch lingering questions and maybe get a hint from proctor 


function charCount(str) {
    //do something
    //return an object with keys that are lowercase letters with counts of each character
    //no numbers

}

function charCount(str) {
    //make object to return at end
    //loop over string
    //for each character
        //if the char is a number/letter AND key in object, add one to count
        //if the char is a number/letter AND not in object, add it and set value to 1
        //if char is something else (space, period, etc) don't do anything
    //return object at end
    
}

//SOLVE OR SIMPLIFY

// function charCount(str) {

// //if you had trouble with objects
//     //just print each value to start and then loop back and figure out the object
// //if you had trouble with char case
//     //build out the basic logic, not accounting for case 
//     //then go back and add case 
// //common with char count
//     //making sure character is alphanumeric

//     var result = {};
//     for (var i = 0; i < str.length; i++) {
//         var char = str[i].toLowerCase()
//         if (result[char] > 0) {
//             result[char]++
//         } else {
//             result[char] = 1
//         }
//     }
// }

// function charCount(str) {
//     var obj = {}
//     for (var char of str) {
//         char = char.toLowerCase()
//         if (/[a-z0-9]/.test(char)) {
//             obj[char] = ++obj[char] || 1
//         }
//     }
//     return obj
// }

function charCount(str) {
    var obj = {}
    for (var char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase()
            obj[char] = ++obj[char] || 1
        }
    }
    return obj
}

function isAlphaNumeric(char) {
    var code = char.charCodeAt(0)
    if (!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)) {
            return false
        }
    return true
}


console.log(charCount("aaaabbbbzzz;s923092uoas"))


//understand problem and ask questions
//explore concrete examples and edge cases
//break it down
//solve/simplify.  solve a simple part first and then add complex
//look back and refactor