//Write code to remove duplicates from an unsorted linked list. 
function removeDups(ll) {
  let outerloop = ll.head;
  let innerloop = ll.head;
  // debugger
  while (outerloop) {
    while(innerloop) {
      if (innerloop.next !== null && outerloop.value === innerloop.next.value) {
        innerloop.next = innerloop.next.next;
        ll.count --;
      } else {
        innerloop = innerloop.next;
      }
    }
    outerloop = outerloop.next;
    if (outerloop !== null && outerloop.next !== null) {
      innerloop = outerloop;
    }
  }
  return ll;
}

const LL = require('./SINGLELL');
LL.addToTail(1);
LL.addToTail(2);
LL.addToTail(2);
LL.addToTail(3);
LL.addToTail(4);

console.log(JSON.stringify(removeDups(LL)));

//How would you solve this problem if a temporary buffer is not allowed?