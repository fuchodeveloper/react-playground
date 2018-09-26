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
console.log(calcFc(5));

/*
  call stack game:

  const calcFc = num => {
  let count;
  if (num <= 1) { // 5
    count = 1;
  } else {
    count = num * calcFc(num - 1)
  }
    return count;
    ~~~
  }

  const calcFc = num => {
  let count;
  if (num <= 1) { // 4
    count = 1;
  } else {
    count = num * calcFc(num - 1)
  }
    return count;
    ~~~
  }

  const calcFc = num => {
  let count;
  if (num <= 1) { // 3
    count = 1;
  } else {
    count = num * calcFc(num - 1)
  }
    return count;
    ~~~
  }

  const calcFc = num => {
  let count;
  if (num <= 1) { // 2
    count = 1;
  } else {
    count = num * calcFc(num - 1)
  }
    return count;
    ~~~
  }

  const calcFc = num => {
  let count;
  if (num <= 1) { // 1
    count = 1;
  } else {
    count = num * calcFc(num - 1)
  }
    return count;
    ~~~
  }
*/

// Task 2: Use your memo function from the previous exercise to memoize your factorial method