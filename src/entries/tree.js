class Node {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
  addNode(node) {
    this.children.push(node);
  }
  hasChilden() {
    return this.children.length > 0;
  }
}

const root = new Node(1);
const node1 = new Node(1);
node1.addNode(new Node(3));
node1.addNode(new Node(2));
const node2 = new Node(4);
node2.addNode(new Node(2));
node2.addNode(new Node(3));
root.addNode(node1);
root.addNode(node2);

console.dir(root);

function firstRoot(node) {
  if (!node) {
    return;
  }
  console.log(node.val);
  firstRoot(node.children[0]);
  firstRoot(node.children[1]);
}
console.log("\n");
firstRoot(root);
console.log("\n");

function middleRoot(node) {
  if (!node) {
    return;
  }
  middleRoot(node.children[0]);
  console.log(node.val);
  middleRoot(node.children[1]);
}
console.log("\n");
middleRoot(root);
console.log("\n");

function tailRoot(node) {
  if (!node) {
    return;
  }
  tailRoot(node.children[0]);
  tailRoot(node.children[1]);
  console.log(node.val);
}
console.log("\n");
tailRoot(root);
console.log("\n");


function trise(node) {
  let arr = [];
  arr.push(node);
  const res = [];
  function doit() {
    if (arr.length < 1) return;
    const levelArr = [];
    const childrenArr = [];
    for (let n of arr) {
      levelArr.push(n);
      if (n.children.length > 0) {
        n.children.forEach((child) => childrenArr.push(child));
      }
    }
    res.push(levelArr);
    arr = childrenArr;
    doit();
  }
  doit();
  console.log(res.map((arr) => arr.reduce((pre, cur) => pre + cur.val, 0)));
}
trise(root);
