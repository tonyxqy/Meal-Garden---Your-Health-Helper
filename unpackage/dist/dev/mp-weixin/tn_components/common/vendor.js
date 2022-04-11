(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["tn_components/common/vendor"],{

/***/ 280:
/*!**************************************************************!*\
  !*** C:/Users/DELL/-health/components/QS-SharePoster/app.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {var _log = console.log; // 如果在项目的APP.vue文件中的onlaunch中设置 console.log = ()=> {} 则在此也不会有打印信息
// log = ()=>{};	// 打开注释则该插件不会打印任何信息
var _app = {
  //交互控制
  log: function log(t) {
    _log(t);
  }, // 打印控制,
  showLoading: function showLoading(msg, ifmask) {
    uni.showLoading({
      title: msg,
      mask: ifmask || false });

  },
  hideLoading: function hideLoading() {
    uni.hideLoading();
  },
  showToast: function showToast(msg, icon) {
    uni.showToast({
      title: msg,
      icon: icon || 'none' });

  },
  getPosterUrl: function getPosterUrl(objs) {// 后端获取背景图的url路径方法
    var
    backgroundImage =


    objs.backgroundImage,type = objs.type,formData = objs.formData;
    return new Promise(function (rs, rj) {
      var image;
      if (backgroundImage) {
        image = backgroundImage;
      } else {
        switch (type) {//根据type获取背景图, 一般要改成request获取
          case 1:
            image = '';
            break;
          default:
            image = '/static/1.png';
            break;}

      }
      if (image) {
        rs(image); // resolve图片的路径
      } else {
        rj('背景图片路径不存在');
      }
    });
  },






  //下面一般不用动他
  shareTypeListSheetArray: {
    array: [0, 1, 2, 3, 4, 5] },
  // 分享类型 0-图文链接 1-纯文字 2-纯图片 3-音乐 4-视频 5-小程序
  isArray: function isArray(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  },
  isObject: function isObject(arg) {
    return Object.prototype.toString.call(arg) === '[object Object]';
  },
  isPromise: function isPromise(obj) {
    return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
  },
  isNull: function isNull(arg) {
    return arg === null;
  },
  isUndefined: function isUndefined(arg) {
    return arg === undefined;
  },
  isUndef: function isUndef(arg) {
    return arg === undefined;
  },
  isNotNull_string: function isNotNull_string(arg) {
    return arg !== null && arg !== undefined && arg !== '';
  },
  isFn: function isFn(fn) {
    return fn && typeof fn === 'function';
  },
  getStorage: function getStorage(key, scb, fcb) {
    uni.getStorage({
      key: key,
      success: function success(res) {
        if (res.data && res.data != "") {
          if (scb) scb(res.data);
        } else {
          if (fcb) fcb();
        }
      },
      fail: function fail() {
        if (fcb) fcb();
      } });

  },
  setStorage: function setStorage(key, data) {
    _log('设置缓存');
    _log('key：' + key);
    _log('data：' + JSON.stringify(data));
    uni.setStorage({
      key: key,
      data: data });

  },
  setStorageSync: function setStorageSync(key, data) {
    uni.setStorageSync(key, data);
  },
  getStorageSync: function getStorageSync(key) {
    return uni.getStorageSync(key);
  },
  clearStorageSync: function clearStorageSync() {
    uni.clearStorageSync();
  },
  removeStorageSync: function removeStorageSync(key) {
    uni.removeStorageSync(key);
  },
  getImageInfo: function getImageInfo(url, cb, fcb) {
    url = checkMPUrl(url);
    uni.getImageInfo({
      src: url,
      success: function success(res) {
        if (cb && typeof cb == 'function') cb(res);
      },
      fail: function fail(err) {
        if (fcb && typeof fcb == 'function') fcb(err);
      } });

  },
  downloadFile: function downloadFile(url, cb) {
    url = checkMPUrl(url);
    uni.downloadFile({
      url: url,
      success: function success(res) {
        if (cb && typeof cb == 'function') cb(res);
      } });

  },
  downloadFile_PromiseFc: function downloadFile_PromiseFc(url) {
    return new Promise(function (rs, rj) {
      if (url.substring(0, 4) !== 'http') {
        rs(url);
      } else {
        url = checkMPUrl(url);
        _log('url:' + url);
        uni.downloadFile({
          url: url,
          success: function success(res) {
            if (res && res.tempFilePath)
            rs(res.tempFilePath);else

            rj('not find tempFilePath');
          },
          fail: function fail(err) {
            rj(err);
          } });

      }
    });
  },
  saveFile: function saveFile(url) {
    uni.saveFile({
      tempFilePath: url,
      success: function success(res) {
        _log('保存成功:' + JSON.stringify(res));
      } });

  },
  downLoadAndSaveFile_PromiseFc: function downLoadAndSaveFile_PromiseFc(url) {
    return new Promise(function (rs, rj) {
      _log('准备下载并保存图片:' + url);
      if (url.substring(0, 4) === 'http') {
        url = checkMPUrl(url);
        uni.downloadFile({
          url: url,
          success: function success(d_res) {
            _log('下载背景图成功：' + JSON.stringify(d_res));
            if (d_res && d_res.tempFilePath) {






              uni.saveFile({
                tempFilePath: d_res.tempFilePath,
                success: function success(s_res) {
                  _log('保存背景图成功:' + JSON.stringify(s_res));
                  if (s_res && s_res.savedFilePath)
                  rs(s_res.savedFilePath);else

                  rs(d_res.tempFilePath);
                },
                fail: function fail(err) {
                  rs(d_res.tempFilePath);
                } });



            } else {
              rj('not find tempFilePath');
            }
          },
          fail: function fail(err) {
            rj(err);
          } });

      } else {
        rs(url);
      }
    });
  },
  checkFile_PromiseFc: function checkFile_PromiseFc(url) {
    return new Promise(function (rs, rj) {
      uni.getSavedFileList({
        success: function success(res) {
          var d = res.fileList;
          var index = d.findIndex(function (item) {
            return item.filePath === url;
          });
          rs(index);
        },
        fail: function fail(err) {
          rj(err);
        } });

    });
  },
  removeSavedFile: function removeSavedFile(path) {
    uni.getSavedFileList({
      success: function success(res) {
        var d = res.fileList;
        var index = d.findIndex(function (item) {
          return item.filePath === path;
        });
        if (index >= 0)
        uni.removeSavedFile({
          filePath: path });

      } });

  },
  fileNameInPath: function fileNameInPath(path) {
    var s = path.split("/");
    return s[s.length - 1];
  },
  getImageInfo_PromiseFc: function getImageInfo_PromiseFc(imgPath) {
    return new Promise(function (rs, rj) {
      _log('准备获取图片信息:' + imgPath);
      imgPath = checkMPUrl(imgPath);
      uni.getImageInfo({
        src: imgPath,
        success: function success(res) {
          _log('获取图片信息成功:' + JSON.stringify(res));
          rs(res);
        },
        fail: function fail(err) {
          _log('获取图片信息失败:' + JSON.stringify(err));
          rj(err);
        } });

    });
  },
  previewImage: function previewImage(urls) {
    if (typeof urls == 'string')
    urls = [urls];
    uni.previewImage({
      urls: urls });

  },
  actionSheet: function actionSheet(obj, cb) {
    var sheetArray = [];
    for (var i = 0; i < obj.array.length; i++) {
      switch (obj.array[i]) {
        case 'sinaweibo':
          sheetArray[i] = '新浪微博';
          break;
        case 'qq':
          sheetArray[i] = 'QQ';
          break;
        case 'weixin':
          sheetArray[i] = '微信';
          break;
        case 'WXSceneSession':
          sheetArray[i] = '微信好友';
          break;
        case 'WXSenceTimeline':
          sheetArray[i] = '微信朋友圈';
          break;
        case 'WXSceneFavorite':
          sheetArray[i] = '微信收藏';
          break;
        case 0:
          sheetArray[i] = '图文链接';
          break;
        case 1:
          sheetArray[i] = '纯文字';
          break;
        case 2:
          sheetArray[i] = '纯图片';
          break;
        case 3:
          sheetArray[i] = '音乐';
          break;
        case 4:
          sheetArray[i] = '视频';
          break;
        case 5:
          sheetArray[i] = '小程序';
          break;
        default:
          break;}

    }
    this.showActionSheet(sheetArray, cb);
  },
  showActionSheet: function showActionSheet(sheetArray, cb) {
    uni.showActionSheet({
      itemList: sheetArray,
      success: function success(e) {
        if (cb && typeof cb == 'function') cb(e.tapIndex);
      } });

  },
  getProvider: function getProvider(type, cb, sheet) {
    var _this = this;
    uni.getProvider({
      service: type,
      success: function success(res) {
        if (sheet) {
          var obj = {};
          obj.array = res.provider;
          _this.actionSheet(obj, function (index) {
            if (cb && typeof cb == "function") cb(res.provider[index]);
          });
        } else {
          if (type == 'payment') {
            var providers = res.provider;
            var payTypeArray = [];
            for (var i = 0; i < providers.length; i++) {
              if (providers[i] == 'wxpay') {
                payTypeArray[i] = {
                  name: '微信支付',
                  value: providers[i],
                  img: '/static/image/wei.png' };

              } else if (providers[i] == 'alipay') {
                payTypeArray[i] = {
                  name: "支付宝支付",
                  value: providers[i],
                  img: '/static/image/ali.png' };

              }
            }
            if (cb && typeof cb == "function") cb(payTypeArray);
          } else {
            if (cb && typeof cb == "function") cb(res);
          }
        }
      } });

  } };



















































































































































































function checkMPUrl(url) {

  if (false) {}

  return url;
}

module.exports = _app;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 281:
/*!*************************************************************************!*\
  !*** C:/Users/DELL/-health/components/QS-SharePoster/QS-SharePoster.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 27));var _app2 = _interopRequireDefault(__webpack_require__(/*! ./app.js */ 280));
var _QRCodeAlg = _interopRequireDefault(__webpack_require__(/*! ./QRCodeAlg.js */ 282));
var _imageTools = __webpack_require__(/*! ./image-tools.js */ 283);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}
var ShreUserPosterBackgroundKey = 'ShrePosterBackground_'; // 背景图片缓存名称前缀
var idKey = 'QSSHAREPOSTER_IDKEY'; //drawArray自动生成的idkey
var isMp = false;

isMp = true;


var nbgScale = 1;
// export default 
function getSharePoster(obj) {
  return new Promise( /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(resolve, reject) {var result1, result2;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.prev = 0;_context.next = 3;return (

                returnPromise(obj));case 3:result1 = _context.sent;
              resolve(result1);_context.next = 21;break;case 7:_context.prev = 7;_context.t0 = _context["catch"](0);_context.prev = 9;



              if (obj.bgScale) {
                obj.bgScale = Number(obj.bgScale) - 0.1;
              } else {
                nbgScale = nbgScale - 0.1;
              }
              console.log('------------清除缓存后, 开始第二次尝试------------');_context.next = 14;return (
                returnPromise(obj));case 14:result2 = _context.sent;
              resolve(result2);_context.next = 21;break;case 18:_context.prev = 18;_context.t1 = _context["catch"](9);

              //TODO handle the exception
              reject(_context.t1);case 21:case "end":return _context.stop();}}}, _callee, null, [[0, 7], [9, 18]]);}));return function (_x, _x2) {return _ref.apply(this, arguments);};}());




}

function returnPromise(obj) {var

  type =

















  obj.type,formData = obj.formData,background = obj.background,posterCanvasId = obj.posterCanvasId,backgroundImage = obj.backgroundImage,reserve = obj.reserve,textArray = obj.textArray,drawArray = obj.drawArray,qrCodeArray = obj.qrCodeArray,imagesArray = obj.imagesArray,setCanvasWH = obj.setCanvasWH,setCanvasToTempFilePath = obj.setCanvasToTempFilePath,setDraw = obj.setDraw,bgScale = obj.bgScale,Context = obj.Context,_this = obj._this,delayTimeScale = obj.delayTimeScale,drawDelayTime = obj.drawDelayTime;
  return new Promise( /*#__PURE__*/function () {var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(rs, rj) {var bgObj, params, i, hasAllInfoCallback, _i, drawArrayItem, newData, drawArray_copy, _i2, item, _newData, item_idKey, poster;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.prev = 0;

              _app2.default.showLoading('正在准备海报数据');
              if (!Context) {
                _app2.default.log('没有画布对象,创建画布对象');
                Context = uni.createCanvasContext(posterCanvasId, _this || null);
              }if (!(

              background && background.width && background.height)) {_context2.next = 7;break;}
              bgObj = background;_context2.next = 10;break;case 7:_context2.next = 9;return (

                getShreUserPosterBackground({
                  backgroundImage: backgroundImage,
                  type: type,
                  formData: formData }));case 9:bgObj = _context2.sent;case 10:


              bgScale = bgScale || nbgScale;
              bgObj.width = bgObj.width * bgScale;
              bgObj.height = bgObj.height * bgScale;

              _app2.default.log('获取背景图信息对象成功:' + JSON.stringify(bgObj));
              params = {
                bgObj: bgObj,
                type: type,
                bgScale: bgScale,
                getBgObj: function getBgObj() {
                  return params.bgObj;
                },
                setBgObj: function setBgObj(newBgObj) {
                  var n = _objectSpread(_objectSpread({}, params.bgObj), newBgObj);
                  params.bgObj = n;
                  bgObj = n;
                } };if (!

              imagesArray) {_context2.next = 23;break;}
              if (typeof imagesArray == 'function')
              imagesArray = imagesArray(params);
              _app2.default.showLoading('正在生成需绘制图片的临时路径');
              _app2.default.log('准备设置图片');_context2.next = 21;return (
                setImage(imagesArray));case 21:imagesArray = _context2.sent;
              _app2.default.hideLoading();case 23:

              if (textArray) {
                if (typeof textArray == 'function')
                textArray = textArray(params);
                textArray = setText(Context, textArray);

              }if (!
              qrCodeArray) {_context2.next = 38;break;}
              if (typeof qrCodeArray == 'function')
              qrCodeArray = qrCodeArray(params);
              _app2.default.showLoading('正在生成需绘制图片的临时路径');
              i = 0;case 28:if (!(i < qrCodeArray.length)) {_context2.next = 37;break;}
              _app2.default.log(i);if (!
              qrCodeArray[i].image) {_context2.next = 34;break;}_context2.next = 33;return (
                _app2.default.downloadFile_PromiseFc(qrCodeArray[i].image));case 33:qrCodeArray[i].image = _context2.sent;case 34:i++;_context2.next = 28;break;case 37:

              _app2.default.hideLoading();case 38:if (!

              drawArray) {_context2.next = 99;break;}
              if (typeof drawArray == 'function') {
                drawArray = drawArray(params);
              }if (!
              _app2.default.isPromise(drawArray)) {_context2.next = 44;break;}_context2.next = 43;return (
                drawArray);case 43:drawArray = _context2.sent;case 44:if (!(


              _app2.default.isArray(drawArray) && drawArray.length > 0)) {_context2.next = 99;break;}
              hasAllInfoCallback = false;
              _i = 0;case 47:if (!(_i < drawArray.length)) {_context2.next = 79;break;}
              drawArrayItem = drawArray[_i];
              if (_app2.default.isFn(drawArrayItem.allInfoCallback) && !hasAllInfoCallback) hasAllInfoCallback = true;
              drawArrayItem[idKey] = _i;
              newData = void 0;_context2.t0 =
              drawArrayItem.type;_context2.next = _context2.t0 ===
              'image' ? 55 : _context2.t0 ===


              'text' ? 59 : _context2.t0 ===


              'qrcode' ? 61 : _context2.t0 ===





              'custom' ? 67 : _context2.t0 ===

              'fillrect' ? 68 : _context2.t0 ===

              'strokeRect' ? 69 : _context2.t0 ===

              'roundStrokeRect' ? 70 : _context2.t0 ===

              'roundFillRect' ? 71 : 72;break;case 55:_context2.next = 57;return setImage(drawArrayItem);case 57:newData = _context2.sent;return _context2.abrupt("break", 74);case 59:newData = setText(Context, drawArrayItem);return _context2.abrupt("break", 74);case 61:if (!drawArrayItem.image) {_context2.next = 66;break;}_context2.next = 64;return _app2.default.downloadFile_PromiseFc(drawArrayItem.image);case 64:_context2.t1 = _context2.sent;newData = { image: _context2.t1 };case 66:return _context2.abrupt("break", 74);case 67:return _context2.abrupt("break", 74);case 68:return _context2.abrupt("break", 74);case 69:return _context2.abrupt("break", 74);case 70:return _context2.abrupt("break", 74);case 71:return _context2.abrupt("break", 74);case 72:


              _app2.default.log('未识别的类型');return _context2.abrupt("break", 74);case 74:


              if (newData && _app2.default.isObject(newData)) {
                drawArray[_i] = _objectSpread(_objectSpread({}, drawArrayItem),
                newData);

              };case 76:_i++;_context2.next = 47;break;case 79:if (!


              hasAllInfoCallback) {_context2.next = 99;break;}
              _app2.default.log('----------------hasAllInfoCallback----------------');
              drawArray_copy = _toConsumableArray(drawArray);
              drawArray_copy.sort(function (a, b) {
                var a_serialNum = !_app2.default.isUndef(a.serialNum) && !_app2.default.isNull(a.serialNum) ? Number(a.serialNum) : Number.NEGATIVE_INFINITY;
                var b_serialNum = !_app2.default.isUndef(b.serialNum) && !_app2.default.isNull(b.serialNum) ? Number(b.serialNum) : Number.NEGATIVE_INFINITY;
                return a_serialNum - b_serialNum;
              });
              _app2.default.log('开始for循环');

              _i2 = 0;case 85:if (!(_i2 < drawArray_copy.length)) {_context2.next = 98;break;}
              item = _objectSpread({}, drawArray_copy[_i2]);if (!

              _app2.default.isFn(item.allInfoCallback)) {_context2.next = 95;break;}
              _newData = item.allInfoCallback({
                drawArray: drawArray });if (!

              _app2.default.isPromise(_newData)) {_context2.next = 93;break;}_context2.next = 92;return _newData;case 92:_newData = _context2.sent;case 93:
              item_idKey = item[idKey];
              if (!_app2.default.isUndef(item_idKey)) {
                drawArray[item[idKey]] = _objectSpread(_objectSpread({}, item),
                _newData);

              } else {
                console.log('程序错误 找不到idKey!!!	...这不应该啊');
              }case 95:_i2++;_context2.next = 85;break;case 98:


              _app2.default.log('for循环结束');case 99:



              console.log('params:' + JSON.stringify(params));if (!(
              setCanvasWH && typeof setCanvasWH == 'function')) {_context2.next = 103;break;}_context2.next = 103;return (
                new Promise(function (resolve, reject) {
                  setCanvasWH(params);
                  setTimeout(function () {
                    resolve();
                  }, 50);
                }));case 103:_context2.next = 105;return (

                drawShareImage({
                  Context: Context,
                  type: type,
                  posterCanvasId: posterCanvasId,
                  reserve: reserve,
                  drawArray: drawArray,
                  textArray: textArray,
                  imagesArray: imagesArray,
                  bgObj: bgObj,
                  qrCodeArray: qrCodeArray,
                  setCanvasToTempFilePath: setCanvasToTempFilePath,
                  setDraw: setDraw,
                  bgScale: bgScale,
                  _this: _this,
                  delayTimeScale: delayTimeScale,
                  drawDelayTime: drawDelayTime }));case 105:poster = _context2.sent;

              _app2.default.hideLoading();
              rs({
                bgObj: bgObj,
                poster: poster,
                type: type });_context2.next = 113;break;case 110:_context2.prev = 110;_context2.t2 = _context2["catch"](0);


              //TODO handle the exception
              rj(_context2.t2);case 113:case "end":return _context2.stop();}}}, _callee2, null, [[0, 110]]);}));return function (_x3, _x4) {return _ref2.apply(this, arguments);};}());


}

