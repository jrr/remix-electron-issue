// desktop/index.js
import { initRemix } from "remix-electron";
import { app, BrowserWindow } from "electron";
import { join } from "node:path";
import * as url from "url";
// https://blog.logrocket.com/alternatives-dirname-node-js-es-modules/
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

/** @type {BrowserWindow | undefined} */
let win;

app.on("ready", async () => {
  try {
    const url = await initRemix({
      serverBuild: join(__dirname, "../build/index.js"),
    });

    win = new BrowserWindow({ show: false });
    await win.loadURL(url);
    win.show();
  } catch (error) {
    console.error(error);
  }
});
