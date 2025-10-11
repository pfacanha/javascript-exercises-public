const palindromes = function (word) {
  // racecar
  const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
  let wordOne = "";
  let wordTwo = "";
  for (let i = 0; i < word.length; ++i) {
    let currentChar = word[i].toLowerCase();
    if (alphanumerical.includes(currentChar)) {
      wordOne += currentChar;
    }
  }
  for (let i = word.length - 1; i >= 0; --i) {
    let currentChar = word[i].toLowerCase();
    if (alphanumerical.includes(currentChar)) {
      wordTwo += currentChar;
    }
  }

  return wordOne === wordTwo;
};
// Do not edit below this line
module.exports = palindromes;
