var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.count = 0;
  someInstance.storage = {};

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
  push(value) {
    this.storage[this.count] = value;
    this.count++;
  },

  pop() {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    return this.storage[this.count];
  },

  size() {
    return this.count;
  }
};
