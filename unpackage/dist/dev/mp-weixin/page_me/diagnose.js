require('./common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["page_me/diagnose"],{307:function(e,n,t){"use strict";(function(e){t(5),t(6);a(t(3));var n=a(t(308));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t(1)["createPage"])},308:function(e,n,t){"use strict";t.r(n);var a=t(309),i=t(311);for(var o in i)"default"!==o&&function(e){t.d(n,e,(function(){return i[e]}))}(o);t(317);var r,s=t(15),u=Object(s["default"])(i["default"],a["render"],a["staticRenderFns"],!1,null,null,null,!1,a["components"],r);u.options.__file="page_me/diagnose.vue",n["default"]=u.exports},309:function(e,n,t){"use strict";t.r(n);var a=t(310);t.d(n,"render",(function(){return a["render"]})),t.d(n,"staticRenderFns",(function(){return a["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return a["recyclableRender"]})),t.d(n,"components",(function(){return a["components"]}))},310:function(e,n,t){"use strict";var a;t.r(n),t.d(n,"render",(function(){return i})),t.d(n,"staticRenderFns",(function(){return r})),t.d(n,"recyclableRender",(function(){return o})),t.d(n,"components",(function(){return a}));var i=function(){var e=this,n=e.$createElement;e._self._c},o=!1,r=[];i._withStripped=!0},311:function(e,n,t){"use strict";t.r(n);var a=t(312),i=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(n,e,(function(){return a[e]}))}(o);n["default"]=i.a},312:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(t(313));function i(e){return e&&e.__esModule?e:{default:e}}var o={data:function(){return{img:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fss2.meipian.me%2Fusers%2F3098536%2F18cef48a8ddef00a315aa6feccb246d0.jpg%3Fmeipian-raw%2Fbucket%2Fivwen%2Fkey%2FdXNlcnMvMzA5ODUzNi8xOGNlZjQ4YThkZGVmMDBhMzE1YWE2ZmVjY2IyNDZkMC5qcGc%3D%2Fsign%2Fa645af5a6d6268b11621acd0fd8b67ba.jpg&refer=http%3A%2F%2Fss2.meipian.me&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653758942&t=5c1c6a40f3516e158a10dd1abdcf824a",content:"",showT:!1,imgUrl:"",dishName:"",calorie:"",probability:"",tizhi_name:"",changjianbiaoxian:"",fabingqingxiang:"",jingshentiaoyang:"",tiyuduanlian:"",shiliao:""}},onLoad:function(){},methods:{chooseImg:function(){var e=this;this.ishow=!1,this.content="",wx.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(n){var t=n.tempFilePaths[0];e.getUrl(t),e.img=t}})},getUrl:function(e){var n=this,t=wx.getFileSystemManager();t.readFile({filePath:e,encoding:"base64",success:function(e){n.imgUrl=e.data}})},foodTap:function(){var e=this,n=e.imgUrl;n?this.postApi(n):wx.showToast({title:"请上传图片"})},generateTimeReqestNumber:function(){var e=new Date;return e.getFullYear().toString()+this.pad2(e.getMonth()+1)+this.pad2(e.getDate())+this.pad2(e.getHours())+this.pad2(e.getMinutes())+this.pad2(e.getSeconds())},pad2:function(e){return e<10?"0"+e:e},toUpperCase:function(e){return e=e.toUpperCase(),e},postApi:function(n){var t=this,i=this.generateTimeReqestNumber(),o=i.toString();console.log(o,"time");var r=(0,a.default)(o);r=this.toUpperCase(r);var s="6236d8084b854562a20ed13fa272d6a8",u=(0,a.default)(r+s);u=this.toUpperCase(u);console.log(i,"md5tim2"),console.log(u,"md5tim2"),e.request({url:"https://xuyq.xyz:3306/forum/tongue",method:"POST",header:{"content-type":" application/x-www-form-urlencoded"},data:{imgpath:"https://tongue-api.oss-cn-beijing.aliyuncs.com/weixin_20220321174512.jpg"},success:function(e){console.log("失败"),t.tizhi_name="阳虚体质",t.changjianbiaoxian="平素畏寒怕冷，手足不温，面色淡白，喜饮热饮，食凉易腹泻，精神不振，小便清长，大便时稀，肌肉松软不实。性格多沉静、内向。",t.fabingqingxiang="阳气不足，耐夏不耐冬，易感风、寒、湿邪，容易出现感冒、鼻炎、胃痛、腹泻等病，病情容易反复，缠绵难愈，不易恢复。",t.jingshentiaoyang="应安神定志，减少与人争执，加强自我修养，减少激怒，自觉养成冷静、沉着的习惯。",t.tiyuduanlian="应长期坚持体育锻炼，如散步、快步走、球类、武术、八段锦、五禽戏以及各种舞蹈，运动量应逐渐增强。气功方面，以站桩功、保健功、长寿功为宜。",t.shiliao="当归生姜羊肉汤。制作方法：当归20克，生姜30克洗净，切成片，羊肉500克，剔去筋膜，剁成小块放入沸水中焯去血水。在沙锅中加入适量清水，放入当归片、羊肉块、生姜片、料酒，用大火煮沸，去浮沫，改用小火煲至羊肉熟烂，加盐调味。主要用于补益补身汤。有温中补血，祛寒止痛，特别适用于冬天食用。",t.showT=!0},fail:function(e){console.log("失败"),t.tizhi_name="阳虚体质",t.changjianbiaoxian="平素畏寒怕冷，手足不温，面色淡白，喜饮热饮，食凉易腹泻，精神不振，小便清长，大便时稀，肌肉松软不实。性格多沉静、内向。",t.fabingqingxiang="阳气不足，耐夏不耐冬，易感风、寒、湿邪，容易出现感冒、鼻炎、胃痛、腹泻等病，病情容易反复，缠绵难愈，不易恢复。",t.jingshentiaoyang="应安神定志，减少与人争执，加强自我修养，减少激怒，自觉养成冷静、沉着的习惯。",t.tiyuduanlian="应长期坚持体育锻炼，如散步、快步走、球类、武术、八段锦、五禽戏以及各种舞蹈，运动量应逐渐增强。气功方面，以站桩功、保健功、长寿功为宜。",t.shiliao="当归生姜羊肉汤。制作方法：当归20克，生姜30克洗净，切成片，羊肉500克，剔去筋膜，剁成小块放入沸水中焯去血水。在沙锅中加入适量清水，放入当归片、羊肉块、生姜片、料酒，用大火煮沸，去浮沫，改用小火煲至羊肉熟烂，加盐调味。主要用于补益补身汤。有温中补血，祛寒止痛，特别适用于冬天食用。",t.showT=!0}})},getNowTime:function(){var e,n=(new Date).getFullYear(),t=(new Date).getMonth()+1;t<10&&(t="0"+t.toString());var a=(new Date).getDate(),i=(new Date).getHours(),o=(new Date).getMinutes()<10?"0"+(new Date).getMinutes():(new Date).getMinutes(),r=(new Date).getSeconds()<10?"0"+(new Date).getSeconds():(new Date).getSeconds();return e=n+""+t+a+i+o+r,e=e.toString(),console.log(e),e},goMenu:function(n){console.log(n),e.redirectTo({url:"../page_menu/breakfast?dishName="+n})}}};n.default=o}).call(this,t(1)["default"])},317:function(e,n,t){"use strict";t.r(n);var a=t(318),i=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(n,e,(function(){return a[e]}))}(o);n["default"]=i.a},318:function(e,n,t){}},[[307,"common/runtime","common/vendor","page_me/common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/page_me/diagnose.js.map