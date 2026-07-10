const stringifyNumbers = (obj) => {
  if (Object.keys(obj).length === 0) return
  let newObj = Object.assign({}, obj)
  for (const key in newObj) {
    if (typeof newObj[key] === "object" && !Array.isArray(newObj[key])) {
      newObj[key] = stringifyNumbers(newObj[key])
    } else if (typeof newObj[key] === "number") {
      newObj[key] = newObj[key].toString()
    } 
  }
  return newObj
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};
console.log(stringifyNumbers(obj))