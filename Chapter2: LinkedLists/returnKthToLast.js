// Implement an algorithm to find the kth to last element of a singly linked list.

function returnKthToLast(ll, k) {
  let current = ll.head;
  let count = 0;
  while(current) {
    count++;
    current = current.next;
  };
  const index = count - k - 1;
  if (index > count || index < 0) {
    return 'Not in list';
  }
  count = 0;
  current = ll.head;
  while(current && count < index) {
    current = current.next;
    count += 1;
  }
  return current;
}

const LL = require('./SINGLELL');
LL.addToTail(1);
LL.addToTail(2);
LL.addToTail(2);
LL.addToTail(3);
LL.addToTail(4);

console.log(JSON.stringify(returnKthToLast(LL, 2)));