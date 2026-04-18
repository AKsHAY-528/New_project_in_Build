import { renderStack } from './components/stackView.js';
import { renderQueue } from './components/queueView.js';
import { renderControls } from './components/controls.js';
import { renderLog } from './components/logView.js';

export function renderAll(state) {
  document.getElementById("stack").innerHTML =
    renderStack(state.stack);

  document.getElementById("microtask").innerHTML =
    renderQueue("Microtask Queue", state.microtasks);

  document.getElementById("callback").innerHTML =
    renderQueue("Callback Queue", state.callbacks);

  document.getElementById("controls").innerHTML =
    renderControls();

  document.getElementById("logs").innerHTML =
    renderLog(state.logs);
}