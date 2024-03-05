/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const cleanString = (str) => str.toLowerCase().replace(/[^a-z]/g, "");
  str=cleanString(str);
  let it = 0,
    it1 = str.length - 1;
  while (it <= it1) {
    if (str[it] == str[it1]) {
      it++;
      it1--;
    } else {
      return false;
    }
  }
  return true;
}
// console.log(isPalindrome("Nan."));

module.exports = isPalindrome;
