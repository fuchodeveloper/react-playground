/** Class representing a Queue. */

class Queue {

  constructor() {
    this._storage = {};
    this._length = 0;
    this._headIndex = 0;
  }
  /*
  * Enqueues a new value at the end 
  * of the queue
  * @param {*} value - the value to 
  * enqueue
  */
  enqueue(value) {
    this._storage[this._length] = value;
    this._length++;
  }

  /*
  * Dequeues the value from the beginning of the queue and returns it
  * @return {*} the first and oldest value in the queue
  */
  dequeue() {
    return this._storage[0];

  }
  /*
  * Returns the value at the beginning of the queue without removing it from the queue
  * @return {*} value the first and oldest value in the queue
  */
  peek() {

  }
}

let queue = new Queue();
queue.enqueue('first');
queue.enqueue('second');

// let b = queue.dequeue();

console.log(queue);
