(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3665418c"],{"0ccb":function(t,e,n){var i=n("50c4"),r=n("1148"),a=n("1d80"),o=Math.ceil,s=function(t){return function(e,n,s){var c,l,u=String(a(e)),d=u.length,f=void 0===s?" ":String(s),h=i(n);return h<=d||""==f?u:(c=h-d,l=r.call(f,o(c/f.length)),l.length>c&&(l=l.slice(0,c)),t?u+l:l+u)}};t.exports={start:s(!1),end:s(!0)}},1681:function(t,e,n){},"39f6":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"fill-height"},[n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{md:"6"}},[n("v-card",{staticClass:"elevation-12"},[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("v-toolbar-title",[t._v("網頁內容設定")])],1),n("v-card-text",[n("v-container",[n("v-form",{ref:"form",staticClass:"py-3"},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{md:"6"}},[n("v-text-field",{attrs:{label:"圖片網址1","prepend-icon":"mdi-image",rules:[function(){return!!t.images[0]||"必須填入"}],clearable:"",dense:"",outlined:""},model:{value:t.images[0],callback:function(e){t.$set(t.images,0,e)},expression:"images[0]"}})],1),n("v-col",{attrs:{md:"6"}},[n("v-text-field",{attrs:{label:"圖片網址2","prepend-icon":"mdi-image",rules:[function(){return!!t.images[1]||"必須填入"}],clearable:"",dense:"",outlined:""},model:{value:t.images[1],callback:function(e){t.$set(t.images,1,e)},expression:"images[1]"}})],1)],1),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{md:"6"}},[n("v-text-field",{attrs:{label:"圖片網址3","prepend-icon":"mdi-image",rules:[function(){return!!t.images[2]||"必須填入"}],clearable:"",dense:"",outlined:""},model:{value:t.images[2],callback:function(e){t.$set(t.images,2,e)},expression:"images[2]"}})],1),n("v-col",{attrs:{md:"6"}},[n("v-text-field",{attrs:{label:"圖片網址4","prepend-icon":"mdi-image",rules:[function(){return!!t.images[3]||"必須填入"}],clearable:"",dense:"",outlined:""},model:{value:t.images[3],callback:function(e){t.$set(t.images,3,e)},expression:"images[3]"}})],1)],1),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{md:"6"}},[n("v-text-field",{attrs:{label:"目標網址1","prepend-icon":"mdi-image",rules:[function(){return!!t.urls[0]||"必須填入"}],clearable:"",dense:"",outlined:""},model:{value:t.urls[0],callback:function(e){t.$set(t.urls,0,e)},expression:"urls[0]"}})],1),n("v-col",{attrs:{md:"6"}},[n("v-text-field",{attrs:{label:"目標網址2","prepend-icon":"mdi-image",rules:[function(){return!!t.urls[1]||"必須填入"}],clearable:"",dense:"",outlined:""},model:{value:t.urls[1],callback:function(e){t.$set(t.urls,1,e)},expression:"urls[1]"}})],1)],1),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{md:"6"}},[n("v-text-field",{attrs:{label:"目標網址3","prepend-icon":"mdi-image",rules:[function(){return!!t.urls[2]||"必須填入"}],clearable:"",dense:"",outlined:""},model:{value:t.urls[2],callback:function(e){t.$set(t.urls,2,e)},expression:"urls[2]"}})],1),n("v-col",{attrs:{md:"6"}},[n("v-text-field",{attrs:{label:"目標網址4","prepend-icon":"mdi-image",rules:[function(){return!!t.urls[3]||"必須填入"}],clearable:"",dense:"",outlined:""},model:{value:t.urls[3],callback:function(e){t.$set(t.urls,3,e)},expression:"urls[3]"}})],1)],1),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{md:"12"}},[n("v-textarea",{attrs:{label:"院所介紹","prepend-icon":"mdi-file-document-edit-outline",rules:[function(){return!!t.clinicIntroduction||"必須填入"}],clearable:"",dense:"",outlined:""},model:{value:t.clinicIntroduction,callback:function(e){t.clinicIntroduction=e},expression:"clinicIntroduction"}})],1)],1),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{md:"12"}},[n("v-textarea",{attrs:{label:"主治項目","prepend-icon":"mdi-file-document-edit-outline",rules:[function(){return!!t.indications||"必須填入"}],clearable:"",dense:"",outlined:""},model:{value:t.indications,callback:function(e){t.indications=e},expression:"indications"}})],1)],1),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{md:"12"}},[n("v-textarea",{attrs:{label:"醫師介紹","prepend-icon":"mdi-file-document-edit-outline",rules:[function(){return!!t.doctorIntroduction||"必須填入"}],clearable:"",dense:"",outlined:""},model:{value:t.doctorIntroduction,callback:function(e){t.doctorIntroduction=e},expression:"doctorIntroduction"}})],1)],1),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{md:"12"}},[n("v-textarea",{attrs:{label:"院所位置","prepend-icon":"mdi-file-document-edit-outline",rules:[function(){return!!t.clinicLocation||"必須填入"}],clearable:"",dense:"",outlined:""},model:{value:t.clinicLocation,callback:function(e){t.clinicLocation=e},expression:"clinicLocation"}})],1)],1),n("v-row",{attrs:{justify:"center"}},[n("v-btn",{staticClass:"mx-4",attrs:{dark:"",color:"primary"},on:{click:t.submit}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-send-check")]),t._v(" 設定 ")],1),n("v-btn",{staticClass:"mx-4",attrs:{dark:"",color:"red"},on:{click:t.close}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-close ")]),t._v(" 關閉 ")],1),n("v-btn",{staticClass:"mx-4",attrs:{dark:"",color:"secondary"},on:{click:t.clear}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-autorenew")]),t._v(" 清除 ")],1)],1)],1)],1)],1)],1)],1)],1)],1)},r=[],a=(n("a4d3"),n("e01a"),n("accc"),n("0d03"),n("ac1f"),n("5319"),n("9f12")),o=n("53fe"),s=n("8b83"),c=n("c65a"),l=n("c03e"),u=n("9ab4"),d=n("60a3"),f=n("4bb5"),h=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.images=["","","",""],t.urls=["","","",""],t.clinicIntroduction="",t.indications="",t.doctorIntroduction="",t.clinicLocation="",t.title="",t}return Object(l["a"])(e,t),Object(o["a"])(e,[{key:"created",value:function(){this.getWebDesignSetting(),this.setOverLay(!1)}},{key:"getWebDesignSetting",value:function(){var t=this;this.setOverLay(!0),this.axios.get("/management").then((function(t){return t.data})).then((function(e){var n=e.management;t.title=n.title,t.images=n.images,t.urls=n.URLs,t.clinicIntroduction=t.formatingToString(n.ourServices),t.indications=t.formatingToString(n.description),t.doctorIntroduction=t.formatingToString(n.doctorDescription),t.clinicLocation=t.formatingToString(n.clinicAddress)})).catch((function(e){t.$toasted.show("資料讀取失敗，請重新登入",{type:"error",position:"top-right",duration:3e3})})).then((function(){t.setOverLay(!1)}))}},{key:"submit",value:function(){var t=this;this.$refs.form.validate()&&(this.setOverLay(!0),this.axios.put("/management/information",this.getSeetingJson()).then((function(t){return t.data})).then((function(e){e.ok;t.$toasted.show("更新成功",{type:"success",position:"top-right",duration:3e3}),t.$router.push({path:"/admin/webmanagement/bulletinall"})})).catch((function(e){t.$toasted.show("更新失敗",{type:"error",position:"top-right",duration:3e3})})).then((function(){t.setOverLay(!1)})))}},{key:"clear",value:function(){this.images=["","","",""],this.urls=["","","",""],this.clinicIntroduction="",this.indications="",this.doctorIntroduction="",this.clinicLocation=""}},{key:"close",value:function(){this.$router.push({path:"/admin/webmanagement/bulletinall"})}},{key:"getSeetingJson",value:function(){return JSON.stringify({title:this.title,time:(new Date).toISOString().substr(0,10),images:this.images,URLs:this.urls,ourServices:this.formatingContext(this.clinicIntroduction),description:this.formatingContext(this.indications),doctorDescription:this.formatingContext(this.doctorIntroduction),clinicAddress:this.formatingContext(this.clinicLocation)})}},{key:"formatingContext",value:function(t){var e="";return e=t.replace("\n","<br />"),e}},{key:"formatingToString",value:function(t){var e="";return e=t.replace("<br />","\n"),e}}]),e}(d["c"]);u["a"]([Object(f["a"])("Loader/setOverLay")],h.prototype,"setOverLay",void 0),h=u["a"]([d["a"]],h);var p=h,m=p,v=n("2877"),g=n("6544"),b=n.n(g),y=n("8336"),w=n("b0af"),O=n("99d9"),x=n("62ad"),j=n("a523"),k=n("4bd4"),I=n("132d"),S=n("0fd9"),$=n("8654"),T=n("a844"),C=n("71d9"),V=n("2a7f"),_=Object(v["a"])(m,i,r,!1,null,null,null);e["default"]=_.exports;b()(_,{VBtn:y["a"],VCard:w["a"],VCardText:O["c"],VCol:x["a"],VContainer:j["a"],VForm:k["a"],VIcon:I["a"],VRow:S["a"],VTextField:$["a"],VTextarea:T["a"],VToolbar:C["a"],VToolbarTitle:V["a"]})},"4bd4":function(t,e,n){"use strict";n("a4d3"),n("4de4"),n("7db0"),n("4160"),n("caad"),n("e439"),n("dbb4"),n("b64b"),n("07ac"),n("2532"),n("159b");var i=n("2fa7"),r=n("58df"),a=n("7e2b"),o=n("3206");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(n,!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e["a"]=Object(r["a"])(a["a"],Object(o["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,n=function(t){return t.$watch("hasError",(function(n){e.$set(e.errorBag,t._uid,n)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(t._uid)||(i.valid=n(t)))})):i.valid=n(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var n=this.watchers.find((function(t){return t._uid===e._uid}));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:c({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"64e5":function(t,e,n){"use strict";var i=n("d039"),r=n("0ccb").start,a=Math.abs,o=Date.prototype,s=o.getTime,c=o.toISOString;t.exports=i((function(){return"0385-07-25T07:06:39.999Z"!=c.call(new Date(-5e13-1))}))||!i((function(){c.call(new Date(NaN))}))?function(){if(!isFinite(s.call(this)))throw RangeError("Invalid time value");var t=this,e=t.getUTCFullYear(),n=t.getUTCMilliseconds(),i=e<0?"-":e>9999?"+":"";return i+r(a(e),i?6:4,0)+"-"+r(t.getUTCMonth()+1,2,0)+"-"+r(t.getUTCDate(),2,0)+"T"+r(t.getUTCHours(),2,0)+":"+r(t.getUTCMinutes(),2,0)+":"+r(t.getUTCSeconds(),2,0)+"."+r(n,3,0)+"Z"}:c},a844:function(t,e,n){"use strict";n("a4d3"),n("4de4"),n("4160"),n("a9e3"),n("e439"),n("dbb4"),n("b64b"),n("acd8"),n("e25e"),n("159b");var i=n("2fa7"),r=(n("1681"),n("8654")),a=n("58df");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(n,!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c=Object(a["a"])(r["a"]);e["a"]=c.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return s({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},r["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,n=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(n,e)+"px"}},genInput:function(){var t=r["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){r["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},accc:function(t,e,n){var i=n("23e7"),r=n("64e5");i({target:"Date",proto:!0,forced:Date.prototype.toISOString!==r},{toISOString:r})}}]);
//# sourceMappingURL=chunk-3665418c.9fecf209.js.map