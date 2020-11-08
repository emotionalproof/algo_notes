//averagePair
//given a SORTED  ARRAY of INTEGERS
//and a target average
//determine if there is a pair of values in the array
//where the average of the pair equals the target average
//there may be more than one pair that matches the average target

function averagePair(array, target) {
    if (array.length < 2) return false
    let left = 0
    let right = array.length - 1
    while (left < right) {
        let leftElement = array[left]
        let rightElement = array[right]
        let pairAverage = (leftElement + rightElement) / 2
        if (pairAverage === target) {
            return true
        } else if (pairAverage > target) {
            right--
        } else if (pairAverage < target) {
            left++
        }
    }
    return false
}

console.log(averagePair([-1, 0, 3, 4, 5, 6], 3.5))