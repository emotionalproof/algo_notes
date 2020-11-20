//recursive function
//returns true if the string passed
//is a palindrome
//reads the same forward and backward

// function isPalindrome(str) {
//     let reverse = function reverse(str) {
//         if (str.length === 0) return ""
//         return reverse(str.slice(1)).concat(str[0])
//     }
//     console.log({str, reverse})
//     return str === reverse(str) 
// }

function isPalindrome(str) {
    if (str.length === 1) return true
    if (str.length === 2) return str[0] === str[1]
    if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
    return false
}


console.log(isPalindrome('amanaplanacanalpanama'))