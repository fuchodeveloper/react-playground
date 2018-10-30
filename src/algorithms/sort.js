const unqiueSort1 = (arr) => {
  let arrList = [];
  for (const iterator of arr) {
    if (!arrList.includes(iterator)) {
      arrList.push(iterator);
    }
  }

  return arrList.sort((a, b) => a - b);
}

const a = unqiueSort1([4, 2,2,3,2,2,2]);

const unqiueSort2 = (arr) => {
  const breadcrumbs = {};
  const result = [];

  for(let i = 0; i < arr.length; i++) {
    if (!breadcrumbs[arr[i]]) {
      result.push(arr[i]);
      breadcrumbs[arr[i]] = true;
    }
  }
  return result.sort((a, b) => a - b);
}

const b = unqiueSort1([4, 2, 2, 3, 2, 2, 2]);

