const r = 'rock';
const p = 'paper';
const s = 'scissors';
const arr = [r,p,s];

function rps(n, result, round) {
  for (let i = 0; i < 3; i++) {
    if (round.length === n) {
      return result.push(round.slice());
    } else {
      round.push(arr[i]);
      rps(n, result, round);
    }
    round.splice(round.length - 1);
  }
  return result;
}

console.log(rps(3, [], []));