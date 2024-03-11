// desktop/index.js
const { initRemix } = require("remix-electron");
const { app, BrowserWindow } = require("electron");
const { join } = require("node:path");

/** @type {BrowserWindow | undefined} */
let win;

app.on("ready", async () => {
  try {
    const url = await initRemix({
      serverBuild: join(__dirname, "../build/index.js"),
      publicFolder: join(__dirname, "../public"),
    });

    win = new BrowserWindow({ show: false });
    await win.loadURL(url);
    win.show();
  } catch (error) {
    console.error(error);
  }
});
