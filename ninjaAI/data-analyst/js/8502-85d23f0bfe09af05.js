"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8502],{66159:function(e,t,n){n.d(t,{J:function(){return i}});function i(e,t){let n=String(e),i=n.indexOf(t),r=i,l=0,o=0;if("string"!=typeof t)throw TypeError("Expected substring");for(;-1!==i;)i===r?++l>o&&(o=l):l=1,r=i+t.length,i=n.indexOf(t,r);return o}},18502:function(e,t,n){function i(e,t){let n=String(e);if("string"!=typeof t)throw TypeError("Expected character");let i=0,r=n.indexOf(t);for(;-1!==r;)i++,r=n.indexOf(t,r+t.length);return i}n.d(t,{Z:function(){return eR}});var r=n(58899),l=n(99685),o=n(3053),a=n(5373);let u="phrasing",s=["autolink","link","image","label"];function c(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function f(e){this.config.enter.autolinkProtocol.call(this,e)}function h(e){this.config.exit.autolinkProtocol.call(this,e)}function p(e){this.config.exit.data.call(this,e);let t=this.stack[this.stack.length-1];(0,r.ok)("link"===t.type),t.url="http://"+this.sliceSerialize(e)}function d(e){this.config.exit.autolinkEmail.call(this,e)}function g(e){this.exit(e)}function m(e){!function(e,t,n){let i=(0,a.O)((n||{}).ignore||[]),r=function(e){let t=[];if(!Array.isArray(e))throw TypeError("Expected find and replace tuple or list of tuples");let n=!e[0]||Array.isArray(e[0])?e:[e],i=-1;for(;++i<n.length;){var r;let e=n[i];t.push(["string"==typeof(r=e[0])?RegExp(function(e){if("string"!=typeof e)throw TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}(r),"g"):r,function(e){return"function"==typeof e?e:function(){return e}}(e[1])])}return t}(t),l=-1;for(;++l<r.length;)(0,o.S4)(e,"text",u);function u(e,t){let n,o=-1;for(;++o<t.length;){let e=t[o],r=n?n.children:void 0;if(i(e,r?r.indexOf(e):void 0,n))return;n=e}if(n)return function(e,t){let n=t[t.length-1],i=r[l][0],o=r[l][1],a=0,u=n.children.indexOf(e),s=!1,c=[];i.lastIndex=0;let f=i.exec(e.value);for(;f;){let n=f.index,r={index:f.index,input:f.input,stack:[...t,e]},l=o(...f,r);if("string"==typeof l&&(l=l.length>0?{type:"text",value:l}:void 0),!1===l?i.lastIndex=n+1:(a!==n&&c.push({type:"text",value:e.value.slice(a,n)}),Array.isArray(l)?c.push(...l):l&&c.push(l),a=n+f[0].length,s=!0),!i.global)break;f=i.exec(e.value)}return s?(a<e.value.length&&c.push({type:"text",value:e.value.slice(a)}),n.children.splice(u,1,...c)):c=[e],u+c.length}(e,t)}}(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,k],[/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g,b]],{ignore:["link","linkReference"]})}function k(e,t,n,r,l){let o="";if(!x(l)||(/^w/i.test(t)&&(n=t+n,t="",o="http://"),!function(e){let t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}(n)))return!1;let a=function(e){let t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")"),l=i(e,"("),o=i(e,")");for(;-1!==r&&l>o;)e+=n.slice(0,r+1),r=(n=n.slice(r+1)).indexOf(")"),o++;return[e,n]}(n+r);if(!a[0])return!1;let u={type:"link",title:null,url:o+t+a[0],children:[{type:"text",value:t+a[0]}]};return a[1]?[u,{type:"text",value:a[1]}]:u}function b(e,t,n,i){return!(!x(i,!0)||/[-\d_]$/.test(n))&&{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function x(e,t){let n=e.input.charCodeAt(e.index-1);return(0===e.index||(0,l.B8)(n)||(0,l.Xh)(n))&&(!t||47!==n)}var y=n(67833);function v(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function C(){this.buffer()}function w(e){let t=this.resume(),n=this.stack[this.stack.length-1];(0,r.ok)("footnoteDefinition"===n.type),n.label=t,n.identifier=(0,y.d)(this.sliceSerialize(e)).toLowerCase()}function D(e){this.exit(e)}function F(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function z(){this.buffer()}function L(e){let t=this.resume(),n=this.stack[this.stack.length-1];(0,r.ok)("footnoteReference"===n.type),n.label=t,n.identifier=(0,y.d)(this.sliceSerialize(e)).toLowerCase()}function A(e){this.exit(e)}function M(e,t,n,i){let r=n.createTracker(i),l=r.move("[^"),o=n.enter("footnoteReference"),a=n.enter("reference");return l+=r.move(n.safe(n.associationId(e),{...r.current(),before:l,after:"]"})),a(),o(),l+=r.move("]")}function O(e,t,n,i){let r=n.createTracker(i),l=r.move("[^"),o=n.enter("footnoteDefinition"),a=n.enter("label");return l+=r.move(n.safe(n.associationId(e),{...r.current(),before:l,after:"]"})),a(),l+=r.move("]:"+(e.children&&e.children.length>0?" ":"")),r.shift(4),l+=r.move(n.indentLines(n.containerFlow(e,r.current()),S)),o(),l}function S(e,t,n){return 0===t?e:(n?"":"    ")+e}M.peek=function(){return"["};let j=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];function E(e){this.enter({type:"delete",children:[]},e)}function R(e){this.exit(e)}function T(e,t,n,i){let r=n.createTracker(i),l=n.enter("strikethrough"),o=r.move("~~");return o+=n.containerPhrasing(e,{...r.current(),before:o,after:"~"})+r.move("~~"),l(),o}function I(e){return e.length}function _(e){let t="string"==typeof e?e.codePointAt(0):0;return 67===t||99===t?99:76===t||108===t?108:82===t||114===t?114:0}T.peek=function(){return"~"};n(66159);n(20037);var H=n(2430);function P(e,t,n){let i=e.value||"",r="`",l=-1;for(;RegExp("(^|[^`])"+r+"([^`]|$)").test(i);)r+="`";for(/[^ \r\n]/.test(i)&&(/^[ \r\n]/.test(i)&&/[ \r\n]$/.test(i)||/^`|`$/.test(i))&&(i=" "+i+" ");++l<n.unsafe.length;){let e;let t=n.unsafe[l],r=n.compilePattern(t);if(t.atBreak)for(;e=r.exec(i);){let t=e.index;10===i.charCodeAt(t)&&13===i.charCodeAt(t-1)&&t--,i=i.slice(0,t)+" "+i.slice(e.index+1)}}return r+i+r}P.peek=function(){return"`"},(0,a.O)(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);let B=function(e,t,n,i){let r=function(e){let t=e.options.listItemIndent||"one";if("tab"!==t&&"one"!==t&&"mixed"!==t)throw Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}(n),l=n.bulletCurrent||function(e){let t=e.options.bullet||"*";if("*"!==t&&"+"!==t&&"-"!==t)throw Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}(n);t&&"list"===t.type&&t.ordered&&(l=("number"==typeof t.start&&t.start>-1?t.start:1)+(!1===n.options.incrementListMarker?0:t.children.indexOf(e))+l);let o=l.length+1;("tab"===r||"mixed"===r&&(t&&"list"===t.type&&t.spread||e.spread))&&(o=4*Math.ceil(o/4));let a=n.createTracker(i);a.move(l+" ".repeat(o-l.length)),a.shift(o);let u=n.enter("listItem"),s=n.indentLines(n.containerFlow(e,a.current()),function(e,t,n){return t?(n?"":" ".repeat(o))+e:(n?l:l+" ".repeat(o-l.length))+e});return u(),s};function $(e){let t=e._align;(0,r.ok)(t,"expected `_align` on table"),this.enter({type:"table",align:t.map(function(e){return"none"===e?null:e}),children:[]},e),this.data.inTable=!0}function W(e){this.exit(e),this.data.inTable=void 0}function q(e){this.enter({type:"tableRow",children:[]},e)}function V(e){this.exit(e)}function U(e){this.enter({type:"tableCell",children:[]},e)}function X(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,Z));let n=this.stack[this.stack.length-1];(0,r.ok)("inlineCode"===n.type),n.value=t,this.exit(e)}function Z(e,t){return"|"===t?t:e}function J(e){let t=this.stack[this.stack.length-2];(0,r.ok)("listItem"===t.type),t.checked="taskListCheckValueChecked"===e.type}function N(e){let t=this.stack[this.stack.length-2];if(t&&"listItem"===t.type&&"boolean"==typeof t.checked){let e=this.stack[this.stack.length-1];(0,r.ok)("paragraph"===e.type);let n=e.children[0];if(n&&"text"===n.type){let i;let r=t.children,l=-1;for(;++l<r.length;){let e=r[l];if("paragraph"===e.type){i=e;break}}i===e&&(n.value=n.value.slice(1),0===n.value.length?e.children.shift():e.position&&n.position&&"number"==typeof n.position.start.offset&&(n.position.start.column++,n.position.start.offset++,e.position.start=Object.assign({},n.position.start)))}}this.exit(e)}function Q(e,t,n,i){let r=e.children[0],l="boolean"==typeof e.checked&&r&&"paragraph"===r.type,o="["+(e.checked?"x":" ")+"] ",a=n.createTracker(i);l&&a.move(o);let u=B(e,t,n,{...i,...a.current()});return l&&(u=u.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,function(e){return e+o})),u}var G=n(54696);let K={tokenize:function(e,t,n){let i=0;return function t(l){return(87===l||119===l)&&i<3?(i++,e.consume(l),t):46===l&&3===i?(e.consume(l),r):n(l)};function r(e){return null===e?n(e):t(e)}},partial:!0},Y={tokenize:function(e,t,n){let i,r,o;return a;function a(t){return 46===t||95===t?e.check(et,s,u)(t):null===t||(0,l.z3)(t)||(0,l.B8)(t)||45!==t&&(0,l.Xh)(t)?s(t):(o=!0,e.consume(t),a)}function u(t){return 95===t?i=!0:(r=i,i=void 0),e.consume(t),a}function s(e){return r||i||!o?n(e):t(e)}},partial:!0},ee={tokenize:function(e,t){let n=0,i=0;return r;function r(a){return 40===a?(n++,e.consume(a),r):41===a&&i<n?o(a):33===a||34===a||38===a||39===a||41===a||42===a||44===a||46===a||58===a||59===a||60===a||63===a||93===a||95===a||126===a?e.check(et,t,o)(a):null===a||(0,l.z3)(a)||(0,l.B8)(a)?t(a):(e.consume(a),r)}function o(t){return 41===t&&i++,e.consume(t),r}},partial:!0},et={tokenize:function(e,t,n){return i;function i(a){return 33===a||34===a||39===a||41===a||42===a||44===a||46===a||58===a||59===a||63===a||95===a||126===a?(e.consume(a),i):38===a?(e.consume(a),o):93===a?(e.consume(a),r):60===a||null===a||(0,l.z3)(a)||(0,l.B8)(a)?t(a):n(a)}function r(e){return null===e||40===e||91===e||(0,l.z3)(e)||(0,l.B8)(e)?t(e):i(e)}function o(t){return(0,l.jv)(t)?function t(r){return 59===r?(e.consume(r),i):(0,l.jv)(r)?(e.consume(r),t):n(r)}(t):n(t)}},partial:!0},en={tokenize:function(e,t,n){return function(t){return e.consume(t),i};function i(e){return(0,l.H$)(e)?n(e):t(e)}},partial:!0},ei={tokenize:function(e,t,n){let i=this;return function(t){return 87!==t&&119!==t||!eu.call(i,i.previous)||eh(i.events)?n(t):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(K,e.attempt(Y,e.attempt(ee,r),n),n)(t))};function r(n){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(n)}},previous:eu},er={tokenize:function(e,t,n){let i=this,r="",o=!1;return function(t){return(72===t||104===t)&&es.call(i,i.previous)&&!eh(i.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),r+=String.fromCodePoint(t),e.consume(t),a):n(t)};function a(t){if((0,l.jv)(t)&&r.length<5)return r+=String.fromCodePoint(t),e.consume(t),a;if(58===t){let n=r.toLowerCase();if("http"===n||"https"===n)return e.consume(t),u}return n(t)}function u(t){return 47===t?(e.consume(t),o)?s:(o=!0,u):n(t)}function s(t){return null===t||(0,l.Av)(t)||(0,l.z3)(t)||(0,l.B8)(t)||(0,l.Xh)(t)?n(t):e.attempt(Y,e.attempt(ee,c),n)(t)}function c(n){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(n)}},previous:es},el={tokenize:function(e,t,n){let i,r;let o=this;return function(t){return!ef(t)||!ec.call(o,o.previous)||eh(o.events)?n(t):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),function t(i){return ef(i)?(e.consume(i),t):64===i?(e.consume(i),a):n(i)}(t))};function a(t){return 46===t?e.check(en,s,u)(t):45===t||95===t||(0,l.H$)(t)?(r=!0,e.consume(t),a):s(t)}function u(t){return e.consume(t),i=!0,a}function s(a){return r&&i&&(0,l.jv)(o.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(a)):n(a)}},previous:ec},eo={},ea=48;for(;ea<123;)eo[ea]=el,58==++ea?ea=65:91===ea&&(ea=97);function eu(e){return null===e||40===e||42===e||95===e||91===e||93===e||126===e||(0,l.z3)(e)}function es(e){return!(0,l.jv)(e)}function ec(e){return!(47===e||ef(e))}function ef(e){return 43===e||45===e||46===e||95===e||(0,l.H$)(e)}function eh(e){let t=e.length,n=!1;for(;t--;){let i=e[t][1];if(("labelLink"===i.type||"labelImage"===i.type)&&!i._balanced){n=!0;break}if(i._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}eo[43]=el,eo[45]=el,eo[46]=el,eo[95]=el,eo[72]=[el,er],eo[104]=[el,er],eo[87]=[el,ei],eo[119]=[el,ei];var ep=n(42462),ed=n(69406);let eg={tokenize:function(e,t,n){let i=this;return(0,ed.f)(e,function(e){let r=i.events[i.events.length-1];return r&&"gfmFootnoteDefinitionIndent"===r[1].type&&4===r[2].sliceSerialize(r[1],!0).length?t(e):n(e)},"gfmFootnoteDefinitionIndent",5)},partial:!0};function em(e,t,n){let i;let r=this,l=r.events.length,o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);for(;l--;){let e=r.events[l][1];if("labelImage"===e.type){i=e;break}if("gfmFootnoteCall"===e.type||"labelLink"===e.type||"label"===e.type||"image"===e.type||"link"===e.type)break}return function(l){if(!i||!i._balanced)return n(l);let a=(0,y.d)(r.sliceSerialize({start:i.end,end:r.now()}));return 94===a.codePointAt(0)&&o.includes(a.slice(1))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(l),e.exit("gfmFootnoteCallLabelMarker"),t(l)):n(l)}}function ek(e,t){let n=e.length;for(;n--;)if("labelImage"===e[n][1].type&&"enter"===e[n][0]){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";let i={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},r={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};r.end.column++,r.end.offset++,r.end._bufferIndex++;let l={type:"gfmFootnoteCallString",start:Object.assign({},r.end),end:Object.assign({},e[e.length-1][1].start)},o={type:"chunkString",contentType:"string",start:Object.assign({},l.start),end:Object.assign({},l.end)},a=[e[n+1],e[n+2],["enter",i,t],e[n+3],e[n+4],["enter",r,t],["exit",r,t],["enter",l,t],["enter",o,t],["exit",o,t],["exit",l,t],e[e.length-2],e[e.length-1],["exit",i,t]];return e.splice(n,e.length-n+1,...a),e}function eb(e,t,n){let i;let r=this,o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a=0;return function(t){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(t),e.exit("gfmFootnoteCallLabelMarker"),u};function u(t){return 94!==t?n(t):(e.enter("gfmFootnoteCallMarker"),e.consume(t),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",s)}function s(u){if(a>999||93===u&&!i||null===u||91===u||(0,l.z3)(u))return n(u);if(93===u){e.exit("chunkString");let i=e.exit("gfmFootnoteCallString");return o.includes((0,y.d)(r.sliceSerialize(i)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(u),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(u)}return(0,l.z3)(u)||(i=!0),a++,e.consume(u),92===u?c:s}function c(t){return 91===t||92===t||93===t?(e.consume(t),a++,s):s(t)}}function ex(e,t,n){let i,r;let o=this,a=o.parser.gfmFootnotes||(o.parser.gfmFootnotes=[]),u=0;return function(t){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(t),e.exit("gfmFootnoteDefinitionLabelMarker"),s};function s(t){return 94===t?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(t),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",c):n(t)}function c(t){if(u>999||93===t&&!r||null===t||91===t||(0,l.z3)(t))return n(t);if(93===t){e.exit("chunkString");let n=e.exit("gfmFootnoteDefinitionLabelString");return i=(0,y.d)(o.sliceSerialize(n)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(t),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),h}return(0,l.z3)(t)||(r=!0),u++,e.consume(t),92===t?f:c}function f(t){return 91===t||92===t||93===t?(e.consume(t),u++,c):c(t)}function h(t){return 58===t?(e.enter("definitionMarker"),e.consume(t),e.exit("definitionMarker"),a.includes(i)||a.push(i),(0,ed.f)(e,p,"gfmFootnoteDefinitionWhitespace")):n(t)}function p(e){return t(e)}}function ey(e,t,n){return e.check(ep.w,t,e.attempt(eg,t,n))}function ev(e){e.exit("gfmFootnoteDefinition")}var eC=n(88973),ew=n(80658),eD=n(63374);class eF{constructor(){this.map=[]}add(e,t,n){!function(e,t,n,i){let r=0;if(0!==n||0!==i.length){for(;r<e.map.length;){if(e.map[r][0]===t){e.map[r][1]+=n,e.map[r][2].push(...i);return}r+=1}e.map.push([t,n,i])}}(this,e,t,n)}consume(e){if(this.map.sort(function(e,t){return e[0]-t[0]}),0===this.map.length)return;let t=this.map.length,n=[];for(;t>0;)t-=1,n.push(e.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),e.length=this.map[t][0];n.push([...e]),e.length=0;let i=n.pop();for(;i;)e.push(...i),i=n.pop();this.map.length=0}}function ez(e,t,n){let i;let r=this,o=0,a=0;return function(e){let t=r.events.length-1;for(;t>-1;){let e=r.events[t][1].type;if("lineEnding"===e||"linePrefix"===e)t--;else break}let i=t>-1?r.events[t][1].type:null,l="tableHead"===i||"tableRow"===i?x:u;return l===x&&r.parser.lazy[r.now().line]?n(e):l(e)};function u(t){return e.enter("tableHead"),e.enter("tableRow"),124===t||(i=!0,a+=1),s(t)}function s(t){return null===t?n(t):(0,l.Ch)(t)?a>1?(a=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),h):n(t):(0,l.xz)(t)?(0,ed.f)(e,s,"whitespace")(t):(a+=1,i&&(i=!1,o+=1),124===t)?(e.enter("tableCellDivider"),e.consume(t),e.exit("tableCellDivider"),i=!0,s):(e.enter("data"),c(t))}function c(t){return null===t||124===t||(0,l.z3)(t)?(e.exit("data"),s(t)):(e.consume(t),92===t?f:c)}function f(t){return 92===t||124===t?(e.consume(t),c):c(t)}function h(t){return(r.interrupt=!1,r.parser.lazy[r.now().line])?n(t):(e.enter("tableDelimiterRow"),i=!1,(0,l.xz)(t))?(0,ed.f)(e,p,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):p(t)}function p(t){return 45===t||58===t?g(t):124===t?(i=!0,e.enter("tableCellDivider"),e.consume(t),e.exit("tableCellDivider"),d):n(t)}function d(t){return(0,l.xz)(t)?(0,ed.f)(e,g,"whitespace")(t):g(t)}function g(t){return 58===t?(a+=1,i=!0,e.enter("tableDelimiterMarker"),e.consume(t),e.exit("tableDelimiterMarker"),m):45===t?(a+=1,m(t)):null===t||(0,l.Ch)(t)?b(t):n(t)}function m(t){return 45===t?(e.enter("tableDelimiterFiller"),function t(n){return 45===n?(e.consume(n),t):58===n?(i=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(n),e.exit("tableDelimiterMarker"),k):(e.exit("tableDelimiterFiller"),k(n))}(t)):n(t)}function k(t){return(0,l.xz)(t)?(0,ed.f)(e,b,"whitespace")(t):b(t)}function b(r){return 124===r?p(r):null===r||(0,l.Ch)(r)?i&&o===a?(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(r)):n(r):n(r)}function x(t){return e.enter("tableRow"),y(t)}function y(n){return 124===n?(e.enter("tableCellDivider"),e.consume(n),e.exit("tableCellDivider"),y):null===n||(0,l.Ch)(n)?(e.exit("tableRow"),t(n)):(0,l.xz)(n)?(0,ed.f)(e,y,"whitespace")(n):(e.enter("data"),v(n))}function v(t){return null===t||124===t||(0,l.z3)(t)?(e.exit("data"),y(t)):(e.consume(t),92===t?C:v)}function C(t){return 92===t||124===t?(e.consume(t),v):v(t)}}function eL(e,t){let n,i,r,l=-1,o=!0,a=0,u=[0,0,0,0],s=[0,0,0,0],c=!1,f=0,h=new eF;for(;++l<e.length;){let p=e[l],d=p[1];"enter"===p[0]?"tableHead"===d.type?(c=!1,0!==f&&(eM(h,t,f,n,i),i=void 0,f=0),n={type:"table",start:Object.assign({},d.start),end:Object.assign({},d.end)},h.add(l,0,[["enter",n,t]])):"tableRow"===d.type||"tableDelimiterRow"===d.type?(o=!0,r=void 0,u=[0,0,0,0],s=[0,l+1,0,0],c&&(c=!1,i={type:"tableBody",start:Object.assign({},d.start),end:Object.assign({},d.end)},h.add(l,0,[["enter",i,t]])),a="tableDelimiterRow"===d.type?2:i?3:1):a&&("data"===d.type||"tableDelimiterMarker"===d.type||"tableDelimiterFiller"===d.type)?(o=!1,0===s[2]&&(0!==u[1]&&(s[0]=s[1],r=eA(h,t,u,a,void 0,r),u=[0,0,0,0]),s[2]=l)):"tableCellDivider"===d.type&&(o?o=!1:(0!==u[1]&&(s[0]=s[1],r=eA(h,t,u,a,void 0,r)),s=[(u=s)[1],l,0,0])):"tableHead"===d.type?(c=!0,f=l):"tableRow"===d.type||"tableDelimiterRow"===d.type?(f=l,0!==u[1]?(s[0]=s[1],r=eA(h,t,u,a,l,r)):0!==s[1]&&(r=eA(h,t,s,a,l,r)),a=0):a&&("data"===d.type||"tableDelimiterMarker"===d.type||"tableDelimiterFiller"===d.type)&&(s[3]=l)}for(0!==f&&eM(h,t,f,n,i),h.consume(t.events),l=-1;++l<t.events.length;){let e=t.events[l];"enter"===e[0]&&"table"===e[1].type&&(e[1]._align=function(e,t){let n=!1,i=[];for(;t<e.length;){let r=e[t];if(n){if("enter"===r[0])"tableContent"===r[1].type&&i.push("tableDelimiterMarker"===e[t+1][1].type?"left":"none");else if("tableContent"===r[1].type){if("tableDelimiterMarker"===e[t-1][1].type){let e=i.length-1;i[e]="left"===i[e]?"center":"right"}}else if("tableDelimiterRow"===r[1].type)break}else"enter"===r[0]&&"tableDelimiterRow"===r[1].type&&(n=!0);t+=1}return i}(t.events,l))}return e}function eA(e,t,n,i,r,l){0!==n[0]&&(l.end=Object.assign({},eO(t.events,n[0])),e.add(n[0],0,[["exit",l,t]]));let o=eO(t.events,n[1]);if(l={type:1===i?"tableHeader":2===i?"tableDelimiter":"tableData",start:Object.assign({},o),end:Object.assign({},o)},e.add(n[1],0,[["enter",l,t]]),0!==n[2]){let r=eO(t.events,n[2]),l=eO(t.events,n[3]),o={type:"tableContent",start:Object.assign({},r),end:Object.assign({},l)};if(e.add(n[2],0,[["enter",o,t]]),2!==i){let i=t.events[n[2]],r=t.events[n[3]];if(i[1].end=Object.assign({},r[1].end),i[1].type="chunkText",i[1].contentType="text",n[3]>n[2]+1){let t=n[2]+1,i=n[3]-n[2]-1;e.add(t,i,[])}}e.add(n[3]+1,0,[["exit",o,t]])}return void 0!==r&&(l.end=Object.assign({},eO(t.events,r)),e.add(r,0,[["exit",l,t]]),l=void 0),l}function eM(e,t,n,i,r){let l=[],o=eO(t.events,n);r&&(r.end=Object.assign({},o),l.push(["exit",r,t])),i.end=Object.assign({},o),l.push(["exit",i,t]),e.add(n+1,0,l)}function eO(e,t){let n=e[t],i="enter"===n[0]?"start":"end";return n[1][i]}let eS={tokenize:function(e,t,n){let i=this;return function(t){return null===i.previous&&i._gfmTasklistFirstContentOfListItem?(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(t),e.exit("taskListCheckMarker"),r):n(t)};function r(t){return(0,l.z3)(t)?(e.enter("taskListCheckValueUnchecked"),e.consume(t),e.exit("taskListCheckValueUnchecked"),o):88===t||120===t?(e.enter("taskListCheckValueChecked"),e.consume(t),e.exit("taskListCheckValueChecked"),o):n(t)}function o(t){return 93===t?(e.enter("taskListCheckMarker"),e.consume(t),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),a):n(t)}function a(i){return(0,l.Ch)(i)?t(i):(0,l.xz)(i)?e.check({tokenize:ej},t,n)(i):n(i)}}};function ej(e,t,n){return(0,ed.f)(e,function(e){return null===e?n(e):t(e)},"whitespace")}let eE={};function eR(e){let t=e||eE,n=this.data(),i=n.micromarkExtensions||(n.micromarkExtensions=[]),r=n.fromMarkdownExtensions||(n.fromMarkdownExtensions=[]),l=n.toMarkdownExtensions||(n.toMarkdownExtensions=[]);i.push((0,G.W)([{text:eo},{document:{91:{tokenize:ex,continuation:{tokenize:ey},exit:ev}},text:{91:{tokenize:eb},93:{add:"after",tokenize:em,resolveTo:ek}}},function(e){let t=(e||{}).singleTilde,n={tokenize:function(e,n,i){let r=this.previous,l=this.events,o=0;return function(a){return 126===r&&"characterEscape"!==l[l.length-1][1].type?i(a):(e.enter("strikethroughSequenceTemporary"),function l(a){let u=(0,ew.r)(r);if(126===a)return o>1?i(a):(e.consume(a),o++,l);if(o<2&&!t)return i(a);let s=e.exit("strikethroughSequenceTemporary"),c=(0,ew.r)(a);return s._open=!c||2===c&&!!u,s._close=!u||2===u&&!!c,n(a)}(a))}},resolveAll:function(e,t){let n=-1;for(;++n<e.length;)if("enter"===e[n][0]&&"strikethroughSequenceTemporary"===e[n][1].type&&e[n][1]._close){let i=n;for(;i--;)if("exit"===e[i][0]&&"strikethroughSequenceTemporary"===e[i][1].type&&e[i][1]._open&&e[n][1].end.offset-e[n][1].start.offset==e[i][1].end.offset-e[i][1].start.offset){e[n][1].type="strikethroughSequence",e[i][1].type="strikethroughSequence";let r={type:"strikethrough",start:Object.assign({},e[i][1].start),end:Object.assign({},e[n][1].end)},l={type:"strikethroughText",start:Object.assign({},e[i][1].end),end:Object.assign({},e[n][1].start)},o=[["enter",r,t],["enter",e[i][1],t],["exit",e[i][1],t],["enter",l,t]],a=t.parser.constructs.insideSpan.null;a&&(0,eC.d)(o,o.length,0,(0,eD.C)(a,e.slice(i+1,n),t)),(0,eC.d)(o,o.length,0,[["exit",l,t],["enter",e[n][1],t],["exit",e[n][1],t],["exit",r,t]]),(0,eC.d)(e,i-1,n-i+3,o),n=i+o.length-2;break}}for(n=-1;++n<e.length;)"strikethroughSequenceTemporary"===e[n][1].type&&(e[n][1].type="data");return e}};return null==t&&(t=!0),{text:{126:n},insideSpan:{null:[n]},attentionMarkers:{null:[126]}}}(t),{flow:{null:{tokenize:ez,resolveAll:eL}}},{text:{91:eS}}])),r.push([{transforms:[m],enter:{literalAutolink:c,literalAutolinkEmail:f,literalAutolinkHttp:f,literalAutolinkWww:f},exit:{literalAutolink:g,literalAutolinkEmail:d,literalAutolinkHttp:h,literalAutolinkWww:p}},{enter:{gfmFootnoteDefinition:v,gfmFootnoteDefinitionLabelString:C,gfmFootnoteCall:F,gfmFootnoteCallString:z},exit:{gfmFootnoteDefinition:D,gfmFootnoteDefinitionLabelString:w,gfmFootnoteCall:A,gfmFootnoteCallString:L}},{canContainEols:["delete"],enter:{strikethrough:E},exit:{strikethrough:R}},{enter:{table:$,tableData:U,tableHeader:U,tableRow:q},exit:{codeText:X,table:W,tableData:V,tableHeader:V,tableRow:V}},{exit:{taskListCheckValueChecked:J,taskListCheckValueUnchecked:J,paragraph:N}}]),l.push({extensions:[{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:u,notInConstruct:s},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:u,notInConstruct:s},{character:":",before:"[ps]",after:"\\/",inConstruct:u,notInConstruct:s}]},{unsafe:[{character:"[",inConstruct:["phrasing","label","reference"]}],handlers:{footnoteDefinition:O,footnoteReference:M}},{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:j}],handlers:{delete:T}},function(e){let t=e||{},n=t.tableCellPadding,i=t.tablePipeAlign,r=t.stringLength,l=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:"\n",inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:function(e,t,n){let i=P(e,t,n);return n.stack.includes("tableCell")&&(i=i.replace(/\|/g,"\\$&")),i},table:function(e,t,n,i){return a(function(e,t,n){let i=e.children,r=-1,l=[],o=t.enter("table");for(;++r<i.length;)l[r]=u(i[r],t,n);return o(),l}(e,n,i),e.align)},tableCell:o,tableRow:function(e,t,n,i){let r=a([u(e,n,i)]);return r.slice(0,r.indexOf("\n"))}}};function o(e,t,n,i){let r=n.enter("tableCell"),o=n.enter("phrasing"),a=n.containerPhrasing(e,{...i,before:l,after:l});return o(),r(),a}function a(e,t){return function(e,t={}){let n=(t.align||[]).concat(),i=t.stringLength||I,r=[],l=[],o=[],a=[],u=0,s=-1;for(;++s<e.length;){let n=[],r=[],f=-1;for(e[s].length>u&&(u=e[s].length);++f<e[s].length;){var c;let l=null==(c=e[s][f])?"":String(c);if(!1!==t.alignDelimiters){let e=i(l);r[f]=e,(void 0===a[f]||e>a[f])&&(a[f]=e)}n.push(l)}l[s]=n,o[s]=r}let f=-1;if("object"==typeof n&&"length"in n)for(;++f<u;)r[f]=_(n[f]);else{let e=_(n);for(;++f<u;)r[f]=e}f=-1;let h=[],p=[];for(;++f<u;){let e=r[f],n="",i="";99===e?(n=":",i=":"):108===e?n=":":114===e&&(i=":");let l=!1===t.alignDelimiters?1:Math.max(1,a[f]-n.length-i.length),o=n+"-".repeat(l)+i;!1!==t.alignDelimiters&&((l=n.length+l+i.length)>a[f]&&(a[f]=l),p[f]=l),h[f]=o}l.splice(1,0,h),o.splice(1,0,p),s=-1;let d=[];for(;++s<l.length;){let e=l[s],n=o[s];f=-1;let i=[];for(;++f<u;){let l=e[f]||"",o="",s="";if(!1!==t.alignDelimiters){let e=a[f]-(n[f]||0),t=r[f];114===t?o=" ".repeat(e):99===t?e%2?(o=" ".repeat(e/2+.5),s=" ".repeat(e/2-.5)):s=o=" ".repeat(e/2):s=" ".repeat(e)}!1===t.delimiterStart||f||i.push("|"),!1!==t.padding&&!(!1===t.alignDelimiters&&""===l)&&(!1!==t.delimiterStart||f)&&i.push(" "),!1!==t.alignDelimiters&&i.push(o),i.push(l),!1!==t.alignDelimiters&&i.push(s),!1!==t.padding&&i.push(" "),(!1!==t.delimiterEnd||f!==u-1)&&i.push("|")}d.push(!1===t.delimiterEnd?i.join("").replace(/ +$/,""):i.join(""))}return d.join("\n")}(e,{align:t,alignDelimiters:i,padding:n,stringLength:r})}function u(e,t,n){let i=e.children,r=-1,l=[],a=t.enter("tableRow");for(;++r<i.length;)l[r]=o(i[r],e,t,n);return a(),l}}(t),{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:Q}}]})}}}]);