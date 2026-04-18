export function renderQueue(title, items) {
  return `
    <div class="box">
      <h2>${title}</h2>
      ${items.map(i => `<div class="item">${i.name || "task"}</div>`).join("")}
    </div>
  `;
}