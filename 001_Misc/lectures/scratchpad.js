let moment = require('moment')


function test() {
    let counter = 0

    return function incCount() {
        counter++
        console.log("counter =", counter)
    }
}



function palimatch(array) {
    let pairs = []
    let found = false
    for (let i = 0; i < array.length; i++) {
        let firstWord = array[i]
        for (let j = i + 1; j < array.length; j++) {
            let secondWord = array[j]
            let pair = firstWord + secondWord
            pairs.push(pair)
        }
    }

    for (let h = 0; h < pairs.length; h++) {
        if (isPalindrome(pairs[h]) === true) found = true
    }
    
    return found
}


function isPalindrome(word) {
    let left = 0
    let right = word.length - 1
    let result = true
    console.log(word)

    while (left < right) {
        if (word[left] !== word[right]) result = false
        left++
        right--
    }

    return result
}

// let array = ["geekf", "geeks", "or", "keeg", "abc", "bc"]
// console.log(palimatch(array))



let array = ['similar', 'liar', 'ground', 'heaven', 'hell', 'earth', 'shelf']

function stringPair(array) {
    let wordSets = []

    for (let l = 0; l < array.length; l++) {
        let chars = charSet(array[l])
        wordSets.push(chars)
    }

    let pairs = []
    let result = false

    for (let i = 0; i < wordSets.length; i++) {
        for (let j = i + 1; j < wordSets.length; j++) {
            let pair = [wordSets[i], wordSets[j]]
            pairs.push(pair)
        }
    }

    for (let h = 0; h < pairs.length; h++) {
        let current = pairs[h]
        if (compareSets(current[0], current[1]) === true) result = true
    }

    return result
}

function charSet(word) {
    let chars = new Set()
    for (let i = 0; i < word.length; i++) {
        chars.add(word[i])
    }

    return chars
}


function compareSets(set1, set2) {
    let result = true
    let big = set2
    let small = set1

    if (set1.size >= set2.size) {
        big = set1
        small = set2
    }

    let smallValues = small.values()
   
    for (let item of smallValues) {
        if (!big.has(item)) result = false 
    }

    return result
}

// console.log(stringPair(array))

console.log(moment().isoWeekday(7) )
