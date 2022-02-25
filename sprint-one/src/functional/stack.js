var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below
  someInstance.storage = storage;
  someInstance.push = function(value) {
    if (someInstance.size()) {
      storage[someInstance.size() + 1] = value;
    } else {
      storage[1] = value;
    }
  };

  someInstance.pop = function() {
    var lastEleKey = someInstance.size();
    var lastEle = storage[lastEleKey];
    delete storage[lastEleKey];
    return lastEle;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
