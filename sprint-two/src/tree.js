var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];
  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));

//takes in value
//sets value as target of node
//adds node as child of tree
};

treeMethods.contains = function(target) {
//takes in input
  var curNode = this;
  if (curNode.value === target) {
    return true;
  }

  if (curNode.children) {
    console.log('curNode.children' + curNode.children);
    for (var i = 0; i < curNode.children.length; i++) {
      if (curNode.children[i].contains(target)) {
        return true;
      }
    }
    // _.each(curNode.children, function(item) {
    //   return treeMethods.contains(item);
    // });
  }

  //   function checker (input){
  //   if (input.value === target) {
  //     return true;
  //   }

  //   if (input.children) {
  //     checker(input.children);
  //   }

  //    return false;
  // }

  return false;
  //returns bolean reflecting if it can be found as value of target node or descendent node

};

// /*
//  * Complexity: What is the time complexity of the above functions?
//  *
//  *

