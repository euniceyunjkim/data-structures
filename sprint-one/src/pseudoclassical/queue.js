var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.removeIndex = 0;
  this.addIndex = 0;
  this.queueSize = 0;

};

Queue.prototype.enqueue = function(value) {
  this.storage[this.addIndex] = value;
  this.addIndex += 1;
  this.queueSize += 1;
};

Queue.prototype.dequeue = function() {
  var removed = this.storage[this.removeIndex];
  this.queueSize -= 1;
  delete this.storage[this.removeIndex];
  this.removeIndex += 1;
  return removed;
};

Queue.prototype.size = function() {
  if (this.queueSize > 0) {
    return this.queueSize;
  } else {
    return 0;
  }
};


