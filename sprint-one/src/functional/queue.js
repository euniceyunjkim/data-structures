var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var removeIndex = 0;
  var addIndex = 0;
  var stackSize = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[addIndex] = value;
    addIndex += 1;
    stackSize += 1;
  };

  someInstance.dequeue = function() {
    var removed = storage[removeIndex];
    stackSize -= 1;
    delete storage[removeIndex];
    removeIndex += 1;
    return removed;
  };

  someInstance.size = function() {
    if (stackSize > 0) {
      return stackSize;
    } else {
      return 0;
    }
  };

  return someInstance;
};
