// const hash = (key, arrayLen) => {
//   let total = 0;
//   for (let char of key) {
//     // map 'a' to 1, 'b' to 2, etc.
//     let value = char.charCodeAt(0) - 96;
//     total = (total + value) % arrayLen;
//   }
//   return total;
// }

// console.log(hash("purple", 10));

// const betterHash = (key, arrayLen) => {
//   let total = 0;
//   // A small prime numer that helps spread the keys
//   const PRIME = 31;
//   // Limit the number of characters we process for performance ()
//   for (let i = 0; i < Math.min(key.length, 100); i++) {
//     let char = key[i];
//     // Map "a" tp 1, "b" tp 2, etc.
//     let value = char.charCodeAt(0) - 96;
//     total = (total * PRIME + value) & arrayLen;
//   }
//   return total;
// }

// const hash = (key, arrayLen) => {
//   let total = 0;
//   for (let i = 0; i < key.length; i++) {
//     let char = key[i];
//     let value = char.charCodeAt(0) - 96;
//     total = (total + value) % arrayLen;
//   }
//   return total;
// }

// const hash = (key, arrayLen) => {
//   let total = 0;
//   let WEIRD_PRIME = 31;
//   for (let i = 0; i < Math.min(key.length, 100); i++) {
//     let char = key[i];
//     let value = char.charCodeAt(0) - 96;
//     total = (total * WEIRD_PRIME + value) % arrayLen;
//   }
//   return total
// }

// const hash = (key, arrayLen) => {
//   let total = 0;
//   let PRIME = 31;
//   for (let i = 0; i < Math.min(key.length, 100); i++) {
//     let char = key[i];
//     let value = char.charCodeAt(0) - 96;
//     total = (total * PRIME + value) % arrayLen;
//   }
//   return total;
// }

// const hash = (key, arrayLen) => {
//   let total = 0;
//   let PRIME = 31;
//   for (let i = 0; i < Math.min(key.length, 100); i++) {
//     let char = key[i];
//     let value = char.charCodeAt(0) - 96;
//     total = (total * PRIME + value) % arrayLen;
//   }
//   return total
// }

// Fast
// Doesn't cluster outputs at specific indices, but distribues uniformaly
//deterministic (yields same output)

//not fast
// this is slow
// const slowHash = (key) => {
//   for (let i = 0; i < 1000; i++) {
//     console.log("everyday i'm hashing");
//   }
//   return key[0].charCodeAt(0);
// };

// does not uniformly distribute values
// always returns zero
const sameHashedValue = (key) => {
  return 0;
};

// not deterministic
// different output for same input
const randomHash = (key) => {
  return Math.floor(Math.random() * 1000);
};

// lets say we want to hash "pink" like hash("pink")
// we need to convert it to a number
// could do the length but then there would be heavy clusters
// could use underlying UTF 16 character code
// "a".charCodeAt(0), return 97
// "hi".charCodeAt(0), return 104
// "hi".charCodeAt(1), returns 105
// can subtract 96 to get the position of that letter in the alphabet

// let total = 0;
// total += "hello".charCodeAt(0) - 96
// do this for each index and you end up with 52
// but we need to make hash functions for a particular length of hash table like hash("hello", 11) so 52 doesn't work
// we can use 52 % 11 = 8; so we can store our at that number in our hash table

function hash1(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

function hash2(key, arrayLen) {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

const hash3 = (key, arrayLen) => {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total += (total + value) % arrayLen;
  }
  return total;
};

const hash4 = (key, arrayLen) => {
  let total = 0;
  let PRIME = 31;
  // only hash and loop over first 100 characters
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * PRIME + value) % arrayLen;
  }
  return total;
};

const hash = (key, arrayLen) => {
  let total = 0;
  let PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * PRIME + value) % arrayLen;
  }
  return total;
};

// Prime number in the hash is helpful in spreading out the keys more uniformly
// it's also helpful if the array that you're putting values inot has a prime length;

// console.log(hash("pink", 13));

// there are always collisions, unavoidable
// two strategies for handing:
// Separate Chaining
// Linear Probing

// Separate chaining
// at each index in our array we store values using a more sophisticated data structure (e.g. an array or linked list)

// when you hit a collision

// Linear Probing
// we only want one item at each location.
// when we hit a colission we search through the array to find the next empty slot
// darkblue we get 4
// salmon we get 4
// so we put salmon in the next empty slot

// class HashTable {
//   constructor(size = 53) {
//     this.keyMap = new Array(size);
//   }

//   _hash(key) {
//     let total = 0;
//     const PRIME = 31;
//     if (typeof key !== "string") key = String(key);
//     for (let i = 0; i < Math.min(key.length, 100); i++) {
//       let char = key[i];
//       let value = char.charCodeAt(0) - 96;
//       total = (total * PRIME + value) % this.keyMap.length;
//     }
//     return total;
//   }

