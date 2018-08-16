var minDepth = function(root) {
  if (!root) {
    return 0;
  }
  let queue = [root];
  root.level = 1;
  while(queue.length > 0) {
    let current = queue.splice(0, 1)[0];
    if (!current.left && !current.right) {
      return current.level;
    } 
    if (current.left) {
      current.left.level = current.level + 1;
      queue.push(current.left);
    }
    if (current.right) {
      current.right.level = current.level + 1;
      queue.push(current.right);
    }
  }
};

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

console.log(minDepth(root))