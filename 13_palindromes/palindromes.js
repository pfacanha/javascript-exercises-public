const palindromes = function (word) {
  // racecar
  let wordOne = "";
  let wordTwo = "";
  for (let i = 0; i < word.length; ++i) {
    if (isValid(word[i])) {
      wordOne += word[i];
    }
  }
  for (let i = word.length - 1; i >= 0; --i) {
    if (isValid(word[i])) {
      wordTwo += word[i];
    }
  }

  return wordOne.toLowerCase() === wordTwo.toLowerCase();
};
function isValid(char) {
  return /[a-zA-Z0-9]/.test(char);
}
// Do not edit below this line
module.exports = palindromes;
