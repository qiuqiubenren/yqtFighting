(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-258350a2","chunk-855fb3f6","chunk-1d00c676"],{"09e4":function(t,e,a){},"1e7c":function(t,e,a){},"1f5a":function(t,e,a){},"235f":function(t,e,a){"use strict";a("1f5a")},3139:function(t,e,a){"use strict";a("09e4")},"37b1":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Card",[a("div",{attrs:{slot:"title"},slot:"title"},[a("div",{staticClass:"edit-head"},[a("a",{staticClass:"back-title",on:{click:t.close}},[a("Icon",{attrs:{type:"ios-arrow-back"}}),t._v("返回 ")],1),a("div",{staticClass:"head-name"},[t._v("添加")]),a("span"),a("a",{staticClass:"window-close",on:{click:t.close}},[a("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),a("Form",{ref:"form",attrs:{model:t.form,"label-width":100,rules:t.formValidate,"label-position":"left"}},[a("FormItem",{attrs:{label:"科室名称",prop:"subName"}},[a("Input",{staticStyle:{width:"570px"},attrs:{clearable:"",placeholder:"请填写该科室的科室名称"},model:{value:t.form.subName,callback:function(e){t.$set(t.form,"subName",e)},expression:"form.subName"}})],1),a("FormItem",{attrs:{label:"科室代码",prop:"subCode"}},[a("Input",{staticStyle:{width:"570px"},attrs:{clearable:"",placeholder:"请填写该科室的科室代码"},model:{value:t.form.subCode,callback:function(e){t.$set(t.form,"subCode",e)},expression:"form.subCode"}})],1),a("FormItem",{attrs:{label:"科室介绍",prop:"about"}},[a("Input",{staticStyle:{width:"570px"},attrs:{type:"textarea",rows:4,placeholder:"请填写该科室的介绍信息",clearable:""},model:{value:t.form.about,callback:function(e){t.$set(t.form,"about",e)},expression:"form.about"}})],1),a("FormItem",{attrs:{label:"成立日期",prop:"startDate"}},[a("DatePicker",{staticStyle:{width:"570px"},attrs:{type:"date",placeholder:"请填写该科室的成立日期",format:"yyyy-MM-dd",clearable:""},on:{"on-change":t.changeStartDate}})],1),a("FormItem",{attrs:{label:"责任医生",prop:"dutyDoctor"}},[a("Input",{staticStyle:{width:"570px"},attrs:{placeholder:"请填写该科室的责任医生",clearable:""},model:{value:t.form.dutyDoctor,callback:function(e){t.$set(t.form,"dutyDoctor",e)},expression:"form.dutyDoctor"}})],1),a("FormItem",{attrs:{label:"备注",prop:"remark"}},[a("Input",{staticStyle:{width:"570px"},attrs:{type:"textarea",rows:4,placeholder:"请选填该科室的备注信息",clearable:""},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1),a("Form-item",{staticClass:"br"},[a("Button",{attrs:{loading:t.submitLoading,type:"primary"},on:{click:t.handleSubmit}},[t._v("提交并保存")]),a("Button",{on:{click:t.handleReset}},[t._v("重置")]),a("Button",{attrs:{type:"dashed"},on:{click:t.close}},[t._v("关闭")])],1)],1)],1)],1)},o=[],i=a("e8aa"),r={name:"add",components:{},data(){return{submitLoading:!1,form:{subName:"",subCode:"",about:"",startDate:"",dutyDoctor:"",remark:""},formValidate:{}}},methods:{init(){},changeStartDate(t){this.form.startDate=t},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate(t=>{t&&Object(i["a"])(this.form).then(t=>{this.submitLoading=!1,t.success&&(this.$Message.success("操作成功"),this.submited())})})},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},l=r,c=(a("235f"),a("2877")),n=Object(c["a"])(l,s,o,!1,null,null,null);e["default"]=n.exports},"433b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Card",[a("div",{attrs:{slot:"title"},slot:"title"},[a("div",{staticClass:"edit-head"},[a("a",{staticClass:"back-title",on:{click:t.close}},[a("Icon",{attrs:{type:"ios-arrow-back"}}),t._v("返回 ")],1),a("div",{staticClass:"head-name"},[t._v("编辑")]),a("span"),a("a",{staticClass:"window-close",on:{click:t.close}},[a("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),a("Form",{ref:"form",attrs:{model:t.form,"label-width":100,rules:t.formValidate,"label-position":"left"}},[a("FormItem",{attrs:{label:"科室名称",prop:"subName"}},[a("Input",{staticStyle:{width:"570px"},attrs:{clearable:"",placeholder:"请填写该科室的科室名称"},model:{value:t.form.subName,callback:function(e){t.$set(t.form,"subName",e)},expression:"form.subName"}})],1),a("FormItem",{attrs:{label:"科室代码",prop:"subCode"}},[a("Input",{staticStyle:{width:"570px"},attrs:{clearable:"",placeholder:"请填写该科室的科室代码"},model:{value:t.form.subCode,callback:function(e){t.$set(t.form,"subCode",e)},expression:"form.subCode"}})],1),a("FormItem",{attrs:{label:"科室介绍",prop:"about"}},[a("Input",{staticStyle:{width:"570px"},attrs:{clearable:"",type:"textarea",rows:4,placeholder:"请填写该科室的介绍信息"},model:{value:t.form.about,callback:function(e){t.$set(t.form,"about",e)},expression:"form.about"}})],1),a("FormItem",{attrs:{label:"成立日期",prop:"startDate"}},[a("DatePicker",{staticStyle:{width:"570px"},attrs:{type:"date",placeholder:t.form.startDate,format:"yyyy-MM-dd",clearable:""},on:{"on-change":t.changeStartDate}})],1),a("FormItem",{attrs:{label:"责任医生",prop:"dutyDoctor"}},[a("Input",{staticStyle:{width:"570px"},attrs:{placeholder:"请填写该科室的责任医生",clearable:""},model:{value:t.form.dutyDoctor,callback:function(e){t.$set(t.form,"dutyDoctor",e)},expression:"form.dutyDoctor"}})],1),a("FormItem",{attrs:{label:"备注",prop:"remark"}},[a("Input",{staticStyle:{width:"570px"},attrs:{type:"textarea",rows:4,placeholder:"请选填该科室的备注信息",clearable:""},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1),a("Form-item",{staticClass:"br"},[a("Button",{attrs:{loading:t.submitLoading,type:"primary"},on:{click:t.handleSubmit}},[t._v("提交并保存")]),a("Button",{on:{click:t.handleReset}},[t._v("重置")]),a("Button",{attrs:{type:"dashed"},on:{click:t.close}},[t._v("关闭")])],1)],1)],1)],1)},o=[],i=a("e8aa"),r={name:"edit",components:{},props:{data:Object},data(){return{submitLoading:!1,form:{subName:"",subCode:"",about:"",startDate:"",dutyDoctor:"",remark:""},formValidate:{}}},methods:{init(){this.handleReset(),this.form=this.data},changeStartDate(t){this.form.startDate=t},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate(t=>{t&&Object(i["c"])(this.form).then(t=>{this.submitLoading=!1,t.success&&(this.$Message.success("操作成功"),this.submited())})})},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},l=r,c=(a("3139"),a("2877")),n=Object(c["a"])(l,s,o,!1,null,null,null);e["default"]=n.exports},ad4c:function(t,e,a){"use strict";a("1e7c")},d3b1:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search"},["add"==t.currView?a("add",{on:{close:function(e){t.currView="index"},submited:t.submited}}):t._e(),"edit"==t.currView?a("edit",{attrs:{data:t.formData},on:{close:function(e){t.currView="index"},submited:t.submited}}):t._e(),a("Card",{directives:[{name:"show",rawName:"v-show",value:"index"==t.currView,expression:"currView=='index'"}]},[a("Row",{directives:[{name:"show",rawName:"v-show",value:t.openSearch,expression:"openSearch"}],nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSearch.apply(null,arguments)}}},[a("Form",{ref:"searchForm",attrs:{model:t.searchForm,inline:"","label-width":0}},[a("Form-item",{ref:"searchForm",staticStyle:{display:"flex"},attrs:{model:t.searchForm,inline:"","label-width":0}},[a("Form-item",{attrs:{label:"",prop:"subName"}},[a("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入科室名称",clearable:""},model:{value:t.searchForm.subName,callback:function(e){t.$set(t.searchForm,"subName",e)},expression:"searchForm.subName"}})],1),a("Form-item",{attrs:{label:"",prop:"subCode"}},[a("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入科室代码",clearable:""},model:{value:t.searchForm.subCode,callback:function(e){t.$set(t.searchForm,"subCode",e)},expression:"searchForm.subCode"}})],1),a("Form-item",{staticClass:"br",staticStyle:{"margin-left":"10px"}},[a("Button",{attrs:{type:"primary",icon:"ios-search",size:"small",ghost:""},on:{click:t.handleSearch}},[t._v("搜索")]),a("Button",{attrs:{type:"warning",size:"small",icon:"md-refresh",ghost:""},on:{click:t.handleReset}},[t._v("重置")]),a("Button",{attrs:{type:"info",size:"small",icon:"md-add",ghost:""},on:{click:t.add}},[t._v("添加")]),a("Button",{attrs:{type:"error",icon:"md-trash",size:"small",ghost:""},on:{click:t.delAll}},[t._v("删除")]),a("Button",{attrs:{type:"success",icon:"md-paper-plane",size:"small",ghost:""},on:{click:t.excelData}},[t._v("导出")])],1),a("Form-item",{staticStyle:{position:"fixed",right:"50px",top:"130px"}},[a("Button",{staticClass:"showFilterPanelFlag",attrs:{type:"info",icon:"md-settings",size:"small",ghost:""},on:{click:function(e){t.showFilterPanelFlag=!t.showFilterPanelFlag}}},[t._v(" 列筛选")]),a("Button",{staticClass:"showFilterPanelFlag",attrs:{type:"warning",icon:"ios-help-circle-outline",size:"small",ghost:""},on:{click:function(e){t.modal1=!0}}},[t._v(" 使用教程")]),a("Modal",{attrs:{title:"使用教程"},model:{value:t.modal1,callback:function(e){t.modal1=e},expression:"modal1"}},[a("p",[t._v("1.添加科室：点击添加后输入信息点击确认提交")]),a("p",[t._v("2.编辑科室：点击编辑后输入信息点击确认提交")]),a("p",[t._v("3.删除科室：点击删除后点击确定按钮")])])],1)],1)],1)],1),a("Row",{staticClass:"operation",staticStyle:{position:"relative"}},[a("transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showFilterPanelFlag,expression:"showFilterPanelFlag"}],staticClass:"filter-panel"},[a("CheckboxGroup",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},t._l(t.mycolumns,(function(t){return a("div",{key:t.key},[a("Checkbox",{staticStyle:{margin:"2px 5px"},attrs:{label:t.title}})],1)})),0)],1)])],1),a("Row",{directives:[{name:"show",rawName:"v-show",value:t.openTip,expression:"openTip"}]}),a("Row",[a("Table",{ref:"table",attrs:{loading:t.loading,height:t.tableHeight,border:"",stripe:"",size:"small",columns:t.columns,data:t.data,sortable:"custom","row-class-name":t.rowClassNmae},on:{"on-sort-change":t.changeSort,"on-selection-change":t.changeSelect,"on-row-click":t.rowClick}})],1),a("Row",{staticClass:"page",attrs:{type:"flex",justify:"end"}},[a("Page",{attrs:{current:t.searchForm.pageNumber,total:t.total,"page-size":t.searchForm.pageSize,"page-size-opts":[15,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":t.changePage,"on-page-size-change":t.changePageSize}})],1)],1)],1)},o=[],i=a("e8aa"),r=a("37b1"),l=a("433b"),c={name:"single-window",components:{add:r["default"],edit:l["default"]},data(){return{tableHeight:0,selected:["选择","序号","科室名称","科室代码","科室介绍","成立日期","责任医生","备注","创建时间","创建者","修改时间","修改者","操作"],modal1:!1,openSearch:!0,openTip:!0,formData:{},currView:"index",loading:!0,searchForm:{pageNumber:1,pageSize:15,sort:"createTime",order:"desc"},selectList:[],selectCount:0,selectRow:0,columns:[{type:"selection",width:60,title:"选择",align:"center",fixed:"left"},{title:"序号",width:85,align:"center",fixed:"left",sortType:!0,render:(t,e)=>t("span",e.index+(this.searchForm.pageNumber-1)*this.searchForm.pageSize+1)},{title:"科室名称",key:"subName",minWidth:150,tooltip:!0,sortable:!1},{title:"科室代码",key:"subCode",minWidth:90,tooltip:!0,sortable:!1},{title:"科室人数",key:"subNumber",minWidth:120,tooltip:!0,sortable:!1},{title:"主任医师人数",key:"superNumber",minWidth:120,tooltip:!0,sortable:!1},{title:"科室介绍",key:"about",minWidth:200,tooltip:!0,sortable:!1},{title:"成立日期",key:"startDate",minWidth:160,tooltip:!0,sortable:!1},{title:"责任医生",key:"dutyDoctor",minWidth:120,tooltip:!0,sortable:!1},{title:"备注",key:"remark",minWidth:200,tooltip:!0,sortable:!1},{title:"创建时间",key:"createTime",sortable:!0,sortType:"desc",minWidth:180,align:"center",tooltip:!0},{title:"创建者",key:"createBy",sortable:!0,sortType:"desc",minWidth:100,align:"center",tooltip:!0},{title:"修改时间",key:"updateTime",minWidth:180,align:"center",tooltip:!0},{title:"修改者",key:"updateBy",minWidth:100,align:"center",tooltip:!0},{title:"操作",key:"action",align:"center",width:200,fixed:"right",render:(t,e)=>t("div",[t("Button",{props:{type:"primary",size:"small",icon:"ios-create-outline",ghost:!0},style:{marginRight:"5px"},on:{click:()=>{this.edit(e.row)}}},"编辑"),t("Button",{props:{type:"error",size:"small",icon:"md-trash",ghost:!0},on:{click:()=>{this.remove(e.row)}}},"删除")])}],data:[],pageNumber:1,pageSize:10,total:0,showFilterPanelFlag:!1}},methods:{init(){this.getDataList()},submited(){this.currView="index",this.getDataList()},changePage(t){this.searchForm.pageNumber=t,this.getDataList(),this.clearSelectAll()},changePageSize(t){this.searchForm.pageSize=t,this.getDataList()},rowClick(t,e){this.selectRow=t},rowClassNmae(t,e){return t.id==this.selectRow.id?"rowClassNmaeColor":""},excelData(){this.$refs.table.exportCsv({filename:"导出结果"})},handleSearch(){this.searchForm.pageNumber=1,this.searchForm.pageSize=15,this.getDataList()},handleReset(){this.$refs.searchForm.resetFields(),this.searchForm.pageNumber=1,this.searchForm.pageSize=15,this.getDataList()},changeSort(t){this.searchForm.sort=t.key,this.searchForm.order=t.order,"normal"===t.order&&(this.searchForm.order=""),this.getDataList()},clearSelectAll(){this.$refs.table.selectAll(!1)},changeSelect(t){this.selectList=t,this.selectCount=t.length},getDataList(){this.loading=!0,Object(i["d"])(this.searchForm).then(t=>{this.loading=!1,t.success&&(this.data=t.result.records,this.total=t.result.total)})},add(){this.currView="add"},edit(t){for(let s in t)null==t[s]&&(t[s]="");let e=JSON.stringify(t),a=JSON.parse(e);this.formData=a,this.currView="edit"},remove(t){this.$Modal.confirm({title:"确认删除",content:"您确认要删除 "+t.subName+" ?",loading:!0,onOk:()=>{Object(i["b"])({ids:t.id}).then(t=>{this.$Modal.remove(),t.success&&(this.$Message.success("操作成功"),this.getDataList())})}})},delAll(){this.selectCount<=0?this.$Message.warning("您还未选择要删除的数据"):this.$Modal.confirm({title:"确认删除",content:"您确认要删除所选的 "+this.selectCount+" 条数据?",loading:!0,onOk:()=>{let t="";this.selectList.forEach((function(e){t+=e.id+","})),t=t.substring(0,t.length-1),Object(i["b"])({ids:t}).then(t=>{this.$Modal.remove(),t.success&&(this.$Message.success("操作成功"),this.clearSelectAll(),this.getDataList())})}})}},mounted(){this.init(),this.tableHeight=Number(window.innerHeight-273),this.mycolumns=this.columns;let t=[];for(var e=0;e<this.selected.length;e++)for(var a=this.selected[e],s=0;s<this.columns.length;s++)this.columns[s].title==a&&t.push(this.columns[s]);this.columns=t},watch:{selected:function(t){let e=[];for(var a=0;a<this.mycolumns.length;a++){var s=this.mycolumns[a];(void 0==s.title||t.includes(s.title))&&e.push(s)}this.columns=e}}},n=c,d=(a("ad4c"),a("2877")),m=Object(d["a"])(n,s,o,!1,null,null,null);e["default"]=m.exports},e8aa:function(t,e,a){"use strict";a.d(e,"d",(function(){return o})),a.d(e,"a",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"b",(function(){return l}));var s=a("7f80");const o=t=>Object(s["b"])("/hospitalSubject/getByPage",t),i=t=>Object(s["e"])("/hospitalSubject/insertOrUpdate",t),r=t=>Object(s["e"])("/hospitalSubject/insertOrUpdate",t),l=t=>Object(s["e"])("/hospitalSubject/delByIds",t)}}]);