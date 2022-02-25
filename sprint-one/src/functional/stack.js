var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var numKey = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[numKey] = value;
    numKey += 1;
  };

  someInstance.pop = function() {
    numKey -= 1;
    return storage[numKey];
    delete storage[numKey];
  };

  someInstance.size = function() {

    if (numKey > 0) {
      return numKey;
    } else {
      return 0;
    }
  };

  return someInstance;
};
