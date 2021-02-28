function test() {
    let counter = 0

    return function incCount() {
        counter++
        console.log("counter =", counter)
    }
}