function drawShareImage(obj) {//绘制海报方法
  var
  Context =














  obj.Context,type = obj.type,posterCanvasId = obj.posterCanvasId,reserve = obj.reserve,bgObj = obj.bgObj,drawArray = obj.drawArray,textArray = obj.textArray,qrCodeArray = obj.qrCodeArray,imagesArray = obj.imagesArray,setCanvasToTempFilePath = obj.setCanvasToTempFilePath,setDraw = obj.setDraw,bgScale = obj.bgScale,_this = obj._this,delayTimeScale = obj.delayTimeScale,drawDelayTime = obj.drawDelayTime;
  var params = {
    Context: Context,
    bgObj: bgObj,
    type: type,
    bgScale: bgScale };

  delayTimeScale = delayTimeScale !== undefined ? delayTimeScale : 15;
  drawDelayTime = drawDelayTime !== undefined ? drawDelayTime : 100;
  return new Promise(function (rs, rj) {
    try {
      _app2.default.showLoading('正在绘制海报');
      _app2.default.log('背景对象:' + JSON.stringify(bgObj));
      if (bgObj && bgObj.path) {
        _app2.default.log('背景有图片路径');
        Context.drawImage(bgObj.path, 0, 0, bgObj.width, bgObj.height);
      } else {
        _app2.default.log('背景没有图片路径');
        if (bgObj.backgroundColor) {
          _app2.default.log('背景有背景颜色:' + bgObj.backgroundColor);
          Context.setFillStyle(bgObj.backgroundColor);
          Context.fillRect(0, 0, bgObj.width, bgObj.height);
        } else {
          _app2.default.log('背景没有背景颜色');
        }
      }

      _app2.default.showLoading('绘制图片');
      if (imagesArray && imagesArray.length > 0)
      drawImage(Context, imagesArray);

      _app2.default.showLoading('绘制自定义内容');
      if (setDraw && typeof setDraw == 'function') setDraw(params);

      _app2.default.showLoading('绘制文本');
      if (textArray && textArray.length > 0)
      drawText(Context, textArray, bgObj);

      _app2.default.showLoading('绘制二维码');
      if (qrCodeArray && qrCodeArray.length > 0) {
        for (var i = 0; i < qrCodeArray.length; i++) {
          drawQrCode(Context, qrCodeArray[i]);
        }
      }

      _app2.default.showLoading('绘制可控层级序列');
      if (drawArray && drawArray.length > 0) {
        for (var _i3 = 0; _i3 < drawArray.length; _i3++) {
          var drawArrayItem = drawArray[_i3];
          _app2.default.log('绘制可控层级序列, drawArrayItem:' + JSON.stringify(drawArrayItem));
          switch (drawArrayItem.type) {
            case 'image':
              _app2.default.log('绘制可控层级序列, 绘制图片');
              drawImage(Context, drawArrayItem);
              break;
            case 'text':
              _app2.default.log('绘制可控层级序列, 绘制文本');
              drawText(Context, drawArrayItem, bgObj);
              break;
            case 'qrcode':
              _app2.default.log('绘制可控层级序列, 绘制二维码');
              drawQrCode(Context, drawArrayItem);
              break;
            case 'custom':
              _app2.default.log('绘制可控层级序列, 绘制自定义内容');
              if (drawArrayItem.setDraw && typeof drawArrayItem.setDraw === 'function')
              drawArrayItem.setDraw(Context);
              break;drawRoundStrokeRect, drawStrokeRect;
            case 'fillRect':
              _app2.default.log('绘制可控层级序列, 绘制填充直角矩形');
              drawFillRect(Context, drawArrayItem);
              break;
            case 'strokeRect':
              _app2.default.log('绘制可控层级序列, 绘制线条直角矩形');
              drawStrokeRect(Context, drawArrayItem);
              break;
            case 'roundStrokeRect':
              _app2.default.log('绘制可控层级序列, 绘制线条圆角矩形');
              drawRoundStrokeRect(Context, drawArrayItem);
              break;
            case 'roundFillRect':
              _app2.default.log('绘制可控层级序列, 绘制填充圆角矩形');
              drawRoundFillRect(Context, drawArrayItem);
              break;
            default:
              _app2.default.log('未识别的类型');
              break;}

        }
      }
      _app2.default.showLoading('绘制中');
      setTimeout(function () {
        _app2.default.log('准备执行draw方法');
        _app2.default.log('Context:' + Context);
        var fn = function fn() {
          _app2.default.showLoading('正在输出图片');
          var setObj = setCanvasToTempFilePath || {};
          if (setObj && typeof setObj == 'function')
          setObj = setCanvasToTempFilePath(bgObj, type);
          var canvasToTempFilePathFn;
          var data = _objectSpread({
            x: 0,
            y: 0,
            width: Number(bgObj.width),
            height: Number(bgObj.height),
            destWidth: Number(bgObj.width), // 若H5使用这里请不要乘以二
            destHeight: Number(bgObj.height), // 若H5使用这里请不要乘以二
            quality: .8,
            fileType: 'jpg' },
          setObj);

          console.log('canvasToTempFilePath的data对象:' + JSON.stringify(data));
          canvasToTempFilePathFn = function canvasToTempFilePathFn() {
            var toTempFilePathObj = _objectSpread(_objectSpread({},
            data), {}, {
              canvasId: posterCanvasId,
              success: function success(res) {
                _app2.default.hideLoading();
                rs(res);
              },
              fail: function fail(err) {
                _app2.default.hideLoading();
                console.log('输出图片失败');
                _app2.default.log('输出图片失败:' + JSON.stringify(err));
                rj('输出图片失败:' + JSON.stringify(err));
              } });

            uni.canvasToTempFilePath(toTempFilePathObj, _this || null);
          };
          var delayTime = 0;
          if (qrCodeArray) {
            qrCodeArray.forEach(function (item) {
              if (item.text) {
                delayTime += Number(item.text.length);
              }
            });
          }
          if (imagesArray) {
            imagesArray.forEach(function () {
              delayTime += delayTimeScale;
            });
          }
          if (textArray) {
            textArray.forEach(function () {
              delayTime += delayTimeScale;
            });
          }
          if (drawArray) {
            drawArray.forEach(function (item) {
              switch (item.type) {
                case 'text':
                  if (item.text) {
                    delayTime += item.text.length;
                  }
                  break;
                default:
                  delayTime += delayTimeScale;
                  break;}

            });
          }
          _app2.default.log('延时系数:' + delayTimeScale);
          _app2.default.log('总计延时:' + delayTime);
          setTimeout(canvasToTempFilePathFn, delayTime);
        };
        Context.draw(typeof reserve == 'boolean' ? reserve : false, fn);
      }, drawDelayTime);
    } catch (e) {
      //TODO handle the exception
      _app2.default.hideLoading();
      rj(e);
    }
  });
}

// export
function drawFillRect(Context) {var drawArrayItem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //填充矩形
  _app2.default.log('进入绘制填充直角矩形方法, drawArrayItem:' + JSON.stringify(drawArrayItem));
  Context.setFillStyle(drawArrayItem.backgroundColor || 'black');
  Context.setGlobalAlpha(drawArrayItem.alpha || 1);
  Context.fillRect(drawArrayItem.dx || 0, drawArrayItem.dy || 0, drawArrayItem.width || 0, drawArrayItem.height || 0);
  Context.setGlobalAlpha(1);
}

// export
function drawStrokeRect(Context) {var drawArrayItem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //线条矩形
  Context.setStrokeStyle(drawArrayItem.color || 'black');
  Context.setLineWidth(drawArrayItem.lineWidth || 1);
  Context.strokeRect(drawArrayItem.dx, drawArrayItem.dy, drawArrayItem.width, drawArrayItem.height);
}

// export
function drawRoundStrokeRect(Context) {var drawArrayItem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var
  dx = drawArrayItem.dx,dy = drawArrayItem.dy,width = drawArrayItem.width,height = drawArrayItem.height,r = drawArrayItem.r,lineWidth = drawArrayItem.lineWidth,color = drawArrayItem.color;
  r = r || width * .1;

  if (width < 2 * r) {
    r = width / 2;
  }
  if (width < 2 * r) {
    r = width / 2;
  }
  Context.beginPath();
  Context.moveTo(dx + r, dy);
  Context.arcTo(dx + width, dy, dx + width, dy + height, r);
  Context.arcTo(dx + width, dy + height, dx, dy + height, r);
  Context.arcTo(dx, dy + height, dx, dy, r);
  Context.arcTo(dx, dy, dx + width, dy, r);
  Context.closePath();
  Context.setLineWidth(lineWidth || 1);
  Context.setStrokeStyle(color || 'black');
  Context.stroke();
}

// export
function drawRoundFillRect(Context) {var drawArrayItem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var
  dx = drawArrayItem.dx,dy = drawArrayItem.dy,width = drawArrayItem.width,height = drawArrayItem.height,r = drawArrayItem.r,backgroundColor = drawArrayItem.backgroundColor;
  r = r || width * .1;

  if (width < 2 * r) {
    r = width / 2;
  }
  if (width < 2 * r) {
    r = width / 2;
  }
  Context.beginPath();
  Context.moveTo(dx + r, dy);
  Context.arcTo(dx + width, dy, dx + width, dy + height, r);
  Context.arcTo(dx + width, dy + height, dx, dy + height, r);
  Context.arcTo(dx, dy + height, dx, dy, r);
  Context.arcTo(dx, dy, dx + width, dy, r);
  Context.closePath();
  Context.setFillStyle(backgroundColor);
  Context.fill();
}

// export 
function setText(Context, texts) {// 设置文本数据
  _app2.default.log('进入设置文字方法, texts:' + JSON.stringify(texts));
  if (texts && _app2.default.isArray(texts)) {
    _app2.default.log('texts是数组');
    if (texts.length > 0) {
      for (var i = 0; i < texts.length; i++) {
        _app2.default.log('字符串信息-初始化之前:' + JSON.stringify(texts[i]));
        texts[i] = setTextFn(Context, texts[i]);
      }
    }
  } else {
    _app2.default.log('texts是对象');
    texts = setTextFn(Context, texts);
  }
  _app2.default.log('返回texts:' + JSON.stringify(texts));
  return texts;
}

function setTextFn(Context, textItem) {
  _app2.default.log('进入设置文字方法, textItem:' + JSON.stringify(textItem));
  if (_app2.default.isNotNull_string(textItem.text)) {
    textItem.text = String(textItem.text);
    textItem.alpha = textItem.alpha !== undefined ? Number(textItem.alpha) : 1;
    textItem.color = textItem.color || 'black';
    textItem.size = textItem.size !== undefined ? Number(textItem.size) : 10;
    textItem.textAlign = textItem.textAlign || 'left';
    textItem.textBaseline = textItem.textBaseline || 'middle';
    textItem.dx = Number(textItem.dx) || 0;
    textItem.dy = Number(textItem.dy) || 0;
    textItem.size = Math.ceil(Number(textItem.size));
    _app2.default.log('字符串信息-初始化默认值后:' + JSON.stringify(textItem));
    var textLength = countTextLength(Context, {
      text: textItem.text,
      size: textItem.size });

    _app2.default.log('字符串信息-初始化时的文本长度:' + textLength);
    var infoCallBackObj = {};
    if (textItem.infoCallBack && typeof textItem.infoCallBack === 'function') {
      infoCallBackObj = textItem.infoCallBack(textLength);
    }
    textItem = _objectSpread(_objectSpread({},
    textItem), {}, {
      textLength: textLength },
    infoCallBackObj);

    _app2.default.log('字符串信息-infoCallBack后:' + JSON.stringify(textItem));
  }
  return textItem;
}

function countTextLength(Context, obj) {
  _app2.default.log('计算文字长度, obj:' + JSON.stringify(obj));var

  text =

  obj.text,size = obj.size;
  Context.setFontSize(size);
  var textLength;
  try {
    textLength = Context.measureText(text); // 官方文档说 App端自定义组件编译模式暂时不可用measureText方法
  } catch (e) {
    //TODO handle the exception
    textLength = {};
  }
  textLength = {};
  _app2.default.log('measureText计算文字长度, textLength:' + JSON.stringify(textLength));
  textLength = textLength && textLength.width ? textLength.width : 0;
  if (!textLength) {
    var l = 0;
    for (var j = 0; j < text.length; j++) {
      var t = text.substr(j, 1);
      var countL = countStrLength(t);
      _app2.default.log('计算文字宽度系数:' + countL);
      l += countL;
    }
    _app2.default.log('文字宽度总系数:' + l);
    textLength = l * size;
  }
  return textLength;
}

