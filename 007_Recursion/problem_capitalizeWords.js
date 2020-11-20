//capitalizeWords
//given an array of words
//return a new array containing each word capitalized

// const capitalizeWords = array => {
//     if (array.length === 0) return []
//     const element = array[0]
//     array[0] = element.toUpperCase()
//     return [array[0]].concat(capitalizeWords(array.slice(1)))
// }

// const capitalizeWords = array => {
//     if (array.length === 0) return []
//     const element = array[0]
//     array[0] = element.toUpperCase()
//     return [array[0]].concat(capitalizeWords(array.slice(1)))
// }

function capitalizeWords (array) {
    if (array.length === 1) {
        return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    console.log({array, res})
    res.push(array.slice(array.length-1)[0].toUpperCase());
    console.log({array, res})
    return res;
    
}

let arr = ['i', 'am', 'learning', 'recursion']

console.log(capitalizeWords(arr))