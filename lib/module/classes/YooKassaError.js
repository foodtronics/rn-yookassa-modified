function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export class YooKassaError extends Error {
  constructor(code, message) {
    super(message);

    _defineProperty(this, "code", void 0);

    this.code = code;
  }

}
//# sourceMappingURL=YooKassaError.js.map