(()=>{"use strict";var e,t,r={804:e=>{e.exports=React}},n={};function o(e){if(n[e])return n[e].exports;var t=n[e]={exports:{}};return r[e](t,t.exports,o),t.exports}o.m=r,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[])),o.u=e=>e+"_ccb909ab.js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="webpack-demo:",o.l=(r,n,c,a)=>{if(e[r])e[r].push(n);else{var i,u;if(void 0!==c)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==t+c){i=s;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+c),i.src=r),e[r]=[n];var p=(t,n)=>{i.onerror=i.onload=null,clearTimeout(b);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),t)return t(n)},b=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),u&&document.head.appendChild(i)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={464:0};o.f.j=(t,r)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var c=new Promise(((r,o)=>{n=e[t]=[r,o]}));r.push(n[2]=c);var a=o.p+o.u(t),i=new Error;o.l(a,(r=>{if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var c=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+c+": "+a+")",i.name="ChunkLoadError",i.type=c,i.request=a,n[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{for(var n,c,[a,i,u]=r,l=0,f=[];l<a.length;l++)c=a[l],o.o(e,c)&&e[c]&&f.push(e[c][0]),e[c]=0;for(n in i)o.o(i,n)&&(o.m[n]=i[n]);for(u&&u(o),t&&t(r);f.length;)f.shift()()},r=self.webpackChunkwebpack_demo=self.webpackChunkwebpack_demo||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{var e=o(804),t=o.n(e);const r=ReactDOM;var n=o.n(r);const c=o.p+"block_0ef52c45.png";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?s(e):t}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(h,e);var r,n,a,d,y=(a=h,d=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(a);if(d){var r=p(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return f(this,e)});function h(){var e;i(this,h);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return b(s(e=y.call.apply(y,[this].concat(r))),"state",{Text:null}),b(s(e),"loadComponent",(function(){o.e(580).then(o.bind(o,580)).then((function(t){e.setState({Text:t.default})}))})),e}return r=h,(n=[{key:"render",value:function(){var e=this.state.Text;return t().createElement("div",{className:"search-text"},"Search text内容",t().createElement("img",{src:c,alt:"",onClick:this.loadComponent}),e?t().createElement(e,null):null)}}])&&u(r.prototype,n),h}(t().Component);n().render(t().createElement(d,null),document.getElementById("root"))})()})();