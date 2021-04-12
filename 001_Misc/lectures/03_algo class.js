// const isAnagram = (str1, str2) => {
//     if (str1.length !== str2.length) return false

//     let str1Arr = str1.split('').sort().join("")
//     let str2Arr = str2.split('').sort().join("")

//     console.log(str1Arr === str2Arr)
// }


const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false

    let charCount1 = counts(str1)
    // let charCount2 = counts(str2)
    
    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i]
        if (!charCount1[letter]) {
            return false
        } else {
            charCount1[letter] -= 1
        }
    }

    return true
}

const counts = (str) => {
    let count = {}

    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (count[char]) {
            count[char] += 1
        } else {
            count[char] = 1
        }
    }
    
    return count
}

// console.log(counts("dogggggg"))

//Repeat
//examples
//Approach
//Code
//Test
//Optimize



let str1 = "dog"

d: 0
o: 0
g: 0

let str2 = 'dog'


console.log(isAnagram(str1, str2))


const insertionSort = arr => {

}


