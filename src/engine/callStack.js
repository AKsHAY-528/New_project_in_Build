export default class CallStack {
  constructor() {
    this.stack = [];
  }

  push(fn) {
    this.stack.push(fn);
  }

  pop() {
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  getAll() {
    return [...this.stack].reverse();
  }

  clear() {
    this.stack = [];
  }
}