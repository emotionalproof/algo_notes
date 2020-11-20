//nestedEvenSum
//return the sum of all even numbers in an object which 
//may contain nested objects

// function nestedEvenSum(obj) {
//     if (obj.length === 0) return 0
//     let sum = 0

//         const keys = Object.keys(obj)
//         for (let i = 0; i < keys.length; i++) {
//             let key = keys[i]
//             console.log({sum, obj, keys, key}, obj[key])
//             if (Number.isInteger(obj[key]) && obj[key] % 2 === 0) {
//                 console.log('number')
//                 sum += obj[key]
//             } else if (!Number.isInteger(obj[key])) {
//                 console.log('object')
//                 sum = sum + nestedEvenSum(obj[key])
//             }
//         }
//     return sum
// }

// function nestedEvenSum(obj) {
//     let sum = 0
//     for (const key in obj) {
//         if (typeof obj[key] === 'object') {
//             sum += nestedEvenSum(obj[key])
//         } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
//             sum += obj[key]
//         }
//     }
//     return sum 
// }

const nestedEvenSum = (obj, sum=0) => {
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            sum += nestedEvenSum(obj[key])
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
            sum += obj[key]
        }
    }
    return sum
}




let obj1 = {rat: {mice: 2}, dog: 2}
//keys = [dog, rat, cat]
var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };



console.log(nestedEvenSum(obj2))