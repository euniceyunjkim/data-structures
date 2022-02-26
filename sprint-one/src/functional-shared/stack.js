var Stack = function(value) {
  var target = {};
  target.storage = {};
  _.extend(target, stackMethods);

  return target;
};
//   this.storage = {};
//   this.push = function(value) {
//     if (this.size()) {
//       this.storage[this.size()+1] = value;
//     } else {
//       this.storage[1] = value;
//     }
//   }
//   this.pop = function() {
//     if (this.size()) {
//       var lastEle = this.storage[this.size()];
//       delete this.storage[this.size()]
//       return lastEle;
//     }
//   }
//   this.size = function() {
//     return Object.keys(this.storage).length;
//   }
//   return this;
//   // // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
// };

var stackMethods = {};
stackMethods.push = function(value) {
  if (this.size()) {
    this.storage[this.size() + 1] = value;
  } else {
    this.storage[1] = value;
  }
};
stackMethods.pop = function(value) {
  if (this.size()) {
    var lastEle = this.storage[this.size()];
    delete this.storage[this.size()];
    return lastEle;
  }
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};

