const fs = require("fs");

const root = {};

function read (modules, parent, object) {
    modules.map(module => {
        let path = `${parent}/${module}`;
        let stat = fs.statSync(path);
        let name = module.split(".")[0];
        
        if (stat.isFile()) {
            if (module === "index.js") return;
            object[name] = require(path);
        } else if (stat.isDirectory()) {
            let index = `${path}/index.js`;
            let sub = object[name] = fs.existsSync(index) ?  require(index) : {};
            read(fs.readdirSync(path), path, sub);
        }
    });
}

read(fs.readdirSync(__dirname + "/modules"), __dirname + "/modules", root);

if (typeof(window) !== 'undefined') {
    window.JsConst = root;
} else {
    global.JsConst = root;
}
