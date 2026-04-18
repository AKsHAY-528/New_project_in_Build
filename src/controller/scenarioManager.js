export function basicScenario(controller) {
  controller.callStack.push(() => {
    controller.logMessage("Start");

    controller.simulateSetTimeout(() => {
      controller.logMessage("Timeout");
    });

    controller.simulatePromise(() => {
      controller.logMessage("Promise");
    });

    controller.logMessage("End");
  });
}