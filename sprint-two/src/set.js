var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this._storage.hasOwnProperty(item)) {
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  return this._storage.hasOwnProperty(item);
};

setPrototype.remove = function(item) {
  if (this._storage.hasOwnProperty(item)) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 set:O(n)
 add:O(n)
 contains:O(n)
 remove:O(n)
 */

var mySet = Set();

mySet.add('Susan Sarandon');
mySet.add('Danny Glover');

// console.log(mySet.contains('Danny Glover')); // true
// console.log(mySet.contains('Susan Sarandon')); // true

mySet.add('Mel Gibson');
mySet.remove('Mel Gibson');

// console.log(mySet.contains('Mel Gibson')); // false

// console.log(mySet);