function factorialize(n) {
  if (n <= 0) {
    return 1
  } else {
    return factorialize(n-1) * n;
  }
}


factorialize(5);