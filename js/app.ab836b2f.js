(function(){"use strict";var e={2330:function(e,t,n){var r=n(9963),o=n(6252);const a={id:"app"};function i(e,t,n,r,i,u){const s=(0,o.up)("NavBar"),l=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o.Wm)(s),(0,o.Wm)(l)])}const u={key:0,class:"NavBar"};function s(e,t,n,a,i,s){const l=(0,o.up)("van-icon"),c=(0,o.up)("van-nav-bar");return"/404"!=a.router.currentRoute.value.path?((0,o.wg)(),(0,o.iD)("div",u,[(0,o.Wm)(c,{title:e.title,"right-text":"按钮","left-arrow":e.leftArrow,onClickLeft:a.onClickLeft,onClickRight:a.onClickRight},{right:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(l,{name:"wap-home-o",size:"18"},null,512),[[r.F8,e.rightArrow]])])),_:1},8,["title","left-arrow","onClickLeft","onClickRight"])])):(0,o.kq)("",!0)}var l=n(2262),c=n(2119),d={setup(){const e=(0,l.qj)({leftArrow:!0,rightArrow:!0,title:void 0}),t=(0,c.tv)(),n=c.yj,r=n=>{console.log(t),e.title=t.currentRoute.value.meta.title;let r=t.currentRoute.value.name,o=-1==["home","person"].indexOf(r);e.leftArrow=o,e.rightArrow=o},o=()=>{"login"==t.currentRoute.value.name?t.push({path:"/"}):history.back()},a=()=>t.push({path:"/"});return{...(0,l.BK)(e),router:t,route:n,getPath:r,onClickLeft:o,onClickRight:a}},watch:{$route:"getPath"}},f=n(3744);const m=(0,f.Z)(d,[["render",s]]);var p=m,v={components:{NavBar:p}};const h=(0,f.Z)(v,[["render",i]]);var g=h;function b(e,t,n,r,a,i){const u=(0,o.up)("router-view"),s=(0,o.up)("tabbar");return(0,o.wg)(),(0,o.iD)("div",null,[((0,o.wg)(),(0,o.j4)(u,{key:e.$route.fullPath})),(0,o.Wm)(s)])}const w={class:"NavBar"},y=(0,o.Uk)("首页"),k=(0,o.Uk)("个人中心");function C(e,t,n,r,a,i){const u=(0,o.up)("van-tabbar-item"),s=(0,o.up)("van-tabbar");return(0,o.wg)(),(0,o.iD)("div",w,[(0,o.Wm)(s,{modelValue:r.active,"onUpdate:modelValue":t[0]||(t[0]=e=>r.active=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{name:"home",icon:"home-o",to:"/"},{default:(0,o.w5)((()=>[y])),_:1}),(0,o.Wm)(u,{name:"person",icon:"manager-o",to:"/person"},{default:(0,o.w5)((()=>[k])),_:1})])),_:1},8,["modelValue"])])}var _={setup(){const e=(0,c.tv)(),t=(0,l.iH)(e.currentRoute.value.name);return{active:t}}};const S=(0,f.Z)(_,[["render",C]]);var O=S,j={components:{Tabbar:O},setup(){const e=(0,l.iH)(""),t=(0,l.iH)(""),n=e=>{console.log("submit",e)};return{username:e,password:t,onSubmit:n}}};const A=(0,f.Z)(j,[["render",b]]);var E=A;const N=e=>((0,o.dD)("data-v-e9e08f14"),e=e(),(0,o.Cn)(),e),P={class:"login"},W={class:"login-main"},T=N((()=>(0,o._)("div",{class:"login-top"},[(0,o._)("div",{class:"title"},"hello!欢迎登录")],-1))),F={class:"login-form"},I={style:{margin:"16px"}},U=(0,o.Uk)(" 点击登录 "),x={class:"login-bottom"},D={class:"reg"},L=(0,o.Uk)("还没账号？"),R=(0,o.Uk)("立即注册");function V(e,t,n,r,a,i){const u=(0,o.up)("van-field"),s=(0,o.up)("van-cell-group"),l=(0,o.up)("van-button"),c=(0,o.up)("van-form"),d=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",P,[(0,o._)("div",W,[T,(0,o._)("div",F,[(0,o.Wm)(c,{onSubmit:r.onSubmit},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{inset:""},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{modelValue:r.username,"onUpdate:modelValue":t[0]||(t[0]=e=>r.username=e),name:"用户名",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},null,8,["modelValue"]),(0,o.Wm)(u,{modelValue:r.password,"onUpdate:modelValue":t[1]||(t[1]=e=>r.password=e),type:"password",name:"密码",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},null,8,["modelValue"])])),_:1}),(0,o._)("div",I,[(0,o.Wm)(l,{round:"",block:"",type:"warning","native-type":"submit"},{default:(0,o.w5)((()=>[U])),_:1})])])),_:1},8,["onSubmit"])]),(0,o._)("div",x,[(0,o._)("div",D,[L,(0,o.Wm)(d,{to:"/person"},{default:(0,o.w5)((()=>[R])),_:1})])])])])}n(1703);var Z=n(9669),B=n.n(Z),q=n(4530);const H=B().create({baseURL:"http://45.135.135.228",withCredentials:!1,timeout:12e4});H.interceptors.request.use((e=>(B().defaults.headers.post["Content-Type"]="Content-Type:application/json; charset=UTF-8",sessionStorage.getItem("user_info")&&(e.headers.token=JSON.parse(sessionStorage.getItem("userInfo")).token),q.F.loading({message:"加载中...",forbidClick:!0,overlay:!0,duration:0}),e)),(e=>{Promise.reject(e)})),H.interceptors.response.use((e=>(q.F.clear(),200!=e.data.code?(201==e.data.code&&q.F.fail({message:e.data.msg,forbidClick:!0}),Promise.reject(new Error(e.data.msg||"Error"))):e.data.data)),(e=>{q.F.fail({message:"请求异常",forbidClick:!0}),console.error(e)}));var z=H;function M({url:e="",method:t="get",data:n={},params:r={}}){return z({url:e,method:t,data:n,params:r})}const J=async e=>{let t=await M({url:"/user/login",data:e,method:"post"});return t};var K={setup(){const e=(0,l.iH)(""),t=(0,l.iH)(""),n=(0,c.tv)(),r=()=>{let r={username:e.value,password:t.value};J(r).then((e=>{sessionStorage.setItem("userInfo",JSON.stringify({username:e.username,token:e.token})),q.F.success("登录成功"),n.replace({path:"/"})}))};return{username:e,password:t,onSubmit:r}}};const $=(0,f.Z)(K,[["render",V],["__scopeId","data-v-e9e08f14"]]);var G=$,Q=n(3577);const X={class:"home"};function Y(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)("div",X,[(0,o._)("div",null,"欢迎用户:"+(0,Q.zw)(r.username),1)])}var ee={setup(){const e=sessionStorage.getItem("userInfo")?JSON.parse(sessionStorage.getItem("userInfo")).username:null;return{username:e}}};const te=(0,f.Z)(ee,[["render",Y]]);var ne=te;function re(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)("div",null," 个人中心 ")}var oe={setup(){(0,c.tv)();return{}}};const ae=(0,f.Z)(oe,[["render",re]]);var ie=ae,ue=[{path:"/404",component:()=>n.e(535).then(n.bind(n,7535))},{path:"/:pathMatch(.*)",redirect:"/404"},{path:"/login",name:"login",component:G,meta:{title:"登录"}},{path:"/",name:"index",component:E,children:[{path:"/",name:"home",component:ne,meta:{title:"主页"}},{path:"/person",name:"person",component:ie,meta:{title:"个人中心"}}]}],se=ue;const le=new c.p7({history:(0,c.PO)(),routes:se});le.beforeEach(((e,t,n)=>{localStorage.getItem("userinfo")||"login"==e.name||"home"==e.name||"/404"==e.path?n():((0,q.F)("请先登录!"),n("/login"))}));var ce=n(775),de=(n(5110),n(1864));n(4415),n(1335);const fe=(0,r.ri)(g);fe.use(le),fe.use(ce.ZP),fe.use(de.Z),fe.mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],a=e[c][2];for(var u=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(u=!1,a<i&&(i=a));if(u){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".9f7a9c72.js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".f7c2f5f1.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="silenceCzl:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,s;if(void 0!==a)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){u=d;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=r),e[r]=[o];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),u=a&&a.target&&a.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=u,o.parentNode.removeChild(o),r(s)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),u=n.p+i;if(t(i,u))return o();e(r,u,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={535:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),u=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],u=r[1],s=r[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var c=s(n)}for(t&&t(r);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self["webpackChunksilenceCzl"]=self["webpackChunksilenceCzl"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2330)}));r=n.O(r)})();
//# sourceMappingURL=app.ab836b2f.js.map