var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  someInstance.dequeuePos = 0;

  return someInstance;
};

var queueMethods = {
  enqueue(value) {
    this.storage[this.count + this.dequeuePos] = value;
    this.count++;
  },
  dequeue() {
    if (this.count === 0) {
      return undefined;
    }
    var dequeueVal = this.storage[this.dequeuePos];
    this.dequeuePos++;
    this.count--;
    return dequeueVal;
  },
  size() {
    return this.count;
  }
};


