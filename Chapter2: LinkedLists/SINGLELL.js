class SingleLinkedList {
  constructor() {
    this.tail = null;
    this.head = null;
    this.count = 0;
  } 
  createNode(value) {
    return {
      value: value,
      next: null,
    }
  }
  addToTail(value) {
    const newNode = this.createNode(value);
    if(this.count === 0) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.count++;
  }
  addToHead(value) {
    const newNode = this.createNode(value);
    if(this.count === 0) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.count++;
  }
  removeTail() {
    if(this.count > 0) {
      if(this.count === 1) {
        this.head = null;
        this.tail = null;
      } else {
        let current = this.head;
        while(current.next !== this.tail) {
          current = current.next;
        }
        current.next = null;
        this.tail = current;
      }
      this.count--;
    }
  }
  removeHead() {
    if(this.count > 0) {
      if(this.count === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }
      this.count--;
    }
  }
}

module.exports = new SingleLinkedList;