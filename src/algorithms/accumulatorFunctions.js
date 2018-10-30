const joinELements = (array, joinString) => {
  const recurse = (index, resultSoFar) => {
    resultSoFar += array[index];

    if (index === array.length - 1) {
      return resultSoFar;
    } else {
      return recurse(index + 1, resultSoFar + joinString);
    }
  }
  return recurse(0, '')
}

// console.log(joinELements(['a', 'b', 'c', 'd'], 'z'));
// ----- ~~~  ----

const joinELementsLoop = (array, joinString) => {
  // 1. base case: return result at end of array
  // 2. approach: for..loop thru array and append/push 'z' after each item
  // 3. keep final result as a global variable that is returned

  let final = '';
  for (let i = 0; i < array.length - 1; i++) {
      final += array[i] + joinString;
  }
  return final + array[array.length - 1];
}

console.log(joinELementsLoop(['s', 'cr', 't cod', ' :) :)'], 'e'));

