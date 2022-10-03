import{__awaiter,__generator}from"tslib";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */import{r as registerInstance,e as createEvent,h,i as getElement,H as Host}from"./index-b3eecb14.js";import{b as getIonMode,c as config}from"./ionic-global-0ebe321c.js";import{g as getTimeGivenProgression}from"./cubic-bezier-154a53a5.js";import{m as assert,s as shallowEqualStringMap}from"./helpers-6e1e5b65.js";import{l as lifecycle,t as transition,s as setPageHidden,d as LIFECYCLE_WILL_UNLOAD,b as LIFECYCLE_WILL_LEAVE,c as LIFECYCLE_DID_LEAVE}from"./index-e6c2c822.js";import{a as attachComponent}from"./framework-delegate-0e9f0224.js";var VIEW_STATE_NEW=1;var VIEW_STATE_ATTACHED=2;var VIEW_STATE_DESTROYED=3;var ViewController=function(){function e(e,t){this.component=e;this.params=t;this.state=VIEW_STATE_NEW}e.prototype.init=function(e){return __awaiter(this,void 0,void 0,(function(){var t,i;return __generator(this,(function(n){switch(n.label){case 0:this.state=VIEW_STATE_ATTACHED;if(!!this.element)return[3,2];t=this.component;i=this;return[4,attachComponent(this.delegate,e,t,["ion-page","ion-page-invisible"],this.params)];case 1:i.element=n.sent();n.label=2;case 2:return[2]}}))}))};e.prototype._destroy=function(){assert(this.state!==VIEW_STATE_DESTROYED,"view state must be ATTACHED");var e=this.element;if(e){if(this.delegate){this.delegate.removeViewFromDom(e.parentElement,e)}else{e.remove()}}this.nav=undefined;this.state=VIEW_STATE_DESTROYED};return e}();var matches=function(e,t,i){if(!e){return false}if(e.component!==t){return false}return shallowEqualStringMap(e.params,i)};var convertToView=function(e,t){if(!e){return null}if(e instanceof ViewController){return e}return new ViewController(e,t)};var convertToViews=function(e){return e.map((function(e){if(e instanceof ViewController){return e}if("component"in e){return convertToView(e.component,e.componentProps===null?undefined:e.componentProps)}return convertToView(e,undefined)})).filter((function(e){return e!==null}))};var navCss=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";var Nav=function(){function e(e){registerInstance(this,e);this.ionNavWillLoad=createEvent(this,"ionNavWillLoad",7);this.ionNavWillChange=createEvent(this,"ionNavWillChange",3);this.ionNavDidChange=createEvent(this,"ionNavDidChange",3);this.transInstr=[];this.animationEnabled=true;this.useRouter=false;this.isTransitioning=false;this.destroyed=false;this.views=[];this.animated=true}e.prototype.swipeGestureChanged=function(){if(this.gesture){this.gesture.enable(this.swipeGesture===true)}};e.prototype.rootChanged=function(){if(this.root!==undefined){if(!this.useRouter){this.setRoot(this.root,this.rootParams)}}};e.prototype.componentWillLoad=function(){this.useRouter=document.querySelector("ion-router")!==null&&this.el.closest("[no-router]")===null;if(this.swipeGesture===undefined){var e=getIonMode(this);this.swipeGesture=config.getBoolean("swipeBackEnabled",e==="ios")}this.ionNavWillLoad.emit()};e.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(t){switch(t.label){case 0:this.rootChanged();e=this;return[4,import("./swipe-back-f65c5686.js")];case 1:e.gesture=t.sent().createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this));this.swipeGestureChanged();return[2]}}))}))};e.prototype.disconnectedCallback=function(){for(var e=0,t=this.views;e<t.length;e++){var i=t[e];lifecycle(i.element,LIFECYCLE_WILL_UNLOAD);i._destroy()}if(this.gesture){this.gesture.destroy();this.gesture=undefined}this.transInstr.length=0;this.views.length=0;this.destroyed=true};e.prototype.push=function(e,t,i,n){return this.insert(-1,e,t,i,n)};e.prototype.insert=function(e,t,i,n,r){return this.insertPages(e,[{component:t,componentProps:i}],n,r)};e.prototype.insertPages=function(e,t,i,n){return this.queueTrns({insertStart:e,insertViews:t,opts:i},n)};e.prototype.pop=function(e,t){return this.removeIndex(-1,1,e,t)};e.prototype.popTo=function(e,t,i){var n={removeStart:-1,removeCount:-1,opts:t};if(typeof e==="object"&&e.component){n.removeView=e;n.removeStart=1}else if(typeof e==="number"){n.removeStart=e+1}return this.queueTrns(n,i)};e.prototype.popToRoot=function(e,t){return this.removeIndex(1,-1,e,t)};e.prototype.removeIndex=function(e,t,i,n){if(t===void 0){t=1}return this.queueTrns({removeStart:e,removeCount:t,opts:i},n)};e.prototype.setRoot=function(e,t,i,n){return this.setPages([{component:e,componentProps:t}],i,n)};e.prototype.setPages=function(e,t,i){t!==null&&t!==void 0?t:t={};if(t.animated!==true){t.animated=false}return this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},i)};e.prototype.setRouteId=function(e,t,i,n){var r=this;var o=this.getActiveSync();if(matches(o,e,t)){return Promise.resolve({changed:false,element:o.element})}var s;var a=new Promise((function(e){return s=e}));var u;var c={updateURL:false,viewIsReady:function(e){var t;var i=new Promise((function(e){return t=e}));s({changed:true,element:e,markVisible:function(){return __awaiter(r,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:t();return[4,u];case 1:e.sent();return[2]}}))}))}});return i}};if(i==="root"){u=this.setRoot(e,t,c)}else{var l=this.views.find((function(i){return matches(i,e,t)}));if(l){u=this.popTo(l,Object.assign(Object.assign({},c),{direction:"back",animationBuilder:n}))}else if(i==="forward"){u=this.push(e,t,Object.assign(Object.assign({},c),{animationBuilder:n}))}else if(i==="back"){u=this.setRoot(e,t,Object.assign(Object.assign({},c),{direction:"back",animated:true,animationBuilder:n}))}}return a};e.prototype.getRouteId=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(t){e=this.getActiveSync();if(e){return[2,{id:e.element.tagName,params:e.params,element:e.element}]}return[2,undefined]}))}))};e.prototype.getActive=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return[2,this.getActiveSync()]}))}))};e.prototype.getByIndex=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this.views[e]]}))}))};e.prototype.canGoBack=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this.canGoBackSync(e)]}))}))};e.prototype.getPrevious=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this.getPreviousSync(e)]}))}))};e.prototype.getLength=function(){return this.views.length};e.prototype.getActiveSync=function(){return this.views[this.views.length-1]};e.prototype.canGoBackSync=function(e){if(e===void 0){e=this.getActiveSync()}return!!(e&&this.getPreviousSync(e))};e.prototype.getPreviousSync=function(e){if(e===void 0){e=this.getActiveSync()}if(!e){return undefined}var t=this.views;var i=t.indexOf(e);return i>0?t[i-1]:undefined};e.prototype.queueTrns=function(e,t){return __awaiter(this,void 0,void 0,(function(){var i,n,r,o,s;return __generator(this,(function(a){switch(a.label){case 0:if(this.isTransitioning&&((i=e.opts)===null||i===void 0?void 0:i.skipIfBusy)){return[2,false]}r=new Promise((function(t,i){e.resolve=t;e.reject=i}));e.done=t;if(!(e.opts&&e.opts.updateURL!==false&&this.useRouter))return[3,2];o=document.querySelector("ion-router");if(!o)return[3,2];return[4,o.canTransition()];case 1:s=a.sent();if(s===false){return[2,false]}if(typeof s==="string"){o.push(s,e.opts.direction||"back");return[2,false]}a.label=2;case 2:if(((n=e.insertViews)===null||n===void 0?void 0:n.length)===0){e.insertViews=undefined}this.transInstr.push(e);this.nextTrns();return[2,r]}}))}))};e.prototype.success=function(e,t){if(this.destroyed){this.fireError("nav controller was destroyed",t);return}if(t.done){t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction)}t.resolve(e.hasCompleted);if(t.opts.updateURL!==false&&this.useRouter){var i=document.querySelector("ion-router");if(i){var n=e.direction==="back"?"back":"forward";i.navChanged(n)}}};e.prototype.failed=function(e,t){if(this.destroyed){this.fireError("nav controller was destroyed",t);return}this.transInstr.length=0;this.fireError(e,t)};e.prototype.fireError=function(e,t){if(t.done){t.done(false,false,e)}if(t.reject&&!this.destroyed){t.reject(e)}else{t.resolve(false)}};e.prototype.nextTrns=function(){if(this.isTransitioning){return false}var e=this.transInstr.shift();if(!e){return false}this.runTransition(e);return true};e.prototype.runTransition=function(e){return __awaiter(this,void 0,void 0,(function(){var t,i,n,r,o,s;return __generator(this,(function(a){switch(a.label){case 0:a.trys.push([0,6,,7]);this.ionNavWillChange.emit();this.isTransitioning=true;this.prepareTI(e);t=this.getActiveSync();i=this.getEnteringView(e,t);if(!t&&!i){throw new Error("no views in the stack to be removed")}if(!(i&&i.state===VIEW_STATE_NEW))return[3,2];return[4,i.init(this.el)];case 1:a.sent();a.label=2;case 2:this.postViewInit(i,t,e);n=(e.enteringRequiresTransition||e.leavingRequiresTransition)&&i!==t;if(n&&e.opts&&t){r=e.opts.direction==="back";if(r){e.opts.animationBuilder=e.opts.animationBuilder||(i===null||i===void 0?void 0:i.animationBuilder)}t.animationBuilder=e.opts.animationBuilder}o=void 0;if(!n)return[3,4];return[4,this.transition(i,t,e)];case 3:o=a.sent();return[3,5];case 4:o={hasCompleted:true,requiresTransition:false};a.label=5;case 5:this.success(o,e);this.ionNavDidChange.emit();return[3,7];case 6:s=a.sent();this.failed(s,e);return[3,7];case 7:this.isTransitioning=false;this.nextTrns();return[2]}}))}))};e.prototype.prepareTI=function(e){var t,i;var n;var r=this.views.length;(t=e.opts)!==null&&t!==void 0?t:e.opts={};(i=(n=e.opts).delegate)!==null&&i!==void 0?i:n.delegate=this.delegate;if(e.removeView!==undefined){assert(e.removeStart!==undefined,"removeView needs removeStart");assert(e.removeCount!==undefined,"removeView needs removeCount");var o=this.views.indexOf(e.removeView);if(o<0){throw new Error("removeView was not found")}e.removeStart+=o}if(e.removeStart!==undefined){if(e.removeStart<0){e.removeStart=r-1}if(e.removeCount<0){e.removeCount=r-e.removeStart}e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===r}if(e.insertViews){if(e.insertStart<0||e.insertStart>r){e.insertStart=r}e.enteringRequiresTransition=e.insertStart===r}var s=e.insertViews;if(!s){return}assert(s.length>0,"length can not be zero");var a=convertToViews(s);if(a.length===0){throw new Error("invalid views to insert")}for(var u=0,c=a;u<c.length;u++){var l=c[u];l.delegate=e.opts.delegate;var f=l.nav;if(f&&f!==this){throw new Error("inserted view was already inserted")}if(l.state===VIEW_STATE_DESTROYED){throw new Error("inserted view was already destroyed")}}e.insertViews=a};e.prototype.getEnteringView=function(e,t){var i=e.insertViews;if(i!==undefined){return i[i.length-1]}var n=e.removeStart;if(n!==undefined){var r=this.views;var o=n+e.removeCount;for(var s=r.length-1;s>=0;s--){var a=r[s];if((s<n||s>=o)&&a!==t){return a}}}return undefined};e.prototype.postViewInit=function(e,t,i){var n,r,o;assert(t||e,"Both leavingView and enteringView are null");assert(i.resolve,"resolve must be valid");assert(i.reject,"reject must be valid");var s=i.opts;var a=i.insertViews,u=i.removeStart,c=i.removeCount;var l;if(u!==undefined&&c!==undefined){assert(u>=0,"removeStart can not be negative");assert(c>=0,"removeCount can not be negative");l=[];for(var f=u;f<u+c;f++){var h=this.views[f];if(h&&h!==e&&h!==t){l.push(h)}}(n=s.direction)!==null&&n!==void 0?n:s.direction="back"}var v=this.views.length+((r=a===null||a===void 0?void 0:a.length)!==null&&r!==void 0?r:0)-(c!==null&&c!==void 0?c:0);assert(v>=0,"final balance can not be negative");if(v===0){console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el);throw new Error("navigation stack needs at least one root page")}if(a){var d=i.insertStart;for(var p=0,m=a;p<m.length;p++){var h=m[p];this.insertViewAt(h,d);d++}if(i.enteringRequiresTransition){(o=s.direction)!==null&&o!==void 0?o:s.direction="forward"}}if(l&&l.length>0){for(var g=0,w=l;g<w.length;g++){var h=w[g];lifecycle(h.element,LIFECYCLE_WILL_LEAVE);lifecycle(h.element,LIFECYCLE_DID_LEAVE);lifecycle(h.element,LIFECYCLE_WILL_UNLOAD)}for(var y=0,E=l;y<E.length;y++){var h=E[y];this.destroyView(h)}}};e.prototype.transition=function(e,t,i){return __awaiter(this,void 0,void 0,(function(){var n,r,o,s,a,u,c;var l=this;return __generator(this,(function(f){switch(f.label){case 0:n=i.opts;r=n.progressAnimation?function(e){return l.sbAni=e}:undefined;o=getIonMode(this);s=e.element;a=t&&t.element;u=Object.assign(Object.assign({mode:o,showGoBack:this.canGoBackSync(e),baseEl:this.el,progressCallback:r,animated:this.animated&&config.getBoolean("animated",true),enteringEl:s,leavingEl:a},n),{animationBuilder:n.animationBuilder||this.animation||config.get("navAnimation")});return[4,transition(u)];case 1:c=f.sent().hasCompleted;return[2,this.transitionFinish(c,e,t,n)]}}))}))};e.prototype.transitionFinish=function(e,t,i,n){var r=e?t:i;if(r){this.cleanup(r)}return{hasCompleted:e,requiresTransition:true,enteringView:t,leavingView:i,direction:n.direction}};e.prototype.insertViewAt=function(e,t){var i=this.views;var n=i.indexOf(e);if(n>-1){assert(e.nav===this,"view is not part of the nav");i.splice(n,1);i.splice(t,0,e)}else{assert(!e.nav,"nav is used");e.nav=this;i.splice(t,0,e)}};e.prototype.removeView=function(e){assert(e.state===VIEW_STATE_ATTACHED||e.state===VIEW_STATE_DESTROYED,"view state should be loaded or destroyed");var t=this.views;var i=t.indexOf(e);assert(i>-1,"view must be part of the stack");if(i>=0){t.splice(i,1)}};e.prototype.destroyView=function(e){e._destroy();this.removeView(e)};e.prototype.cleanup=function(e){if(this.destroyed){return}var t=this.views;var i=t.indexOf(e);for(var n=t.length-1;n>=0;n--){var r=t[n];var o=r.element;if(o){if(n>i){lifecycle(o,LIFECYCLE_WILL_UNLOAD);this.destroyView(r)}else if(n<i){setPageHidden(o,true)}}}};e.prototype.canStart=function(){return!!this.swipeGesture&&!this.isTransitioning&&this.transInstr.length===0&&this.animationEnabled&&this.canGoBackSync()};e.prototype.onStart=function(){this.pop({direction:"back",progressAnimation:true})};e.prototype.onMove=function(e){if(this.sbAni){this.sbAni.progressStep(e)}};e.prototype.onEnd=function(e,t,i){var n=this;if(this.sbAni){this.animationEnabled=false;this.sbAni.onFinish((function(){n.animationEnabled=true}),{oneTimeCallback:true});var r=e?-.001:.001;if(!e){this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)");r+=getTimeGivenProgression([0,0],[1,0],[.68,.28],[1,1],t)[0]}else{r+=getTimeGivenProgression([0,0],[.32,.72],[0,1],[1,1],t)[0]}this.sbAni.progressEnd(e?1:0,r,i)}};e.prototype.render=function(){return h("slot",null)};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}},enumerable:false,configurable:true});return e}();Nav.style=navCss;var navLink=function(e,t,i,n,r){var o=e.closest("ion-nav");if(o){if(t==="forward"){if(i!==undefined){return o.push(i,n,{skipIfBusy:true,animationBuilder:r})}}else if(t==="root"){if(i!==undefined){return o.setRoot(i,n,{skipIfBusy:true,animationBuilder:r})}}else if(t==="back"){return o.pop({skipIfBusy:true,animationBuilder:r})}}return Promise.resolve(false)};var NavLink=function(){function e(e){var t=this;registerInstance(this,e);this.routerDirection="forward";this.onClick=function(){return navLink(t.el,t.routerDirection,t.component,t.componentProps,t.routerAnimation)}}e.prototype.render=function(){return h(Host,{onClick:this.onClick})};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();export{Nav as ion_nav,NavLink as ion_nav_link};