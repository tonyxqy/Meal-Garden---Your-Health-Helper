(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],[function(t,e,n){"use strict";(function(t){n(5),n(6);var e=a(n(3)),o=a(n(10)),u=a(n(16)),r=a(n(18)),c=a(n(19));function a(t){return t&&t.__esModule?t:{default:t}}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}wx.__webpack_require_UNI_MP_PLUGIN__=n,u.default.init();var s=function(){n.e("colorui/components/cu-custom").then(function(){return resolve(n(295))}.bind(null,n)).catch(n.oe)};e.default.component("cu-custom",s);var p=function(){n.e("components/TnCustom/TnCustom").then(function(){return resolve(n(300))}.bind(null,n)).catch(n.oe)};e.default.component("tn-custom",p),e.default.mixin(r.default),e.default.use(c.default),e.default.config.productionTip=!1,o.default.mpType="app";var d=new e.default(f({},o.default));t(d).$mount()}).call(this,n(1)["createApp"])},,,,,,,,,,function(t,e,n){"use strict";n.r(e);var o=n(11);for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);n(13);var r,c,a,i,f=n(15),l=Object(f["default"])(o["default"],r,c,!1,null,null,null,!1,a,i);l.options.__file="App.vue",e["default"]=l.exports},function(t,e,n){"use strict";n.r(e);var o=n(12),u=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=u.a},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(n(3));function u(t){return t&&t.__esModule?t:{default:t}}var r={beforeCreate:function(){o.default.prototype.$bus=this},onLaunch:function(){t.getSystemInfo({success:function(t){o.default.prototype.StatusBar=t.statusBarHeight;var e=wx.getMenuButtonBoundingClientRect();o.default.prototype.Custom=e,o.default.prototype.CustomBar=e.bottom+e.top-t.statusBarHeight+4}})},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};e.default=r}).call(this,n(1)["default"])},function(t,e,n){"use strict";n.r(e);var o=n(14),u=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=u.a},function(t,e,n){}],[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/main.js.map