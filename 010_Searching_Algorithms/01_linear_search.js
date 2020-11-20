//describe what a searching algorithm is
//linear search on arrays
//binary search on sorted arrays
//naive string searching algorithm
//kmp string searching algorithm


//linear search
//indexOf
//includes
//find
//findIndex
// let arr = [1,2,3]

// console.log(arr.indexOf(9))

//visit one item at a time until you find the target


//linear search pseudocode
//this function accepts an array and a value
//loop through the array and check if the currrent array element is equal to the value
//if it is, return the index at which the element is found
//if the value is never found, return -1

const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) if (arr[i] === target) return i
    return -1
}

console.log(linearSearch([1,2,3,4,5], 10))

//big O of Linear Search
//Time
//Best Case: first element is target 
    // O(1)
//Worst Case: Element is not there or is last element
    //O(n)
//Average is O(n)
    //probably O(1/2n) but we get rid of constants in Big O
    //so just O(n)

    

