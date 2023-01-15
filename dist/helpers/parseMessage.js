"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var parseMessage = function parseMessage(msg) {
  if (msg === null) {
    return null;
  }
  return JSON.parse(msg.content.toString());
};
var _default = parseMessage;
exports["default"] = _default;