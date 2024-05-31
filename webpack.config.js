var path = require("path");

module.exports = {
	entry: { "jsconst": "./src/index.js" },
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js"
	},
	mode: 'development'
};