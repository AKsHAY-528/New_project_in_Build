export default class Scheduler {
  constructor(microtaskQueue, callbackQueue) {
    this.microtaskQueue = microtaskQueue;
    this.callbackQueue = callbackQueue;
  }

  scheduleMicrotask(task) {
    this.microtaskQueue.enqueue(task);
  }

  scheduleMacrotask(task) {
    this.callbackQueue.enqueue(task);
  }

  getNextTask() {
    if (!this.microtaskQueue.isEmpty()) {
      return this.microtaskQueue.dequeue();
    }
    if (!this.callbackQueue.isEmpty()) {
      return this.callbackQueue.dequeue();
    }
    return null;
  }
}