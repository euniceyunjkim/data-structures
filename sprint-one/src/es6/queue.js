class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(storage, head, tail) {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(value) {
    this.storage[this.tail] = value;
    this.tail += 1;
  }
  dequeue() {
    if (this.size()) {
      var firstEle = this.storage[this.head];
      this.head += 1;
      return firstEle;
    }
  }
  size() {
    return this.tail - this.head;
  }

}
