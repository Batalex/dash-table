window.dash_table=function(e){function t(t){for(var n,a,o=t[0],i=t[1],u=0,c=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&c.push(r[a][0]),r[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(d&&d(t);c.length;)c.shift()()}var n={},r={3:0};function a(e){return o.p+""+({0:"async-table",1:"async-export",2:"async-highlight"}[e]||e)+".js"}function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(function(t,a){n=r[e]=[t,a]});t.push(n[2]=i);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=a(e);var s=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,n[1](s)}r[e]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:c})},12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var i,u=function(){var e=document.currentScript;if(!e){for(var t=document.getElementsByTagName("script"),n=[],r=0;r<t.length;r++)n.push(t[r]);e=(n=n.filter(function(e){return!e.async&&!e.text&&!e.textContent})).slice(-1)[0]}return e};if(Object.defineProperty(o,"p",{get:(i=u().src.split("/").slice(0,-1).join("/")+"/",function(){return i})}),void 0!==a){var c=a;a=function(e){var t=function(e){return/\/_dash-component-suites\//.test(e.src)}(u()),n=c(e);if(!t)return n;var r=n.split("/"),a=r.slice(-1)[0].split(".");return a.splice(1,0,"v4_9_0m1595873205"),r.splice(-1,1,a.join(".")),r.join("/")}}var s=window.webpackJsonpdash_table=window.webpackJsonpdash_table||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;return o(o.s=172)}({0:function(e,t){e.exports=window.PropTypes},100:function(e,t,n){"use strict";var r=n(104),a=n(130),o=n(6),i=n(3);function u(e){return e!==i.j.Native}function c(e){var t=e.filter_action,n=e.sort_action,r=e.page_action;return r!==i.j.Custom||u(t)&&u(n)}t.a=function(e){return c(e)?!!function(e){var t=e.columns;return r.a(t)||!a.a(function(e){return e.format&&(e.format.symbol&&2!==e.format.symbol.length||e.format.grouping&&0===e.format.grouping.length||e.format.numerals&&10!==e.format.numerals.length)})(t)}(e)||(o.c.error("Invalid column format"),!1):(o.c.error("Invalid combination of filter_action / sort_action / page_action"),!1)}},101:function(e,t){e.exports=window.ReactDOM},102:function(e,t,n){"use strict";n.d(t,"a",function(){return j});var r=n(71),a=n(354),o=n(171),i=n(104),u=n(174),c=n(175),s=n(21),l=n(3),f=n(67);function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var b={symbol:["$",""],decimal:".",group:",",grouping:[3],percent:"%",separate_4digits:!0},y=[],O=function(e){return+e||0},m=function(e,t,n){return e.headers?Object(f.a)(t)+(n!==l.j.None?1:0)+O(e.data):0},v=function(e,t,n,o){return r.a(function(n){var r,i,u=a.a(n);return u.editable=(r=o,void 0===(i=n.editable)?r:i),u.sort_as_null=u.sort_as_null||t,u.type===l.c.Numeric&&u.format&&(u.format.locale=w(e,u.format.locale),u.format.nully=T(u.format.nully),u.format.specifier=x(u.format.specifier)),u},n)},_=function(e){return w(e)},g=function(e){var t,n;return"object"===p(e)?{type:null!==(t=e.type)&&void 0!==t?t:l.j.None,operator:null!==(n=e.operator)&&void 0!==n?n:l.g.And}:{type:e,operator:l.g.And}},h=function(e,t){return o.a(function(e){return!t||t.indexOf(e.id)<0},e)},j=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.applyDefaultToLocale=Object(s.a)(_),this.applyDefaultsToColumns=Object(s.a)(v),this.getFilterAction=Object(s.a)(g),this.getVisibleColumns=Object(s.a)(h)}var t,n,r;return t=e,(n=[{key:"sanitize",value:function(e){var t,n=this.applyDefaultToLocale(e.locale_format),r=e.columns?this.applyDefaultsToColumns(n,e.sort_as_null,e.columns,e.editable):[],a=null!==(t=e.data)&&void 0!==t?t:[],o=this.getVisibleColumns(r,e.hidden_columns),c=e.export_headers;e.export_format===l.e.Xlsx&&i.a(c)?c=l.f.Names:e.export_format===l.e.Csv&&i.a(c)&&(c=l.f.Ids);var s,f,d,p,b=e.cell_selectable?e.active_cell:void 0,v=e.cell_selectable?e.selected_cells:y;return u.a(e,{active_cell:b,columns:r,data:a,export_headers:c,filter_action:this.getFilterAction(e.filter_action),fixed_columns:(f=e.fixed_columns,d=e.row_deletable,p=e.row_selectable,f.headers?(d?1:0)+(p?1:0)+O(f.data):0),fixed_rows:m(e.fixed_rows,r,e.filter_action),loading_state:(s=e.loading_state,!(!s||!s.is_loading||"data"!==s.prop_name&&""!==s.prop_name&&void 0!==s.prop_name)),locale_format:n,selected_cells:v,visibleColumns:o})}}])&&d(t.prototype,n),r&&d(t,r),e}(),w=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return c.a([b].concat(t))},x=function(e){return void 0===e?"":e},T=function(e){return void 0===e?"":e}},103:function(e,t,n){(function(t){var n;n=void 0!==t?t:this,e.exports=function(e){if(e.CSS&&e.CSS.escape)return e.CSS.escape;var t=function(e){if(0==arguments.length)throw new TypeError("`CSS.escape` requires an argument.");for(var t,n=String(e),r=n.length,a=-1,o="",i=n.charCodeAt(0);++a<r;)0!=(t=n.charCodeAt(a))?o+=t>=1&&t<=31||127==t||0==a&&t>=48&&t<=57||1==a&&t>=48&&t<=57&&45==i?"\\"+t.toString(16)+" ":0==a&&1==r&&45==t||!(t>=128||45==t||95==t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122)?"\\"+n.charAt(a):n.charAt(a):o+="�";return o};return e.CSS||(e.CSS={}),e.CSS.escape=t,t}(n)}).call(this,n(98))},104:function(e,t,n){"use strict";var r=n(5),a=Object(r.a)(function(e){return null==e});t.a=a},12:function(e,t){e.exports=window.React},130:function(e,t,n){"use strict";var r=n(2),a=n(25),o=n(68),i=n(17),u=function(){function e(e,t){this.xf=t,this.f=e,this.any=!1}return e.prototype["@@transducer/init"]=i.a.init,e.prototype["@@transducer/result"]=function(e){return this.any||(e=this.xf["@@transducer/step"](e,!1)),this.xf["@@transducer/result"](e)},e.prototype["@@transducer/step"]=function(e,t){return this.f(t)&&(this.any=!0,e=Object(o.a)(this.xf["@@transducer/step"](e,!0))),e},e}(),c=Object(r.a)(function(e,t){return new u(e,t)}),s=Object(r.a)(Object(a.a)(["any"],c,function(e,t){for(var n=0;n<t.length;){if(e(t[n]))return!0;n+=1}return!1}));t.a=s},167:function(e,t,n){"use strict";var r=n(40),a=Object(r.a)(function(e,t,n){var r={};for(var a in n)r[a]=n[a];return r[e]=t,r});t.a=a},17:function(e,t,n){"use strict";t.a={init:function(){return this.xf["@@transducer/init"]()},result:function(e){return this.xf["@@transducer/result"](e)}}},171:function(e,t,n){"use strict";var r=n(2),a=n(25),o=n(82);var i=n(44),u=n(17),c=function(){function e(e,t){this.xf=t,this.f=e}return e.prototype["@@transducer/init"]=u.a.init,e.prototype["@@transducer/result"]=u.a.result,e.prototype["@@transducer/step"]=function(e,t){return this.f(t)?this.xf["@@transducer/step"](e,t):e},e}(),s=Object(r.a)(function(e,t){return new c(e,t)}),l=n(29),f=Object(r.a)(Object(a.a)(["filter"],s,function(e,t){return n=t,"[object Object]"===Object.prototype.toString.call(n)?Object(i.a)(function(n,r){return e(t[r])&&(n[r]=t[r]),n},{},Object(l.a)(t)):Object(o.a)(e,t);var n}));t.a=f},172:function(e,t,n){e.exports=n(84)},173:function(e,t,n){"use strict";var r=n(19),a=n(5),o=Object(a.a)(function(e){var t,n=!1;return Object(r.a)(e.length,function(){return n?t:(n=!0,t=e.apply(this,arguments))})});t.a=o},174:function(e,t,n){"use strict";var r=n(47),a=n(2),o=Object(a.a)(function(e,t){return Object(r.a)({},e,t)});t.a=o},175:function(e,t,n){"use strict";var r=n(47),a=n(5),o=Object(a.a)(function(e){return r.a.apply(null,[{}].concat(e))});t.a=o},18:function(e,t,n){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(t,e)}n.d(t,"a",function(){return r})},19:function(e,t,n){"use strict";function r(e,t){switch(e){case 0:return function(){return t.apply(this,arguments)};case 1:return function(e){return t.apply(this,arguments)};case 2:return function(e,n){return t.apply(this,arguments)};case 3:return function(e,n,r){return t.apply(this,arguments)};case 4:return function(e,n,r,a){return t.apply(this,arguments)};case 5:return function(e,n,r,a,o){return t.apply(this,arguments)};case 6:return function(e,n,r,a,o,i){return t.apply(this,arguments)};case 7:return function(e,n,r,a,o,i,u){return t.apply(this,arguments)};case 8:return function(e,n,r,a,o,i,u,c){return t.apply(this,arguments)};case 9:return function(e,n,r,a,o,i,u,c,s){return t.apply(this,arguments)};case 10:return function(e,n,r,a,o,i,u,c,s,l){return t.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}n.d(t,"a",function(){return r})},2:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(5),a=n(4);function o(e){return function t(n,o){switch(arguments.length){case 0:return t;case 1:return Object(a.a)(n)?t:Object(r.a)(function(t){return e(n,t)});default:return Object(a.a)(n)&&Object(a.a)(o)?t:Object(a.a)(n)?Object(r.a)(function(t){return e(t,o)}):Object(a.a)(o)?Object(r.a)(function(t){return e(n,t)}):e(n,o)}}}},21:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return i});var r=n(46);function a(e){var t,n=null;return function(){for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return Object(r.b)(n,o)?t:(n=o)&&(t=e.apply(void 0,o))}}function o(e){return function(){return a(e)}}function i(e){var t,n=null,a=!0;return function(){for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];var c=Object(r.b)(n,i)?{cached:!0,first:a,result:t}:{cached:!1,first:a,result:(n=i)&&(t=e.apply(void 0,i))};return a=!1,c}}},24:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(173);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"delete",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/";if(e.enabled()){var a=new Date(Date.now()-864e5).toUTCString();document.cookie="".concat(t,"=;expires=").concat(a,";domain=").concat(n,";path=").concat(r)}}},{key:"get",value:function(t){if(t.length&&e.enabled())return t=t.toLowerCase(),(document.cookie.split(";").map(function(e){var t=e.split("=");return{id:t[0].trim(),value:t[1]}}).find(function(e){return t===e.id.toLocaleLowerCase()})||{}).value}},{key:"set",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"/";if(e.enabled()){var o=new Date(Date.now()+63072e7).toUTCString(),i="".concat(t,"=").concat(n,";expires=").concat(o,";domain=").concat(r,";path=").concat(a);e.get(t)&&e.delete(t,r,a),document.cookie=i}}}],(n=null)&&a(t.prototype,n),r&&a(t,r),e}();o.enabled=r.a(function(){try{document.cookie="cookietest=1";var e=-1!==document.cookie.indexOf("cookietest=");return document.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(e){return!1}});var i,u,c=n(6);function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"searchParams",get:function(){return"undefined"!=typeof URL&&URL.prototype&&URL.prototype.constructor&&new URL(window.location.href).searchParams||{get:function(){return null}}}},{key:"debugLevel",get:function(){var e=this.searchParams.get("dash_debug")||o.get("dash_debug");return e&&c.a[e]||c.a.NONE}},{key:"logLevel",get:function(){var e=this.searchParams.get("dash_log")||o.get("dash_log");return e&&c.b[e]||c.b.ERROR}},{key:"defaultEdge",get:function(){return"1px solid #d3d3d3"}},{key:"activeEdge",get:function(){return e._activeEdge}},{key:"supportsCssVariables",get:function(){return e._supportsCssVariables}}],(n=null)&&s(t.prototype,n),r&&s(t,r),e}();l._supportsCssVariables=Boolean(null===(i=window.CSS)||void 0===i?void 0:null===(u=i.supports)||void 0===u?void 0:u.call(i,".some-selector","var(--some-var)")),l._activeEdge=l._supportsCssVariables?"1px solid var(--accent)":"1px solid hotpink"},25:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(31);function a(e){return null!=e&&"function"==typeof e["@@transducer/step"]}function o(e,t,n){return function(){if(0===arguments.length)return n();var o=Array.prototype.slice.call(arguments,0),i=o.pop();if(!Object(r.a)(i)){for(var u=0;u<e.length;){if("function"==typeof i[e[u]])return i[e[u]].apply(i,o);u+=1}if(a(i)){var c=t.apply(null,o);return c(i)}}return n.apply(this,arguments)}}},29:function(e,t,n){"use strict";var r=n(5),a=n(18),o=Object.prototype.toString,i=function(){return"[object Arguments]"===o.call(arguments)?function(e){return"[object Arguments]"===o.call(e)}:function(e){return Object(a.a)("callee",e)}}(),u=!{toString:null}.propertyIsEnumerable("toString"),c=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],s=function(){return arguments.propertyIsEnumerable("length")}(),l=function(e,t){for(var n=0;n<e.length;){if(e[n]===t)return!0;n+=1}return!1},f="function"!=typeof Object.keys||s?Object(r.a)(function(e){if(Object(e)!==e)return[];var t,n,r=[],o=s&&i(e);for(t in e)!Object(a.a)(t,e)||o&&"length"===t||(r[r.length]=t);if(u)for(n=c.length-1;n>=0;)t=c[n],Object(a.a)(t,e)&&!l(r,t)&&(r[r.length]=t),n-=1;return r}):Object(r.a)(function(e){return Object(e)!==e?[]:Object.keys(e)});t.a=f},3:function(e,t,n){"use strict";var r,a,o,i,u,c,s,l,f,d;n.d(t,"c",function(){return r}),n.d(t,"d",function(){return a}),n.d(t,"e",function(){return o}),n.d(t,"f",function(){return i}),n.d(t,"i",function(){return u}),n.d(t,"j",function(){return c}),n.d(t,"g",function(){return s}),n.d(t,"a",function(){return l}),n.d(t,"b",function(){return f}),n.d(t,"h",function(){return d}),function(e){e.Any="any",e.Numeric="numeric",e.Text="text",e.Datetime="datetime"}(r||(r={})),function(e){e.All="all",e.Visible="visible"}(a||(a={})),function(e){e.Csv="csv",e.Xlsx="xlsx",e.None="none"}(o||(o={})),function(e){e.Ids="ids",e.Names="names",e.None="none",e.Display="display"}(i||(i={})),function(e){e.Single="single",e.Multi="multi"}(u||(u={})),function(e){e.Custom="custom",e.Native="native",e.None="none"}(c||(c={})),function(e){e.And="and",e.Or="or"}(s||(s={})),function(e){e.Coerce="coerce",e.None="none",e.Validate="validate"}(l||(l={})),function(e){e.Default="default",e.Accept="accept",e.Reject="reject"}(f||(f={})),function(e){e.Dropdown="dropdown",e.Input="input",e.Markdown="markdown"}(d||(d={}))},31:function(e,t,n){"use strict";t.a=Array.isArray||function(e){return null!=e&&e.length>=0&&"[object Array]"===Object.prototype.toString.call(e)}},354:function(e,t,n){"use strict";var r=n(50);function a(e,t,n,o){var i,u=function(r){for(var i=t.length,u=0;u<i;){if(e===t[u])return n[u];u+=1}for(var c in t[u+1]=e,n[u+1]=r,e)r[c]=o?a(e[c],t,n,!0):e[c];return r};switch(Object(r.a)(e)){case"Object":return u({});case"Array":return u([]);case"Date":return new Date(e.valueOf());case"RegExp":return i=e,new RegExp(i.source,(i.global?"g":"")+(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.sticky?"y":"")+(i.unicode?"u":""));default:return e}}var o=n(5),i=Object(o.a)(function(e){return null!=e&&"function"==typeof e.clone?e.clone():a(e,[],[],!0)});t.a=i},355:function(e,t,n){"use strict";var r=n(2),a=n(71),o=n(79),i=Object(r.a)(function(e,t){return Object(o.a)([e],t)}),u=Object(r.a)(function(e,t){return Object(a.a)(i(e),t)});t.a=u},4:function(e,t,n){"use strict";function r(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}n.d(t,"a",function(){return r})},40:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(5),a=n(2),o=n(4);function i(e){return function t(n,i,u){switch(arguments.length){case 0:return t;case 1:return Object(o.a)(n)?t:Object(a.a)(function(t,r){return e(n,t,r)});case 2:return Object(o.a)(n)&&Object(o.a)(i)?t:Object(o.a)(n)?Object(a.a)(function(t,n){return e(t,i,n)}):Object(o.a)(i)?Object(a.a)(function(t,r){return e(n,t,r)}):Object(r.a)(function(t){return e(n,i,t)});default:return Object(o.a)(n)&&Object(o.a)(i)&&Object(o.a)(u)?t:Object(o.a)(n)&&Object(o.a)(i)?Object(a.a)(function(t,n){return e(t,n,u)}):Object(o.a)(n)&&Object(o.a)(u)?Object(a.a)(function(t,n){return e(t,i,n)}):Object(o.a)(i)&&Object(o.a)(u)?Object(a.a)(function(t,r){return e(n,t,r)}):Object(o.a)(n)?Object(r.a)(function(t){return e(t,i,u)}):Object(o.a)(i)?Object(r.a)(function(t){return e(n,t,u)}):Object(o.a)(u)?Object(r.a)(function(t){return e(n,i,t)}):e(n,i,u)}}}},44:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var r=n(72),a=function(){function e(e){this.f=e}return e.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},e.prototype["@@transducer/result"]=function(e){return e},e.prototype["@@transducer/step"]=function(e,t){return this.f(e,t)},e}();var o=n(19),i=n(2),u=Object(i.a)(function(e,t){return Object(o.a)(e.length,function(){return e.apply(t,arguments)})});function c(e,t,n){for(var r=n.next();!r.done;){if((t=e["@@transducer/step"](t,r.value))&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}r=n.next()}return e["@@transducer/result"](t)}function s(e,t,n,r){return e["@@transducer/result"](n[r](u(e["@@transducer/step"],e),t))}var l="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function f(e,t,n){if("function"==typeof e&&(e=function(e){return new a(e)}(e)),Object(r.a)(n))return function(e,t,n){for(var r=0,a=n.length;r<a;){if((t=e["@@transducer/step"](t,n[r]))&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}r+=1}return e["@@transducer/result"](t)}(e,t,n);if("function"==typeof n["fantasy-land/reduce"])return s(e,t,n,"fantasy-land/reduce");if(null!=n[l])return c(e,t,n[l]());if("function"==typeof n.next)return c(e,t,n);if("function"==typeof n.reduce)return s(e,t,n,"reduce");throw new TypeError("reduce: list must be array or iterable")}},45:function(e,t,n){"use strict";function r(e){return"[object String]"===Object.prototype.toString.call(e)}n.d(t,"a",function(){return r})},46:function(e,t,n){"use strict";function r(e,t){return e===t||a(Object.values(e),Object.values(t))}function a(e,t){if(!e)return!1;var n=e.length;if(n!==t.length)return!1;for(var r=0;r<n;++r)if(e[r]!==t[r])return!1;return!0}n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a})},47:function(e,t,n){"use strict";var r=n(18);t.a="function"==typeof Object.assign?Object.assign:function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),n=1,a=arguments.length;n<a;){var o=arguments[n];if(null!=o)for(var i in o)Object(r.a)(i,o)&&(t[i]=o[i]);n+=1}return t}},5:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(4);function a(e){return function t(n){return 0===arguments.length||Object(r.a)(n)?t:e.apply(this,arguments)}}},50:function(e,t,n){"use strict";var r=n(5),a=Object(r.a)(function(e){return null===e?"Null":void 0===e?"Undefined":Object.prototype.toString.call(e).slice(8,-1)});t.a=a},6:function(e,t,n){"use strict";var r;n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i}),function(e){e[e.DEBUG=6]="DEBUG",e[e.NONE=7]="NONE"}(r||(r={}));var a,o=r;!function(e){e[e.TRACE=0]="TRACE",e[e.INFO=1]="INFO",e[e.WARNING=2]="WARNING",e[e.ERROR=3]="ERROR",e[e.FATAL=4]="FATAL",e[e.NONE=5]="NONE"}(a||(a={}));var i=a,u=[];u[i.TRACE]="trace",u[i.INFO]="info",u[i.WARNING]="warning",u[i.ERROR]="error",u[i.FATAL]="fatal",u[i.NONE]="none",u[o.DEBUG]="debug",u[o.NONE]="trace";var c,s=i.NONE,l=o.NONE;function f(e,t){if(e<t)return function(){};var n,r="";switch(e){case i.TRACE:case i.INFO:n=window.console.log,r="color: white; background-color: #3166A2;";break;case o.DEBUG:case i.WARNING:n=window.console.warn,r="color: white; background-color: #E9B606;";break;case i.ERROR:case i.FATAL:n=window.console.error,r="color: white; background-color: #FF0000;";break;default:throw new Error("Unknown log ".concat(e))}var a="".concat(r&&c?"%c":"","[").concat(u[e].toUpperCase(),"]");return r&&c?n.bind(window.console,a,r):n.bind(window.console,a)}c=!1;var d={setDebugLevel:function(e){l=e},setLogLevel:function(e){s=e}};Object.defineProperties(d,{trace:{get:function(){return f(i.TRACE,s)},configurable:!1,enumerable:!1},info:{get:function(){return f(i.INFO,s)},configurable:!1,enumerable:!1},warning:{get:function(){return f(i.WARNING,s)},configurable:!1,enumerable:!1},error:{get:function(){return f(i.ERROR,s)},configurable:!1,enumerable:!1},fatal:{get:function(){return f(i.FATAL,s)},configurable:!1,enumerable:!1},debug:{get:function(){return f(o.DEBUG,l)},configurable:!1,enumerable:!1}}),Object.freeze(d);t.c=d},67:function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var a=function(e){return Array.isArray(e.name)?e.name.length:1};t.a=function(e){return Math.max.apply(Math,r(e.map(a)))}},68:function(e,t,n){"use strict";function r(e){return e&&e["@@transducer/reduced"]?e:{"@@transducer/value":e,"@@transducer/reduced":!0}}n.d(t,"a",function(){return r})},69:function(e,t,n){"use strict";var r=n(19),a=n(5),o=n(2),i=n(80),u=Object(o.a)(function(e,t){return 1===e?Object(a.a)(t):Object(r.a)(e,Object(i.a)(e,[],t))});t.a=u},70:function(e,t,n){"use strict";n.d(t,"a",function(){return v}),n.d(t,"b",function(){return g}),n.d(t,"c",function(){return h});var r=n(355),a=n(40),o=Object(a.a)(function(e,t,n){for(var r=[],a=0,o=Math.min(t.length,n.length);a<o;)r[a]=e(t[a],n[a]),a+=1;return r}),i=n(167),u=n(12),c=n.n(u),s=n(0),l=n.n(s),f=n(85),d=(n(6),n(99),n(100),n(102),n(73));function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,O(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,u["Component"]),n=t,(r=[{key:"render",value:function(){return c.a.createElement(u.Suspense,{fallback:null},c.a.createElement(_,this.props))}}])&&b(n.prototype,r),a&&b(n,a),t}(),_=Object(f.asyncDecorator)(v,d.a.table),g={page_action:"native",page_current:0,page_size:250,css:[],filter_query:"",filter_action:"none",sort_as_null:[],sort_action:"none",sort_mode:"single",sort_by:[],style_as_list_view:!1,derived_viewport_data:[],derived_viewport_indices:[],derived_viewport_row_ids:[],derived_viewport_selected_rows:[],derived_viewport_selected_row_ids:[],derived_virtual_data:[],derived_virtual_indices:[],derived_virtual_row_ids:[],derived_virtual_selected_rows:[],derived_virtual_selected_row_ids:[],dropdown:{},dropdown_conditional:[],dropdown_data:[],fill_width:!0,fixed_columns:{headers:!1,data:0},fixed_rows:{headers:!1,data:0},markdown_options:{link_target:"_blank"},tooltip:{},tooltip_conditional:[],tooltip_data:[],tooltip_delay:350,tooltip_duration:2e3,column_selectable:!1,editable:!1,export_columns:"visible",export_format:"none",include_headers_on_copy_paste:!1,selected_cells:[],selected_columns:[],selected_rows:[],selected_row_ids:[],cell_selectable:!0,row_selectable:!1,style_table:{},style_cell_conditional:[],style_data_conditional:[],style_filter_conditional:[],style_header_conditional:[],virtualization:!1,persisted_props:["columns.name","filter_query","hidden_columns","selected_columns","selected_rows","sort_by"],persistence_type:"local"},h={active_cell:l.a.exact({row:l.a.number,column:l.a.number,row_id:l.a.oneOfType([l.a.string,l.a.number]),column_id:l.a.string}),columns:l.a.arrayOf(l.a.exact({clearable:l.a.oneOfType([l.a.oneOf(["first","last"]),l.a.bool,l.a.arrayOf(l.a.bool)]),deletable:l.a.oneOfType([l.a.oneOf(["first","last"]),l.a.bool,l.a.arrayOf(l.a.bool)]),editable:l.a.bool,hideable:l.a.oneOfType([l.a.oneOf(["first","last"]),l.a.bool,l.a.arrayOf(l.a.bool)]),renamable:l.a.oneOfType([l.a.oneOf(["first","last"]),l.a.bool,l.a.arrayOf(l.a.bool)]),selectable:l.a.oneOfType([l.a.oneOf(["first","last"]),l.a.bool,l.a.arrayOf(l.a.bool)]),format:l.a.exact({locale:l.a.exact({symbol:l.a.arrayOf(l.a.string),decimal:l.a.string,group:l.a.string,grouping:l.a.arrayOf(l.a.number),numerals:l.a.arrayOf(l.a.string),percent:l.a.string,separate_4digits:l.a.bool}),nully:l.a.any,prefix:l.a.number,specifier:l.a.string}),id:l.a.string.isRequired,name:l.a.oneOfType([l.a.string,l.a.arrayOf(l.a.string)]).isRequired,presentation:l.a.oneOf(["input","dropdown","markdown"]),on_change:l.a.exact({action:l.a.oneOf(["coerce","none","validate"]),failure:l.a.oneOf(["accept","default","reject"])}),sort_as_null:l.a.arrayOf(l.a.oneOfType([l.a.string,l.a.number,l.a.bool])),validation:l.a.exact({allow_null:l.a.bool,default:l.a.any,allow_YY:l.a.bool}),type:l.a.oneOf(["any","numeric","text","datetime"])})),include_headers_on_copy_paste:l.a.bool,locale_format:l.a.exact({symbol:l.a.arrayOf(l.a.string),decimal:l.a.string,group:l.a.string,grouping:l.a.arrayOf(l.a.number),numerals:l.a.arrayOf(l.a.string),percent:l.a.string,separate_4digits:l.a.bool}),markdown_options:l.a.exact({link_target:l.a.oneOfType([l.a.string,l.a.oneOf(["_blank","_parent","_self","_top"])]).isRequired}),css:l.a.arrayOf(l.a.exact({selector:l.a.string.isRequired,rule:l.a.string.isRequired})),data:l.a.arrayOf(l.a.object),data_previous:l.a.arrayOf(l.a.object),data_timestamp:l.a.number,editable:l.a.bool,end_cell:l.a.exact({row:l.a.number,column:l.a.number,row_id:l.a.oneOfType([l.a.string,l.a.number]),column_id:l.a.string}),export_columns:l.a.oneOf(["all","visible"]),export_format:l.a.oneOf(["csv","xlsx","none"]),export_headers:l.a.oneOf(["none","ids","names","display"]),fill_width:l.a.bool,hidden_columns:l.a.arrayOf(l.a.string),id:l.a.string,is_focused:l.a.bool,merge_duplicate_headers:l.a.bool,fixed_columns:l.a.oneOfType([l.a.exact({headers:l.a.oneOf([!1]),data:l.a.oneOf([0])}),l.a.exact({headers:l.a.oneOf([!0]).isRequired,data:l.a.number})]),fixed_rows:l.a.oneOfType([l.a.exact({headers:l.a.oneOf([!1]),data:l.a.oneOf([0])}),l.a.exact({headers:l.a.oneOf([!0]).isRequired,data:l.a.number})]),column_selectable:l.a.oneOf(["single","multi",!1]),row_deletable:l.a.bool,cell_selectable:l.a.bool,row_selectable:l.a.oneOf(["single","multi",!1]),selected_cells:l.a.arrayOf(l.a.exact({row:l.a.number,column:l.a.number,row_id:l.a.oneOfType([l.a.string,l.a.number]),column_id:l.a.string})),selected_rows:l.a.arrayOf(l.a.number),selected_columns:l.a.arrayOf(l.a.string),selected_row_ids:l.a.arrayOf(l.a.oneOfType([l.a.string,l.a.number])),setProps:l.a.func,start_cell:l.a.exact({row:l.a.number,column:l.a.number,row_id:l.a.oneOfType([l.a.string,l.a.number]),column_id:l.a.string}),style_as_list_view:l.a.bool,page_action:l.a.oneOf(["custom","native","none"]),page_current:l.a.number,page_count:l.a.number,page_size:l.a.number,dropdown:l.a.objectOf(l.a.exact({clearable:l.a.bool,options:l.a.arrayOf(l.a.exact({label:l.a.string.isRequired,value:l.a.oneOfType([l.a.number,l.a.string,l.a.bool]).isRequired})).isRequired})),dropdown_conditional:l.a.arrayOf(l.a.exact({clearable:l.a.bool,if:l.a.exact({column_id:l.a.string,filter_query:l.a.string}),options:l.a.arrayOf(l.a.exact({label:l.a.string.isRequired,value:l.a.oneOfType([l.a.number,l.a.string,l.a.bool]).isRequired})).isRequired})),dropdown_data:l.a.arrayOf(l.a.objectOf(l.a.exact({clearable:l.a.bool,options:l.a.arrayOf(l.a.exact({label:l.a.string.isRequired,value:l.a.oneOfType([l.a.number,l.a.string,l.a.bool]).isRequired})).isRequired}))),tooltip:l.a.objectOf(l.a.oneOfType([l.a.exact({delay:l.a.number,duration:l.a.number,type:l.a.oneOf(["text","markdown"]),value:l.a.string.isRequired}),l.a.string])),tooltip_conditional:l.a.arrayOf(l.a.exact({delay:l.a.number,duration:l.a.number,if:l.a.exact({column_id:l.a.string,filter_query:l.a.string,row_index:l.a.oneOfType([l.a.number,l.a.oneOf(["odd","even"])])}).isRequired,type:l.a.oneOf(["text","markdown"]),value:l.a.string.isRequired})),tooltip_data:l.a.arrayOf(l.a.objectOf(l.a.oneOfType([l.a.string,l.a.exact({delay:l.a.number,duration:l.a.number,type:l.a.oneOf(["text","markdown"]),value:l.a.string.isRequired})]))),tooltip_delay:l.a.number,tooltip_duration:l.a.number,filter_query:l.a.string,filter_action:l.a.oneOfType([l.a.oneOf(["custom","native","none"]),l.a.shape({type:l.a.oneOf(["custom","native"]).isRequired,operator:l.a.oneOf(["and","or"])})]),sort_action:l.a.oneOf(["custom","native","none"]),sort_mode:l.a.oneOf(["single","multi"]),sort_by:l.a.arrayOf(l.a.exact({column_id:l.a.string.isRequired,direction:l.a.oneOf(["asc","desc"]).isRequired})),sort_as_null:l.a.arrayOf(l.a.oneOfType([l.a.string,l.a.number,l.a.bool])),style_table:l.a.object,style_cell:l.a.object,style_data:l.a.object,style_filter:l.a.object,style_header:l.a.object,style_cell_conditional:l.a.arrayOf(l.a.shape({if:l.a.exact({column_id:l.a.oneOfType([l.a.string,l.a.arrayOf(l.a.string)]),column_type:l.a.oneOf(["any","numeric","text","datetime"])})})),style_data_conditional:l.a.arrayOf(l.a.shape({if:l.a.exact({column_id:l.a.oneOfType([l.a.string,l.a.arrayOf(l.a.string)]),column_type:l.a.oneOf(["any","numeric","text","datetime"]),filter_query:l.a.string,state:l.a.oneOf(["active","selected"]),row_index:l.a.oneOfType([l.a.number,l.a.oneOf(["odd","even"]),l.a.arrayOf(l.a.number)]),column_editable:l.a.bool})})),style_filter_conditional:l.a.arrayOf(l.a.shape({if:l.a.exact({column_id:l.a.oneOfType([l.a.string,l.a.arrayOf(l.a.string)]),column_type:l.a.oneOf(["any","numeric","text","datetime"]),column_editable:l.a.bool})})),style_header_conditional:l.a.arrayOf(l.a.shape({if:l.a.exact({column_id:l.a.oneOfType([l.a.string,l.a.arrayOf(l.a.string)]),column_type:l.a.oneOf(["any","numeric","text","datetime"]),header_index:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number),l.a.oneOf(["odd","even"])]),column_editable:l.a.bool})})),virtualization:l.a.bool,derived_filter_query_structure:l.a.object,derived_viewport_data:l.a.arrayOf(l.a.object),derived_viewport_indices:l.a.arrayOf(l.a.number),derived_viewport_row_ids:l.a.arrayOf(l.a.oneOfType([l.a.string,l.a.number])),derived_viewport_selected_columns:l.a.arrayOf(l.a.string),derived_viewport_selected_rows:l.a.arrayOf(l.a.number),derived_viewport_selected_row_ids:l.a.arrayOf(l.a.oneOfType([l.a.string,l.a.number])),derived_virtual_data:l.a.arrayOf(l.a.object),derived_virtual_indices:l.a.arrayOf(l.a.number),derived_virtual_row_ids:l.a.arrayOf(l.a.oneOfType([l.a.string,l.a.number])),derived_virtual_selected_rows:l.a.arrayOf(l.a.number),derived_virtual_selected_row_ids:l.a.arrayOf(l.a.oneOfType([l.a.string,l.a.number])),loading_state:l.a.shape({is_loading:l.a.bool,prop_name:l.a.string,component_name:l.a.string}),persistence:l.a.oneOfType([l.a.bool,l.a.string,l.a.number]),persisted_props:l.a.arrayOf(l.a.oneOf(["columns.name","data","filter_query","hidden_columns","selected_columns","selected_rows","sort_by"])),persistence_type:l.a.oneOf(["local","session","memory"])};v.persistenceTransforms={columns:{name:{extract:function(e){return r.a("name",e)},apply:function(e,t){return o(i.a("name"),e,t)}}}},v.defaultProps=g,v.propTypes=h},71:function(e,t,n){"use strict";var r=n(2),a=n(25),o=n(81),i=n(44),u=n(17),c=function(){function e(e,t){this.xf=t,this.f=e}return e.prototype["@@transducer/init"]=u.a.init,e.prototype["@@transducer/result"]=u.a.result,e.prototype["@@transducer/step"]=function(e,t){return this.xf["@@transducer/step"](e,this.f(t))},e}(),s=Object(r.a)(function(e,t){return new c(e,t)}),l=n(69),f=n(29),d=Object(r.a)(Object(a.a)(["fantasy-land/map","map"],s,function(e,t){switch(Object.prototype.toString.call(t)){case"[object Function]":return Object(l.a)(t.length,function(){return e.call(this,t.apply(this,arguments))});case"[object Object]":return Object(i.a)(function(n,r){return n[r]=e(t[r]),n},{},Object(f.a)(t));default:return Object(o.a)(e,t)}}));t.a=d},72:function(e,t,n){"use strict";var r=n(5),a=n(31),o=n(45),i=Object(r.a)(function(e){return!!Object(a.a)(e)||!!e&&("object"==typeof e&&(!Object(o.a)(e)&&(1===e.nodeType?!!e.length:0===e.length||e.length>0&&(e.hasOwnProperty(0)&&e.hasOwnProperty(e.length-1)))))});t.a=i},73:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,"a",function(){return a});var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a,o;return t=e,o=[{key:"table",value:function(){return n.e(0).then(n.bind(null,170))}},{key:"xlsx",get:function(){return Promise.all([n.e(0),n.e(1)]).then(n.t.bind(null,168,7))}},{key:"hljs",get:function(){return Promise.resolve(window.hljs||Promise.all([n.e(0),n.e(2)]).then(n.bind(null,169)).then(function(e){return e.default}))}}],(a=null)&&r(t.prototype,a),o&&r(t,o),e}()},74:function(e,t,n){"use strict";var r=n(2),a=n(45),o=Object(r.a)(function(e,t){var n=e<0?t.length+e:e;return Object(a.a)(t)?t.charAt(n):t[n]});t.a=o},79:function(e,t,n){"use strict";var r=n(2),a=n(83),o=n(74),i=Object(r.a)(function(e,t){return e.map(function(e){for(var n,r=t,i=0;i<e.length;){if(null==r)return;n=e[i],r=Object(a.a)(n)?Object(o.a)(n,r):r[n],i+=1}return r})}),u=Object(r.a)(function(e,t){return i([e],t)[0]});t.a=u},80:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(19),a=n(4);function o(e,t,n){return function(){for(var i=[],u=0,c=e,s=0;s<t.length||u<arguments.length;){var l;s<t.length&&(!Object(a.a)(t[s])||u>=arguments.length)?l=t[s]:(l=arguments[u],u+=1),i[s]=l,Object(a.a)(l)||(c-=1),s+=1}return c<=0?n.apply(this,i):Object(r.a)(c,o(e,i,n))}}},81:function(e,t,n){"use strict";function r(e,t){for(var n=0,r=t.length,a=Array(r);n<r;)a[n]=e(t[n]),n+=1;return a}n.d(t,"a",function(){return r})},82:function(e,t,n){"use strict";function r(e,t){for(var n=0,r=t.length,a=[];n<r;)e(t[n])&&(a[a.length]=t[n]),n+=1;return a}n.d(t,"a",function(){return r})},83:function(e,t,n){"use strict";t.a=Number.isInteger||function(e){return e<<0===e}},84:function(e,t,n){"use strict";n.r(t);n(103);var r=n(24),a=n(6),o=n(70);n.d(t,"DataTable",function(){return o.a}),a.c.setDebugLevel(r.a.debugLevel),a.c.setLogLevel(r.a.logLevel)},85:function(e,t,n){var r;window,e.exports=(r=n(12),function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=r},function(e,t,n){"use strict";n.r(t);var r=n(0),a=function(e,t){var n,a={isReady:new Promise(function(e){n=e}),get:Object(r.lazy)(function(){return Promise.resolve(t()).then(function(e){return setTimeout(function(){return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(n(!0));case 2:a.isReady=!0;case 3:case"end":return e.stop()}})},0),e})})};return Object.defineProperty(e,"_dashprivate_isLazyComponentReady",{get:function(){return a.isReady}}),a.get},o=function(e,t){Object.defineProperty(e,"_dashprivate_isLazyComponentReady",{get:function(){return i(t)}})},i=function(e){return e&&e._dashprivate_isLazyComponentReady};function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c="_dashprivate_historychange",s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"dispatchChangeEvent",value:function(){window.dispatchEvent(new CustomEvent(c))}},{key:"onChange",value:function(e){return window.addEventListener(c,e),function(){return window.removeEventListener(c,e)}}}])&&u(t,n),e}();n.d(t,"asyncDecorator",function(){return a}),n.d(t,"inheritAsyncDecorator",function(){return o}),n.d(t,"isReady",function(){return i}),n.d(t,"History",function(){return s})}]))},98:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},99:function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:36;return e+Math.random().toString(t).substring(2)}n.d(t,"a",function(){return r})}});
//# sourceMappingURL=bundle.js.map