function findLimit(a) {
    a.sort((a, b) => {
      return a - b;
    })
    let middle = Math.floor(a.length / 2);
    if (a.length % 2 === 0) {
        let median = (a[middle] + a[middle - 1]) / 2
        return median * 2
    } else {
        return a[middle] * 2
    }
}

function isFraud(num, limit) {
  if (limit <= num) {
    return true;
  }
  return false;
}

// Complete the activityNotifications function below.
function activityNotifications(expenditure, d) {
    let trail = [];
    let numNotices = 0;
    for (let i = 0; i < expenditure.length; i++) {
      let fraud;
        if (i < d) {
            trail.push(expenditure[i]);
        } else if (i === d) {
            console.log('trail', trail, 'limit', findLimit(trail), 'num', expenditure[i])
            fraud = isFraud(expenditure[i], findLimit(trail));
            if (fraud) {
                numNotices += 1;
            }
        } else if (i > d) {
            trail.shift();
            trail.push(expenditure[i - 1]);
            console.log('trail', trail, 'limit', findLimit(trail), 'num', expenditure[i])
            fraud = isFraud(expenditure[i], findLimit(trail));
            if (fraud) {
                numNotices += 1;
            }
        }
    }
    console.log(numNotices)
    return numNotices;
}

activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5);