//计算字符长度系数
function countStrLength(t) {
  var l;
  if (/a/.test(t)) {
    l = 0.552734375;
  } else if (/b/.test(t)) {
    l = 0.638671875;
  } else if (/c/.test(t)) {
    l = 0.50146484375;
  } else if (/d/.test(t)) {
    l = 0.6396484375;
  } else if (/e/.test(t)) {
    l = 0.5673828125;
  } else if (/f/.test(t)) {
    l = 0.3466796875;
  } else if (/g/.test(t)) {
    l = 0.6396484375;
  } else if (/h/.test(t)) {
    l = 0.61572265625;
  } else if (/i/.test(t)) {
    l = 0.26611328125;
  } else if (/j/.test(t)) {
    l = 0.26708984375;
  } else if (/k/.test(t)) {
    l = 0.54443359375;
  } else if (/l/.test(t)) {
    l = 0.26611328125;
  } else if (/m/.test(t)) {
    l = 0.93701171875;
  } else if (/n/.test(t)) {
    l = 0.6162109375;
  } else if (/o/.test(t)) {
    l = 0.6357421875;
  } else if (/p/.test(t)) {
    l = 0.638671875;
  } else if (/q/.test(t)) {
    l = 0.6396484375;
  } else if (/r/.test(t)) {
    l = 0.3818359375;
  } else if (/s/.test(t)) {
    l = 0.462890625;
  } else if (/t/.test(t)) {
    l = 0.37255859375;
  } else if (/u/.test(t)) {
    l = 0.6162109375;
  } else if (/v/.test(t)) {
    l = 0.52490234375;
  } else if (/w/.test(t)) {
    l = 0.78955078125;
  } else if (/x/.test(t)) {
    l = 0.5068359375;
  } else if (/y/.test(t)) {
    l = 0.529296875;
  } else if (/z/.test(t)) {
    l = 0.49169921875;
  } else if (/A/.test(t)) {
    l = 0.70361328125;
  } else if (/B/.test(t)) {
    l = 0.62744140625;
  } else if (/C/.test(t)) {
    l = 0.6689453125;
  } else if (/D/.test(t)) {
    l = 0.76171875;
  } else if (/E/.test(t)) {
    l = 0.5498046875;
  } else if (/F/.test(t)) {
    l = 0.53125;
  } else if (/G/.test(t)) {
    l = 0.74365234375;
  } else if (/H/.test(t)) {
    l = 0.7734375;
  } else if (/I/.test(t)) {
    l = 0.2939453125;
  } else if (/J/.test(t)) {
    l = 0.39599609375;
  } else if (/K/.test(t)) {
    l = 0.634765625;
  } else if (/L/.test(t)) {
    l = 0.51318359375;
  } else if (/M/.test(t)) {
    l = 0.97705078125;
  } else if (/N/.test(t)) {
    l = 0.81298828125;
  } else if (/O/.test(t)) {
    l = 0.81494140625;
  } else if (/P/.test(t)) {
    l = 0.61181640625;
  } else if (/Q/.test(t)) {
    l = 0.81494140625;
  } else if (/R/.test(t)) {
    l = 0.65283203125;
  } else if (/S/.test(t)) {
    l = 0.5771484375;
  } else if (/T/.test(t)) {
    l = 0.5732421875;
  } else if (/U/.test(t)) {
    l = 0.74658203125;
  } else if (/V/.test(t)) {
    l = 0.67626953125;
  } else if (/W/.test(t)) {
    l = 1.017578125;
  } else if (/X/.test(t)) {
    l = 0.64501953125;
  } else if (/Y/.test(t)) {
    l = 0.603515625;
  } else if (/Z/.test(t)) {
    l = 0.6201171875;
  } else if (/[0-9]/.test(t)) {
    l = 0.58642578125;
  } else if (/[\u4e00-\u9fa5]/.test(t)) {
    l = 1;
  } else if (/ /.test(t)) {
    l = 0.2958984375;
  } else if (/\`/.test(t)) {
    l = 0.294921875;
  } else if (/\~/.test(t)) {
    l = 0.74169921875;
  } else if (/\!/.test(t)) {
    l = 0.3125;
  } else if (/\@/.test(t)) {
    l = 1.03125;
  } else if (/\#/.test(t)) {
    l = 0.63818359375;
  } else if (/\$/.test(t)) {
    l = 0.58642578125;
  } else if (/\%/.test(t)) {
    l = 0.8896484375;
  } else if (/\^/.test(t)) {
    l = 0.74169921875;
  } else if (/\&/.test(t)) {
    l = 0.8701171875;
  } else if (/\*/.test(t)) {
    l = 0.455078125;
  } else if (/\(/.test(t)) {
    l = 0.333984375;
  } else if (/\)/.test(t)) {
    l = 0.333984375;
  } else if (/\_/.test(t)) {
    l = 0.4482421875;
  } else if (/\-/.test(t)) {
    l = 0.4326171875;
  } else if (/\+/.test(t)) {
    l = 0.74169921875;
  } else if (/\=/.test(t)) {
    l = 0.74169921875;
  } else if (/\|/.test(t)) {
    l = 0.26904296875;
  } else if (/\\/.test(t)) {
    l = 0.416015625;
  } else if (/\[/.test(t)) {
    l = 0.333984375;
  } else if (/\]/.test(t)) {
    l = 0.333984375;
  } else if (/\;/.test(t)) {
    l = 0.24072265625;
  } else if (/\'/.test(t)) {
    l = 0.25634765625;
  } else if (/\,/.test(t)) {
    l = 0.24072265625;
  } else if (/\./.test(t)) {
    l = 0.24072265625;
  } else if (/\//.test(t)) {
    l = 0.42724609375;
  } else if (/\{/.test(t)) {
    l = 0.333984375;
  } else if (/\}/.test(t)) {
    l = 0.333984375;
  } else if (/\:/.test(t)) {
    l = 0.24072265625;
  } else if (/\"/.test(t)) {
    l = 0.435546875;
  } else if (/\</.test(t)) {
    l = 0.74169921875;
  } else if (/\>/.test(t)) {
    l = 0.74169921875;
  } else if (/\?/.test(t)) {
    l = 0.48291015625;
  } else {
    l = 1;
  }
  return l;
}

// export 
function setImage(images) {// 设置图片数据
  _app2.default.log('进入设置图片数据方法');
  return new Promise( /*#__PURE__*/function () {var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(resolve, rejcet) {var i;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.prev = 0;if (!(

              images && _app2.default.isArray(images))) {_context3.next = 14;break;}
              _app2.default.log('images是一个数组');
              i = 0;case 4:if (!(i < images.length)) {_context3.next = 12;break;}
              _app2.default.log('设置图片数据循环中:' + i);_context3.next = 8;return (
                setImageFn(images[i]));case 8:images[i] = _context3.sent;case 9:i++;_context3.next = 4;break;case 12:_context3.next = 18;break;case 14:


              _app2.default.log('images是一个对象');_context3.next = 17;return (
                setImageFn(images));case 17:images = _context3.sent;case 18:

              resolve(images);_context3.next = 24;break;case 21:_context3.prev = 21;_context3.t0 = _context3["catch"](0);

              //TODO handle the exception
              rejcet(_context3.t0);case 24:case "end":return _context3.stop();}}}, _callee3, null, [[0, 21]]);}));return function (_x5, _x6) {return _ref3.apply(this, arguments);};}());


}

function base64ToPathFn(path) {
  var reg = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)\s*$/i;
  if (!reg.test(path)) {
    return Promise.resolve(path);
  }
  return (0, _imageTools.base64ToPath)(path);
}

function setImageFn(image) {
  return new Promise( /*#__PURE__*/function () {var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(resolve, reject) {var imgUrl, hasinfoCallBack, imageInfo;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:if (!
              image.url) {_context4.next = 20;break;}_context4.next = 3;return (
                base64ToPathFn(image.url));case 3:image.url = _context4.sent;
              imgUrl = image.url;_context4.next = 7;return (
                _app2.default.downloadFile_PromiseFc(imgUrl));case 7:imgUrl = _context4.sent;
              image.url = imgUrl;
              hasinfoCallBack = image.infoCallBack && typeof image.infoCallBack === 'function';
              imageInfo = {};_context4.next = 13;return (
                _app2.default.getImageInfo_PromiseFc(imgUrl));case 13:imageInfo = _context4.sent;
              if (hasinfoCallBack) {
                image = _objectSpread(_objectSpread({},
                image),
                image.infoCallBack(imageInfo));

              }
              image.dx = Number(image.dx) || 0;
              image.dy = Number(image.dy) || 0;
              image.dWidth = Number(image.dWidth || imageInfo.width);
              image.dHeight = Number(image.dHeight || imageInfo.height);
              image = _objectSpread(_objectSpread({},
              image), {}, {
                imageInfo: imageInfo });case 20:


              resolve(image);case 21:case "end":return _context4.stop();}}}, _callee4);}));return function (_x7, _x8) {return _ref4.apply(this, arguments);};}());

}

// export 
function drawText(Context, textArray, bgObj) {// 先遍历换行再绘制
  if (!_app2.default.isArray(textArray)) {
    _app2.default.log('遍历文本方法, 不是数组');
    textArray = [textArray];
  } else {
    _app2.default.log('遍历文本方法, 是数组');
  }
  _app2.default.log('遍历文本方法, textArray:' + JSON.stringify(textArray));
  var newArr = [];
  if (textArray && textArray.length > 0) {
    for (var j = 0; j < textArray.length; j++) {
      var textItem = textArray[j];
      if (textItem.text && textItem.lineFeed) {
        var lineNum = -1,
        maxWidth = bgObj.width,
        lineHeight = textItem.size,
        dx = textItem.dx;
        if (_app2.default.isObject(textItem.lineFeed)) {
          var lineFeed = textItem.lineFeed;
          lineNum = lineFeed.lineNum !== undefined && typeof lineFeed.lineNum === 'number' && lineFeed.lineNum >= 0 ?
          lineFeed.lineNum : lineNum;
          maxWidth = lineFeed.maxWidth !== undefined && typeof lineFeed.maxWidth === 'number' ? lineFeed.maxWidth :
          maxWidth;
          lineHeight = lineFeed.lineHeight !== undefined && typeof lineFeed.lineHeight === 'number' ? lineFeed.lineHeight :
          lineHeight;
          dx = lineFeed.dx !== undefined && typeof lineFeed.dx === 'number' ? lineFeed.dx : dx;
        }
        var chr = textItem.text.split("");
        var temp = "";
        var row = [];
        //循环出几行文字组成数组
        for (var a = 0, len = chr.length; a < len; a++) {
          if (countTextLength(Context, {
            text: temp,
            size: textItem.size }) <=
          maxWidth && countTextLength(Context, {
            text: temp + chr[a],
            size: textItem.size }) <=
          maxWidth) {
            temp += chr[a];
            if (a == chr.length - 1) {
              row.push(temp);
            }
          } else {
            row.push(temp);
            temp = chr[a];
          }
        }
        _app2.default.log('循环出的文本数组:' + JSON.stringify(row));
        //只显示几行 变量间距lineHeight  变量行数lineNum
        var allNum = lineNum >= 0 && lineNum < row.length ? lineNum : row.length;

        for (var i = 0; i < allNum; i++) {
          var str = row[i];
          if (i == allNum - 1 && allNum < row.length) {
            str = str.substring(0, str.length - 1) + '...';
          }
          var obj = _objectSpread(_objectSpread({}, textItem), {}, {
            text: str,
            dx: i === 0 ? textItem.dx : dx >= 0 ? dx : textItem.dx,
            dy: textItem.dy + i * lineHeight,
            textLength: countTextLength(Context, {
              text: str,
              size: textItem.size }) });


          _app2.default.log('重新组成的文本对象:' + JSON.stringify(obj));
          newArr.push(obj);
        }
      } else {
        newArr.push(textItem);
      }
    }
  }
  _app2.default.log('绘制文本新数组:' + JSON.stringify(newArr));
  drawTexts(Context, newArr);
}

function setFont() {var textItem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (textItem.font && typeof textItem.font === 'string') {
    _app2.default.log(textItem.font);
    return textItem.font;
  } else {
    var fontStyle = 'normal';
    var fontVariant = 'normal';
    var fontWeight = 'normal';
    var fontSize = textItem.size || 10;
    var fontFamily = 'sans-serif';
    fontSize = Math.ceil(Number(fontSize));
    if (textItem.fontStyle && typeof textItem.fontStyle === 'string')
    fontStyle = textItem.fontStyle.trim();
    if (textItem.fontVariant && typeof textItem.fontVariant === 'string')
    fontVariant = textItem.fontVariant.trim();
    if (textItem.fontWeight && (typeof textItem.fontWeight === 'string' || typeof textItem.fontWeight === 'number'))
    fontWeight = textItem.fontWeight.trim();
    if (textItem.fontFamily && typeof textItem.fontFamily === 'string')
    fontFamily = textItem.fontFamily.trim();
    return fontStyle + ' ' +
    fontVariant + ' ' +
    fontWeight + ' ' +
    fontSize + 'px' + ' ' +
    fontFamily;
  }
}

function drawTexts(Context, texts) {// 绘制文本
  _app2.default.log('准备绘制文本方法, texts:' + JSON.stringify(texts));
  if (texts && _app2.default.isArray(texts)) {
    _app2.default.log('准备绘制文本方法, 是数组');
    if (texts.length > 0) {
      for (var i = 0; i < texts.length; i++) {
        drawTextFn(Context, texts[i]);
      }
    }
  } else {
    _app2.default.log('准备绘制文本方法, 不是数组');
    drawTextFn(Context, texts);
  }
}

function drawTextFn(Context, textItem) {
  _app2.default.log('进入绘制文本方法, textItem:' + JSON.stringify(textItem));
  if (textItem && _app2.default.isObject(textItem) && textItem.text) {
    Context.font = setFont(textItem);
    Context.setFillStyle(textItem.color);
    Context.setGlobalAlpha(textItem.alpha);
    Context.setTextAlign(textItem.textAlign);
    Context.setTextBaseline(textItem.textBaseline);
    Context.fillText(textItem.text, textItem.dx, textItem.dy);
    if (textItem.lineThrough && _app2.default.isObject(textItem.lineThrough)) {
      _app2.default.log('有删除线');
      var lineThrough = textItem.lineThrough;
      lineThrough.alpha = lineThrough.alpha !== undefined ? lineThrough.alpha : textItem.alpha;
      lineThrough.style = lineThrough.style || textItem.color;
      lineThrough.width = lineThrough.width !== undefined ? lineThrough.width : textItem.size / 10;
      lineThrough.cap = lineThrough.cap !== undefined ? lineThrough.cap : 'butt';
      _app2.default.log('删除线对象:' + JSON.stringify(lineThrough));
      Context.setGlobalAlpha(lineThrough.alpha);
      Context.setStrokeStyle(lineThrough.style);
      Context.setLineWidth(lineThrough.width);
      Context.setLineCap(lineThrough.cap);
      var mx, my;
      switch (textItem.textAlign) {
        case 'left':
          mx = textItem.dx;
          break;
        case 'center':
          mx = textItem.dx - textItem.textLength / 2;
          break;
        default:
          mx = textItem.dx - textItem.textLength;
          break;}

      switch (textItem.textBaseline) {
        case 'top':
          my = textItem.dy + textItem.size * .5;
          break;
        case 'middle':
          my = textItem.dy;
          break;
        default:
          my = textItem.dy - textItem.size * .5;
          break;}

      Context.beginPath();
      Context.moveTo(mx, my);
      Context.lineTo(mx + textItem.textLength, my);
      Context.stroke();
      Context.closePath();
      _app2.default.log('删除线完毕');
    }
    Context.setGlobalAlpha(1);
    Context.font = '10px sans-serif';
  }
}
// export 
function drawImage(Context, images) {// 绘制图片
  _app2.default.log('判断图片数据类型:' + JSON.stringify(images));
  if (images && _app2.default.isArray(images)) {
    if (images.length > 0) {
      for (var i = 0; i < images.length; i++) {
        readyDrawImageFn(Context, images[i]);
      }
    }
  } else {
    readyDrawImageFn(Context, images);
  }

}

function readyDrawImageFn(Context, img) {
  _app2.default.log('判断绘制图片形状, img:' + JSON.stringify(img));
  if (img.url) {
    if (img.circleSet) {
      drawCircleImage(Context, img);
    } else if (img.roundRectSet) {
      drawRoundRectImage(Context, img);
    } else {
      drawImageFn(Context, img);
    }
  }
}

function drawImageFn(Context, img) {
  _app2.default.log('进入绘制默认图片方法, img:' + JSON.stringify(img));
  if (img.url) {
    var hasAlpha = !_app2.default.isUndef(img.alpha);
    img.alpha = Number(!_app2.default.isUndef(img.alpha) ? img.alpha : 1);
    Context.setGlobalAlpha(img.alpha);
    _app2.default.log('绘制默认图片方法, 有url');
    if (img.dWidth && img.dHeight && img.sx && img.sy && img.sWidth && img.sHeight) {
      _app2.default.log('绘制默认图片方法, 绘制第一种方案');
      Context.drawImage(img.url,
      Number(img.sx) || false, Number(img.sy) || false,
      Number(img.sWidth) || false, Number(img.sHeight) || false,
      Number(img.dx || 0), Number(img.dy || 0),
      Number(img.dWidth) || false, Number(img.dHeight) || false);
    } else if (img.dWidth && img.dHeight) {
      _app2.default.log('绘制默认图片方法, 绘制第二种方案');
      Context.drawImage(img.url, Number(img.dx || 0), Number(img.dy || 0),
      Number(img.dWidth) || false, Number(img.dHeight) || false);
    } else {
      _app2.default.log('绘制默认图片方法, 绘制第三种方案');
      Context.drawImage(img.url, Number(img.dx || 0), Number(img.dy || 0));
    }
    if (hasAlpha) {
      Context.setGlobalAlpha(1);
    }
  }
  _app2.default.log('绘制默认图片方法, 绘制完毕');
}

function drawCircleImage(Context, obj) {
  _app2.default.log('进入绘制圆形图片方法, obj:' + JSON.stringify(obj));var

  dx =





  obj.dx,dy = obj.dy,dWidth = obj.dWidth,dHeight = obj.dHeight,circleSet = obj.circleSet,imageInfo = obj.imageInfo;
  var x, y, r;
  if (typeof circleSet === 'object') {
    x = circleSet.x;
    y = circleSet.y;
    r = circleSet.r;
  }
  if (!r) {
    var d;
    d = dWidth > dHeight ? dHeight : dWidth;
    r = d / 2;
  }

  x = x ? dx + x : (dx || 0) + r;
  y = y ? dy + y : (dy || 0) + r;
  Context.save();
  Context.beginPath();
  Context.arc(x, y, r, 0, 2 * Math.PI, false);
  Context.closePath();
  Context.setGlobalAlpha(0);
  Context.fillStyle = '#FFFFFF';
  Context.fill();
  Context.setGlobalAlpha(1);
  Context.clip();
  drawImageFn(Context, obj);
  _app2.default.log('默认图片绘制完毕');
  Context.restore();
}

function drawRoundRectImage(Context, obj) {// 绘制矩形
  _app2.default.log('进入绘制矩形图片方法, obj:' + JSON.stringify(obj));
  Context.save();var

  dx =





  obj.dx,dy = obj.dy,dWidth = obj.dWidth,dHeight = obj.dHeight,roundRectSet = obj.roundRectSet,imageInfo = obj.imageInfo;
  var r;
  if (typeof roundRectSet === 'object') {
    r = roundRectSet.r;
  }
  r = r || dWidth * .1;

  if (dWidth < 2 * r) {
    r = dWidth / 2;
  }
  if (dHeight < 2 * r) {
    r = dHeight / 2;
  }
  Context.beginPath();
  Context.moveTo(dx + r, dy);
  Context.arcTo(dx + dWidth, dy, dx + dWidth, dy + dHeight, r);
  Context.arcTo(dx + dWidth, dy + dHeight, dx, dy + dHeight, r);
  Context.arcTo(dx, dy + dHeight, dx, dy, r);
  Context.arcTo(dx, dy, dx + dWidth, dy, r);
  Context.closePath();
  Context.setGlobalAlpha(0);
  Context.fillStyle = '#FFFFFF';
  Context.fill();
  Context.setGlobalAlpha(1);
  Context.clip();
  drawImageFn(Context, obj);
  Context.restore();
  _app2.default.log('进入绘制矩形图片方法, 绘制完毕');
}

// export 
function drawQrCode(Context, qrCodeObj) {//生成二维码方法， 参考了 诗小柒 的二维码生成器代码
  _app2.default.log('进入绘制二维码方法');
  _app2.default.showLoading('正在生成二维码');
  var qrcodeAlgObjCache = [];
  var options = {
    text: String(qrCodeObj.text || '') || '', // 生成内容
    size: Number(qrCodeObj.size || 0) || 200, // 二维码大小
    background: String(qrCodeObj.background || '') || '#ffffff', // 背景色
    foreground: String(qrCodeObj.foreground || '') || '#000000', // 前景色
    pdground: String(qrCodeObj.pdground || '') || '#000000', // 定位角点颜色
    correctLevel: Number(qrCodeObj.correctLevel || 0) || 3, // 容错级别
    image: String(qrCodeObj.image || '') || '', // 二维码图标
    imageSize: Number(qrCodeObj.imageSize || 0) || 40, // 二维码图标大小
    dx: Number(qrCodeObj.dx || 0) || 0, // x轴距离
    dy: Number(qrCodeObj.dy || 0) || 0 // y轴距离
  };
  var qrCodeAlg = null;
  var d = 0;
  for (var i = 0, l = qrcodeAlgObjCache.length; i < l; i++) {
    d = i;
    if (qrcodeAlgObjCache[i].text == options.text && qrcodeAlgObjCache[i].text.correctLevel == options.correctLevel) {
      qrCodeAlg = qrcodeAlgObjCache[i].obj;
      break;
    }
  }
  if (d == l) {
    qrCodeAlg = new _QRCodeAlg.default(options.text, options.correctLevel);
    qrcodeAlgObjCache.push({
      text: options.text,
      correctLevel: options.correctLevel,
      obj: qrCodeAlg });

  }
  var getForeGround = function getForeGround(config) {
    var options = config.options;
    if (options.pdground && (
    config.row > 1 && config.row < 5 && config.col > 1 && config.col < 5 ||
    config.row > config.count - 6 && config.row < config.count - 2 && config.col > 1 && config.col < 5 ||
    config.row > 1 && config.row < 5 && config.col > config.count - 6 && config.col < config.count - 2))
    {
      return options.pdground;
    }
    return options.foreground;
  };
  var count = qrCodeAlg.getModuleCount();
  var ratioSize = options.size;
  var ratioImgSize = options.imageSize;
  //计算每个点的长宽
  var tileW = (ratioSize / count).toPrecision(4);
  var tileH = (ratioSize / count).toPrecision(4);
  //绘制
  for (var row = 0; row < count; row++) {
    for (var col = 0; col < count; col++) {
      var w = Math.ceil((col + 1) * tileW) - Math.floor(col * tileW);
      var h = Math.ceil((row + 1) * tileW) - Math.floor(row * tileW);
      var foreground = getForeGround({
        row: row,
        col: col,
        count: count,
        options: options });

      Context.setFillStyle(qrCodeAlg.modules[row][col] ? foreground : options.background);
      Context.fillRect(options.dx + Math.round(col * tileW), options.dy + Math.round(row * tileH), w, h);
    }
  }
  if (options.image) {




    // 画圆角矩形
    var drawRoundedRect = function drawRoundedRect(ctxi, x, y, width, height, r, lineWidth, fill, stroke) {
      ctxi.setLineWidth(lineWidth);
      ctxi.setFillStyle(options.background);
      ctxi.setStrokeStyle(options.background);
      ctxi.beginPath(); // draw top and top right corner 
      ctxi.moveTo(x + r, y);
      ctxi.arcTo(x + width, y, x + width, y + r, r); // draw right side and bottom right corner 
      ctxi.arcTo(x + width, y + height, x + width - r, y + height, r); // draw bottom and bottom left corner 
      ctxi.arcTo(x, y + height, x, y + height - r, r); // draw left and top left corner 
      ctxi.arcTo(x, y, x + r, y, r);
      ctxi.closePath();
      if (fill) {
        ctxi.fill();
      }
      if (stroke) {
        ctxi.stroke();
      }
    };var x = options.dx + Number(((ratioSize - ratioImgSize) / 2).toFixed(2));var y = options.dy + Number(((ratioSize - ratioImgSize) / 2).toFixed(2));drawRoundedRect(Context, x, y, ratioImgSize, ratioImgSize, 2, 6, true, true);Context.drawImage(options.image, x, y, ratioImgSize, ratioImgSize);
  }
  _app2.default.log('进入绘制二维码方法完毕');
  _app2.default.hideLoading();
}


function getShreUserPosterBackground(objs) {//检查背景图是否存在于本地， 若存在直接返回， 否则调用getShreUserPosterBackgroundFc方法
  var
  backgroundImage =

  objs.backgroundImage,type = objs.type;
  return new Promise( /*#__PURE__*/function () {var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(resolve, reject) {var savedFilePath;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.prev = 0;

              _app2.default.showLoading('正在获取海报背景图');_context5.next = 4;return (
                getShreUserPosterBackgroundFc(objs));case 4:savedFilePath = _context5.sent;
              _app2.default.hideLoading();
              resolve(savedFilePath);_context5.next = 15;break;case 9:_context5.prev = 9;_context5.t0 = _context5["catch"](0);

              _app2.default.hideLoading();
              _app2.default.showToast('获取分享用户背景图失败:' + JSON.stringify(_context5.t0));
              _app2.default.log(JSON.stringify(_context5.t0));
              reject(_context5.t0);case 15:case "end":return _context5.stop();}}}, _callee5, null, [[0, 9]]);}));return function (_x9, _x10) {return _ref5.apply(this, arguments);};}());


}

function getPosterStorage(type) {
  return _app2.default.getStorageSync(getStorageKey(type));
}

function removePosterStorage(type) {
  var ShreUserPosterBackgroundKey = getStorageKey(type);
  var pbg = _app2.default.getStorageSync(ShreUserPosterBackgroundKey);
  if (pbg && pbg.path) {
    _app2.default.removeStorageSync(ShreUserPosterBackgroundKey);
  }
}

function setPosterStorage(type, data) {
  _app2.default.setStorage(getStorageKey(type), data);
}

function getStorageKey(type) {
  return ShreUserPosterBackgroundKey + (type || 'default');
}

function getShreUserPosterBackgroundFc(objs, upimage) {//下载并保存背景图方法
  var
  backgroundImage =

  objs.backgroundImage,type = objs.type;
  _app2.default.log('获取分享背景图, 尝试清空本地数据');
  return new Promise( /*#__PURE__*/function () {var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6(resolve, reject) {var image, savedFilePath, imageObj, returnObj;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_context6.prev = 0;

              _app2.default.showLoading('正在下载海报背景图');
              _app2.default.log('没有从后端获取的背景图片路径, 尝试从后端获取背景图片路径');if (!
              backgroundImage) {_context6.next = 7;break;}_context6.t0 = backgroundImage;_context6.next = 10;break;case 7:_context6.next = 9;return _app2.default.getPosterUrl(objs);case 9:_context6.t0 = _context6.sent;case 10:image = _context6.t0;_context6.next = 13;return (
                base64ToPathFn(image));case 13:image = _context6.sent;
              _app2.default.log('尝试下载并保存背景图:' + image);_context6.next = 17;return (
                _app2.default.downLoadAndSaveFile_PromiseFc(image));case 17:savedFilePath = _context6.sent;if (!
              savedFilePath) {_context6.next = 32;break;}
              _app2.default.log('下载并保存背景图成功:' + savedFilePath);_context6.next = 22;return (
                _app2.default.getImageInfo_PromiseFc(savedFilePath));case 22:imageObj = _context6.sent;
              _app2.default.log('获取图片信息成功');
              returnObj = {
                path: savedFilePath,
                width: imageObj.width,
                height: imageObj.height,
                name: _app2.default.fileNameInPath(image) };

              _app2.default.log('拼接背景图信息对象成功:' + JSON.stringify(returnObj));


              setPosterStorage(type, _objectSpread({}, returnObj));



              _app2.default.hideLoading();
              _app2.default.log('返回背景图信息对象');
              resolve(_objectSpread({}, returnObj));_context6.next = 34;break;case 32:


              _app2.default.hideLoading();
              reject('not find savedFilePath');case 34:_context6.next = 39;break;case 36:_context6.prev = 36;_context6.t1 = _context6["catch"](0);


              //TODO handle the exception
              reject(_context6.t1);case 39:case "end":return _context6.stop();}}}, _callee6, null, [[0, 36]]);}));return function (_x11, _x12) {return _ref6.apply(this, arguments);};}());


}


module.exports = {
  getSharePoster: getSharePoster,
  setText: setText,
  setImage: setImage,
  drawText: drawText,
  drawImage: drawImage,
  drawQrCode: drawQrCode,
  drawFillRect: drawFillRect,
  drawStrokeRect: drawStrokeRect,
  drawRoundStrokeRect: drawRoundStrokeRect,
  drawRoundFillRect: drawRoundFillRect };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 282:
/*!********************************************************************!*\
  !*** C:/Users/DELL/-health/components/QS-SharePoster/QRCodeAlg.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = QRCodeAlg; /**
                                                                                                            * 获取单个字符的utf8编码
                                                                                                            * unicode BMP平面约65535个字符
                                                                                                            * @param {num} code
                                                                                                            * return {array}
                                                                                                            */
function unicodeFormat8(code) {
  // 1 byte
  var c0, c1, c2;
  if (code < 128) {
    return [code];
    // 2 bytes
  } else if (code < 2048) {
    c0 = 192 + (code >> 6);
    c1 = 128 + (code & 63);
    return [c0, c1];
    // 3 bytes
  } else {
    c0 = 224 + (code >> 12);
    c1 = 128 + (code >> 6 & 63);
    c2 = 128 + (code & 63);
    return [c0, c1, c2];
  }
}
/**
   * 获取字符串的utf8编码字节串
   * @param {string} string
   * @return {array}
   */
function getUTF8Bytes(string) {
  var utf8codes = [];
  for (var i = 0; i < string.length; i++) {
    var code = string.charCodeAt(i);
    var utf8 = unicodeFormat8(code);
    for (var j = 0; j < utf8.length; j++) {
      utf8codes.push(utf8[j]);
    }
  }
  return utf8codes;
}
/**
   * 二维码算法实现
   * @param {string} data              要编码的信息字符串
   * @param {num} errorCorrectLevel 纠错等级
   */
function QRCodeAlg(data, errorCorrectLevel) {
  this.typeNumber = -1; //版本
  this.errorCorrectLevel = errorCorrectLevel;
  this.modules = null; //二维矩阵，存放最终结果
  this.moduleCount = 0; //矩阵大小
  this.dataCache = null; //数据缓存
  this.rsBlocks = null; //版本数据信息
  this.totalDataCount = -1; //可使用的数据量
  this.data = data;
  this.utf8bytes = getUTF8Bytes(data);
  this.make();
}
QRCodeAlg.prototype = {
  constructor: QRCodeAlg,
  /**
                           * 获取二维码矩阵大小
                           * @return {num} 矩阵大小
                           */
  getModuleCount: function getModuleCount() {
    return this.moduleCount;
  },
  /**
      * 编码
      */
  make: function make() {
    this.getRightType();
    this.dataCache = this.createData();
    this.createQrcode();
  },
  /**
      * 设置二位矩阵功能图形
      * @param  {bool} test 表示是否在寻找最好掩膜阶段
      * @param  {num} maskPattern 掩膜的版本
      */
  makeImpl: function makeImpl(maskPattern) {
    this.moduleCount = this.typeNumber * 4 + 17;
    this.modules = new Array(this.moduleCount);
    for (var row = 0; row < this.moduleCount; row++) {
      this.modules[row] = new Array(this.moduleCount);
    }
    this.setupPositionProbePattern(0, 0);
    this.setupPositionProbePattern(this.moduleCount - 7, 0);
    this.setupPositionProbePattern(0, this.moduleCount - 7);
    this.setupPositionAdjustPattern();
    this.setupTimingPattern();
    this.setupTypeInfo(true, maskPattern);
    if (this.typeNumber >= 7) {
      this.setupTypeNumber(true);
    }
    this.mapData(this.dataCache, maskPattern);
  },
  /**
      * 设置二维码的位置探测图形
      * @param  {num} row 探测图形的中心横坐标
      * @param  {num} col 探测图形的中心纵坐标
      */
  setupPositionProbePattern: function setupPositionProbePattern(row, col) {
    for (var r = -1; r <= 7; r++) {
      if (row + r <= -1 || this.moduleCount <= row + r) continue;
      for (var c = -1; c <= 7; c++) {
        if (col + c <= -1 || this.moduleCount <= col + c) continue;
        if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
          this.modules[row + r][col + c] = true;
        } else {
          this.modules[row + r][col + c] = false;
        }
      }
    }
  },
  /**
      * 创建二维码
      * @return {[type]} [description]
      */
  createQrcode: function createQrcode() {
    var minLostPoint = 0;
    var pattern = 0;
    var bestModules = null;
    for (var i = 0; i < 8; i++) {
      this.makeImpl(i);
      var lostPoint = QRUtil.getLostPoint(this);
      if (i == 0 || minLostPoint > lostPoint) {
        minLostPoint = lostPoint;
        pattern = i;
        bestModules = this.modules;
      }
    }
    this.modules = bestModules;
    this.setupTypeInfo(false, pattern);
    if (this.typeNumber >= 7) {
      this.setupTypeNumber(false);
    }
  },
  /**
      * 设置定位图形
      * @return {[type]} [description]
      */
  setupTimingPattern: function setupTimingPattern() {
    for (var r = 8; r < this.moduleCount - 8; r++) {
      if (this.modules[r][6] != null) {
        continue;
      }
      this.modules[r][6] = r % 2 == 0;
      if (this.modules[6][r] != null) {
        continue;
      }
      this.modules[6][r] = r % 2 == 0;
    }
  },
  /**
      * 设置矫正图形
      * @return {[type]} [description]
      */
  setupPositionAdjustPattern: function setupPositionAdjustPattern() {
    var pos = QRUtil.getPatternPosition(this.typeNumber);
    for (var i = 0; i < pos.length; i++) {
      for (var j = 0; j < pos.length; j++) {
        var row = pos[i];
        var col = pos[j];
        if (this.modules[row][col] != null) {
          continue;
        }
        for (var r = -2; r <= 2; r++) {
          for (var c = -2; c <= 2; c++) {
            if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
              this.modules[row + r][col + c] = true;
            } else {
              this.modules[row + r][col + c] = false;
            }
          }
        }
      }
    }
  },
  /**
      * 设置版本信息（7以上版本才有）
      * @param  {bool} test 是否处于判断最佳掩膜阶段
      * @return {[type]}      [description]
      */
  setupTypeNumber: function setupTypeNumber(test) {
    var bits = QRUtil.getBCHTypeNumber(this.typeNumber);
    for (var i = 0; i < 18; i++) {
      var mod = !test && (bits >> i & 1) == 1;
      this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
      this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
    }
  },
  /**
      * 设置格式信息（纠错等级和掩膜版本）
      * @param  {bool} test
      * @param  {num} maskPattern 掩膜版本
      * @return {}
      */
  setupTypeInfo: function setupTypeInfo(test, maskPattern) {
    var data = QRErrorCorrectLevel[this.errorCorrectLevel] << 3 | maskPattern;
    var bits = QRUtil.getBCHTypeInfo(data);
    // vertical
    for (var i = 0; i < 15; i++) {
      var mod = !test && (bits >> i & 1) == 1;
      if (i < 6) {
        this.modules[i][8] = mod;
      } else if (i < 8) {
        this.modules[i + 1][8] = mod;
      } else {
        this.modules[this.moduleCount - 15 + i][8] = mod;
      }
      // horizontal
      var mod = !test && (bits >> i & 1) == 1;
      if (i < 8) {
        this.modules[8][this.moduleCount - i - 1] = mod;
      } else if (i < 9) {
        this.modules[8][15 - i - 1 + 1] = mod;
      } else {
        this.modules[8][15 - i - 1] = mod;
      }
    }
    // fixed module
    this.modules[this.moduleCount - 8][8] = !test;
  },
  /**
      * 数据编码
      * @return {[type]} [description]
      */
  createData: function createData() {
    var buffer = new QRBitBuffer();
    var lengthBits = this.typeNumber > 9 ? 16 : 8;
    buffer.put(4, 4); //添加模式
    buffer.put(this.utf8bytes.length, lengthBits);
    for (var i = 0, l = this.utf8bytes.length; i < l; i++) {
      buffer.put(this.utf8bytes[i], 8);
    }
    if (buffer.length + 4 <= this.totalDataCount * 8) {
      buffer.put(0, 4);
    }
    // padding
    while (buffer.length % 8 != 0) {
      buffer.putBit(false);
    }
    // padding
    while (true) {
      if (buffer.length >= this.totalDataCount * 8) {
        break;
      }
      buffer.put(QRCodeAlg.PAD0, 8);
      if (buffer.length >= this.totalDataCount * 8) {
        break;
      }
      buffer.put(QRCodeAlg.PAD1, 8);
    }
    return this.createBytes(buffer);
  },
  /**
      * 纠错码编码
      * @param  {buffer} buffer 数据编码
      * @return {[type]}
      */
  createBytes: function createBytes(buffer) {
    var offset = 0;
    var maxDcCount = 0;
    var maxEcCount = 0;
    var length = this.rsBlock.length / 3;
    var rsBlocks = new Array();
    for (var i = 0; i < length; i++) {
      var count = this.rsBlock[i * 3 + 0];
      var totalCount = this.rsBlock[i * 3 + 1];
      var dataCount = this.rsBlock[i * 3 + 2];
      for (var j = 0; j < count; j++) {
        rsBlocks.push([dataCount, totalCount]);
      }
    }
    var dcdata = new Array(rsBlocks.length);
    var ecdata = new Array(rsBlocks.length);
    for (var r = 0; r < rsBlocks.length; r++) {
      var dcCount = rsBlocks[r][0];
      var ecCount = rsBlocks[r][1] - dcCount;
      maxDcCount = Math.max(maxDcCount, dcCount);
      maxEcCount = Math.max(maxEcCount, ecCount);
      dcdata[r] = new Array(dcCount);
      for (var i = 0; i < dcdata[r].length; i++) {
        dcdata[r][i] = 0xff & buffer.buffer[i + offset];
      }
      offset += dcCount;
      var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
      var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
      var modPoly = rawPoly.mod(rsPoly);
      ecdata[r] = new Array(rsPoly.getLength() - 1);
      for (var i = 0; i < ecdata[r].length; i++) {
        var modIndex = i + modPoly.getLength() - ecdata[r].length;
        ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
      }
    }
    var data = new Array(this.totalDataCount);
    var index = 0;
    for (var i = 0; i < maxDcCount; i++) {
      for (var r = 0; r < rsBlocks.length; r++) {
        if (i < dcdata[r].length) {
          data[index++] = dcdata[r][i];
        }
      }
    }
    for (var i = 0; i < maxEcCount; i++) {
      for (var r = 0; r < rsBlocks.length; r++) {
        if (i < ecdata[r].length) {
          data[index++] = ecdata[r][i];
        }
      }
    }
    return data;

  },
  /**
      * 布置模块，构建最终信息
      * @param  {} data
      * @param  {} maskPattern
      * @return {}
      */
  mapData: function mapData(data, maskPattern) {
    var inc = -1;
    var row = this.moduleCount - 1;
    var bitIndex = 7;
    var byteIndex = 0;
    for (var col = this.moduleCount - 1; col > 0; col -= 2) {
      if (col == 6) col--;
      while (true) {
        for (var c = 0; c < 2; c++) {
          if (this.modules[row][col - c] == null) {
            var dark = false;
            if (byteIndex < data.length) {
              dark = (data[byteIndex] >>> bitIndex & 1) == 1;
            }
            var mask = QRUtil.getMask(maskPattern, row, col - c);
            if (mask) {
              dark = !dark;
            }
            this.modules[row][col - c] = dark;
            bitIndex--;
            if (bitIndex == -1) {
              byteIndex++;
              bitIndex = 7;
            }
          }
        }
        row += inc;
        if (row < 0 || this.moduleCount <= row) {
          row -= inc;
          inc = -inc;
          break;
        }
      }
    }
  } };

/**
        * 填充字段
        */
QRCodeAlg.PAD0 = 0xEC;
QRCodeAlg.PAD1 = 0x11;
//---------------------------------------------------------------------
// 纠错等级对应的编码
//---------------------------------------------------------------------
var QRErrorCorrectLevel = [1, 0, 3, 2];
//---------------------------------------------------------------------
// 掩膜版本
//---------------------------------------------------------------------
var QRMaskPattern = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7 };

//---------------------------------------------------------------------
// 工具类
//---------------------------------------------------------------------
var QRUtil = {
  /*
               每个版本矫正图形的位置
                */
  PATTERN_POSITION_TABLE: [
  [],
  [6, 18],
  [6, 22],
  [6, 26],
  [6, 30],
  [6, 34],
  [6, 22, 38],
  [6, 24, 42],
  [6, 26, 46],
  [6, 28, 50],
  [6, 30, 54],
  [6, 32, 58],
  [6, 34, 62],
  [6, 26, 46, 66],
  [6, 26, 48, 70],
  [6, 26, 50, 74],
  [6, 30, 54, 78],
  [6, 30, 56, 82],
  [6, 30, 58, 86],
  [6, 34, 62, 90],
  [6, 28, 50, 72, 94],
  [6, 26, 50, 74, 98],
  [6, 30, 54, 78, 102],
  [6, 28, 54, 80, 106],
  [6, 32, 58, 84, 110],
  [6, 30, 58, 86, 114],
  [6, 34, 62, 90, 118],
  [6, 26, 50, 74, 98, 122],
  [6, 30, 54, 78, 102, 126],
  [6, 26, 52, 78, 104, 130],
  [6, 30, 56, 82, 108, 134],
  [6, 34, 60, 86, 112, 138],
  [6, 30, 58, 86, 114, 142],
  [6, 34, 62, 90, 118, 146],
  [6, 30, 54, 78, 102, 126, 150],
  [6, 24, 50, 76, 102, 128, 154],
  [6, 28, 54, 80, 106, 132, 158],
  [6, 32, 58, 84, 110, 136, 162],
  [6, 26, 54, 82, 110, 138, 166],
  [6, 30, 58, 86, 114, 142, 170]],

  G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
  G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
  G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,
  /*
                                                           BCH编码格式信息
                                                            */
  getBCHTypeInfo: function getBCHTypeInfo(data) {
    var d = data << 10;
    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
      d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
    }
    return (data << 10 | d) ^ QRUtil.G15_MASK;
  },
  /*
     BCH编码版本信息
      */
  getBCHTypeNumber: function getBCHTypeNumber(data) {
    var d = data << 12;
    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
      d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
    }
    return data << 12 | d;
  },
  /*
     获取BCH位信息
      */
  getBCHDigit: function getBCHDigit(data) {
    var digit = 0;
    while (data != 0) {
      digit++;
      data >>>= 1;
    }
    return digit;
  },
  /*
     获取版本对应的矫正图形位置
      */
  getPatternPosition: function getPatternPosition(typeNumber) {
    return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
  },
  /*
     掩膜算法
      */
  getMask: function getMask(maskPattern, i, j) {
    switch (maskPattern) {
      case QRMaskPattern.PATTERN000:
        return (i + j) % 2 == 0;
      case QRMaskPattern.PATTERN001:
        return i % 2 == 0;
      case QRMaskPattern.PATTERN010:
        return j % 3 == 0;
      case QRMaskPattern.PATTERN011:
        return (i + j) % 3 == 0;
      case QRMaskPattern.PATTERN100:
        return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
      case QRMaskPattern.PATTERN101:
        return i * j % 2 + i * j % 3 == 0;
      case QRMaskPattern.PATTERN110:
        return (i * j % 2 + i * j % 3) % 2 == 0;
      case QRMaskPattern.PATTERN111:
        return (i * j % 3 + (i + j) % 2) % 2 == 0;
      default:
        throw new Error("bad maskPattern:" + maskPattern);}

  },
  /*
     获取RS的纠错多项式
      */
  getErrorCorrectPolynomial: function getErrorCorrectPolynomial(errorCorrectLength) {
    var a = new QRPolynomial([1], 0);
    for (var i = 0; i < errorCorrectLength; i++) {
      a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
    }
    return a;
  },
  /*
     获取评价
      */
  getLostPoint: function getLostPoint(qrCode) {
    var moduleCount = qrCode.getModuleCount(),
    lostPoint = 0,
    darkCount = 0;
    for (var row = 0; row < moduleCount; row++) {
      var sameCount = 0;
      var head = qrCode.modules[row][0];
      for (var col = 0; col < moduleCount; col++) {
        var current = qrCode.modules[row][col];
        //level 3 评价
        if (col < moduleCount - 6) {
          if (current && !qrCode.modules[row][col + 1] && qrCode.modules[row][col + 2] && qrCode.modules[row][col + 3] && qrCode.modules[row][col + 4] && !qrCode.modules[row][col + 5] && qrCode.modules[row][col + 6]) {
            if (col < moduleCount - 10) {
              if (qrCode.modules[row][col + 7] && qrCode.modules[row][col + 8] && qrCode.modules[row][col + 9] && qrCode.modules[row][col + 10]) {
                lostPoint += 40;
              }
            } else if (col > 3) {
              if (qrCode.modules[row][col - 1] && qrCode.modules[row][col - 2] && qrCode.modules[row][col - 3] && qrCode.modules[row][col - 4]) {
                lostPoint += 40;
              }
            }
          }
        }
        //level 2 评价
        if (row < moduleCount - 1 && col < moduleCount - 1) {
          var count = 0;
          if (current) count++;
          if (qrCode.modules[row + 1][col]) count++;
          if (qrCode.modules[row][col + 1]) count++;
          if (qrCode.modules[row + 1][col + 1]) count++;
          if (count == 0 || count == 4) {
            lostPoint += 3;
          }
        }
        //level 1 评价
        if (head ^ current) {
          sameCount++;
        } else {
          head = current;
          if (sameCount >= 5) {
            lostPoint += 3 + sameCount - 5;
          }
          sameCount = 1;
        }
        //level 4 评价
        if (current) {
          darkCount++;
        }
      }
    }
    for (var col = 0; col < moduleCount; col++) {
      var sameCount = 0;
      var head = qrCode.modules[0][col];
      for (var row = 0; row < moduleCount; row++) {
        var current = qrCode.modules[row][col];
        //level 3 评价
        if (row < moduleCount - 6) {
          if (current && !qrCode.modules[row + 1][col] && qrCode.modules[row + 2][col] && qrCode.modules[row + 3][col] && qrCode.modules[row + 4][col] && !qrCode.modules[row + 5][col] && qrCode.modules[row + 6][col]) {
            if (row < moduleCount - 10) {
              if (qrCode.modules[row + 7][col] && qrCode.modules[row + 8][col] && qrCode.modules[row + 9][col] && qrCode.modules[row + 10][col]) {
                lostPoint += 40;
              }
            } else if (row > 3) {
              if (qrCode.modules[row - 1][col] && qrCode.modules[row - 2][col] && qrCode.modules[row - 3][col] && qrCode.modules[row - 4][col]) {
                lostPoint += 40;
              }
            }
          }
        }
        //level 1 评价
        if (head ^ current) {
          sameCount++;
        } else {
          head = current;
          if (sameCount >= 5) {
            lostPoint += 3 + sameCount - 5;
          }
          sameCount = 1;
        }
      }
    }
    // LEVEL4
    var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
    lostPoint += ratio * 10;
    return lostPoint;
  } };


//---------------------------------------------------------------------
// QRMath使用的数学工具
//---------------------------------------------------------------------
var QRMath = {
  /*
               将n转化为a^m
                */
  glog: function glog(n) {
    if (n < 1) {
      throw new Error("glog(" + n + ")");
    }
    return QRMath.LOG_TABLE[n];
  },
  /*
     将a^m转化为n
      */
  gexp: function gexp(n) {
    while (n < 0) {
      n += 255;
    }
    while (n >= 256) {
      n -= 255;
    }
    return QRMath.EXP_TABLE[n];
  },
  EXP_TABLE: new Array(256),
  LOG_TABLE: new Array(256) };


for (var i = 0; i < 8; i++) {
  QRMath.EXP_TABLE[i] = 1 << i;
}
for (var i = 8; i < 256; i++) {
  QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
}
for (var i = 0; i < 255; i++) {
  QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
}
//---------------------------------------------------------------------
// QRPolynomial 多项式
//---------------------------------------------------------------------
/**
 * 多项式类
 * @param {Array} num   系数
 * @param {num} shift a^shift
 */
function QRPolynomial(num, shift) {
  if (num.length == undefined) {
    throw new Error(num.length + "/" + shift);
  }
  var offset = 0;
  while (offset < num.length && num[offset] == 0) {
    offset++;
  }
  this.num = new Array(num.length - offset + shift);
  for (var i = 0; i < num.length - offset; i++) {
    this.num[i] = num[i + offset];
  }
}
QRPolynomial.prototype = {
  get: function get(index) {
    return this.num[index];
  },
  getLength: function getLength() {
    return this.num.length;
  },
  /**
      * 多项式乘法
      * @param  {QRPolynomial} e 被乘多项式
      * @return {[type]}   [description]
      */
  multiply: function multiply(e) {
    var num = new Array(this.getLength() + e.getLength() - 1);
    for (var i = 0; i < this.getLength(); i++) {
      for (var j = 0; j < e.getLength(); j++) {
        num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));
      }
    }
    return new QRPolynomial(num, 0);
  },
  /**
      * 多项式模运算
      * @param  {QRPolynomial} e 模多项式
      * @return {}
      */
  mod: function mod(e) {
    var tl = this.getLength(),
    el = e.getLength();
    if (tl - el < 0) {
      return this;
    }
    var num = new Array(tl);
    for (var i = 0; i < tl; i++) {
      num[i] = this.get(i);
    }
    while (num.length >= el) {
      var ratio = QRMath.glog(num[0]) - QRMath.glog(e.get(0));

      for (var i = 0; i < e.getLength(); i++) {
        num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
      }
      while (num[0] == 0) {
        num.shift();
      }
    }
    return new QRPolynomial(num, 0);
  } };


//---------------------------------------------------------------------
// RS_BLOCK_TABLE
//---------------------------------------------------------------------
/*
二维码各个版本信息[块数, 每块中的数据块数, 每块中的信息块数]
 */
var RS_BLOCK_TABLE = [
// L
// M
// Q
// H
// 1
[1, 26, 19],
[1, 26, 16],
[1, 26, 13],
[1, 26, 9],

// 2
[1, 44, 34],
[1, 44, 28],
[1, 44, 22],
[1, 44, 16],

// 3
[1, 70, 55],
[1, 70, 44],
[2, 35, 17],
[2, 35, 13],

// 4
[1, 100, 80],
[2, 50, 32],
[2, 50, 24],
[4, 25, 9],

// 5
[1, 134, 108],
[2, 67, 43],
[2, 33, 15, 2, 34, 16],
[2, 33, 11, 2, 34, 12],

// 6
[2, 86, 68],
[4, 43, 27],
[4, 43, 19],
[4, 43, 15],

// 7
[2, 98, 78],
[4, 49, 31],
[2, 32, 14, 4, 33, 15],
[4, 39, 13, 1, 40, 14],

// 8
[2, 121, 97],
[2, 60, 38, 2, 61, 39],
[4, 40, 18, 2, 41, 19],
[4, 40, 14, 2, 41, 15],

// 9
[2, 146, 116],
[3, 58, 36, 2, 59, 37],
[4, 36, 16, 4, 37, 17],
[4, 36, 12, 4, 37, 13],

// 10
[2, 86, 68, 2, 87, 69],
[4, 69, 43, 1, 70, 44],
[6, 43, 19, 2, 44, 20],
[6, 43, 15, 2, 44, 16],

// 11
[4, 101, 81],
[1, 80, 50, 4, 81, 51],
[4, 50, 22, 4, 51, 23],
[3, 36, 12, 8, 37, 13],

// 12
[2, 116, 92, 2, 117, 93],
[6, 58, 36, 2, 59, 37],
[4, 46, 20, 6, 47, 21],
[7, 42, 14, 4, 43, 15],

// 13
[4, 133, 107],
[8, 59, 37, 1, 60, 38],
[8, 44, 20, 4, 45, 21],
[12, 33, 11, 4, 34, 12],

// 14
[3, 145, 115, 1, 146, 116],
[4, 64, 40, 5, 65, 41],
[11, 36, 16, 5, 37, 17],
[11, 36, 12, 5, 37, 13],

// 15
[5, 109, 87, 1, 110, 88],
[5, 65, 41, 5, 66, 42],
[5, 54, 24, 7, 55, 25],
[11, 36, 12],

// 16
[5, 122, 98, 1, 123, 99],
[7, 73, 45, 3, 74, 46],
[15, 43, 19, 2, 44, 20],
[3, 45, 15, 13, 46, 16],

// 17
[1, 135, 107, 5, 136, 108],
[10, 74, 46, 1, 75, 47],
[1, 50, 22, 15, 51, 23],
[2, 42, 14, 17, 43, 15],

// 18
[5, 150, 120, 1, 151, 121],
[9, 69, 43, 4, 70, 44],
[17, 50, 22, 1, 51, 23],
[2, 42, 14, 19, 43, 15],

// 19
[3, 141, 113, 4, 142, 114],
[3, 70, 44, 11, 71, 45],
[17, 47, 21, 4, 48, 22],
[9, 39, 13, 16, 40, 14],

// 20
[3, 135, 107, 5, 136, 108],
[3, 67, 41, 13, 68, 42],
[15, 54, 24, 5, 55, 25],
[15, 43, 15, 10, 44, 16],

// 21
[4, 144, 116, 4, 145, 117],
[17, 68, 42],
[17, 50, 22, 6, 51, 23],
[19, 46, 16, 6, 47, 17],

// 22
[2, 139, 111, 7, 140, 112],
[17, 74, 46],
[7, 54, 24, 16, 55, 25],
[34, 37, 13],

// 23
[4, 151, 121, 5, 152, 122],
[4, 75, 47, 14, 76, 48],
[11, 54, 24, 14, 55, 25],
[16, 45, 15, 14, 46, 16],

// 24
[6, 147, 117, 4, 148, 118],
[6, 73, 45, 14, 74, 46],
[11, 54, 24, 16, 55, 25],
[30, 46, 16, 2, 47, 17],

// 25
[8, 132, 106, 4, 133, 107],
[8, 75, 47, 13, 76, 48],
[7, 54, 24, 22, 55, 25],
[22, 45, 15, 13, 46, 16],

// 26
[10, 142, 114, 2, 143, 115],
[19, 74, 46, 4, 75, 47],
[28, 50, 22, 6, 51, 23],
[33, 46, 16, 4, 47, 17],

// 27
[8, 152, 122, 4, 153, 123],
[22, 73, 45, 3, 74, 46],
[8, 53, 23, 26, 54, 24],
[12, 45, 15, 28, 46, 16],

// 28
[3, 147, 117, 10, 148, 118],
[3, 73, 45, 23, 74, 46],
[4, 54, 24, 31, 55, 25],
[11, 45, 15, 31, 46, 16],

// 29
[7, 146, 116, 7, 147, 117],
[21, 73, 45, 7, 74, 46],
[1, 53, 23, 37, 54, 24],
[19, 45, 15, 26, 46, 16],

// 30
[5, 145, 115, 10, 146, 116],
[19, 75, 47, 10, 76, 48],
[15, 54, 24, 25, 55, 25],
[23, 45, 15, 25, 46, 16],

// 31
[13, 145, 115, 3, 146, 116],
[2, 74, 46, 29, 75, 47],
[42, 54, 24, 1, 55, 25],
[23, 45, 15, 28, 46, 16],

// 32
[17, 145, 115],
[10, 74, 46, 23, 75, 47],
[10, 54, 24, 35, 55, 25],
[19, 45, 15, 35, 46, 16],

// 33
[17, 145, 115, 1, 146, 116],
[14, 74, 46, 21, 75, 47],
[29, 54, 24, 19, 55, 25],
[11, 45, 15, 46, 46, 16],

// 34
[13, 145, 115, 6, 146, 116],
[14, 74, 46, 23, 75, 47],
[44, 54, 24, 7, 55, 25],
[59, 46, 16, 1, 47, 17],

// 35
[12, 151, 121, 7, 152, 122],
[12, 75, 47, 26, 76, 48],
[39, 54, 24, 14, 55, 25],
[22, 45, 15, 41, 46, 16],

// 36
[6, 151, 121, 14, 152, 122],
[6, 75, 47, 34, 76, 48],
[46, 54, 24, 10, 55, 25],
[2, 45, 15, 64, 46, 16],

// 37
[17, 152, 122, 4, 153, 123],
[29, 74, 46, 14, 75, 47],
[49, 54, 24, 10, 55, 25],
[24, 45, 15, 46, 46, 16],

// 38
[4, 152, 122, 18, 153, 123],
[13, 74, 46, 32, 75, 47],
[48, 54, 24, 14, 55, 25],
[42, 45, 15, 32, 46, 16],

// 39
[20, 147, 117, 4, 148, 118],
[40, 75, 47, 7, 76, 48],
[43, 54, 24, 22, 55, 25],
[10, 45, 15, 67, 46, 16],

// 40
[19, 148, 118, 6, 149, 119],
[18, 75, 47, 31, 76, 48],
[34, 54, 24, 34, 55, 25],
[20, 45, 15, 61, 46, 16]];


/**
                            * 根据数据获取对应版本
                            * @return {[type]} [description]
                            */
QRCodeAlg.prototype.getRightType = function () {
  for (var typeNumber = 1; typeNumber < 41; typeNumber++) {
    var rsBlock = RS_BLOCK_TABLE[(typeNumber - 1) * 4 + this.errorCorrectLevel];
    if (rsBlock == undefined) {
      throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + this.errorCorrectLevel);
    }
    var length = rsBlock.length / 3;
    var totalDataCount = 0;
    for (var i = 0; i < length; i++) {
      var count = rsBlock[i * 3 + 0];
      var dataCount = rsBlock[i * 3 + 2];
      totalDataCount += dataCount * count;
    }
    var lengthBytes = typeNumber > 9 ? 2 : 1;
    if (this.utf8bytes.length + lengthBytes < totalDataCount || typeNumber == 40) {
      this.typeNumber = typeNumber;
      this.rsBlock = rsBlock;
      this.totalDataCount = totalDataCount;
      break;
    }
  }
};

//---------------------------------------------------------------------
// QRBitBuffer
//---------------------------------------------------------------------
function QRBitBuffer() {
  this.buffer = new Array();
  this.length = 0;
}
QRBitBuffer.prototype = {
  get: function get(index) {
    var bufIndex = Math.floor(index / 8);
    return this.buffer[bufIndex] >>> 7 - index % 8 & 1;
  },
  put: function put(num, length) {
    for (var i = 0; i < length; i++) {
      this.putBit(num >>> length - i - 1 & 1);
    }
  },
  putBit: function putBit(bit) {
    var bufIndex = Math.floor(this.length / 8);
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0);
    }
    if (bit) {
      this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
    }
    this.length++;
  } };

/***/ }),

/***/ 283:
/*!**********************************************************************!*\
  !*** C:/Users/DELL/-health/components/QS-SharePoster/image-tools.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.pathToBase64 = pathToBase64;exports.base64ToPath = base64ToPath;function getLocalFilePath(path) {
  if (path.indexOf('_www') === 0 || path.indexOf('_doc') === 0 || path.indexOf('_documents') === 0 || path.indexOf('_downloads') === 0) {
    return path;
  }
  if (path.indexOf('file://') === 0) {
    return path;
  }
  if (path.indexOf('/storage/emulated/0/') === 0) {
    return path;
  }
  if (path.indexOf('/') === 0) {
    var localFilePath = plus.io.convertAbsoluteFileSystem(path);
    if (localFilePath !== path) {
      return localFilePath;
    } else {
      path = path.substr(1);
    }
  }
  return '_www/' + path;
}

function pathToBase64(path) {
  return new Promise(function (resolve, reject) {
    if (typeof window === 'object' && 'document' in window) {
      if (typeof FileReader === 'function') {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', path, true);
        xhr.responseType = 'blob';
        xhr.onload = function () {
          if (this.status === 200) {
            var fileReader = new FileReader();
            fileReader.onload = function (e) {
              resolve(e.target.result);
            };
            fileReader.onerror = reject;
            fileReader.readAsDataURL(this.response);
          }
        };
        xhr.onerror = reject;
        xhr.send();
        return;
      }
      var canvas = document.createElement('canvas');
      var c2x = canvas.getContext('2d');
      var img = new Image();
      img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        c2x.drawImage(img, 0, 0);
        resolve(canvas.toDataURL());
        canvas.height = canvas.width = 0;
      };
      img.onerror = reject;
      img.src = path;
      return;
    }
    if (typeof plus === 'object') {
      plus.io.resolveLocalFileSystemURL(getLocalFilePath(path), function (entry) {
        entry.file(function (file) {
          var fileReader = new plus.io.FileReader();
          fileReader.onload = function (data) {
            resolve(data.target.result);
          };
          fileReader.onerror = function (error) {
            reject(error);
          };
          fileReader.readAsDataURL(file);
        }, function (error) {
          reject(error);
        });
      }, function (error) {
        reject(error);
      });
      return;
    }
    if (typeof wx === 'object' && wx.canIUse('getFileSystemManager')) {
      wx.getFileSystemManager().readFile({
        filePath: path,
        encoding: 'base64',
        success: function success(res) {
          resolve('data:image/png;base64,' + res.data);
        },
        fail: function fail(error) {
          reject(error);
        } });

      return;
    }
    reject(new Error('not support'));
  });
}

function base64ToPath(base64) {
  return new Promise(function (resolve, reject) {
    if (typeof window === 'object' && 'document' in window) {
      base64 = base64.split(',');
      var type = base64[0].match(/:(.*?);/)[1];
      var str = atob(base64[1]);
      var n = str.length;
      var array = new Uint8Array(n);
      while (n--) {
        array[n] = str.charCodeAt(n);
      }
      return resolve((window.URL || window.webkitURL).createObjectURL(new Blob([array], { type: type })));
    }
    var extName = base64.match(/data\:\S+\/(\S+);/);
    if (extName) {
      extName = extName[1];
    } else {
      reject(new Error('base64 error'));
    }
    var fileName = Date.now() + '.' + extName;
    if (typeof plus === 'object') {
      var bitmap = new plus.nativeObj.Bitmap('bitmap' + Date.now());
      bitmap.loadBase64Data(base64, function () {
        var filePath = '_doc/uniapp_temp/' + fileName;
        bitmap.save(filePath, {}, function () {
          bitmap.clear();
          resolve(filePath);
        }, function (error) {
          bitmap.clear();
          reject(error);
        });
      }, function (error) {
        bitmap.clear();
        reject(error);
      });
      return;
    }
    if (typeof wx === 'object' && wx.canIUse('getFileSystemManager')) {
      var filePath = wx.env.USER_DATA_PATH + '/' + fileName;
      wx.getFileSystemManager().writeFile({
        filePath: filePath,
        data: base64.replace(/^data:\S+\/\S+;base64,/, ''),
        encoding: 'base64',
        success: function success() {
          resolve(filePath);
        },
        fail: function fail(error) {
          reject(error);
        } });

      return;
    }
    reject(new Error('not support'));
  });
}

/***/ }),

/***/ 308:
/*!************************************************************!*\
  !*** C:/Users/DELL/-health/components/u-charts/checker.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  error: '',
  isJSON: function isJSON(str) {
    if (typeof str == 'string') {
      try {
        var obj = JSON.parse(str);
        if (typeof obj == 'object' && obj) {
          return true;
        } else {
          return false;
        }
      } catch (e) {
        console.log('error：' + str + '!!!' + e);
        return false;
      }
    }
  },
  isNumber: function isNumber(checkVal) {
    var reg = /^-?[1-9][0-9]?.?[0-9]*$/;
    return reg.test(checkVal);
  } };

/***/ }),

/***/ 317:
/*!*****************************************************!*\
  !*** C:/Users/DELL/-health/common/geocode-utils.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import QQMapWX from "./qqmap-wx-jssdk.js";
// import AmapWX from './amap-wx.js'
// var amapKey="83dd75107efbb10605ef3f89c4f76527";
// /** 
//  * 此方法为腾讯位置服务方法  日调用量1万次/key,并发数5次/key/秒
//  * @param {Object} location
//  * @param {Object} callback
//  */
// function tencentGeocode(lat, lon, callback) {
// 	const qqmapsdk = new QQMapWX({
// 		key: "SQYBZ-GEGRF-7YJJL-JCRZJ-BYD32-2XBZV" //自己申请的key
// 	});
// 	let location = {
// 		latitude: lat,
// 		longitude: lon
// 	}
// 	qqmapsdk.reverseGeocoder({
// 		location: location,
// 		success(addressRes) {
// 			let address = addressRes.result.address
// 			callback(address)
// 			console.log('腾讯->', address)
// 		},
// 		fail(res) {
// 			console.log('失败', res)
// 		}
// 	});
// }
// /** 
//  * 附近搜索
//  * @param {Object} location
//  * @param {Object} callback
//  */
// function getPoiAround(lat, lon,keywords,callback) {
// 	const amapPlugin = new AmapWX.AMapWX({
// 	 key: amapKey
// 	});
// 	let location = '' + lon + ',' + lat + '';

// 	amapPlugin.getPoiAround({
// 	 location: location, //location的格式为'经度,纬度'，
// 	 querykeywords:keywords,
// 	 //成功回调
// 	 success: function(data) {
// 	  callback(data)
// 	  //console.log("附近->", data)
// 	 },
// 	 fail: function(info) {
// 	  //失败回调
// 	  console.log(info)

// 	 }
// 	})

//    }
// /** 
//  * 此方法为高德位置服务方法  
//  * @param {Object} location
//  * @param {Object} callback
//  */
// function amapGeocode(lat, lon, callback) {
// 	const amapPlugin = new AmapWX.AMapWX({
// 		key: "83dd75107efbb10605ef3f89c4f76527"
// 	});
// 	let location = '' + lon + ',' + lat + '';
// 	amapPlugin.getRegeo({
// 		location: location, //location的格式为'经度,纬度'
// 		//成功回调
// 		success: function(data) {
// 			let address = data[0].name + data[0].desc
// 			callback(address)
// 			// console.log("高德->", address)
// 		},
// 		fail: function(info) {
// 			//失败回调
// 			console.log(info)
// 			// 定位权限未开启，引导设置
// 			// uni.showModal({
// 			// 	title: '温馨提示',
// 			// 	content: '您已拒绝定位,请开启',
// 			// 	confirmText: '去设置',
// 			// 	success(res) {
// 			// 		if (res.confirm) {
// 			// 			//打开授权设置
// 			// 			that.openSetting()
// 			// 		}
// 			// 	}
// 			// })
// 		}
// 	})

// }

// export default {
// 	tencentGeocode,
// 	amapGeocode,
// 	getPoiAround
// }

/***/ }),

/***/ 334:
/*!******************************************************!*\
  !*** C:/Users/DELL/-health/common/qqmap-wx-jssdk.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// /**
//  * 微信小程序JavaScriptSDK
//  * 
//  * @version 1.2
//  * @date 2019-03-06
//  * @author v_ylyue@tencent.com
//  */

// var ERROR_CONF = {
//     KEY_ERR: 311,
//     KEY_ERR_MSG: 'key格式错误',
//     PARAM_ERR: 310,
//     PARAM_ERR_MSG: '请求参数信息有误',
//     SYSTEM_ERR: 600,
//     SYSTEM_ERR_MSG: '系统错误',
//     WX_ERR_CODE: 1000,
//     WX_OK_CODE: 200
// };
// var BASE_URL = 'https://apis.map.qq.com/ws/';
// var URL_SEARCH = BASE_URL + 'place/v1/search';
// var URL_SUGGESTION = BASE_URL + 'place/v1/suggestion';
// var URL_GET_GEOCODER = BASE_URL + 'geocoder/v1/';
// var URL_CITY_LIST = BASE_URL + 'district/v1/list';
// var URL_AREA_LIST = BASE_URL + 'district/v1/getchildren';
// var URL_DISTANCE = BASE_URL + 'distance/v1/';
// var URL_DIRECTION = BASE_URL + 'direction/v1/';
// var MODE = {
//   driving: 'driving',
//   transit: 'transit'
// };
// var EARTH_RADIUS = 6378136.49;
// var Utils = {
//   /**
//   * md5加密方法
//   * 版权所有©2011 Sebastian Tschan，https：//blueimp.net
//   */
//   safeAdd(x, y) {
//     var lsw = (x & 0xffff) + (y & 0xffff);
//     var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
//     return (msw << 16) | (lsw & 0xffff);
//   },
//   bitRotateLeft(num, cnt) {
//     return (num << cnt) | (num >>> (32 - cnt));
//   },
//   md5cmn(q, a, b, x, s, t) {
//     return this.safeAdd(this.bitRotateLeft(this.safeAdd(this.safeAdd(a, q), this.safeAdd(x, t)), s), b);
//   },
//   md5ff(a, b, c, d, x, s, t) {
//     return this.md5cmn((b & c) | (~b & d), a, b, x, s, t);
//   },
//   md5gg(a, b, c, d, x, s, t) {
//     return this.md5cmn((b & d) | (c & ~d), a, b, x, s, t);
//   },
//   md5hh(a, b, c, d, x, s, t) {
//     return this.md5cmn(b ^ c ^ d, a, b, x, s, t);
//   },
//   md5ii(a, b, c, d, x, s, t) {
//     return this.md5cmn(c ^ (b | ~d), a, b, x, s, t);
//   },
//   binlMD5(x, len) {
//     /* append padding */
//     x[len >> 5] |= 0x80 << (len % 32);
//     x[((len + 64) >>> 9 << 4) + 14] = len;

//     var i;
//     var olda;
//     var oldb;
//     var oldc;
//     var oldd;
//     var a = 1732584193;
//     var b = -271733879;
//     var c = -1732584194;
//     var d = 271733878;

//     for (i = 0; i < x.length; i += 16) {
//       olda = a;
//       oldb = b;
//       oldc = c;
//       oldd = d;

//       a = this.md5ff(a, b, c, d, x[i], 7, -680876936);
//       d = this.md5ff(d, a, b, c, x[i + 1], 12, -389564586);
//       c = this.md5ff(c, d, a, b, x[i + 2], 17, 606105819);
//       b = this.md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
//       a = this.md5ff(a, b, c, d, x[i + 4], 7, -176418897);
//       d = this.md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
//       c = this.md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
//       b = this.md5ff(b, c, d, a, x[i + 7], 22, -45705983);
//       a = this.md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
//       d = this.md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
//       c = this.md5ff(c, d, a, b, x[i + 10], 17, -42063);
//       b = this.md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
//       a = this.md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
//       d = this.md5ff(d, a, b, c, x[i + 13], 12, -40341101);
//       c = this.md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
//       b = this.md5ff(b, c, d, a, x[i + 15], 22, 1236535329);

//       a = this.md5gg(a, b, c, d, x[i + 1], 5, -165796510);
//       d = this.md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
//       c = this.md5gg(c, d, a, b, x[i + 11], 14, 643717713);
//       b = this.md5gg(b, c, d, a, x[i], 20, -373897302);
//       a = this.md5gg(a, b, c, d, x[i + 5], 5, -701558691);
//       d = this.md5gg(d, a, b, c, x[i + 10], 9, 38016083);
//       c = this.md5gg(c, d, a, b, x[i + 15], 14, -660478335);
//       b = this.md5gg(b, c, d, a, x[i + 4], 20, -405537848);
//       a = this.md5gg(a, b, c, d, x[i + 9], 5, 568446438);
//       d = this.md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
//       c = this.md5gg(c, d, a, b, x[i + 3], 14, -187363961);
//       b = this.md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
//       a = this.md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
//       d = this.md5gg(d, a, b, c, x[i + 2], 9, -51403784);
//       c = this.md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
//       b = this.md5gg(b, c, d, a, x[i + 12], 20, -1926607734);

//       a = this.md5hh(a, b, c, d, x[i + 5], 4, -378558);
//       d = this.md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
//       c = this.md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
//       b = this.md5hh(b, c, d, a, x[i + 14], 23, -35309556);
//       a = this.md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
//       d = this.md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
//       c = this.md5hh(c, d, a, b, x[i + 7], 16, -155497632);
//       b = this.md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
//       a = this.md5hh(a, b, c, d, x[i + 13], 4, 681279174);
//       d = this.md5hh(d, a, b, c, x[i], 11, -358537222);
//       c = this.md5hh(c, d, a, b, x[i + 3], 16, -722521979);
//       b = this.md5hh(b, c, d, a, x[i + 6], 23, 76029189);
//       a = this.md5hh(a, b, c, d, x[i + 9], 4, -640364487);
//       d = this.md5hh(d, a, b, c, x[i + 12], 11, -421815835);
//       c = this.md5hh(c, d, a, b, x[i + 15], 16, 530742520);
//       b = this.md5hh(b, c, d, a, x[i + 2], 23, -995338651);

//       a = this.md5ii(a, b, c, d, x[i], 6, -198630844);
//       d = this.md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
//       c = this.md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
//       b = this.md5ii(b, c, d, a, x[i + 5], 21, -57434055);
//       a = this.md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
//       d = this.md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
//       c = this.md5ii(c, d, a, b, x[i + 10], 15, -1051523);
//       b = this.md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
//       a = this.md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
//       d = this.md5ii(d, a, b, c, x[i + 15], 10, -30611744);
//       c = this.md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
//       b = this.md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
//       a = this.md5ii(a, b, c, d, x[i + 4], 6, -145523070);
//       d = this.md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
//       c = this.md5ii(c, d, a, b, x[i + 2], 15, 718787259);
//       b = this.md5ii(b, c, d, a, x[i + 9], 21, -343485551);

//       a = this.safeAdd(a, olda);
//       b = this.safeAdd(b, oldb);
//       c = this.safeAdd(c, oldc);
//       d = this.safeAdd(d, oldd);
//     }
//     return [a, b, c, d];
//   },
//   binl2rstr(input) {
//     var i;
//     var output = '';
//     var length32 = input.length * 32;
//     for (i = 0; i < length32; i += 8) {
//       output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xff);
//     }
//     return output;
//   },
//   rstr2binl(input) {
//     var i;
//     var output = [];
//     output[(input.length >> 2) - 1] = undefined;
//     for (i = 0; i < output.length; i += 1) {
//       output[i] = 0;
//     }
//     var length8 = input.length * 8;
//     for (i = 0; i < length8; i += 8) {
//       output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << (i % 32);
//     }
//     return output;
//   },
//   rstrMD5(s) {
//     return this.binl2rstr(this.binlMD5(this.rstr2binl(s), s.length * 8));
//   },
//   rstrHMACMD5(key, data) {
//     var i;
//     var bkey = this.rstr2binl(key);
//     var ipad = [];
//     var opad = [];
//     var hash;
//     ipad[15] = opad[15] = undefined;
//     if (bkey.length > 16) {
//       bkey = this.binlMD5(bkey, key.length * 8);
//     }
//     for (i = 0; i < 16; i += 1) {
//       ipad[i] = bkey[i] ^ 0x36363636;
//       opad[i] = bkey[i] ^ 0x5c5c5c5c;
//     }
//     hash = this.binlMD5(ipad.concat(this.rstr2binl(data)), 512 + data.length * 8);
//     return this.binl2rstr(this.binlMD5(opad.concat(hash), 512 + 128));
//   },
//   rstr2hex(input) {
//     var hexTab = '0123456789abcdef';
//     var output = '';
//     var x;
//     var i;
//     for (i = 0; i < input.length; i += 1) {
//       x = input.charCodeAt(i);
//       output += hexTab.charAt((x >>> 4) & 0x0f) + hexTab.charAt(x & 0x0f);
//     }
//     return output;
//   },
//   str2rstrUTF8(input) {
//     return unescape(encodeURIComponent(input));
//   },
//   rawMD5(s) {
//     return this.rstrMD5(this.str2rstrUTF8(s));
//   },
//   hexMD5(s) {
//     return this.rstr2hex(this.rawMD5(s));
//   },
//   rawHMACMD5(k, d) {
//     return this.rstrHMACMD5(this.str2rstrUTF8(k), str2rstrUTF8(d));
//   },
//   hexHMACMD5(k, d) {
//     return this.rstr2hex(this.rawHMACMD5(k, d));
//   },

//   md5(string, key, raw) {
//     if (!key) {
//       if (!raw) {
//         return this.hexMD5(string);
//       }
//       return this.rawMD5(string);
//     }
//     if (!raw) {
//       return this.hexHMACMD5(key, string);
//     }
//     return this.rawHMACMD5(key, string);
//   },
//   /**
//    * 得到md5加密后的sig参数
//    * @param {Object} requestParam 接口参数
//    * @param {String} sk签名字符串
//    * @param {String} featrue 方法名
//    * @return 返回加密后的sig参数
//    */
//   getSig(requestParam, sk, feature, mode) {
//     var sig = null;
//     var requestArr = [];
//     Object.keys(requestParam).sort().forEach(function(key){
//       requestArr.push(key + '=' + requestParam[key]);
//     });
//     if (feature == 'search') {
//       sig = '/ws/place/v1/search?' + requestArr.join('&') + sk;
//     }
//     if (feature == 'suggest') {
//       sig = '/ws/place/v1/suggestion?' + requestArr.join('&') + sk;
//     }
//     if (feature == 'reverseGeocoder') {
//       sig = '/ws/geocoder/v1/?' + requestArr.join('&') + sk;
//     }
//     if (feature == 'geocoder') {
//       sig = '/ws/geocoder/v1/?' + requestArr.join('&') + sk;
//     }
//     if (feature == 'getCityList') {
//       sig = '/ws/district/v1/list?' + requestArr.join('&') + sk;
//     }
//     if (feature == 'getDistrictByCityId') {
//       sig = '/ws/district/v1/getchildren?' + requestArr.join('&') + sk;
//     }
//     if (feature == 'calculateDistance') {
//       sig = '/ws/distance/v1/?' + requestArr.join('&') + sk;
//     }
//     if (feature == 'direction') {
//       sig = '/ws/direction/v1/' + mode + '?' + requestArr.join('&') + sk;
//     }
//     sig = this.md5(sig);
//     return sig;
//   },
//     /**
//      * 得到终点query字符串
//      * @param {Array|String} 检索数据
//      */
//     location2query(data) {
//         if (typeof data == 'string') {
//             return data;
//         }
//         var query = '';
//         for (var i = 0; i < data.length; i++) {
//             var d = data[i];
//             if (!!query) {
//                 query += ';';
//             }
//             if (d.location) {
//                 query = query + d.location.lat + ',' + d.location.lng;
//             }
//             if (d.latitude && d.longitude) {
//                 query = query + d.latitude + ',' + d.longitude;
//             }
//         }
//         return query;
//     },

//     /**
//      * 计算角度
//      */
//     rad(d) {
//       return d * Math.PI / 180.0;
//     },  
//     /**
//      * 处理终点location数组
//      * @return 返回终点数组
//      */
//     getEndLocation(location){
//       var to = location.split(';');
//       var endLocation = [];
//       for (var i = 0; i < to.length; i++) {
//         endLocation.push({
//           lat: parseFloat(to[i].split(',')[0]),
//           lng: parseFloat(to[i].split(',')[1])
//         })
//       }
//       return endLocation;
//     },

//     /**
//      * 计算两点间直线距离
//      * @param a 表示纬度差
//      * @param b 表示经度差
//      * @return 返回的是距离，单位m
//      */
//     getDistance(latFrom, lngFrom, latTo, lngTo) {
//       var radLatFrom = this.rad(latFrom);
//       var radLatTo = this.rad(latTo);
//       var a = radLatFrom - radLatTo;
//       var b = this.rad(lngFrom) - this.rad(lngTo);
//       var distance = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLatFrom) * Math.cos(radLatTo) * Math.pow(Math.sin(b / 2), 2)));
//       distance = distance * EARTH_RADIUS;
//       distance = Math.round(distance * 10000) / 10000;
//       return parseFloat(distance.toFixed(0));
//     },
//     /**
//      * 使用微信接口进行定位
//      */
//     getWXLocation(success, fail, complete) {
//         wx.getLocation({
//             type: 'gcj02',
//             success: success,
//             fail: fail,
//             complete: complete
//         });
//     },

//     /**
//      * 获取location参数
//      */
//     getLocationParam(location) {
//         if (typeof location == 'string') {
//             var locationArr = location.split(',');
//             if (locationArr.length === 2) {
//                 location = {
//                     latitude: location.split(',')[0],
//                     longitude: location.split(',')[1]
//                 };
//             } else {
//                 location = {};
//             }
//         }
//         return location;
//     },

//     /**
//      * 回调函数默认处理
//      */
//     polyfillParam(param) {
//         param.success = param.success || function () { };
//         param.fail = param.fail || function () { };
//         param.complete = param.complete || function () { };
//     },

//     /**
//      * 验证param对应的key值是否为空
//      * 
//      * @param {Object} param 接口参数
//      * @param {String} key 对应参数的key
//      */
//     checkParamKeyEmpty(param, key) {
//         if (!param[key]) {
//             var errconf = this.buildErrorConfig(ERROR_CONF.PARAM_ERR, ERROR_CONF.PARAM_ERR_MSG + key +'参数格式有误');
//             param.fail(errconf);
//             param.complete(errconf);
//             return true;
//         }
//         return false;
//     },

//     /**
//      * 验证参数中是否存在检索词keyword
//      * 
//      * @param {Object} param 接口参数
//      */
//     checkKeyword(param){
//         return !this.checkParamKeyEmpty(param, 'keyword');
//     },

//     /**
//      * 验证location值
//      * 
//      * @param {Object} param 接口参数
//      */
//     checkLocation(param) {
//         var location = this.getLocationParam(param.location);
//         if (!location || !location.latitude || !location.longitude) {
//             var errconf = this.buildErrorConfig(ERROR_CONF.PARAM_ERR, ERROR_CONF.PARAM_ERR_MSG + ' location参数格式有误');
//             param.fail(errconf);
//             param.complete(errconf);
//             return false;
//         }
//         return true;
//     },

//     /**
//      * 构造错误数据结构
//      * @param {Number} errCode 错误码
//      * @param {Number} errMsg 错误描述
//      */
//     buildErrorConfig(errCode, errMsg) {
//         return {
//             status: errCode,
//             message: errMsg
//         };
//     },

//     /**
//      * 
//      * 数据处理函数
//      * 根据传入参数不同处理不同数据
//      * @param {String} feature 功能名称
//      * search 地点搜索
//      * suggest关键词提示
//      * reverseGeocoder逆地址解析
//      * geocoder地址解析
//      * getCityList获取城市列表：父集
//      * getDistrictByCityId获取区县列表：子集
//      * calculateDistance距离计算
//      * @param {Object} param 接口参数
//      * @param {Object} data 数据
//      */
//     handleData(param,data,feature){
//       if (feature == 'search') {
//         var searchResult = data.data;
//         var searchSimplify = [];
//         for (var i = 0; i < searchResult.length; i++) {
//           searchSimplify.push({
//             id: searchResult[i].id || null,
//             title: searchResult[i].title || null,
//             latitude: searchResult[i].location && searchResult[i].location.lat || null,
//             longitude: searchResult[i].location && searchResult[i].location.lng || null,
//             address: searchResult[i].address || null,
//             category: searchResult[i].category || null,
//             tel: searchResult[i].tel || null,
//             adcode: searchResult[i].ad_info && searchResult[i].ad_info.adcode || null,
//             city: searchResult[i].ad_info && searchResult[i].ad_info.city || null,
//             district: searchResult[i].ad_info && searchResult[i].ad_info.district || null,
//             province: searchResult[i].ad_info && searchResult[i].ad_info.province || null
//           })
//         }
//         param.success(data, {
//           searchResult: searchResult,
//           searchSimplify: searchSimplify
//         })
//       } else if (feature == 'suggest') {
//         var suggestResult = data.data;
//         var suggestSimplify = [];
//         for (var i = 0; i < suggestResult.length; i++) {
//           suggestSimplify.push({
//             adcode: suggestResult[i].adcode || null,
//             address: suggestResult[i].address || null,
//             category: suggestResult[i].category || null,
//             city: suggestResult[i].city || null,
//             district: suggestResult[i].district || null,
//             id: suggestResult[i].id || null,
//             latitude: suggestResult[i].location && suggestResult[i].location.lat || null,
//             longitude: suggestResult[i].location && suggestResult[i].location.lng || null,
//             province: suggestResult[i].province || null,
//             title: suggestResult[i].title || null,
//             type: suggestResult[i].type || null
//           })
//         }
//         param.success(data, {
//           suggestResult: suggestResult,
//           suggestSimplify: suggestSimplify
//           })
//       } else if (feature == 'reverseGeocoder') {
//         var reverseGeocoderResult = data.result;
//         var reverseGeocoderSimplify = {
//           address: reverseGeocoderResult.address || null,
//           latitude: reverseGeocoderResult.location && reverseGeocoderResult.location.lat || null,
//           longitude: reverseGeocoderResult.location && reverseGeocoderResult.location.lng || null,
//           adcode: reverseGeocoderResult.ad_info && reverseGeocoderResult.ad_info.adcode || null,
//           city: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.city || null,
//           district: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.district || null,
//           nation: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.nation || null,
//           province: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.province || null,
//           street: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.street || null,
//           street_number: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.street_number || null,
//           recommend: reverseGeocoderResult.formatted_addresses && reverseGeocoderResult.formatted_addresses.recommend || null,
//           rough: reverseGeocoderResult.formatted_addresses && reverseGeocoderResult.formatted_addresses.rough || null
//         };
//         if (reverseGeocoderResult.pois) {//判断是否返回周边poi
//           var pois = reverseGeocoderResult.pois;
//           var poisSimplify = [];
//           for (var i = 0;i < pois.length;i++) {
//             poisSimplify.push({
//               id: pois[i].id || null,
//               title: pois[i].title || null,
//               latitude: pois[i].location && pois[i].location.lat || null,
//               longitude: pois[i].location && pois[i].location.lng || null,
//               address: pois[i].address || null,
//               category: pois[i].category || null,
//               adcode: pois[i].ad_info && pois[i].ad_info.adcode || null,
//               city: pois[i].ad_info && pois[i].ad_info.city || null,
//               district: pois[i].ad_info && pois[i].ad_info.district || null,
//               province: pois[i].ad_info && pois[i].ad_info.province || null
//             })
//           }
//           param.success(data,{
//             reverseGeocoderResult: reverseGeocoderResult,
//             reverseGeocoderSimplify: reverseGeocoderSimplify,
//             pois: pois,
//             poisSimplify: poisSimplify
//           })
//         } else {
//           param.success(data, {
//             reverseGeocoderResult: reverseGeocoderResult,
//             reverseGeocoderSimplify: reverseGeocoderSimplify
//           })
//         }
//       } else if (feature == 'geocoder') {
//         var geocoderResult = data.result;
//         var geocoderSimplify = {
//           title: geocoderResult.title || null,
//           latitude: geocoderResult.location && geocoderResult.location.lat || null,
//           longitude: geocoderResult.location && geocoderResult.location.lng || null,
//           adcode: geocoderResult.ad_info && geocoderResult.ad_info.adcode || null,
//           province: geocoderResult.address_components && geocoderResult.address_components.province || null,
//           city: geocoderResult.address_components && geocoderResult.address_components.city || null,
//           district: geocoderResult.address_components && geocoderResult.address_components.district || null,
//           street: geocoderResult.address_components && geocoderResult.address_components.street || null,
//           street_number: geocoderResult.address_components && geocoderResult.address_components.street_number || null,
//           level: geocoderResult.level || null
//         };
//         param.success(data,{
//           geocoderResult: geocoderResult,
//           geocoderSimplify: geocoderSimplify
//         });
//       } else if (feature == 'getCityList') {
//         var provinceResult = data.result[0];
//         var cityResult = data.result[1];
//         var districtResult = data.result[2];
//         param.success(data,{
//           provinceResult: provinceResult,
//           cityResult: cityResult,
//           districtResult: districtResult
//         });
//       } else if (feature == 'getDistrictByCityId') {
//         var districtByCity = data.result[0];
//         param.success(data, districtByCity);
//       } else if (feature == 'calculateDistance') {
//         var calculateDistanceResult = data.result.elements;  
//         var distance = [];
//         for (var i = 0; i < calculateDistanceResult.length; i++){
//           distance.push(calculateDistanceResult[i].distance);
//         }   
//         param.success(data, {
//           calculateDistanceResult: calculateDistanceResult,
//           distance: distance
//           });
//       } else if (feature == 'direction') {
//         var direction = data.result.routes;
//         param.success(data,direction);
//       } else {
//         param.success(data);
//       }
//     },

//     /**
//      * 构造微信请求参数，公共属性处理
//      * 
//      * @param {Object} param 接口参数
//      * @param {Object} param 配置项
//      * @param {String} feature 方法名
//      */
//     buildWxRequestConfig(param, options, feature) {
//         var that = this;
//         options.header = { "content-type": "application/json" };
//         options.method = 'GET';
//         options.success = function (res) {
//             var data = res.data;
//             if (data.status === 0) {
//               that.handleData(param, data, feature);
//             } else {
//                 param.fail(data);
//             }
//         };
//         options.fail = function (res) {
//             res.statusCode = ERROR_CONF.WX_ERR_CODE;
//             param.fail(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
//         };
//         options.complete = function (res) {
//             var statusCode = +res.statusCode;
//             switch(statusCode) {
//                 case ERROR_CONF.WX_ERR_CODE: {
//                     param.complete(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
//                     break;
//                 }
//                 case ERROR_CONF.WX_OK_CODE: {
//                     var data = res.data;
//                     if (data.status === 0) {
//                         param.complete(data);
//                     } else {
//                         param.complete(that.buildErrorConfig(data.status, data.message));
//                     }
//                     break;
//                 }
//                 default:{
//                     param.complete(that.buildErrorConfig(ERROR_CONF.SYSTEM_ERR, ERROR_CONF.SYSTEM_ERR_MSG));
//                 }

//             }
//         };
//         return options;
//     },

//     /**
//      * 处理用户参数是否传入坐标进行不同的处理
//      */
//     locationProcess(param, locationsuccess, locationfail, locationcomplete) {
//         var that = this;
//         locationfail = locationfail || function (res) {
//             res.statusCode = ERROR_CONF.WX_ERR_CODE;
//             param.fail(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
//         };
//         locationcomplete = locationcomplete || function (res) {
//             if (res.statusCode == ERROR_CONF.WX_ERR_CODE) {
//                 param.complete(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
//             }
//         };
//         if (!param.location) {
//             that.getWXLocation(locationsuccess, locationfail, locationcomplete);
//         } else if (that.checkLocation(param)) {
//             var location = Utils.getLocationParam(param.location);
//             locationsuccess(location);
//         }
//     }
// };


// class QQMapWX {

//     /**
//      * 构造函数
//      * 
//      * @param {Object} options 接口参数,key 为必选参数
//      */
//     constructor(options) {
//         if (!options.key) {
//             throw Error('key值不能为空');
//         }
//         this.key = options.key;
//     };

//     /**
//      * POI周边检索
//      *
//      * @param {Object} options 接口参数对象
//      * 
//      * 参数对象结构可以参考
//      * @see http://lbs.qq.com/webservice_v1/guide-search.html
//      */
//     search(options) {
//         var that = this;
//         options = options || {};

//         Utils.polyfillParam(options);

//         if (!Utils.checkKeyword(options)) {
//             return;
//         }

//         var requestParam = {
//             keyword: options.keyword,
//             orderby: options.orderby || '_distance',
//             page_size: options.page_size || 10,
//             page_index: options.page_index || 1,
//             output: 'json',
//             key: that.key
//         };

//         if (options.address_format) {
//             requestParam.address_format = options.address_format;
//         }

//         if (options.filter) {
//             requestParam.filter = options.filter;
//         }

//         var distance = options.distance || "1000";
//         var auto_extend = options.auto_extend || 1;
//         var region = null;
//         var rectangle = null;

//         //判断城市限定参数
//         if (options.region) {
//           region = options.region;
//         }

//         //矩形限定坐标(暂时只支持字符串格式)
//         if (options.rectangle) {
//           rectangle = options.rectangle;
//         }

//         var locationsuccess = function (result) {        
//           if (region && !rectangle) {
//             //城市限定参数拼接
//             requestParam.boundary = "region(" + region + "," + auto_extend + "," + result.latitude + "," + result.longitude + ")";
//             if (options.sig) {
//               requestParam.sig = Utils.getSig(requestParam, options.sig, 'search');
//             }
//           } else if (rectangle && !region) {
//             //矩形搜索
//             requestParam.boundary = "rectangle(" + rectangle + ")";
//             if (options.sig) {
//               requestParam.sig = Utils.getSig(requestParam, options.sig, 'search');
//             }
//             } else {
//               requestParam.boundary = "nearby(" + result.latitude + "," + result.longitude + "," + distance + "," + auto_extend + ")";
//             if (options.sig) {
//               requestParam.sig = Utils.getSig(requestParam, options.sig, 'search');
//             }
//             }            
//             wx.request(Utils.buildWxRequestConfig(options, {
//                 url: URL_SEARCH,
//                 data: requestParam
//             }, 'search'));
//         };
//         Utils.locationProcess(options, locationsuccess);
//     };

//     /**
//      * sug模糊检索
//      *
//      * @param {Object} options 接口参数对象
//      * 
//      * 参数对象结构可以参考
//      * http://lbs.qq.com/webservice_v1/guide-suggestion.html
//      */
//     getSuggestion(options) {
//         var that = this;
//         options = options || {};
//         Utils.polyfillParam(options);

//         if (!Utils.checkKeyword(options)) {
//             return;
//         }

//         var requestParam = {
//             keyword: options.keyword,
//             region: options.region || '全国',
//             region_fix: options.region_fix || 0,
//             policy: options.policy || 0,
//             page_size: options.page_size || 10,//控制显示条数
//             page_index: options.page_index || 1,//控制页数
//             get_subpois : options.get_subpois || 0,//返回子地点
//             output: 'json',
//             key: that.key
//         };
//         //长地址
//         if (options.address_format) {
//           requestParam.address_format = options.address_format;
//         }
//         //过滤
//         if (options.filter) {
//           requestParam.filter = options.filter;
//         }
//         //排序
//         if (options.location) {
//           var locationsuccess = function (result) {
//             requestParam.location = result.latitude + ',' + result.longitude;
//             if (options.sig) {
//               requestParam.sig = Utils.getSig(requestParam, options.sig, 'suggest');
//             }
//             wx.request(Utils.buildWxRequestConfig(options, {
//               url: URL_SUGGESTION,
//               data: requestParam
//             }, "suggest"));      
//           };
//           Utils.locationProcess(options, locationsuccess);
//         } else {
//           if (options.sig) {
//             requestParam.sig = Utils.getSig(requestParam, options.sig, 'suggest');
//           }
//           wx.request(Utils.buildWxRequestConfig(options, {
//             url: URL_SUGGESTION,
//             data: requestParam
//           }, "suggest"));      
//         }        
//     };

//     /**
//      * 逆地址解析
//      *
//      * @param {Object} options 接口参数对象
//      * 
//      * 请求参数结构可以参考
//      * http://lbs.qq.com/webservice_v1/guide-gcoder.html
//      */
//     reverseGeocoder(options) {
//         var that = this;
//         options = options || {};
//         Utils.polyfillParam(options);
//         var requestParam = {
//             coord_type: options.coord_type || 5,
//             get_poi: options.get_poi || 0,
//             output: 'json',
//             key: that.key
//         };
//         if (options.poi_options) {
//             requestParam.poi_options = options.poi_options
//         }

//         var locationsuccess = function (result) {
//             requestParam.location = result.latitude + ',' + result.longitude;
//           if (options.sig) {
//             requestParam.sig = Utils.getSig(requestParam, options.sig, 'reverseGeocoder');
//           }
//             wx.request(Utils.buildWxRequestConfig(options, {
//                 url: URL_GET_GEOCODER,
//                 data: requestParam
//             }, 'reverseGeocoder'));
//         };
//         Utils.locationProcess(options, locationsuccess);
//     };

//     /**
//      * 地址解析
//      *
//      * @param {Object} options 接口参数对象
//      * 
//      * 请求参数结构可以参考
//      * http://lbs.qq.com/webservice_v1/guide-geocoder.html
//      */
//     geocoder(options) {
//         var that = this;
//         options = options || {};
//         Utils.polyfillParam(options);

//         if (Utils.checkParamKeyEmpty(options, 'address')) {
//             return;
//         }

//         var requestParam = {
//             address: options.address,
//             output: 'json',
//             key: that.key
//         };

//         //城市限定
//         if (options.region) {
//           requestParam.region = options.region;
//         }

//         if (options.sig) {
//           requestParam.sig = Utils.getSig(requestParam, options.sig, 'geocoder');
//         }

//         wx.request(Utils.buildWxRequestConfig(options, {
//             url: URL_GET_GEOCODER,
//             data: requestParam
//         },'geocoder'));
//     };


//     /**
//      * 获取城市列表
//      *
//      * @param {Object} options 接口参数对象
//      * 
//      * 请求参数结构可以参考
//      * http://lbs.qq.com/webservice_v1/guide-region.html
//      */
//     getCityList(options) {
//         var that = this;
//         options = options || {};
//         Utils.polyfillParam(options);
//         var requestParam = {
//             output: 'json',
//             key: that.key
//         };

//         if (options.sig) {
//           requestParam.sig = Utils.getSig(requestParam, options.sig, 'getCityList');
//         }

//         wx.request(Utils.buildWxRequestConfig(options, {
//             url: URL_CITY_LIST,
//             data: requestParam
//         },'getCityList'));
//     };

//     /**
//      * 获取对应城市ID的区县列表
//      *
//      * @param {Object} options 接口参数对象
//      * 
//      * 请求参数结构可以参考
//      * http://lbs.qq.com/webservice_v1/guide-region.html
//      */
//     getDistrictByCityId(options) {
//         var that = this;
//         options = options || {};
//         Utils.polyfillParam(options);

//         if (Utils.checkParamKeyEmpty(options, 'id')) {
//             return;
//         }

//         var requestParam = {
//             id: options.id || '',
//             output: 'json',
//             key: that.key
//         };

//         if (options.sig) {
//           requestParam.sig = Utils.getSig(requestParam, options.sig, 'getDistrictByCityId');
//         }

//         wx.request(Utils.buildWxRequestConfig(options, {
//             url: URL_AREA_LIST,
//             data: requestParam
//         },'getDistrictByCityId'));
//     };

//     /**
//      * 用于单起点到多终点的路线距离(非直线距离)计算：
//      * 支持两种距离计算方式：步行和驾车。
//      * 起点到终点最大限制直线距离10公里。
//      *
//      * 新增直线距离计算。
//      * 
//      * @param {Object} options 接口参数对象
//      * 
//      * 请求参数结构可以参考
//      * http://lbs.qq.com/webservice_v1/guide-distance.html
//      */
//     calculateDistance(options) {
//         var that = this;
//         options = options || {};
//         Utils.polyfillParam(options);

//         if (Utils.checkParamKeyEmpty(options, 'to')) {
//             return;
//         }

//         var requestParam = {
//             mode: options.mode || 'walking',
//             to: Utils.location2query(options.to),
//             output: 'json',
//             key: that.key
//         };

//         if (options.from) {
//           options.location = options.from;
//         }

//         //计算直线距离
//         if(requestParam.mode == 'straight'){        
//           var locationsuccess = function (result) {
//             var locationTo = Utils.getEndLocation(requestParam.to);//处理终点坐标
//             var data = {
//               message:"query ok",
//               result:{
//                 elements:[]
//               },
//               status:0
//             };
//             for (var i = 0; i < locationTo.length; i++) {
//               data.result.elements.push({//将坐标存入
//                 distance: Utils.getDistance(result.latitude, result.longitude, locationTo[i].lat, locationTo[i].lng),
//                 duration:0,
//                 from:{
//                   lat: result.latitude,
//                   lng:result.longitude
//                 },
//                 to:{
//                   lat: locationTo[i].lat,
//                   lng: locationTo[i].lng
//                 }
//               });            
//             }
//             var calculateResult = data.result.elements;
//             var distanceResult = [];
//             for (var i = 0; i < calculateResult.length; i++) {
//               distanceResult.push(calculateResult[i].distance);
//             }  
//             return options.success(data,{
//               calculateResult: calculateResult,
//               distanceResult: distanceResult
//             });
//           };

//           Utils.locationProcess(options, locationsuccess);
//         } else {
//           var locationsuccess = function (result) {
//             requestParam.from = result.latitude + ',' + result.longitude;
//             if (options.sig) {
//               requestParam.sig = Utils.getSig(requestParam, options.sig, 'calculateDistance');
//             }
//             wx.request(Utils.buildWxRequestConfig(options, {
//               url: URL_DISTANCE,
//               data: requestParam
//             },'calculateDistance'));
//           };

//           Utils.locationProcess(options, locationsuccess);
//         }      
//     };

//   /**
//    * 路线规划：
//    * 
//    * @param {Object} options 接口参数对象
//    * 
//    * 请求参数结构可以参考
//    * https://lbs.qq.com/webservice_v1/guide-road.html
//    */
//   direction(options) {
//     var that = this;
//     options = options || {};
//     Utils.polyfillParam(options);

//     if (Utils.checkParamKeyEmpty(options, 'to')) {
//       return;
//     }

//     var requestParam = {
//       output: 'json',
//       key: that.key
//     };

//     //to格式处理
//     if (typeof options.to == 'string') {
//       requestParam.to = options.to;
//     } else {
//       requestParam.to = options.to.latitude + ',' + options.to.longitude;
//     }
//     //初始化局部请求域名
//     var SET_URL_DIRECTION = null;
//     //设置默认mode属性
//     options.mode = options.mode || MODE.driving;

//     //设置请求域名
//     SET_URL_DIRECTION = URL_DIRECTION + options.mode;

//     if (options.from) {
//       options.location = options.from;
//     }

//     if (options.mode == MODE.driving) {
//       if (options.from_poi) {
//         requestParam.from_poi = options.from_poi;
//       }
//       if (options.heading) {
//         requestParam.heading = options.heading;
//       }
//       if (options.speed) {
//         requestParam.speed = options.speed;
//       }
//       if (options.accuracy) {
//         requestParam.accuracy = options.accuracy;
//       }
//       if (options.road_type) {
//         requestParam.road_type = options.road_type;
//       }
//       if (options.to_poi) {
//         requestParam.to_poi = options.to_poi;
//       }
//       if (options.from_track) {
//         requestParam.from_track = options.from_track;
//       }
//       if (options.waypoints) {
//         requestParam.waypoints = options.waypoints;
//       }
//       if (options.policy) {
//         requestParam.policy = options.policy;
//       }
//       if (options.plate_number) {
//         requestParam.plate_number = options.plate_number;
//       }
//     }

//     if (options.mode == MODE.transit) {
//       if (options.departure_time) {
//         requestParam.departure_time = options.departure_time;
//       }
//       if (options.policy) {
//         requestParam.policy = options.policy;
//       }
//     } 

//     var locationsuccess = function (result) {
//       requestParam.from = result.latitude + ',' + result.longitude;
//       if (options.sig) {
//         requestParam.sig = Utils.getSig(requestParam, options.sig, 'direction',options.mode);
//       }
//       wx.request(Utils.buildWxRequestConfig(options, {
//         url: SET_URL_DIRECTION,
//         data: requestParam
//       }, 'direction'));
//     };

//     Utils.locationProcess(options, locationsuccess);
//   }
// };

// module.exports = QQMapWX;

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/tn_components/common/vendor.js.map