var __awaiter=this&&this.__awaiter||function(e,t,r,o){function n(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function a(e){try{p(o.next(e))}catch(e){i(e)}}function s(e){try{p(o["throw"](e))}catch(e){i(e)}}function p(e){e.done?r(e.value):n(e.value).then(a,s)}p((o=o.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,n,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return p([e,t])}}function p(a){if(o)throw new TypeError("Generator is already executing.");while(r)try{if(o=1,n&&(i=a[0]&2?n["return"]:a[0]?n["throw"]||((i=n["return"])&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;if(n=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;n=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){r.label=a[1];break}if(a[0]===6&&r.label<i[1]){r.label=i[1];i=a;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(a);break}if(i[2])r.ops.pop();r.trys.pop();continue}a=t.call(e,r)}catch(e){a=[6,e];n=0}finally{o=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */System.register(["./p-1d420562.system.js","./p-e2d705bc.system.js","./p-aaa0a139.system.js","./p-25608353.system.js","./p-f00e19ae.system.js","./p-c38d92b7.system.js","./p-40aa873f.system.js","./p-a44c2ef0.system.js","./p-8b8d1fdb.system.js"],(function(e){"use strict";var t,r,o,n,i,a,s,p,c,d,l,f,v,u,h,g,m,b,w,y,x,k;return{setters:[function(e){t=e.r;r=e.e;o=e.h;n=e.H;i=e.i},function(e){a=e.b;s=e.a},function(e){p=e.C;c=e.a;d=e.d},function(e){l=e.r;f=e.g;v=e.a},function(e){u=e.B;h=e.e;g=e.d;m=e.j;b=e.f;w=e.g},function(e){y=e.g},function(e){x=e.e},function(e){k=e.c},function(){}],execute:function(){var P=this;var T=function(e){if(!e){return{arrowWidth:0,arrowHeight:0}}var t=e.getBoundingClientRect(),r=t.width,o=t.height;return{arrowWidth:r,arrowHeight:o}};var D=function(e,t,r){var o=t.getBoundingClientRect();var n=o.height;var i=o.width;if(e==="cover"&&r){var a=r.getBoundingClientRect();i=a.width}return{contentWidth:i,contentHeight:n}};var E=function(e,t,r,o){var n=[];var i=f(o);var a=i.querySelector(".popover-content");switch(t){case"hover":n=[{eventName:"mouseenter",callback:function(t){var o=document.elementFromPoint(t.clientX,t.clientY);if(o===e){return}r.dismiss(undefined,undefined,false)}}];break;case"context-menu":case"click":default:n=[{eventName:"click",callback:function(t){var o=t.target;var n=o.closest("[data-ion-popover-trigger]");if(n===e){t.stopPropagation();return}r.dismiss(undefined,undefined,false)}}];break}n.forEach((function(e){var t=e.eventName,r=e.callback;return a.addEventListener(t,r)}));return function(){n.forEach((function(e){var t=e.eventName,r=e.callback;return a.removeEventListener(t,r)}))}};var S=function(e,t,r){var o=[];switch(t){case"hover":var n;o=[{eventName:"mouseenter",callback:function(e){return __awaiter(P,void 0,void 0,(function(){return __generator(this,(function(t){e.stopPropagation();if(n){clearTimeout(n)}n=setTimeout((function(){l((function(){r.presentFromTrigger(e);n=undefined}))}),100);return[2]}))}))}},{eventName:"mouseleave",callback:function(e){if(n){clearTimeout(n)}var t=e.relatedTarget;if(!t){return}if(t.closest("ion-popover")!==r){r.dismiss(undefined,undefined,false)}}},{eventName:"click",callback:function(e){return e.stopPropagation()}},{eventName:"ionPopoverActivateTrigger",callback:function(e){return r.presentFromTrigger(e,true)}}];break;case"context-menu":o=[{eventName:"contextmenu",callback:function(e){e.preventDefault();r.presentFromTrigger(e)}},{eventName:"click",callback:function(e){return e.stopPropagation()}},{eventName:"ionPopoverActivateTrigger",callback:function(e){return r.presentFromTrigger(e,true)}}];break;case"click":default:o=[{eventName:"click",callback:function(e){return r.presentFromTrigger(e)}},{eventName:"ionPopoverActivateTrigger",callback:function(e){return r.presentFromTrigger(e,true)}}];break}o.forEach((function(t){var r=t.eventName,o=t.callback;return e.addEventListener(r,o)}));e.setAttribute("data-ion-popover-trigger","true");return function(){o.forEach((function(t){var r=t.eventName,o=t.callback;return e.removeEventListener(r,o)}));e.removeAttribute("data-ion-popover-trigger")}};var I=function(e,t){if(!t||t.tagName!=="ION-ITEM"){return-1}return e.findIndex((function(e){return e===t}))};var A=function(e,t){var r=I(e,t);return e[r+1]};var _=function(e,t){var r=I(e,t);return e[r-1]};var L=function(e){var t=f(e);var r=t.querySelector("button");if(r){l((function(){return r.focus()}))}};var C=function(e){return e.hasAttribute("data-ion-popover-trigger")};var W=function(e){var t=function(t){return __awaiter(P,void 0,void 0,(function(){var r,o,n,i,a,s,p,c,d;return __generator(this,(function(l){switch(l.label){case 0:r=document.activeElement;o=[];try{o=Array.from(e.querySelectorAll("ion-item:not(ion-popover ion-popover *):not([disabled])"))}catch(e){}n=t.key;switch(n){case"ArrowLeft":return[3,1];case"ArrowDown":return[3,3];case"ArrowUp":return[3,4];case"Home":return[3,5];case"End":return[3,6];case"ArrowRight":return[3,7];case" ":return[3,7];case"Enter":return[3,7]}return[3,8];case 1:return[4,e.getParentPopover()];case 2:i=l.sent();if(i){e.dismiss(undefined,undefined,false)}return[3,8];case 3:t.preventDefault();a=A(o,r);if(a!==undefined){L(a)}return[3,8];case 4:t.preventDefault();s=_(o,r);if(s!==undefined){L(s)}return[3,8];case 5:t.preventDefault();p=o[0];if(p!==undefined){L(p)}return[3,8];case 6:t.preventDefault();c=o[o.length-1];if(c!==undefined){L(c)}return[3,8];case 7:if(r&&C(r)){d=new CustomEvent("ionPopoverActivateTrigger");r.dispatchEvent(d)}return[3,8];case 8:return[2]}}))}))};e.addEventListener("keydown",t);return function(){return e.removeEventListener("keydown",t)}};var j=function(e,t,r,o,n,i,a,s,p,c,d){var l;var f={top:0,left:0,width:0,height:0};switch(i){case"event":if(!d){return p}var v=d;f={top:v.clientY,left:v.clientX,width:1,height:1};break;case"trigger":default:var u=d;var h=c||((l=u===null||u===void 0?void 0:u.detail)===null||l===void 0?void 0:l.ionShadowTarget)||(u===null||u===void 0?void 0:u.target);if(!h){return p}var g=h.getBoundingClientRect();f={top:g.top,left:g.left,width:g.width,height:g.height};break}var m=Y(a,f,t,r,o,n,e);var b=z(s,a,f,t,r);var w=m.top+b.top;var y=m.left+b.left;var x=X(a,o,n,w,y,t,r,e),k=x.arrowTop,P=x.arrowLeft;var T=O(a,s,e),D=T.originX,E=T.originY;return{top:w,left:y,referenceCoordinates:f,arrowTop:k,arrowLeft:P,originX:D,originY:E}};var O=function(e,t,r){switch(e){case"top":return{originX:q(t),originY:"bottom"};case"bottom":return{originX:q(t),originY:"top"};case"left":return{originX:"right",originY:N(t)};case"right":return{originX:"left",originY:N(t)};case"start":return{originX:r?"left":"right",originY:N(t)};case"end":return{originX:r?"right":"left",originY:N(t)}}};var q=function(e){switch(e){case"start":return"left";case"center":return"center";case"end":return"right"}};var N=function(e){switch(e){case"start":return"top";case"center":return"center";case"end":return"bottom"}};var X=function(e,t,r,o,n,i,a,s){var p={arrowTop:o+a/2-t/2,arrowLeft:n+i-t/2};var c={arrowTop:o+a/2-t/2,arrowLeft:n-t*1.5};switch(e){case"top":return{arrowTop:o+a,arrowLeft:n+i/2-t/2};case"bottom":return{arrowTop:o-r,arrowLeft:n+i/2-t/2};case"left":return p;case"right":return c;case"start":return s?c:p;case"end":return s?p:c;default:return{arrowTop:0,arrowLeft:0}}};var Y=function(e,t,r,o,n,i,a){var s={top:t.top,left:t.left-r-n};var p={top:t.top,left:t.left+t.width+n};switch(e){case"top":return{top:t.top-o-i,left:t.left};case"right":return p;case"bottom":return{top:t.top+t.height+i,left:t.left};case"left":return s;case"start":return a?p:s;case"end":return a?s:p}};var z=function(e,t,r,o,n){switch(e){case"center":return H(t,r,o,n);case"end":return B(t,r,o,n);case"start":default:return{top:0,left:0}}};var B=function(e,t,r,o){switch(e){case"start":case"end":case"left":case"right":return{top:-(o-t.height),left:0};case"top":case"bottom":default:return{top:0,left:-(r-t.width)}}};var H=function(e,t,r,o){switch(e){case"start":case"end":case"left":case"right":return{top:-(o/2-t.height/2),left:0};case"top":case"bottom":default:return{top:0,left:-(r/2-t.width/2)}}};var F=function(e,t,r,o,n,i,a,s,p,c,d,l,f,v,u){if(f===void 0){f=0}if(v===void 0){v=0}if(u===void 0){u=0}var h=f;var g=v;var m=r;var b=t;var w;var y=c;var x=d;var k=false;var P=false;var T=l?l.top+l.height:i/2-s/2;var D=l?l.height:0;var E=false;if(m<o+p){m=o;k=true;y="left"}else if(a+o+m+p>n){P=true;m=n-a-o;y="right"}if(T+D+s>i&&(e==="top"||e==="bottom")){if(T-s>0){b=T-s-D-(u-1);h=b+s;x="bottom";E=true}else{w=o}}return{top:b,left:m,bottom:w,originX:y,originY:x,checkSafeAreaLeft:k,checkSafeAreaRight:P,arrowTop:h,arrowLeft:g,addPopoverBottomClass:E}};var V=function(e,t,r,o){if(t===void 0){t=false}if(!r&&!o){return false}if(e!=="top"&&e!=="bottom"&&t){return false}return true};var R=5;var K=function(e,t){var r;var o=t.event,n=t.size,i=t.trigger,a=t.reference,s=t.side,p=t.align;var c=e.ownerDocument;var d=c.dir==="rtl";var l=c.defaultView.innerWidth;var v=c.defaultView.innerHeight;var u=f(e);var h=u.querySelector(".popover-content");var g=u.querySelector(".popover-arrow");var m=i||((r=o===null||o===void 0?void 0:o.detail)===null||r===void 0?void 0:r.ionShadowTarget)||(o===null||o===void 0?void 0:o.target);var b=D(n,h,m),w=b.contentWidth,y=b.contentHeight;var x=T(g),P=x.arrowWidth,E=x.arrowHeight;var S={top:v/2-y/2,left:l/2-w/2,originX:d?"right":"left",originY:"top"};var I=j(d,w,y,P,E,a,s,p,S,i,o);var A=n==="cover"?0:R;var _=n==="cover"?0:25;var L=F(s,I.top,I.left,A,l,v,w,y,_,I.originX,I.originY,I.referenceCoordinates,I.arrowTop,I.arrowLeft,E),C=L.originX,W=L.originY,O=L.top,q=L.left,N=L.bottom,X=L.checkSafeAreaLeft,Y=L.checkSafeAreaRight,z=L.arrowTop,B=L.arrowLeft,H=L.addPopoverBottomClass;var K=k();var G=k();var M=k();G.addElement(u.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);M.addElement(u.querySelector(".popover-wrapper")).fromTo("opacity",.01,1);return K.easing("ease").duration(100).beforeAddWrite((function(){if(n==="cover"){e.style.setProperty("--width","".concat(w,"px"))}if(H){e.classList.add("popover-bottom")}if(N!==undefined){h.style.setProperty("bottom","".concat(N,"px"))}var t=" + var(--ion-safe-area-left, 0)";var r=" - var(--ion-safe-area-right, 0)";var a="".concat(q,"px");if(X){a="".concat(q,"px").concat(t)}if(Y){a="".concat(q,"px").concat(r)}h.style.setProperty("top","calc(".concat(O,"px + var(--offset-y, 0))"));h.style.setProperty("left","calc(".concat(a," + var(--offset-x, 0))"));h.style.setProperty("transform-origin","".concat(W," ").concat(C));if(g!==null){var p=I.top!==O||I.left!==q;var c=V(s,p,o,i);if(c){g.style.setProperty("top","calc(".concat(z,"px + var(--offset-y, 0))"));g.style.setProperty("left","calc(".concat(B,"px + var(--offset-x, 0))"))}else{g.style.setProperty("display","none")}}})).addAnimation([G,M])};var G=function(e){var t=f(e);var r=t.querySelector(".popover-content");var o=t.querySelector(".popover-arrow");var n=k();var i=k();var a=k();i.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);a.addElement(t.querySelector(".popover-wrapper")).fromTo("opacity",.99,0);return n.easing("ease").afterAddWrite((function(){e.style.removeProperty("--width");e.classList.remove("popover-bottom");r.style.removeProperty("top");r.style.removeProperty("left");r.style.removeProperty("bottom");r.style.removeProperty("transform-origin");if(o){o.style.removeProperty("top");o.style.removeProperty("left");o.style.removeProperty("display")}})).duration(300).addAnimation([i,a])};var M=12;var U=function(e,t){var r;var o=t.event,n=t.size,i=t.trigger,a=t.reference,s=t.side,p=t.align;var c=e.ownerDocument;var d=c.dir==="rtl";var l=c.defaultView.innerWidth;var v=c.defaultView.innerHeight;var u=f(e);var h=u.querySelector(".popover-content");var g=i||((r=o===null||o===void 0?void 0:o.detail)===null||r===void 0?void 0:r.ionShadowTarget)||(o===null||o===void 0?void 0:o.target);var m=D(n,h,g),b=m.contentWidth,w=m.contentHeight;var y={top:v/2-w/2,left:l/2-b/2,originX:d?"right":"left",originY:"top"};var x=j(d,b,w,0,0,a,s,p,y,i,o);var P=n==="cover"?0:M;var T=F(s,x.top,x.left,P,l,v,b,w,0,x.originX,x.originY,x.referenceCoordinates),E=T.originX,S=T.originY,I=T.top,A=T.left,_=T.bottom;var L=k();var C=k();var W=k();var O=k();var q=k();C.addElement(u.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);W.addElement(u.querySelector(".popover-wrapper")).duration(150).fromTo("opacity",.01,1);O.addElement(h).beforeStyles({top:"calc(".concat(I,"px + var(--offset-y, 0px))"),left:"calc(".concat(A,"px + var(--offset-x, 0px))"),"transform-origin":"".concat(S," ").concat(E)}).beforeAddWrite((function(){if(_!==undefined){h.style.setProperty("bottom","".concat(_,"px"))}})).fromTo("transform","scale(0.8)","scale(1)");q.addElement(u.querySelector(".popover-viewport")).fromTo("opacity",.01,1);return L.easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).beforeAddWrite((function(){if(n==="cover"){e.style.setProperty("--width","".concat(b,"px"))}if(S==="bottom"){e.classList.add("popover-bottom")}})).addAnimation([C,W,O,q])};var J=function(e){var t=f(e);var r=t.querySelector(".popover-content");var o=k();var n=k();var i=k();n.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);i.addElement(t.querySelector(".popover-wrapper")).fromTo("opacity",.99,0);return o.easing("ease").afterAddWrite((function(){e.style.removeProperty("--width");e.classList.remove("popover-bottom");r.style.removeProperty("top");r.style.removeProperty("left");r.style.removeProperty("bottom");r.style.removeProperty("transform-origin")})).duration(150).addAnimation([n,i])};var Q=':host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}:host(.popover-desktop){--box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.12)}.popover-content{border-radius:10px}:host(.popover-desktop) .popover-content{border:0.5px solid var(--ion-color-step-100, #e6e6e6)}.popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl] .popover-arrow::after,:host-context([dir=rtl]) .popover-arrow::after{left:unset;right:unset;right:3px}:host(.popover-bottom) .popover-arrow{top:auto;bottom:-10px}:host(.popover-bottom) .popover-arrow::after{top:-6px}:host(.popover-side-left) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host(.popover-side-right) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-top) .popover-arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.popover-side-start) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host-context([dir=rtl]):host(.popover-side-start) .popover-arrow,:host-context([dir=rtl]).popover-side-start .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-end) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host-context([dir=rtl]):host(.popover-side-end) .popover-arrow,:host-context([dir=rtl]).popover-side-end .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.popover-translucent) .popover-content,:host(.popover-translucent) .popover-arrow::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}';var Z=":host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl] .popover-content,:host-context([dir=rtl]) .popover-content{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport{-webkit-transition-delay:100ms;transition-delay:100ms}";var $=e("ion_popover",function(){function e(e){var o=this;t(this,e);this.didPresent=r(this,"ionPopoverDidPresent",7);this.willPresent=r(this,"ionPopoverWillPresent",7);this.willDismiss=r(this,"ionPopoverWillDismiss",7);this.didDismiss=r(this,"ionPopoverDidDismiss",7);this.didPresentShorthand=r(this,"didPresent",7);this.willPresentShorthand=r(this,"willPresent",7);this.willDismissShorthand=r(this,"willDismiss",7);this.didDismissShorthand=r(this,"didDismiss",7);this.parentPopover=null;this.popoverIndex=te++;this.coreDelegate=p();this.inline=false;this.focusDescendantOnPresent=false;this.presented=false;this.hasController=false;this.keyboardClose=true;this.backdropDismiss=true;this.showBackdrop=true;this.translucent=false;this.animated=true;this.triggerAction="click";this.size="auto";this.dismissOnSelect=false;this.reference="trigger";this.side="bottom";this.arrow=true;this.isOpen=false;this.keyboardEvents=false;this.onDismiss=function(e){e.stopPropagation();e.preventDefault();o.dismiss()};this.onBackdropTap=function(){o.dismiss(undefined,u)};this.onLifecycle=function(e){var t=o.usersElement;var r=ee[e.type];if(t&&r){var n=new CustomEvent(r,{bubbles:false,cancelable:false,detail:e.detail});t.dispatchEvent(n)}};this.configureTriggerInteraction=function(){var e=o,t=e.trigger,r=e.triggerAction,n=e.el,i=e.destroyTriggerInteraction;if(i){i()}var a=o.triggerEl=t!==undefined?document.getElementById(t):null;if(!a){return}o.destroyTriggerInteraction=S(a,r,n)};this.configureKeyboardInteraction=function(){var e=o,t=e.destroyKeyboardInteraction,r=e.el;if(t){t()}o.destroyKeyboardInteraction=W(r)};this.configureDismissInteraction=function(){var e=o,t=e.destroyDismissInteraction,r=e.parentPopover,n=e.triggerAction,i=e.triggerEl,a=e.el;if(!r||!i){return}if(t){t()}o.destroyDismissInteraction=E(i,n,a,r)}}e.prototype.onTriggerChange=function(){this.configureTriggerInteraction()};e.prototype.onIsOpenChange=function(e,t){if(e===true&&t===false){this.present()}else if(e===false&&t===true){this.dismiss()}};e.prototype.connectedCallback=function(){h(this.el)};e.prototype.componentWillLoad=function(){this.popoverId=this.el.hasAttribute("id")?this.el.getAttribute("id"):"ion-popover-".concat(this.popoverIndex);this.parentPopover=this.el.closest("ion-popover:not(#".concat(this.popoverId,")"));if(this.alignment===undefined){this.alignment=a(this)==="ios"?"center":"start"}};e.prototype.componentDidLoad=function(){var e=this;var t=this,r=t.parentPopover,o=t.isOpen;if(o===true){l((function(){return e.present()}))}if(r){v(r,"ionPopoverWillDismiss",(function(){e.dismiss(undefined,undefined,false)}))}this.configureTriggerInteraction()};e.prototype.presentFromTrigger=function(e,t){if(t===void 0){t=false}return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(r){switch(r.label){case 0:this.focusDescendantOnPresent=t;return[4,this.present(e)];case 1:r.sent();this.focusDescendantOnPresent=false;return[2]}}))}))};e.prototype.getDelegate=function(e){if(e===void 0){e=false}if(this.workingDelegate&&!e){return{delegate:this.workingDelegate,inline:this.inline}}var t=this.el.parentNode;var r=this.inline=t!==null&&!this.hasController;var o=this.workingDelegate=r?this.delegate||this.coreDelegate:this.delegate;return{inline:r,delegate:o}};e.prototype.present=function(e){return __awaiter(this,void 0,void 0,(function(){var t,r,o,n,i;return __generator(this,(function(a){switch(a.label){case 0:if(this.presented){return[2]}if(!(this.currentTransition!==undefined))return[3,2];return[4,this.currentTransition];case 1:a.sent();a.label=2;case 2:t=Object.assign(Object.assign({},this.componentProps),{popover:this.el});r=this.getDelegate(true),o=r.inline,n=r.delegate;i=this;return[4,c(n,this.el,this.component,["popover-viewport"],t,o)];case 3:i.usersElement=a.sent();return[4,x(this.usersElement)];case 4:a.sent();if(!this.keyboardEvents){this.configureKeyboardInteraction()}this.configureDismissInteraction();this.currentTransition=g(this,"popoverEnter",K,U,{event:e||this.event,size:this.size,trigger:this.triggerEl,reference:this.reference,side:this.side,align:this.alignment});return[4,this.currentTransition];case 5:a.sent();this.currentTransition=undefined;if(this.focusDescendantOnPresent){m(this.el,this.el)}return[2]}}))}))};e.prototype.dismiss=function(e,t,r){if(r===void 0){r=true}return __awaiter(this,void 0,void 0,(function(){var o,n,i,a,s;return __generator(this,(function(p){switch(p.label){case 0:if(!(this.currentTransition!==undefined))return[3,2];return[4,this.currentTransition];case 1:p.sent();p.label=2;case 2:o=this,n=o.destroyKeyboardInteraction,i=o.destroyDismissInteraction;if(r&&this.parentPopover){this.parentPopover.dismiss(e,t,r)}this.currentTransition=b(this,e,t,"popoverLeave",G,J,this.event);return[4,this.currentTransition];case 3:a=p.sent();if(!a)return[3,5];if(n){n();this.destroyKeyboardInteraction=undefined}if(i){i();this.destroyDismissInteraction=undefined}s=this.getDelegate().delegate;return[4,d(s,this.usersElement)];case 4:p.sent();p.label=5;case 5:this.currentTransition=undefined;return[2,a]}}))}))};e.prototype.getParentPopover=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return[2,this.parentPopover]}))}))};e.prototype.onDidDismiss=function(){return w(this.el,"ionPopoverDidDismiss")};e.prototype.onWillDismiss=function(){return w(this.el,"ionPopoverWillDismiss")};e.prototype.render=function(){var e;var t=this;var r=a(this);var i=this,p=i.onLifecycle,c=i.popoverId,d=i.parentPopover,l=i.dismissOnSelect,f=i.side,v=i.arrow,u=i.htmlAttributes;var h=s("desktop");var g=v&&!d&&!h;return o(n,Object.assign({"aria-modal":"true","no-router":true,tabindex:"-1"},u,{style:{zIndex:"".concat(2e4+this.overlayIndex)},id:c,class:Object.assign(Object.assign({},y(this.cssClass)),(e={},e[r]=true,e["popover-translucent"]=this.translucent,e["overlay-hidden"]=true,e["popover-desktop"]=h,e["popover-side-".concat(f)]=true,e["popover-nested"]=!!d,e)),onIonPopoverDidPresent:p,onIonPopoverWillPresent:p,onIonPopoverWillDismiss:p,onIonPopoverDidDismiss:p,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap}),!d&&o("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop,part:"backdrop"}),o("div",{class:"popover-wrapper ion-overlay-wrapper",onClick:l?function(){return t.dismiss()}:undefined},g&&o("div",{class:"popover-arrow",part:"arrow"}),o("div",{class:"popover-content",part:"content"},o("slot",null))))};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{trigger:["onTriggerChange"],triggerAction:["onTriggerChange"],isOpen:["onIsOpenChange"]}},enumerable:false,configurable:true});return e}());var ee={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};var te=0;$.style={ios:Q,md:Z}}}}));