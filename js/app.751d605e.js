(function(t){function e(e){for(var r,u,c=e[0],i=e[1],s=e[2],l=0,f=[];l<c.length;l++)u=c[l],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&f.push(a[u][0]),a[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);p&&p(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,u=1;u<n.length;u++){var i=n[u];0!==a[i]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o=[];function u(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c64d128f"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=u(t);var s=new Error;o=function(e){i.onerror=i.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}a[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var p=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Header"),n("v-content",[n("transition",[n("keep-alive",[n("router-view")],1)],1)],1),n("Footer")],1)},o=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",{staticClass:"font-weight-light"},[t._v("Clinic Management System")])]),n("v-spacer"),n("v-btn",{attrs:{text:""}},[n("router-link",{attrs:{to:"/",tag:"span"}},[t._v("Home")])],1),n("v-btn",{attrs:{text:""}},[n("router-link",{attrs:{to:"About",tag:"span"}},[t._v("About")])],1)],1)},c=[],i=n("9f12"),s=n("8b83"),l=n("c65a"),p=n("c03e"),f=n("9ab4"),b=n("60a3"),v=function(t){function e(){return Object(i["a"])(this,e),Object(s["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(p["a"])(e,t),e}(b["b"]);v=f["a"]([b["a"]],v);var d=v,h=d,m=n("2877"),g=n("6544"),j=n.n(g),y=n("40dc"),O=n("8336"),_=n("2fa4"),w=n("2a7f"),x=Object(m["a"])(h,u,c,!1,null,null,null),T=x.exports;j()(x,{VAppBar:y["a"],VBtn:O["a"],VSpacer:_["a"],VToolbarTitle:w["a"]});var S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("span",{},[t._v(" © "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v(" NTUT-SELAB "),n("v-btn",{attrs:{text:"",href:"https://github.com/NTUT-108-SE",target:"_blank"}},[n("v-icon",[t._v("mdi-github-circle")])],1)],1)])])],1)},V=[],k=function(t){function e(){return Object(i["a"])(this,e),Object(s["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(p["a"])(e,t),e}(b["b"]);k=f["a"]([b["a"]],k);var E=k,P=E,C=n("62ad"),A=n("553a"),M=n("132d"),$=Object(m["a"])(P,S,V,!1,null,null,null),B=$.exports;j()($,{VBtn:O["a"],VCol:C["a"],VFooter:A["a"],VIcon:M["a"]});var F=r["a"].extend({name:"App",components:{Header:T,Footer:B},data:function(){return{}}}),H=F,L=n("7496"),J=n("a75b"),N=Object(m["a"])(H,a,o,!1,null,null,null),U=N.exports;j()(N,{VApp:L["a"],VContent:J["a"]});n("d3b7");var q=n("8c4f"),D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("This is an Home page")])},I=[],Y=function(t){function e(){return Object(i["a"])(this,e),Object(s["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(p["a"])(e,t),e}(b["b"]);Y=f["a"]([b["a"]],Y);var z=Y,G=z,K=Object(m["a"])(G,D,I,!1,null,null,null),Q=K.exports;r["a"].use(q["a"]);var R=[{path:"/",name:"home",component:Q},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],W=new q["a"]({mode:"history",base:"/",routes:R}),X=W,Z=n("2f62");r["a"].use(Z["a"]);var tt=new Z["a"].Store({state:{},mutations:{},actions:{},modules:{}}),et=n("f309");r["a"].use(et["a"]);var nt=new et["a"]({icons:{iconfont:"mdi"}});r["a"].config.productionTip=!1,new r["a"]({router:X,store:tt,vuetify:nt,render:function(t){return t(U)}}).$mount("#app")}});
//# sourceMappingURL=app.751d605e.js.map