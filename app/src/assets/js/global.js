const ipc = require("electron").ipcRenderer;

window.addEventListener('load', () => {
  ipc.send('version');
  ipc.on('version', (e, data) => {
    document.getElementById('app-version').innerText += ' ' + data;
  });
});