/** Class representing a Stack. */

class Stack {

  constructor() {
    this._storage = {}; // {1: a, 2: b}
    this._length = 0;
  }
  /*
  * Adds a new value at the end of the 
  * stack
  * @param {*} value the value to push
  */
  push(value) {
    this._storage[this._length] = value;
    this._length++;
  }

  /*
  * Removes the value at the end of the stack and returns it
  * @return {*} the last and newest value in the stack
  */
  pop() {
    if (this._length) {
      const lastVal = this._storage[this._length - 1];
      delete this._storage[this._length - 1];
      this._length--;
      return lastVal;
    }
  }
  /*
  * Returns the value at the end of the stack without removing it
  * @return {*} the last and newest value in the stack
  */
  peek() {
    return this._storage[this._length - 1];
  }
}

let a = new Stack();
a.push('bee');
a.push('dee');
// a.pop()
const b = a.peek();

console.log(b);
