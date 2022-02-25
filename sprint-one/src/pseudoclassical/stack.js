var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.numKey = 0;

};

Stack.prototype.push = function(value) {
  this.storage[this.numKey] = value;
  this.numKey += 1;
};

Stack.prototype.pop = function() {
  this.numKey -= 1;
  return this.storage[this.numKey];
  delete this.storage[this.numKey];
};

Stack.prototype.size = function() {
  if (this.numKey > 0) {
    return this.numKey;
  } else {
    return 0;
  }
};



