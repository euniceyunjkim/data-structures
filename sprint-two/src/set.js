var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
//take a string and add to set
  if (!this.contains(item)) {
    this.storage.push(item);
  }
};

setPrototype.contains = function(item) {
//takes a string
  if (this.storage !== [] && this.storage.indexOf(item) > -1) {
    return true;
  }
  //return boolean if found in set
  return false;
};

setPrototype.remove = function(item) {
//takes string
  if (this.contains(item)) {
    var index = this.storage.indexOf(item);
    this.storage.splice(index, 1);
  }
  //if found
  //remove from set
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
