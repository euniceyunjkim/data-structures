var Stack = function() {
  var target = Object.create(stackMethods);
  target.storage = {};
  target.count = 0;
  return target;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

stackMethods = {};
stackMethods.size = function() {
  return this.count;
};
stackMethods.push = function(value) {
  // if (stackMethods.size()) {
  //   this.storage[stackMethods.size()+1] = value;
  // } else {
  //   this.storage[1] = value;
  // }
  this.storage[this.count] = value;
  this.count += 1;
};
stackMethods.pop = function(value) {
  if (this.count) {
    this.count -= 1;
    var lastEle = this.storage[this.count];
    delete this.storage[this.count];
    return lastEle;
  }
};


