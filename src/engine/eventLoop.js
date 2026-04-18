export default class EventLoop {
  constructor(callStack, scheduler) {
    this.callStack = callStack;
    this.scheduler = scheduler;
  }

  tick() {
    if (this.callStack.isEmpty()) {
      const nextTask = this.scheduler.getNextTask();
      if (nextTask) {
        this.callStack.push(nextTask);
        return;
      }
    }

    const fn = this.callStack.pop();
    if (fn) fn();
  }
}