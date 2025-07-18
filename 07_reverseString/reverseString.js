const reverseString = function(str) {
  let newStr = '';
  const length = str.length;
  for(let i = length - 1; i >= 0; --i){
    newStr += str[i];
  }
  return newStr;
};

// Do not edit below this line
module.exports = reverseString;
