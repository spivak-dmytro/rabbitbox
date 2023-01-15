"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * If the message is an object, and it has an action property that matches the actionName parameter, then return true.
 * @param msg - The message that was sent to the bot.
 * @param actionName - The name of the action to validate against.
 */
var msgActionValidator = function msgActionValidator(msg, actionName) {
  return _typeof(msg) === 'object' && msg !== null && msg.action === actionName;
};
var _default = msgActionValidator;
exports["default"] = _default;