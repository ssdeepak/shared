/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{r as t,e as i,h as s,H as o,i as e}from"./p-3b5bf7c6.js";import{b as r}from"./p-73604786.js";import{i as n}from"./p-7853c104.js";const h=class{constructor(s){t(this,s),this.ionImgWillLoad=i(this,"ionImgWillLoad",7),this.ionImgDidLoad=i(this,"ionImgDidLoad",7),this.ionError=i(this,"ionError",7),this.inheritedAttributes={},this.onLoad=()=>{this.ionImgDidLoad.emit()},this.onError=()=>{this.ionError.emit()}}srcChanged(){this.addIO()}componentWillLoad(){this.inheritedAttributes=n(this.el,["draggable"])}componentDidLoad(){this.addIO()}addIO(){void 0!==this.src&&("undefined"!=typeof window&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype?(this.removeIO(),this.io=new IntersectionObserver((t=>{t[t.length-1].isIntersecting&&(this.load(),this.removeIO())})),this.io.observe(this.el)):setTimeout((()=>this.load()),200))}load(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()}removeIO(){this.io&&(this.io.disconnect(),this.io=void 0)}render(){const{loadSrc:t,alt:i,onLoad:e,loadError:n,inheritedAttributes:h}=this,{draggable:c}=h;return s(o,{class:r(this)},s("img",{decoding:"async",src:t,alt:i,onLoad:e,onError:n,part:"image",draggable:a(c)}))}get el(){return e(this)}static get watchers(){return{src:["srcChanged"]}}},a=t=>{switch(t){case"true":return!0;case"false":return!1;default:return}};h.style=":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}";export{h as ion_img}