function findLargest (arr) {
    let largest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

function incrementAllButOne(arr) {
    let largest = findLargest(arr);
    let foundLargest = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === largest && !foundLargest) {
            foundLargest = true;
        } else {
            arr[i] = arr[i] + 1;
        }
    }
    return arr;
}

function areAllSame(arr) {
    let number = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== number) {
            return false;
        }
    }
    return true;
}

function countMoves(numbers) {
    let count = 0;
    let allEven = false;
    while (!allEven) {
        numbers = incrementAllButOne(numbers);
        if (areAllSame(numbers)) {
            allEven = true;
        }
        count++
    }
    if (count === 1) {
      console.log(1);
      return 0;
    }
    console.log(count)
    return count;
}

countMoves([5, 5, 6, 8, 8, 5]);
countMoves([3, 2, 2, 2]);