require('../../common/runtime.js');require('../../common/vendor.js');require('../../common/main.js');(global["webpackJsonp_01"]=global["webpackJsonp_01"]||[]).push([["pages/index/xiaobing"],{1689:function(n,t,i){"use strict";i.r(t);var e=i("85b9"),u=i.n(e);for(var o in e)"default"!==o&&function(n){i.d(t,n,(function(){return e[n]}))}(o);t["default"]=u.a},"85b9":function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{xiaobing:!0,word:"",topiclist:[]}},created:function(){},methods:{send:function(){var n={from:"user",value:this.word};console.log(n),this.topiclist.push(n);var t={from:"AI",value:"让我想想吖，请稍等"};this.topiclist.push(t);var i={from:"AI",value:"呜呜呜，小冰可怜可怜你，但是你应该不用吃什么了"};this.topiclist.push(i)},talking:function(){this.xiaobing=!this.xiaobing}}};t.default=e},a9bd:function(n,t,i){"use strict";i.r(t);var e=i("cd86"),u=i("1689");for(var o in u)"default"!==o&&function(n){i.d(t,n,(function(){return u[n]}))}(o);i("ee74");var r,a=i("f0c5"),c=Object(a["a"])(u["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],r);t["default"]=c.exports},cd86:function(n,t,i){"use strict";i.d(t,"b",(function(){return u})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return e}));var e={uniTransition:function(){return Promise.all([i.e("common/vendor"),i.e("uni_modules/uni-transition/components/uni-transition/uni-transition")]).then(i.bind(null,"e9c8"))}},u=function(){var n=this,t=n.$createElement;n._self._c},o=[]},ee74:function(n,t,i){"use strict";var e=i("fbb7"),u=i.n(e);u.a},fbb7:function(n,t,i){}}]);
;(global["webpackJsonp_01"] = global["webpackJsonp_01"] || []).push([
    'pages/index/xiaobing-create-component',
    {
        'pages/index/xiaobing-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a9bd"))
        })
    },
    [['pages/index/xiaobing-create-component']]
]);
