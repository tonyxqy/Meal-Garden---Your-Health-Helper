require('./common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["tn_components/request"],{170:function(t,n,e){"use strict";(function(t){e(5),e(6);r(e(3));var n=r(e(171));function r(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e(1)["createPage"])},171:function(t,n,e){"use strict";e.r(n);var r=e(172),u=e(174);for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);e(177);var c,a=e(15),i=Object(a["default"])(u["default"],r["render"],r["staticRenderFns"],!1,null,"6be8df46",null,!1,r["components"],c);i.options.__file="tn_components/request.vue",n["default"]=i.exports},172:function(t,n,e){"use strict";e.r(n);var r=e(173);e.d(n,"render",(function(){return r["render"]})),e.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),e.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),e.d(n,"components",(function(){return r["components"]}))},173:function(t,n,e){"use strict";var r;e.r(n),e.d(n,"render",(function(){return u})),e.d(n,"staticRenderFns",(function(){return c})),e.d(n,"recyclableRender",(function(){return o})),e.d(n,"components",(function(){return r}));var u=function(){var t=this,n=t.$createElement,e=(t._self._c,JSON.stringify(t.dataList));t.$mp.data=Object.assign({},{$root:{g0:e}})},o=!1,c=[];u._withStripped=!0},174:function(t,n,e){"use strict";e.r(n);var r=e(175),u=e.n(r);for(var o in r)"default"!==o&&function(t){e.d(n,t,(function(){return r[t]}))}(o);n["default"]=u.a},175:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(e(176));function u(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{dataList:[]}},watch:{},mounted:function(){},methods:{getData:function(){var n=this;console.log("数据加载");var e={url:"json/project.json",method:"get"};t.showLoading({title:"加载中"}),r.default.httpRequest(e).then((function(e){console.log(e),t.hideLoading(),200==e.statusCode&&(n.dataList=e.data)}))}}};n.default=o}).call(this,e(1)["default"])},177:function(t,n,e){"use strict";e.r(n);var r=e(178),u=e.n(r);for(var o in r)"default"!==o&&function(t){e.d(n,t,(function(){return r[t]}))}(o);n["default"]=u.a},178:function(t,n,e){}},[[170,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/tn_components/request.js.map