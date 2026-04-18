import CallStack from './src/engine/callStack.js';
import TaskQueue from './src/engine/taskQueue.js';
import Scheduler from './src/engine/scheduler.js';
import EventLoop from './src/engine/eventLoop.js';
import SimulatorController from './src/controller/simulatorController.js';
import { basicScenario } from './src/controller/scenarioManager.js';
import { renderAll } from './src/ui/render.js';

const callStack = new CallStack();
const microtaskQueue = new TaskQueue("microtask");
const callbackQueue = new TaskQueue("callback");

const scheduler = new Scheduler(microtaskQueue, callbackQueue);
const log = []; 

const controller = new SimulatorController(callStack, scheduler, log);
const eventLoop = new EventLoop(callStack, scheduler);

function updateUI() {
  console.log("Rendering UI");

  renderAll({
    stack: callStack.getAll(),
    microtasks: microtaskQueue.getAll(),
    callbacks: callbackQueue.getAll(),
    logs: log
  });

  attachEvents();
}

function attachEvents() {
  document.getElementById("run").onclick = () => {
    basicScenario(controller);
    updateUI();
  };

  document.getElementById("step").onclick = () => {
    eventLoop.tick();
    updateUI();
  };

  document.getElementById("reset").onclick = () => {
    controller.reset();
    updateUI();
  };
}

updateUI();