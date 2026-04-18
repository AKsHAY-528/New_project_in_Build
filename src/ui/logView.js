export function renderLog(logs) {
  return `
    <div>
      <h2>Logs</h2>
      ${logs.map(l => `<div>${l}</div>`).join("")}
    </div>
  `;
}