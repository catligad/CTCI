// A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs.

const tripleStep = (nSteps) => {
  let count = 0;
  const recurse = (number) => {
    if (number === 0) {
      count ++;
    } else if (number > 0){
      recurse(number -1);
      recurse(number - 2);
      recurse(number - 3);
    }
  }
  recurse(nSteps);
  return count;
}

console.log(tripleStep(4))
