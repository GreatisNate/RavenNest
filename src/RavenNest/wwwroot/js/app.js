(function(t){function e(e){for(var r,a,o=e[0],c=e[1],u=e[2],l=0,h=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&h.push(s[a][0]),s[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var o=n[a];0!==s[o]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},s={app:0},i=[];function o(t){return c.p+"js/"+({}[t]||t)+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-2406ba04":1,"chunk-27cbf0b4":1,"chunk-3297961c":1,"chunk-0c11a7fa":1,"chunk-24151308":1,"chunk-1225ff8c":1,"chunk-652c3ebc":1,"chunk-c01ea564":1,"chunk-45bc618d":1,"chunk-459293d4":1,"chunk-5fa3c034":1,"chunk-68a150cb":1,"chunk-83ff1cfa":1,"chunk-ee9fb472":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+".css",s=c.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===s))return e()}var h=document.getElementsByTagName("style");for(o=0;o<h.length;o++){u=h[o],l=u.getAttribute("data-href");if(l===r||l===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],f.parentNode.removeChild(f),n(i)},f.href=s;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[t]=0})));var r=s[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=s[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t);var h=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=s[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",h.name="ChunkLoadError",h.type=r,h.request=a,n[1](h)}s[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var h=0;h<u.length;h++)e(u[h]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"3dfd":function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"nav-bar",class:{open:t.isMenuOpen,dark:t.isDark,scrolled:t.isScrolled}},[n("div",{staticClass:"nav-bar-content"},[n("router-link",{staticClass:"logo",attrs:{to:"/"}},[n("img",{attrs:{src:"/assets/imgs/RavenfallGray.png",width:"200",alt:""}})]),n("div",{staticClass:"links"},[n("router-link",{staticClass:"item",attrs:{to:"/"}},[t._v("Home")]),n("router-link",{staticClass:"item",attrs:{to:"/download"}},[t._v("GET NOW")]),n("a",{staticClass:"item",attrs:{href:"https://wiki.ravenfall.stream/index.php/How_To_Play",target:"_blank"}},[t._v("How to play")]),n("router-link",{staticClass:"item",attrs:{to:"/highscore"}},[t._v("Hiscore")]),n("router-link",{staticClass:"item",attrs:{to:"/docs"}},[t._v("API")]),t.authenticated()?n("router-link",{staticClass:"item",attrs:{to:"/character"}},[t._v("Stats")]):t._e(),t.authenticated()?n("a",{staticClass:"item",attrs:{href:"/assets",target:"_blank"}},[t._v("Customize")]):t._e(),t.administrator()?n("router-link",{staticClass:"item",attrs:{to:"/admin"}},[t._v("Admin")]):t._e(),n("div",{staticClass:"right"},[t.authenticated()?t._e():n("router-link",{staticClass:"item",attrs:{to:"/login"}},[t._v("Login")]),t.authenticated()?n("router-link",{staticClass:"item",attrs:{to:"/logout"}},[t._v("Logout")]):t._e()],1)],1),t._m(0),n("div",{staticClass:"btn-hamburger-menu",on:{click:function(e){return t.toggleMenu()}}},[n("i",{staticClass:"fas fa-bars"})])],1)]),n("div",{staticClass:"content"},[n("router-view"),n("div",{staticClass:"footer"},[t._v("\n      Copyright © ravenfall.stream 2020, all rights reserved.\n    ")])],1)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"social"},[n("ul",[n("li",[n("a",{attrs:{href:"https://www.twitch.tv/zerratar",target:"_blank"}},[n("i",{staticClass:"fab fa-twitch"})])]),n("li",[n("a",{attrs:{href:"https://www.twitter.com/zerratar",target:"_blank"}},[n("i",{staticClass:"fab fa-twitter"})])]),n("li",[n("a",{attrs:{href:"https://www.github.com/zerratar",target:"_blank"}},[n("i",{staticClass:"fab fa-github"})])])])])}],s=(n("6b54"),n("2397"),n("262e")),i=n("99de"),o=n("7e84"),c=n("d4ec"),u=n("bee2"),l=n("9ab4"),h=n("60a3");function f(t){var e=d();return function(){var n,r=Object(o["a"])(t);if(e){var a=Object(o["a"])(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(i["a"])(this,n)}}function d(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var p=1300,v=function(){function t(e,n,r,a,s,i,o){Object(c["a"])(this,t),this.id=e,this.authenticated=n,this.moderator=r,this.administrator=a,this.userId=s,this.userName=i,this.requiresPasswordChange=o}return Object(u["a"])(t,null,[{key:"get",value:function(){var e=window,n=e["SessionState"];return"undefined"!==typeof n?t.mapSessionState(n):null}},{key:"set",value:function(e){var n=t.mapSessionState(e),r=window;return r["SessionState"]=n,n}},{key:"mapSessionState",value:function(e){return new t(e.id,e.authenticated,e.moderator,e.administrator,e.userId,e.userName,e.requiresPasswordChange)}}]),t}(),m=function(t){Object(s["a"])(n,t);var e=f(n);function n(){var t;return Object(c["a"])(this,n),t=e.apply(this,arguments),t.isMenuOpen=!1,t.isScrolled=!1,t.isDark=!1,t}return Object(u["a"])(n,[{key:"mounted",value:function(){var t=this;window["AppClass"]=this,window.addEventListener("resize",(function(e){t.isMenuOpen=t.isMenuOpen&&window.innerWidth<p})),window.addEventListener("scroll",(function(e){t.isScrolled=window.scrollY>25}))}},{key:"onUrlChange",value:function(t){this.isDark="/"!==t.path,this.isScrolled=window.scrollY>25,this.isMenuOpen=!1}},{key:"toggleMenu",value:function(){this.isMenuOpen=!this.isMenuOpen,this.isScrolled=window.scrollY>25,this.isMenuOpen=this.isMenuOpen&&window.innerWidth<p}},{key:"authenticated",value:function(){var t=v.get();return null!=t&&t.authenticated}},{key:"moderator",value:function(){var t=v.get();return null!=t&&t.moderator}},{key:"administrator",value:function(){var t=v.get();return null!=t&&t.administrator}}]),n}(h["c"]);Object(l["a"])([Object(h["d"])("$route",{immediate:!0,deep:!0})],m.prototype,"onUrlChange",null),m=Object(l["a"])([Object(h["a"])({})],m);var g=m,b=g,_=(n("5c0b"),n("2877")),y=Object(_["a"])(b,r,a,!1,null,null,null);e["b"]=y.exports},"5c0b":function(t,e,n){"use strict";var r=n("e332"),a=n.n(r);a.a},6662:function(t,e,n){"use strict";var r=n("e41d"),a=n.n(r);a.a},aea4:function(t,e,n){"use strict";var r=n("c0bb"),a=n.n(r);a.a},c0bb:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("3dfd"),s=n("8c4f"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"section background"},[n("video",{attrs:{src:"https://ravennestblobstorage.blob.core.windows.net/cdn/header.webm?sp=rl&st=2019-10-25T16:25:59Z&se=2031-10-04T11:25:00Z&sv=2019-02-02&sr=b&sig=x1Xwz52QJ8jLmAn1cjYwn5PPkZVCVN5T9ICJRQPwlGA%3D",autoplay:"",muted:"",loop:""},domProps:{muted:!0}})]),t._m(0),t._m(1)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section hero"},[n("img",{staticClass:"hero-logo",attrs:{src:"assets/imgs/ravenfall_logo.png"}}),n("div",{staticClass:"text"},[t._v("An idle game for streamers, made by streamers!"),n("br"),t._v("Allow your viewers to train, craft,\n      fight together against huge raid bosses or challenge each other in the arena!")]),n("a",{staticClass:"button",attrs:{href:"/download"}},[n("i",{staticClass:"fab fa-windows"}),t._v(" Download")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section body"},[n("h1",[t._v("\n      Ravenfall is a Twitch integrated idle game, allowing your viewers to control a character in a 3d world.\n    ")]),n("h3",[t._v("        \n      Viewers can craft their own equipment, fight against challenging raid bosses or even duel their rival players.\n    ")]),n("div",{staticClass:"section-group"},[n("h1",[t._v("Watch the trailer")]),n("div",{staticClass:"embed-container-outer"},[n("div",{staticClass:"embed-container"},[n("iframe",{attrs:{src:"https://www.youtube.com/embed/lTMs19hsvNc",frameborder:"0",allowfullscreen:""}})])])]),n("div",{staticClass:"section-group"},[n("h1",[t._v("Game features")]),n("div",{staticClass:"feature-list"},[n("div",{staticClass:"feature"},[n("img",{staticClass:"feature-image",attrs:{src:"assets/imgs/raids.jpg"}}),n("h2",[t._v("\n            Fight raid bosses\n          ")]),n("p",[t._v("\n            Engage in challenging raid boss fights alongside other players to earn great rewards.\n          ")])]),n("div",{staticClass:"feature"},[n("img",{staticClass:"feature-image",attrs:{src:"assets/imgs/captain.jpg"}}),n("h2",[t._v("\n            Sail between islands\n          ")]),n("p",[t._v("\n            Be the captain of a big ferry. Train your sailing skill by embarking the ferry and enjoying the view.\n          ")])]),n("div",{staticClass:"feature"},[n("img",{staticClass:"feature-image",attrs:{src:"assets/imgs/crafting.jpg"}}),n("h2",[t._v("\n            Craft your own equiment\n          ")]),n("p",[t._v("\n            Keep training your crafting skill and eventually you will be able to craft the most amazing equipment in the game.\n          ")])]),n("div",{staticClass:"feature"},[n("img",{staticClass:"feature-image",attrs:{src:"assets/imgs/gathering.jpg"}}),n("h2",[t._v("\n            Gather resources\n          ")]),n("p",[t._v("\n            You can fish, mine, farm or cut down trees. All to gain resources for your crafting needs!\n          ")])]),n("div",{staticClass:"feature"},[n("img",{staticClass:"feature-image",attrs:{src:"assets/imgs/arena.jpg"}}),n("h2",[t._v("\n            Fight in the Arena\n          ")]),n("p",[t._v("\n            You may participate in a free-for-all player combat; The arena. Fight other players and be victorious.\n          ")])]),n("div",{staticClass:"feature"},[n("img",{staticClass:"feature-image",attrs:{src:"assets/imgs/pets.jpg"}}),n("h2",[t._v("\n            Get yourself a pet\n          ")]),n("p",[t._v("\n            The game contains a variety of pets that can be obtained, they will follow your player around and just be ridiculously cute.\n          ")])]),n("div",{staticClass:"feature"},[n("img",{staticClass:"feature-image",attrs:{src:"assets/imgs/raidwar.jpg"}}),n("h2",[t._v("\n            Raid other streamers\n          ")]),n("p",[t._v("\n            When you're done with your stream, don't forget to raid another streamer playing Ravenfall.\n          ")])]),n("div",{staticClass:"feature"},[n("img",{staticClass:"feature-image",attrs:{src:"assets/imgs/marketplace.jpg"}}),n("h2",[t._v("\n            Trade in a global marketplace\n          ")]),n("p",[t._v("\n            Players can buy and sell items in a global marketplace, that any streamer can access.\n          ")])])])])])}],c=(n("6b54"),n("2397"),n("d4ec")),u=n("262e"),l=n("99de"),h=n("7e84"),f=n("9ab4"),d=n("60a3"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._m(0),n("h3",[t._v("Installed CLI Plugins")]),t._m(1),n("h3",[t._v("Essential Links")]),t._m(2),n("h3",[t._v("Ecosystem")]),t._m(3)])},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n    For a guide and recipes on how to configure / customize this project,"),n("br"),t._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",target:"_blank",rel:"noopener"}},[t._v("typescript")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}];function m(t){var e=g();return function(){var n,r=Object(h["a"])(t);if(e){var a=Object(h["a"])(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(l["a"])(this,n)}}function g(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var b=function(t){Object(u["a"])(n,t);var e=m(n);function n(){return Object(c["a"])(this,n),e.apply(this,arguments)}return n}(d["c"]);Object(f["a"])([Object(d["b"])()],b.prototype,"msg",void 0),b=Object(f["a"])([d["a"]],b);var _=b,y=_,k=(n("aea4"),n("2877")),w=Object(k["a"])(y,p,v,!1,null,"a38c91a8",null),C=w.exports;function j(t){var e=O();return function(){var n,r=Object(h["a"])(t);if(e){var a=Object(h["a"])(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(l["a"])(this,n)}}function O(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var P=function(t){Object(u["a"])(n,t);var e=j(n);function n(){return Object(c["a"])(this,n),e.apply(this,arguments)}return n}(d["c"]);P=Object(f["a"])([Object(d["a"])({components:{HelloWorld:C}})],P);var S=P,E=S,R=(n("6662"),Object(k["a"])(E,i,o,!1,null,"6c5ece56",null)),T=R.exports;r["a"].use(s["a"]);var x=new s["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:T},{path:"/download",name:"download",component:function(){return n.e("chunk-83ff1cfa").then(n.bind(null,"3971"))}},{path:"/how-to-play",name:"how-to-play",component:function(){return n.e("chunk-27cbf0b4").then(n.bind(null,"05cd"))}},{path:"/docs",name:"docs",component:function(){return n.e("chunk-459293d4").then(n.bind(null,"8bae"))}},{path:"/highscore",name:"highscore",component:function(){return Promise.all([n.e("chunk-3e1dfb58"),n.e("chunk-24151308")]).then(n.bind(null,"d4a4"))}},{path:"/character",name:"character",component:function(){return Promise.all([n.e("chunk-3e1dfb58"),n.e("chunk-d8f6b5d2"),n.e("chunk-652c3ebc")]).then(n.bind(null,"ecbd"))},children:[{path:"/character/skills",name:"skills",component:function(){return Promise.all([n.e("chunk-3e1dfb58"),n.e("chunk-d8f6b5d2"),n.e("chunk-1225ff8c")]).then(n.bind(null,"4893"))}},{path:"/character/inventory",name:"inventory",component:function(){return Promise.all([n.e("chunk-3e1dfb58"),n.e("chunk-d8f6b5d2"),n.e("chunk-c01ea564")]).then(n.bind(null,"f139"))}}]},{path:"/admin",name:"admin",component:function(){return n.e("chunk-2406ba04").then(n.bind(null,"3530"))},children:[{path:"/admin/server",name:"server",component:function(){return n.e("chunk-3297961c").then(n.bind(null,"54e3"))}},{path:"/admin/sessions",name:"sessions",component:function(){return Promise.all([n.e("chunk-3e1dfb58"),n.e("chunk-0c11a7fa")]).then(n.bind(null,"7674"))}},{path:"/admin/players",name:"players",component:function(){return Promise.all([n.e("chunk-3e1dfb58"),n.e("chunk-d8f6b5d2"),n.e("chunk-c01ea564"),n.e("chunk-45bc618d")]).then(n.bind(null,"7742"))}},{path:"/admin/items",name:"items",component:function(){return n.e("chunk-ee9fb472").then(n.bind(null,"517e"))}}]},{path:"/login",name:"login",component:function(){return n.e("chunk-68a150cb").then(n.bind(null,"a55b"))}},{path:"/logout",name:"logout",component:function(){return n.e("chunk-69e44107").then(n.bind(null,"c100"))}},{path:"/password",name:"password",component:function(){return n.e("chunk-5fa3c034").then(n.bind(null,"43fe"))}},{path:"/password-recovery",name:"password-recovery",component:function(){return n.e("chunk-2d0a4658").then(n.bind(null,"05eb"))}}]});r["a"].config.productionTip=!1,new r["a"]({router:x,render:function(t){return t(a["b"])}}).$mount("#app")},e332:function(t,e,n){},e41d:function(t,e,n){}});
//# sourceMappingURL=app.js.map