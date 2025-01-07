//reverse
//accepts a string and returns a new string in reverse


function reverse(str) {
    console.log({ str });
    console.log(str.slice(1));
    console.log(str[0]);
    if (str.length === 0) return ""
    
    return reverse(str.slice(1)).concat(str[0])
}
// aco.concat(t)
// co.concat(a.concat(t))
// o.concat(c.concat(a.concat(t)))

// console.log(reverse("taco"))

const reverse2 = (str) => {
  if (str.length === 1) return str;
  console.log({str})

  return str[str.length - 1].concat(reverse(str.slice(0, str.length - 1)));
};

console.log(reverse("taco"));

// dog
// reverse('og').concat('d') // 'god'
// reverse('g').concat('o') //'go'
// reverse('').concat('g') // 'g'

