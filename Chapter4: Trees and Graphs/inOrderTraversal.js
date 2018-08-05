const inOrderTraversal = function(root) {
  let current = root;
  let arr = [];
  const recurse = (current) => {
    while(current) {
        if (current !== null) {
            recurse(current.left);
            arr.push(current.value);
            recurse(current.right);
            current = current.next;
        }
    }
  }
  recurse(root);
  console.log(arr)
  return arr;
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

inOrderTraversal(root, []);