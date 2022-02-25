class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(storage) {
    this.storage = {};
  }
  size() {
    return Object.keys(this.storage).length;
  }
  push(value) {
    if (this.size()) {
      this.storage[this.size()
        + 1] = value;
    } else {
      this.storage[1] = value;
    }
  }
  pop() {
    if (this.size()) {
      var lastEle = this.storage[this.size()];
      delete this.storage[this.size()];
      return lastEle;
    }
  }
}