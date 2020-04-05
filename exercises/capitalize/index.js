// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  var arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || (i > 0 && arr[i - 1] === " ")) {
      arr[i] = arr[i].toUpperCase();
    }
  }
  return arr.join("");
}

module.exports = capitalize;
