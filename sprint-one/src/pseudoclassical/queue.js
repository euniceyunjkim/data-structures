var Queue = function() {
  this.storage = {};
  this.head = this.tail = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.size = function() {
  return this.tail - this.head;
};
Queue.prototype.enqueue = function(value) {
  this.storage[this.tail] = value;
  this.tail += 1;
};
Queue.prototype.dequeue = function() {
  if (this.size()) {
    var firstEle = this.storage[this.head];
    this.head += 1;
    return firstEle;
  }
};

