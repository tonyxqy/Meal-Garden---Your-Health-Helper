(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["page_upload/common/vendor"],{

/***/ 210:
/*!**************************************************************!*\
  !*** C:/Users/DELL/-health/wxcomponents/vant/toast/toast.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _validator = __webpack_require__(/*! ../common/validator */ 211);
var defaultOptions = {
  type: 'text',
  mask: false,
  message: '',
  show: true,
  zIndex: 1000,
  duration: 2000,
  position: 'middle',
  forbidClick: false,
  loadingType: 'circular',
  selector: '#van-toast' };

var queue = [];
var currentOptions = Object.assign({}, defaultOptions);
function parseOptions(message) {
  return (0, _validator.isObj)(message) ? message : { message: message };
}
function getContext() {
  var pages = getCurrentPages();
  return pages[pages.length - 1];
}
function Toast(toastOptions) {
  var options = Object.assign(Object.assign({}, currentOptions), parseOptions(toastOptions));
  var context = options.context || getContext();
  var toast = context.selectComponent(options.selector);
  if (!toast) {
    console.warn('未找到 van-toast 节点，请确认 selector 及 context 是否正确');
    return;
  }
  delete options.context;
  delete options.selector;
  toast.clear = function () {
    toast.setData({ show: false });
    if (options.onClose) {
      options.onClose();
    }
  };
  queue.push(toast);
  toast.setData(options);
  clearTimeout(toast.timer);
  if (options.duration != null && options.duration > 0) {
    toast.timer = setTimeout(function () {
      toast.clear();
      queue = queue.filter(function (item) {return item !== toast;});
    }, options.duration);
  }
  return toast;
}
var createMethod = function createMethod(type) {return function (options) {return Toast(Object.assign({ type: type }, parseOptions(options)));};};
Toast.loading = createMethod('loading');
Toast.success = createMethod('success');
Toast.fail = createMethod('fail');
Toast.clear = function () {
  queue.forEach(function (toast) {
    toast.clear();
  });
  queue = [];
};
Toast.setDefaultOptions = function (options) {
  Object.assign(currentOptions, options);
};
Toast.resetDefaultOptions = function () {
  currentOptions = Object.assign({}, defaultOptions);
};var _default =
Toast;exports.default = _default;

/***/ }),

/***/ 211:
/*!*******************************************************************!*\
  !*** C:/Users/DELL/-health/wxcomponents/vant/common/validator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.isFunction = isFunction;exports.isPlainObject = isPlainObject;exports.isPromise = isPromise;exports.isDef = isDef;exports.isObj = isObj;exports.isNumber = isNumber;exports.isBoolean = isBoolean;exports.isImageUrl = isImageUrl;exports.isVideoUrl = isVideoUrl; // eslint-disable-next-line @typescript-eslint/ban-types
function isFunction(val) {
  return typeof val === 'function';
}
function isPlainObject(val) {
  return val !== null && typeof val === 'object' && !Array.isArray(val);
}
function isPromise(val) {
  return isPlainObject(val) && isFunction(val.then) && isFunction(val.catch);
}
function isDef(value) {
  return value !== undefined && value !== null;
}
function isObj(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}
function isNumber(value) {
  return /^\d+(\.\d+)?$/.test(value);
}
function isBoolean(value) {
  return typeof value === 'boolean';
}
var IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
var VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i;
function isImageUrl(url) {
  return IMAGE_REGEXP.test(url);
}
function isVideoUrl(url) {
  return VIDEO_REGEXP.test(url);
}

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/page_upload/common/vendor.js.map