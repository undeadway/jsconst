
// String
if (!String.BINARY) {
	Object.defineProperty(String, "BINARY", {
		get: () => {
			return "binary";
		}
	});
	Object.defineProperty(String, "BLANK", {
		get: () => {
			return "";
		}
	});
}


// 数组
if (!Array.TYPE_NAME) {
	Object.defineProperty(Array, "TYPE_NAME", {
		get: () => {
			return "array";
		}
	});
}
// Boolean
if (!Boolean.TYPE_NAME) {
	Object.defineProperty(Boolean, "TYPE_NAME", {
		get: () => {
			return "boolean";
		}
	});
}
// 错误
if (!Error.TYPE_NAME) {
	Object.defineProperty(Error, "TYPE_NAME", {
		get: () => {
			return "error";
		}
	});
}
// 函数
if (!Function.TYPE_NAME) {
	Object.defineProperty(Function, "TYPE_NAME", {
		get: () => {
			return "function";
		}
	});
}
// 字符串
if (!String.TYPE_NAME) {
	Object.defineProperty(String, "TYPE_NAME", {
		get: () => {
			return "string";
		}
	});
}
// 正则表达式
if (!RegExp.TYPE_NAME) {
	Object.defineProperty(RegExp, "TYPE_NAME", {
		get: () => {
			return "regexp";
		}
	});
}
// 日期
if (!Date.TYPE_NAME) {
	Object.defineProperty(Date, "TYPE_NAME", {
		get: () => {
			return "date";
		}
	});
}
// 数字
if (!Number.TYPE_NAME) {
	Object.defineProperty(Number, "TYPE_NAME", {
		get: () => {
			return "number";
		}
	});
}
// 数字 - NaN
if (!Number.NaN_TYPE_NAME) {
	Object.defineProperty(Number, "NaN_TYPE_NAME", {
		get: () => {
			return "NaN";
		}
	});
}
// 数字 无限大
if (!Number.Infinity_TYPE_NAME) {
	Object.defineProperty(Number, "Infinity_TYPE_NAME", {
		get: () => {
			return "Infinity";
		}
	});
}
// Object
if (!Object.TYPE_NAME) {
	Object.defineProperty(Object, "TYPE_NAME", {
		get: () => {
			return "object";
		}
	});
}

//  ES6 新增
if (Set && !Array.TYPE_NAME) {
	Object.defineProperty(Set, "TYPE_NAME", {
		get: () => {
			return "set";
		}
	});
}
if (WeakSet && !WeakSet.TYPE_NAME) {
	Object.defineProperty( WeakSet, "TYPE_NAME", {
		get: () => {
			return "weakset";
		}
	});
}
if (Map && !Map.TYPE_NAME) {
	Object.defineProperty(Map, "TYPE_NAME", {
		get: () => {
			return "set";
		}
	});
}
if (WeakMap && !WeakMap.TYPE_NAME) {
	Object.defineProperty( WeakMap, "TYPE_NAME", {
		get: () => {
			return "weakset";
		}
	});
}
if (Symbol && !Symbol.TYPE_NAME) {
	Object.defineProperty(Symbol, "TYPE_NAME", {
		get: () => {
			return "symbol";
		}
	});
}