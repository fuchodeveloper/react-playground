// --- mutiple try..catch blocks
/*
const readData = () => {
  let json = '{"name": "Tesla"}';
  try {
    bla();
  } catch (error) {
    if (error.name !== 'SyntaxError') {
      throw error;
    }
  }
}

try {
  readData();
} catch (error) {
  console.log('External catch: ' + error)
}
*/

// -- try..catch..finally

let num = -1;
let diff, result, err;

const fib = (n) => {
  if (n < 0 || Math.trunc(n) !== n) {
    throw new Error('Must not be negative, also must be an integer');
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
  result = fib(num);
} catch (error) {
  err = error;
  result = 0;
} finally {
  diff = Date.now() - start;
}

console.log(result || 'an error occured: ' + err);

console.log(`execution took ${diff}ms`);
