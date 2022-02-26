var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.storage = storage;
  someInstance.head = 0;
  someInstance.tail = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance.storage[someInstance.tail] = value;
    someInstance.tail += 1;
  };

  someInstance.dequeue = function() {
    if (someInstance.size()) {
      var firstEle = someInstance.storage[someInstance.head];
      someInstance.head += 1;
      return firstEle;
    }
  };

  someInstance.size = function() {
    return someInstance.tail - someInstance.head;

  };

  return someInstance;
};
