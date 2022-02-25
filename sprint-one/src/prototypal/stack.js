var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);

  someInstance.storage = {};
  someInstance.numKey = 0;

  return someInstance;

};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.numKey] = value;
  this.numKey += 1;
};

stackMethods.pop = function() {
  this.numKey -= 1;
  return this.storage[this.numKey];
  delete this.storage[this.numKey];
};

stackMethods.size = function() {

  if (this.numKey > 0) {
    return this.numKey;
  } else {
    return 0;
  }
};



