var Stack = function() {
  this.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};
Stack.prototype.size = function () {
  return Object.keys(this.storage).length;
};
Stack.prototype.push = function(value) {
  if (this.size()) {
    this.storage[this.size() + 1] = value;
  } else {
    this.storage[1] = value;
  }
};
Stack.prototype.pop = function() {
  if (this.size()) {
    var lastEle = this.storage[this.size()];
    delete this.storage[this.size()];
    return lastEle;
  }
};
// function Target() {
//   this.storage = {}
//   this.size = function () {
//     return Object.keys(self.storage).length;
//   }
//   this.push = function(value) {
//     if (self.size()) {
//       self.storage[self.size()+1] = value;
//     } else {
//       self.storage[1] = value;
//     }
//   }
//   this.pop = function() {
//     if (self.size()) {
//       vat lastEle = self.storage[self.size()]
//       delete self.storage[self.size()];
//       return lastEle;
//     }
//   }
// }

