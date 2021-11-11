class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
    this.dequeuePos = 0;
  }
  enqueue(value) {
    this.storage[this.count + this.dequeuePos] = value;
    this.count++;
  }
  dequeue() {
    if (this.count === 0) {
      return undefined;
    }

    var dequeueVal = this.storage[this.dequeuePos];
    this.dequeuePos++;
    this.count--;
    return dequeueVal;
  }
  size() {
    return this.count;
  }
}
