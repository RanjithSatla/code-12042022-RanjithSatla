const { parseURI, parseJSON } = require("./body-parser");
exports.middlewares = [parseURI, parseJSON];