//   // SET
//   // accepts a key and avlue
//   // hashes the key
//   // sotres the k/v pair in the hash table array via separate chaining
//   set(key, value) {
//     let index = this._hash(key);
//     let bucket = this.keyMap[keyHash];
//     if (!bucket) {
//       this.keyMap[keyHash] = [];
//     }
//     for (let i = 0; i < bucket.length; i++) {
//       if (bucket[i][0] === key) {
//         this.keyMap[keyHash][i][1] = value;
//         return;
//       }
//     }
//     this.keyMap[keyHash].push([key, value]);
//   }

//   // accepts a key
//   // determines the keyHash for that key
//   // checks if the bucket exists and if not return undefined
//   // iterate over bucket
//   // if the 0 index of a kv pair equals the provided key
//     // return index 1 which is the value
//   // return undefined outside the loops
//     // so if the key was not found we return undefined
//   get(key) {
//     let keyHash = this._hash(key);
//     let bucket = this.keyMap[keyHash];
//     if (!bucket) return undefined;
//     for (let i = 0; i < bucket.length; i++) {
//       let pair = bucket[i];
//       if (key === pair[0]) return pair[1];
//     }
//     return undefined;
//   }
// }

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const PRIME = 31;
    if (typeof key !== "string") key = String(key);
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        this.keyMap[index][i][1] = value;
        return;
      }
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    let bucket = this.keyMap[index];
    if (!bucket) return undefined;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) return bucket[i][1];
    }
    return undefined;
  }

  keys() {
    let allKeys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let pair of this.keyMap[i]) {
          allKeys.push(pair[0]);
        }
      }
    }
    return allKeys;
  }

  values() {
    let allValues = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let pair of this.keyMap[i]) {
          if (!allValues.includes(pair[1])) allValues.push(pair[1]);
        }
      }
    }
    return allValues;
  }
}

let hashTable = new HashTable();
hashTable.set("darkblue", "#0008b");
hashTable.set("darkblue", "#0008b");
hashTable.set("red", "#FF0000");
hashTable.set("green", "#00FF00");
hashTable.set("blue", "#0000FF");
hashTable.set("yellow", "#FFFF00");
hashTable.set("orange", "#FFA500");
hashTable.set("purple", "#800080");
hashTable.set("pink", "#FFC0CB");
hashTable.set("brown", "#A52A2A");
hashTable.set("black", "#000000");
hashTable.set("white", "#FFFFFF");
hashTable.set("gray", "#808080");
hashTable.set("cyan", "#00FFFF");
hashTable.set("magenta", "#FF00FF");
hashTable.set("lime", "#00FF00");
hashTable.set("maroon", "#800000");
hashTable.set("navy", "#000080");
hashTable.set("olive", "#808000");
hashTable.set("teal", "#008080");
hashTable.set("aqua", "#00FFFF");
hashTable.set("silver", "#C0C0C0");
hashTable.set("gold", "#FFD700");
hashTable.set("beige", "#F5F5DC");
hashTable.set("coral", "#FF7F50");
hashTable.set("crimson", "#DC143C");
hashTable.set("indigo", "#4B0082");
hashTable.set("ivory", "#FFFFF0");
hashTable.set("khaki", "#F0E68C");
hashTable.set("lavender", "#E6E6FA");
hashTable.set("mint", "#98FF98");
hashTable.set("orchid", "#DA70D6");
hashTable.set("plum", "#DDA0DD");
hashTable.set("salmon", "#FA8072");
hashTable.set("tan", "#D2B48C");
hashTable.set("violet", "#EE82EE");
hashTable.set("azure", "#F0FFFF");
hashTable.set("chocolate", "#D2691E");
hashTable.set("copper", "#B87333");
hashTable.set("eggplant", "#614051");
hashTable.set("emerald", "#50C878");
hashTable.set("jade", "#00A86B");
hashTable.set("lemon", "#FFF700");
hashTable.set("mustard", "#FFDB58");
hashTable.set("peach", "#FFE5B4");
hashTable.set("rose", "#FF007F");
hashTable.set("ruby", "#E0115F");
hashTable.set("sapphire", "#0F52BA");
hashTable.set("scarlet", "#FF2400");
hashTable.set("turquoise", "#40E0D0");
hashTable.set("amber", "#FFBF00");
hashTable.set("apricot", "#FBCEB1");
hashTable.set("charcoal", "#36454F");
hashTable.set("denim", "#1560BD");
hashTable.set("fuchsia", "#FF00FF");
hashTable.set("honey", "#FFC30B");
hashTable.set("jade", "#00A86B");
hashTable.set("mauve", "#E0B0FF");
hashTable.set("ochre", "#CC7722");
hashTable.set("pearl", "#EAE0C8");
hashTable.set("raspberry", "#E30B5D");
hashTable.set("sand", "#C2B280");
hashTable.set("sepia", "#704214");
hashTable.set("slate", "#708090");
hashTable.set("smoke", "#738276");
hashTable.set("snow", "#FFFAFA");
hashTable.set("steel", "#4682B4");
hashTable.set("sunflower", "#FFDA03");
hashTable.set("tangerine", "#F28500");
hashTable.set("topaz", "#FFC87C");
hashTable.set("wheat", "#F5DEB3");
hashTable.set("wheat", "dog");
console.log(hashTable.get("wheat"));
console.log(hashTable.values());
