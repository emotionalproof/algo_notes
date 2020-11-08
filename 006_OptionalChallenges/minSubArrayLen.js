//minSubArrayLen
//accepts TWO PARAMETERS
//an ARRAY of POSITIVE INTEGERS
//and a POSITIVE INTEGER
//should return the minimal length of a contiguous subarray
//of which the sum is greater than or equal to the integer passed to the function
//if there isn't one, return 0 instead

let arr = [3,1,7,11,2,9,8,21,62, 33,19]
let n = 52

function minSubArrayLen(arr, n) {
    let currentSum = 0
    let minLength = Infinity
    let left = 0;
    let right = 0
  

    while (left < arr.length) {
        console.log({currentSum, minLength, left, right})
        if (currentSum >= n) {
            console.log(">=")
            minLength = Math.min(right - left, minLength)
            
            currentSum -= arr[left]
            left++
            
        } else if (currentSum < n && right < arr.length) {
            console.log("<")
            currentSum += arr[right]
            right++
        } else {
            console.log("break")
            break
        }
    }
    return minLength
}


// function minSubArrayLen(nums, sum) {
//     let total = 0
//     let start = 0
//     let end = 0
//     let minLen = Infinity

//     while (start < nums.length) {
//         if (total < sum && end < nums.length) {
//             total += nums[end]
//             end++
//         } else if (total >= sum) {
//             minLen = Math.min(minLen, end - start)
//             total -= nums[start]
//             start++
//         }
//         else {
//             break
//         }
//     }
//     return minLen === Infinity ? 0 : minLen
// }


// function minSubArrayLen(nums, sum) {
//     let start = 0
//     let end = 0
//     let total = 0
//     let minLength = Infinity

//     while (start < nums.length) {
//         if (total < sum && end < nums.length) {
//             total += nums[end]
//             end++
//         } else if (total >= sum) {
//             minLength = Math.min(minLength, end - start)
//             total -= nums[start]
//             start++
//         } else {
//             break
//         }
//     }
//     return minLength === Infinity ? 0 : minLength
// }

// let arr = [2,3,1,2,4,3]
// let n = 7

// let arr = [2,1,6,5,4]
// let n = 9

let arr = [3,1,7,11,2,9,8,21,62, 33,19]
let n = 52

// let arr = [1,4,16,22,5,7,8,9,10]
// let n = 39

// let arr = [1,4,16,22,5,7,8,9,10]
// let n = 55

// let arr = [4,3,3,8,1,2,3]
// let n = 11

// let arr = [1,4,16,22,5,7,8,9,10]
// let n = 95
console.log(minSubArrayLen(arr,n))







