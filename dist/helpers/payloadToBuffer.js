"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var payloadToBuffer = function payloadToBuffer(msg) {
  if (msg === null) {
    return null;
  }
  return Buffer.from(JSON.stringify(msg));
};
var _default = payloadToBuffer;
exports["default"] = _default;