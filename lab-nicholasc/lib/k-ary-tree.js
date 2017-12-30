'use strict';


const Stack = require('./stack');
const Queue = require('./queue');

const KAryTree = function(value){
  this.value = value;
  this._children = [];
};

KAryTree.prototype.appendChild = function(tree){
  if(!(tree instanceof KAryTree))
    throw new TypeError('must insert a k-ary tree');
  this._children.push(tree);
};

KAryTree.prototype.toArray = function(){
  return this._toArray(this, []);
};

KAryTree.prototype._toArray = function(node){
  if(!node.value)
    return null;
  let arr = [];
  let stack = new Stack;
  stack.push(node);

  while(stack.getLength() > 0){
    let toPush = null;
    toPush = stack.pop();
    arr.push(toPush.value);

    for(let child of toPush._children)
      stack.push(child);

  }
  return arr;
};

KAryTree.prototype.toString = function(){
  return this._toString(this);
};

KAryTree.prototype._toString = function(node){
  if(!node.value)
    return null;
  let str = '';
  let queue = new Queue;
  queue.enqueue(node);
  let toQueue = null;

  while(queue.getLength() > 0){
    toQueue = queue.dequeue();
    str = `${str}\n${toQueue.value}`;

    for(let child of toQueue._children)
      queue.enqueue(child);

  }
  return str;
};

KAryTree.prototype.breathFirstSearch= function(value){
  let queue = new Queue();
  queue.enqueue(this);
  let current = null;
  while(queue.getLength() > 0){
    current = queue.dequeue();
    if(current.value === value)
      return current;
    for(let child of current._children)
      queue.enqueue(child);
  }
  return null;
};


module.exports = KAryTree;
