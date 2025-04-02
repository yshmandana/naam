const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile(path.join(__dirname, 'naam.html')); // Ensure it loads correctly
}

app.whenReady().then(createWindow);
