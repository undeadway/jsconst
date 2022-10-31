var path = require("path");

module.exports = {
	entry: { "jsconst": "./index.js" },
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js"
	},
	mode: 'development'
};