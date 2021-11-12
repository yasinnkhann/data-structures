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
    } else if (count === 1) {
      list.tail = Node(value);
      list.head.next = list.tail;
      count++;
    } else {
      var formerTail = list.tail;
      var newTail = Node(value);
      formerTail.next = newTail;
      list.head.next = formerTail;
      list.tail = newTail;
      count++;
    }
  };

  list.removeHead = function() {
    if (count === 0) {
      return undefined;
    }

    var formerHead = list.head;
    newHead = formerHead.next;
    list.head = newHead;

    count--;
    return formerHead.value;
  };

  list.contains = function(target) {

    var helperFunc = function(node) {
      if (node.value === target) {
        return true;
      }

      if (node.next === null && node.value !== target) {
        return false;
      }

      return helperFunc(node.next);
    };

    return helperFunc(list.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

var myList = LinkedList();

myList.addToTail(4);
myList.addToTail(5);
myList.addToTail(6);

myList.removeHead();
// console.log('contains: ', myList.contains(4));

// console.log('myList: ', myList);

/*
 * Complexity: What is the time complexity of the above functions?
 */
