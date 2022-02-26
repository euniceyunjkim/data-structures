

// Instantiate a new graph
var Graph = function() {
  this.graphList = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
//takes in new node adds to graph
  if (!this.graphList[node]) {
    this.graphList[node] = [];
  }
// Return a boolean value indicating if the value passed to contains is represented in the graph.
};

Graph.prototype.contains = function(node) {
//takes in any node
  var allKeys = Object.keys(this.graphList);

  for (var i = 0; i < allKeys.length; i++) {
    var compare = String(node);
    if (allKeys[i] === compare) {
      return true;
    }
  }
  //return boolean if found in graph};
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
//takes in any node
  if (this.contains(node)) {
    delete this.graphList[node];
  }
  //removes it from the graph if present (all edges removed as well)
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
//returns boolean whether or not two nodes are connected

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
//check if both nodes present in graph
  //create an edge connection between two nodes if both present};
};
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
//removes connection between two nodes
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
//method that traverses through graph (calls passed in function once on each node)
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


