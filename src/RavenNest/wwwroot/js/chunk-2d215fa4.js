(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d215fa4"],{c100:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logout"},[n("h1",[t._v("Bye bye!")])])}],c=(n("96cf"),n("3b8d")),u=n("d225"),o=n("b0b4"),i=n("308d"),s=n("6bb5"),f=n("4e2b"),l=n("9ab4"),h=n("60a3"),b=n("3dfd"),p=function(t){function e(){return Object(u["a"])(this,e),Object(i["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(f["a"])(e,t),Object(o["a"])(e,[{key:"mounted",value:function(){var t=this;fetch("/api/auth/logout",{method:"GET"}).then(function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(n){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.json();case 2:a=e.sent,b["a"].set(a),t.$router.push("/"),window["AppClass"].$forceUpdate();case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()).catch(function(){window.location.href="/"})}}]),e}(h["c"]);p=l["a"]([Object(h["a"])({})],p);var d=p,w=d,v=n("2877"),j=Object(v["a"])(w,a,r,!1,null,null,null);e["default"]=j.exports}}]);
//# sourceMappingURL=chunk-2d215fa4.js.map