// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let map = {};
  for (let char of str) {
    if (!map[char]) map[char] = 1;
    else map[char]++;
  }

  //   var most;
  //   str = str.split("");
  //   var count = 0;
  //   for (var i = 0; i < str.length; i++) {
  //     var temp = 0;
  //     for (var j = i + 1; j < str.length; j++) {
  //       if (str[i] === str[j]) {
  //         temp++;
  //       }
  //     }
  //     if (temp >= count) {
  //       count = temp;
  //       most = str[i];
  //     }
  //   }
  //   return most;
}

module.exports = maxChar;
