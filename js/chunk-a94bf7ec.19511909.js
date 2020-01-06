(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a94bf7ec"],{"3fd1":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"grey lighten-5"},[i("v-row",{attrs:{justify:"center"}},[i("v-col",{attrs:{md:"2"}},[i("v-card",{staticClass:"elevation-12 mb-5"},[i("v-list",{attrs:{rounded:""}},[i("v-list-item-group",{attrs:{color:"primary"}},t._l(t.actionList,(function(e){return i("v-list-item",{key:e.title,on:{click:function(i){t.isRegisterStatus(e.action),t.actionName=e.title}}},[i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1)],1),i("v-card",{staticClass:"elevation-12"},[i("RegistrationInfo")],1)],1),i("v-col",{attrs:{md:"6"}},[i("v-card",{staticClass:"elevation-12"},[i("v-card-title",{staticClass:"py-2",attrs:{color:"grey"}},[t._v(" "+t._s(t.actionName)+" ")]),i("v-divider",{staticClass:"mx-4"}),t.isShowUserRegistrationIndex?t._e():i("v-form",{ref:"form",staticClass:"py-3"},[i("v-row",{attrs:{justify:"center"}},[i("v-col",{attrs:{md:"6"}},[i("v-text-field",{attrs:{label:"身分證字號","prepend-icon":"mdi-account-card-details-outline",placeholder:"ex:A000000000",rules:[function(){return!!t.identify||"必須填入"},function(){return t.checkTaiwanID()||"身分證必須是10個字元且不符合台灣規則"}],clearable:"",dense:"",outlined:"",rounded:""},model:{value:t.identify,callback:function(e){t.identify=e},expression:"identify"}})],1)],1),t.isCheckRegistrationIndexStatus?t._e():i("v-row",{attrs:{justify:"center"}},[i("v-col",{attrs:{md:"6"}},[i("v-menu",{ref:"birthMenu",attrs:{"close-on-content-click":!1,"return-value":t.birthDate,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(e){t.birthDate=e},"update:return-value":function(e){t.birthDate=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[i("v-text-field",t._g({attrs:{label:"出生日期","prepend-icon":"mdi-calendar-blank",readonly:"",dense:"",outlined:"",rounded:""},model:{value:t.birthDate,callback:function(e){t.birthDate=e},expression:"birthDate"}},a))]}}],null,!1,809516223),model:{value:t.birthMenu,callback:function(e){t.birthMenu=e},expression:"birthMenu"}},[i("v-date-picker",{attrs:{"no-title":"",scrollable:"",min:"1900-01-01",max:t.getThisTime()},model:{value:t.birthDate,callback:function(e){t.birthDate=e},expression:"birthDate"}},[i("v-spacer"),i("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.birthMenu=!1}}},[t._v("Cancel")]),i("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.birthMenu.save(t.birthDate)}}},[t._v("OK")])],1)],1)],1)],1),t.isCheckRegistrationIndexStatus?t._e():i("v-row",{attrs:{justify:"center"}},[i("v-col",{attrs:{md:"6"}},[i("v-menu",{ref:"treatMenu",attrs:{"close-on-content-click":!1,"return-value":t.treatDate,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(e){t.treatDate=e},"update:return-value":function(e){t.treatDate=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[i("v-text-field",t._g({attrs:{label:"看診日期","prepend-icon":"mdi-calendar-blank",readonly:"",dense:"",outlined:"",rounded:""},model:{value:t.treatDate,callback:function(e){t.treatDate=e},expression:"treatDate"}},a))]}}],null,!1,2803386360),model:{value:t.treatMenu,callback:function(e){t.treatMenu=e},expression:"treatMenu"}},[i("v-date-picker",{attrs:{"no-title":"",scrollable:"",min:t.getThisTime()},model:{value:t.treatDate,callback:function(e){t.treatDate=e},expression:"treatDate"}},[i("v-spacer"),i("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.treatMenu=!1}}},[t._v("Cancel")]),i("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.treatMenu.save(t.treatDate)}}},[t._v("OK")])],1)],1)],1)],1),i("v-row",{staticClass:"pb-3",attrs:{justify:"center"}},["add"==t.action?i("v-btn",{staticClass:"mx-12",attrs:{rounded:"",dark:"",color:"primary"},on:{click:t.submit}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-send-check")]),t._v(" 送出 ")],1):t._e(),"add"==t.action?i("v-btn",{staticClass:"mx-12",attrs:{rounded:"",dark:"",color:"secondary"},on:{click:t.clear}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-autorenew")]),t._v(" 清除 ")],1):t._e()],1)],1),t.isShowUserRegistrationIndex?i("v-card-text",{staticClass:"font-weight-bold"},[t.isGetuserRegistrationInfos?i("p",{staticClass:"subtitle-2 font-weight-bold"},[t._v(" 以下為您的看診資訊: "),i("br"),t._v(" 病患姓名: "+t._s(t.userRegistrationInfos[0].name)),i("br")]):t._e(),t.isGetuserRegistrationInfos?t._e():i("p",{staticClass:"subtitle-2 font-weight-bold"},[t._v(" 查無掛號資訊 ")]),t._l(t.userRegistrationInfos,(function(e){return i("div",{key:e.id},[i("p",[t._v(" 看診日期: "+t._s(e.registrationDate)),i("br"),t._v(" 掛號號碼: "+t._s(e.order)),i("br")])])}))],2):t._e()],1)],1)],1)],1)},n=[],r=(i("accc"),i("0d03"),i("a9e3"),i("9f12")),s=i("53fe"),o=i("8b83"),c=i("c65a"),l=i("c03e"),u=i("9ab4"),d=i("60a3"),f=i("355f"),h=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.isCheckRegistrationIndexStatus=!1,t.isShowUserRegistrationIndex=!1,t.isGetuserRegistrationInfos=!1,t.actionName="",t.action="add",t.treatDate="",t.birthDate="1900-01-01",t.treatMenu=!1,t.birthMenu=!1,t.identify="",t.returnInfomation={},t.userRegistrationInfos=[],t.actionList=[{title:"掛號",action:"register"},{title:"掛號查詢",action:"check"}],t}return Object(l["a"])(e,t),Object(s["a"])(e,[{key:"created",value:function(){this.treatDate=this.getThisTime(),this.actionName=Object(this.actionList[0]).title}},{key:"submit",value:function(){this.$refs.form.validate()&&(this.userRegistrationInfos=[],this.isCheckRegistrationIndexStatus?this.searchUserRegistrationInfo():this.register())}},{key:"clear",value:function(){this.identify="",this.birthDate="1900-01-01"}},{key:"isRegisterStatus",value:function(t){this.isShowUserRegistrationIndex=!1,this.isCheckRegistrationIndexStatus="check"==t}},{key:"getThisTime",value:function(){var t=6e4*(new Date).getTimezoneOffset();return new Date(Date.now()-t).toISOString().substr(0,10)}},{key:"allTheFormInfomation",value:function(){var t={identifier:this.identify,registrationDate:this.treatDate,birthDate:this.birthDate};return JSON.stringify(t)}},{key:"register",value:function(){var t=this,e="/registration";this.axios.post(e,this.allTheFormInfomation()).then((function(t){return t.data})).then((function(e){var i=e.registration;t.showUserRegistrationIndex([i])})).catch((function(e){t.showUserRegistrationIndex([]),t.$toasted.show("掛號失敗",{type:"error",position:"top-right",duration:3e3})}))}},{key:"searchUserRegistrationInfo",value:function(){var t=this,e="/registration/identifier?identifier="+this.identify;this.axios.get(e).then((function(t){return t.data})).then((function(e){var i=e.registrations;t.showUserRegistrationIndex(i)})).catch((function(e){t.showUserRegistrationIndex([])}))}},{key:"showUserRegistrationIndex",value:function(t){this.userRegistrationInfos=t,this.isShowUserRegistrationIndex=!0,0==this.userRegistrationInfos.length?this.isGetuserRegistrationInfos=!1:this.isGetuserRegistrationInfos=!0}},{key:"checkTaiwanID",value:function(){var t=/^[A-Z]{1}[1-2]{1}[0-9]{8}$/;if(t.test(this.identify)){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=["10","11","12","13","14","15","16","17","34","18","19","20","21","22","35","23","24","25","26","27","28","29","32","30","31","33"],a=e.indexOf(this.identify.charAt(0)),n=i[a]+this.identify.substr(1,9),r=1*Number(n.charAt(0)),s=1;s<=9;s++)r+=Number(n.charAt(s))*(10-s);return r+=1*Number(n.charAt(10)),r%10==0}return!1}}]),e}(d["c"]);h=u["a"]([Object(d["a"])({components:{RegistrationInfo:f["a"]}})],h);var v=h,b=v,g=i("2877"),m=i("6544"),p=i.n(m),k=i("8336"),y=i("b0af"),I=i("99d9"),x=i("62ad"),D=i("a523"),w=i("2e4b"),C=i("ce7e"),R=i("4bd4"),_=i("132d"),T=i("8860"),S=i("da13"),V=i("5d23"),M=i("1baa"),U=i("e449"),O=i("0fd9"),j=i("2fa4"),N=i("8654"),L=Object(g["a"])(b,a,n,!1,null,null,null);e["default"]=L.exports;p()(L,{VBtn:k["a"],VCard:y["a"],VCardText:I["c"],VCardTitle:I["d"],VCol:x["a"],VContainer:D["a"],VDatePicker:w["a"],VDivider:C["a"],VForm:R["a"],VIcon:_["a"],VList:T["a"],VListItem:S["a"],VListItemContent:V["a"],VListItemGroup:M["a"],VListItemTitle:V["b"],VMenu:U["a"],VRow:O["a"],VSpacer:j["a"],VTextField:N["a"]})},"64e5":function(t,e,i){"use strict";var a=i("d039"),n=i("0ccb").start,r=Math.abs,s=Date.prototype,o=s.getTime,c=s.toISOString;t.exports=a((function(){return"0385-07-25T07:06:39.999Z"!=c.call(new Date(-5e13-1))}))||!a((function(){c.call(new Date(NaN))}))?function(){if(!isFinite(o.call(this)))throw RangeError("Invalid time value");var t=this,e=t.getUTCFullYear(),i=t.getUTCMilliseconds(),a=e<0?"-":e>9999?"+":"";return a+n(r(e),a?6:4,0)+"-"+n(t.getUTCMonth()+1,2,0)+"-"+n(t.getUTCDate(),2,0)+"T"+n(t.getUTCHours(),2,0)+":"+n(t.getUTCMinutes(),2,0)+":"+n(t.getUTCSeconds(),2,0)+"."+n(i,3,0)+"Z"}:c},accc:function(t,e,i){var a=i("23e7"),n=i("64e5");a({target:"Date",proto:!0,forced:Date.prototype.toISOString!==n},{toISOString:n})}}]);
//# sourceMappingURL=chunk-a94bf7ec.19511909.js.map