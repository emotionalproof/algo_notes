//sliding window
//maxSubarraySum

//given an ARRAY of INTEGERS and a NUMBER
//write a function called maxSubarraySum
//which finds the maximum sum of a subarray 
//with the length of the number passed to the function 

function maxSubarraySum(arr, n) {
    if (n > arr.length) return null
    let total = -Infinity
    let temp = 0

    for (let i = 0; i < n; i++) {
        temp += arr[i]
    }

    for (let j = 0; j <= arr.length - n; j++) {
        total = Math.max(total, temp)
        temp = temp + arr[j + n] - arr[j]
    }
    return total
}

let array = [2,3]
let num = 3

console.log(maxSubarraySum(array, num))


// function maxSubarraySum(arr, num) {
//     if (arr.length < num) return null

//     let total = 0
//     for (let i = 0; i < num; i++) {
//         total += arr[i]
//     }
//     let currentTotal = total
//     for (let i = num; i < arr.length; i++) {
//         currentTotal += arr[i] - arr[i - num]
//         total = Math.max(total, currentTotal)
//     }
    
//     return total
// }