var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var parentNode = this;

  if (parentNode.value === target) {
    return true;
  }

  if (parentNode.children.length > 0) {
    for (var i = 0; i < parentNode.children.length; i++) {
      var child = parentNode.children[i];
      if (child.contains(target)) {
        return true;
      }
    }
  }
  return false;
};

// treeMethods.contains = function(target) {
//   var innerFunc = function(treeObj) {
//     if (treeObj.value === target) {
//       return true;
//     } else if (treeObj.children.length > 0) {
//       for (var i = 0; i < treeObj.children.length; i++) {
//         var child = treeObj.children[i];
//         if (child.value === target) {
//           return true;
//         }
//           innerFunc(child);
//       }
//     } else {
//       return false;
//     }
//   };
//   innerFunc(this);
// };

var myTree = Tree(4);

myTree.addChild(5);
myTree.addChild(6);
myTree.children[0].addChild(7);
myTree.children[1].addChild(8);


// console.log(myTree.contains(7)); // true
// console.log(myTree.contains(8)); // true


// console.log('myTree: ', myTree);

/*
 * Complexity: What is the time complexity of the above functions?
 .addChild O(1)
 .contains 0(n)
 tree: O(1)
 */
