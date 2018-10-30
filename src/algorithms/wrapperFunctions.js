const wrapperFnLoop = (start, end) => {
  let result;
  const recurse = i => {
    console.log(`looping from ${start} until ${end}`);
    if (i < end) {
      result = recurse(i + 1);
    }
    console.log(result);
  }
  recurse(start);
}

// console.log(wrapperFnLoop(1, 3));

const memoFnLoop = (i, end) => {
  let result;
  if (i < end) {
    result = memoFnLoop(i + 1, end);
  }
  return result;
}

console.log(memoFnLoop(1, 3));

