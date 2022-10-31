const fs = require("fs");

const root = {};

const isBroswer = typeof(window) !== 'undefined';
const that = isBroswer ? window : global;

if (isBroswer) {
    function read (parent, object) {
        const _lib = require.context(parent);
        _lib.keys().forEach(key => {
            console.log(key);

            // if (!lib[RegExp.$1]) {
            // 	lib[key.replace("./", "")] = _lib(key);
        });
    }

    read("./modules/", root);
} else {
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
                object[name] = fs.existsSync(index) ?  require(index) : {};
                read(fs.readdirSync(path), path, sub);
            }
        });
    }
    
    read(fs.readdirSync("./modules"), "./modules", root);
}

that.root = root;