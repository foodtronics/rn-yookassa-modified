"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tokenize = tokenize;

var _reactNative = require("react-native");

var _classes = require("../classes");

const RnYookassa = _reactNative.NativeModules.RnYookassa;

function tokenize(params) {
  return new Promise((resolve, reject) => {
    RnYookassa.tokenize(params, (result, error) => {
      if (result) {
        resolve(result);
      } else {
        if (error) {
          reject(new _classes.YooKassaError(error.code, error.message));
        } else {
          reject();
        }
      }
    });
  });
}
//# sourceMappingURL=tokenize.js.map