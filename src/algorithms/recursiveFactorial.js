// Task 1: Without peeking, write your own recursive factorial method
/* factorial method: 5! === 120
  1. recursively call itself and reduce the input by -1
  2. if input <= 1; return 1
*/
const calcFc = num => {
  let count;
  if (num <= 1) {
    count = 1;
  } else {
    count = num * calcFc(num - 1)
  }
  return count;
}
// console.log(calcFc(5));

// Task 2: Use your memo function from the previous exercise to memoize your factorial method

const memoizeFactorial = () => {
  let cache = {}; // default: {}; filled: {90: true}
  let count;

  const calcFactorial = num => {
    if (num in cache) {
      // console.log('~~~ from cache ~~~~', count)
      count = cache[num];
    } else {
      // console.log('~~~ calculated ~~~')
      if (num <= 1) {
        count = 1;
      } else {
        count = num * calcFactorial(num - 1)
      }
    }
    cache[num] = count;
    return count;
  }
  return calcFactorial;
}

const a = memoizeFactorial();


// console.log(`factorial of 5: `,a(5))
// console.log(`factorial of 4: `, a(4))
// console.log(`factorial of 5: `,a(5))

// Task 2: second approach
const memoize = (cb) => {
  let cache = {};
  return (...args) => {
    let n = args[0];
    if (n in cache) {
      console.log('~~ from cache ~~', n);
      return cache[n];
    } else {
      console.log('~~ calculated ~~', n);
      let result = cb(n);
      cache[n] = result;
      return result;
    }
  }
}

const factorial = memoize(
  (x) => {
    if (x <= 0) {
      return 1;
    } else {
      return x * factorial(x - 1);
    }
  }
);

console.log(factorial(5));
console.log(factorial(5));
