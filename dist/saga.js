"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _connetion = _interopRequireDefault(require("./connetion"));
var _parseMessage = _interopRequireDefault(require("./helpers/parseMessage"));
var _payloadToBuffer = _interopRequireDefault(require("./helpers/payloadToBuffer"));
var _msgActionValidator = _interopRequireDefault(require("./helpers/msgActionValidator"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Saga = /*#__PURE__*/function () {
  function Saga(channel, currentQueue, options) {
    var _this = this;
    _classCallCheck(this, Saga);
    _defineProperty(this, "putActionBuilder", function (queueName) {
      return function (action) {
        return _this.putToQueue(queueName, action);
      };
    });
    _defineProperty(this, "takeActionBuilder", function (queueName) {
      return function (actionName, cb) {
        var validator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
          return true;
        };
        return _this.takeFromQueue(queueName, cb, function (msg) {
          return (0, _msgActionValidator["default"])(msg, actionName) && validator(msg);
        });
      };
    });
    _defineProperty(this, "subscribeActionBuilder", function (queueName) {
      return function (actionName, cb) {
        var validator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
          return true;
        };
        return _this.subscribeToQueue(queueName, cb, function (msg) {
          return (0, _msgActionValidator["default"])(msg, actionName) && validator(msg);
        });
      };
    });
    _defineProperty(this, "takeFromCurrentQueue", function (actionName, cb) {
      var validator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return true;
      };
      return _this.takeActionBuilder(_this.currentQueue)(actionName, cb, validator);
    });
    _defineProperty(this, "subscribeToCurrentQueue", function (actionName, cb) {
      var validator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return true;
      };
      return _this.subscribeActionBuilder(_this.currentQueue)(actionName, cb, validator);
    });
    var pingPongLimit = options.pingPongLimit,
      responseTimeout = options.responseTimeout;
    this.channel = channel;
    this.pingPongLimit = pingPongLimit;
    this.responseTimeout = responseTimeout;
    this.currentQueue = currentQueue;
  }

  /**
   * It connects to RabbitMQ and returns a Saga object
   * @returns A Saga object
   */
  _createClass(Saga, [{
    key: "putToQueue",
    value:
    /**
     * It asserts that a queue exists, and then sends a message to that queue
     * @param queueName - The name of the queue to send the message to.
     * @param body - The data to be sent to the queue.
     * @returns The return value is a boolean indicating whether the message was sent to the queue.
     */
    function () {
      var _putToQueue = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(queueName, body) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.channel.assertQueue(queueName, {
                durable: true
              });
            case 2:
              return _context.abrupt("return", this.channel.sendToQueue(queueName, (0, _payloadToBuffer["default"])(body)));
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function putToQueue(_x, _x2) {
        return _putToQueue.apply(this, arguments);
      }
      return putToQueue;
    }()
    /**
     * It takes a queue name, a callback function, and a validator function, and returns a promise that resolves to the first
     * message that passes the validator
     * @param queueName - The name of the queue to take from
     * @param [cb] - a callback function that will be called when the message is received.
     * @param [validator] - a function that takes the payload and returns true if the message is valid.
     * @returns A promise that resolves to the payload of the message.
     */
  }, {
    key: "takeFromQueue",
    value: function () {
      var _takeFromQueue = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(queueName) {
        var _this2 = this;
        var cb,
          validator,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              cb = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : function () {
                return null;
              };
              validator = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : function () {
                return true;
              };
              _context2.next = 4;
              return this.channel.assertQueue(queueName, {
                durable: true
              });
            case 4:
              return _context2.abrupt("return", new Promise(function (resolve, reject) {
                _this2.channel.consume(queueName, function (msg) {
                  if (msg !== null) {
                    try {
                      var payload = (0, _parseMessage["default"])(msg);
                      if (validator(payload)) {
                        _this2.channel.ack(msg);
                        _this2.cancelSubscription(msg.fields.consumerTag).then(function () {
                          cb(payload);
                          resolve(payload);
                        });
                      }
                    } catch (error) {
                      reject(error);
                    }
                  }
                });
              }));
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function takeFromQueue(_x3) {
        return _takeFromQueue.apply(this, arguments);
      }
      return takeFromQueue;
    }()
    /**
     * It subscribes to a queue, and when a message is received, it validates the message and if it's valid, it calls the
     * subscriber function with the message payload
     * @param queueName - The name of the queue to subscribe to.
     * @param [subscriber] - a function that will be called when a message is received.
     * @param [validator] - a function that takes the payload and returns true if the message is valid and should be
     * processed.
     * @returns A promise that resolves to a consumer tag.
     */
  }, {
    key: "subscribeToQueue",
    value: function () {
      var _subscribeToQueue = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(queueName) {
        var subscriber,
          validator,
          _args3 = arguments;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              subscriber = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : function () {
                return null;
              };
              validator = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : function () {
                return true;
              };
              _context3.next = 4;
              return this.channel.assertQueue(queueName, {
                durable: true
              });
            case 4:
              return _context3.abrupt("return", this.channel.consume(queueName, function (msg) {
                if (msg !== null) {
                  try {
                    var payload = (0, _parseMessage["default"])(msg);
                    if (validator(payload)) {
                      channel.ack(msg);
                      subscriber(payload, msg.fields.consumerTag);
                    }
                  } catch (error) {
                    console.error(error);
                  }
                }
              }));
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function subscribeToQueue(_x4) {
        return _subscribeToQueue.apply(this, arguments);
      }
      return subscribeToQueue;
    }()
  }, {
    key: "cancelSubscription",
    value: function () {
      var _cancelSubscription = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(consumerTag) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", this.channel.cancel(consumerTag));
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function cancelSubscription(_x5) {
        return _cancelSubscription.apply(this, arguments);
      }
      return cancelSubscription;
    }()
    /* It's a function that takes a queue name and returns a function that takes an action and a payload and returns a
    message. */
  }], [{
    key: "build",
    value: function () {
      var _build = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(url, currentQueue, _ref) {
        var connectionOptions, _ref$pingPongLimit, pingPongLimit, _ref$responseTimeout, responseTimeout, _yield$connect, channel;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              connectionOptions = _ref.connectionOptions, _ref$pingPongLimit = _ref.pingPongLimit, pingPongLimit = _ref$pingPongLimit === void 0 ? 10 : _ref$pingPongLimit, _ref$responseTimeout = _ref.responseTimeout, responseTimeout = _ref$responseTimeout === void 0 ? 1000 : _ref$responseTimeout;
              _context5.next = 3;
              return (0, _connetion["default"])({
                url: url,
                connectionOptions: connectionOptions
              });
            case 3:
              _yield$connect = _context5.sent;
              channel = _yield$connect.channel;
              if (channel) {
                _context5.next = 7;
                break;
              }
              throw new Error("Could not connect to RabbitMQ");
            case 7:
              return _context5.abrupt("return", new Saga(channel, currentQueue, {
                pingPongLimit: pingPongLimit,
                responseTimeout: responseTimeout
              }));
            case 8:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function build(_x6, _x7, _x8) {
        return _build.apply(this, arguments);
      }
      return build;
    }()
  }]);
  return Saga;
}();
var _default = Saga;
exports["default"] = _default;