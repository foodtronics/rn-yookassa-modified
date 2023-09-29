"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tokenize = require("./tokenize");

Object.keys(_tokenize).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _tokenize[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _tokenize[key];
    }
  });
});

var _confirmPayment = require("./confirmPayment");

Object.keys(_confirmPayment).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _confirmPayment[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _confirmPayment[key];
    }
  });
});

var _dismiss = require("./dismiss");

Object.keys(_dismiss).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _dismiss[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _dismiss[key];
    }
  });
});
//# sourceMappingURL=index.js.map