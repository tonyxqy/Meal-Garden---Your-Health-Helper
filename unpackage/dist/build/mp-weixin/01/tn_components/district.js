require('../common/runtime.js');require('../common/vendor.js');require('../common/main.js');(global["webpackJsonp_01"]=global["webpackJsonp_01"]||[]).push([["tn_components/district"],{"15b0":function(t,e,n){"use strict";n.r(e);var a=n("e637"),i=n("4781");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("2f35");var r,u=n("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);e["default"]=c.exports},"2f35":function(t,e,n){"use strict";var a=n("e7a3"),i=n.n(a);i.a},4781:function(t,e,n){"use strict";n.r(e);var a=n("5fff"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},5318:function(t,e,n){"use strict";(function(t){n("a385"),n("921b");a(n("66fd"));var e=a(n("15b0"));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"5fff":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,i=o(n("278a"));n("a61f");function o(t){return t&&t.__esModule?t:{default:t}}var r=null,u={data:function(){return{city:"",cWidth:"",cHeight:"",pixelRatio:1,textarea:""}},onLoad:function(){a=this,this.cWidth=t.upx2px(750),this.cHeight=t.upx2px(750),this.getServerData()},methods:{getServerData:function(){t.request({url:"https://cdn.zhoukaiwen.com/dataV.json",data:{},success:function(t){var e={series:[]};e.series=t.data.features,console.log(t.data),a.showMap("canvasMap",e)},fail:function(){a.tips="网络错误，小程序端请检查合法域名"}})},showMap:function(t,e){r=new i.default({$this:a,canvasId:t,type:"map",fontSize:11,padding:[0,0,0,0],legend:{show:!1},background:"#FFFFFF",pixelRatio:a.pixelRatio,series:e.series,dataLabel:!0,width:a.cWidth*a.pixelRatio,height:a.cHeight*a.pixelRatio,extra:{map:{border:!0,borderWidth:1,borderColor:"#666666",fillOpacity:.6}}})},touchMap:function(t){r.showToolTip(t,{format:function(t){return console.log(t.properties),a.city=t.properties.name,"".concat(t.properties.name," ：只可以一行的文本")}})}}};e.default=u}).call(this,n("543d")["default"])},e637:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement;t._self._c},o=[]},e7a3:function(t,e,n){}},[["5318","common/runtime","common/vendor"]]]);