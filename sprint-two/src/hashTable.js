//pseudoclassical style

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(index) === undefined) {
    this._storage.set(index, {});
  }
  this._storage.get(index)[k] = v;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var callBackFunc = function(object, index, array) {
    if (object !== undefined) {
      delete object[k];
    }

  };
  this._storage.each(callBackFunc);
};




/*
 * Complexity: What is the time complexity of the above functions?
 */

// inser:O(1)
// retrieve:O(1)
// remove: O(N)
