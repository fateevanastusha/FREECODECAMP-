function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return ""
  } else {
    return repeatStringNumTimes(str,num-1) + str
  }
}

repeatStringNumTimes("abc", 3);
