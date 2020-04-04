// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let mapA = {};
  let mapB = {};
  stringA.replace(/\s{2,}/g, " ");
  stringB.replace(/\s{2,}/g, " ");
  for (let char of stringA.toLowerCase()) {
    if (!mapA[char]) mapA[char] = 1;
    else mapA[char]++;
  }
  for (let char of stringB.toLowerCase()) {
    if (!mapB[char]) mapB[char] = 1;
    else mapB[char]++;
  }
  for (let char in mapA) {
    if (mapA[char] != mapB[char]) return false;
  }
  return true;
}

module.exports = anagrams;
