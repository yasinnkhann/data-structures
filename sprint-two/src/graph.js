// Instantiate a new graph
var Graph = function() {
  this.nodeList = [];
  this.edgeList = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodeList.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodeList.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.nodeList.length === 0) {
    return undefined;
  }

  var location = this.nodeList.indexOf(node);

  this.nodeList.splice(location, 1);

  for (var i = 0; i < this.edgeList.length; i++) {
    var edge = this.edgeList[i];
    if ((edge[0] === node || edge[1] === node)) {
      this.edgeList.splice(i, 1);
      i--;
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edgeList.length; i++) {
    var edge = this.edgeList[i];
    if ((edge[0] === fromNode || edge[1] === fromNode) && (edge[0] === toNode || edge[1] === toNode)) {
      return true;
    }
  }
  return false;
};
// needs a return statement
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var edge = [fromNode, toNode];
  var reverseEdge = [toNode, fromNode];

  this.edgeList.push(edge);
  this.edgeList.push(reverseEdge);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.edgeList.length === 0) {
    return undefined;
  }

  var edge = [fromNode, toNode];
  var reverseEdge = [toNode, fromNode];

  for (var i = 0; i < this.edgeList.length; i++) {
    if (JSON.stringify(this.edgeList[i]) === JSON.stringify(edge)) {
      this.edgeList.splice(i, 1);
      i--;
    } else if (JSON.stringify(this.edgeList[i]) === JSON.stringify(reverseEdge)) {
      this.edgeList.splice(i, 1);
      i--;
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodeList.length; i++) {
    var node = this.nodeList[i];
    cb(node);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


var myGraph = new Graph();

myGraph.addNode(1);
myGraph.addNode(2);

console.log(myGraph.contains(2)); // true

myGraph.removeNode(2);

console.log(myGraph.contains(2)); // false

myGraph.addNode(2);
myGraph.addNode(1);
myGraph.addNode(3);
myGraph.addEdge(3, 2);

console.log(myGraph.hasEdge(3, 2)); // true
console.log(myGraph.hasEdge(3, 1)); // false

myGraph.addNode(4);
myGraph.addNode(5);
myGraph.addEdge(5, 4);


console.log(myGraph.hasEdge(4, 5)); // true

myGraph.removeEdge(5, 4);

myGraph.hasEdge(4, 5); // false

myGraph.addNode(4);
myGraph.addNode(5);
myGraph.addEdge(5, 4);

console.log(myGraph.hasEdge(4, 5)); // true

console.log(myGraph.removeNode(5));

console.log(myGraph.hasEdge(4, 5)); // false

console.log(myGraph);