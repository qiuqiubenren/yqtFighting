(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35023eea","chunk-2d0e8c3d","chunk-2d0daac9","chunk-2d0c4249"],{"0e13":function(e,t,a){"use strict";a.d(t,"d",(function(){return l})),a.d(t,"a",(function(){return n})),a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return s}));var r=a("7f80");const l=e=>Object(r["b"])("/teacher/getByPage",e),n=e=>Object(r["e"])("/teacher/insert",e),i=e=>Object(r["e"])("/teacher/update",e),s=e=>Object(r["e"])("/teacher/delByIds",e)},"13bf":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Card",[a("div",{attrs:{slot:"title"},slot:"title"},[a("div",{staticClass:"edit-head"},[a("a",{staticClass:"back-title",on:{click:e.close}},[a("Icon",{attrs:{type:"ios-arrow-back"}}),e._v("返回 ")],1),a("div",{staticClass:"head-name"},[e._v("添加")]),a("span"),a("a",{staticClass:"window-close",on:{click:e.close}},[a("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),a("Form",{ref:"form",attrs:{model:e.form,"label-width":100,rules:e.formValidate,"label-position":"left"}},[a("FormItem",{attrs:{label:"姓名",prop:"name"}},[a("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("FormItem",{attrs:{label:"学历",prop:"education"}},[a("dict",{staticStyle:{width:"570px"},attrs:{dict:"education",transfer:"",clearable:"",placeholder:"请选择学历..."},model:{value:e.form.education,callback:function(t){e.$set(e.form,"education",t)},expression:"form.education"}})],1),a("FormItem",{attrs:{label:"年龄",prop:"age"}},[a("InputNumber",{staticStyle:{width:"570px"},attrs:{min:"0",max:"5000000"},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1),a("FormItem",{attrs:{label:"毕业院校",prop:"graduated"}},[a("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:e.form.graduated,callback:function(t){e.$set(e.form,"graduated",t)},expression:"form.graduated"}})],1),a("FormItem",{attrs:{label:"工资",prop:"wages"}},[a("InputNumber",{staticStyle:{width:"570px"},attrs:{min:"0",max:"5000000"},model:{value:e.form.wages,callback:function(t){e.$set(e.form,"wages",t)},expression:"form.wages"}})],1),a("FormItem",{attrs:{label:"在职状态",prop:"status"}},[a("dict",{staticStyle:{width:"570px"},attrs:{dict:"occupationStatus",transfer:"",clearable:"",placeholder:"请选择在职状态..."},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1),a("FormItem",{attrs:{label:"签名",prop:"autograph"}},[a("upload-pic-input",{staticStyle:{width:"570px"},model:{value:e.form.autograph,callback:function(t){e.$set(e.form,"autograph",t)},expression:"form.autograph"}})],1),a("FormItem",{attrs:{label:"个人简历",prop:"resume"}},[a("upload-file-input",{staticStyle:{width:"570px"},model:{value:e.form.resume,callback:function(t){e.$set(e.form,"resume",t)},expression:"form.resume"}})],1),a("FormItem",{attrs:{label:"备注",prop:"remark"}},[a("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1),a("Form-item",{staticClass:"br"},[a("Button",{attrs:{loading:e.submitLoading,type:"primary"},on:{click:e.handleSubmit}},[e._v("提交并保存")]),a("Button",{on:{click:e.handleReset}},[e._v("重置")]),a("Button",{attrs:{type:"dashed"},on:{click:e.close}},[e._v("关闭")])],1)],1)],1)],1)},l=[],n=a("0e13"),i=a("8b52"),s=a("3a27"),o=a("6d38"),c={name:"add",components:{uploadPicInput:s["default"],uploadFileInput:o["default"],dict:i["default"]},data(){return{submitLoading:!1,form:{name:"",education:"",age:0,graduated:"",wages:0,status:"",autograph:"",resume:"",remark:""},formValidate:{}}},methods:{init(){},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate(e=>{e&&Object(n["a"])(this.form).then(e=>{this.submitLoading=!1,e.success&&(this.$Message.success("操作成功"),this.submited())})})},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},u=c,d=(a("50d0"),a("2877")),h=Object(d["a"])(u,r,l,!1,null,null,null);t["default"]=h.exports},"3a27":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticStyle:{display:"flex"}},[a("Input",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:e.placeholder,size:e.size,disabled:e.disabled,readonly:e.readonly,maxlength:e.maxlength,icon:"md-eye"},on:{"on-change":e.handleChange},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}},[a("Poptip",{staticStyle:{width:"17px",cursor:"pointer"},attrs:{slot:"append",transfer:"",trigger:"hover",title:"图片预览",placement:"right",width:"350"},slot:"append"},[a("Button",{attrs:{type:"primary",icon:"md-eye"}}),a("div",{attrs:{slot:"content"},slot:"content"},[a("img",{directives:[{name:"show",rawName:"v-show",value:e.currentValue,expression:"currentValue"}],staticStyle:{width:"100%",margin:"0 auto",display:"block",cursor:"zoom-in"},attrs:{src:e.currentValue},on:{click:e.viewImage}}),a("span",{directives:[{name:"show",rawName:"v-show",value:!e.currentValue,expression:"!currentValue"}]},[e._v("无效的图片链接")]),a("a",{directives:[{name:"show",rawName:"v-show",value:e.currentValue,expression:"currentValue"}],staticStyle:{"margin-top":"5px","text-align":"right",display:"block"},on:{click:e.viewImage}},[e._v("查看大图")])])],1)],1),a("Upload",{attrs:{action:e.uploadFileUrl,headers:e.accessToken,"on-success":e.handleSuccess,"on-error":e.handleError,format:e.format,accept:e.accept,"max-size":1024*e.maxSize,"on-format-error":e.handleFormatError,"on-exceeded-size":e.handleMaxSize,"before-upload":e.beforeUpload,"show-upload-list":!1}},[a("Button",{attrs:{loading:e.loading,size:e.size,disabled:e.disabled,icon:e.icon}},[e._v("上传图片")])],1)],1)])},l=[],n=(a("0808"),a("c82c")),i=a.n(n),s=a("365c"),o={name:"uploadPicInput",props:{value:String,size:String,placeholder:{type:String,default:"可输入图片链接"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},maxlength:Number,icon:{type:String,default:"ios-cloud-upload-outline"},maxSize:{type:Number,default:5},accept:{type:String,default:".jpg, .jpeg, .png, .gif"}},computed:{format(){if(this.accept){let e=[];return this.accept.split(",").forEach(t=>{e.push(t.replace(".","").replace(" ",""))}),e}return[]}},data(){return{accessToken:{},currentValue:this.value,loading:!1,uploadFileUrl:s["l"]}},methods:{init(){this.accessToken={accessToken:this.getStore("accessToken")}},viewImage(){let e=new Image;e.src=this.currentValue;let t=new i.a(e,{hidden:function(){t.destroy()}});t.show()},handleFormatError(e){this.loading=!1,this.$Notice.warning({title:"不支持的文件格式",desc:"所选文件‘ "+e.name+" ’格式不正确, 请选择 "+this.accept+" 格式文件"})},handleMaxSize(e){this.loading=!1,this.$Notice.warning({title:"文件大小过大",desc:"所选文件‘ "+e.name+" ’大小过大, 不得超过 "+this.maxSize+"M."})},beforeUpload(){return this.loading=!0,!0},handleSuccess(e,t){this.loading=!1,e.success?(this.currentValue=e.result,this.$emit("input",this.currentValue),this.$emit("on-change",this.currentValue)):this.$Message.error(e.message)},handleError(e,t,a){this.loading=!1,this.$Message.error(e.toString())},handleChange(e){this.$emit("input",this.currentValue),this.$emit("on-change",this.currentValue)},setCurrentValue(e){e!==this.currentValue&&(this.currentValue=e,this.$emit("on-change",this.currentValue))}},watch:{value(e){this.setCurrentValue(e)}},mounted(){this.init()}},c=o,u=a("2877"),d=Object(u["a"])(c,r,l,!1,null,null,null);t["default"]=d.exports},"50d0":function(e,t,a){"use strict";a("5af8")},"5af8":function(e,t,a){},"6d38":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticStyle:{display:"flex"}},[a("Input",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:e.placeholder,size:e.size,disabled:e.disabled,readonly:e.readonly,maxlength:e.maxlength},on:{"on-change":e.handleChange},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}}),a("Upload",{attrs:{action:e.uploadFileUrl,headers:e.accessToken,"on-success":e.handleSuccess,"on-error":e.handleError,format:e.format,accept:e.accept,"max-size":1024*e.maxSize,"on-format-error":e.handleFormatError,"on-exceeded-size":e.handleMaxSize,"before-upload":e.beforeUpload,"show-upload-list":!1}},[a("Button",{attrs:{type:"warning",ghost:"",loading:e.loading,size:e.size,disabled:e.disabled,icon:e.icon}},[e._v(e._s(e.buttonTitle))])],1)],1)])},l=[],n=(a("0808"),a("c82c"),a("365c")),i={name:"uploadPicInput",props:{value:String,size:String,placeholder:{type:String,default:"可输入文件链接"},buttonTitle:{type:String,default:"上传文件"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},maxlength:Number,icon:{type:String,default:"ios-cloud-upload-outline"},maxSize:{type:Number,default:100},accept:{type:String,default:".pdf"}},computed:{format(){if(this.accept){let e=[];return this.accept.split(",").forEach(t=>{e.push(t.replace(".","").replace(" ",""))}),e}return[]}},data(){return{accessToken:{},currentValue:this.value,loading:!1,uploadFileUrl:n["l"]}},methods:{init(){this.accessToken={accessToken:this.getStore("accessToken")}},handleFormatError(e){this.loading=!1,this.$Notice.warning({title:"不支持的文件格式",desc:"所选文件‘ "+e.name+" ’格式不正确, 请选择 "+this.accept+" 格式文件"})},handleMaxSize(e){this.loading=!1,this.$Notice.warning({title:"文件大小过大",desc:"所选文件‘ "+e.name+" ’大小过大, 不得超过 "+this.maxSize+"M."})},beforeUpload(){return this.loading=!0,!0},handleSuccess(e,t){this.loading=!1,e.success?(this.currentValue=e.result,this.$emit("input",this.currentValue),this.$emit("on-change",this.currentValue)):this.$Message.error(e.message)},handleError(e,t,a){this.loading=!1,this.$Message.error(e.toString())},handleChange(e){this.$emit("input",this.currentValue),this.$emit("on-change",this.currentValue)},setCurrentValue(e){e!==this.currentValue&&(this.currentValue=e,this.$emit("on-change",this.currentValue))}},watch:{value(e){this.setCurrentValue(e)}},mounted(){this.init()}},s=i,o=a("2877"),c=Object(o["a"])(s,r,l,!1,null,null,null);t["default"]=c.exports},"8b52":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Select",{attrs:{size:e.size,loading:e.loading,placeholder:e.placeholder,multiple:e.multiple,disabled:e.disabled,filterable:e.filterable,transfer:e.transfer,clearable:e.clearable,placement:e.placement,"transfer-class-name":e.transferClassName,prefix:e.prefix,"max-tag-count":e.maxTagCount,"max-tag-placeholder":e.maxTagPlaceholder},on:{"on-change":e.handleChange,"on-query-change":e.handleQueryChange,"on-clear":e.handleClear,"on-open-change":e.handleOpenChange,"on-select":e.handleSelect},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}},e._l(e.dictData,(function(t,r){return a("Option",{key:r,attrs:{value:t.value}},[e._v(e._s(t.title))])})),1)],1)},l=[],n=a("365c"),i={name:"dict",props:{value:"",dict:String,placeholder:{type:String,default:"请选择"},placement:{type:String,default:"bottom-start"},size:String,multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1},transfer:{type:Boolean,default:!1},transferClassName:String,prefix:String,maxTagCount:Number,maxTagPlaceholder:Function,clearable:{type:Boolean,default:!0}},data(){return{currentValue:this.value,dictData:[],loading:!1}},methods:{getData(e){this.loading=!0,Object(n["b"])(e).then(e=>{this.loading=!1,e.success&&(this.dictData=e.result)})},handleChange(e){this.$emit("input",e),this.$emit("on-change",e)},handleQueryChange(e){this.$emit("on-query-change",e)},handleClear(){this.$emit("on-clear","")},handleOpenChange(e){this.$emit("on-open-change",e)},handleSelect(e){this.$emit("on-select",e)},setCurrentValue(e){e!==this.currentValue&&(this.currentValue=e,this.$emit("on-change",this.currentValue))}},watch:{value(e){this.setCurrentValue(e)},dict(e){this.getData(e)}},mounted(){this.getData(this.dict)}},s=i,o=a("2877"),c=Object(o["a"])(s,r,l,!1,null,null,null);t["default"]=c.exports}}]);