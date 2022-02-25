var Queue = function() {
  var target = {};
  target.storage = {};
  target.head = target.tail = 0;
  _.extend(target, queueMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return target;
};

var queueMethods = {};
queueMethods.enqueue = function(value) {
  this.storage[this.tail] = value;
  this.tail += 1;
};
queueMethods.dequeue = function(vale) {
  if (this.size()) {
    var firstEle = this.storage[this.head];
    this.head += 1;
    return firstEle;
  }

};
queueMethods.size = function() {
  return this.tail - this.head;
};



