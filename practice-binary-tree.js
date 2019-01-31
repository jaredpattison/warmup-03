'use strict';

let {BinaryTree,Node} = require('./binary-tree.js');

function breadthFirtst(tree) {
  if(tree.root === null) {
    return null;
  }
  let q = [tree.root];
  let res = [];
  while (q.length > 0) {
    let c = q[0];

    if(c.left !== null) {
      q.push(c.left);
    }
    if(c.right !== null) {
      q.push(c.right);
    }
    res.push(q.shift().value);
  }
  return res;
}

function preOrder(tree) {

  let results= [];

  let _walk = (node) => {
    results.push(node.value);
    if(node.left) _walk(node.left);
    if(node.right) _walk(node.right);
    
  };
  _walk(tree.root);

  return results;
}
 
function postOrder(tree) {
  let results = [];

  let _walk = (node) => {
    if(node.left) _walk(node.left);
    if(node.right) _walk(node.right);
    results.push(node.value);
  };
  _walk(tree.root);

  return results;
}

function inOrder(tree) {
  let  results = [];

  let _walk = (node) => {
    if(node.left) _walk(node.left);
    results.push(node.value);
    if(node.right) _walk(node.right);
  };
  _walk(tree.root);

  return results;
}

function levelOrder(tree) {
  let results = [];
  let nodeQueue = [];

  nodeQueue.push(tree.root);

  while(nodeQueue.length) {
    let current = nodeQueue.shift();
    results.push(current.value);
    if(current.left) nodeQueue.push(current.left);
    if(current.right) nodeQueue.push(current.right);
  }

  return results;
};

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

one.left = two;
one.right = three;
three.left = four;
three.right = five;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;

const testTree = new BinaryTree(one);

console.log(breadthFirtst(testTree));
console.log(preOrder(testTree));
console.log(inOrder(testTree));
console.log(postOrder(testTree));
console.log(levelOrder(testTree));