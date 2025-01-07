const collectOddValues = arr => {
    let newArr = []
    console.log('inside collectOddValues call', {arr, newArr})
    if (arr.length === 0) {
        console.log("array is empty")
        return newArr
    }

    if (arr[0] % 2 !== 0) {
        console.log('element is odd')
        newArr.push(arr[0])
    }
    console.log('before recursive call')
    newArr = newArr.concat(collectOddValues(arr.slice(1)))
    console.log('after recursive call')
    return newArr
}

// const arr = [1, 2, 3, 4, 5, 6];
// // console.log(collectOddValues(arr));

// let test = [1].concat([].concat([3].concat([].concat([5].concat([])))))
// console.log(test)