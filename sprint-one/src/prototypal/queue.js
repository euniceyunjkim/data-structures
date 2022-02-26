var Queue = function() {
  var target = Object.create(queueMethods);
  target.storage = {};
  target.head = target.tail = 0;
  return target;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {};

queueMethods.size = function() {
  return this.tail - this.head;
};
queueMethods.enqueue = function(value) {
  this.storage[this.tail] = value;
  this.tail += 1;
};
queueMethods.dequeue = function() {
  if (this.size()) {
    var firstEle = this.storage[this.head];
    this.head += 1;
    return firstEle;
  }
};


