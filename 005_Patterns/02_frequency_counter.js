//Frequency counters
//this pattern uses object or sets to collect vlaues/frequenceis of values
//this can often avoid the need for nested loops of n^2 operatoins with rrays/strings


//write a function called 'same', which accepts two arrays
//the function should return true if every value in the array
//has it's corresponding value squared in the second array
//the frequency of values must be the same

//

// let obj1 = {"dog": 1, "cat": 2}
// let obj2 = {"dog": 1, "cat": 2}

// console.log(obj1 == obj2)

//hash map for both arrays
// iterate over the first array
//check to see if the value associated with a key
//is equal to the value associated with that number squared for the hash map of the other array

// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false
//     }
//     let obj1 = hashMap(arr1) //= {}
//     // for (let val of arr1) {
//         // obj1[val] = (obj1[val] || 0) + 1
//     // }
//     let obj2 = hashMap(arr2)
//     for (let i = 0; i < arr1.length; i++) {
//         let num = arr1[i]
//         let sqrd = Math.pow(num, 2)
//         if (obj1[num] !== obj2[sqrd]) {
//             return false
//         }
//     }
//     return true
// }  

// function hashMap(arr) {
//     let obj = {}
//     for (let i = 0; i < arr.length; i++) {
//         // obj[arr[i]] = ++obj[arr[i]] || 1
//         let val = arr[i]
//         obj[val] = (obj[val] || 0) + 1
//     }
//     return obj
// }

// let arr1 = [1,2, 1]
// let arr2 = [1, 4, 1]

// console.log(same(arr1, arr2))

//for of loop: strings and arrays. also , arguments and nodelists
//for in loop: objects

//O(n) time complexity

//Anagrams
//given two strings
//write a function to determine if the second string is an anagram of the first
//an anagram is a word, phrase, or name formed by rearranging the letters of another
//such as cinema, formed from iceman
//hashmap from each word to count char frequency
//loop over one word to check frequency in second

// function anagram(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false
//     } else if (str1 === str2) {
//         return true
//     }

//     let hashStr1 = {}
//     let hashStr2 = {}

//     for (const char of str1){
//         hashStr1[char] = (hashStr1[char] || 0 ) + 1
//     } 

//     for (const char of str2){
//         hashStr2[char] = (hashStr2[char] || 0 ) + 1
//     } 
    
//     for (const char of str1) {
//         if (hashStr1[char] !== hashStr2[char]) {
//             return false
//         }
//     }
//     return true
// }

// console.log(anagram("ant", "nat"))

function anagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    } else if (str1 === str2) {
        return true
    }

    let hashStr1 = {}
    let hashStr2 = {}

    for (const char of str1){
        hashStr1[char] = (hashStr1[char] || 0 ) + 1
    } 
    
    for (const char of str2) {
        if (!hashStr1[char]) {
            return false
        } else {
            hashStr1[char]--
        }
    }
    return true
}

//time O(n)


console.log(anagram("antt", "nat"))

// let alpha = "abcdefghijklmnopqrstuvwxyz-"

// let word = ' )}OJR 92ww. z )UPl 49e ]S  g. zrZEnQ  D. FoKp ]ow 1EceB 3oK }w ]CA? L 3LPbDN! trqJY 0sBmm. Nwn'
// let word = "dog."
// let word = "how many eggs are in a dozen 13"
// function countWord(word) {
//     let wordCount = 0
//     // if (isAlphaNumeric(word.slice(-1).toLowerCase())) {
//     //     wordCount = 0
//     // } else {
//     //     wordCount =0
//     // }

//     let tally = 0
//     for (let i = 0; i < word.length; i++) {
//         let current = word[i].toLowerCase()
//         if (isAlphaNumeric(current)) {
//             tally = 1
//         } else if (!isAlphaNumeric(current)) {
//             wordCount += tally
//             tally = 0
//         }
//     }
//     return wordCount
// }


// function isAlphaNumeric(char) {
//     // console.log("test")
//     var code = char.charCodeAt(0)
//     // console.log(code)
//     if (!(code > 96 && code < 123) && !(code > 44 && code < 46)) {
//             return false
//         }
//     return true
// }

// // function isAlphaNumeric(char) {
// //     // console.log("test")
// //     var code = char.charCodeAt(0)
// //     // console.log(code)
// //     if (!(code > 96 && code < 123) && !(code > 44 && code < 46)) {
// //             return false
// //         }
// //     return true
// // }

// console.log(countWord(word))

// function howMany(word) {
//     let wordsArray = []
//     let i = 0
//     let j = i
//     let onWord = false
//     while (j < word.length) {
//         let firstLetter = word[i]
//         let lastLetter = word[j]
//         let letters = []
//         if (lastLetter.charCodeAt(0) === 32 && !onWord){
//             j++
//         } else if (lastLetter.charCodeAt(0) !== 32 && !onWord) {
//             onWord = true
//             letters.push(word.charAt(lastLetter))
//             j++
//         } else if (lastLetter.charCodeAt(0) !== 32 && onWord) {
//             letters.push(word.charAt(lastLetter))
//             j++
//         } else if (lastLetter.charCodeAt(0) === 32 && onWord) {

//         }
//     }
// }