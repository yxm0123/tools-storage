!function(e,o){if("object"==typeof exports&&"object"==typeof module)module.exports=o();else if("function"==typeof define&&define.amd)define([],o);else{var t=o();for(var r in t)("object"==typeof exports?exports:e)[r]=t[r]}}(self,(function(){return(()=>{"use strict";var e={934:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.sessionStorage=o.localStorage=void 0;var t=function(){function e(e){try{window.localStorage,window.sessionStorage}catch(e){alert("浏览器禁用存储，开启后才能存储")}"local"===e?this.store=window.localStorage:"session"===e&&(this.store=window.sessionStorage)}return e.prototype.set=function(e,o){var t=JSON.stringify(o);return"object"==typeof o?this.store.setItem(encodeURIComponent(e),encodeURIComponent(t)):this.store.setItem(encodeURIComponent(e),encodeURIComponent(o)),this},e.prototype.get=function(e){if(!e)throw new Error("没有找到key。");if("object"==typeof e)throw new Error("key不能是一个对象。");var o=this.store.getItem(encodeURIComponent(e));try{var t=JSON.parse(decodeURIComponent(o));return"object"==typeof t?t:o}catch(e){return{}}},e.prototype.remove=function(e){return this.store.removeItem(encodeURIComponent(e)),this},e.prototype.clear=function(e){this.store.clear()},e}();o.localStorage=new t("local"),o.sessionStorage=new t("session")}},o={};function t(r){var n=o[r];if(void 0!==n)return n.exports;var s=o[r]={exports:{}};return e[r](s,s.exports,t),s.exports}var r={};return(()=>{var e=r;Object.defineProperty(e,"__esModule",{value:!0}),e.sessionStorage=e.localStorage=void 0;var o=t(934);Object.defineProperty(e,"localStorage",{enumerable:!0,get:function(){return o.localStorage}}),Object.defineProperty(e,"sessionStorage",{enumerable:!0,get:function(){return o.sessionStorage}}),o.localStorage.set("test",1),console.log(o.localStorage.get("test"))})(),r})()}));