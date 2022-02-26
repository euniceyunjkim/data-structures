var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //identify current tail in linkedlist
    if (list.tail !== null) {
      var currentTail = list.tail;
      list.tail = Node(value);
      currentTail.next = list.tail;
    } else {
      list.tail = Node(value);
    }
    //create new Node and assign to list.tail
    //reassign prev tail to point to new tail for node.next

    //check if head exists, if not assign to same node as tail
    if (list.head === null) {
      list.head = list.tail;
    }
    // take in value and add to tail
  };

  list.removeHead = function() {
    // removes first node from list and return value

    if (list.head !== null) {
      var removed = list.head;
      list.head = removed.next;
      return removed.value;
    }

  };

  list.contains = function(target) {
    // returns boolean reflecting if passed in value is in linked list
    var curNode = list.head;

    while (curNode) {
      if (curNode.value === target) {
        return true;
      }
      curNode = curNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

