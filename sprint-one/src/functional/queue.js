var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var dequeuePos = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size + dequeuePos] = value;
    size++;
  };

  someInstance.dequeue = function() {
    if (size === 0) {
      return undefined;
    }

    var dequeueVal = storage[dequeuePos];
    dequeuePos++;
    size--;
    return dequeueVal;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
