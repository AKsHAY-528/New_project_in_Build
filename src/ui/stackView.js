export function renderStack(stack) {
  return `
    <div class="box">
      <h2>Call Stack</h2>
      ${stack.map(i => `<div class="item">${i.name || "fn"}</div>`).join("")}
    </div>
  `;
}