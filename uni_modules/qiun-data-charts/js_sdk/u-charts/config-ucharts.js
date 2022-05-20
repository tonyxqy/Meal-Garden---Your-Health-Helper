/*
 * uCharts®
 * 高性能跨平台图表库，支持H5、APP、小程序（微信/支付宝/百度/头条/QQ/360）、Vue、Taro等支持canvas的框架平台
 * Copyright (c) 2021 QIUN®秋云 https://www.ucharts.cn All rights reserved.
 * Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
 * 复制使用请保留本段注释，感谢支持开源！
 * 
 * uCharts®官方网站
 * https://www.uCharts.cn
 * 
 * 开源地址:
 * https://gitee.com/uCharts/uCharts
 * 
 * uni-app插件市场地址：
 * http://ext.dcloud.net.cn/plugin?id=271
 * 
 */

// 主题颜色配置：如每个图表类型需要不同主题，请在对应图表类型上更改color属性
const color = ['#1890FF', '#73C0DE', '#9A60B4'];

//事件转换函数，主要用作格式化x轴为时间轴，根据需求自行修改
const formatDateTime = (timeStamp, returnType) => {
	var date = new Date();
	date.setTime(timeStamp * 1000);
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	m = m < 10 ? ('0' + m) : m;
	var d = date.getDate();
	d = d < 10 ? ('0' + d) : d;
	var h = date.getHours();
	h = h < 10 ? ('0' + h) : h;
	var minute = date.getMinutes();
	var second = date.getSeconds();
	minute = minute < 10 ? ('0' + minute) : minute;
	second = second < 10 ? ('0' + second) : second;
	if (returnType == 'full') {
		return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
	}
	if (returnType == 'y-m-d') {
		return y + '-' + m + '-' + d;
	}
	if (returnType == 'h:m') {
		return h + ':' + minute;
	}
	if (returnType == 'h:m:s') {
		return h + ':' + minute + ':' + second;
	}
	return [y, m, d, h, minute, second];
}

const cfu = {
	//demotype为自定义图表类型，一般不需要自定义图表类型，只需要改根节点上对应的类型即可
	"type": ["pie", "ring", "rose", "word", "funnel", "map", "arcbar", "line", "column", "bar", "area", "radar",
		"gauge", "candle", "mix", "tline", "tarea", "scatter", "bubble", "demotype"
	],
	"range": ["饼状图", "圆环图", "玫瑰图", "词云图", "漏斗图", "地图", "圆弧进度条", "折线图", "柱状图", "条状图", "区域图", "雷达图", "仪表盘", "K线图",
		"混合图", "时间轴折线", "时间轴区域", "散点图", "气泡图", "自定义类型"
	],
	//增加自定义图表类型，如果需要categories，请在这里加入您的图表类型，例如最后的"demotype"
	//自定义类型时需要注意"tline","tarea","scatter","bubble"等时间轴（矢量x轴）类图表，没有categories，不需要加入categories
	"categories": ["line", "column", "bar", "area", "radar", "gauge", "candle", "mix", "demotype"],
	//instance为实例变量承载属性，不要删除
	"instance": {},
	//option为opts及eopts承载属性，不要删除
	"option": {},
	//下面是自定义format配置，因除H5端外的其他端无法通过props传递函数，只能通过此属性对应下标的方式来替换
	"formatter": {
		"yAxisDemo1": function(val) {
			return val + '元'
		},
		"yAxisDemo2": function(val) {
			return val.toFixed(2)
		},
		"xAxisDemo1": function(val) {
			return val + '年'
		},
		"xAxisDemo2": function(val) {
			return formatDateTime(val, 'h:m')
		},
		"seriesDemo1": function(val) {
			return val + '元'
		},
		"tooltipDemo1": function(item, category, index, opts) {
			if (index == 0) {
				return '随便用' + item.data + '年'
			} else {
				return '其他我没改' + item.data + '天'
			}
		},
		"pieDemo": function(val, index, series) {
			if (index !== undefined) {
				return series[index].name + '：' + series[index].data + '元'
			}
		},
	},
	//这里演示了自定义您的图表类型的option，可以随意命名，之后在组件上 type="demotype" 后，组件会调用这个花括号里的option，如果组件上还存在opts参数，会将demotype与opts中option合并后渲染图表。
	"demotype": {
		//我这里把曲线图当做了自定义图表类型，您可以根据需要随意指定类型或配置
		"type": "line",
		"color": color,
		"padding": [15, 10, 0, 15],
		"xAxis": {
			"disableGrid": true,
		},
		"yAxis": {
			"gridType": "dash",
			"dashLength": 2,
		},
		"legend": {},
		"extra": {
			"line": {
				"type": "curve",
				"width": 2
			},
		}
	},
	//下面是自定义配置，请添加项目所需的通用配置
	// "arcbar": {
	// 	"type": "arcbar",
	// 	"color": color,
	// 	"title": {
	// 		"name": "百分比",
	// 		"fontSize": 25,
	// 		"color": "#00FF00"
	// 	},
	// 	"subtitle": {
	// 		"name": "默认标题",
	// 		"fontSize": 15,
	// 		"color": "#666666"
	// 	},
	// 	"extra": {
	// 		"arcbar": {
	// 			"type": "default",
	// 			"width": 12,
	// 			"backgroundColor": "#E9E9E9",
	// 			"startAngle": 0.75,
	// 			"endAngle": 0.25,
	// 			"gap": 2
	// 		}
	// 	}
	// },
	"arcbar":{
	    "type": "arcbar",
	    "canvasId": "",
	    "canvas2d": false,
	    "background": "none",
	    "animation": true,
	    "timing": "easeOut",
	    "duration": 2000,
	    "rotate": false,
	    "errorReload": true,
	    "fontSize": 13,
	    "fontColor": "#666666",
	    "enableScroll": false,
	    "touchMoveLimit": 60,
	    "enableMarkLine": false,
	    "dataLabel": true,
	    "dataPointShape": true,
	    "dataPointShapeType": "solid",
	    "tapLegend": true,
	    "title": {
	        "name": "今日能量",
	        "fontSize": 15,
	        "color": "#B3BCD0",
	        "offsetX": 0,
	        "offsetY": 0
	    },
	    "subtitle": {
	        "name": "",
	        "fontSize": 15,
	        "color": "#666666",
	        "offsetX": 0,
	        "offsetY": 0
	    },
	    "extra": {
	        "arcbar": {
	            "type": "circle",
	            "width": 10,
	            "backgroundColor": "#E9E9E9",
	            "startAngle": 1.5,
	            "endAngle": 1.5,
	            "gap": 15,
	            "centerX": 0,
	            "centerY": 0,
	            "linearType": "none"
	        }
	    }
	},
}

export default cfu;
