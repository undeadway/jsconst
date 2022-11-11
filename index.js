const root = {};

if (typeof(window) !== 'undefined') {
	
	function putObject(parent, names) {
		let name = names.shift();

		if (!name) return;

		if (!parent[name]) {
			let object = parent[name] = {};
			putObject(object, names);
		}
	};

	function getObject (parent, names) {
		let name = names.shift();
		if (!name) {
			return parent;
		} else {
			if (!parent[name]) { // 这里是为了防止 put 的时候没有 put 进去造成的错误
				parent[name] = {};
			}
			return getObject(parent[name], names);
		}
	}

	function read (now, parent) {

		const path = `${parent}/${now}/`;

		const _lib = require.context("./modules/.");
		_lib.keys().forEach(key => {

			let path = key.slice(2);

			/*
			 * 输出有四种模式：
			 * 文件夹
			 * 文件夹名/
			 * 文件夹/文件名
			 * 文件夹/文件名.js
			 * 
			 * 因为 文件夹名/ 和  文件夹/文件名.js 具有可判断性，所以保留，其余不做处理
			 */
			if (path.indexOf(".js") === path.length - 3) {
				let names = path.slice(0,  path.length - 3).split("/");
				let fileName = names.pop();
				let obj = getObject(root, names);
				obj[fileName] = _lib(key);
			} else if (path.indexOf("/") === path.length - 1) {
				let names = path.slice(0,  path.length - 1).split("/");

				putObject(root, names);
			}
		});
	}

	read("modules", ".");

	window.JsConst = root;
} else {

	const fs = require("fs");

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
	global.JsConst = root;
}
