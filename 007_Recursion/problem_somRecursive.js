//someRecursive
//recursive function which accepts an array and a callback
//returns true if a single value in the array returns true
//when passed to the callback
//otherwise it returns false

const isOdd = val => val % 2 !== 0;

function someRecursive(arr, cb) {
    if (arr.length < 1) return false
    if (cb(arr[0]) === true) return true
    
    return someRecursive(arr.slice(1), cb)
}

let arr = [4,6,8,9]

console.log(someRecursive(arr, isOdd))


// someRecursive()