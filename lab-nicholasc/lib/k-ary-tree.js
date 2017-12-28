'use strict';


const Stack = require('./stack');
const Queue = require('./queue');

class KAryTree{
  constructor(value){
    this.value = value;
    this._children = [];
  }

  appendChild(tree){
    if(!(tree instanceof KAryTree))
      throw new TypeError('must insert a k-ary tree');
    this._children.push(tree);
  }

  toArray() {
    return this._toArray(this, []);
  }

  _toArray(node) {
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
  }

  toString() {
    return this._toString(this);
  }

  _toString(node) {
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
  }

  breathFirstSearch(){
    let queue = new Queue();
    queue.enqueue(this);
    let current = null;
    while(queue.getLength() > 0){
      current = queue.dequeue();
      console.log(`visiting ${current.value}`);

      for(let child of current._children)
        queue.enqueue(child);
    }
  }
}

module.exports = KAryTree;
