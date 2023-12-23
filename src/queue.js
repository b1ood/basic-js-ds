//const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require("../extensions/list-node.js");\
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.end = null;
    this.start = null;
  }
  enqueue(value) {
    const newNode = new ListNode(value);

    if (!this.end) {
      this.end = newNode;
      this.start = newNode;
    } else {
      this.start.next = newNode;
      this.start = newNode;
    }

    return this.getUnderlyingList();
  }

  dequeue() {
    if (!this.end) {
      return null;
    }

    const removedValue = this.end.value;
    this.end = this.end.next;

    if (!this.end) {
      this.start = null;
    }

    return removedValue;
  }

  getUnderlyingList() {
    return this.end;
  }
}

module.exports = {
  Queue,
};