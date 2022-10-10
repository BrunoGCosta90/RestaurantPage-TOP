(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(444),t.b),u=i()(o()),l=s()(d);u.push([e.id,":root {\n    --yellow : rgb(214, 214, 47);\n    --background-yellow: rgb(175, 175, 43);\n    --background-image: url("+l+");\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n    /* background-size:cover;\n    background-repeat: no-repeat; */\n\n    /*color: rgb(236, 8, 8);*/\n    color: var(--yellow);\n    font-weight: 800;\n    text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;\n}\n\n.content {\n    height: 100vh;\n    width: 100vw;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.menu-tabs {\n    display: flex;\n    justify-content: center;\n    border-bottom: 2px solid var(--yellow);\n}\n\n.menu-tabs > div {\n    margin: 10px;\n    padding: 5px;\n    width: 25px;\n    border: 2px solid var(--yellow);\n    border-radius: 12px;\n    /* background-color: rgb(235, 235, 92); */\n    font-size: 20px;\n    /* font-weight: 800; */\n    width: 100px;\n    text-align: center;\n}\n\n.selected {\n    background-image: var(--background-image);\n}\n\n.menu-tabs > div:hover {\n    cursor: pointer;\n    /* background-color: var(--background-yellow); */\n    background-image: none;\n    background-color: white;\n}\n\n#main {\n    display: flex;\n    /* justify-content: center; */\n    flex-direction: column;\n    align-items: center;\n}\n\n.title {\n    font-size: 25px;\n    text-align: center;\n}\n\n.card {\n    /* background-color: rgb(214, 214, 47); */\n    width: 70vw;\n    height: fit-content;\n    padding: 10px;\n    border-radius: 12px;\n    border: 2px solid var(--yellow);\n    margin: 10px;\n    background-image: var(--background-image);\n}\n\n\nfooter {\n    text-align: center;\n    border-top: 2px solid var(--yellow);\n}\n\nfooter > div {\n    margin: 5px;\n\n}",""]);const p=u},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=t(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var u=t(a[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},444:(e,n,t)=>{e.exports=t.p+"3f8ef0b4f45accb446b9.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const e=t.p+"2ff5ccdf46c121dcc5e6.jpg";var n=t(379),r=t.n(n),o=t(795),a=t.n(o),i=t(569),c=t.n(i),s=t(565),d=t.n(s),u=t(216),l=t.n(u),p=t(589),m=t.n(p),f=t(426),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=l(),r()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals,(()=>{const n=document.getElementById("content"),t=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),c=document.createElement("footer"),s=document.createElement("div"),d=document.createElement("a");t.appendChild(r),r.textContent="Home",r.id="home-button",t.appendChild(o),o.textContent="Menu",o.id="menu-button",t.appendChild(a),a.textContent="Contact",a.id="menu.contact",n.appendChild(t),i.id="main",n.appendChild(i),d.text="GitHub",d.href="https://github.com/BrunoGCosta90",s.textContent="Bruno Costa @ ",s.appendChild(d),c.appendChild(s),n.appendChild(c),n.style.backgroundImage=`url(${e})`,n.classList.add("content"),t.classList.add("menu-tabs")})(),(()=>{document.getElementById("home-button").classList.add("selected");const e=document.createElement("div");e.textContent="Welcome to The Cheese Bun!",e.classList.add("title","card"),document.getElementById("main").appendChild(e);const n=document.createElement("div"),t=document.createElement("p"),r=document.createElement("p");t.textContent="This is the home to the best cheese buns of the whole world!",t.classList.add("title"),n.appendChild(t),r.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus commodo viverra maecenas accumsan lacus. Auctor eu augue ut lectus arcu bibendum at varius. Faucibus nisl tincidunt eget nullam non. Nunc mattis enim ut tellus elementum sagittis vitae. Dictum fusce ut placerat orci nulla pellentesque dignissim. Eu ultrices vitae auctor eu augue ut.",n.classList.add("card"),n.appendChild(r),document.getElementById("main").appendChild(n)})()})()})();