export default class TaskQueue {
  constructor(type) {
    this.queue = [];
    this.type = type;
  }

  enqueue(task) {
    this.queue.push(task);
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  getAll() {
    return [...this.queue];
  }

  clear() {
    this.queue = [];
  }
}