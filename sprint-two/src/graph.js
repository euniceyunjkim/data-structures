

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
  // Time complexity: O(1)
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
  // Time complexity O(N)
  //return boolean if found in graph};
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
//takes in any node
  if (this.contains(node)) {
    if (this.graphList[node].length > 0) {
      for (var i = 0; i < this.graphList[node].length; i++) {
        this.removeEdge(this.graphList[node][i], node);
      }
      // _.each(this.graphList[node], function(item) {
      //   Graph.prototype.removeEdge(item, node);
      // });
    }
    delete this.graphList[node];
  }
  //removes it from the graph if present (all edges removed as well)
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
//returns boolean whether or not two nodes are connected
  var curConnection = this.graphList[fromNode];
  if (curConnection !== undefined && curConnection.indexOf(toNode) > -1) {
    return true;
  }
  return false;
};
// Time complexity: O(N)

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
//check if both nodes present in graph
  if (this.graphList[fromNode] && this.graphList[toNode]) {
    this.graphList[fromNode].push(toNode);
    this.graphList[toNode].push(fromNode);
  }
  //create an edge connection between two nodes if both present};
  // O(1)
};
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
//removes connection between two nodes
  if (this.hasEdge(fromNode, toNode)) {
    var indexToDelete1 = this.graphList[fromNode].indexOf(toNode);
    this.graphList[fromNode].splice(indexToDelete1, 1);
    var indexToDelete2 = this.graphList[toNode].indexOf(fromNode);
    this.graphList[toNode].splice(indexToDelete2, 1);

  }
// O(N) + O(N) + O(N) + O(N) + O(N)
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
//method that traverses through graph (calls passed in function once on each node)
  var allNodes = Object.keys(this.graphList);
  _.each(allNodes, function(item) {
    cb(item);
  });
};
// callback processing time is a, time complexity would be O(N) * a.

/*
 * Complexity: What is the time complexity of the above functions?
 */


