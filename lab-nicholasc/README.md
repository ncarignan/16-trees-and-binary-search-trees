# Lab 16 BSTs and K-Ary-Trees

## BinarySearchTree
### Installation
This module contains a BinarySearchTree class. Its constructor can be accessed by calling `new BinarySearchTree(<value>)` where value is the value you would like the root to have.
The resulting BST will be a node with a value and a left and a right property that are both null. Further nodes can be appended to these properties.

### Methods
#### Insert
The insert method takes in a value and appends a node with that value to the appropriate place in the tree. it can be called on an existing tree as follows: `BST.insert(<value>)`. The tree inserts lower values to the left and larger values to the right of a node. The O(n) of this operation is lg(n) where n is the amount of nodes in a tree.
#### Find
The find method takes in a value and locates a node with that value in the tree. it can be called on an existing tree as follows: `BST.find(<value>)`. The method traverses the tree in preOrder and returns the node with the value you are searching for. The O(n) of this operation is lg(n) where n is the amount of nodes in a tree.

#### findParent
The findParent method takes in a value and locates a node with a child that has that value in the tree. it can be called on an existing tree as follows: `BST.findParent(<value>)`. The method traverses the tree in preOrder and returns the node with a child that has the value you are searching for. The O(n) of this operation is lg(n) where n is the amount of nodes in a tree.

####  findMin
the findMin method finds the leftmost leaf of a node. it can be called as follows `Node.findMin()`. the O(n) of this operation is lg(n) where n is the amount of nodes in a tree.

#### remove
The remove method takes in a value and locates a node that has that value in the tree and removes it. it can be called on an existing tree as follows: `BST.remove(<value>)`. The method traverses the tree in preOrder using the find() function then removes the node found. If the node has a left or right, the function appropriately restructures the tree. The O(n) of this operation is lg(n) where n is the amount of nodes in a tree. It should be noted that the remove function calls itself in some cases which can increase the o(n) time.

### Testing
to test the functions, make sure you have jest installed by running in the CLI `npm install`. Then call `npm test` and the tests will run. The tests run the methods above on several cases.

## KAryTree
### Installation
This module contains a KAryTree class. Its constructor can be accessed by calling `new KAryTree(<value>)` where value is the value you would like the root to have.
The resulting tree will be a node with a value and an empty children property. Further nodes can be appended to this array.
### methods
#### appendChild
the appendChild method takes in a KAryTree and appends it as a child to the tree it is called on. i can be accessed as follows
`let tree = new KAryTree(5);`
`let child = new KAryTree(6)`
`tree.appendChild(child)` the O(n) of this function is 1. The function is called on a specific tree and simply has to push it to the children array.
#### toArray
this method takes all the values in a KAryTree and pushes them to an array. it can be accessed as follows `tree.toArray()`; It uses the helper function \_toArray and uses a stack to push all the values into the array. It has an O(n) of n because it hits every node once.
#### toString
this method takes all the values in a KAryTree and concatenates them in a string. it can be accessed as follows `tree.toString()`; It uses the helper function \_toString and uses a queue to push all the values into the string. It has an O(n) of n because it hits every node once.
