(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["page_info/info"],{278:function(t,e,n){"use strict";(function(t){n(5),n(6);r(n(3));var e=r(n(279));function r(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n(1)["createPage"])},279:function(t,e,n){"use strict";n.r(e);var r=n(280),a=n(282);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n(284);var u,o=n(15),s=Object(o["default"])(a["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],u);s.options.__file="page_info/info.vue",e["default"]=s.exports},280:function(t,e,n){"use strict";n.r(e);var r=n(281);n.d(e,"render",(function(){return r["render"]})),n.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(e,"components",(function(){return r["components"]}))},281:function(t,e,n){"use strict";var r;n.r(e),n.d(e,"render",(function(){return a})),n.d(e,"staticRenderFns",(function(){return u})),n.d(e,"recyclableRender",(function(){return i})),n.d(e,"components",(function(){return r}));var a=function(){var t=this,e=t.$createElement;t._self._c},i=!1,u=[];a._withStripped=!0},282:function(t,e,n){"use strict";n.r(e);var r=n(283),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},283:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n(201));function a(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{num:0,TabList:[],ansList:[],numList:[{name:"目标"},{name:"身高"},{name:"体重"},{name:"年龄"},{name:"完成"}],target:["增肥","养生","减肥"],targetValue:[1],height:[150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200],heightValue:[20],weight:[40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],weightValue:[20],age:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],ageValue:[20]}},onShareAppMessage:function(t){},mounted:function(){this.getServerData()},methods:{getServerData:function(){var e=this;t.showLoading({title:"加载中"});var n={user_id:"22"},a={url:"body/all",method:"get"};r.default.httpRequest(a,n).then((function(n){if(console.log(n),t.hideLoading(),200==n.statusCode){e.TabList=n.data,console.log(e.TabList);for(var r=0;r<e.TabList.length;r++)console.log(e.TabList[r].timeList[e.TabList[r].timeList.length-1].value),e.ansList.push(e.TabList[r].timeList[e.TabList[r].timeList.length-1].value);console.log(e.ansList)}}))}}};e.default=i}).call(this,n(1)["default"])},284:function(t,e,n){"use strict";n.r(e);var r=n(285),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},285:function(t,e,n){}},[[278,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/page_info/info.js.map