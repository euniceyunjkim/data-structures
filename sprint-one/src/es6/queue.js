class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {

    this.storage = {};
    this.removeIndex = 0;
    this.addIndex = 0;
    this.queueSize = 0;

  }

  enqueue (value) {
    this.storage[this.addIndex] = value;
    this.addIndex += 1;
    this.queueSize += 1;
  }

  dequeue () {
    var removed = this.storage[this.removeIndex];
    this.queueSize -= 1;
    delete this.storage[this.removeIndex];
    this.removeIndex += 1;
    return removed;
  }

  size () {
    if (this.queueSize > 0) {
      return this.queueSize;
    } else {
      return 0;
    }
  }

}
