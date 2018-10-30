const loopNTimes = n => {
  console.log('n=== ', n);
  if (n <= 1) {
    return 'complete';
  }
  return loopNTimes(n - 1);
}

// console.log((loopNTimes(3)));

const computeFactorial = num => {
  let result = 1;

  for (let i = 2; i <= num; i++) {
    console.log(`result= ${result} * ${i} (${result * i})`)
    result *= i;
  }
  return result;
}

const computeFactorial2 = num => {
  if (num === 1) {
    console.log('base line reached');
    return 1;
  } else {
    return num * computeFactorial2(num - 1);
  }
}

// console.log(computeFactorial2(5));

/**** convert iterative loop to recursive loop *****/
const logNumbers = (start, end) => {
  console.log(`iteratively looping from ${start} until ${end}`);

  for(let i = start; i <= end; i++) {
    console.log('hitting index', i)
  }
}

// logNumbers(1, 10)

const logNumbersRecursively = (start, end) => {
  console.log(`recursively looping from ${start} until ${end}`);
  const recurse = i => {
    console.log('hitting index ', i);
    if (i < end) {
      recurse(i + 1);
    }
  }
  recurse(start);
}

logNumbersRecursively(1, 10);

// TODO: calculate time complexity and space complexity