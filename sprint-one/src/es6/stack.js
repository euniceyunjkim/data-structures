class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.numKey = 0;
  }

  push(value) {
    this.storage[this.numKey] = value;
    this.numKey += 1;
  }

  pop() {
    this.numKey -= 1;
    return this.storage[this.numKey];
    delete this.storage[this.numKey];
  }

  size() {
    if (this.numKey > 0) {
      return this.numKey;
    } else {
      return 0;
    }

  }
}
