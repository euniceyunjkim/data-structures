var BinarySearchTree = function(value) {
  var tree = Object.create(bTreeProto);
  tree.value = value;
  tree.left = null;
  tree.right = null;

  return tree;
};

var bTreeProto = {};

bTreeProto.insert = function(value) {

  if (this.value > value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (this.value < value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }

};

bTreeProto.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (this.value > target && this.left) {
    return this.left.contains(target);
  } else if (this.value < target && this.right) {
    return this.right.contains(target);
  }
  return false;
};

bTreeProto.depthFirstLog = function(callBack) {

  callBack(this.value);

  if (this.left) {
    this.left.depthFirstLog(callBack);
  }

  if (this.right) {
    this.right.depthFirstLog(callBack);
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
*/
