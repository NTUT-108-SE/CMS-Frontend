(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-354df1f0"],{2616:function(t,e,i){var n=i("0363"),r=i("7463"),a=n("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[a]===t)}},"284c":function(t,e,i){"use strict";var n=i("1316"),r=i.n(n);function a(t){if(r()(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}var o=i("a06f"),s=i.n(o),c=i("2dc0"),l=i.n(c);function u(t){if(l()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return s()(t)}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function d(t){return a(t)||u(t)||h()}i.d(e,"a",(function(){return d}))},"3c93":function(t,e,i){},"471b":function(t,e,i){"use strict";var n=i("194a"),r=i("4fff"),a=i("faaa"),o=i("2616"),s=i("6725"),c=i("6c15"),l=i("0b7b");t.exports=function(t){var e,i,u,h,d,p=r(t),v="function"==typeof this?this:Array,f=arguments.length,m=f>1?arguments[1]:void 0,g=void 0!==m,b=0,y=l(p);if(g&&(m=n(m,f>2?arguments[2]:void 0,2)),void 0==y||v==Array&&o(y))for(e=s(p.length),i=new v(e);e>b;b++)c(i,b,g?m(p[b],b):p[b]);else for(h=y.call(p),d=h.next,i=new v;!(u=d.call(h)).done;b++)c(i,b,g?a(h,m,[u.value,b],!0):u.value);return i.length=b,i}},"484e":function(t,e,i){var n=i("a5eb"),r=i("471b"),a=i("7de7"),o=!a((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:o},{from:r})},"4bb5":function(t,e,i){"use strict";var n=i("2fe1"),r=i("2f62"),a=s("computed",r["e"]),o=(s("computed",r["c"]),s("methods",r["b"]),s("methods",r["d"]));function s(t,e){function i(i,r){return Object(n["a"])((function(n,a){n[t]||(n[t]={});var o,s=(o={},o[a]=i,o);n[t][a]=void 0!==r?e(r,s)[a]:e(s)[a]}))}function r(t,e){if("string"===typeof e){var n=e,r=t;return i(n,void 0)(r,n)}var a=c(e),o=t;return i(o,a)}return r}function c(t){var e=t&&t.namespace;if("string"===typeof e)return"/"!==e[e.length-1]?e+"/":e}i.d(e,"b",(function(){return a})),i.d(e,"a",(function(){return o}))},"74e7":function(t,e,i){t.exports=i("bc59")},7958:function(t,e,i){},"7de7":function(t,e,i){var n=i("0363"),r=n("iterator"),a=!1;try{var o=0,s={next:function(){return{done:!!o++}},return:function(){a=!0}};s[r]=function(){return this},Array.from(s,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!a)return!1;var i=!1;try{var n={};n[r]=function(){return{next:function(){return{done:i=!0}}}},t(n)}catch(c){}return i}},a06f:function(t,e,i){t.exports=i("74e7")},a293:function(t,e,i){"use strict";i("45fc");function n(){return!1}function r(t,e,i){i.args=i.args||{};var r=i.args.closeConditional||n;if(t&&!1!==r(t)&&!("isTrusted"in t&&!t.isTrusted||"pointerType"in t&&!t.pointerType)){var a=(i.args.include||function(){return[]})();a.push(e),!a.some((function(e){return e.contains(t.target)}))&&setTimeout((function(){r(t)&&i.value&&i.value(t)}),0)}}var a={inserted:function(t,e){var i=function(i){return r(i,t,e)},n=document.querySelector("[data-app]")||document.body;n.addEventListener("click",i,!0),t._clickOutside=i},unbind:function(t){if(t._clickOutside){var e=document.querySelector("[data-app]")||document.body;e&&e.removeEventListener("click",t._clickOutside,!0),delete t._clickOutside}}};e["a"]=a},b848:function(t,e,i){"use strict";var n=i("284c"),r=i("58df");function a(t){for(var e=[],i=0;i<t.length;i++){var r=t[i];r.isActive&&r.isDependent?e.push(r):e.push.apply(e,Object(n["a"])(a(r.$children)))}return e}e["a"]=Object(r["a"])().extend({name:"dependent",data:function(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive:function(t){if(!t)for(var e=this.getOpenDependents(),i=0;i<e.length;i++)e[i].isActive=!1}},methods:{getOpenDependents:function(){return this.closeDependents?a(this.$children):[]},getOpenDependentElements:function(){for(var t=[],e=this.getOpenDependents(),i=0;i<e.length;i++)t.push.apply(t,Object(n["a"])(e[i].getClickableDependentElements()));return t},getClickableDependentElements:function(){var t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push.apply(t,Object(n["a"])(this.getOpenDependentElements())),t}}})},bc59:function(t,e,i){i("3e47"),i("484e");var n=i("764b");t.exports=n.Array.from},d577:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{id:"inspire"}},[i("Toolbar"),i("transition",[i("keep-alive",[i("v-content",[i("router-view")],1)],1)],1),i("Footer",{attrs:{dark:!0}})],1)},r=[],a=i("9f12"),o=i("53fe"),s=i("8b83"),c=i("c65a"),l=i("c03e"),u=i("9ab4"),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-navigation-drawer",{attrs:{dark:"",app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list",{attrs:{dense:""}},[i("v-list-item",[i("v-list-item-avatar",[""!=t.User.url?i("v-img",{attrs:{src:t.User.url}}):i("span",{staticClass:"white--text"},[t._v(t._s(t.User.name))])],1),i("v-list-item-title",[t._v(t._s(t.User.name))]),i("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[i("v-icon",[t._v("mdi-chevron-left")])],1)],1)],1),i("v-divider"),i("v-list",t._l(t.items,(function(e){return i("v-list-group",{key:e.title,attrs:{"prepend-icon":e.icon,"no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)]},proxy:!0}],null,!0)},t._l(e.items,(function(e){return i("v-list-item",{key:e.title,attrs:{link:"",to:e.path}},[i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)})),1)],1),i("v-app-bar",{attrs:{app:"","clipped-left":"",dense:"",color:"#fcb69f",dark:"",src:t.image},scopedSlots:t._u([{key:"img",fn:function(e){var n=e.props;return[i("v-img",t._b({attrs:{gradient:"to top right, rgba(40,84,84,.3), rgba(128,208,199,.9)"}},"v-img",n,!1))]}}])},[i("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),i("v-toolbar-title",{staticClass:"mr-12 align-center"},[i("span",{staticClass:"title"},[t._v("Clinic Management System DashBoard")])]),i("v-spacer"),i("v-btn",{attrs:{icon:""},on:{click:t.Logout}},[i("v-icon",[t._v("mdi-exit-to-app ")])],1)],1)],1)},d=[],p=i("60a3"),v=i("4bb5"),f=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.drawer=!0,t.items=[{icon:"mdi-account-group",title:"使用者管理",items:[{title:"瀏覽使用者帳戶",path:"/admin/account/accountall"},{title:"新增使用者帳戶",path:"/admin/account/accountform"}]},{icon:"mdi-account-lock",title:"病人資訊管理",items:[{title:"瀏覽病人",path:"/admin/patientmanagement/patientmanagement"},{title:"新增病人",path:"/admin/patientmanagement/patientmanagementform"}]},{icon:"mdi-clipboard-text-outline",title:"病歷管理",items:[{title:"瀏覽病歷",path:"/admin/healthrecord/healthrecord"},{title:"新增病歷",path:"/admin/healthrecord/healthrecordform"}]},{icon:"mdi-plus-network-outline",title:"掛號管理",items:[{title:"瀏覽掛號",path:"/admin/onlineregistration/onlineregistration"},{title:"新增掛號",path:"/admin/onlineregistration/onlineregistrationform"}]},{icon:"mdi-pill",title:"藥品管理",items:[{title:"瀏覽藥品",path:"/admin/pill/pill"},{title:"新增藥品",path:"/admin/pill/pillform"}]},{icon:"mdi-receipt",title:"財務管理",items:[{title:"瀏覽收據",path:"/admin/financial/financial"},{title:"新增收據",path:"/admin/financial/financialform"}]}],t}return Object(l["a"])(e,t),Object(o["a"])(e,[{key:"Logout",value:function(){confirm("確定要離開CMS系統嗎?")&&(this.userLogout(),this.$router.push("/"))}}]),e}(p["c"]);u["a"]([Object(v["b"])("image",{namespace:"Dashboard"})],f.prototype,"image",void 0),u["a"]([Object(v["b"])("user",{namespace:"User"})],f.prototype,"User",void 0),u["a"]([Object(v["a"])("User/UserLogout")],f.prototype,"userLogout",void 0),f=u["a"]([p["a"]],f);var m=f,g=m,b=i("2877"),y=i("6544"),O=i.n(y),w=i("40dc"),j=(i("a4d3"),i("4de4"),i("4160"),i("e439"),i("dbb4"),i("b64b"),i("498a"),i("159b"),i("2fa7")),A=i("9d26"),k=i("8336"),$=i("2b0e");function C(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function x(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?C(i,!0).forEach((function(e){Object(j["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):C(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var E=$["a"].extend({name:"v-app-bar-nav-icon",functional:!0,render:function(t,e){var i=e.slots,n=e.listeners,r=e.props,a=e.data,o=Object.assign(a,{staticClass:"v-app-bar__nav-icon ".concat(a.staticClass||"").trim(),props:x({},r,{icon:!0}),on:n}),s=i().default;return t(k["a"],o,s||[t(A["a"],"$menu")])}}),_=i("ce7e"),P=i("132d"),S=i("adda"),T=i("8860"),D=i("56b0"),M=i("da13"),B=i("8270"),L=i("5d23"),V=(i("99af"),i("a9e3"),i("e25e"),i("c7cd"),i("7958"),i("3a66")),N=i("a9ad"),I=i("b848"),R=(i("caad"),i("2532"),i("3c93"),i("7560")),z=i("f2e7"),H=i("58df");function U(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function W(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?U(i,!0).forEach((function(e){Object(j["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):U(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var X=Object(H["a"])(N["a"],R["a"],z["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return W({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}}),q=X,Y=i("80d2"),F=$["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new q({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(Y["t"])(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(Y["a"])(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[Y["w"].up,Y["w"].pageup],i=[Y["w"].down,Y["w"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return["auto","scroll"].includes(e.overflowY)&&t.scrollHeight>t.clientHeight},shouldScroll:function(t,e){return 0===t.scrollTop&&e<0||t.scrollTop+t.clientHeight===t.scrollHeight&&e>0},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=t.path||this.composedPath(t),i=t.deltaY;if("keydown"===t.type&&e[0]===document.body){var n=this.$refs.dialog,r=window.getSelection().anchorNode;return!(n&&this.hasScrollbar(n)&&this.isInside(r,n))||this.shouldScroll(n,i)}for(var a=0;a<e.length;a++){var o=e[a];if(o===document)return!0;if(o===document.documentElement)return!0;if(o===this.$refs.content)return!0;if(this.hasScrollbar(o))return this.shouldScroll(o,i)}return!0},composedPath:function(t){if(t.composedPath)return t.composedPath();var e=[],i=t.target;while(i){if(e.push(i),"HTML"===i.tagName)return e.push(document),e.push(window),e;i=i.parentElement}return e},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(Y["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}}),Z=i("d10f"),J=i("a293"),G=i("dc22"),K=i("c3f0");function Q(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function tt(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?Q(i,!0).forEach((function(e){Object(j["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Q(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var et=Object(H["a"])(Object(V["a"])("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),N["a"],I["a"],F,Z["a"],R["a"]),it=et.extend({name:"v-navigation-drawer",provide:function(){return{isInNav:"nav"===this.tag}},directives:{ClickOutside:J["a"],Resize:G["a"],Touch:K["a"]},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default:function(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:80},mobileBreakPoint:{type:[Number,String],default:1264},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default:function(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:{required:!1}},data:function(){return{isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}},computed:{applicationProperty:function(){return this.right?"right":"left"},classes:function(){return tt({"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary},this.themeClasses)},computedMaxHeight:function(){if(!this.hasApp)return null;var t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop:function(){if(!this.hasApp)return 0;var t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform:function(){return this.isActive?0:this.isBottom?100:this.right?100:-100},computedWidth:function(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp:function(){return this.app&&!this.isMobile&&!this.temporary},isBottom:function(){return this.bottom&&this.isMobile},isMiniVariant:function(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile:function(){return!this.stateless&&!this.permanent&&this.$vuetify.breakpoint.width<parseInt(this.mobileBreakPoint,10)},reactsToClick:function(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile:function(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize:function(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute:function(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay:function(){return this.isActive&&(this.isMobile||this.temporary)},styles:function(){var t=this.isBottom?"translateY":"translateX",e={height:Object(Y["f"])(this.height),top:this.isBottom?"auto":Object(Y["f"])(this.computedTop),maxHeight:null!=this.computedMaxHeight?"calc(100% - ".concat(Object(Y["f"])(this.computedMaxHeight),")"):void 0,transform:"".concat(t,"(").concat(Object(Y["f"])(this.computedTransform,"%"),")"),width:Object(Y["f"])(this.computedWidth)};return e}},watch:{$route:"onRouteChange",isActive:function(t){this.$emit("input",t)},isMobile:function(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent:function(t){t&&(this.isActive=!0)},showOverlay:function(t){t?this.genOverlay():this.removeOverlay()},value:function(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover:function(t){this.updateMiniVariant(!t)}},beforeMount:function(){this.init()},methods:{calculateTouchArea:function(){var t=this.$el.parentNode;if(t){var e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}}},closeConditional:function(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend:function(){return this.genPosition("append")},genBackground:function(){var t={height:"100%",width:"100%",src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(S["a"],{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[e])},genDirectives:function(){var t=this,e=[{name:"click-outside",value:function(){return t.isActive=!1},args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||e.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),e},genListeners:function(){var t=this,e={transitionend:function(e){if(e.target===e.currentTarget){t.$emit("transitionend",e);var i=document.createEvent("UIEvents");i.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(i)}}};return this.miniVariant&&(e.click=function(){return t.$emit("update:mini-variant",!1)}),this.expandOnHover&&(e.mouseenter=function(){return t.isMouseover=!0},e.mouseleave=function(){return t.isMouseover=!1}),e},genPosition:function(t){var e=Object(Y["r"])(this,t);return e?this.$createElement("div",{staticClass:"v-navigation-drawer__".concat(t)},e):e},genPrepend:function(){return this.genPosition("prepend")},genContent:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init:function(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange:function(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft:function(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight:function(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication:function(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;var t=Number(this.computedWidth);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant:function(t){this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render:function(t){var e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||Object(Y["r"])(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}}),nt=i("2fa4"),rt=i("2a7f"),at=Object(b["a"])(g,h,d,!1,null,null,null),ot=at.exports;O()(at,{VAppBar:w["a"],VAppBarNavIcon:E,VBtn:k["a"],VDivider:_["a"],VIcon:P["a"],VImg:S["a"],VList:T["a"],VListGroup:D["a"],VListItem:M["a"],VListItemAvatar:B["a"],VListItemContent:L["a"],VListItemTitle:L["b"],VNavigationDrawer:it,VSpacer:nt["a"],VToolbarTitle:rt["a"]});var st=i("fd2d"),ct=function(t){function e(){return Object(a["a"])(this,e),Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(o["a"])(e,[{key:"beforeRouteEnter",value:function(t,e,i){i((function(t){void 0==t.user&&t.$router.push("/login")}))}}]),e}(p["c"]);u["a"]([Object(v["b"])("user",{namespace:"User"})],ct.prototype,"user",void 0),ct=u["a"]([Object(p["a"])({components:{Footer:st["a"],Toolbar:ot}})],ct);var lt=ct,ut=lt,ht=i("7496"),dt=i("a75b"),pt=Object(b["a"])(ut,n,r,!1,null,null,null);e["default"]=pt.exports;O()(pt,{VApp:ht["a"],VContent:dt["a"]})},dc22:function(t,e,i){"use strict";function n(t,e){var i=e.value,n=e.options||{passive:!0};window.addEventListener("resize",i,n),t._onResize={callback:i,options:n},e.modifiers&&e.modifiers.quiet||i()}function r(t){if(t._onResize){var e=t._onResize,i=e.callback,n=e.options;window.removeEventListener("resize",i,n),delete t._onResize}}var a={inserted:n,unbind:r};e["a"]=a},faaa:function(t,e,i){var n=i("6f8d");t.exports=function(t,e,i,r){try{return r?e(n(i)[0],i[1]):e(i)}catch(o){var a=t["return"];throw void 0!==a&&n(a.call(t)),o}}}}]);
//# sourceMappingURL=chunk-354df1f0.af6f0e4a.js.map