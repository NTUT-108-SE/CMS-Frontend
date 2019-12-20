(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42c41cf4"],{"4bb5":function(t,e,r){"use strict";var a=r("2fe1"),n=r("2f62"),i=s("computed",n["e"]),o=(s("computed",n["c"]),s("methods",n["b"]),s("methods",n["d"]));function s(t,e){function r(r,n){return Object(a["a"])((function(a,i){a[t]||(a[t]={});var o,s=(o={},o[i]=r,o);a[t][i]=void 0!==n?e(n,s)[i]:e(s)[i]}))}function n(t,e){if("string"===typeof e){var a=e,n=t;return r(a,void 0)(n,a)}var i=c(e),o=t;return r(o,i)}return n}function c(t){var e=t&&t.namespace;if("string"===typeof e)return"/"!==e[e.length-1]?e+"/":e}r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return o}))},"4bd4":function(t,e,r){"use strict";r("a4d3"),r("4de4"),r("7db0"),r("4160"),r("caad"),r("e439"),r("dbb4"),r("b64b"),r("07ac"),r("2532"),r("159b");var a=r("2fa7"),n=r("58df"),i=r("7e2b"),o=r("3206");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(r,!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e["a"]=Object(n["a"])(i["a"],Object(o["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,r=function(t){return t.$watch("hasError",(function(r){e.$set(e.errorBag,t._uid,r)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=r(t)))})):a.valid=r(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var r=this.watchers.find((function(t){return t._uid===e._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:c({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},a55b:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"login"}},[r("v-content",{attrs:{id:"login container"}},[r("v-container",{staticClass:"fill-height",style:{"background-image":"linear-gradient(0deg, rgba(192,192,217,0.2) 11%, rgba(97,83,87,0.5) 100%), url("+t.image+")"},attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[r("v-toolbar-title",[t._v("CMS login form")]),r("v-spacer")],1),r("v-card-text",[r("v-form",[r("v-text-field",{attrs:{autofocus:"",label:"Email",name:"email","prepend-icon":"mdi-account",type:"text"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),r("v-text-field",{attrs:{id:"password",label:"Password",name:"password","prepend-icon":"mdi-lock",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return e.stopPropagation(),t.onLogin()}}},[t._v("Login")])],1)],1)],1)],1)],1)],1)],1)},n=[],i=(r("b0c0"),r("9f12")),o=r("53fe"),s=r("8b83"),c=r("c65a"),u=r("c03e"),d=r("9ab4"),l=r("60a3"),f=r("4bb5"),p=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.email="",t.password="",t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"beforeRouteEnter",value:function(t,e,r){r((function(t){void 0!=t.user&&t.$router.push("/admin")}))}},{key:"onLogin",value:function(){var t=this;this.axios.post("/login",JSON.stringify({email:this.email,password:this.password})).then((function(t){return t.data})).then((function(e){var r=e.user;t.$toasted.show("Login success!! Welcom ".concat(r.name),{type:"success",position:"top-right",duration:3e3}),t.userLoaded(r),t.$router.push({name:"admin"})})).catch((function(e){t.$toasted.show("Login failed!!",{type:"error",position:"top-right",duration:3e3})}))}}]),e}(l["c"]);d["a"]([Object(f["a"])("User/UserLoaded")],p.prototype,"userLoaded",void 0),d["a"]([Object(f["b"])("image",{namespace:"Dashboard"})],p.prototype,"image",void 0),d["a"]([Object(f["b"])("user",{namespace:"User"})],p.prototype,"user",void 0),p=d["a"]([l["a"]],p);var h=p,b=h,v=r("2877"),m=r("6544"),g=r.n(m),w=r("7496"),y=r("8336"),O=r("b0af"),j=r("99d9"),V=r("62ad"),_=r("a523"),$=r("a75b"),k=r("4bd4"),B=r("0fd9"),x=r("2fa4"),E=r("8654"),P=r("71d9"),C=r("2a7f"),L=Object(v["a"])(b,a,n,!1,null,null,null);e["default"]=L.exports;g()(L,{VApp:w["a"],VBtn:y["a"],VCard:O["a"],VCardActions:j["a"],VCardText:j["b"],VCol:V["a"],VContainer:_["a"],VContent:$["a"],VForm:k["a"],VRow:B["a"],VSpacer:x["a"],VTextField:E["a"],VToolbar:P["a"],VToolbarTitle:C["a"]})}}]);
//# sourceMappingURL=chunk-42c41cf4.20893165.js.map