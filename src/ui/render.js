export function renderAll(state) {
  document.getElementById("stack").innerHTML =
    `<div class="box"><h2>Call Stack</h2>${
      state.stack.map(() => `<div class="item">fn</div>`).join("")
    }</div>`;

  document.getElementById("microtask").innerHTML =
    `<div class="box"><h2>Microtask</h2>${
      state.microtasks.map(() => `<div class="item">task</div>`).join("")
    }</div>`;

  document.getElementById("callback").innerHTML =
    `<div class="box"><h2>Callback</h2>${
      state.callbacks.map(() => `<div class="item">task</div>`).join("")
    }</div>`;

  document.getElementById("controls").innerHTML =
    `<button id="run">Run</button>
     <button id="step">Step</button>
     <button id="reset">Reset</button>`;

  document.getElementById("logs").innerHTML =
    `<h2>Logs</h2>${state.logs.map(l => `<div>${l}</div>`).join("")}`;
}