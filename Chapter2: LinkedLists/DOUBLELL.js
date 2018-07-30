const DoubleLinkedList = function() {
  this.head = null;
  this.tail = null;
  this.count = 0;
}
const createNode = (value, prev = null, next = null) => {
  return {
    value: value,
    prev: prev,
    next: next
  }
}
DoubleLinkedList.prototype.addHead = function(value){
  const newNode = createNode(value);
  if(this.count === 0) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
  }
  this.head = newNode;
  this.count++;
}
DoubleLinkedList.prototype.addTail = function(value){
  const newNode = createNode(value);
  if(this.count === 0) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
  }
  this.tail = newNode;
  this.count++;
}
DoubleLinkedList.prototype.addAfter = function(node, value){

}
DoubleLinkedList.prototype.addBetween = function(node, value){

}
DoubleLinkedList.prototype.removeHead = function(){

}
DoubleLinkedList.prototype.removeTail = function(){

}



let dd = new DoubleLinkedList();
console.log(dd)
dd.addHead(4);
dd.addTail(5);
dd.addTail(6);
dd.addHead(3);
console.log(JSON.stringify(dd));