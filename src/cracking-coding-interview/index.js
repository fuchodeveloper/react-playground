const printPairs = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ', ', arr[j])
    }
  }
}

console.log(printPairs([8]))