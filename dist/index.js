'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Throttle with Request animation frame
exports.default = function (type, callback) {
  var ticking = false;
  var cb = function cb(event) {
    if (ticking) return;
    ticking = true;
    (0, _raf2.default)(function () {
      callback();
      ticking = false;
    });
  };
  window.addEventListener(type, cb);
};