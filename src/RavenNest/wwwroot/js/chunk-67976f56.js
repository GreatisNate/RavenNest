(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67976f56"],{"0a49":function(t,e,n){var r=n("9b43"),a=n("626a"),i=n("4bf8"),c=n("9def"),s=n("cd1c");t.exports=function(t,e){var n=1==t,o=2==t,l=3==t,u=4==t,f=6==t,h=5==t||f,d=e||s;return function(e,s,v){for(var p,g,y=i(e),b=a(y),w=r(s,v,3),m=c(b.length),S=0,L=n?d(e,m):o?d(e,0):void 0;m>S;S++)if((h||S in b)&&(p=b[S],g=w(p,S,y),t))if(n)L[S]=g;else if(g)switch(t){case 3:return!0;case 5:return p;case 6:return S;case 2:L.push(p)}else if(u)return!1;return f?-1:l||u?u:L}}},1169:function(t,e,n){var r=n("2d95");t.exports=Array.isArray||function(t){return"Array"==r(t)}},5147:function(t,e,n){var r=n("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(a){}}return!0}},"6a59":function(t,e,n){"use strict";var r=n("a227"),a=n.n(r);a.a},7514:function(t,e,n){"use strict";var r=n("5ca1"),a=n("0a49")(5),i="find",c=!0;i in[]&&Array(1)[i](function(){c=!1}),r(r.P+r.F*c,"Array",{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(i)},"7f7f":function(t,e,n){var r=n("86cc").f,a=Function.prototype,i=/^\s*function ([^ (]*)/,c="name";c in a||n("9e1e")&&r(a,c,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},a227:function(t,e,n){},aae3:function(t,e,n){var r=n("d3f4"),a=n("2d95"),i=n("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==a(t))}},ac6a:function(t,e,n){for(var r=n("cadf"),a=n("0d58"),i=n("2aba"),c=n("7726"),s=n("32e9"),o=n("84f2"),l=n("2b4c"),u=l("iterator"),f=l("toStringTag"),h=o.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=a(d),p=0;p<v.length;p++){var g,y=v[p],b=d[y],w=c[y],m=w&&w.prototype;if(m&&(m[u]||s(m,u,h),m[f]||s(m,f,y),o[y]=h,b))for(g in r)m[g]||i(m,g,r[g],!0)}},b01f:function(t,e,n){"use strict";n.d(e,"a",function(){return o});n("f559"),n("96cf");var r=n("3b8d"),a=n("d225"),i=n("b0b4"),c=window.location.port,s=window.location.href.indexOf("localhost")>=0||null!=c&&c&&parseInt(c)>=500,o=function(){function t(){Object(a["a"])(this,t)}return Object(i["a"])(t,null,[{key:"sendAsync",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){var n,r=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:null,s&&(e="https://localhost:5001/"+(e.startsWith("/")?e.substring(1):e)),t.next=4,fetch(e,n);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()}]),t}()},cd1c:function(t,e,n){var r=n("e853");t.exports=function(t,e){return new(r(t))(e)}},d2c8:function(t,e,n){var r=n("aae3"),a=n("be13");t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(t))}},d4a4:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"highscore"},[n("h1",[t._v("HighScore - Top 100")]),n("div",{staticClass:"skill-selector"},t._l(t.skills,function(e){return n("a",{key:e.name,class:{active:e.active},attrs:{href:e.link}},[t._v(t._s(e.name))])}),0),n("table",{staticClass:"highscore-list"},[t._m(0),n("tbody",t._l(t.players,function(e){return n("tr",{key:e.playerName,class:{isMe:e.isMe}},[n("td",{staticClass:"player-rank"},[t._v(t._s(e.rank))]),n("td",{staticClass:"player-name"},[t._v(t._s(e.playerName))]),n("td",{staticClass:"player-level"},[t._v(t._s(e.level))]),n("td",{staticClass:"player-experience"},[t._v(t._s(e.experience))])])}),0)]),t.dataLoading?n("div",{staticClass:"loader"},[t._m(1)]):t._e()])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Rank")]),n("th",[t._v("Player")]),n("th",[t._v("Level")]),n("th",[t._v("Experience")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lds-ripple"},[n("div"),n("div")])}],i=(n("7f7f"),n("7514"),n("ac6a"),n("96cf"),n("3b8d")),c=n("d225"),s=n("b0b4"),o=n("308d"),l=n("6bb5"),u=n("4e2b"),f=n("9ab4"),h=n("60a3"),d=function(){function t(e,n){Object(c["a"])(this,t),this.name=e,this.active=n}return Object(s["a"])(t,[{key:"link",get:function(){return"#".concat(this.name)}}]),t}(),v=n("b01f"),p=n("3dfd"),g=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(o["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.dataLoading=!0,t.selectedSkill=null,t.players=[],t.skills=[new d("All",!1),new d("Attack",!1),new d("Defense",!1),new d("Strength",!1),new d("Health",!1),new d("Magic",!1),new d("Ranged",!1),new d("Woodcutting",!1),new d("Fishing",!1),new d("Mining",!1),new d("Crafting",!1),new d("Cooking",!1),new d("Farming",!1),new d("Slayer",!1)],t}return Object(u["a"])(e,t),Object(s["a"])(e,[{key:"selectHighScore",value:function(t){t.active=!0}},{key:"loadHighScore",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){var n,r,a,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.dataLoading=!0,n="//www.ravenfall.stream/api/highscore/".concat(e),t.next=4,v["a"].sendAsync(n);case 4:if(r=t.sent,!r.ok){t.next=11;break}return t.next=8,r.json();case 8:this.players=t.sent.players,a=p["a"].get(),this.players.forEach(function(t){null!=a&&a.authenticated?t.isMe=t.playerName==a.userName:t.isMe=!1});case 11:null!=this.selectedSkill&&(this.selectedSkill.active=!1),e=""===e?"all":e,i=this.skills.find(function(t){return t.name.toLowerCase()===e.toLowerCase()}),null!=i&&(i.active=!0,this.selectedSkill=i),this.dataLoading=!1;case 16:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"mounted",value:function(){var t=this,e=function(){var e=window.location.hash;if(e&&e.length>0){var n=e.substring(1);t.loadHighScore("all"===n.toLowerCase()?"":n)}else t.loadHighScore("")};window.onhashchange=function(t){e()},e()}}]),e}(h["c"]);g=f["a"]([Object(h["a"])({})],g);var y=g,b=y,w=(n("6a59"),n("2877")),m=Object(w["a"])(b,r,a,!1,null,"59be9d10",null);e["default"]=m.exports},e853:function(t,e,n){var r=n("d3f4"),a=n("1169"),i=n("2b4c")("species");t.exports=function(t){var e;return a(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!a(e.prototype)||(e=void 0),r(e)&&(e=e[i],null===e&&(e=void 0))),void 0===e?Array:e}},f559:function(t,e,n){"use strict";var r=n("5ca1"),a=n("9def"),i=n("d2c8"),c="startsWith",s=""[c];r(r.P+r.F*n("5147")(c),"String",{startsWith:function(t){var e=i(this,t,c),n=a(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return s?s.call(e,r,n):e.slice(n,n+r.length)===r}})}}]);
//# sourceMappingURL=chunk-67976f56.js.map