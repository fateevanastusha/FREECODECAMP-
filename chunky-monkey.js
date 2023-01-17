function chunkArrayInGroups(arr, size) {
  let numberSet = [];
  if (size === 2){
    for (let i = 0; i < (Math.ceil(arr.length / size))*size; i += size) {
      numberSet.push(arr.slice(i, i+size))
    }
  } else {
    for (let j = 0; j < (Math.ceil(arr.length / size))*size; j += size) {
      numberSet.push(arr.slice(j, j+size))
    }
  }
  return numberSet;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);