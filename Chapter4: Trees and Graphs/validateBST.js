//  Implement a function to check if a binary tree is a binary search tree.
let Node = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

let root = new Node(5);
let leaf1 = new Node(1);
let leaf2 = new Node(2);
let leaf3 = new Node(3);
let leaf6 = new Node(6);
let leaf7 = new Node(7);
let leaf8 = new Node(8);

root.left = leaf2;
root.right = leaf7;
leaf2.left = leaf1;
leaf2.right = leaf3;
leaf7.left = leaf6;
leaf7.right = leaf8;

function validateBST(bst, numbers) {
  debugger
  let current = bst;
  let toReturn;
  while(current) {
    if (!numbers[current.value]) {
      numbers[current.value] = true;
    } else {
      return false;
    }
    if (current.left !== null) {
      if (current.left.value > current.value) {
        return false;
      }
       toReturn = validateBST(current.left, numbers);
       if (!toReturn) {
         return false;
       }
    }
    if (current.right !== null) {
      if (current.right.value < current.value) {
        return false;
      }
      toReturn = validateBST(current.right, numbers);
      if (!toReturn) {
        return false;
      }
    }
    current = current.next;
  }
  return true;
}

console.log(validateBST(root, {}))