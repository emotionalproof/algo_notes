//recursive function
//returns true if the string passed
//is a palindrome
//reads the same forward and backward

function isPalindrome(str) {
    let reverse = function reverse(str) {
        if (str.length === 0) return ""
        return reverse(str.slice(1)).concat(str[0])
    }
    console.log({str, reverse})
    return str === reverse(str) 
}

// function isPalindrome(str) {
//     let reverse = function reverse(str) {
//         if (str.length === 0) return ""
//         return reverse(str.slice(1)).concat(str[0])
//     }
//     console.log({str, reverse})
//     return str === reverse(str) 
// }


console.log(isPalindrome('amanaplanacanalpanamas'))