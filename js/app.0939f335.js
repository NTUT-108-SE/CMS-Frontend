(function(e){function n(n){for(var c,a,u=n[0],i=n[1],l=n[2],s=0,h=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&h.push(r[a][0]),r[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);d&&d(n);while(h.length)h.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],c=!0,a=1;a<t.length;a++){var u=t[a];0!==r[u]&&(c=!1)}c&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},a={app:0},r={app:0},o=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{"chunk-6c27a6d4":"f93b1286","chunk-0c38c62c":"38ddba77","chunk-527583e1":"f59506d8","chunk-6f85642b":"58ea0b43","chunk-15d7f33c":"7e714ed8","chunk-2d0c0e70":"dede49a0","chunk-cda18268":"12e60608","chunk-d35185ce":"ca9086e9","chunk-c4a7ec4c":"f22c415f","chunk-40971891":"b99f40d2","chunk-2b399304":"3bd6f26f","chunk-3292cd6d":"1db0da4f","chunk-4ef947e3":"98f88163","chunk-4f5e2588":"25c0007c","chunk-5b265339":"54609973","chunk-69f8e05b":"bceb0204","chunk-7e8ca5dd":"b6345801","chunk-7f4d5b06":"c14b1082","chunk-d4bed09c":"4867aebf","chunk-f690a476":"d40cd77d","chunk-42c41cf4":"20893165","chunk-71541819":"595070cf","chunk-7cb704c5":"e89dc376","chunk-7cfcb69a":"3cc0b904","chunk-7f53b078":"6f1e3374",about:"1b68a984","chunk-5e7450d8":"04774a9a"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-6c27a6d4":1,"chunk-0c38c62c":1,"chunk-527583e1":1,"chunk-6f85642b":1,"chunk-cda18268":1,"chunk-d35185ce":1,"chunk-c4a7ec4c":1,"chunk-40971891":1,"chunk-2b399304":1,"chunk-4ef947e3":1,"chunk-4f5e2588":1,"chunk-5b265339":1,"chunk-69f8e05b":1,"chunk-7e8ca5dd":1,"chunk-7f4d5b06":1,"chunk-d4bed09c":1,"chunk-f690a476":1,"chunk-71541819":1,"chunk-7cb704c5":1,"chunk-7cfcb69a":1,"chunk-7f53b078":1,"chunk-5e7450d8":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var c="css/"+({about:"about"}[e]||e)+"."+{"chunk-6c27a6d4":"8314804c","chunk-0c38c62c":"3715e4a6","chunk-527583e1":"558a8eaa","chunk-6f85642b":"5b2bcd70","chunk-15d7f33c":"31d6cfe0","chunk-2d0c0e70":"31d6cfe0","chunk-cda18268":"d007547c","chunk-d35185ce":"d007547c","chunk-c4a7ec4c":"045e0408","chunk-40971891":"cdf0c9e9","chunk-2b399304":"36f76ac1","chunk-3292cd6d":"31d6cfe0","chunk-4ef947e3":"2e0b0110","chunk-4f5e2588":"36f76ac1","chunk-5b265339":"d3a426ea","chunk-69f8e05b":"36f76ac1","chunk-7e8ca5dd":"36f76ac1","chunk-7f4d5b06":"d007547c","chunk-d4bed09c":"36f76ac1","chunk-f690a476":"36f76ac1","chunk-42c41cf4":"31d6cfe0","chunk-71541819":"d007547c","chunk-7cb704c5":"d007547c","chunk-7cfcb69a":"d007547c","chunk-7f53b078":"d007547c",about:"31d6cfe0","chunk-5e7450d8":"2f251952"}[e]+".css",r=i.p+c,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var l=o[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===c||s===r))return n()}var h=document.getElementsByTagName("style");for(u=0;u<h.length;u++){l=h[u],s=l.getAttribute("data-href");if(s===c||s===r)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var c=n&&n.target&&n.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete a[e],d.parentNode.removeChild(d),t(o)},d.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var c=r[e];if(0!==c)if(c)n.push(c[2]);else{var o=new Promise((function(n,t){c=r[e]=[n,t]}));n.push(c[2]=o);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var h=new Error;l=function(n){s.onerror=s.onload=null,clearTimeout(d);var t=r[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",h.name="ChunkLoadError",h.type=c,h.request=a,t[1](h)}r[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var h=0;h<l.length;h++)n(l[h]);var d=s;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},"355f":function(e,n,t){"use strict";var c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("v-card-title",{staticClass:"py-2",attrs:{color:"grey"}},[e._v(" 看診資訊 ")]),t("v-divider",{staticClass:"mx-4"}),t("v-row",[t("v-card-text",{staticClass:"py-2 px-6"},[e._v(" 看診醫生： "+e._s(e.registrationInfoContent.doctorName)+" ")])],1),t("v-row",[t("v-card-text",{staticClass:"py-2 px-6"},[e._v(" 今日掛號人數： "+e._s(e.registrationInfoContent.totleRegistration)+" ")])],1),t("v-row",[t("v-card-text",{staticClass:"py-2 px-6 pb-4"},[e._v(" 目前看診進度： "+e._s(e.registrationInfoContent.nowRegistration)+" ")])],1)],1)},a=[],r=t("9f12"),o=t("8b83"),u=t("c65a"),i=t("c03e"),l=t("9ab4"),s=t("60a3"),h=function(e){function n(){var e;return Object(r["a"])(this,n),e=Object(o["a"])(this,Object(u["a"])(n).apply(this,arguments)),e.registrationInfoContent={doctorName:"黃俊凱",totleRegistration:87,nowRegistration:78},e}return Object(i["a"])(n,e),n}(s["c"]);h=l["a"]([s["a"]],h);var d=h,f=d,p=t("2877"),b=t("6544"),m=t.n(b),k=t("99d9"),v=t("ce7e"),g=t("0fd9"),w=Object(p["a"])(f,c,a,!1,null,null,null);n["a"]=w.exports;m()(w,{VCardText:k["b"],VCardTitle:k["c"],VDivider:v["a"],VRow:g["a"]})},6092:function(e,n,t){"use strict";var c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[t("thead",[t("tr",[t("th",{staticClass:"text-left"},[e._v("發布日期")]),t("th",{staticClass:"text-left"},[e._v("標題")]),t("th",{staticClass:"text-right"},[e._v("觀看次數")])])]),t("tbody",e._l(e.desserts,(function(n){return t("tr",{key:n.name},[t("td",[e._v(e._s(n.updateTime))]),t("td",[t("a",{attrs:{href:n.url}},[e._v(e._s(n.title))])]),t("td",{staticClass:"text-right"},[e._v(e._s(n.viewsNumber))])])})),0)]},proxy:!0}])})},a=[],r=(t("ac1f"),t("841c"),t("9f12")),o=t("8b83"),u=t("c65a"),i=t("c03e"),l=t("9ab4"),s=t("60a3"),h=function(e){function n(){var e;return Object(r["a"])(this,n),e=Object(o["a"])(this,Object(u["a"])(n).apply(this,arguments)),e.search="",e.headers=[{text:"更新日期",align:"left",sortable:!1,value:"name"},{text:"標題",value:"calories"},{text:"Fat (g)",value:"fat"},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Iron (%)",value:"iron"}],e.desserts=[{updateTime:"2019-10-29",url:"https://rnd.ntut.edu.tw/p/404-1042-96433-1.php",title:"【公告】臺北醫學大學舉辦108學年度「提升研究創新能量」，歡迎踴躍參加！",viewsNumber:0}],e}return Object(i["a"])(n,e),n}(s["c"]);h=l["a"]([s["a"]],h);var d=h,f=d,p=t("2877"),b=t("6544"),m=t.n(b),k=t("1f4f"),v=Object(p["a"])(f,c,a,!1,null,null,null);n["a"]=v.exports;m()(v,{VSimpleTable:k["a"]})},cd49:function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),a=t("bc3a"),r=t.n(a),o=t("a7fe"),u=t.n(o),i=t("a65d"),l=t.n(i),s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("router-view")},h=[],d=t("9f12"),f=t("8b83"),p=t("c65a"),b=t("c03e"),m=t("9ab4"),k=t("60a3"),v=function(e){function n(){return Object(d["a"])(this,n),Object(f["a"])(this,Object(p["a"])(n).apply(this,arguments))}return Object(b["a"])(n,e),n}(k["c"]);v=m["a"]([k["a"]],v);var g=v,w=g,j=t("2877"),y=Object(j["a"])(w,s,h,!1,null,null,null),_=y.exports,O=(t("d3b7"),t("8c4f")),x=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("Header"),t("v-content",[t("transition",[t("keep-alive",[t("router-view")],1)],1)],1),t("Footer")],1)},C=[],P=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app-bar",{attrs:{app:""}},[t("v-toolbar-title",{staticClass:"headline text-uppercase"},[t("span",{staticClass:"font-weight-light"},[e._v("Clinic Management System")])]),t("v-spacer"),t("router-link",{attrs:{to:"/",tag:"span"}},[t("v-btn",{attrs:{text:""}},[e._v("主畫面")])],1),t("router-link",{attrs:{to:"LastestNews",tag:"span"}},[t("v-btn",{attrs:{text:""}},[e._v("最新資訊")])],1),t("router-link",{attrs:{to:"Registration",tag:"span"}},[t("v-btn",{attrs:{text:""}},[e._v("掛號")])],1),t("router-link",{attrs:{to:"About",tag:"span"}},[t("v-btn",{attrs:{text:""}},[e._v("關於本院")])],1)],1)},T=[],V=function(e){function n(){return Object(d["a"])(this,n),Object(f["a"])(this,Object(p["a"])(n).apply(this,arguments))}return Object(b["a"])(n,e),n}(k["c"]);V=m["a"]([k["a"]],V);var E=V,S=E,N=t("6544"),L=t.n(N),R=t("40dc"),A=t("8336"),I=t("2fa4"),F=t("2a7f"),U=Object(j["a"])(S,P,T,!1,null,null,null),$=U.exports;L()(U,{VAppBar:R["a"],VBtn:A["a"],VSpacer:I["a"],VToolbarTitle:F["a"]});var B=t("fd2d"),D=function(e){function n(){return Object(d["a"])(this,n),Object(f["a"])(this,Object(p["a"])(n).apply(this,arguments))}return Object(b["a"])(n,e),n}(k["c"]);D=m["a"]([Object(k["a"])({components:{Header:$,Footer:B["a"]}})],D);var M=D,H=M,q=t("7496"),J=t("a75b"),K=Object(j["a"])(H,x,C,!1,null,null,null),Y=K.exports;L()(K,{VApp:q["a"],VContent:J["a"]});var z=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-container",{staticClass:"grey lighten-5"},[t("v-row",[t("v-carousel",e._l(e.items,(function(e,n){return t("v-carousel-item",{key:n,attrs:{src:e.src,href:e.href,"reverse-transition":"fade-transition",transition:"fade-transition"}})})),1)],1),t("v-row",{staticClass:"py-2"}),t("v-row",{attrs:{justify:"center"}},[t("v-col",{attrs:{md:"2"}},[t("v-card",{staticClass:"elevation-12"},[t("RegistrationInfo")],1)],1),t("v-col",{attrs:{md:"6"}},[t("v-card",{staticClass:"elevation-12"},[t("LastestNewsSheet")],1)],1)],1)],1)},G=[],Q=t("53fe"),W=t("355f"),X=t("6092"),Z=function(e){function n(){return Object(d["a"])(this,n),Object(f["a"])(this,Object(p["a"])(n).apply(this,arguments))}return Object(b["a"])(n,e),Object(Q["a"])(n,[{key:"data",value:function(){return{colors:["indigo","warning","pink darken-2","red lighten-1","deep-purple accent-4"],items:[{src:"https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",href:"https://google.com"},{src:"https://cdn.vuetifyjs.com/images/carousel/sky.jpg",href:"https://google.com"},{src:"https://cdn.vuetifyjs.com/images/carousel/bird.jpg",href:"https://google.com"},{src:"https://cdn.vuetifyjs.com/images/carousel/planet.jpg",href:"https://google.com"}],slides:["First","Second","Third","Fourth","Fifth"]}}}]),n}(k["c"]);Z=m["a"]([Object(k["a"])({components:{RegistrationInfo:W["a"],LastestNewsSheet:X["a"]}})],Z);var ee=Z,ne=ee,te=t("b0af"),ce=t("5e66"),ae=t("3e35"),re=t("62ad"),oe=t("a523"),ue=t("0fd9"),ie=Object(j["a"])(ne,z,G,!1,null,null,null),le=ie.exports;L()(ie,{VCard:te["a"],VCarousel:ce["a"],VCarouselItem:ae["a"],VCol:re["a"],VContainer:oe["a"],VRow:ue["a"]}),c["a"].use(O["a"]);var se=[{path:"/",component:Y,children:[{path:"/",name:"home",component:le},{path:"/lastestNews",name:"lastestNews",component:function(){return Promise.all([t.e("chunk-c4a7ec4c"),t.e("about")]).then(t.bind(null,"b628"))}},{path:"/about",name:"about",component:function(){return Promise.all([t.e("chunk-c4a7ec4c"),t.e("about")]).then(t.bind(null,"f820"))}},{path:"/registration",name:"registration",component:function(){return Promise.all([t.e("chunk-6c27a6d4"),t.e("chunk-0c38c62c"),t.e("chunk-6f85642b"),t.e("chunk-15d7f33c")]).then(t.bind(null,"3fd1"))}}]},{path:"/admin",name:"admin",component:function(){return Promise.all([t.e("chunk-c4a7ec4c"),t.e("chunk-5e7450d8")]).then(t.bind(null,"d577"))},children:[{path:"account/accountall",name:"account/accountall",component:function(){return Promise.all([t.e("chunk-6c27a6d4"),t.e("chunk-0c38c62c"),t.e("chunk-c4a7ec4c"),t.e("chunk-40971891"),t.e("chunk-4ef947e3")]).then(t.bind(null,"7cf1"))}},{path:"account/accountform",name:"account/accountform",component:function(){return Promise.all([t.e("chunk-6c27a6d4"),t.e("chunk-0c38c62c"),t.e("chunk-c4a7ec4c"),t.e("chunk-40971891"),t.e("chunk-7f4d5b06")]).then(t.bind(null,"b9fd"))},props:!0},{path:"account/accountset",name:"account/accountset",component:function(){return Promise.all([t.e("chunk-6c27a6d4"),t.e("chunk-71541819")]).then(t.bind(null,"ac1e"))}},{path:"account/passwordupdate",name:"account/passwordupdate",component:function(){return Promise.all([t.e("chunk-6c27a6d4"),t.e("chunk-0c38c62c"),t.e("chunk-c4a7ec4c"),t.e("chunk-40971891"),t.e("chunk-3292cd6d")]).then(t.bind(null,"be16"))}},{path:"account/accountset",name:"account/accountset",component:function(){return Promise.all([t.e("chunk-6c27a6d4"),t.e("chunk-71541819")]).then(t.bind(null,"ac1e"))}},{path:"financial/financialform",name:"financial/financialform",component:function(){return Promise.all([t.e("chunk-6c27a6d4"),t.e("chunk-0c38c62c"),t.e("chunk-6f85642b"),t.e("chunk-d35185ce")]).then(t.bind(null,"4337"))}},{path:"financial/financial",name:"financial/financial",component:function(){return Promise.all([t.e("chunk-6c27a6d4"),t.e("chunk-0c38c62c"),t.e("chunk-c4a7ec4c"),t.e("chunk-40971891"),t.e("chunk-69f8e05b")]).then(t.bind(null,"7914"))}},{path:"pill/pill",name:"pill/pill",component:function(){return Promise.all([t.e("chunk-6c27a6d4"),t.e("chunk-0c38c62c"),t.e("chunk-c4a7ec4c"),t.e("chunk-40971891"),t.e("chunk-4f5e2588")]).then(t.bind(null,"b9ab"))}},{path:"pill/pillform",name:"pill/pillform",component:function(){return Promise.all([t.e("chunk-6c27a6d4"),t.e("chunk-7cfcb69a")]).then(t.bind(null,"8922"))}},{path:"healthrecord/healthrecord",name:"healthrecord/healthrecord",component:function(){return Promise.all([t.e("chunk-6c27a6d4"),t.e("chunk-0c38c62c"),t.e("chunk-c4a7ec4c"),t.e("chunk-40971891"),t.e("chunk-d4bed09c")]).then(t.bind(null,"82b6"))}},{path:"healthrecord/healthrecordform",name:"healthrecord/healthrecordform",component:function(){return Promise.all([t.e("chunk-6c27a6d4"),t.e("chunk-0c38c62c"),t.e("chunk-6f85642b"),t.e("chunk-cda18268")]).then(t.bind(null,"feb3"))}},{path:"onlineregistration/onlineregistration",name:"onlineregistration/onlineregistration",component:function(){return Promise.all([t.e("chunk-6c27a6d4"),t.e("chunk-0c38c62c"),t.e("chunk-c4a7ec4c"),t.e("chunk-40971891"),t.e("chunk-f690a476")]).then(t.bind(null,"6fe0"))}},{path:"onlineregistration/onlineregistrationform",name:"onlineregistration/onlineregistrationform",component:function(){return Promise.all([t.e("chunk-6c27a6d4"),t.e("chunk-0c38c62c"),t.e("chunk-6f85642b"),t.e("chunk-2d0c0e70")]).then(t.bind(null,"4482"))}},{path:"onlineregistration/onlineregistrationtimeset",name:"onlineregistration/onlineregistrationtimeset",component:function(){return Promise.all([t.e("chunk-6c27a6d4"),t.e("chunk-0c38c62c"),t.e("chunk-527583e1")]).then(t.bind(null,"3de6"))}},{path:"patientmanagement/patientmanagement",name:"patientmanagement/patientmanagement",component:function(){return Promise.all([t.e("chunk-6c27a6d4"),t.e("chunk-0c38c62c"),t.e("chunk-c4a7ec4c"),t.e("chunk-40971891"),t.e("chunk-7e8ca5dd")]).then(t.bind(null,"c77f"))}},{path:"patientmanagement/patientmanagementform",name:"patientmanagement/patientmanagementform",component:function(){return Promise.all([t.e("chunk-6c27a6d4"),t.e("chunk-0c38c62c"),t.e("chunk-c4a7ec4c"),t.e("chunk-40971891"),t.e("chunk-5b265339")]).then(t.bind(null,"0126"))}},{path:"webmanagement/bulletinall",name:"webmanagement/bulletinall",component:function(){return Promise.all([t.e("chunk-6c27a6d4"),t.e("chunk-0c38c62c"),t.e("chunk-c4a7ec4c"),t.e("chunk-40971891"),t.e("chunk-2b399304")]).then(t.bind(null,"6387"))}},{path:"webmanagement/bulletinform",name:"webmanagement/bulletinform",component:function(){return Promise.all([t.e("chunk-6c27a6d4"),t.e("chunk-7f53b078")]).then(t.bind(null,"afdb"))}},{path:"webmanagement/webdesign",name:"webmanagement/webdesign",component:function(){return Promise.all([t.e("chunk-6c27a6d4"),t.e("chunk-7cb704c5")]).then(t.bind(null,"39f6"))}}]},{path:"/login",name:"login",component:function(){return Promise.all([t.e("chunk-6c27a6d4"),t.e("chunk-42c41cf4")]).then(t.bind(null,"a55b"))}}],he=new O["a"]({mode:"history",base:"/",routes:se}),de=he,fe=t("2f62"),pe={},be={},me={setDrawer:function(e,n){e.drawer=n}},ke={drawer:!1,color:"success",image:"https://picsum.photos/1920/1080?random"},ve=!0,ge={namespaced:ve,state:ke,getters:pe,actions:be,mutations:me},we={},je={},ye={UserLoaded:function(e,n){e.error=!1,e.user=n},UserError:function(e){e.error=!0,e.user=void 0},UserLogout:function(e){e.user=void 0,e.error=!1}},_e={user:void 0,error:!1},Oe=!0,xe={namespaced:Oe,state:_e,getters:we,actions:je,mutations:ye},Ce=t("bfa9");c["a"].use(fe["a"]);var Pe=new Ce["a"]({storage:window.localStorage}),Te={state:{version:"1.0.0"},modules:{Dashboard:ge,User:xe},plugins:[Pe.plugin]},Ve=new fe["a"].Store(Te),Ee=t("f309");c["a"].use(Ee["a"]);var Se=new Ee["a"]({icons:{iconfont:"mdi"}});c["a"].config.productionTip=!1,r.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",r.a.defaults.withCredentials=!0,r.a.defaults.baseURL="https://lab.mino.tw",c["a"].use(u.a,r.a),c["a"].use(l.a,{theme:"outline",iconPack:"mdi"}),k["a"].registerHooks(["beforeRouteEnter","beforeRouteLeave","beforeRouteUpdate"]),new c["a"]({router:de,store:Ve,vuetify:Se,render:function(e){return e(_)}}).$mount("#app")},fd2d:function(e,n,t){"use strict";var c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-footer",{attrs:{dark:!!e.dark}},[t("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t("span",{},[e._v(" © "+e._s((new Date).getFullYear())+" — "),t("strong",[e._v(" NTUT-SELAB "),t("v-btn",{attrs:{text:"",href:"https://github.com/NTUT-108-SE",target:"_blank"}},[t("v-icon",[e._v("mdi-github-circle")])],1)],1)])])],1)},a=[],r=t("9f12"),o=t("8b83"),u=t("c65a"),i=t("c03e"),l=t("9ab4"),s=t("60a3"),h=function(e){function n(){return Object(r["a"])(this,n),Object(o["a"])(this,Object(u["a"])(n).apply(this,arguments))}return Object(i["a"])(n,e),n}(s["c"]);l["a"]([Object(s["b"])()],h.prototype,"dark",void 0),h=l["a"]([s["a"]],h);var d=h,f=d,p=t("2877"),b=t("6544"),m=t.n(b),k=t("8336"),v=t("62ad"),g=t("553a"),w=t("132d"),j=Object(p["a"])(f,c,a,!1,null,null,null);n["a"]=j.exports;m()(j,{VBtn:k["a"],VCol:v["a"],VFooter:g["a"],VIcon:w["a"]})}});
//# sourceMappingURL=app.0939f335.js.map