//implement a function called areThereDuplicates
//accepts a variable number of arguments
//checks whether there are any duplicates among the arguments passed in
//frequency counter or multiple points

// function areThereDuplicates(...args) {
//     let argHash = {}
//     for (let i = 0; i < args.length; i++) {
//         let current = args[i]
//         if (argHash[current]) {
//             return true
//         } else {
//             argHash[current] = true
//         }
//     }
//     return false
// }


// function areThereDuplicates(...args) {
//     args.sort((a,b) => a - b);
//     let left = 0
//     let right = 1
//     while (right < args.length) {
//         if (args[left] === args[right]) {
//             return true
//         }
//         left++
//         right++
//     }
//     return false
// }

function areThereDuplicates(...args) {
    return new Set(args).size !== arguments.length
}

console.log(areThereDuplicates(1, 2, 3, 2))