const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let sum = 0;
  arr.forEach((item) => (sum += item));
  return sum;
};

const multiply = function (arr) {
  let total = arr[0];
  for (let i = 1; i < arr.length; ++i) {
    total *= arr[i];
  }
  return total;
};

const power = function (a, b) {
  let temp = a;
  for (let i = 1; i < b; ++i) {
    temp *= a;
  }
  return temp;
};

const factorial = function (a) {
  if (a == 0) {
    return 1;
  } else {
    return a * factorial(a - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
