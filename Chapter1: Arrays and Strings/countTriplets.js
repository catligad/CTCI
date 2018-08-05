function countTriplets(arr, r) {
  var count = 0
  const counter = {}
  const pairs = {}

  arr.reverse().forEach(num => {
    let lastNum = num * r;
    if (pairs[lastNum]) {
      count += pairs[lastNum]
    }
    if (counter[lastNum]){
      pairs[num] = (pairs[num] || 0) + counter[lastNum]
    }
    counter[num] = (counter[num] || 0) + 1
  });
  return count
}

console.log(countTriplets([1,2,1,2, 4], 2));