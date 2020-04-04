// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // const arr = str.split("");
  // arr.reverse();
  // return arr.join("");
  var arr = [];
  let i = 0;
  for (let index = str.length - 1; index >= 0; index--) {
    arr[i] = str[index];
    i++;
  }
  str = arr;
  return str.join("");
}

module.exports = reverse;
