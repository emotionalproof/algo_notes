

const debuggingDemo = arr => {
    let oddCount = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddCount++
            arr[i] -= oddCount
        } else {
            arr[i] += oddCount
        }
    }
    return arr
}

let arr = [1,2,3,4,5,6,7,8,9,10]

console.log(debuggingDemo(arr))