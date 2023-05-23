const fibonacci = function(n) {
  if (Number(n) <= 0) {
    return "OOPS";
  }

  return fibonacci_aux(1, 1, Number(n));
  
  function fibonacci_aux(a, b, n) {
    if (n === 1) {
      return 1;
    } else if (n === 2) {
      return b;
    } else {
      return fibonacci_aux(b, a + b, n - 1)
    }
  }
};

// Do not edit below this line
module.exports = fibonacci;
