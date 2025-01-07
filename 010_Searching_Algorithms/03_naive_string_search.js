//naive string algorithm
//searching for substrings in a larger string

// naive string search is most basic form
// you want to count the number of times a smaller string appears in a largers string
//a simple approach would be to compare pairs of characters individually

//wowomgzomg
//omg 

//compare first character
//if match, move on to second character and third
//if it reaches the last character, add one to count


// const naiveStringSearch = (str, pattern) => {
//     let count = 0
//     let i = 0
//     while (i < str.length) {
//         let subcount = 0
//         for(let j = 0; j < pattern.length; j++) {
//             console.log(str[i], pattern[j], subcount)
//             if (str[i] === pattern[j]) {
//                 subcount++
//                 i++
//             } else {
//                 break
//             }
//         }
//         if (subcount === pattern.length) {
//             count++
//         }
//         i++
//     }
//     return count
// }


// const naiveStringSearch = (str, pattern) => {
//     let count = 0
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < pattern.length; j++) {
//             if (pattern[j] !== str[i + j]) break
//             if (j === pattern.length - 1) count++
//         }
//     }
//     return count
// }










const naiveStringSearch = (str, pattern) => {
    let count = 0
    let length = 0
    let l = 0
    for (let j = 0; j < str.length; j++) {
        // console.log({count, length, l, j})
        if (str[j] === pattern[l]) {
            length++
            l++
        } 
        if (length === pattern.length) {
            count++
            length = 0
            l = 0
        }
    }
    return count
}

// const naiveStringSearch = (str, pattern) => {
//     let strObj = {}
//     for (let i = 0; i < str.length)
// }


// console.log(naiveStringSearch('sloslslosl', 'slosl'))


//nested loop
//outer loop is starting point to check for pattern
//inner loop is used to check subsequent characters
//if char matches first char in pattern then increment to next char in pattern and in string
//need variable to track pattern index
//if pattern length is greater than string, return 0
//variable to hold match count
//return at the end


// 'doggoddog'
// 'dog


// const anotherNaiveSearch = (string, pattern) => {
//     if (pattern.length > string.length) return 0
//     let matches = 0;


//     for (let i =0; i <= string.length - pattern.length; i++ ) {
//       let pIndex = 0;
//       for (let j = i; (j - i + 1) <= pattern.length; j++) {
//         let currS = string[j];
//         let currP = pattern[pIndex];
//         if (currS === currP) {
//           pIndex++
//         } else {
//           break
//         }
//       }
//       if (pIndex === pattern.length) matches++;
//       pIndex = 0;
//     }
//   return matches;
// }


const anotherNaiveSearch = (string, pattern) => {
  if (pattern.length > string.length || pattern.length === 0) return 0
  let matches = 0;
  let pIndex = 0;

  for (let i = 0; i <= string.length; i++ ) {
    
    if (pIndex === pattern.length) {
      matches++;
      i = i - pIndex + 1
      pIndex = 0;
    } 
    
    if (string[i] === pattern[pIndex]) {
      pIndex++
    } 
 
  }
return matches;
}

let str = 'dokwdokwdolakjsdfdokwdo';
let pattern = 'dokwdo'
console.log(anotherNaiveSearch(str, pattern))