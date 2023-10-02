/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;

    this.length++;

    return undefined;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (this.head === null) {
      newNode.next = null;
    } else {
      newNode.next = this.head;
    }

    this.head = newNode;

    if (this.tail === null) {
      this.tail = newNode;
    }

    this.length++;

    return undefined;

  }

  /** pop(): return & remove last item. */
  //[5, 10]
  pop() {
    if (!this.length) {
      throw new Error;
    } else if (this.head === this.tail) {
      let res = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return res;
    } else {
      let current = this.head;
      let prev = this.head;
      while (current.next !== null) {
        prev = current;
        current = current.next;
      }
      this.tail = prev;
      this.tail.next = null;
      this.length--;
      return current.val;
    }
  }


  /** shift(): return & remove first item. */

  shift() {
    if (this.head === null) {
      throw new Error;
    } else if (this.head === this.tail) {
      let res = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return res;
    } else {
      let res = this.head.val;
      this.head = this.head.next;
      this.length--;
      return res;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx > this.length - 1 || idx < 0) {
      throw new Error;
    } else {
      let count = 0;
      let currVal = this.head;

      while (count < idx) {
        count++;
        currVal = currVal.next;
      }
      return currVal.val;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx > this.length - 1 || idx < 0) {
      throw new Error;
    } else {
      let count = 0;
      let currVal = this.head;
      while (count < idx) {
        count++;
        currVal = currVal.next;
      }
      currVal.val = val;
    }

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0) {
      throw new Error;
    } else if (idx === 0) {
      this.unshift(val);
    } else if (idx === this.length) {
      this.push(val);
    } else {
      let count = 0;
      let afterVal = this.head;
      let beforeVal = this.head;
      while (count < idx) {
        beforeVal = afterVal;
        afterVal = afterVal.next;
        count++;
      }
      let newNode = new Node(val);
      beforeVal.next = newNode;
      newNode.next = afterVal;
      this.length++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx > this.length-1 || idx < 0) {
      throw new Error;
    } else if (idx === 0){
      return this.shift();
    } else if (idx === this.length-1){
      return this.pop();
    } else {
      let count = 0;
      let prevVal = this.head;
      let currVal = this.head;
      while(count < idx){
        prevVal = currVal;
        currVal = currVal.next;
        count++;
      }
      prevVal.next = currVal.next;
      this.length--;
      return currVal.val;
    }
  }

  /** average(): return an average of all values in the list */

  average() {

  }
}

module.exports = LinkedList;
