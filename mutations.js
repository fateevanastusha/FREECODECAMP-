function mutation(arr) {
  let str1 = arr[0];
  str1 = str1.toLowerCase();
  let str2 = arr[1];
  str2 = str2.toLowerCase();
  let numberCount = 0
  for (let i = 0; i < str2.length; i++){
    if (str1.indexOf(str2[i]) !== -1){
      numberCount ++
    }
  }
  if (numberCount == str2.length) {
    return true;
  } else {
    return false;
  }
}

mutation(["hello", "hey"]);