"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = exports.createHashHistory = exports.createBrowserHistory = undefined;

var _router = require("./router");

Object.defineProperty(exports, "router", {
  enumerable: true,
  get: function get() {
    return _router.router;
  }
});

var _history = require("history");

var history = _interopRequireWildcard(_history);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var createBrowserHistory = exports.createBrowserHistory = history.createBrowserHistory;
var createHashHistory = exports.createHashHistory = history.createHashHistory;