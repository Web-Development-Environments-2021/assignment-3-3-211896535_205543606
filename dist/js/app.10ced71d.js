(function(e){function t(t){for(var n,a,i=t[0],u=t[1],c=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);m&&m(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(s.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},o={app:0},s=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-09734102":"e6a8ecf1","chunk-6293776e":"46507450"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={"chunk-09734102":1,"chunk-6293776e":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-09734102":"9c29b0c4","chunk-6293776e":"81c5d07e"}[e]+".css",o=u.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],l=c.getAttribute("data-href");if(l===n||l===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var n=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[e],m.parentNode.removeChild(m),r(s)},m.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(m);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[e]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var m=l;s.push(["56d7","chunk-vendors"]),r()})({"14c8":function(e,t,r){"use strict";r("3809")},1970:function(e,t,r){},3809:function(e,t,r){},"51b1":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("4160"),r("159b"),r("d3b7");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[r("b-navbar-brand",{attrs:{to:{name:"main"}}},[e._v("Superliga Vue")]),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{to:{name:"search"}}},[e._v("Search")])],1),e.$root.store.username?r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[e._v(" User ")]},proxy:!0}])},[r("b-dropdown-item",{attrs:{href:"#"}},[e._v("Favorites")]),r("b-dropdown-item",{attrs:{href:"#"}},[e._v("Log Out")])],1)],1):r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item",{attrs:{to:{name:"login"}}},[e._v("Login")]),r("b-nav-item",{attrs:{to:{name:"register"}}},[e._v("Register")])],1)],1)],1),r("router-view")],1)},o=[],s={name:"App",methods:{Logout:function(){var e=this;this.$root.store.logout(),this.$root.toast("Logout","User logged out successfully","success"),this.$router.push("/")["catch"]((function(){e.$forceUpdate()}))}}},i=s,u=(r("5c0b"),r("2877")),c=Object(u["a"])(i,a,o,!1,null,null,null),l=c.exports,d=r("a7fe"),m=r.n(d),f=r("bc3a"),p=r.n(f),v=(r("3ca3"),r("ddb0"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[e._v("Main Page")]),e.$root.store.username?r("FavoriteGames"):r("LoginPage"),r("LeagueInfo")],1)}),h=[],g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"league-preview"},[r("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{"img-alt":"Image",tag:"article"}},[r("b-card-title",[e._v(e._s(e.leagueName))]),r("b-card-text",[e._v(" Season: "+e._s(e.season)+" "),r("br"),e._v(" Stage: "+e._s(e.stage)+" ")]),r("b-button",{attrs:{href:"#",variant:"primary"}},[e._v("Go somewhere")])],1)],1)},b=[],_={data:function(){return{leagueName:"superliga",season:"season",stage:"stage"}}},y=_,w=(r("e280"),Object(u["a"])(y,g,b,!1,null,null,null)),$=w.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._l(e.games,(function(e){return r("GamePreview",{key:e.id,attrs:{id:e.id,hostTeam:e.hostTeam,guestTeam:e.guestTeam,date:e.date,hour:e.hour}})})),1)},x=[],S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"game-preview"},[r("div",{staticClass:"game-title",attrs:{title:e.id}},[r("b",[e._v("Game Id:")]),e._v(" "+e._s(e.id)+" ")]),r("ul",{staticClass:"game-content"},[r("li",[e._v(" host: "+e._s(e.hostTeam))]),r("li",[e._v(" guest: "+e._s(e.guestTeam))]),r("li",[e._v(" date: "+e._s(e.date))]),r("li",[e._v(" time: "+e._s(e.hour))])])])},T=[],E=(r("a9e3"),{name:"GamePreview",props:{id:{type:Number,required:!0},hostTeam:{type:String,required:!0},guestTeam:{type:String,required:!0},date:{type:String,required:!0},hour:{type:String,required:!0}},mounted:function(){console.log("game preview mounted")}}),P=E,C=(r("14c8"),Object(u["a"])(P,S,T,!1,null,null,null)),L=C.exports,O={name:"FavoriteGames",components:{GamePreview:L},data:function(){return{games:[{id:25,hostTeam:"Maccabi Tel-Aviv",guestTeam:"Hapoel Beer-Sheva",date:"27/5/21",hour:"20:00"},{id:39,hostTeam:"Hapoel Tel-Aviv",guestTeam:"Maccabi Haifa",date:"29/5/21",hour:"20:00"}]}}},j=O,q=Object(u["a"])(j,k,x,!1,null,null,null),A=q.exports,G=r("62cc"),U={components:{LeagueInfo:$,LoginPage:G["default"],FavoriteGames:A}},F=U,N=(r("a047"),Object(u["a"])(F,v,h,!1,null,"2cdd0c05",null)),I=N.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",[e._v("Four Oh Four you didn't")]),r("router-link",{attrs:{to:"/",exact:""}},[e._v("ET Go Home")])],1)},H=[],D={},B=Object(u["a"])(D,M,H,!1,null,null,null),R=B.exports,J=[{path:"/",name:"main",component:I},{path:"/register",name:"register",component:function(){return r.e("chunk-6293776e").then(r.bind(null,"eaff"))}},{path:"/login",name:"login",component:function(){return Promise.resolve().then(r.bind(null,"62cc"))}},{path:"/search",name:"search",component:function(){return r.e("chunk-09734102").then(r.bind(null,"37906"))}},{path:"*",name:"notFound",component:R}],K=J,V=r("8c4f"),z=r("1dce"),Q=r.n(z),W=(r("f9e3"),r("2dd8"),r("1073")),X=r("cbd0"),Y=r("b1fc"),Z=r("7049"),ee=r("a7e2"),te=r("f9bc"),re=r("44d4"),ne=r("cca8"),ae=r("51c2"),oe=r("498a"),se=r("9ae9");n["default"].use(V["a"]);var ie=new V["a"]({routes:K});[W["a"],X["a"],Y["a"],Z["a"],ee["a"],te["a"],re["a"],ne["a"],ae["a"],oe["a"],se["a"]].forEach((function(e){return n["default"].use(e)})),n["default"].use(Q.a),p.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),p.a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),n["default"].use(m.a,p.a),n["default"].config.productionTip=!1;var ue={username:"hilla",login:function(e){localStorage.setItem("username",e),this.username=e,console.log("login",this.username)},logout:function(){console.log("logout"),localStorage.removeItem("username"),this.username=void 0}};console.log(ue),new n["default"]({router:ie,data:function(){return{store:ue}},methods:{toast:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:r,solid:!0,appendToast:n,autoHideDelay:3e3})}},render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"62cc":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[e._v("Login")]),r("b-form",{on:{submit:function(t){return t.preventDefault(),e.onLogin.apply(null,arguments)}}},[r("b-form-group",{attrs:{id:"input-group-Username","label-cols-sm":"3",label:"Username:","label-for":"Username"}},[r("b-form-input",{attrs:{id:"Username",type:"text",state:e.validateState("username")},model:{value:e.$v.form.username.$model,callback:function(t){e.$set(e.$v.form.username,"$model",t)},expression:"$v.form.username.$model"}}),r("b-form-invalid-feedback",[e._v(" Username is required ")])],1),r("b-form-group",{attrs:{id:"input-group-Password","label-cols-sm":"3",label:"Password:","label-for":"Password"}},[r("b-form-input",{attrs:{id:"Password",type:"password",state:e.validateState("password")},model:{value:e.$v.form.password.$model,callback:function(t){e.$set(e.$v.form.password,"$model",t)},expression:"$v.form.password.$model"}}),r("b-form-invalid-feedback",[e._v(" Password is required ")])],1),r("b-button",{staticClass:"mx-auto w-100",staticStyle:{width:"100px",display:"block"},attrs:{type:"submit",variant:"primary"}},[e._v("Login")]),r("div",{staticClass:"mt-2"},[e._v(" Do not have an account yet? "),r("router-link",{attrs:{to:"register"}},[e._v(" Register in here")])],1)],1),e.form.submitError?r("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[e._v(" Login failed: "+e._s(e.form.submitError)+" ")]):e._e()],1)},a=[],o=r("1da1"),s=(r("96cf"),r("b5ae")),i={name:"Login",data:function(){return{form:{username:"",password:"",submitError:void 0}}},validations:{form:{username:{required:s["required"]},password:{required:s["required"]}}},methods:{validateState:function(e){var t=this.$v.form[e],r=t.$dirty,n=t.$error;return r?!n:null},Login:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.post("https://localhost:3000/user/Login",{username:e.form.username,password:e.form.password});case 3:t.sent,console.log(e.$root.store.login),e.$root.store.login(e.form.username),e.$router.push("/"),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0.response),e.form.submitError=t.t0.response.data.message;case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))()},onLogin:function(){this.form.submitError=void 0,this.$v.form.$touch(),this.$v.form.$anyError||this.Login()}}},u=i,c=(r("dfaf"),r("2877")),l=Object(c["a"])(u,n,a,!1,null,"0b123c6c",null);t["default"]=l.exports},"9c0c":function(e,t,r){},a047:function(e,t,r){"use strict";r("f217")},dfaf:function(e,t,r){"use strict";r("51b1")},e280:function(e,t,r){"use strict";r("1970")},f217:function(e,t,r){}});
//# sourceMappingURL=app.10ced71d.js.map