const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
	let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }

  return total;
};

const multiply = function(multiplicands) {
  let result = multiplicands[0];
  for (let i = 1; i < multiplicands.length; i++) {
    result *= multiplicands[i];
  }

  return result;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(x) {
  let result = 1;
  let multiplier = x;
  for (let i = x; i > 0; i--) {
    result *= multiplier;
    multiplier--;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
