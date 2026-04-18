export default class SimulatorController {
  constructor(callStack, scheduler, log) {
    this.callStack = callStack;
    this.scheduler = scheduler;
    this.log = log;
  }

  logMessage(msg) {
    this.log.push(msg);
  }

  simulateSetTimeout(fn) {
    this.scheduler.scheduleMacrotask(fn);
  }

  simulatePromise(fn) {
    this.scheduler.scheduleMicrotask(fn);
  }

  reset() {
    this.callStack.clear();
    this.scheduler.microtaskQueue.clear();
    this.scheduler.callbackQueue.clear();
    this.log.length = 0;
  }
}