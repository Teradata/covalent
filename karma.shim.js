if (window.top.process) {
  window.require = window.top.require;
  window.process = window.top.process;
  window.__dirname = window.top.__dirname;
  require("module").globalPaths.push("./node_modules");

  // read in electron-load.js
  var fs = require('fs');
  var electron = require('electron');
  electron.remote.process.env.TESTING = "true";
  //eval(fs.readFileSync('./src/electron-load.js')+'');

  electron.remote.process.env.NODE_MODULE_DIR = process.env['NODE_MODULE_DIR'];
}