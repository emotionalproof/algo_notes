const collectOddValues = arr => {
    let result = []
    console.log({result})
    const helper = helperInput => {
        console.log({helperInput, result})
        if (helperInput.length === 0) {
            return
        }

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }
        console.log('before helper called inside of helper')
        helper(helperInput.slice(1))
        console.log("after helper called inside of helper");
    }
    console.log('before helper is called', {arr})
    helper(arr)
    console.log("after helper returns")
    return result
}

const arr = [1,2,3,4,5,6]
console.log(collectOddValues(arr))