function findElement(arr, func) {
  let num;
  let i;
  for (i = 0; i < arr.length; i ++){
    num = arr[i];
    if (func(num) === true){
      return num;
    }
  }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
