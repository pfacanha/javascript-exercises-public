const removeFromArray = function(arr, ...Args) {
  if(Array.isArray(arr)){
    return arr.filter((element) => !Args.includes(element));
  }
};

// Do not edit below this line
module.exports = removeFromArray;
