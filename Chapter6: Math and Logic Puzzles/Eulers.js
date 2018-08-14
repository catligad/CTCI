function gcd (x, y) {
  while(y) {
    let temp = y;
    y = x % y;
    x = temp;
  }
  return x;
}

function findEulersTotient (n) {
  if (n === 1) {
    return 1;
  }
  let count = 0;
  for (let i = 1; i < n; i += 1) {
    if (gcd(i, n) === 1) {
      count ++;
    }
  }
  return count;
}

console.log(findEulersTotient(6))