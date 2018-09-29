// TASK: Implement bubblesort

/*
  steps:
  1. Compare first and second, if 1 > 2: swap positions,
    else if 2 > 1: don't swap.
  2. continue performing this until the end of the array
*/

/* Implementation approach:
    use: recursive function - I'm not saving the calculation,
      I don't need a cache here
    use: iterative approach - this is linear,
      for..loop works
*/

const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

const bubbleSort = array => {
  let countOuter = 0;
  let countInner = 0;
  let countSwap = 0;

  let swapped;
  do {
    countOuter++;
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      countInner++;
      if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
        countSwap++;
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}

console.log(bubbleSort([5,6,7,2,3,1,10,9]));
