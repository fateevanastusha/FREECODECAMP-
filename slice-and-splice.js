function frankenSplice(arr1, arr2, n) {
  let newArr1 = arr1.slice();
  let newArr2 = arr2.slice();
  if (n>0){
    for (let i = newArr1.length-1; i >= 0; i--){
      newArr2.splice(n, 0, newArr1[i])
    }
  } else {
    return newArr1
  }
  return newArr2
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);