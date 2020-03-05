(function(e){function t(t){for(var n,r,o=t[0],c=t[1],l=t[2],u=0,h=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&h.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(h.length)h.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,r=1;r<a.length;r++){var o=a[r];0!==s[o]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},s={app:0},i=[];function o(e){return c.p+"js/"+({}[e]||e)+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={"chunk-095f844f":1,"chunk-17332ec6":1,"chunk-a0510bb6":1,"chunk-1225ff8c":1,"chunk-3d883c33":1,"chunk-71a1158c":1,"chunk-9e5c2da8":1,"chunk-f19b7710":1,"chunk-6644bc04":1,"chunk-a0058c56":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise(function(t,a){for(var n="css/"+({}[e]||e)+".css",s=c.p+n,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===s))return t()}var h=document.getElementsByTagName("style");for(o=0;o<h.length;o++){l=h[o],u=l.getAttribute("data-href");if(u===n||u===s)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[e],d.parentNode.removeChild(d),a(i)},d.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){r[e]=0}));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(function(t,a){n=s[e]=[t,a]});t.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(e);var h=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var a=s[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",h.name="ChunkLoadError",h.type=n,h.request=r,a[1](h)}s[e]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var h=0;h<l.length;h++)t(l[h]);var d=u;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"3dfd":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"nav-bar",class:{open:e.isMenuOpen,dark:e.isDark,scrolled:e.isScrolled}},[a("div",{staticClass:"nav-bar-content"},[a("router-link",{staticClass:"logo",attrs:{to:"/"}},[a("img",{attrs:{src:"/assets/imgs/RavenfallGray.png",width:"200",alt:""}})]),a("div",{staticClass:"links"},[a("router-link",{staticClass:"item",attrs:{to:"/"}},[e._v("Home")]),a("router-link",{staticClass:"item",attrs:{to:"/how-to-play"}},[e._v("How to play")]),a("router-link",{staticClass:"item",attrs:{to:"/highscore"}},[e._v("HighScore")]),a("router-link",{staticClass:"item",attrs:{to:"/docs"}},[e._v("Developer")]),e.authenticated()?a("router-link",{staticClass:"item",attrs:{to:"/character"}},[e._v("My character")]):e._e(),e.authenticated()?a("a",{staticClass:"item",attrs:{href:"/assets",target:"_blank"}},[e._v("Customize")]):e._e(),e.administrator()?a("router-link",{staticClass:"item",attrs:{to:"/admin"}},[e._v("Admin")]):e._e(),a("div",{staticClass:"right"},[e.authenticated()?e._e():a("router-link",{staticClass:"item",attrs:{to:"/login"}},[e._v("Login")]),e.authenticated()?a("router-link",{staticClass:"item",attrs:{to:"/logout"}},[e._v("Logout")]):e._e()],1)],1),e._m(0),a("div",{staticClass:"btn-hamburger-menu",on:{click:function(t){return e.toggleMenu()}}},[a("i",{staticClass:"fas fa-bars"})])],1)]),a("div",{staticClass:"content"},[a("router-view"),a("div",{staticClass:"footer"},[e._v("\n      Copyright © ravenfall.stream 2020, all rights reserved.\n    ")])],1)])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"social"},[a("ul",[a("li",[a("a",{attrs:{href:"https://www.twitch.tv/zerratar",target:"_blank"}},[a("i",{staticClass:"fab fa-twitch"})])]),a("li",[a("a",{attrs:{href:"https://www.twitter.com/zerratar",target:"_blank"}},[a("i",{staticClass:"fab fa-twitter"})])]),a("li",[a("a",{attrs:{href:"https://www.github.com/zerratar",target:"_blank"}},[a("i",{staticClass:"fab fa-github"})])])])])}],s=a("308d"),i=a("6bb5"),o=a("4e2b"),c=a("d225"),l=a("b0b4"),u=a("9ab4"),h=a("60a3"),d=1300,f=function(){function e(t,a,n,r,s,i,o){Object(c["a"])(this,e),this.id=t,this.authenticated=a,this.moderator=n,this.administrator=r,this.userId=s,this.userName=i,this.requiresPasswordChange=o}return Object(l["a"])(e,null,[{key:"get",value:function(){var t=window,a=t["SessionState"];return"undefined"!==typeof a?e.mapSessionState(a):null}},{key:"set",value:function(t){var a=e.mapSessionState(t),n=window;return n["SessionState"]=a,a}},{key:"mapSessionState",value:function(t){return new e(t.id,t.authenticated,t.moderator,t.administrator,t.userId,t.userName,t.requiresPasswordChange)}}]),e}(),p=function(e){function t(){var e;return Object(c["a"])(this,t),e=Object(s["a"])(this,Object(i["a"])(t).apply(this,arguments)),e.isMenuOpen=!1,e.isScrolled=!1,e.isDark=!1,e}return Object(o["a"])(t,e),Object(l["a"])(t,[{key:"mounted",value:function(){var e=this;window["AppClass"]=this,window.addEventListener("resize",function(t){e.isMenuOpen=e.isMenuOpen&&window.innerWidth<d}),window.addEventListener("scroll",function(t){e.isScrolled=window.scrollY>25})}},{key:"onUrlChange",value:function(e){this.isDark="/"!==e.path,this.isScrolled=window.scrollY>25,this.isMenuOpen=!1}},{key:"toggleMenu",value:function(){this.isMenuOpen=!this.isMenuOpen,this.isScrolled=window.scrollY>25,this.isMenuOpen=this.isMenuOpen&&window.innerWidth<d}},{key:"authenticated",value:function(){var e=f.get();return null!=e&&e.authenticated}},{key:"moderator",value:function(){var e=f.get();return null!=e&&e.moderator}},{key:"administrator",value:function(){var e=f.get();return null!=e&&e.administrator}}]),t}(h["c"]);u["a"]([Object(h["d"])("$route",{immediate:!0,deep:!0})],p.prototype,"onUrlChange",null),p=u["a"]([Object(h["a"])({})],p);var v=p,m=v,g=(a("5c0b"),a("2877"));a.d(t,"a",function(){return f});var b=Object(g["a"])(m,n,r,!1,null,null,null);t["b"]=b.exports},"5c0b":function(e,t,a){"use strict";var n=a("e332"),r=a.n(n);r.a},"63ef":function(e,t,a){"use strict";var n=a("d2da"),r=a.n(n);r.a},"86db":function(e,t,a){},9184:function(e,t,a){"use strict";var n=a("86db"),r=a.n(n);r.a},cd49:function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=a("3dfd"),s=a("8c4f"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("div",{staticClass:"section background"},[a("video",{attrs:{src:"https://ravennestblobstorage.blob.core.windows.net/cdn/header.webm?sp=rl&st=2019-10-25T16:25:59Z&se=2031-10-04T11:25:00Z&sv=2019-02-02&sr=b&sig=x1Xwz52QJ8jLmAn1cjYwn5PPkZVCVN5T9ICJRQPwlGA%3D",autoplay:"",muted:"",loop:""},domProps:{muted:!0}})]),e._m(0),e._m(1)])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section hero"},[a("img",{staticClass:"hero-logo",attrs:{src:"assets/imgs/ravenfall_logo.png"}}),a("div",{staticClass:"text"},[e._v("An idle game for streamers, made by streamers!"),a("br"),e._v("Allow your viewers to train, craft,\n      fight together against huge raid bosses or challenge each other in the arena!")]),a("a",{staticClass:"button",attrs:{href:"https://github.com/zerratar/Ravenfall/releases",target:"_blank"}},[a("i",{staticClass:"fab fa-windows"}),e._v(" Download")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section body"},[a("h1",[e._v("\n      Ravenfall is a Twitch integrated idle game, allowing your viewers to control a character in a 3d world.\n    ")]),a("h3",[e._v("        \n      Viewers can craft their own equipment, fight against challenging raid bosses or even duel their rival players.\n    ")]),a("div",{staticClass:"feature-list"},[a("div",{staticClass:"feature"},[a("img",{staticClass:"feature-image",attrs:{src:"assets/imgs/raids.jpg"}}),a("h2",[e._v("\n            Fight raid bosses\n          ")]),a("p",[e._v("\n            Engage in challenging raid boss fights alongside other players to earn great rewards.\n          ")])]),a("div",{staticClass:"feature"},[a("img",{staticClass:"feature-image",attrs:{src:"assets/imgs/captain.jpg"}}),a("h2",[e._v("\n            Sail between islands\n          ")]),a("p",[e._v("\n            Be the captain of a big ferry. Train your sailing skill by embarking the ferry and enjoying the view.\n          ")])]),a("div",{staticClass:"feature"},[a("img",{staticClass:"feature-image",attrs:{src:"assets/imgs/crafting.jpg"}}),a("h2",[e._v("\n            Craft your own equiment\n          ")]),a("p",[e._v("\n            Keep training your crafting skill and eventually you will be able to craft the most amazing equipment in the game.\n          ")])]),a("div",{staticClass:"feature"},[a("img",{staticClass:"feature-image",attrs:{src:"assets/imgs/gathering.jpg"}}),a("h2",[e._v("\n            Gather resources\n          ")]),a("p",[e._v("\n            You can fish, mine, farm or cut down trees. All to gain resources for your crafting needs!\n          ")])]),a("div",{staticClass:"feature"},[a("img",{staticClass:"feature-image",attrs:{src:"assets/imgs/arena.jpg"}}),a("h2",[e._v("\n            Fight in the Arena\n          ")]),a("p",[e._v("\n            You may participate in a free-for-all player combat; The arena. Fight other players and be victorious.\n          ")])]),a("div",{staticClass:"feature"},[a("img",{staticClass:"feature-image",attrs:{src:"assets/imgs/pets.jpg"}}),a("h2",[e._v("\n            Get yourself a pet\n          ")]),a("p",[e._v("\n            The game contains a variety of pets that can be obtained, they will follow your player around and just be ridiculously cute.\n          ")])]),a("div",{staticClass:"feature"},[a("img",{staticClass:"feature-image",attrs:{src:"assets/imgs/raidwar.jpg"}}),a("h2",[e._v("\n            Raid other streamers\n          ")]),a("p",[e._v("\n            When you're done with your stream, don't forget to raid another streamer playing Ravenfall.\n          ")])]),a("div",{staticClass:"feature"},[a("img",{staticClass:"feature-image",attrs:{src:"assets/imgs/marketplace.jpg"}}),a("h2",[e._v("\n            Trade in a global marketplace\n          ")]),a("p",[e._v("\n            Players can buy and sell items in a global marketplace, that any streamer can access.\n          ")])])])])}],c=a("d225"),l=a("308d"),u=a("6bb5"),h=a("4e2b"),d=a("9ab4"),f=a("60a3"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[e._v(e._s(e.msg))]),e._m(0),a("h3",[e._v("Installed CLI Plugins")]),e._m(1),a("h3",[e._v("Essential Links")]),e._m(2),a("h3",[e._v("Ecosystem")]),e._m(3)])},v=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),a("br"),e._v("\n    check out the\n    "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",target:"_blank",rel:"noopener"}},[e._v("typescript")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),a("li",[a("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],m=function(e){function t(){return Object(c["a"])(this,t),Object(l["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(h["a"])(t,e),t}(f["c"]);d["a"]([Object(f["b"])()],m.prototype,"msg",void 0),m=d["a"]([f["a"]],m);var g=m,b=g,_=(a("9184"),a("2877")),k=Object(_["a"])(b,p,v,!1,null,"ca7bf648",null),w=k.exports,y=function(e){function t(){return Object(c["a"])(this,t),Object(l["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(h["a"])(t,e),t}(f["c"]);y=d["a"]([Object(f["a"])({components:{HelloWorld:w}})],y);var C=y,j=C,O=(a("63ef"),Object(_["a"])(j,i,o,!1,null,"01ffd341",null)),P=O.exports;n["a"].use(s["a"]);var S=new s["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:P},{path:"/how-to-play",name:"how-to-play",component:function(){return a.e("chunk-a0058c56").then(a.bind(null,"05cd"))}},{path:"/docs",name:"docs",component:function(){return a.e("chunk-6644bc04").then(a.bind(null,"8bae"))}},{path:"/highscore",name:"highscore",component:function(){return Promise.all([a.e("chunk-3f7bc161"),a.e("chunk-f19b7710")]).then(a.bind(null,"d4a4"))}},{path:"/character",name:"character",component:function(){return Promise.all([a.e("chunk-3f7bc161"),a.e("chunk-ee5ae97a"),a.e("chunk-9e5c2da8")]).then(a.bind(null,"ecbd"))},children:[{path:"/character/skills",name:"skills",component:function(){return Promise.all([a.e("chunk-3f7bc161"),a.e("chunk-ee5ae97a"),a.e("chunk-1225ff8c")]).then(a.bind(null,"4893"))}},{path:"/character/inventory",name:"inventory",component:function(){return Promise.all([a.e("chunk-3f7bc161"),a.e("chunk-ee5ae97a"),a.e("chunk-3d883c33")]).then(a.bind(null,"f139"))}}]},{path:"/admin",name:"admin",component:function(){return Promise.all([a.e("chunk-3f7bc161"),a.e("chunk-095f844f")]).then(a.bind(null,"3530"))},children:[{path:"/admin/items",name:"items",component:function(){return Promise.all([a.e("chunk-3f7bc161"),a.e("chunk-ee5ae97a"),a.e("chunk-71a1158c")]).then(a.bind(null,"517e"))}}]},{path:"/login",name:"login",component:function(){return Promise.all([a.e("chunk-3f7bc161"),a.e("chunk-a0510bb6")]).then(a.bind(null,"a55b"))}},{path:"/logout",name:"logout",component:function(){return Promise.all([a.e("chunk-3f7bc161"),a.e("chunk-2d215fa4")]).then(a.bind(null,"c100"))}},{path:"/password",name:"password",component:function(){return Promise.all([a.e("chunk-3f7bc161"),a.e("chunk-17332ec6")]).then(a.bind(null,"43fe"))}},{path:"/password-recovery",name:"password-recovery",component:function(){return a.e("chunk-2d0a4658").then(a.bind(null,"05eb"))}}]});n["a"].config.productionTip=!1,new n["a"]({router:S,render:function(e){return e(r["b"])}}).$mount("#app")},d2da:function(e,t,a){},e332:function(e,t,a){}});
//# sourceMappingURL=app.js.map