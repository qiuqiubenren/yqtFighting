(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f7fdf316"],{1738:function(t,e,l){"use strict";l.r(e);var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{attrs:{id:"container"}})])}],n=l("99af"),u={name:"test-page",components:{},props:{},data(){return{stackedColumnPlot:{},data1:[{title:"2022-03",value:220,type:"浏览人数"},{title:"2022-04",value:300,type:"浏览人数"},{title:"2022-05",value:250,type:"浏览人数"},{title:"2022-06",value:220,type:"浏览人数"},{title:"2022-07",value:362,type:"浏览人数"},{title:"2022-03",value:350,type:"浏览人数"},{title:"2022-04",value:900,type:"浏览人数"},{title:"2022-05",value:300,type:"浏览人数"},{title:"2022-06",value:450,type:"浏览人数"},{title:"2022-07",value:470,type:"浏览人数"},{title:"2022-03",value:220,type:"意向人数"},{title:"2022-04",value:300,type:"意向人数"},{title:"2022-05",value:250,type:"意向人数"},{title:"2022-06",value:220,type:"意向人数"},{title:"2022-07",value:362,type:"意向人数"}],data2:[{title:"2022-03",value:10,type:"成交比例"},{title:"2022-04",value:25,type:"成交比例"},{title:"2022-05",value:10,type:"成交比例"},{title:"2022-06",value:30,type:"成交比例"},{title:"2022-07",value:10,type:"成交比例"},{title:"2022-03",value:5,type:"成交增长率"},{title:"2022-04",value:18,type:"成交增长率"},{title:"2022-05",value:20,type:"成交增长率"},{title:"2022-06",value:15,type:"成交增长率"},{title:"2022-07",value:20,type:"成交增长率"}]}},methods:{init(){this.initAntvFx()},initAntvFx(){const t=this.data1,e=this.data2;this.stackedColumnPlot=new n["DualAxes"]("container",{data:[t,e],xField:"title",yField:["value","value"],geometryOptions:[{geometry:"column",isStack:!0,seriesField:"type",columnWidthRatio:.4,label:{}},{geometry:"line",seriesField:"type",smooth:!0,connectNulls:!1,label:{},point:{color:"#F00"},lineStyle:({type:t})=>t.indexOf("平均")>-1?{lineDash:[10,15],opacity:1,cursor:"pointer"}:{opacity:.5}}]}),this.stackedColumnPlot.render()}},mounted(){this.init()}},p=u,o=(l("8c77"),l("2877")),s=Object(o["a"])(p,i,a,!1,null,"3c5bcbdc",null);e["default"]=s.exports},"6ed7":function(t,e,l){},"8c77":function(t,e,l){"use strict";l("6ed7")}}]);