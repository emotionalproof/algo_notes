//capitalizeFirst
//recursive function
//given an array of strings
//capitalize the first letter of each string in the array 


// function capitalizeFirst(arr) {
//     if (arr.length === 0) return arr
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i][0].toUpperCase().concat(arr[i].slice(1))
//     }
//     return arr
// }

// function capitalizeFirst(array) {
//     console.log({array})
//     let res
//     console.log({res})
//     if (array.length === 1) {
//         return [array[0][0].toUpperCase() + array[0].substr(1)];
//     }
    
//     res = capitalizeFirst(array.slice(0, -1));
//     console.log({res})
//     console.log({array})
//     const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
//     console.log({string})
//     res.push(string);
//     return res;
// }



// function capitalizeFirst(arr) {
//   if (arr.length === 0) return [];
//   let strArr = arr[0].split("");
//   console.log(strArr)
//   strArr[0] = strArr[0].toUpperCase();
//   let newArr = strArr.join("");
//   return [newArr].concat(capitalizeFirst(arr.slice(1)));
// }


function capitalizeFirst(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  console.log({res})
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].substr(1);
  console.log({string})
  res.push(string);
  console.log({res})
  return res;
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']



