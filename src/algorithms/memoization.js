// Task 1: Write a function, times10, that takes an argument, n, and multiples n times 10
// a simple multiplication fn
const times10 = (args) => args * 10;

// console.log('~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~');
// console.log('times10 returns:', times10(9));

// Task 2: Use an object to cache the results of your times10 function. 
// protip 1: Create a function that checks if the value for n has been calculated before.
// protip 2: If the value for n has not been calculated, calculate and then save the result in the cache object.

// const cache = {};

// const memoTimes10 = (n) => {
//   if (n in cache) {
//     console.log('from cache')
//     return cache[n];
//   } else {
//     console.log('calculated')
//     let result = times10(n);
//     cache[n] = result;
//     return result;
//   }
// }

// console.log('~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~');
// console.log('Task 2 calculated value:', memoTimes10(9));	// calculated
// console.log('Task 2 cached value:', memoTimes10(9));	// cached

// Task 3: Clean up your global scope by moving your cache inside your function.
// protip: Use a closure to return a function that you can call later.

const memoizedClosureTimes10 = () => {
  const cache = {};
  const calcFunc = (n, m) => {
    if ((n in cache) || (m in cache)) {
      console.log('from cache');
      return cache[n] || cache[m];
    } else {
      console.log('calculated')
      // let result = times10(n);
      let result = n * m;
      cache[n] = result;
      cache[m] = result;
      return result;
    }
  }
  return calcFunc;
};

const memoClosureTimes10 = memoizedClosureTimes10();
console.log('~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~');
try {
  console.log('Task 3 calculated value:', memoClosureTimes10(9, 11));	// calculated
  console.log('Task 3 cached value:', memoClosureTimes10(9, 11));	// cached
  console.log('Task 3 cached value again:', memoClosureTimes10(9, 11));	// cached
} catch (e) {
  console.error('Task 3:', e);
}

