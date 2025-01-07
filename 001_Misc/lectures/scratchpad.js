//an array of positive integers
//a POSITIVE integer, >0
//minimal length of a contiguous subwarray
// is greater than or equal to the integer >=
//if it doesn't exist, return 0
//iterate starting at zero
//if that number is >= int then we can return 1
//otherwise, we should subtract the value at that index from the remaining,
//if remaining is greater than zero, and

// start with two variables

function minSubArrayLen(nums, sum) {
  let start = 0;
  let end = 0;
  let minLen = Infinity;
  let total = 0;

  while (start < nums.length) {
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    } else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      console.log(minLen);
      total -= nums[start];
      start++;
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
  // while (start < nums.length) {
  //  // if current window doesn't add up to the given sum then
  //  // move the window to right
  // // 	console.log(start, end, total, minLen)
  //  if(total < sum && end < nums.length){
  //    total += nums[end];
  //    end++;
  //  }
  //  // if current window adds up to at least the sum given then
  //  // we can shrink the window
  //  else if(total >= sum){
  //    minLen = Math.min(minLen, end-start);
  //    total -= nums[start];
  //    start++;
  //  }
  //  // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
  //  else {
  //    break;
  //  }
  // }

  return minLen === Infinity ? 0 : minLen;
  // let shortest = Infinity;
  // let i = 0;
  // let j = 1;

  // let remaining = int - array[i]

  // while (i < array.length - 1) {
  //     // console.log('before:   ', "i: ", i, "   array[i]: ", array[i],"j: ", j, "   array[j]: ", array[j], "   remaining: ", remaining)
  //     if (array[i] >= int || array[j] >= int) return 1

  //     remaining -= array[j]
  //     if (remaining <= 0) {
  //         shortest = Math.min(shortest, j - i + 1)

  //     }

  //     if (remaining > 0 && j < array.length - 1) {
  //         j++
  //     } else {
  //         i++
  //         j = i + 1
  //         remaining = int - array[i]
  //     }
  // }

  // return shortest === Infinity? 0 : shortest;
}

let sum = 7;
let nums = [2, 3, 1, 1, 1, 1, 1, 1, 1, 4, 3, 1, 2];

console.log(minSubArrayLen(nums, sum));
