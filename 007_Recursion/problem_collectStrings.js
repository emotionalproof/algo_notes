const collectStrings = (obj) => {
  let stringsArr = []
  for (const key in obj) {
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      stringsArr = stringsArr.concat(collectStrings(obj[key]))
    } else if (typeof obj[key] === "string") {
      stringsArr.push(obj[key])
    }
  }
  return stringsArr
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj))