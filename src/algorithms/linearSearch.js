// TASK: Implement linear search
const linearSearch = (list, item) => {
  let found = -1;
  list.forEach((listItem, index) => {
    if (listItem === item) {
      found = index;
    }
  });
  return found;
}

let a = linearSearch([2,6, 7,90,103], 90);
console.log(`Found at index:`, a);
