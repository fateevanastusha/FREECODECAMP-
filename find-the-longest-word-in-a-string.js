function findLongestWordLength(str) {
  let wordsArray = str.split(' ');
  let numbersArray =  [];
  for (let i = 0; i < wordsArray.length; i++) {
    numbersArray.push(wordsArray[i].length);
  }
  let maxNumber = Math.max(...numbersArray);
  return maxNumber;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");