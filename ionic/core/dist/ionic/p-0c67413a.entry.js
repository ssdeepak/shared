/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{r as t,e as o,c as a,h as i,H as r,i as e}from"./p-3b5bf7c6.js";import{b as s,c as n}from"./p-73604786.js";import{C as d,a as h,d as p}from"./p-f2e18cb5.js";import{k as l,g as c,r as m}from"./p-7853c104.js";import{KEYBOARD_DID_OPEN as f}from"./p-20a74982.js";import{B as b,e as w,d as u,h as x,f as g,g as v}from"./p-8590003c.js";import{g as k}from"./p-1d0d7200.js";import{e as y}from"./p-1e9961ec.js";import{c as A}from"./p-c919f1cc.js";import{g as Y}from"./p-6671fe2f.js";import{createGesture as D}from"./p-ca42820c.js";import"./p-0b7fe16d.js";import"./p-d216b4ab.js";const M=(t,o)=>{const a=1/(1-o);return t*a+-o*a},B=t=>{const{currentBreakpoint:o,backdropBreakpoint:a}=t,i=void 0===a||a<o,r=i?`calc(var(--backdrop-opacity) * ${o})`:"0",e=A("backdropAnimation").fromTo("opacity",0,r);return i&&e.beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),{wrapperAnimation:A("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(100%)"},{offset:1,opacity:1,transform:`translateY(${100-100*o}%)`}]),backdropAnimation:e}},E=t=>{const{currentBreakpoint:o,backdropBreakpoint:a}=t,i=`calc(var(--backdrop-opacity) * ${M(o,a)})`,r=[{offset:0,opacity:i},{offset:1,opacity:0}],e=[{offset:0,opacity:i},{offset:a,opacity:0},{offset:1,opacity:0}],s=A("backdropAnimation").keyframes(0!==a?e:r);return{wrapperAnimation:A("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:`translateY(${100-100*o}%)`},{offset:1,opacity:1,transform:"translateY(100%)"}]),backdropAnimation:s}},j=(t,o)=>{const{presentingEl:a,currentBreakpoint:i}=o,r=c(t),{wrapperAnimation:e,backdropAnimation:s}=void 0!==i?B(o):{backdropAnimation:A().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:A().fromTo("transform","translateY(100vh)","translateY(0vh)")};s.addElement(r.querySelector("ion-backdrop")),e.addElement(r.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const n=A("entering-base").addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(e);if(a){const t=window.innerWidth<768,o="ION-MODAL"===a.tagName&&void 0!==a.presentingElement,i=c(a),r=A().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),d=document.body;if(t){const t=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",i=`translateY(${o?"-10px":t}) scale(0.93)`;r.afterStyles({transform:i}).beforeAddWrite((()=>d.style.setProperty("background-color","black"))).addElement(a).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:i,borderRadius:"10px 10px 0 0"}]),n.addAnimation(r)}else if(n.addAnimation(s),o){const t=`translateY(-10px) scale(${o?.93:1})`;r.afterStyles({transform:t}).addElement(i.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:t}]);const a=A().afterStyles({transform:t}).addElement(i.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:t}]);n.addAnimation([r,a])}else e.fromTo("opacity","0","1")}else n.addAnimation(s);return n},C=(t,o,a=500)=>{const{presentingEl:i,currentBreakpoint:r}=o,e=c(t),{wrapperAnimation:s,backdropAnimation:n}=void 0!==r?E(o):{backdropAnimation:A().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:A().fromTo("transform","translateY(0vh)","translateY(100vh)")};n.addElement(e.querySelector("ion-backdrop")),s.addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const d=A("leaving-base").addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(a).addAnimation(s);if(i){const t=window.innerWidth<768,o="ION-MODAL"===i.tagName&&void 0!==i.presentingElement,a=c(i),r=A().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((t=>{1===t&&(i.style.setProperty("overflow",""),Array.from(e.querySelectorAll("ion-modal")).filter((t=>void 0!==t.presentingElement)).length<=1&&e.style.setProperty("background-color",""))})),e=document.body;if(t){const t=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",a=`translateY(${o?"-10px":t}) scale(0.93)`;r.addElement(i).keyframes([{offset:0,filter:"contrast(0.85)",transform:a,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),d.addAnimation(r)}else if(d.addAnimation(n),o){const t=`translateY(-10px) scale(${o?.93:1})`;r.addElement(a.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:t},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const i=A().addElement(a.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:t},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);d.addAnimation([r,i])}else s.fromTo("opacity","1","0")}else d.addAnimation(n);return d},S=(t,o)=>{const{currentBreakpoint:a}=o,i=c(t),{wrapperAnimation:r,backdropAnimation:e}=void 0!==a?B(o):{backdropAnimation:A().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:A().keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}])};return e.addElement(i.querySelector("ion-backdrop")),r.addElement(i.querySelector(".modal-wrapper")),A().addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([e,r])},I=(t,o)=>{const{currentBreakpoint:a}=o,i=c(t),{wrapperAnimation:r,backdropAnimation:e}=void 0!==a?E(o):{backdropAnimation:A().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:A().keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}])};return e.addElement(i.querySelector("ion-backdrop")),r.addElement(i.querySelector(".modal-wrapper")),A().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([e,r])},$=class{constructor(a){t(this,a),this.didPresent=o(this,"ionModalDidPresent",7),this.willPresent=o(this,"ionModalWillPresent",7),this.willDismiss=o(this,"ionModalWillDismiss",7),this.didDismiss=o(this,"ionModalDidDismiss",7),this.didPresentShorthand=o(this,"didPresent",7),this.willPresentShorthand=o(this,"willPresent",7),this.willDismissShorthand=o(this,"willDismiss",7),this.didDismissShorthand=o(this,"didDismiss",7),this.modalIndex=W++,this.coreDelegate=d(),this.isSheetModal=!1,this.inline=!1,this.gestureAnimationDismissing=!1,this.presented=!1,this.hasController=!1,this.keyboardClose=!0,this.backdropBreakpoint=0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.isOpen=!1,this.configureTriggerInteraction=()=>{const{trigger:t,el:o,destroyTriggerInteraction:a}=this;a&&a();const i=void 0!==t?document.getElementById(t):null;i&&(this.destroyTriggerInteraction=((t,o)=>{const a=()=>{o.present()};return t.addEventListener("click",a),()=>{t.removeEventListener("click",a)}})(i,o))},this.onBackdropTap=()=>{this.dismiss(void 0,b)},this.onDismiss=t=>{t.stopPropagation(),t.preventDefault(),this.dismiss()},this.onLifecycle=t=>{const o=this.usersElement,a=P[t.type];if(o&&a){const i=new CustomEvent(a,{bubbles:!1,cancelable:!1,detail:t.detail});o.dispatchEvent(i)}}}onIsOpenChange(t,o){!0===t&&!1===o?this.present():!1===t&&!0===o&&this.dismiss()}onTriggerChange(){this.configureTriggerInteraction()}swipeToCloseChanged(t){this.gesture?this.gesture.enable(t):t&&this.initSwipeToClose()}connectedCallback(){w(this.el)}componentWillLoad(){const{breakpoints:t,initialBreakpoint:o}=this;this.modalId=this.el.hasAttribute("id")?this.el.getAttribute("id"):`ion-modal-${this.modalIndex}`,this.isSheetModal=void 0!==t&&void 0!==o,void 0===t||void 0===o||t.includes(o)||console.warn("[Ionic Warning]: Your breakpoints array must include the initialBreakpoint value.")}componentDidLoad(){!0===this.isOpen&&m((()=>this.present())),this.configureTriggerInteraction()}getDelegate(t=!1){if(this.workingDelegate&&!t)return{delegate:this.workingDelegate,inline:this.inline};const o=this.inline=null!==this.el.parentNode&&!this.hasController;return{inline:o,delegate:this.workingDelegate=o?this.delegate||this.coreDelegate:this.delegate}}async present(){if(this.presented)return;void 0!==this.currentTransition&&await this.currentTransition;const t=Object.assign(Object.assign({},this.componentProps),{modal:this.el}),{inline:o,delegate:i}=this.getDelegate(!0);this.usersElement=await h(i,this.el,this.component,["ion-page"],t,o),await y(this.usersElement),a((()=>this.el.classList.add("show-modal"))),this.currentTransition=u(this,"modalEnter",j,S,{presentingEl:this.presentingElement,currentBreakpoint:this.initialBreakpoint,backdropBreakpoint:this.backdropBreakpoint}),await this.currentTransition,this.isSheetModal?this.initSheetGesture():this.swipeToClose&&this.initSwipeToClose(),"undefined"!=typeof window&&(this.keyboardOpenCallback=()=>{this.gesture&&(this.gesture.enable(!1),m((()=>{this.gesture&&this.gesture.enable(!0)})))},window.addEventListener(f,this.keyboardOpenCallback)),this.currentTransition=void 0}initSwipeToClose(){if("ios"!==s(this))return;const t=this.leaveAnimation||n.get("modalLeave",C),o=this.animation=t(this.el,{presentingEl:this.presentingElement});this.gesture=((t,o,a)=>{const i=t.offsetHeight;let r=!1;const e=D({el:t,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:t=>{const o=t.event.target;return null===o||!o.closest||null===o.closest("ion-content, ion-footer")},onStart:()=>{o.progressStart(!0,r?1:0)},onMove:t=>{const a=l(1e-4,t.deltaY/i,.9999);o.progressStep(a)},onEnd:t=>{const s=t.velocityY,n=l(1e-4,t.deltaY/i,.9999),d=(t.deltaY+1e3*s)/i>=.5;let h=d?-.001:.001;d?(o.easing("cubic-bezier(0.32, 0.72, 0, 1)"),h+=Y([0,0],[.32,.72],[0,1],[1,1],n)[0]):(o.easing("cubic-bezier(1, 0, 0.68, 0.28)"),h+=Y([0,0],[1,0],[.68,.28],[1,1],n)[0]);const p=((t,o)=>l(400,t/Math.abs(1.1*o),500))(d?n*i:(1-n)*i,s);r=d,e.enable(!1),o.onFinish((()=>{d||e.enable(!0)})).progressEnd(d?1:0,h,p),d&&a()}});return e})(this.el,o,(()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish((async()=>{await this.dismiss(void 0,"gesture"),this.gestureAnimationDismissing=!1}))})),this.gesture.enable(!0)}initSheetGesture(){var t;const{wrapperEl:o,initialBreakpoint:a,backdropBreakpoint:i}=this;if(!o||void 0===a)return;const r=this.enterAnimation||n.get("modalEnter",j),e=this.animation=r(this.el,{presentingEl:this.presentingElement,currentBreakpoint:a,backdropBreakpoint:i});e.progressStart(!0,1);const s=(null===(t=this.breakpoints)||void 0===t?void 0:t.sort(((t,o)=>t-o)))||[];this.gesture=((t,o,a,i,r,e,s=[],n,d)=>{const h={WRAPPER_KEYFRAMES:[{offset:0,transform:"translateY(0%)"},{offset:1,transform:"translateY(100%)"}],BACKDROP_KEYFRAMES:0!==r?[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1-r,opacity:0},{offset:1,opacity:0}]:[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1,opacity:.01}]},p=t.querySelector("ion-content"),c=a.clientHeight;let f=i,b=0;const w=e.childAnimations.find((t=>"wrapperAnimation"===t.id)),u=e.childAnimations.find((t=>"backdropAnimation"===t.id)),x=s[s.length-1],g=()=>{t.style.setProperty("pointer-events","auto"),o.style.setProperty("pointer-events","auto"),t.classList.remove("ion-disable-focus-trap")},v=()=>{t.style.setProperty("pointer-events","none"),o.style.setProperty("pointer-events","none"),t.classList.add("ion-disable-focus-trap")};w&&u&&(w.keyframes([...h.WRAPPER_KEYFRAMES]),u.keyframes([...h.BACKDROP_KEYFRAMES]),e.progressStart(!0,1-f),f>r?g():v()),p&&f!==x&&(p.scrollY=!1);const k=D({el:a,gestureName:"modalSheet",gesturePriority:40,direction:"y",threshold:10,canStart:t=>{const o=t.event.target.closest("ion-content");return 1!==f||!o},onStart:()=>{p&&(p.scrollY=!1),m((()=>{t.focus()})),e.progressStart(!0,1-f)},onMove:t=>{b=l(1e-4,1-f+t.deltaY/c,.9999),e.progressStep(b)},onEnd:t=>{const o=f-(t.deltaY+100*t.velocityY)/c,a=s.reduce(((t,a)=>Math.abs(a-o)<Math.abs(t-o)?a:t)),i=0!==a;f=0,w&&u&&(w.keyframes([{offset:0,transform:`translateY(${100*b}%)`},{offset:1,transform:`translateY(${100*(1-a)}%)`}]),u.keyframes([{offset:0,opacity:`calc(var(--backdrop-opacity) * ${M(1-b,r)})`},{offset:1,opacity:`calc(var(--backdrop-opacity) * ${M(a,r)})`}]),e.progressStep(0)),k.enable(!1),e.onFinish((()=>{i&&(w&&u?m((()=>{w.keyframes([...h.WRAPPER_KEYFRAMES]),u.keyframes([...h.BACKDROP_KEYFRAMES]),e.progressStart(!0,1-a),f=a,d(f),p&&f===s[s.length-1]&&(p.scrollY=!0),f>r?g():v(),k.enable(!0)})):k.enable(!0))}),{oneTimeCallback:!0}).progressEnd(1,0,500),i||n()}});return k})(this.el,this.backdropEl,o,a,i,e,s,(()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish((async()=>{await this.dismiss(void 0,"gesture"),this.gestureAnimationDismissing=!1}))}),(t=>{this.currentBreakpoint=t})),this.gesture.enable(!0)}async dismiss(t,o){if(this.gestureAnimationDismissing&&"gesture"!==o)return!1;"undefined"!=typeof window&&this.keyboardOpenCallback&&window.removeEventListener(f,this.keyboardOpenCallback),void 0!==this.currentTransition&&await this.currentTransition;const i=x.get(this)||[];this.currentTransition=g(this,t,o,"modalLeave",C,I,{presentingEl:this.presentingElement,currentBreakpoint:this.currentBreakpoint||this.initialBreakpoint,backdropBreakpoint:this.backdropBreakpoint});const r=await this.currentTransition;if(r){const{delegate:t}=this.getDelegate();await p(t,this.usersElement),a((()=>this.el.classList.remove("show-modal"))),this.animation&&this.animation.destroy(),this.gesture&&this.gesture.destroy(),i.forEach((t=>t.destroy()))}return this.currentTransition=void 0,this.animation=void 0,r}onDidDismiss(){return v(this.el,"ionModalDidDismiss")}onWillDismiss(){return v(this.el,"ionModalWillDismiss")}render(){const{handle:t,isSheetModal:o,presentingElement:a,htmlAttributes:e}=this,n=!1!==t&&o,d=s(this),{modalId:h}=this,p=void 0!==a&&"ios"===d;return i(r,Object.assign({"no-router":!0,"aria-modal":"true",tabindex:"-1"},e,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign({[d]:!0,"modal-default":!p&&!o,"modal-card":p,"modal-sheet":o,"overlay-hidden":!0},k(this.cssClass)),id:h,onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),i("ion-backdrop",{ref:t=>this.backdropEl=t,visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),"ios"===d&&i("div",{class:"modal-shadow"}),i("div",{role:"dialog",class:"modal-wrapper ion-overlay-wrapper",part:"content",ref:t=>this.wrapperEl=t},n&&i("div",{class:"modal-handle",part:"handle"}),i("slot",null)))}get el(){return e(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["onTriggerChange"],swipeToClose:["swipeToCloseChanged"]}}},P={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};let W=0;$.style={ios:":host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);background:var(--ion-color-step-350, #c0c0be);z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-card) .modal-wrapper,:host-context([dir=rtl]).modal-card .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-sheet) .modal-wrapper,:host-context([dir=rtl]).modal-sheet .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}",md:":host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);background:var(--ion-color-step-350, #c0c0be);z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}"};export{$ as ion_modal}