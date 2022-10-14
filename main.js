(()=>{"use strict";var e={890:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(81),o=n.n(r),a=n(645),c=n.n(a),i=n(667),d=n.n(i),s=new URL(n(396),n.b),l=c()(o()),u=d()(s);l.push([e.id,":root {\n    --yellow : rgb(214, 214, 47);\n    --background-yellow: rgb(175, 175, 43);\n    --background-image: url("+u+");\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n    /* background-size:cover;\n    background-repeat: no-repeat; */\n\n    /*color: rgb(236, 8, 8);*/\n    color: var(--yellow);\n    font-weight: 800;\n    text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;\n}\n\n.content {\n    height: 100vh;\n    width: 100vw;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.menu-tabs {\n    display: flex;\n    justify-content: center;\n    border-bottom: 2px solid var(--yellow);\n}\n\n.menu-tabs > div {\n    margin: 10px;\n    padding: 5px;\n    width: 25px;\n    border: 2px solid var(--yellow);\n    border-radius: 12px;\n    /* background-color: rgb(235, 235, 92); */\n    font-size: 20px;\n    /* font-weight: 800; */\n    width: 100px;\n    text-align: center;\n}\n\n.selected {\n    background-image: var(--background-image);\n}\n\n.menu-tabs > div:hover {\n    cursor: pointer;\n    /* background-color: var(--background-yellow); */\n    background-image: none;\n    background-color: white;\n}\n\n#main {\n    display: flex;\n    /* justify-content: center; */\n    flex-direction: column;\n    align-items: center;\n}\n\n.title {\n    font-size: 25px;\n    text-align: center;\n}\n\n.centered {\n    text-align: center;\n}\n\n.card {\n    /* background-color: rgb(214, 214, 47); */\n    width: 70vw;\n    height: fit-content;\n    padding: 10px;\n    border-radius: 12px;\n    border: 2px solid var(--yellow);\n    margin: 10px;\n    background-image: var(--background-image);\n}\n\n\nfooter {\n    text-align: center;\n    border-top: 2px solid var(--yellow);\n}\n\nfooter > div {\n    margin: 5px;\n}\n\na {\n    color: var(--yellow);\n    text-decoration: none;\n}",""]);const p=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var d=e[i],s=r.base?d[0]+r.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var h=o(m,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:h,references:1})}c.push(u)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var d=r(e,o),s=0;s<a.length;s++){var l=n(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},396:(e,t,n)=>{e.exports=n.p+"3f8ef0b4f45accb446b9.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{const e=n.p+"2ff5ccdf46c121dcc5e6.jpg",t=e=>{document.getElementById("header").querySelectorAll("*").forEach((t=>{t.id==e?t.classList.add("selected"):t.classList.remove("selected")}))},r=()=>{document.getElementById("main").querySelectorAll("*").forEach((e=>e.remove()))},o=()=>{const e=document.createElement("div");e.textContent="Welcome to The Cheese Bun!",e.classList.add("title","card"),document.getElementById("main").appendChild(e);const t=document.createElement("div"),n=document.createElement("p"),r=document.createElement("p");n.textContent="This is the home to the best cheese buns of the whole world!",n.classList.add("title"),t.appendChild(n),r.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus commodo viverra maecenas accumsan lacus. Auctor eu augue ut lectus arcu bibendum at varius. Faucibus nisl tincidunt eget nullam non. Nunc mattis enim ut tellus elementum sagittis vitae. Dictum fusce ut placerat orci nulla pellentesque dignissim. Eu ultrices vitae auctor eu augue ut.",t.classList.add("card"),t.appendChild(r),document.getElementById("main").appendChild(t)};var a=n(379),c=n.n(a),i=n(795),d=n.n(i),s=n(569),l=n.n(s),u=n(565),p=n.n(u),m=n(216),h=n.n(m),f=n(589),g=n.n(f),v=n(890),b={};b.styleTagTransform=g(),b.setAttributes=p(),b.insert=l().bind(null,"head"),b.domAPI=d(),b.insertStyleElement=h(),c()(v.Z,b),v.Z&&v.Z.locals&&v.Z.locals,(()=>{const n=document.getElementById("content"),a=document.createElement("div"),c=document.createElement("div"),i=document.createElement("div"),d=document.createElement("div"),s=document.createElement("div"),l=document.createElement("footer"),u=document.createElement("div"),p=document.createElement("a");a.appendChild(c),c.textContent="Home",c.id="home-button",c.classList.add("selected"),a.appendChild(i),i.textContent="Menu",i.id="menu-button",a.appendChild(d),d.textContent="Contact",d.id="contact-button",n.appendChild(a),s.id="main",n.appendChild(s),p.text="GitHub",p.href="https://github.com/BrunoGCosta90",u.textContent="Bruno Costa @ ",u.appendChild(p),l.appendChild(u),n.appendChild(l),n.style.backgroundImage=`url(${e})`,n.classList.add("content"),a.classList.add("menu-tabs"),a.id="header",a.addEventListener("click",(e=>{switch(e.target.id){case"home-button":r(),t(e.target.id),o();break;case"menu-button":r(),t(e.target.id),(()=>{const e=document.getElementById("main"),t=document.createElement("div");t.textContent="Test",t.classList.add("card"),e.appendChild(t)})();break;case"contact-button":r(),t(e.target.id),(()=>{const e=document.getElementById("main"),t=document.createElement("div");t.classList.add("card");const n=document.createElement("p");n.textContent="Phone",n.classList.add("title");const r=document.createElement("p");r.textContent="+55 011 55555-5555",r.classList.add("centered"),t.appendChild(n),t.appendChild(r),e.appendChild(t);const o=document.createElement("div");o.classList.add("card");const a=document.createElement("p");a.textContent="Adress",a.classList.add("title");const c=document.createElement("p");c.textContent="31 Cheese Asphalt Ave\r\nCheeseland, CC 55555",c.style.whiteSpace="pre",c.classList.add("centered"),o.appendChild(a),o.appendChild(c),e.appendChild(o)})();break;default:return}}))})(),o()})()})();