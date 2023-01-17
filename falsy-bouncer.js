function bouncer(arr) {
  let newArr = arr.slice();
  let rightArr = [];
  let i 
  for (i = 0; i < newArr.length; i++){
    if (newArr[i]) {
      rightArr.push(newArr[i]);
    }
  }
  return rightArr; 
}

bouncer([7, "ate", "", false, 9]);