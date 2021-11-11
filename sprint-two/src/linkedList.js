var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  var count = 0;

  list.addToTail = function(value) {
    if (count === 0) {
      list.head = Node(value);
      list.tail = list.head;
      count++;
    }

    list.tail = Node(value);
    list.head.next = list.tail;
    count++;
  };

  list.removeHead = function() {
    if (count === 0) {
      return undefined;
    }

    count--;
  };

  list.contains = function(target) {

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

// var node1 = Node(12);
// var node2 = Node(6);
// node1.next = node2;

// console.log('node1: ', node1);
// console.log('node2: ', node2);

var myList = LinkedList();

myList.addToTail(4);
myList.addToTail(5);
// myList.removeHead();
// console.log('contains: ', myList.contains(4)) // false

console.log('myList: ', myList);

/*
 * Complexity: What is the time complexity of the above functions?
 */
