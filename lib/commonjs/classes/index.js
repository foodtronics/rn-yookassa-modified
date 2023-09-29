"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _YooKassaError = require("./YooKassaError");

Object.keys(_YooKassaError).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _YooKassaError[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _YooKassaError[key];
    }
  });
});
//# sourceMappingURL=index.js.map