const { JSDOM } = require("jsdom");
const { window } = new JSDOM("");

global.window = window;

require("./index");