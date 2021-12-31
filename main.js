(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>m});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(729),t.b),l=new URL(t(601),t.b),p=i()(o()),u=s()(d),f=s()(l);p.push([n.id,"@font-face {\n    font-family: PassionOne;\n    src: url("+u+") format('ttf');\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    background-color: rgb(0, 17, 168);\n    margin: 0;\n    min-height: 100vh;\n    \n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(0, 0, 0, 0.384);\n    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n    font-family: PassionOne, sans-serif;\n}\n\n.header-img {\n    cursor: pointer;\n}\n\n.header-img:hover {\n    -webkit-transform: scale(1.05);\n    -moz-transform: scale(1.05);\n    transform: scale(1.05);\n}\n\n.header-img:active {\n    -webkit-transform: scale(1.15);\n    -moz-transform: scale(1.15);\n    transform: scale(1.15);\n}\n\n\nh1 {\n    margin-top: -15px;\n    font-size: 40px;\n    color: rgb(255, 194, 80);\n}\n\nh2 {\n    font-size: 35px;\n    color: rgb(255, 194, 80);\n    font-family: PassionOne, sans-serif;\n    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n}\n\n.nav {\n    display:flex;\n    gap: 300px;\n    padding: 20px;\n}\n\nbutton {\n    background-color: transparent;\n    border: none;\n    font-size: 50px;\n    color: rgb(255, 194, 80);\n}\n\nbutton:hover {\n    color:rgb(150, 100, 7)\n}\n\nbutton:active {\n    color:rgb(80, 52, 0)\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n    flex-grow: 1;\n    background-image: url("+f+");\n    background-size: 100% 100%;\n}\n\n.about {\n    display: flex;\n    justify-content: center;\n    background-color: rgba(0, 0, 0, 0.801);\n    min-height: 400px;\n    padding: 50px;\n    margin-top: 200px;\n}\n\n.about p {\n    max-width: 65%;\n    color: blanchedalmond;\n    font-family: PassionOne, sans-serif;\n    font-size: 35px;\n    color: white;\n    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n}\n\n.menu {\n    display: flex;\n    flex-wrap: wrap;\n    background-color: rgba(0, 0, 0, 0.801);\n    min-height: 400px;\n    justify-content: center;\n    justify-self: flex-start;\n    max-width: 75%;\n    margin: 100px 0px 100px 0px;\n    padding: 50px;\n}\n\n.menu-item-wrapper {\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: rgb(255, 194, 80);\n    border: 3px solid rgb(255, 194, 80);;\n    margin: 30px;\n    background-color: rgba(0, 0, 0, 0.726);\n}\n\n.description {\n    max-width: 400px;\n    font-size: 25px;\n    font-family: PassionOne, sans-serif;\n}\n\n.menu-img {\n    border: 6px solid rgb(255, 194, 80);\n    border-radius: 5px;\n    margin: 25px;\n}\n\n.image-and-text {\n    display: flex;\n    align-items: center;\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 1;\n    background-color: rgba(0, 0, 0, 0.384);\n    padding: 15px;\n    font-family: PassionOne, sans-serif;\n    font-size: 20px;\n    color: rgb(255, 194, 80);\n}\n",""]);const m=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},729:(n,e,t)=>{n.exports=t.p+"67bb2f1eb39926a495bd.ttf"},601:(n,e,t)=>{n.exports=t.p+"0e94b881c1036f46e5a2.jpg"},173:(n,e,t)=>{n.exports=t.p+"f3e92942ca0afc23ff4a.png"},155:(n,e,t)=>{n.exports=t.p+"e5f423acd4c3d69bd10c.jpeg"},804:(n,e,t)=>{n.exports=t.p+"98b636d2b22109546222.jpeg"},56:(n,e,t)=>{n.exports=t.p+"c789c4c13363c3b14e05.jpeg"},21:(n,e,t)=>{n.exports=t.p+"0f493547c90bf70c8ab3.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,(()=>{var n=t(173),e=t(379),r=t.n(e),o=t(795),a=t.n(o),i=t(569),c=t.n(i),s=t(565),d=t.n(s),l=t(216),p=t.n(l),u=t(589),f=t.n(u),m=t(426),h={};function g(){const n=document.createElement("div");n.classList.add("about"),n.id="about";const e=document.createElement("p");return e.textContent="South Park has a restaurant and you should definitely eat there! You totally won't be disappointed and we are ensuring that nothing malicious is in your food! Enjoy your favorite meal with our friends Kyle, Stan, Kenny (if alive) and especially Cartman. Our food is cooked freshly by Chef... at least it used to be.",n.appendChild(e),n}function b(){const n=document.getElementById("main");return n.innerHTML="",n.appendChild(g()),n}h.styleTagTransform=f(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=p(),r()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var x=t(21),y=t(804),v=t(155),C=t(56);function k(n,e,t,r){const o=document.createElement("div");o.classList.add("menu-item-wrapper");const a=document.createElement("h2");a.classList.add("menu-title"),a.textContent=t,o.appendChild(a);const i=document.createElement("div");i.classList.add("image-and-text");const c=new Image;c.src=n,c.height=e,c.classList.add("menu-img"),i.appendChild(c);const s=document.createElement("p");return s.textContent=r,s.classList.add("description"),i.appendChild(s),o.appendChild(i),o}function w(){const e=document.createElement("header"),t=new Image;t.src=n,t.height=150,t.classList.add("header-img"),t.addEventListener("click",(function(){b()}));const r=document.createElement("h1");return r.textContent="The Restaurant",e.appendChild(t),e.appendChild(r),e.appendChild(function(){const n=document.createElement("div");n.classList.add("nav");const e=document.createElement("button");e.classList.add("home-btn"),e.textContent="About",e.addEventListener("click",(function(){b()}));const t=document.createElement("button");t.classList.add("menu-btn"),t.textContent="Menu",t.addEventListener("click",(function(){console.log("hele"),function(){const n=document.getElementById("main");n.innerHTML="",n.appendChild(function(){const n=document.createElement("div");n.classList.add("menu");const e=k(x,400,"Fish Sticks: $4","Do you like fish sticks? Do you like putting fish sticks in your mouth? What are you, a gay fish?"),t=k(y,400,"Chili $7","A delicious chili with a secret ingredient."),r=k(v,400,"Skinless KFC Chicken Thighs: $0","We give out the chicken for free, because nobody wants it without the skin. Somebody ate all the fucking skin. WTF!"),o=k(C,400,"Extra Creme Fraiche: $1","And we're gonna top that with a little Creme Fraiche");return n.appendChild(e),n.appendChild(t),n.appendChild(r),n.appendChild(o),n}())}()}));const r=document.createElement("button");return r.classList.add("home-btn"),r.textContent="Contact",r.addEventListener("click",(function(){console.log("hele")})),n.appendChild(e),n.appendChild(t),n.appendChild(r),n}()),e}!function(){const n=document.body;n.appendChild(w()),n.appendChild(function(){const n=document.createElement("main");return n.id="main",n.appendChild(g()),n}()),n.appendChild(function(){const n=document.createElement("footer");return n.textContent="Made by Bristolero",n}())}()})()})();