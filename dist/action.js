"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _uuidv = require("uuidv4");
var _lodash = require("lodash");
var _actionStatuses = _interopRequireDefault(require("./constants/actionStatuses"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _waitForResponse = /*#__PURE__*/new WeakSet();
var _omitFields = /*#__PURE__*/new WeakSet();
var _sendResponse = /*#__PURE__*/new WeakSet();
var Action = /*#__PURE__*/function () {
  function Action(saga, queue, name, _payload) {
    var previousAction = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    _classCallCheck(this, Action);
    _classPrivateMethodInitSpec(this, _sendResponse);
    _classPrivateMethodInitSpec(this, _omitFields);
    _classPrivateMethodInitSpec(this, _waitForResponse);
    if (!saga || !saga.channel) {
      throw new Error("Don't use the constructor directly. Use [Saga instance].createAction() or [Action instance].nextAction() instead.");
    }
    this.id = (0, _uuidv.uuid)();
    this.saga = saga;
    this.queue = queue;
    this.name = name;
    this.payload = _payload;
    this.previousAction = previousAction;
    this.status = _actionStatuses["default"].PENDING;
    this.responseQueue = this.saga.currentQueue;
  }

  /**
   * It subscribes to the response queue, and waits for a response to the action with the given id. If the response is
   * successful, it calls the onSuccessfulResponse function, and if it's a failure, it calls the onFailedResponse function
   * @param actionName - The name of the action you're waiting for a response for.
   * @param onSuccessfulResponse - a function that will be called if the response is successful.
   * @param onFailedResponse - A function that will be called if the response action has a status of FAILURE.
   */
  _createClass(Action, [{
    key: "nextAction",
    value:
    /**
     * It creates a new action (as new link), sends it to the queue, and returns the response
     * @param queueName - The name of the queue to send the action to.
     * @param actionName - The name of the action you want to send.
     * @param payload - The payload of the action.
     * @param [onSuccessfulResponse] - A callback function that will be called when the action is successfully processed.
     * @param [onFailedResponse] - A callback function that will be called if the response from the server is not successful.
     * @returns A promise.
     */
    function () {
      var _nextAction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(queueName, actionName, payload) {
        var onSuccessfulResponse,
          onFailedResponse,
          newAction,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              onSuccessfulResponse = _args.length > 3 && _args[3] !== undefined ? _args[3] : function () {
                return null;
              };
              onFailedResponse = _args.length > 4 && _args[4] !== undefined ? _args[4] : function () {
                return null;
              };
              newAction = new Action(this.saga, queueName, actionName, payload, _classPrivateMethodGet(this, _omitFields, _omitFields2).call(this));
              return _context.abrupt("return", newAction.send(onSuccessfulResponse, onFailedResponse));
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function nextAction(_x, _x2, _x3) {
        return _nextAction.apply(this, arguments);
      }
      return nextAction;
    }()
    /**
     * > It sends the action to the queue, and then waits for a response
     * @param [onSuccessfulResponse] - a callback function that will be called when the response is received.
     * @param [onFailedResponse] - a callback function that will be called when the response is received and it's a failed
     * response.
     * @returns The instance of the class.
     */
  }, {
    key: "send",
    value: function () {
      var _send = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var onSuccessfulResponse,
          onFailedResponse,
          putAction,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              onSuccessfulResponse = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : function () {
                return null;
              };
              onFailedResponse = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : function () {
                return null;
              };
              putAction = this.saga.putActionBuilder(this.queue);
              _context2.next = 5;
              return putAction(_classPrivateMethodGet(this, _omitFields, _omitFields2).call(this));
            case 5:
              _context2.next = 7;
              return _classPrivateMethodGet(this, _waitForResponse, _waitForResponse2).call(this, this.name, onSuccessfulResponse, onFailedResponse);
            case 7:
              return _context2.abrupt("return", this);
            case 8:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function send() {
        return _send.apply(this, arguments);
      }
      return send;
    }()
    /**
     * It creates a new action, sets the status, and sends it to the response queue
     * @param payload - The payload to send to the response queue.
     * @param status - The status of the response.
     * @returns A promise that resolves to the response from the saga.
     */
  }, {
    key: "success",
    value:
    /**
     * It returns a response object with the payload and status set to success
     * @param payload - The data you want to send back to the client.
     * @returns the result of the #sendResponse function.
     */
    function () {
      var _success = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(payload) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", _classPrivateMethodGet(this, _sendResponse, _sendResponse2).call(this, payload, _actionStatuses["default"].SUCCESS));
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function success(_x4) {
        return _success.apply(this, arguments);
      }
      return success;
    }()
    /**
     * It takes a payload and a status, and sends a response to the client
     * @param payload - The data you want to send back to the client.
     * @returns the result of the #sendResponse function.
     */
  }, {
    key: "failure",
    value: function () {
      var _failure = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(payload) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", _classPrivateMethodGet(this, _sendResponse, _sendResponse2).call(this, payload, _actionStatuses["default"].FAILURE));
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function failure(_x5) {
        return _failure.apply(this, arguments);
      }
      return failure;
    }()
  }]);
  return Action;
}();
function _waitForResponse2(_x6, _x7, _x8) {
  return _waitForResponse3.apply(this, arguments);
}
function _waitForResponse3() {
  _waitForResponse3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(actionName, onSuccessfulResponse, onFailedResponse) {
    var _this = this;
    var subscribeAction, consTag;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          subscribeAction = this.saga.subscribeActionBuilder(this.responseQueue);
          _context7.next = 3;
          return subscribeAction(actionName, /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(action, consumerTag) {
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!(action.previousAction.id === _this.id)) {
                      _context5.next = 11;
                      break;
                    }
                    if (!(action.status === _actionStatuses["default"].SUCCESS)) {
                      _context5.next = 6;
                      break;
                    }
                    _context5.next = 4;
                    return onSuccessfulResponse(action);
                  case 4:
                    _context5.next = 9;
                    break;
                  case 6:
                    if (!(action.status === _actionStatuses["default"].FAILURE)) {
                      _context5.next = 9;
                      break;
                    }
                    _context5.next = 9;
                    return onFailedResponse(action);
                  case 9:
                    _context5.next = 11;
                    return _this.saga.cancelSubscription(consumerTag);
                  case 11:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5);
            }));
            return function (_x11, _x12) {
              return _ref.apply(this, arguments);
            };
          }());
        case 3:
          consTag = _context7.sent;
          setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return _this.saga.cancelSubscription(consTag);
                case 2:
                case "end":
                  return _context6.stop();
              }
            }, _callee6);
          })), this.saga.responseTimeout);
        case 5:
        case "end":
          return _context7.stop();
      }
    }, _callee7, this);
  }));
  return _waitForResponse3.apply(this, arguments);
}
function _omitFields2() {
  return (0, _lodash.omit)(this, ['id, name, payload, previousAction, status, responseQueue']);
}
function _sendResponse2(_x9, _x10) {
  return _sendResponse3.apply(this, arguments);
}
function _sendResponse3() {
  _sendResponse3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(payload, status) {
    var newAction;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          newAction = new Action(this.saga, this.name, payload, _classPrivateMethodGet(this, _omitFields, _omitFields2).call(this));
          newAction.status = status;
          return _context8.abrupt("return", newAction.send(this.responseQueue));
        case 3:
        case "end":
          return _context8.stop();
      }
    }, _callee8, this);
  }));
  return _sendResponse3.apply(this, arguments);
}
var _default = Action;
exports["default"] = _default;