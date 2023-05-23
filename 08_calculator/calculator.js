const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(xs) {
	return xs.reduce((sum, x) => sum + x, 0)
};

const multiply = function(xs) {
  return xs.reduce((product, x) => product * x, 1)
};

const power = function(a, b) {
  if (b === 1) {
    return a;
  } else {
    return a * power(a, b - 1);
  }
}

const factorial = function(n) {
	if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
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
