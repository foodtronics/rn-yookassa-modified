"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dismiss = dismiss;

var _reactNative = require("react-native");

const RnYookassa = _reactNative.NativeModules.RnYookassa;

function dismiss() {
  RnYookassa.dismiss();
}
//# sourceMappingURL=dismiss.js.map