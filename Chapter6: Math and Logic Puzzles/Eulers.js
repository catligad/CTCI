function gcd (x, y) {
  while(y) {
    let temp = y;
    y = x % y;
    x = temp;
  }
  return x;
}

function findEulersTotientBASIC(n) {
  if (n === 1) {
    return 1;
  }
  let count = 1;
  for (let i = 2; i < n; i += 1) {
    if (gcd(i, n) === 1) {
      count ++;
    }
  }
  return count;
}
