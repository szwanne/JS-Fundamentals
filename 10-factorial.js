const [arg] = process.argv.slice(2);
const number = parseInt(arg);

const factorial = function fact(n) {
  if (isNaN(n) || n < 0) {
    return 1;
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * fact(n - 1);
};

console.log(factorial(number));
