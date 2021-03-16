const str1 = `Nihao, wo shi SilvenLEAF.`
const str2 = `Wo shi yi ge quan zhan gongchengshi.`
const str3 = `Wo feichang xihuan ma daima.`



// 1. charAt(index) --returns the character of the given index
console.log(
  str1.charAt(str1.length - 3) //the last character of a string is [str.length - 1] (because it's ZERO based)
)

// 2. charCodeAt(index) --returns the Unicode of the character of the given index
console.log(
  str1.charCodeAt(str1.length - 3) //the last character of a string is [str.length - 1] (because it's ZERO based)
)

// 3. concat(arr2, arr3, ...) --returns a new string by concatenating others
console.log(
  str1.concat(str2, str3) //it concatenates in the order of the given strings
)