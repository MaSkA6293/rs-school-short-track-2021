const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
    this.last = null;
    this.length = 0;
  }

  get size() {
    throw new Error('Not implemented');
  }

  enqueue(element) {
    const node = new ListNode(element);
    if (this.head) {
      this.last.next = node;
      this.last = node;
    } else {
      this.head = node;
      this.last = node;
    }
    this.length++;
  }

  dequeue() {
    const val = this.head.value;
    this.head = this.head.next;
    return val;
  }
}

module.exports = Queue;
