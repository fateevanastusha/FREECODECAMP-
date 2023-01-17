function largestOfFour(arr) {
  let maxNumbers = [];
  for (let i = 0; i < 4; i++){
      maxNumbers.push(Math.max(...arr[i]))
      console.log(maxNumbers)
  }
  return maxNumbers
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);