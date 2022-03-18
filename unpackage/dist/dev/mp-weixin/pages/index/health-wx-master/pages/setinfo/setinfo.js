import * as echarts from '../../ec-canvas/echarts';
var app = getApp();
Page({
    data:{
        unit:['cm','kg'],
        ec: {
            lazyLoad:true
          },
        inputValue:true,
        winHeight:"",//窗口高度
        currentTab:0, //预设当前项的值
        scrollLeft:0, //tab标题的滚动条位置
        echart:{
          xAxis:[],
          yAxis:[],
          series:[]
        },
        TabList:[
          {
            name:"身高",
            TimeList:[{
              // value:'请添加你的第一条身高记录',
              // time:'ヽ(✿ﾟ▽ﾟ)ノ',
              value:180,
              time:9
            },{
              value:190,
              time:11
            },{
              value:199,
              time:12
            }
          ]
          },
          {
            name:"体重",
            TimeList:[{
              value:null,
              time:null,
            }],
          }
      ]   
    },
    setEchartval:function(){
      let currval = this.data.currentTab;
      let TabList = this.data.TabList;
      let echart = this.data.echart;
      var xAxis=[];
      var yAxis=[];
      var series=[];
      for(let i=0; i<TabList[currval].TimeList.length;i++){
        console.log(TabList[currval].TimeList[i].time)
        xAxis.push(TabList[currval].TimeList[i].time);
        yAxis.push(TabList[currval].TimeList[i].value);
        series.push(TabList[currval].TimeList[i].value);
      }
      this.setData({
        'echart.xAxis':xAxis,
        'echart.series':series,
        'echart.yAxis':yAxis
      })
      console.log(this.data)
    },
    addval:function(e){
      var currval = this.data.currentTab;
      var temp = this.data.inputValue;
      let TabList = this.data.TabList;

      let value=e.detail.value;
      var myDate=new Date();
      var myDateMonth = myDate.getMonth();
      if(TabList[currval].TimeList[0].time == 'ヽ(✿ﾟ▽ﾟ)ノ'){
        TabList[currval].TimeList[0].value =parseInt(value.myvalue) ;
        TabList[currval].TimeList[0].time = parseInt(myDateMonth);
      }else{
        TabList[currval].TimeList.push({
            value:value.myvalue,
            time:myDateMonth
        })
      }
      this.setData({
        inputValue:!temp,
        TabList:TabList,
      })
      app.globalData.echarts=this.data.TabList[currval].TimeList;
      console.log(this.data.TabList[currval].TimeList)
      this.setEchartval();
      this.echartsComponnet = this.selectComponent('#mychart');
      this.getData();
    },
    inputcover:function(){
      var temp = this.data.inputValue
      this.setData({
        inputValue:!temp
      })
    },
    // 滚动切换标签样式
    switchTab:function(e){
        this.setData({
            currentTab:e.detail.current
        });
        this.checkCor();
    },
    // 点击标题切换当前页时改变样式
    swichNav:function(e){
        var cur=e.target.dataset.current;
        if(this.data.currentTab==cur){return false;}
        else{
            this.setData({
                currentTab:cur
            })
        }
    },
    //判断当前滚动超过一屏时，设置tab标题滚动条。
    checkCor:function(){
      if (this.data.currentTab>4){
        this.setData({
          scrollLeft:300
        })
      }else{
        this.setData({
          scrollLeft:0
        })
      }
    },
    onLoad: function(options) {  
        var that = this
        wx.getSystemInfo({
            success (res) {
              var clientHeight=res.windowHeight,
              clientWidth=res.windowWidth,
              rpxR=750/clientWidth;
              var  calc=clientHeight*rpxR-180;
                console.log(calc)
              that.setData({
                // currentTab: options.currentTab,
                winHeight: calc
            });
            }
          })
        this.setEchartval();
        this.echartsComponnet = this.selectComponent('#mychart');
        this.getData();
    },  
    getData:function(){
        this.init_echarts();
    },
    init_echarts:function(){
      this.echartsComponnet.init((canvas, width, height, dpr) => {
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr // new
        });
        chart.setOption(this.getOption());
        return chart;
      });
    },
    getOption:function(){
      let echart=this.data.echart;
      let xAxisData=echart.xAxis;
      let yAxisData=echart.yAxis;
      let seriesData=echart.series;
      
      var option = {
        color: [
          '#67E0E3',
        ],
        grid: {
          containLabel: false
        },  
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: xAxisData
          // show: false
        },
        tooltip: {
          show: true,
          trigger: 'axis'
        },
        yAxis: {
          x: 'center',
          type: 'value',
          data:yAxisData,
          splitLine: {
            show:false,
          },
          axisLine: {
            show: false,
          } ,
          axisLabel:{
            show:true,
            interval:'1'
          }
        ,splitNumber:2,
        scale:true
          // show: false
        },   
        series: [{
          name: 'A',
          type: 'line',
          smooth: true,
          data: seriesData,
        }]
      }
      return option;
    },
    onReady() {
    },
    footerTap:app.footerTap
})
