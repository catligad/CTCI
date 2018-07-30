//Print all positive integer solutions to the equation a^3 + b^3 = c^3 + d^3 where a, b, c, and d are integers between 1 and 1000

//BRUTE FORCE SOLUTION O(N4)
function bruteForce(n) {
  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      for (let c = 1; c <= n; c++) {
        for (let d = 1; d <= n; d++) {
          if (Math.pow(a, 3) + Math.pow(b, 3) === Math.pow(c, 3) + Math.pow(d, 3)) {
            console.log(a,b,c,d);
          }
        }
      }
    }
  }
}

//OPTIMIZING PT 1 O(N4)
function opt1(n) {
  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      for (let c = 1; c <= n; c++) {
        for (let d = 1; d <= n; d++) {
          if (Math.pow(a, 3) + Math.pow(b, 3) === Math.pow(c, 3) + Math.pow(d, 3)) {
            console.log(a,b,c,d);
            break;
          }
        }
      }
    }
  }
}

//OPTIMIZING PT 2 O(N3)
function opt2(n) {
  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      for (let c = 1; c <= n; c++) {
        const d = Math.pow((Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3)), 1/3);
        if (Math.pow(a, 3) + Math.pow(b, 3) === Math.pow(c, 3) + Math.pow(d, 3)) {
          console.log(a,b,c,d);
        }
      }
    }
  }
}

//OPTIMIZING PT 3 O(N2)
function opt3(n) {
  const hash = require('./quickHashTable');
  for (let c = 1; c <= n; c++) {
    for (let d = 1; d <= n; d++) {
      const result = Math.pow(c, 3) + Math.pow(d, 3);
      hash.insert(`${result}`, [c, d]);
    }
  }
  for (let a = 1; a <=n; a++) {
    for (let b = 1; b <= n; b++) {
      const result = Math.pow(a, 3) + Math.pow(b, 3);
      const list = hash.retrieve(`${result}`);
      console.log(a, b, ...list);
    }
  }
}