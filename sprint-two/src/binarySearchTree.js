var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  var rootNode = this.value;

  if (rootNode > value) {
    if (!this.left) {
      this.left = new BinarySearchTree(value);
      return;
    } else {
      this.left.insert(value);
    }
  }

  if (rootNode < value) {
    if (!this.right) {
      this.right = new BinarySearchTree(value);
      return;
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  var rootNode = this.value;

  if (rootNode === value) {
    return true;
  }

  if (rootNode > value) {
    if (this.left) {
      return this.left.contains(value);
    }
  }

  if (rootNode < value) {
    if (this.right) {
      return this.right.contains(value);
    }
  }

  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  var rootNode = this.value;

  cb(rootNode);

  if (this.left) {
    this.left.depthFirstLog(cb);
  }

  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};







/*
 * Complexity: What is the time complexity of the above functions?
 .insert :O(1)
 .contains: O(1)
 .depthFristLog:O(n)
 BinarySearchTree:O(1)
 */

var myBinarySearchTree = new BinarySearchTree(1);

myBinarySearchTree.insert(2);
myBinarySearchTree.insert(3);
myBinarySearchTree.insert(7);
myBinarySearchTree.insert(6);

myBinarySearchTree.insert(2);
myBinarySearchTree.insert(3);
myBinarySearchTree.insert(7);

console.log(myBinarySearchTree.contains(7)); // true
console.log(myBinarySearchTree.contains(8)); // false

myBinarySearchTree.insert(2);
myBinarySearchTree.insert(3);
myBinarySearchTree.insert(7);

var array = [];
var func = function(value) {
  array.push(value);
};

myBinarySearchTree.depthFirstLog(func);

console.log(array); // [1, 5, 2, 3, 7]