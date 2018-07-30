// Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.
// EXAMPLE
// Input: the node c from the linked list a -> b -> c -> d -> e -> f
// Result: nothing is returned, but the new linked list looks like 
// a -> b -> d -> e-> f

var LinkedList = function(value) {
  this.value = value;
  this.next = null;
};

function deleteMiddleNode(middleNode) {
  let current = middleNode;
  while(current !== null && current.next !== null) {
    current.value = current.next.value;
    if (current.next.next === null) {
      current.next = null;
    }
    current = current.next;
  }
}


var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('e');
var f = new LinkedList('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

console.log(JSON.stringify(a))
console.log(JSON.stringify(deleteMiddleNode(c)));
console.log(JSON.stringify(a))