//reverse
//accepts a string and returns a new string in reverse


function reverse(str) {
    if (str.length === 0) return ""
    return reverse(str.slice(1)).concat(str[0])
}


console.log(reverse(''))


// dog
// revserve('og').concat('d') // 'god'
// reverse('g').concat('o') //'go'
// reverse('').concat('g') // 'g'

