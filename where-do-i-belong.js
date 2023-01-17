function getIndexToIns(arr, num) {
  if (arr.indexOf(num) === -1){
    arr.push(num);
    console.log(arr)
    arr.sort((a,b) => a - b);
    console.log(arr)
    } else {
    arr.sort((a,b) => a - b);
  }
  return arr.indexOf(num)
}

getIndexToIns([40, 60], 50);