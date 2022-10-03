import{__awaiter,__generator}from"tslib";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */import{r as registerInstance,e as createEvent,h,H as Host,i as getElement}from"./index-b3eecb14.js";import{b as getIonMode}from"./ionic-global-0ebe321c.js";import{k as clamp,h as debounceEvent,i as inheritAttributes,d as getAriaLabel,e as renderHiddenInput}from"./helpers-6e1e5b65.js";import{i as isRTL}from"./dir-e8b767a8.js";import{c as createColorClasses,h as hostContext}from"./theme-a24ff1ad.js";var rangeIosCss=":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset;right:unset;right:0}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:#ffffff;--knob-box-shadow:0 3px 1px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.13), 0 0 0 1px rgba(0, 0, 0, 0.02);--knob-size:28px;--bar-height:2px;--bar-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){margin-left:0;margin-right:16px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted([slot=end]){margin-left:16px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:20px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-tick{margin-left:-1px;border-radius:0;position:absolute;top:18px;width:2px;height:8px;background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-tick{margin-left:unset;-webkit-margin-start:-1px;margin-inline-start:-1px}}.range-tick-active{background:var(--bar-background-active)}.range-pin{-webkit-transform:translate3d(0,  28px,  0) scale(0.01);transform:translate3d(0,  28px,  0) scale(0.01);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:inline-block;position:relative;top:-20px;min-width:28px;-webkit-transition:-webkit-transform 120ms ease;transition:-webkit-transform 120ms ease;transition:transform 120ms ease;transition:transform 120ms ease, -webkit-transform 120ms ease;background:transparent;color:var(--ion-text-color, #000);font-size:12px;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-pin{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.range-knob-pressed .range-pin{-webkit-transform:translate3d(0,  0,  0) scale(1);transform:translate3d(0,  0,  0) scale(1)}:host(.range-disabled){opacity:0.5}";var rangeMdCss=':host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset;right:unset;right:0}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.26);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary, #3880ff);--pin-color:var(--ion-color-primary-contrast, #fff);padding-left:14px;padding-right:14px;padding-top:8px;padding-bottom:8px;font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:14px;padding-inline-start:14px;-webkit-padding-end:14px;padding-inline-end:14px}}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb), 0.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin::before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){margin-left:0;margin-right:14px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px}}::slotted([slot=end]){margin-left:14px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:28px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{-webkit-transform:scale(0.67);transform:scale(0.67);-webkit-transition-duration:120ms;transition-duration:120ms;-webkit-transition-property:background-color, border, -webkit-transform;transition-property:background-color, border, -webkit-transform;transition-property:transform, background-color, border;transition-property:transform, background-color, border, -webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;z-index:2}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;-webkit-transform:translate3d(0,  0,  0) scale(0.01);transform:translate3d(0,  0,  0) scale(0.01);display:inline-block;position:relative;min-width:28px;height:28px;-webkit-transition:background 120ms ease, -webkit-transform 120ms ease;transition:background 120ms ease, -webkit-transform 120ms ease;transition:transform 120ms ease, background 120ms ease;transition:transform 120ms ease, background 120ms ease, -webkit-transform 120ms ease;background:var(--pin-background);color:var(--pin-color);text-align:center}.range-pin::before{left:50%;top:3px;margin-left:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:background 120ms ease;transition:background 120ms ease;background:var(--pin-background);content:"";z-index:-1}[dir=rtl] .range-pin::before,:host-context([dir=rtl]) .range-pin::before{left:unset;right:unset;right:50%}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-pin::before{margin-left:unset;-webkit-margin-start:-13px;margin-inline-start:-13px}}[dir=rtl] .range-pin::before,:host-context([dir=rtl]) .range-pin::before{left:unset}.range-knob-pressed .range-pin{-webkit-transform:translate3d(0,  -24px,  0) scale(1);transform:translate3d(0,  -24px,  0) scale(1)}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob{-webkit-transform:scale(1);transform:scale(1)}:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-bar,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250, #bfbfbf)}:host(.range-disabled) .range-knob{-webkit-transform:scale(0.55);transform:scale(0.55);outline:5px solid #fff;background-color:var(--ion-color-step-250, #bfbfbf)}';var Range=function(){function t(t){var e=this;registerInstance(this,t);this.ionChange=createEvent(this,"ionChange",7);this.ionStyle=createEvent(this,"ionStyle",7);this.ionFocus=createEvent(this,"ionFocus",7);this.ionBlur=createEvent(this,"ionBlur",7);this.didLoad=false;this.noUpdate=false;this.hasFocus=false;this.inheritedAttributes={};this.ratioA=0;this.ratioB=0;this.debounce=0;this.name="";this.dualKnobs=false;this.min=0;this.max=100;this.pin=false;this.pinFormatter=function(t){return Math.round(t)};this.snaps=false;this.step=1;this.ticks=true;this.disabled=false;this.value=0;this.clampBounds=function(t){return clamp(e.min,t,e.max)};this.ensureValueInBounds=function(t){if(e.dualKnobs){return{lower:e.clampBounds(t.lower),upper:e.clampBounds(t.upper)}}else{return e.clampBounds(t)}};this.setupGesture=function(){return __awaiter(e,void 0,void 0,(function(){var t,e;var r=this;return __generator(this,(function(n){switch(n.label){case 0:t=this.rangeSlider;if(!t)return[3,2];e=this;return[4,import("./index-41bf41f2.js")];case 1:e.gesture=n.sent().createGesture({el:t,gestureName:"range",gesturePriority:100,threshold:0,onStart:function(t){return r.onStart(t)},onMove:function(t){return r.onMove(t)},onEnd:function(t){return r.onEnd(t)}});this.gesture.enable(!this.disabled);n.label=2;case 2:return[2]}}))}))};this.handleKeyboard=function(t,r){var n=e.step;n=n>0?n:1;n=n/(e.max-e.min);if(!r){n*=-1}if(t==="A"){e.ratioA=clamp(0,e.ratioA+n,1)}else{e.ratioB=clamp(0,e.ratioB+n,1)}e.updateValue()};this.onBlur=function(){if(e.hasFocus){e.hasFocus=false;e.ionBlur.emit();e.emitStyle()}};this.onFocus=function(){if(!e.hasFocus){e.hasFocus=true;e.ionFocus.emit();e.emitStyle()}}}t.prototype.debounceChanged=function(){this.ionChange=debounceEvent(this.ionChange,this.debounce)};t.prototype.minChanged=function(){if(!this.noUpdate){this.updateRatio()}};t.prototype.maxChanged=function(){if(!this.noUpdate){this.updateRatio()}};t.prototype.disabledChanged=function(){if(this.gesture){this.gesture.enable(!this.disabled)}this.emitStyle()};t.prototype.valueChanged=function(t){if(!this.noUpdate){this.updateRatio()}t=this.ensureValueInBounds(t);this.ionChange.emit({value:t})};t.prototype.componentWillLoad=function(){this.rangeId=this.el.hasAttribute("id")?this.el.getAttribute("id"):"ion-r-".concat(rangeIds++);this.inheritedAttributes=inheritAttributes(this.el,["aria-label"])};t.prototype.componentDidLoad=function(){this.setupGesture();this.didLoad=true};t.prototype.connectedCallback=function(){this.updateRatio();this.debounceChanged();this.disabledChanged();if(this.didLoad){this.setupGesture()}};t.prototype.disconnectedCallback=function(){if(this.gesture){this.gesture.destroy();this.gesture=undefined}};t.prototype.getValue=function(){var t=this.value||0;if(this.dualKnobs){if(typeof t==="object"){return t}return{lower:0,upper:t}}else{if(typeof t==="object"){return t.upper}return t}};t.prototype.emitStyle=function(){this.ionStyle.emit({interactive:true,"interactive-disabled":this.disabled})};t.prototype.onStart=function(t){var e=this.rect=this.rangeSlider.getBoundingClientRect();var r=t.currentX;var n=clamp(0,(r-e.left)/e.width,1);if(isRTL(this.el)){n=1-n}this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-n)<Math.abs(this.ratioB-n)?"A":"B";this.setFocus(this.pressedKnob);this.update(r)};t.prototype.onMove=function(t){this.update(t.currentX)};t.prototype.onEnd=function(t){this.update(t.currentX);this.pressedKnob=undefined};t.prototype.update=function(t){var e=this.rect;var r=clamp(0,(t-e.left)/e.width,1);if(isRTL(this.el)){r=1-r}if(this.snaps){r=valueToRatio(ratioToValue(r,this.min,this.max,this.step),this.min,this.max)}if(this.pressedKnob==="A"){this.ratioA=r}else{this.ratioB=r}this.updateValue()};Object.defineProperty(t.prototype,"valA",{get:function(){return ratioToValue(this.ratioA,this.min,this.max,this.step)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"valB",{get:function(){return ratioToValue(this.ratioB,this.min,this.max,this.step)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"ratioLower",{get:function(){if(this.dualKnobs){return Math.min(this.ratioA,this.ratioB)}return 0},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"ratioUpper",{get:function(){if(this.dualKnobs){return Math.max(this.ratioA,this.ratioB)}return this.ratioA},enumerable:false,configurable:true});t.prototype.updateRatio=function(){var t=this.getValue();var e=this,r=e.min,n=e.max;if(this.dualKnobs){this.ratioA=valueToRatio(t.lower,r,n);this.ratioB=valueToRatio(t.upper,r,n)}else{this.ratioA=valueToRatio(t,r,n)}};t.prototype.updateValue=function(){this.noUpdate=true;var t=this,e=t.valA,r=t.valB;this.value=!this.dualKnobs?e:{lower:Math.min(e,r),upper:Math.max(e,r)};this.noUpdate=false};t.prototype.setFocus=function(t){if(this.el.shadowRoot){var e=this.el.shadowRoot.querySelector(t==="A"?".range-knob-a":".range-knob-b");if(e){e.focus()}}};t.prototype.render=function(){var t,e;var r=this;var n=this,a=n.min,i=n.max,o=n.step,s=n.el,l=n.handleKeyboard,d=n.pressedKnob,b=n.disabled,g=n.pin,p=n.ratioLower,u=n.ratioUpper,c=n.inheritedAttributes,m=n.rangeId,f=n.pinFormatter;var k=getAriaLabel(s,m).labelText;if(k===undefined||k===null){k=c["aria-label"]}var v=getIonMode(this);var x="".concat(p*100,"%");var w="".concat(100-u*100,"%");var y=isRTL(this.el);var z=y?"right":"left";var A=y?"left":"right";var C=function(t){var e;return e={},e[z]=t[z],e};var B=(t={},t[z]=x,t[A]=w,t);var K=[];if(this.snaps&&this.ticks){for(var R=a;R<=i;R+=o){var F=valueToRatio(R,a,i);var T={ratio:F,active:F>=p&&F<=u};T[z]="".concat(F*100,"%");K.push(T)}}renderHiddenInput(true,s,this.name,JSON.stringify(this.getValue()),b);return h(Host,{onFocusin:this.onFocus,onFocusout:this.onBlur,id:m,class:createColorClasses(this.color,(e={},e[v]=true,e["in-item"]=hostContext("ion-item",s),e["range-disabled"]=b,e["range-pressed"]=d!==undefined,e["range-has-pin"]=g,e))},h("slot",{name:"start"}),h("div",{class:"range-slider",ref:function(t){return r.rangeSlider=t}},K.map((function(t){return h("div",{style:C(t),role:"presentation",class:{"range-tick":true,"range-tick-active":t.active},part:t.active?"tick-active":"tick"})})),h("div",{class:"range-bar",role:"presentation",part:"bar"}),h("div",{class:"range-bar range-bar-active",role:"presentation",style:B,part:"bar-active"}),renderKnob(y,{knob:"A",pressed:d==="A",value:this.valA,ratio:this.ratioA,pin:g,pinFormatter:f,disabled:b,handleKeyboard:l,min:a,max:i,labelText:k}),this.dualKnobs&&renderKnob(y,{knob:"B",pressed:d==="B",value:this.valB,ratio:this.ratioB,pin:g,pinFormatter:f,disabled:b,handleKeyboard:l,min:a,max:i,labelText:k})),h("slot",{name:"end"}))};Object.defineProperty(t.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{debounce:["debounceChanged"],min:["minChanged"],max:["maxChanged"],disabled:["disabledChanged"],value:["valueChanged"]}},enumerable:false,configurable:true});return t}();var renderKnob=function(t,e){var r=e.knob,n=e.value,a=e.ratio,i=e.min,o=e.max,s=e.disabled,l=e.pressed,d=e.pin,b=e.handleKeyboard,g=e.labelText,p=e.pinFormatter;var u=t?"right":"left";var c=function(){var t={};t[u]="".concat(a*100,"%");return t};return h("div",{onKeyDown:function(t){var e=t.key;if(e==="ArrowLeft"||e==="ArrowDown"){b(r,false);t.preventDefault();t.stopPropagation()}else if(e==="ArrowRight"||e==="ArrowUp"){b(r,true);t.preventDefault();t.stopPropagation()}},class:{"range-knob-handle":true,"range-knob-a":r==="A","range-knob-b":r==="B","range-knob-pressed":l,"range-knob-min":n===i,"range-knob-max":n===o},style:c(),role:"slider",tabindex:s?-1:0,"aria-label":g,"aria-valuemin":i,"aria-valuemax":o,"aria-disabled":s?"true":null,"aria-valuenow":n},d&&h("div",{class:"range-pin",role:"presentation",part:"pin"},p(n)),h("div",{class:"range-knob",role:"presentation",part:"knob"}))};var ratioToValue=function(t,e,r,n){var a=(r-e)*t;if(n>0){a=Math.round(a/n)*n+e}return clamp(e,a,r)};var valueToRatio=function(t,e,r){return clamp(0,(t-e)/(r-e),1)};var rangeIds=0;Range.style={ios:rangeIosCss,md:rangeMdCss};export{Range as ion_range};