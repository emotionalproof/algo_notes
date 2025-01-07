// function solution(num) {
//   //Javascript function

//   let x = 0
//   let sum = 0
//   let a
//   let b

//   let d = ''; //variable declaration

//   let digits = num.toString().split('');

//   let Individual = digits.map(Number);

//   console.log({Individual});

//   for (let i = 0; i < Individual.length; i++) {
//     //For loop

//     x = x + Individual[i];
//   }

//   let y = x * 2;

//   for (let i = 0; i < Individual.length; i++) {
//     sum = sum + Individual[i];

//     d = '' + d + Individual[i];

//     if (sum == y) break;

//     if (i == Individual.length - 1) {
//       i = -1;

//       continue;
//     }
//   }

//   return d
// }

// let number = 10

// console.log(solution(number))

// function maxValue(a,n)
// {
//     let first = new Map();
//         let last = new Map();
//         for (let i = 0; i < n; i++) {
//             first.set(a[i], 0);
//             last.set(a[i], 0);
//         }
   
//         let pr = new Array(n);
//         pr[0] = a[0];
//         first[a[0]] = 0;
//         last[a[0]] = 0;
//         for (let i = 1; i < n; i++) {
   
//             // Build prefix sum array
//             pr[i] = pr[i - 1] + a[i];
   
//             // If the value hasn't been encountered before,
//             // It is the first occurrence
//             if (parseInt((first.get(a[i]))) == 0)
//                 first.set(a[i], i+1);
   
//             // Keep updating the last occurrence
//             last.set(a[i], i+1);
//         }
   
//         let ans = 0;
   
//         // Find the maximum sum with same first and last value
//         for (let i = 0; i < n; i++) {
//             let start = parseInt(first.get(a[i]));
//             let end = parseInt(last.get(a[i]));
//             if (start != 1)
//                 ans = Math.max(ans, pr[end-1] - pr[start - 2]);
//         }
   
//         return ans;
// }
 
// // Driver Code
// let arr=[1, 3, 5, 2, 4, 18, 2, 3 ];
// let n = arr.length;
// document.write(maxValue(arr, n));   

// a = [1,3,6,1,6,6,9,9]

// const subArray 


const moveZeroes = (nums) => {
  let slowPointer = 0;
  let temp
  for (let i =0; i < nums.length; i++) {
    console.log("nums[i] === 0:  ",  nums[i] === 0)
    if (nums[i] !== 0) {
      temp = nums[i]
      nums[i] = nums[slowPointer]
      nums[slowPointer] = temp
      slowPointer++
    }
    console.log({i,  slowPointer, nums, temp} )
  }
  return nums 
}
let nums = [0,1,0,1,0,1,0,1]
console.log(moveZeroes(nums))