"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.confirmPayment = confirmPayment;

var _reactNative = require("react-native");

var _classes = require("../classes");

const RnYookassa = _reactNative.NativeModules.RnYookassa;

function confirmPayment(params) {
  return new Promise((resolve, reject) => {
    RnYookassa.confirmPayment(params, (result, error) => {
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
//# sourceMappingURL=confirmPayment.js.map