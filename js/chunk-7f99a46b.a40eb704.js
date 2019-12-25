(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f99a46b"],{1681:function(t,e,i){},"4bd4":function(t,e,i){"use strict";i("a4d3"),i("4de4"),i("7db0"),i("4160"),i("caad"),i("e439"),i("dbb4"),i("b64b"),i("07ac"),i("2532"),i("159b");var n=i("2fa7"),r=i("58df"),o=i("7e2b"),a=i("3206");function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(i,!0).forEach((function(e){Object(n["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}e["a"]=Object(r["a"])(o["a"],Object(a["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=i(t)))})):n.valid=i(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:s({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},a844:function(t,e,i){"use strict";i("a4d3"),i("4de4"),i("4160"),i("a9e3"),i("e439"),i("dbb4"),i("b64b"),i("acd8"),i("e25e"),i("159b");var n=i("2fa7"),r=(i("1681"),i("8654")),o=i("58df");function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(i,!0).forEach((function(e){Object(n["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var s=Object(o["a"])(r["a"]);e["a"]=s.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return c({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},r["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"}},genInput:function(){var t=r["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){r["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},feb3:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"fill-height"},[i("v-row",{attrs:{justify:"center",align:"center"}},[i("v-col",{attrs:{md:"6"}},[i("v-card",{staticClass:"elevation-12"},[i("v-toolbar",{attrs:{dark:"",color:"primary"}},[i("v-toolbar-title",[t._v(t._s(t.formTitle))])],1),i("v-card-text",[i("v-container",[i("v-form",{ref:"form",staticClass:"py-3",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-row",{attrs:{justify:"center"}},[i("v-col",{attrs:{md:"6"}},[i("v-text-field",{attrs:{label:"身分證","prepend-icon":"mdi-account-badge-horizontal-outline",rules:[function(){return!!t.identifier||"必須填入"},function(){return 10==t.identifier.length||"身分證必須是10個字元"}],clearable:"",dense:"",outlined:"",disabled:t.activeForm||"edit"==t.buttionAction},on:{input:t.checkID,"click:clear":t.clearIDAndName},model:{value:t.identifier,callback:function(e){t.identifier=e},expression:"identifier"}})],1),i("v-col",{attrs:{md:"6"}},[i("v-text-field",{attrs:{label:"姓名","prepend-icon":"mdi-account",rules:[function(){return!!t.name||"必須填入"}],clearable:"",dense:"",outlined:"",disabled:t.activeForm||t.controlNameActive||"edit"==t.buttionAction},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1),i("v-row",{attrs:{justify:"center"}},[i("v-col",{attrs:{md:"12"}},[i("v-textarea",{attrs:{label:"病況描述","prepend-icon":"mdi-file-document-edit-outline",rules:[function(){return!!t.conditionDescription||"必須填入"}],clearable:"",dense:"",outlined:"",disabled:t.activeForm},model:{value:t.conditionDescription,callback:function(e){t.conditionDescription=e},expression:"conditionDescription"}})],1)],1),i("v-row",{attrs:{justify:"center"}},[i("v-col",{attrs:{md:"12"}},[i("v-textarea",{attrs:{label:"藥物治療描述","prepend-icon":"mdi-file-document-edit-outline",rules:[function(){return!!t.medicationDescription||"必須填入"}],clearable:"",dense:"",outlined:"",disabled:t.activeForm},model:{value:t.medicationDescription,callback:function(e){t.medicationDescription=e},expression:"medicationDescription"}})],1)],1),i("v-row",{attrs:{justify:"center"}},["add"==t.buttionAction?i("v-btn",{staticClass:"mx-12",attrs:{dark:"",color:"primary"},on:{click:t.submit}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-send-check")]),t._v(" 送出 ")],1):t._e(),"edit"==t.buttionAction?i("v-btn",{staticClass:"mx-12",attrs:{dark:"",color:"primary"},on:{click:t.edit}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-send-check")]),t._v(" 更新 ")],1):t._e(),"close"==t.buttionAction?i("v-btn",{staticClass:"mx-12",attrs:{dark:"",color:"red"},on:{click:t.close}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-close ")]),t._v(" 關閉 ")],1):t._e(),"add"==t.buttionAction||"edit"==t.buttionAction?i("v-btn",{staticClass:"mx-12",attrs:{dark:"",color:"secondary"},on:{click:t.clear}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-autorenew")]),t._v(" 清除 ")],1):t._e()],1)],1)],1)],1)],1)],1)],1)],1)},r=[],o=(i("b0c0"),i("9f12")),a=i("53fe"),c=i("8b83"),s=i("c65a"),u=i("c03e"),d=i("9ab4"),l=i("60a3"),h=i("4bb5"),f=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(s["a"])(e).apply(this,arguments)),t.formTitle="新增病歷",t.identifier="",t.name="",t.conditionDescription="",t.medicationDescription="",t.valid=!0,t.activeForm=!1,t.buttionAction="add",t.tempID=0,t.controlNameActive=!1,t}return Object(u["a"])(e,t),Object(a["a"])(e,[{key:"clearIDAndName",value:function(){this.name="",this.controlNameActive=!1}},{key:"checkID",value:function(){var t=this;if(10==this.identifier.length){this.setOverLay(!0);var e="/patient/"+this.identifier;this.axios.get(e).then((function(t){return t.data})).then((function(e){var i=e.patient;t.name=i["family"]+i["given"],t.tempID=i["id"],t.controlNameActive=!0,t.setOverLay(!1)})).catch((function(e){t.setOverLay(!1),t.controlNameActive=!1,t.$toasted.show("讀取不到身分證對應的名字",{type:"error",position:"top-right",duration:3e3})}))}}},{key:"created",value:function(){"show"==this.$route.query.action?(this.formTitle="顯示病歷",this.getShowData(),this.activeForm=!0,this.buttionAction="close"):"edit"==this.$route.query.action&&(this.formTitle="更新病歷",this.getShowData(),this.buttionAction="edit")}},{key:"clear",value:function(){"edit"==this.buttionAction?(this.conditionDescription="",this.medicationDescription=""):"add"==this.buttionAction&&(this.conditionDescription="",this.medicationDescription="",this.identifier="",this.name="",this.controlNameActive=!1)}},{key:"getShowData",value:function(){this.setOverLay(!0),this.identifier=String(this.healthrecord.identifier),this.name=String(this.healthrecord.name),this.conditionDescription=String(this.healthrecord.code),this.medicationDescription=String(this.healthrecord.medication),this.setOverLay(!1)}},{key:"close",value:function(){this.$router.push({path:"/admin/healthrecord/healthrecord"})}},{key:"edit",value:function(){var t=this;if(this.$refs.form.validate()){this.setOverLay(!0);var e="/healthrecord/"+this.$route.query.id;this.axios.put(e,JSON.stringify({code:this.conditionDescription,medication:this.medicationDescription,identifier:this.identifier,name:this.name})).then((function(t){return t.data})).then((function(e){e.ok;t.setOverLay(!1),t.$toasted.show("更新成功",{type:"success",position:"top-right",duration:3e3}),t.$router.push({path:"/admin/healthrecord/healthrecord"})})).catch((function(e){t.setOverLay(!1),t.$toasted.show("更新失敗，請重新確認輸入資料",{type:"error",position:"top-right",duration:3e3})}))}}},{key:"submit",value:function(){this.$refs.form.validate()&&this.pullHealthRecord()}},{key:"pullHealthRecord",value:function(){var t=this;this.setOverLay(!0);var e="/healthrecord";this.axios.post(e,JSON.stringify({patientId:this.tempID,code:this.conditionDescription,medication:this.medicationDescription,identifier:this.identifier,name:this.name})).then((function(t){return t.data})).then((function(e){e.ok;t.setOverLay(!1),t.$toasted.show("新增成功",{type:"success",position:"top-right",duration:3e3}),t.$router.push({path:"/admin/healthrecord/healthrecord"})})).catch((function(e){t.setOverLay(!1),t.$toasted.show("新增失敗，請重新確認輸入資料",{type:"error",position:"top-right",duration:3e3})}))}}]),e}(l["c"]);d["a"]([Object(h["a"])("Loader/setOverLay")],f.prototype,"setOverLay",void 0),d["a"]([Object(h["b"])("healthrecord",{namespace:"HealthRecord"})],f.prototype,"healthrecord",void 0),d["a"]([Object(h["a"])("HealthRecord/deleteHealthRecord")],f.prototype,"deleteHealthRecord",void 0),f=d["a"]([l["a"]],f);var p=f,v=p,m=i("2877"),b=i("6544"),y=i.n(b),g=i("8336"),w=i("b0af"),O=i("99d9"),k=i("62ad"),D=i("a523"),j=i("4bd4"),x=i("132d"),_=i("0fd9"),$=i("8654"),I=i("a844"),V=i("71d9"),A=i("2a7f"),P=Object(m["a"])(v,n,r,!1,null,null,null);e["default"]=P.exports;y()(P,{VBtn:g["a"],VCard:w["a"],VCardText:O["c"],VCol:k["a"],VContainer:D["a"],VForm:j["a"],VIcon:x["a"],VRow:_["a"],VTextField:$["a"],VTextarea:I["a"],VToolbar:V["a"],VToolbarTitle:A["a"]})}}]);
//# sourceMappingURL=chunk-7f99a46b.a40eb704.js.map