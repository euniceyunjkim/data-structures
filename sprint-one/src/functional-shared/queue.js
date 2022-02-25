var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};

  someInstance.storage = {};
  someInstance.removeIndex = 0;
  someInstance.addIndex = 0;
  someInstance.queueSize = 0;

  _.extend(someInstance, queueMethods);

  return someInstance;

};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.addIndex] = value;
  this.addIndex += 1;
  this.queueSize += 1;
};

queueMethods.dequeue = function() {
  var removed = this.storage[this.removeIndex];
  this.queueSize -= 1;
  delete this.storage[this.removeIndex];
  this.removeIndex += 1;
  return removed;
};

queueMethods.size = function() {
  if (this.queueSize > 0) {
    return this.queueSize;
  } else {
    return 0;
  }
};
