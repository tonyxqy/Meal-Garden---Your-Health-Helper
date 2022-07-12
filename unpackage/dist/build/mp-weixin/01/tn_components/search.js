require('../common/runtime.js');require('../common/vendor.js');require('../common/main.js');(global["webpackJsonp_01"]=global["webpackJsonp_01"]||[]).push([["tn_components/search"],{"03cd":function(t,n,i){"use strict";var o=i("bda5"),e=i.n(o);e.a},"0ac6":function(t,n,i){"use strict";i.r(n);var o=i("b272"),e=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(n,t,(function(){return o[t]}))}(a);n["default"]=e.a},"227d":function(t,n,i){"use strict";i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){return o}));var o={uIcon:function(){return i.e("uview-ui/components/u-icon/u-icon").then(i.bind(null,"a34a0"))},uSearch:function(){return i.e("uview-ui/components/u-search/u-search").then(i.bind(null,"3445"))}},e=function(){var t=this,n=t.$createElement,i=(t._self._c,t.__map(t.stationList,(function(n,i){var o=t.__get_orig(n),e=t._f("formatLatlon")(n.distance/1e3);return{$orig:o,f0:e}})));t.$mp.data=Object.assign({},{$root:{l0:i}})},a=[]},"6c1d":function(t,n,i){"use strict";i.r(n);var o=i("227d"),e=i("0ac6");for(var a in e)"default"!==a&&function(t){i.d(n,t,(function(){return e[t]}))}(a);i("03cd");var s,c=i("f0c5"),u=Object(c["a"])(e["default"],o["b"],o["c"],!1,null,"1e7de482",null,!1,o["a"],s);n["default"]=u.exports},b272:function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e(i("a36a"));function e(t){return t&&t.__esModule?t:{default:t}}var a={data:function(){return{navList:["加油站","停车场","厕所","超市"],markerImg:["../static/poi/gasstation.png","../static/poi/parking.png","../static/poi/wc.png","../static/poi/shop.png"],initHeight:340,navIndex:0,map:"",latitude:34.34127,longitude:108.93984,scale:12,covers:[],isTraffic:!1,show_location:!1,keywords:"",stationList:[],showList:!1,actionShow:!1,flag:0,e_zhongxin:"",e_lukuang:"",placeholder:"../static/morent.png"}},onReady:function(){this.map=t.createMapContext("myMap")},onLoad:function(){this.e_zhongxin="../static/poi/e_zhongxin.png",this.e_lukuang="../static/poi/e_lukuang.png",this.keywords=this.navList[this.navIndex]},mounted:function(){this.getLocation()},filters:{formatLatlon:function(t){return"number"===typeof t?parseFloat(t).toFixed(2):0}},methods:{markertap:function(n){var i=n.detail.markerId,o=this.covers.find((function(t){return t.id===i}));o&&o.vehicleNo&&t.navigateTo({url:"./realTimeMonitoringDetail?vehicleNo=".concat(o.vehicleNo)})},tabClick:function(t){this.navIndex=t,this.keywords=this.navList[t],this.covers=[],this.getPoiAround()},navClick:function(n,i){console.log(n),t.openLocation({latitude:parseFloat(n.split(",")[1]),longitude:parseFloat(n.split(",")[0]),address:i,success:function(){console.log("success")},fail:function(t){console.log("错误",t)}})},getPoiAround:function(){var t=this;o.default.getPoiAround(this.latitude,this.longitude,this.keywords,(function(n){console.log(n.markers),console.log(n.poisData),t.stationList=[],t.covers=[],n.poisData.forEach((function(n){t.stationList.push(n),t.covers.push({latitude:n.location.split(",")[1],longitude:n.location.split(",")[0],iconPath:t.markerImg[t.navIndex],width:30,height:30,label:{content:t.huanhang(n.name),color:"#000000",fontSize:12,textAlign:"center",x:-40}})})),t.map.includePoints({points:t.covers,padding:[50,50,50,50]})}))},getLocation:function(){var n=this;t.getLocation({type:"wgs84",success:function(t){var i=t.latitude,o=t.longitude;n.latitude=i,n.longitude=o,n.getPoiAround();var e=.005,a=[{latitude:i+e,longitude:o+e},{latitude:i-e,longitude:o-e}];n.map.includePoints({points:a})}}),this.show_location=!0},refresh:function(){this.getPoiAround()},traffic:function(){this.isTraffic=!this.isTraffic},upView:function(){this.showList=!this.showList},search:function(){this.actionShow=!0;var n=this.keywords;if(!n)return t.showToast({title:"查询内容不能为空！",icon:"none"}),!1;this.getPoiAround()},seachCancel:function(){this.actionShow=!1},handletouchmove:function(n){var i=this;if(0===this.flag){var o=n.touches[0].pageX,e=n.touches[0].pageY,a=o-this.lastX,s=e-this.lastY,c="";this.mindex=-1,Math.abs(a)>Math.abs(s)?a<0?(c="向左滑动",console.log("向左滑动"),this.flag=1):a>0&&(c="向右滑动",console.log("向右滑动"),this.flag=2):s<0?(c="向上滑动",console.log("向上滑动"),this.flag=3,t.getSystemInfo({success:function(t){i.showList=!0}})):s>0&&(c="向下滑动",console.log("向下滑动"),this.flag=4,t.getSystemInfo({success:function(t){i.showList=!1}})),this.lastX=o,this.lastY=e,this.text=c}},handletouchstart:function(t){this.lastX=t.touches[0].pageX,this.lastY=t.touches[0].pageY},handletouchend:function(t){this.flag=0,this.text="没有滑动"},huanhang:function(t){for(var n="",i=t.length,o=0,e=1;o<i;o++,e++)n+=t[o],e&&e%6==0&&(n+="\n");return n}}};n.default=a}).call(this,i("543d")["default"])},bda5:function(t,n,i){},da64:function(t,n,i){"use strict";(function(t){i("a385"),i("921b");o(i("66fd"));var n=o(i("6c1d"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(n.default)}).call(this,i("543d")["createPage"])}},[["da64","common/runtime","common/vendor"]]]);