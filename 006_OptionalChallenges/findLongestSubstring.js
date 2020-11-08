//write a function 
//accepts a string and returns the length of the longest substring with all distinct characters

// function findLongestSubstring(string) {
//     if (string.length === 0) return 0
//     let longestCount = 0
//     let charCount = {}
//     let left = 0
//     for (let right = 0; right < string.length; right++) {
//         let char = string[right]
//         console.log({char, longestCount, charCount, left, right})
//         if (!!charCount[char]) {
//             console.log("repeat")
//             longestCount = Math.max(longestCount, right - left)
//             left = charCount[char] + 1
//             charCount[char] = right
//         } else {
//             console.log("new")
//             charCount[char] = right
//         }
//     }
//     return longestCount
// }



function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1;
    }
    return longest;
}

let string = "thecatinthehat"
console.log(findLongestSubstring(string))