import{f as ie,d as ct,e as J,a as m,b as p,c as C}from"./tslib.es6-4b90b051.js";import{s as dn,a as re}from"./index-ec0f687a.js";import{b as Wt,M as Fn,f as un,a as kn,g as Pn,e as Dt,d as Hn}from"./foundation-59d9da04.js";import{M as Bn}from"./component-95f05123.js";import"./_commonjsHelpers-de833af9.js";/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Te={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}},_e={animationend:{cssProperty:"animation",prefixed:"webkitAnimationEnd",standard:"animationend"},animationiteration:{cssProperty:"animation",prefixed:"webkitAnimationIteration",standard:"animationiteration"},animationstart:{cssProperty:"animation",prefixed:"webkitAnimationStart",standard:"animationstart"},transitionend:{cssProperty:"transition",prefixed:"webkitTransitionEnd",standard:"transitionend"}};function pn(a){return!!a.document&&typeof a.document.createElement=="function"}function ae(a,e){if(pn(a)&&e in Te){var t=a.document.createElement("div"),n=Te[e],i=n.standard,r=n.prefixed,o=i in t.style;return o?i:r}return e}function Se(a,e){if(pn(a)&&e in _e){var t=a.document.createElement("div"),n=_e[e],i=n.standard,r=n.prefixed,o=n.cssProperty,s=o in t.style;return s?i:r}return e}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var S=function(){function a(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(a,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),a.prototype.init=function(){},a.prototype.destroy=function(){},a}();/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Un(a){return String(a).replace(/\-([a-z])/g,function(e,t){return t.toUpperCase()})}var D=function(){function a(e,t){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];this.root=e,this.initialize.apply(this,ct([],J(n))),this.foundation=t===void 0?this.getDefaultFoundation():t,this.foundation.init(),this.initialSyncWithDOM()}return a.attachTo=function(e){return new a(e,new S({}))},a.prototype.initialize=function(){},a.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},a.prototype.initialSyncWithDOM=function(){},a.prototype.destroy=function(){this.foundation.destroy()},a.prototype.listen=function(e,t,n){this.root.addEventListener(e,t,n)},a.prototype.unlisten=function(e,t,n){this.root.removeEventListener(e,t,n)},a.prototype.emit=function(e,t,n){n===void 0&&(n=!1);var i;typeof CustomEvent=="function"?i=new CustomEvent(e,{bubbles:n,detail:t}):(i=document.createEvent("CustomEvent"),i.initCustomEvent(e,n,!1,t)),this.root.dispatchEvent(i)},a.prototype.safeSetAttribute=function(e,t,n){if(t.toLowerCase()==="tabindex")e.tabIndex=Number(n);else if(t.indexOf("data-")===0){var i=Un(t.replace(/^data-/,""));e.dataset[i]=n}else dn([re.safeAttrPrefix(Le||(Le=ie(["aria-"],["aria-"]))),re.safeAttrPrefix(Re||(Re=ie(["role"],["role"])))],e,t,n)},a}(),Le,Re;/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function M(a){return a===void 0&&(a=window),Vn(a)?{passive:!0}:!1}function Vn(a){a===void 0&&(a=window);var e=!1;try{var t={get passive(){return e=!0,!1}},n=function(){};a.document.addEventListener("test",n,t),a.document.removeEventListener("test",n,t)}catch{e=!1}return e}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Nt(a,e){if(a.closest)return a.closest(e);for(var t=a;t;){if(tt(t,e))return t;t=t.parentElement}return null}function tt(a,e){var t=a.matches||a.webkitMatchesSelector||a.msMatchesSelector;return t.call(a,e)}function Kn(a){var e=a;if(e.offsetParent!==null)return e.scrollWidth;var t=e.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);var n=t.scrollWidth;return document.documentElement.removeChild(t),n}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Gn={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},Wn={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},De={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},zt;function zn(a,e){e===void 0&&(e=!1);var t=a.CSS,n=zt;if(typeof zt=="boolean"&&!e)return zt;var i=t&&typeof t.supports=="function";if(!i)return!1;var r=t.supports("--css-vars","yes"),o=t.supports("(--css-vars: yes)")&&t.supports("color","#00000000");return n=r||o,e||(zt=n),n}function qn(a,e,t){if(!a)return{x:0,y:0};var n=e.x,i=e.y,r=n+t.left,o=i+t.top,s,c;if(a.type==="touchstart"){var l=a;s=l.changedTouches[0].pageX-r,c=l.changedTouches[0].pageY-o}else{var u=a;s=u.pageX-r,c=u.pageY-o}return{x:s,y:c}}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Oe=["touchstart","pointerdown","mousedown","keydown"],xe=["touchend","pointerup","mouseup","contextmenu"],qt=[],vt=function(a){m(e,a);function e(t){var n=a.call(this,p(p({},e.defaultAdapter),t))||this;return n.activationAnimationHasEnded=!1,n.activationTimer=0,n.fgDeactivationRemovalTimer=0,n.fgScale="0",n.frame={width:0,height:0},n.initialSize=0,n.layoutFrame=0,n.maxRadius=0,n.unboundedCoords={left:0,top:0},n.activationState=n.defaultActivationState(),n.activationTimerCallback=function(){n.activationAnimationHasEnded=!0,n.runDeactivationUXLogicIfReady()},n.activateHandler=function(i){n.activateImpl(i)},n.deactivateHandler=function(){n.deactivateImpl()},n.focusHandler=function(){n.handleFocus()},n.blurHandler=function(){n.handleBlur()},n.resizeHandler=function(){n.layout()},n}return Object.defineProperty(e,"cssClasses",{get:function(){return Gn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Wn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return De},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this,n=this.supportsPressRipple();if(this.registerRootHandlers(n),n){var i=e.cssClasses,r=i.ROOT,o=i.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(r),t.adapter.isUnbounded()&&(t.adapter.addClass(o),t.layoutInternal())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var n=e.cssClasses,i=n.ROOT,r=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(i),t.adapter.removeClass(r),t.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(t){this.activateImpl(t)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0})},e.prototype.setUnbounded=function(t){var n=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){t.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){t.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(t){var n,i;if(t){try{for(var r=C(Oe),o=r.next();!o.done;o=r.next()){var s=o.value;this.adapter.registerInteractionHandler(s,this.activateHandler)}}catch(c){n={error:c}}finally{try{o&&!o.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(t){var n,i;if(t.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var r=C(xe),o=r.next();!o.done;o=r.next()){var s=o.value;this.adapter.registerDocumentInteractionHandler(s,this.deactivateHandler)}}catch(c){n={error:c}}finally{try{o&&!o.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}},e.prototype.deregisterRootHandlers=function(){var t,n;try{for(var i=C(Oe),r=i.next();!r.done;r=i.next()){var o=r.value;this.adapter.deregisterInteractionHandler(o,this.activateHandler)}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var t,n;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var i=C(xe),r=i.next();!r.done;r=i.next()){var o=r.value;this.adapter.deregisterDocumentInteractionHandler(o,this.deactivateHandler)}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e.prototype.removeCssVars=function(){var t=this,n=e.strings,i=Object.keys(n);i.forEach(function(r){r.indexOf("VAR_")===0&&t.adapter.updateCssVariable(n[r],null)})},e.prototype.activateImpl=function(t){var n=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState;if(!i.isActivated){var r=this.previousActivationEvent,o=r&&t!==void 0&&r.type!==t.type;if(!o){i.isActivated=!0,i.isProgrammatic=t===void 0,i.activationEvent=t,i.wasActivatedByPointer=i.isProgrammatic?!1:t!==void 0&&(t.type==="mousedown"||t.type==="touchstart"||t.type==="pointerdown");var s=t!==void 0&&qt.length>0&&qt.some(function(c){return n.adapter.containsEventTarget(c)});if(s){this.resetActivationState();return}t!==void 0&&(qt.push(t.target),this.registerDeactivationHandlers(t)),i.wasElementMadeActive=this.checkElementMadeActive(t),i.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){qt=[],!i.wasElementMadeActive&&t!==void 0&&(t.key===" "||t.keyCode===32)&&(i.wasElementMadeActive=n.checkElementMadeActive(t),i.wasElementMadeActive&&n.animateActivation()),i.wasElementMadeActive||(n.activationState=n.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(t){return t!==void 0&&t.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var t=this,n=e.strings,i=n.VAR_FG_TRANSLATE_START,r=n.VAR_FG_TRANSLATE_END,o=e.cssClasses,s=o.FG_DEACTIVATION,c=o.FG_ACTIVATION,l=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var u="",v="";if(!this.adapter.isUnbounded()){var f=this.getFgTranslationCoordinates(),h=f.startPoint,A=f.endPoint;u=h.x+"px, "+h.y+"px",v=A.x+"px, "+A.y+"px"}this.adapter.updateCssVariable(i,u),this.adapter.updateCssVariable(r,v),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(s),this.adapter.computeBoundingRect(),this.adapter.addClass(c),this.activationTimer=setTimeout(function(){t.activationTimerCallback()},l)},e.prototype.getFgTranslationCoordinates=function(){var t=this.activationState,n=t.activationEvent,i=t.wasActivatedByPointer,r;i?r=qn(n,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):r={x:this.frame.width/2,y:this.frame.height/2},r={x:r.x-this.initialSize/2,y:r.y-this.initialSize/2};var o={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:r,endPoint:o}},e.prototype.runDeactivationUXLogicIfReady=function(){var t=this,n=e.cssClasses.FG_DEACTIVATION,i=this.activationState,r=i.hasDeactivationUXRun,o=i.isActivated,s=r||!o;s&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(n),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(n)},De.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return t.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var t=this,n=this.activationState;if(n.isActivated){var i=p({},n);n.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(i)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(i),t.resetActivationState()}))}},e.prototype.animateDeactivation=function(t){var n=t.wasActivatedByPointer,i=t.wasElementMadeActive;(n||i)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var n=Math.max(this.frame.height,this.frame.width),i=function(){var o=Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2));return o+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?n:i();var r=Math.floor(n*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&r%2!==0?this.initialSize=r-1:this.initialSize=r,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var t=e.strings,n=t.VAR_FG_SIZE,i=t.VAR_LEFT,r=t.VAR_TOP,o=t.VAR_FG_SCALE;this.adapter.updateCssVariable(n,this.initialSize+"px"),this.adapter.updateCssVariable(o,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(i,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(r,this.unboundedCoords.top+"px"))},e}(S);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var U=function(a){m(e,a);function e(){var t=a!==null&&a.apply(this,arguments)||this;return t.disabled=!1,t}return e.attachTo=function(t,n){n===void 0&&(n={isUnbounded:void 0});var i=new e(t);return n.isUnbounded!==void 0&&(i.unbounded=n.isUnbounded),i},e.createAdapter=function(t){return{addClass:function(n){t.root.classList.add(n)},browserSupportsCssVars:function(){return zn(window)},computeBoundingRect:function(){return t.root.getBoundingClientRect()},containsEventTarget:function(n){return t.root.contains(n)},deregisterDocumentInteractionHandler:function(n,i){document.documentElement.removeEventListener(n,i,M())},deregisterInteractionHandler:function(n,i){t.root.removeEventListener(n,i,M())},deregisterResizeHandler:function(n){window.removeEventListener("resize",n)},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function(){return tt(t.root,":active")},isSurfaceDisabled:function(){return!!t.disabled},isUnbounded:function(){return!!t.unbounded},registerDocumentInteractionHandler:function(n,i){document.documentElement.addEventListener(n,i,M())},registerInteractionHandler:function(n,i){t.root.addEventListener(n,i,M())},registerResizeHandler:function(n){window.addEventListener("resize",n)},removeClass:function(n){t.root.classList.remove(n)},updateCssVariable:function(n,i){t.root.style.setProperty(n,i)}}},Object.defineProperty(e.prototype,"unbounded",{get:function(){return!!this.isUnbounded},set:function(t){this.isUnbounded=!!t,this.setUnbounded()},enumerable:!1,configurable:!0}),e.prototype.activate=function(){this.foundation.activate()},e.prototype.deactivate=function(){this.foundation.deactivate()},e.prototype.layout=function(){this.foundation.layout()},e.prototype.getDefaultFoundation=function(){return new vt(e.createAdapter(this))},e.prototype.initialSyncWithDOM=function(){var t=this.root;this.isUnbounded="mdcRippleIsUnbounded"in t.dataset},e.prototype.setUnbounded=function(){this.foundation.setUnbounded(!!this.isUnbounded)},e}(D);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Pt={ANIM_CHECKED_INDETERMINATE:"mdc-checkbox--anim-checked-indeterminate",ANIM_CHECKED_UNCHECKED:"mdc-checkbox--anim-checked-unchecked",ANIM_INDETERMINATE_CHECKED:"mdc-checkbox--anim-indeterminate-checked",ANIM_INDETERMINATE_UNCHECKED:"mdc-checkbox--anim-indeterminate-unchecked",ANIM_UNCHECKED_CHECKED:"mdc-checkbox--anim-unchecked-checked",ANIM_UNCHECKED_INDETERMINATE:"mdc-checkbox--anim-unchecked-indeterminate",BACKGROUND:"mdc-checkbox__background",CHECKED:"mdc-checkbox--checked",CHECKMARK:"mdc-checkbox__checkmark",CHECKMARK_PATH:"mdc-checkbox__checkmark-path",DISABLED:"mdc-checkbox--disabled",INDETERMINATE:"mdc-checkbox--indeterminate",MIXEDMARK:"mdc-checkbox__mixedmark",NATIVE_CONTROL:"mdc-checkbox__native-control",ROOT:"mdc-checkbox",SELECTED:"mdc-checkbox--selected",UPGRADED:"mdc-checkbox--upgraded"},j={ARIA_CHECKED_ATTR:"aria-checked",ARIA_CHECKED_INDETERMINATE_VALUE:"mixed",DATA_INDETERMINATE_ATTR:"data-indeterminate",NATIVE_CONTROL_SELECTOR:".mdc-checkbox__native-control",TRANSITION_STATE_CHECKED:"checked",TRANSITION_STATE_INDETERMINATE:"indeterminate",TRANSITION_STATE_INIT:"init",TRANSITION_STATE_UNCHECKED:"unchecked"},we={ANIM_END_LATCH_MS:250};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var jn=function(a){m(e,a);function e(t){var n=a.call(this,p(p({},e.defaultAdapter),t))||this;return n.currentCheckState=j.TRANSITION_STATE_INIT,n.currentAnimationClass="",n.animEndLatchTimer=0,n.enableAnimationEndHandler=!1,n}return Object.defineProperty(e,"cssClasses",{get:function(){return Pt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return j},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return we},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},forceLayout:function(){},hasNativeControl:function(){return!1},isAttachedToDOM:function(){return!1},isChecked:function(){return!1},isIndeterminate:function(){return!1},removeClass:function(){},removeNativeControlAttr:function(){},setNativeControlAttr:function(){},setNativeControlDisabled:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.currentCheckState=this.determineCheckState(),this.updateAriaChecked(),this.adapter.addClass(Pt.UPGRADED)},e.prototype.destroy=function(){clearTimeout(this.animEndLatchTimer)},e.prototype.setDisabled=function(t){this.adapter.setNativeControlDisabled(t),t?this.adapter.addClass(Pt.DISABLED):this.adapter.removeClass(Pt.DISABLED)},e.prototype.handleAnimationEnd=function(){var t=this;this.enableAnimationEndHandler&&(clearTimeout(this.animEndLatchTimer),this.animEndLatchTimer=setTimeout(function(){t.adapter.removeClass(t.currentAnimationClass),t.enableAnimationEndHandler=!1},we.ANIM_END_LATCH_MS))},e.prototype.handleChange=function(){this.transitionCheckState()},e.prototype.transitionCheckState=function(){if(this.adapter.hasNativeControl()){var t=this.currentCheckState,n=this.determineCheckState();if(t!==n){this.updateAriaChecked();var i=j.TRANSITION_STATE_UNCHECKED,r=Pt.SELECTED;n===i?this.adapter.removeClass(r):this.adapter.addClass(r),this.currentAnimationClass.length>0&&(clearTimeout(this.animEndLatchTimer),this.adapter.forceLayout(),this.adapter.removeClass(this.currentAnimationClass)),this.currentAnimationClass=this.getTransitionAnimationClass(t,n),this.currentCheckState=n,this.adapter.isAttachedToDOM()&&this.currentAnimationClass.length>0&&(this.adapter.addClass(this.currentAnimationClass),this.enableAnimationEndHandler=!0)}}},e.prototype.determineCheckState=function(){var t=j.TRANSITION_STATE_INDETERMINATE,n=j.TRANSITION_STATE_CHECKED,i=j.TRANSITION_STATE_UNCHECKED;return this.adapter.isIndeterminate()?t:this.adapter.isChecked()?n:i},e.prototype.getTransitionAnimationClass=function(t,n){var i=j.TRANSITION_STATE_INIT,r=j.TRANSITION_STATE_CHECKED,o=j.TRANSITION_STATE_UNCHECKED,s=e.cssClasses,c=s.ANIM_UNCHECKED_CHECKED,l=s.ANIM_UNCHECKED_INDETERMINATE,u=s.ANIM_CHECKED_UNCHECKED,v=s.ANIM_CHECKED_INDETERMINATE,f=s.ANIM_INDETERMINATE_CHECKED,h=s.ANIM_INDETERMINATE_UNCHECKED;switch(t){case i:return n===o?"":n===r?f:h;case o:return n===r?c:l;case r:return n===o?u:v;default:return n===r?f:h}},e.prototype.updateAriaChecked=function(){this.adapter.isIndeterminate()?this.adapter.setNativeControlAttr(j.ARIA_CHECKED_ATTR,j.ARIA_CHECKED_INDETERMINATE_VALUE):this.adapter.removeNativeControlAttr(j.ARIA_CHECKED_ATTR)},e}(S);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Me=["checked","indeterminate"],Xn=function(a){m(e,a);function e(){var t=a!==null&&a.apply(this,arguments)||this;return t.rippleSurface=t.createRipple(),t}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"ripple",{get:function(){return this.rippleSurface},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"checked",{get:function(){return this.getNativeControl().checked},set:function(t){this.getNativeControl().checked=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"indeterminate",{get:function(){return this.getNativeControl().indeterminate},set:function(t){this.getNativeControl().indeterminate=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function(){return this.getNativeControl().disabled},set:function(t){this.foundation.setDisabled(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this.getNativeControl().value},set:function(t){this.getNativeControl().value=t},enumerable:!1,configurable:!0}),e.prototype.initialize=function(){var t=j.DATA_INDETERMINATE_ATTR;this.getNativeControl().indeterminate=this.getNativeControl().getAttribute(t)==="true",this.getNativeControl().removeAttribute(t)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleChange=function(){t.foundation.handleChange()},this.handleAnimationEnd=function(){t.foundation.handleAnimationEnd()},this.getNativeControl().addEventListener("change",this.handleChange),this.listen(Se(window,"animationend"),this.handleAnimationEnd),this.installPropertyChangeHooks()},e.prototype.destroy=function(){this.rippleSurface.destroy(),this.getNativeControl().removeEventListener("change",this.handleChange),this.unlisten(Se(window,"animationend"),this.handleAnimationEnd),this.uninstallPropertyChangeHooks(),a.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},forceLayout:function(){return t.root.offsetWidth},hasNativeControl:function(){return!!t.getNativeControl()},isAttachedToDOM:function(){return!!t.root.parentNode},isChecked:function(){return t.checked},isIndeterminate:function(){return t.indeterminate},removeClass:function(i){t.root.classList.remove(i)},removeNativeControlAttr:function(i){t.getNativeControl().removeAttribute(i)},setNativeControlAttr:function(i,r){t.safeSetAttribute(t.getNativeControl(),i,r)},setNativeControlDisabled:function(i){t.getNativeControl().disabled=i}};return new jn(n)},e.prototype.createRipple=function(){var t=this,n=p(p({},U.createAdapter(this)),{deregisterInteractionHandler:function(i,r){t.getNativeControl().removeEventListener(i,r,M())},isSurfaceActive:function(){return tt(t.getNativeControl(),":active")},isUnbounded:function(){return!0},registerInteractionHandler:function(i,r){t.getNativeControl().addEventListener(i,r,M())}});return new U(this.root,new vt(n))},e.prototype.installPropertyChangeHooks=function(){var t,n,i=this,r=this.getNativeControl(),o=Object.getPrototypeOf(r),s=function(f){var h=Object.getOwnPropertyDescriptor(o,f);if(!Ne(h))return{value:void 0};var A=h.get,b={configurable:h.configurable,enumerable:h.enumerable,get:A,set:function(O){h.set.call(r,O),i.foundation.handleChange()}};Object.defineProperty(r,f,b)};try{for(var c=C(Me),l=c.next();!l.done;l=c.next()){var u=l.value,v=s(u);if(typeof v=="object")return v.value}}catch(f){t={error:f}}finally{try{l&&!l.done&&(n=c.return)&&n.call(c)}finally{if(t)throw t.error}}},e.prototype.uninstallPropertyChangeHooks=function(){var t,n,i=this.getNativeControl(),r=Object.getPrototypeOf(i);try{for(var o=C(Me),s=o.next();!s.done;s=o.next()){var c=s.value,l=Object.getOwnPropertyDescriptor(r,c);if(!Ne(l))return;Object.defineProperty(i,c,l)}}catch(u){t={error:u}}finally{try{s&&!s.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}},e.prototype.getNativeControl=function(){var t=j.NATIVE_CONTROL_SELECTOR,n=this.root.querySelector(t);if(!n)throw new Error("Checkbox component requires a "+t+" element");return n},e}(D);function Ne(a){return!!a&&typeof a.set=="function"}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var $n=function(a){m(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){t===void 0&&(t=function(o){return new kn(o)}),this.actions=new Map;for(var n=this.root.querySelectorAll(".mdc-evolution-chip__action"),i=0;i<n.length;i++){var r=t(n[i]);this.actions.set(r.actionType(),r)}},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleActionInteraction=function(n){t.foundation.handleActionInteraction(n)},this.handleActionNavigation=function(n){t.foundation.handleActionNavigation(n)},this.listen(Wt.INTERACTION,this.handleActionInteraction),this.listen(Wt.NAVIGATION,this.handleActionNavigation)},e.prototype.destroy=function(){this.unlisten(Wt.INTERACTION,this.handleActionInteraction),this.unlisten(Wt.NAVIGATION,this.handleActionNavigation),a.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},emitEvent:function(i,r){t.emit(i,r,!0)},getActions:function(){var i,r,o=[];try{for(var s=C(t.actions),c=s.next();!c.done;c=s.next()){var l=J(c.value,1),u=l[0];o.push(u)}}catch(v){i={error:v}}finally{try{c&&!c.done&&(r=s.return)&&r.call(s)}finally{if(i)throw i.error}}return o},getAttribute:function(i){return t.root.getAttribute(i)},getElementID:function(){return t.root.id},getOffsetWidth:function(){return t.root.offsetWidth},hasClass:function(i){return t.root.classList.contains(i)},isActionSelectable:function(i){var r=t.actions.get(i);return r?r.isSelectable():!1},isActionSelected:function(i){var r=t.actions.get(i);return r?r.isSelected():!1},isActionFocusable:function(i){var r=t.actions.get(i);return r?r.isFocusable():!1},isActionDisabled:function(i){var r=t.actions.get(i);return r?r.isDisabled():!1},isRTL:function(){return window.getComputedStyle(t.root).getPropertyValue("direction")==="rtl"},removeClass:function(i){t.root.classList.remove(i)},setActionDisabled:function(i,r){var o=t.actions.get(i);o&&o.setDisabled(r)},setActionFocus:function(i,r){var o=t.actions.get(i);o&&o.setFocus(r)},setActionSelected:function(i,r){var o=t.actions.get(i);o&&o.setSelected(r)},setStyleProperty:function(i,r){t.root.style.setProperty(i,r)}};return new Fn(n)},e.prototype.remove=function(){var t=this.root.parentNode;t!==null&&t.removeChild(this.root)},e.prototype.getActions=function(){return this.foundation.getActions()},e.prototype.getElementID=function(){return this.foundation.getElementID()},e.prototype.isDisabled=function(){return this.foundation.isDisabled()},e.prototype.setDisabled=function(t){this.foundation.setDisabled(t)},e.prototype.isActionFocusable=function(t){return this.foundation.isActionFocusable(t)},e.prototype.isActionSelectable=function(t){return this.foundation.isActionSelectable(t)},e.prototype.isActionSelected=function(t){return this.foundation.isActionSelected(t)},e.prototype.setActionFocus=function(t,n){this.foundation.setActionFocus(t,n)},e.prototype.setActionSelected=function(t,n){this.foundation.setActionSelected(t,n)},e.prototype.startAnimation=function(t){this.foundation.startAnimation(t)},e}(un);/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ee;(function(a){a.POLITE="polite",a.ASSERTIVE="assertive"})(Ee||(Ee={}));var Yn="data-mdc-dom-announce";function Qn(a,e){Zn.getInstance().say(a,e)}var Zn=function(){function a(){this.liveRegions=new Map}return a.getInstance=function(){return a.instance||(a.instance=new a),a.instance},a.prototype.say=function(e,t){var n,i,r=(n=t==null?void 0:t.priority)!==null&&n!==void 0?n:Ee.POLITE,o=(i=t==null?void 0:t.ownerDocument)!==null&&i!==void 0?i:document,s=this.getLiveRegion(r,o);s.textContent="",setTimeout(function(){s.textContent=e,o.addEventListener("click",c)},1);function c(){s.textContent="",o.removeEventListener("click",c)}},a.prototype.getLiveRegion=function(e,t){var n=this.liveRegions.get(t);n||(n=new Map,this.liveRegions.set(t,n));var i=n.get(e);if(i&&t.body.contains(i))return i;var r=this.createLiveRegion(e,t);return n.set(e,r),r},a.prototype.createLiveRegion=function(e,t){var n=t.createElement("div");return n.style.position="absolute",n.style.top="-9999px",n.style.left="-9999px",n.style.height="1px",n.style.overflow="hidden",n.setAttribute("aria-atomic","true"),n.setAttribute("aria-live",e),n.setAttribute(Yn,"true"),t.body.appendChild(n),n},a}();/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Jn=function(a){m(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){t===void 0&&(t=function(o){return new $n(o)}),this.chips=[];for(var n=this.root.querySelectorAll("."+Pn.CHIP),i=0;i<n.length;i++){var r=t(n[i]);this.chips.push(r)}},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleChipAnimation=function(n){t.foundation.handleChipAnimation(n)},this.handleChipInteraction=function(n){t.foundation.handleChipInteraction(n)},this.handleChipNavigation=function(n){t.foundation.handleChipNavigation(n)},this.listen(Dt.ANIMATION,this.handleChipAnimation),this.listen(Dt.INTERACTION,this.handleChipInteraction),this.listen(Dt.NAVIGATION,this.handleChipNavigation)},e.prototype.destroy=function(){this.unlisten(Dt.ANIMATION,this.handleChipAnimation),this.unlisten(Dt.INTERACTION,this.handleChipInteraction),this.unlisten(Dt.NAVIGATION,this.handleChipNavigation),a.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this,n={announceMessage:function(i){Qn(i)},emitEvent:function(i,r){t.emit(i,r,!0)},getAttribute:function(i){return t.root.getAttribute(i)},getChipActionsAtIndex:function(i){return t.isIndexValid(i)?t.chips[i].getActions():[]},getChipCount:function(){return t.chips.length},getChipIdAtIndex:function(i){return t.isIndexValid(i)?t.chips[i].getElementID():""},getChipIndexById:function(i){return t.chips.findIndex(function(r){return r.getElementID()===i})},isChipFocusableAtIndex:function(i,r){return t.isIndexValid(i)?t.chips[i].isActionFocusable(r):!1},isChipSelectableAtIndex:function(i,r){return t.isIndexValid(i)?t.chips[i].isActionSelectable(r):!1},isChipSelectedAtIndex:function(i,r){return t.isIndexValid(i)?t.chips[i].isActionSelected(r):!1},removeChipAtIndex:function(i){t.isIndexValid(i)&&(t.chips[i].destroy(),t.chips[i].remove(),t.chips.splice(i,1))},setChipFocusAtIndex:function(i,r,o){t.isIndexValid(i)&&t.chips[i].setActionFocus(r,o)},setChipSelectedAtIndex:function(i,r,o){t.isIndexValid(i)&&t.chips[i].setActionSelected(r,o)},startChipAnimationAtIndex:function(i,r){t.isIndexValid(i)&&t.chips[i].startAnimation(r)}};return new Hn(n)},e.prototype.getChipIndexByID=function(t){return this.chips.findIndex(function(n){return n.getElementID()===t})},e.prototype.getChipIdAtIndex=function(t){return this.isIndexValid(t)?this.chips[t].getElementID():""},e.prototype.getSelectedChipIndexes=function(){return this.foundation.getSelectedChipIndexes()},e.prototype.setChipSelected=function(t,n,i){this.foundation.setChipSelected(t,n,i)},e.prototype.isChipSelected=function(t,n){return this.foundation.isChipSelected(t,n)},e.prototype.addChip=function(t){this.foundation.addChip(t)},e.prototype.removeChip=function(t){this.foundation.removeChip(t)},e.prototype.isIndexValid=function(t){return t>-1&&t<this.chips.length},e}(un);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function ti(a,e,t){return e(a,{initialFocusEl:t})}function ei(a){return a?a.scrollHeight>a.offsetHeight:!1}function ni(a){return a?a.scrollTop===0:!1}function ii(a){return a?Math.ceil(a.scrollHeight-a.scrollTop)===a.clientHeight:!1}function ri(a){var e=new Set;return[].forEach.call(a,function(t){return e.add(t.offsetTop)}),e.size>1}/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var le="mdc-dom-focus-sentinel",ai=function(){function a(e,t){t===void 0&&(t={}),this.root=e,this.options=t,this.elFocusedBeforeTrapFocus=null}return a.prototype.trapFocus=function(){var e=this.getFocusableElements(this.root);if(e.length===0)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(e,this.options.initialFocusEl)},a.prototype.releaseFocus=function(){Array.from(this.root.querySelectorAll("."+le)).forEach(function(e){e.parentElement.removeChild(e)}),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},a.prototype.wrapTabFocus=function(e){var t=this,n=this.createSentinel(),i=this.createSentinel();n.addEventListener("focus",function(){var r=t.getFocusableElements(e);r.length>0&&r[r.length-1].focus()}),i.addEventListener("focus",function(){var r=t.getFocusableElements(e);r.length>0&&r[0].focus()}),e.insertBefore(n,e.children[0]),e.appendChild(i)},a.prototype.focusInitialElement=function(e,t){var n=0;t&&(n=Math.max(e.indexOf(t),0)),e[n].focus()},a.prototype.getFocusableElements=function(e){var t=Array.from(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));return t.filter(function(n){var i=n.getAttribute("aria-disabled")==="true"||n.getAttribute("disabled")!=null||n.getAttribute("hidden")!=null||n.getAttribute("aria-hidden")==="true",r=n.tabIndex>=0&&n.getBoundingClientRect().width>0&&!n.classList.contains(le)&&!i,o=!1;if(r){var s=getComputedStyle(n);o=s.display==="none"||s.visibility==="hidden"}return r&&!o})},a.prototype.createSentinel=function(){var e=document.createElement("div");return e.setAttribute("tabindex","0"),e.setAttribute("aria-hidden","true"),e.classList.add(le),e},a}();/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var hn=function(){function a(){this.rafIDs=new Map}return a.prototype.request=function(e,t){var n=this;this.cancel(e);var i=requestAnimationFrame(function(r){n.rafIDs.delete(e),t(r)});this.rafIDs.set(e,i)},a.prototype.cancel=function(e){var t=this.rafIDs.get(e);t&&(cancelAnimationFrame(t),this.rafIDs.delete(e))},a.prototype.cancelAll=function(){var e=this;this.rafIDs.forEach(function(t,n){e.cancel(n)})},a.prototype.getQueue=function(){var e=[];return this.rafIDs.forEach(function(t,n){e.push(n)}),e},a}();/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var _={CLOSING:"mdc-dialog--closing",OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",SCROLLABLE:"mdc-dialog--scrollable",SCROLL_LOCK:"mdc-dialog-scroll-lock",STACKED:"mdc-dialog--stacked",FULLSCREEN:"mdc-dialog--fullscreen",SCROLL_DIVIDER_HEADER:"mdc-dialog-scroll-divider-header",SCROLL_DIVIDER_FOOTER:"mdc-dialog-scroll-divider-footer",SURFACE_SCRIM_SHOWN:"mdc-dialog__surface-scrim--shown",SURFACE_SCRIM_SHOWING:"mdc-dialog__surface-scrim--showing",SURFACE_SCRIM_HIDING:"mdc-dialog__surface-scrim--hiding",SCRIM_HIDDEN:"mdc-dialog__scrim--hidden"},Ht={ACTION_ATTRIBUTE:"data-mdc-dialog-action",BUTTON_DEFAULT_ATTRIBUTE:"data-mdc-dialog-button-default",BUTTON_SELECTOR:".mdc-dialog__button",CLOSED_EVENT:"MDCDialog:closed",CLOSE_ACTION:"close",CLOSING_EVENT:"MDCDialog:closing",CONTAINER_SELECTOR:".mdc-dialog__container",CONTENT_SELECTOR:".mdc-dialog__content",DESTROY_ACTION:"destroy",INITIAL_FOCUS_ATTRIBUTE:"data-mdc-dialog-initial-focus",OPENED_EVENT:"MDCDialog:opened",OPENING_EVENT:"MDCDialog:opening",SCRIM_SELECTOR:".mdc-dialog__scrim",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item",".mdc-menu .mdc-deprecated-list-item"].join(", "),SURFACE_SELECTOR:".mdc-dialog__surface"},de={DIALOG_ANIMATION_CLOSE_TIME_MS:75,DIALOG_ANIMATION_OPEN_TIME_MS:150};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var oe;(function(a){a.POLL_SCROLL_POS="poll_scroll_position",a.POLL_LAYOUT_CHANGE="poll_layout_change"})(oe||(oe={}));var fn=function(a){m(e,a);function e(t){var n=a.call(this,p(p({},e.defaultAdapter),t))||this;return n.dialogOpen=!1,n.isFullscreen=!1,n.animationFrame=0,n.animationTimer=0,n.escapeKeyAction=Ht.CLOSE_ACTION,n.scrimClickAction=Ht.CLOSE_ACTION,n.autoStackButtons=!0,n.areButtonsStacked=!1,n.suppressDefaultPressSelector=Ht.SUPPRESS_DEFAULT_PRESS_SELECTOR,n.animFrame=new hn,n.contentScrollHandler=function(){n.handleScrollEvent()},n.windowResizeHandler=function(){n.layout()},n.windowOrientationChangeHandler=function(){n.layout()},n}return Object.defineProperty(e,"cssClasses",{get:function(){return _},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Ht},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return de},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},getInitialFocusEl:function(){return null},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){},registerContentEventHandler:function(){},deregisterContentEventHandler:function(){},isScrollableContentAtTop:function(){return!1},isScrollableContentAtBottom:function(){return!1},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.hasClass(_.STACKED)&&this.setAutoStackButtons(!1),this.isFullscreen=this.adapter.hasClass(_.FULLSCREEN)},e.prototype.destroy=function(){this.animationTimer&&(clearTimeout(this.animationTimer),this.handleAnimationTimerEnd()),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.animFrame.cancelAll(),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler)},e.prototype.open=function(t){var n=this;this.dialogOpen=!0,this.adapter.notifyOpening(),this.adapter.addClass(_.OPENING),this.isFullscreen&&this.adapter.registerContentEventHandler("scroll",this.contentScrollHandler),t&&t.isAboveFullscreenDialog&&this.adapter.addClass(_.SCRIM_HIDDEN),this.adapter.registerWindowEventHandler("resize",this.windowResizeHandler),this.adapter.registerWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),this.runNextAnimationFrame(function(){n.adapter.addClass(_.OPEN),(!t||!t.isScrimless)&&n.adapter.addBodyClass(_.SCROLL_LOCK),n.layout(),n.animationTimer=setTimeout(function(){n.handleAnimationTimerEnd(),n.adapter.trapFocus(n.adapter.getInitialFocusEl()),n.adapter.notifyOpened()},de.DIALOG_ANIMATION_OPEN_TIME_MS)})},e.prototype.close=function(t){var n=this;t===void 0&&(t=""),this.dialogOpen&&(this.dialogOpen=!1,this.adapter.notifyClosing(t),this.adapter.addClass(_.CLOSING),this.adapter.removeClass(_.OPEN),this.adapter.removeBodyClass(_.SCROLL_LOCK),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){n.adapter.releaseFocus(),n.handleAnimationTimerEnd(),n.adapter.notifyClosed(t)},de.DIALOG_ANIMATION_CLOSE_TIME_MS))},e.prototype.showSurfaceScrim=function(){var t=this;this.adapter.addClass(_.SURFACE_SCRIM_SHOWING),this.runNextAnimationFrame(function(){t.adapter.addClass(_.SURFACE_SCRIM_SHOWN)})},e.prototype.hideSurfaceScrim=function(){this.adapter.removeClass(_.SURFACE_SCRIM_SHOWN),this.adapter.addClass(_.SURFACE_SCRIM_HIDING)},e.prototype.handleSurfaceScrimTransitionEnd=function(){this.adapter.removeClass(_.SURFACE_SCRIM_HIDING),this.adapter.removeClass(_.SURFACE_SCRIM_SHOWING)},e.prototype.isOpen=function(){return this.dialogOpen},e.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction},e.prototype.setEscapeKeyAction=function(t){this.escapeKeyAction=t},e.prototype.getScrimClickAction=function(){return this.scrimClickAction},e.prototype.setScrimClickAction=function(t){this.scrimClickAction=t},e.prototype.getAutoStackButtons=function(){return this.autoStackButtons},e.prototype.setAutoStackButtons=function(t){this.autoStackButtons=t},e.prototype.getSuppressDefaultPressSelector=function(){return this.suppressDefaultPressSelector},e.prototype.setSuppressDefaultPressSelector=function(t){this.suppressDefaultPressSelector=t},e.prototype.layout=function(){var t=this;this.animFrame.request(oe.POLL_LAYOUT_CHANGE,function(){t.layoutInternal()})},e.prototype.handleClick=function(t){var n=this.adapter.eventTargetMatches(t.target,Ht.SCRIM_SELECTOR);if(n&&this.scrimClickAction!=="")this.close(this.scrimClickAction);else{var i=this.adapter.getActionFromEvent(t);i&&this.close(i)}},e.prototype.handleKeydown=function(t){var n=t.key==="Enter"||t.keyCode===13;if(n){var i=this.adapter.getActionFromEvent(t);if(!i){var r=t.composedPath?t.composedPath()[0]:t.target,o=this.suppressDefaultPressSelector?!this.adapter.eventTargetMatches(r,this.suppressDefaultPressSelector):!0;n&&o&&this.adapter.clickDefaultButton()}}},e.prototype.handleDocumentKeydown=function(t){var n=t.key==="Escape"||t.keyCode===27;n&&this.escapeKeyAction!==""&&this.close(this.escapeKeyAction)},e.prototype.handleScrollEvent=function(){var t=this;this.animFrame.request(oe.POLL_SCROLL_POS,function(){t.toggleScrollDividerHeader(),t.toggleScrollDividerFooter()})},e.prototype.layoutInternal=function(){this.autoStackButtons&&this.detectStackedButtons(),this.toggleScrollableClasses()},e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(_.OPENING),this.adapter.removeClass(_.CLOSING)},e.prototype.runNextAnimationFrame=function(t){var n=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){n.animationFrame=0,clearTimeout(n.animationTimer),n.animationTimer=setTimeout(t,0)})},e.prototype.detectStackedButtons=function(){this.adapter.removeClass(_.STACKED);var t=this.adapter.areButtonsStacked();t&&this.adapter.addClass(_.STACKED),t!==this.areButtonsStacked&&(this.adapter.reverseButtons(),this.areButtonsStacked=t)},e.prototype.toggleScrollableClasses=function(){this.adapter.removeClass(_.SCROLLABLE),this.adapter.isContentScrollable()&&(this.adapter.addClass(_.SCROLLABLE),this.isFullscreen&&(this.toggleScrollDividerHeader(),this.toggleScrollDividerFooter()))},e.prototype.toggleScrollDividerHeader=function(){this.adapter.isScrollableContentAtTop()?this.adapter.hasClass(_.SCROLL_DIVIDER_HEADER)&&this.adapter.removeClass(_.SCROLL_DIVIDER_HEADER):this.adapter.addClass(_.SCROLL_DIVIDER_HEADER)},e.prototype.toggleScrollDividerFooter=function(){this.adapter.isScrollableContentAtBottom()?this.adapter.hasClass(_.SCROLL_DIVIDER_FOOTER)&&this.adapter.removeClass(_.SCROLL_DIVIDER_FOOTER):this.adapter.addClass(_.SCROLL_DIVIDER_FOOTER)},e}(S);/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var W=fn.strings,oi=function(a){m(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return Object.defineProperty(e.prototype,"isOpen",{get:function(){return this.foundation.isOpen()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"escapeKeyAction",{get:function(){return this.foundation.getEscapeKeyAction()},set:function(t){this.foundation.setEscapeKeyAction(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scrimClickAction",{get:function(){return this.foundation.getScrimClickAction()},set:function(t){this.foundation.setScrimClickAction(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"autoStackButtons",{get:function(){return this.foundation.getAutoStackButtons()},set:function(t){this.foundation.setAutoStackButtons(t)},enumerable:!1,configurable:!0}),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){var n,i;t===void 0&&(t=function(l,u){return new ai(l,u)});var r=this.root.querySelector(W.CONTAINER_SELECTOR);if(!r)throw new Error("Dialog component requires a "+W.CONTAINER_SELECTOR+" container element");this.container=r,this.content=this.root.querySelector(W.CONTENT_SELECTOR),this.buttons=Array.from(this.root.querySelectorAll(W.BUTTON_SELECTOR)),this.defaultButton=this.root.querySelector("["+W.BUTTON_DEFAULT_ATTRIBUTE+"]"),this.focusTrapFactory=t,this.buttonRipples=[];try{for(var o=C(this.buttons),s=o.next();!s.done;s=o.next()){var c=s.value;this.buttonRipples.push(new U(c))}}catch(l){n={error:l}}finally{try{s&&!s.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}},e.prototype.initialSyncWithDOM=function(){var t=this;this.focusTrap=ti(this.container,this.focusTrapFactory,this.getInitialFocusEl()||void 0),this.handleClick=this.foundation.handleClick.bind(this.foundation),this.handleKeydown=this.foundation.handleKeydown.bind(this.foundation),this.handleDocumentKeydown=this.foundation.handleDocumentKeydown.bind(this.foundation),this.handleOpening=function(){document.addEventListener("keydown",t.handleDocumentKeydown)},this.handleClosing=function(){document.removeEventListener("keydown",t.handleDocumentKeydown)},this.listen("click",this.handleClick),this.listen("keydown",this.handleKeydown),this.listen(W.OPENING_EVENT,this.handleOpening),this.listen(W.CLOSING_EVENT,this.handleClosing)},e.prototype.destroy=function(){this.unlisten("click",this.handleClick),this.unlisten("keydown",this.handleKeydown),this.unlisten(W.OPENING_EVENT,this.handleOpening),this.unlisten(W.CLOSING_EVENT,this.handleClosing),this.handleClosing(),this.buttonRipples.forEach(function(t){t.destroy()}),a.prototype.destroy.call(this)},e.prototype.layout=function(){this.foundation.layout()},e.prototype.open=function(){this.foundation.open()},e.prototype.close=function(t){t===void 0&&(t=""),this.foundation.close(t)},e.prototype.getDefaultFoundation=function(){var t=this,n={addBodyClass:function(i){document.body.classList.add(i)},addClass:function(i){t.root.classList.add(i)},areButtonsStacked:function(){return ri(t.buttons)},clickDefaultButton:function(){t.defaultButton&&!t.defaultButton.disabled&&t.defaultButton.click()},eventTargetMatches:function(i,r){return i?tt(i,r):!1},getActionFromEvent:function(i){if(!i.target)return"";var r=Nt(i.target,"["+W.ACTION_ATTRIBUTE+"]");return r&&r.getAttribute(W.ACTION_ATTRIBUTE)},getInitialFocusEl:function(){return t.getInitialFocusEl()},hasClass:function(i){return t.root.classList.contains(i)},isContentScrollable:function(){return ei(t.content)},notifyClosed:function(i){t.emit(W.CLOSED_EVENT,i?{action:i}:{})},notifyClosing:function(i){t.emit(W.CLOSING_EVENT,i?{action:i}:{})},notifyOpened:function(){t.emit(W.OPENED_EVENT,{})},notifyOpening:function(){t.emit(W.OPENING_EVENT,{})},releaseFocus:function(){t.focusTrap.releaseFocus()},removeBodyClass:function(i){document.body.classList.remove(i)},removeClass:function(i){t.root.classList.remove(i)},reverseButtons:function(){t.buttons.reverse(),t.buttons.forEach(function(i){i.parentElement.appendChild(i)})},trapFocus:function(){t.focusTrap.trapFocus()},registerContentEventHandler:function(i,r){t.content instanceof HTMLElement&&t.content.addEventListener(i,r)},deregisterContentEventHandler:function(i,r){t.content instanceof HTMLElement&&t.content.removeEventListener(i,r)},isScrollableContentAtTop:function(){return ni(t.content)},isScrollableContentAtBottom:function(){return ii(t.content)},registerWindowEventHandler:function(i,r){window.addEventListener(i,r)},deregisterWindowEventHandler:function(i,r){window.removeEventListener(i,r)}};return new fn(n)},e.prototype.getInitialFocusEl=function(){return this.root.querySelector("["+W.INITIAL_FOCUS_ATTRIBUTE+"]")},e}(D);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ie=function(){function a(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(a,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),a.prototype.init=function(){},a.prototype.destroy=function(){},a}();/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function si(a){return String(a).replace(/\-([a-z])/g,function(e,t){return t.toUpperCase()})}var mn=function(){function a(e,t){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];this.root=e,this.initialize.apply(this,ct([],J(n))),this.foundation=t===void 0?this.getDefaultFoundation():t,this.foundation.init(),this.initialSyncWithDOM()}return a.attachTo=function(e){return new a(e,new Ie({}))},a.prototype.initialize=function(){},a.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},a.prototype.initialSyncWithDOM=function(){},a.prototype.destroy=function(){this.foundation.destroy()},a.prototype.listen=function(e,t,n){this.root.addEventListener(e,t,n)},a.prototype.unlisten=function(e,t,n){this.root.removeEventListener(e,t,n)},a.prototype.emit=function(e,t,n){n===void 0&&(n=!1);var i;typeof CustomEvent=="function"?i=new CustomEvent(e,{bubbles:n,detail:t}):(i=document.createEvent("CustomEvent"),i.initCustomEvent(e,n,!1,t)),this.root.dispatchEvent(i)},a.prototype.safeSetAttribute=function(e,t,n){if(t.toLowerCase()==="tabindex")e.tabIndex=Number(n);else if(t.indexOf("data-")===0){var i=si(t.replace(/^data-/,""));e.dataset[i]=n}else dn([re.safeAttrPrefix(Fe||(Fe=ie(["aria-"],["aria-"]))),re.safeAttrPrefix(ke||(ke=ie(["role"],["role"])))],e,t,n)},a}(),Fe,ke;/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function jt(a){return a===void 0&&(a=window),ci(a)?{passive:!0}:!1}function ci(a){a===void 0&&(a=window);var e=!1;try{var t={get passive(){return e=!0,!1}},n=function(){};a.document.addEventListener("test",n,t),a.document.removeEventListener("test",n,t)}catch{e=!1}return e}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function li(a,e){var t=a.matches||a.webkitMatchesSelector||a.msMatchesSelector;return t.call(a,e)}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var di={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},ui={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},Pe={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},Xt;function pi(a,e){e===void 0&&(e=!1);var t=a.CSS,n=Xt;if(typeof Xt=="boolean"&&!e)return Xt;var i=t&&typeof t.supports=="function";if(!i)return!1;var r=t.supports("--css-vars","yes"),o=t.supports("(--css-vars: yes)")&&t.supports("color","#00000000");return n=r||o,e||(Xt=n),n}function hi(a,e,t){if(!a)return{x:0,y:0};var n=e.x,i=e.y,r=n+t.left,o=i+t.top,s,c;if(a.type==="touchstart"){var l=a;s=l.changedTouches[0].pageX-r,c=l.changedTouches[0].pageY-o}else{var u=a;s=u.pageX-r,c=u.pageY-o}return{x:s,y:c}}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var He=["touchstart","pointerdown","mousedown","keydown"],Be=["touchend","pointerup","mouseup","contextmenu"],$t=[],fi=function(a){m(e,a);function e(t){var n=a.call(this,p(p({},e.defaultAdapter),t))||this;return n.activationAnimationHasEnded=!1,n.activationTimer=0,n.fgDeactivationRemovalTimer=0,n.fgScale="0",n.frame={width:0,height:0},n.initialSize=0,n.layoutFrame=0,n.maxRadius=0,n.unboundedCoords={left:0,top:0},n.activationState=n.defaultActivationState(),n.activationTimerCallback=function(){n.activationAnimationHasEnded=!0,n.runDeactivationUXLogicIfReady()},n.activateHandler=function(i){n.activateImpl(i)},n.deactivateHandler=function(){n.deactivateImpl()},n.focusHandler=function(){n.handleFocus()},n.blurHandler=function(){n.handleBlur()},n.resizeHandler=function(){n.layout()},n}return Object.defineProperty(e,"cssClasses",{get:function(){return di},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ui},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Pe},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this,n=this.supportsPressRipple();if(this.registerRootHandlers(n),n){var i=e.cssClasses,r=i.ROOT,o=i.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(r),t.adapter.isUnbounded()&&(t.adapter.addClass(o),t.layoutInternal())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var n=e.cssClasses,i=n.ROOT,r=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(i),t.adapter.removeClass(r),t.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(t){this.activateImpl(t)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0})},e.prototype.setUnbounded=function(t){var n=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){t.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){t.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(t){var n,i;if(t){try{for(var r=C(He),o=r.next();!o.done;o=r.next()){var s=o.value;this.adapter.registerInteractionHandler(s,this.activateHandler)}}catch(c){n={error:c}}finally{try{o&&!o.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(t){var n,i;if(t.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var r=C(Be),o=r.next();!o.done;o=r.next()){var s=o.value;this.adapter.registerDocumentInteractionHandler(s,this.deactivateHandler)}}catch(c){n={error:c}}finally{try{o&&!o.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}},e.prototype.deregisterRootHandlers=function(){var t,n;try{for(var i=C(He),r=i.next();!r.done;r=i.next()){var o=r.value;this.adapter.deregisterInteractionHandler(o,this.activateHandler)}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var t,n;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var i=C(Be),r=i.next();!r.done;r=i.next()){var o=r.value;this.adapter.deregisterDocumentInteractionHandler(o,this.deactivateHandler)}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e.prototype.removeCssVars=function(){var t=this,n=e.strings,i=Object.keys(n);i.forEach(function(r){r.indexOf("VAR_")===0&&t.adapter.updateCssVariable(n[r],null)})},e.prototype.activateImpl=function(t){var n=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState;if(!i.isActivated){var r=this.previousActivationEvent,o=r&&t!==void 0&&r.type!==t.type;if(!o){i.isActivated=!0,i.isProgrammatic=t===void 0,i.activationEvent=t,i.wasActivatedByPointer=i.isProgrammatic?!1:t!==void 0&&(t.type==="mousedown"||t.type==="touchstart"||t.type==="pointerdown");var s=t!==void 0&&$t.length>0&&$t.some(function(c){return n.adapter.containsEventTarget(c)});if(s){this.resetActivationState();return}t!==void 0&&($t.push(t.target),this.registerDeactivationHandlers(t)),i.wasElementMadeActive=this.checkElementMadeActive(t),i.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){$t=[],!i.wasElementMadeActive&&t!==void 0&&(t.key===" "||t.keyCode===32)&&(i.wasElementMadeActive=n.checkElementMadeActive(t),i.wasElementMadeActive&&n.animateActivation()),i.wasElementMadeActive||(n.activationState=n.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(t){return t!==void 0&&t.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var t=this,n=e.strings,i=n.VAR_FG_TRANSLATE_START,r=n.VAR_FG_TRANSLATE_END,o=e.cssClasses,s=o.FG_DEACTIVATION,c=o.FG_ACTIVATION,l=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var u="",v="";if(!this.adapter.isUnbounded()){var f=this.getFgTranslationCoordinates(),h=f.startPoint,A=f.endPoint;u=h.x+"px, "+h.y+"px",v=A.x+"px, "+A.y+"px"}this.adapter.updateCssVariable(i,u),this.adapter.updateCssVariable(r,v),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(s),this.adapter.computeBoundingRect(),this.adapter.addClass(c),this.activationTimer=setTimeout(function(){t.activationTimerCallback()},l)},e.prototype.getFgTranslationCoordinates=function(){var t=this.activationState,n=t.activationEvent,i=t.wasActivatedByPointer,r;i?r=hi(n,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):r={x:this.frame.width/2,y:this.frame.height/2},r={x:r.x-this.initialSize/2,y:r.y-this.initialSize/2};var o={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:r,endPoint:o}},e.prototype.runDeactivationUXLogicIfReady=function(){var t=this,n=e.cssClasses.FG_DEACTIVATION,i=this.activationState,r=i.hasDeactivationUXRun,o=i.isActivated,s=r||!o;s&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(n),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(n)},Pe.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return t.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var t=this,n=this.activationState;if(n.isActivated){var i=p({},n);n.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(i)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(i),t.resetActivationState()}))}},e.prototype.animateDeactivation=function(t){var n=t.wasActivatedByPointer,i=t.wasElementMadeActive;(n||i)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var n=Math.max(this.frame.height,this.frame.width),i=function(){var o=Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2));return o+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?n:i();var r=Math.floor(n*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&r%2!==0?this.initialSize=r-1:this.initialSize=r,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var t=e.strings,n=t.VAR_FG_SIZE,i=t.VAR_LEFT,r=t.VAR_TOP,o=t.VAR_FG_SCALE;this.adapter.updateCssVariable(n,this.initialSize+"px"),this.adapter.updateCssVariable(o,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(i,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(r,this.unboundedCoords.top+"px"))},e}(Ie);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var mi=function(a){m(e,a);function e(){var t=a!==null&&a.apply(this,arguments)||this;return t.disabled=!1,t}return e.attachTo=function(t,n){n===void 0&&(n={isUnbounded:void 0});var i=new e(t);return n.isUnbounded!==void 0&&(i.unbounded=n.isUnbounded),i},e.createAdapter=function(t){return{addClass:function(n){t.root.classList.add(n)},browserSupportsCssVars:function(){return pi(window)},computeBoundingRect:function(){return t.root.getBoundingClientRect()},containsEventTarget:function(n){return t.root.contains(n)},deregisterDocumentInteractionHandler:function(n,i){document.documentElement.removeEventListener(n,i,jt())},deregisterInteractionHandler:function(n,i){t.root.removeEventListener(n,i,jt())},deregisterResizeHandler:function(n){window.removeEventListener("resize",n)},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function(){return li(t.root,":active")},isSurfaceDisabled:function(){return!!t.disabled},isUnbounded:function(){return!!t.unbounded},registerDocumentInteractionHandler:function(n,i){document.documentElement.addEventListener(n,i,jt())},registerInteractionHandler:function(n,i){t.root.addEventListener(n,i,jt())},registerResizeHandler:function(n){window.addEventListener("resize",n)},removeClass:function(n){t.root.classList.remove(n)},updateCssVariable:function(n,i){t.root.style.setProperty(n,i)}}},Object.defineProperty(e.prototype,"unbounded",{get:function(){return!!this.isUnbounded},set:function(t){this.isUnbounded=!!t,this.setUnbounded()},enumerable:!1,configurable:!0}),e.prototype.activate=function(){this.foundation.activate()},e.prototype.deactivate=function(){this.foundation.deactivate()},e.prototype.layout=function(){this.foundation.layout()},e.prototype.getDefaultFoundation=function(){return new fi(e.createAdapter(this))},e.prototype.initialSyncWithDOM=function(){var t=this.root;this.isUnbounded="mdcRippleIsUnbounded"in t.dataset},e.prototype.setUnbounded=function(){this.foundation.setUnbounded(!!this.isUnbounded)},e}(mn);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Yt={ICON_BUTTON_ON:"mdc-icon-button--on",ROOT:"mdc-icon-button"},dt={ARIA_LABEL:"aria-label",ARIA_PRESSED:"aria-pressed",DATA_ARIA_LABEL_OFF:"data-aria-label-off",DATA_ARIA_LABEL_ON:"data-aria-label-on",CHANGE_EVENT:"MDCIconButtonToggle:change"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var vn=function(a){m(e,a);function e(t){var n=a.call(this,p(p({},e.defaultAdapter),t))||this;return n.hasToggledAriaLabel=!1,n}return Object.defineProperty(e,"cssClasses",{get:function(){return Yt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return dt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},hasClass:function(){return!1},notifyChange:function(){},removeClass:function(){},getAttr:function(){return null},setAttr:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this.adapter.getAttr(dt.DATA_ARIA_LABEL_ON),n=this.adapter.getAttr(dt.DATA_ARIA_LABEL_OFF);if(t&&n){if(this.adapter.getAttr(dt.ARIA_PRESSED)!==null)throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");this.hasToggledAriaLabel=!0}else this.adapter.setAttr(dt.ARIA_PRESSED,String(this.isOn()))},e.prototype.handleClick=function(){this.toggle(),this.adapter.notifyChange({isOn:this.isOn()})},e.prototype.isOn=function(){return this.adapter.hasClass(Yt.ICON_BUTTON_ON)},e.prototype.toggle=function(t){if(t===void 0&&(t=!this.isOn()),t?this.adapter.addClass(Yt.ICON_BUTTON_ON):this.adapter.removeClass(Yt.ICON_BUTTON_ON),this.hasToggledAriaLabel){var n=t?this.adapter.getAttr(dt.DATA_ARIA_LABEL_ON):this.adapter.getAttr(dt.DATA_ARIA_LABEL_OFF);this.adapter.setAttr(dt.ARIA_LABEL,n||"")}else this.adapter.setAttr(dt.ARIA_PRESSED,""+t)},e}(Ie);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var vi=vn.strings,gi=function(a){m(e,a);function e(){var t=a!==null&&a.apply(this,arguments)||this;return t.rippleComponent=t.createRipple(),t}return e.attachTo=function(t){return new e(t)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleClick=function(){t.foundation.handleClick()},this.listen("click",this.handleClick)},e.prototype.destroy=function(){this.unlisten("click",this.handleClick),this.ripple.destroy(),a.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},hasClass:function(i){return t.root.classList.contains(i)},notifyChange:function(i){t.emit(vi.CHANGE_EVENT,i)},removeClass:function(i){t.root.classList.remove(i)},getAttr:function(i){return t.root.getAttribute(i)},setAttr:function(i,r){t.safeSetAttribute(t.root,i,r)}};return new vn(n)},Object.defineProperty(e.prototype,"ripple",{get:function(){return this.rippleComponent},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"on",{get:function(){return this.foundation.isOn()},set:function(t){this.foundation.toggle(t)},enumerable:!1,configurable:!0}),e.prototype.createRipple=function(){var t=new mi(this.root);return t.unbounded=!0,t},e}(mn);/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var $={CLOSED_CLASS:"mdc-linear-progress--closed",CLOSED_ANIMATION_OFF_CLASS:"mdc-linear-progress--closed-animation-off",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed",ANIMATION_READY_CLASS:"mdc-linear-progress--animation-ready"},et={ARIA_HIDDEN:"aria-hidden",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",BUFFER_BAR_SELECTOR:".mdc-linear-progress__buffer-bar",FLEX_BASIS:"flex-basis",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"},Bt={PRIMARY_HALF:.8367142,PRIMARY_FULL:2.00611057,SECONDARY_QUARTER:.37651913,SECONDARY_HALF:.84386165,SECONDARY_FULL:1.60277782};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ue=function(a){m(e,a);function e(t){var n=a.call(this,p(p({},e.defaultAdapter),t))||this;return n.observer=null,n}return Object.defineProperty(e,"cssClasses",{get:function(){return $},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return et},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},attachResizeObserver:function(){return null},forceLayout:function(){},getWidth:function(){return 0},hasClass:function(){return!1},setBufferBarStyle:function(){return null},setPrimaryBarStyle:function(){return null},setStyle:function(){},removeAttribute:function(){},removeClass:function(){},setAttribute:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this;this.determinate=!this.adapter.hasClass($.INDETERMINATE_CLASS),this.adapter.addClass($.ANIMATION_READY_CLASS),this.progress=0,this.buffer=1,this.observer=this.adapter.attachResizeObserver(function(n){var i,r;if(!t.determinate)try{for(var o=C(n),s=o.next();!s.done;s=o.next()){var c=s.value;c.contentRect&&t.calculateAndSetDimensions(c.contentRect.width)}}catch(l){i={error:l}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}}),!this.determinate&&this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth())},e.prototype.setDeterminate=function(t){if(this.determinate=t,this.determinate){this.adapter.removeClass($.INDETERMINATE_CLASS),this.adapter.setAttribute(et.ARIA_VALUENOW,this.progress.toString()),this.adapter.setAttribute(et.ARIA_VALUEMAX,"1"),this.adapter.setAttribute(et.ARIA_VALUEMIN,"0"),this.setPrimaryBarProgress(this.progress),this.setBufferBarProgress(this.buffer);return}this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth()),this.adapter.addClass($.INDETERMINATE_CLASS),this.adapter.removeAttribute(et.ARIA_VALUENOW),this.adapter.removeAttribute(et.ARIA_VALUEMAX),this.adapter.removeAttribute(et.ARIA_VALUEMIN),this.setPrimaryBarProgress(1),this.setBufferBarProgress(1)},e.prototype.isDeterminate=function(){return this.determinate},e.prototype.setProgress=function(t){this.progress=t,this.determinate&&(this.setPrimaryBarProgress(t),this.adapter.setAttribute(et.ARIA_VALUENOW,t.toString()))},e.prototype.getProgress=function(){return this.progress},e.prototype.setBuffer=function(t){this.buffer=t,this.determinate&&this.setBufferBarProgress(t)},e.prototype.getBuffer=function(){return this.buffer},e.prototype.open=function(){this.adapter.removeClass($.CLOSED_CLASS),this.adapter.removeClass($.CLOSED_ANIMATION_OFF_CLASS),this.adapter.removeAttribute(et.ARIA_HIDDEN)},e.prototype.close=function(){this.adapter.addClass($.CLOSED_CLASS),this.adapter.setAttribute(et.ARIA_HIDDEN,"true")},e.prototype.isClosed=function(){return this.adapter.hasClass($.CLOSED_CLASS)},e.prototype.handleTransitionEnd=function(){this.adapter.hasClass($.CLOSED_CLASS)&&this.adapter.addClass($.CLOSED_ANIMATION_OFF_CLASS)},e.prototype.destroy=function(){a.prototype.destroy.call(this),this.observer&&this.observer.disconnect()},e.prototype.restartAnimation=function(){this.adapter.removeClass($.ANIMATION_READY_CLASS),this.adapter.forceLayout(),this.adapter.addClass($.ANIMATION_READY_CLASS)},e.prototype.setPrimaryBarProgress=function(t){var n="scaleX("+t+")",i=typeof window<"u"?ae(window,"transform"):"transform";this.adapter.setPrimaryBarStyle(i,n)},e.prototype.setBufferBarProgress=function(t){var n=t*100+"%";this.adapter.setBufferBarStyle(et.FLEX_BASIS,n)},e.prototype.calculateAndSetDimensions=function(t){var n=t*Bt.PRIMARY_HALF,i=t*Bt.PRIMARY_FULL,r=t*Bt.SECONDARY_QUARTER,o=t*Bt.SECONDARY_HALF,s=t*Bt.SECONDARY_FULL;this.adapter.setStyle("--mdc-linear-progress-primary-half",n+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-half-neg",-n+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full",i+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full-neg",-i+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter",r+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg",-r+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half",o+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg",-o+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full",s+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg",-s+"px"),this.restartAnimation()},e}(S);/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ei=function(a){m(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"determinate",{set:function(t){this.foundation.setDeterminate(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"progress",{set:function(t){this.foundation.setProgress(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"buffer",{set:function(t){this.foundation.setBuffer(t)},enumerable:!1,configurable:!0}),e.prototype.open=function(){this.foundation.open()},e.prototype.close=function(){this.foundation.close()},e.prototype.initialSyncWithDOM=function(){var t=this;this.root.addEventListener("transitionend",function(){t.foundation.handleTransitionEnd()})},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},forceLayout:function(){t.root.getBoundingClientRect()},setBufferBarStyle:function(i,r){var o=t.root.querySelector(ue.strings.BUFFER_BAR_SELECTOR);o&&o.style.setProperty(i,r)},setPrimaryBarStyle:function(i,r){var o=t.root.querySelector(ue.strings.PRIMARY_BAR_SELECTOR);o&&o.style.setProperty(i,r)},hasClass:function(i){return t.root.classList.contains(i)},removeAttribute:function(i){t.root.removeAttribute(i)},removeClass:function(i){t.root.classList.remove(i)},setAttribute:function(i,r){t.safeSetAttribute(t.root,i,r)},setStyle:function(i,r){t.root.style.setProperty(i,r)},attachResizeObserver:function(i){var r=window.ResizeObserver;if(r){var o=new r(i);return o.observe(t.root),o}return null},getWidth:function(){return t.root.offsetWidth}};return new ue(n)},e}(D);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var mt,ut,g={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"},Ai=(mt={},mt[""+g.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",mt[""+g.LIST_ITEM_CLASS]="mdc-list-item",mt[""+g.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",mt[""+g.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",mt[""+g.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",mt[""+g.ROOT]="mdc-list",mt),It=(ut={},ut[""+g.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",ut[""+g.LIST_ITEM_CLASS]="mdc-deprecated-list-item",ut[""+g.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",ut[""+g.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",ut[""+g.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",ut[""+g.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",ut[""+g.ROOT]="mdc-deprecated-list",ut),R={ACTION_EVENT:"MDCList:action",SELECTION_CHANGE_EVENT:"MDCList:selectionChange",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:`
    .`+g.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+g.LIST_ITEM_CLASS+` a,
    .`+It[g.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+It[g.LIST_ITEM_CLASS]+` a
  `,DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:`
    .`+g.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+g.LIST_ITEM_CLASS+` a,
    .`+g.LIST_ITEM_CLASS+` input[type="radio"]:not(:disabled),
    .`+g.LIST_ITEM_CLASS+` input[type="checkbox"]:not(:disabled),
    .`+It[g.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+It[g.LIST_ITEM_CLASS]+` a,
    .`+It[g.LIST_ITEM_CLASS]+` input[type="radio"]:not(:disabled),
    .`+It[g.LIST_ITEM_CLASS]+` input[type="checkbox"]:not(:disabled)
  `,RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},I={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300},yi="evolution";/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var E={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},z=new Set;z.add(E.BACKSPACE);z.add(E.ENTER);z.add(E.SPACEBAR);z.add(E.PAGE_UP);z.add(E.PAGE_DOWN);z.add(E.END);z.add(E.HOME);z.add(E.ARROW_LEFT);z.add(E.ARROW_UP);z.add(E.ARROW_RIGHT);z.add(E.ARROW_DOWN);z.add(E.DELETE);z.add(E.ESCAPE);z.add(E.TAB);var X={BACKSPACE:8,ENTER:13,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ESCAPE:27,TAB:9},q=new Map;q.set(X.BACKSPACE,E.BACKSPACE);q.set(X.ENTER,E.ENTER);q.set(X.SPACEBAR,E.SPACEBAR);q.set(X.PAGE_UP,E.PAGE_UP);q.set(X.PAGE_DOWN,E.PAGE_DOWN);q.set(X.END,E.END);q.set(X.HOME,E.HOME);q.set(X.ARROW_LEFT,E.ARROW_LEFT);q.set(X.ARROW_UP,E.ARROW_UP);q.set(X.ARROW_RIGHT,E.ARROW_RIGHT);q.set(X.ARROW_DOWN,E.ARROW_DOWN);q.set(X.DELETE,E.DELETE);q.set(X.ESCAPE,E.ESCAPE);q.set(X.TAB,E.TAB);var gt=new Set;gt.add(E.PAGE_UP);gt.add(E.PAGE_DOWN);gt.add(E.END);gt.add(E.HOME);gt.add(E.ARROW_LEFT);gt.add(E.ARROW_UP);gt.add(E.ARROW_RIGHT);gt.add(E.ARROW_DOWN);function H(a){var e=a.key;if(z.has(e))return e;var t=q.get(a.keyCode);return t||E.UNKNOWN}/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var bi=["input","button","textarea","select"],Z=function(a){var e=a.target;if(e){var t=(""+e.tagName).toLowerCase();bi.indexOf(t)===-1&&a.preventDefault()}};/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Ii(){var a={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""};return a}function Ci(a,e){for(var t=new Map,n=0;n<a;n++){var i=e(n).trim();if(i){var r=i[0].toLowerCase();t.has(r)||t.set(r,[]),t.get(r).push({text:i.toLowerCase(),index:n})}}return t.forEach(function(o){o.sort(function(s,c){return s.index-c.index})}),t}function Ae(a,e){var t=a.nextChar,n=a.focusItemAtIndex,i=a.sortedIndexByFirstChar,r=a.focusedItemIndex,o=a.skipFocus,s=a.isItemAtIndexDisabled;clearTimeout(e.bufferClearTimeout),e.bufferClearTimeout=setTimeout(function(){En(e)},I.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),e.typeaheadBuffer=e.typeaheadBuffer+t;var c;return e.typeaheadBuffer.length===1?c=Ti(i,r,s,e):c=_i(i,s,e),c!==-1&&!o&&n(c),c}function Ti(a,e,t,n){var i=n.typeaheadBuffer[0],r=a.get(i);if(!r)return-1;if(i===n.currentFirstChar&&r[n.sortedIndexCursor].index===e){n.sortedIndexCursor=(n.sortedIndexCursor+1)%r.length;var o=r[n.sortedIndexCursor].index;if(!t(o))return o}n.currentFirstChar=i;var s=-1,c;for(c=0;c<r.length;c++)if(!t(r[c].index)){s=c;break}for(;c<r.length;c++)if(r[c].index>e&&!t(r[c].index)){s=c;break}return s!==-1?(n.sortedIndexCursor=s,r[n.sortedIndexCursor].index):-1}function _i(a,e,t){var n=t.typeaheadBuffer[0],i=a.get(n);if(!i)return-1;var r=i[t.sortedIndexCursor];if(r.text.lastIndexOf(t.typeaheadBuffer,0)===0&&!e(r.index))return r.index;for(var o=(t.sortedIndexCursor+1)%i.length,s=-1;o!==t.sortedIndexCursor;){var c=i[o],l=c.text.lastIndexOf(t.typeaheadBuffer,0)===0,u=!e(c.index);if(l&&u){s=o;break}o=(o+1)%i.length}return s!==-1?(t.sortedIndexCursor=s,i[t.sortedIndexCursor].index):-1}function gn(a){return a.typeaheadBuffer.length>0}function En(a){a.typeaheadBuffer=""}function Ue(a,e){var t=a.event,n=a.isTargetListItem,i=a.focusedItemIndex,r=a.focusItemAtIndex,o=a.sortedIndexByFirstChar,s=a.isItemAtIndexDisabled,c=H(t)==="ArrowLeft",l=H(t)==="ArrowUp",u=H(t)==="ArrowRight",v=H(t)==="ArrowDown",f=H(t)==="Home",h=H(t)==="End",A=H(t)==="Enter",b=H(t)==="Spacebar";if(t.altKey||t.ctrlKey||t.metaKey||c||l||u||v||f||h||A)return-1;var O=!b&&t.key.length===1;if(O){Z(t);var V={focusItemAtIndex:r,focusedItemIndex:i,nextChar:t.key.toLowerCase(),sortedIndexByFirstChar:o,skipFocus:!1,isItemAtIndexDisabled:s};return Ae(V,e)}if(!b)return-1;n&&Z(t);var T=n&&gn(e);if(T){var V={focusItemAtIndex:r,focusedItemIndex:i,nextChar:" ",sortedIndexByFirstChar:o,skipFocus:!1,isItemAtIndexDisabled:s};return Ae(V,e)}return-1}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Si(a){return a instanceof Array}var Li=["Alt","Control","Meta","Shift"];function Ve(a){var e=new Set(a?Li.filter(function(t){return a.getModifierState(t)}):[]);return function(t){return t.every(function(n){return e.has(n)})&&t.length===e.size}}var ye=function(a){m(e,a);function e(t){var n=a.call(this,p(p({},e.defaultAdapter),t))||this;return n.wrapFocus=!1,n.isVertical=!0,n.isSingleSelectionList=!1,n.areDisabledItemsFocusable=!1,n.selectedIndex=I.UNSET_INDEX,n.focusedItemIndex=I.UNSET_INDEX,n.useActivatedClass=!1,n.useSelectedAttr=!1,n.ariaCurrentAttrValue=null,n.isCheckboxList=!1,n.isRadioList=!1,n.lastSelectedIndex=null,n.hasTypeahead=!1,n.typeaheadState=Ii(),n.sortedIndexByFirstChar=new Map,n}return Object.defineProperty(e,"strings",{get:function(){return R},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return g},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return I},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},notifySelectionChange:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){},getPrimaryTextAtIndex:function(){return""}}},enumerable:!1,configurable:!0}),e.prototype.layout=function(){this.adapter.getListItemCount()!==0&&(this.adapter.hasCheckboxAtIndex(0)?(this.isCheckboxList=!0,this.selectedIndex=[]):this.adapter.hasRadioAtIndex(0)?this.isRadioList=!0:this.maybeInitializeSingleSelection(),this.hasTypeahead&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex()))},e.prototype.getFocusedItemIndex=function(){return this.focusedItemIndex},e.prototype.setWrapFocus=function(t){this.wrapFocus=t},e.prototype.setVerticalOrientation=function(t){this.isVertical=t},e.prototype.setSingleSelection=function(t){this.isSingleSelectionList=t,t&&(this.maybeInitializeSingleSelection(),this.selectedIndex=this.getSelectedIndexFromDOM())},e.prototype.setDisabledItemsFocusable=function(t){this.areDisabledItemsFocusable=t},e.prototype.maybeInitializeSingleSelection=function(){var t=this.getSelectedIndexFromDOM();if(t!==I.UNSET_INDEX){var n=this.adapter.listItemAtIndexHasClass(t,g.LIST_ITEM_ACTIVATED_CLASS);n&&this.setUseActivatedClass(!0),this.isSingleSelectionList=!0,this.selectedIndex=t}},e.prototype.getSelectedIndexFromDOM=function(){for(var t=I.UNSET_INDEX,n=this.adapter.getListItemCount(),i=0;i<n;i++){var r=this.adapter.listItemAtIndexHasClass(i,g.LIST_ITEM_SELECTED_CLASS),o=this.adapter.listItemAtIndexHasClass(i,g.LIST_ITEM_ACTIVATED_CLASS);if(r||o){t=i;break}}return t},e.prototype.setHasTypeahead=function(t){this.hasTypeahead=t,t&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex())},e.prototype.isTypeaheadInProgress=function(){return this.hasTypeahead&&gn(this.typeaheadState)},e.prototype.setUseActivatedClass=function(t){this.useActivatedClass=t},e.prototype.setUseSelectedAttribute=function(t){this.useSelectedAttr=t},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(t,n){n===void 0&&(n={}),this.isIndexValid(t)&&(this.isCheckboxList?this.setCheckboxAtIndex(t,n):this.isRadioList?this.setRadioAtIndex(t,n):this.setSingleSelectionAtIndex(t,n))},e.prototype.handleFocusIn=function(t){t>=0&&(this.focusedItemIndex=t,this.adapter.setAttributeForElementIndex(t,"tabindex","0"),this.adapter.setTabIndexForListItemChildren(t,"0"))},e.prototype.handleFocusOut=function(t){var n=this;t>=0&&(this.adapter.setAttributeForElementIndex(t,"tabindex","-1"),this.adapter.setTabIndexForListItemChildren(t,"-1")),setTimeout(function(){n.adapter.isFocusInsideList()||n.setTabindexToFirstSelectedOrFocusedItem()},0)},e.prototype.isIndexDisabled=function(t){return this.adapter.listItemAtIndexHasClass(t,g.LIST_ITEM_DISABLED_CLASS)},e.prototype.handleKeydown=function(t,n,i){var r=this,o,s=H(t)==="ArrowLeft",c=H(t)==="ArrowUp",l=H(t)==="ArrowRight",u=H(t)==="ArrowDown",v=H(t)==="Home",f=H(t)==="End",h=H(t)==="Enter",A=H(t)==="Spacebar",b=this.isVertical&&u||!this.isVertical&&l,O=this.isVertical&&c||!this.isVertical&&s,V=t.key==="A"||t.key==="a",T=Ve(t);if(this.adapter.isRootFocused()){if((O||f)&&T([]))t.preventDefault(),this.focusLastElement();else if((b||v)&&T([]))t.preventDefault(),this.focusFirstElement();else if(O&&T(["Shift"])&&this.isCheckboxList){t.preventDefault();var K=this.focusLastElement();K!==-1&&this.setSelectedIndexOnAction(K,!1)}else if(b&&T(["Shift"])&&this.isCheckboxList){t.preventDefault();var K=this.focusFirstElement();K!==-1&&this.setSelectedIndexOnAction(K,!1)}if(this.hasTypeahead){var N={event:t,focusItemAtIndex:function(Ft){r.focusItemAtIndex(Ft)},focusedItemIndex:-1,isTargetListItem:n,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(Ft){return r.isIndexDisabled(Ft)}};Ue(N,this.typeaheadState)}return}var L=this.adapter.getFocusedElementIndex();if(!(L===-1&&(L=i,L<0))){if(b&&T([]))Z(t),this.focusNextElement(L);else if(O&&T([]))Z(t),this.focusPrevElement(L);else if(b&&T(["Shift"])&&this.isCheckboxList){Z(t);var K=this.focusNextElement(L);K!==-1&&this.setSelectedIndexOnAction(K,!1)}else if(O&&T(["Shift"])&&this.isCheckboxList){Z(t);var K=this.focusPrevElement(L);K!==-1&&this.setSelectedIndexOnAction(K,!1)}else if(v&&T([]))Z(t),this.focusFirstElement();else if(f&&T([]))Z(t),this.focusLastElement();else if(v&&T(["Control","Shift"])&&this.isCheckboxList){if(Z(t),this.isIndexDisabled(L))return;this.focusFirstElement(),this.toggleCheckboxRange(0,L,L)}else if(f&&T(["Control","Shift"])&&this.isCheckboxList){if(Z(t),this.isIndexDisabled(L))return;this.focusLastElement(),this.toggleCheckboxRange(L,this.adapter.getListItemCount()-1,L)}else if(V&&T(["Control"])&&this.isCheckboxList)t.preventDefault(),this.checkboxListToggleAll(this.selectedIndex===I.UNSET_INDEX?[]:this.selectedIndex,!0);else if((h||A)&&(T([])||T(["Alt"]))){if(n){var Et=t.target;if(Et&&Et.tagName==="A"&&h||(Z(t),this.isIndexDisabled(L)))return;this.isTypeaheadInProgress()||(this.isSelectableList()&&this.setSelectedIndexOnAction(L,!1),this.adapter.notifyAction(L))}}else if((h||A)&&T(["Shift"])&&this.isCheckboxList){var Et=t.target;if(Et&&Et.tagName==="A"&&h||(Z(t),this.isIndexDisabled(L)))return;this.isTypeaheadInProgress()||(this.toggleCheckboxRange((o=this.lastSelectedIndex)!==null&&o!==void 0?o:L,L,L),this.adapter.notifyAction(L))}if(this.hasTypeahead){var N={event:t,focusItemAtIndex:function(kt){r.focusItemAtIndex(kt)},focusedItemIndex:this.focusedItemIndex,isTargetListItem:n,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(kt){return r.isIndexDisabled(kt)}};Ue(N,this.typeaheadState)}}},e.prototype.handleClick=function(t,n,i){var r,o=Ve(i);t!==I.UNSET_INDEX&&(this.isIndexDisabled(t)||(o([])?(this.isSelectableList()&&this.setSelectedIndexOnAction(t,n),this.adapter.notifyAction(t)):this.isCheckboxList&&o(["Shift"])&&(this.toggleCheckboxRange((r=this.lastSelectedIndex)!==null&&r!==void 0?r:t,t,t),this.adapter.notifyAction(t))))},e.prototype.focusNextElement=function(t){var n=this.adapter.getListItemCount(),i=t,r=null;do{if(i++,i>=n)if(this.wrapFocus)i=0;else return t;if(i===r)return-1;r=r??i}while(!this.areDisabledItemsFocusable&&this.isIndexDisabled(i));return this.focusItemAtIndex(i),i},e.prototype.focusPrevElement=function(t){var n=this.adapter.getListItemCount(),i=t,r=null;do{if(i--,i<0)if(this.wrapFocus)i=n-1;else return t;if(i===r)return-1;r=r??i}while(!this.areDisabledItemsFocusable&&this.isIndexDisabled(i));return this.focusItemAtIndex(i),i},e.prototype.focusFirstElement=function(){return this.focusNextElement(-1)},e.prototype.focusLastElement=function(){return this.focusPrevElement(this.adapter.getListItemCount())},e.prototype.focusInitialElement=function(){var t=this.getFirstSelectedOrFocusedItemIndex();return t!==I.UNSET_INDEX&&this.focusItemAtIndex(t),t},e.prototype.setEnabled=function(t,n){this.isIndexValid(t,!1)&&(n?(this.adapter.removeClassForElementIndex(t,g.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(t,R.ARIA_DISABLED,"false")):(this.adapter.addClassForElementIndex(t,g.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(t,R.ARIA_DISABLED,"true")))},e.prototype.setSingleSelectionAtIndex=function(t,n){if(n===void 0&&(n={}),!(this.selectedIndex===t&&!n.forceUpdate)){var i=g.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass&&(i=g.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex!==I.UNSET_INDEX&&this.adapter.removeClassForElementIndex(this.selectedIndex,i),this.setAriaForSingleSelectionAtIndex(t),this.setTabindexAtIndex(t),t!==I.UNSET_INDEX&&this.adapter.addClassForElementIndex(t,i),this.selectedIndex=t,n.isUserInteraction&&!n.forceUpdate&&this.adapter.notifySelectionChange([t])}},e.prototype.setAriaForSingleSelectionAtIndex=function(t){this.selectedIndex===I.UNSET_INDEX&&t!==I.UNSET_INDEX&&(this.ariaCurrentAttrValue=this.adapter.getAttributeForElementIndex(t,R.ARIA_CURRENT));var n=this.ariaCurrentAttrValue!==null,i=n?R.ARIA_CURRENT:R.ARIA_SELECTED;if(this.selectedIndex!==I.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,i,"false"),t!==I.UNSET_INDEX){var r=n?this.ariaCurrentAttrValue:"true";this.adapter.setAttributeForElementIndex(t,i,r)}},e.prototype.getSelectionAttribute=function(){return this.useSelectedAttr?R.ARIA_SELECTED:R.ARIA_CHECKED},e.prototype.setRadioAtIndex=function(t,n){n===void 0&&(n={});var i=this.getSelectionAttribute();this.adapter.setCheckedCheckboxOrRadioAtIndex(t,!0),!(this.selectedIndex===t&&!n.forceUpdate)&&(this.selectedIndex!==I.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,i,"false"),this.adapter.setAttributeForElementIndex(t,i,"true"),this.selectedIndex=t,n.isUserInteraction&&!n.forceUpdate&&this.adapter.notifySelectionChange([t]))},e.prototype.setCheckboxAtIndex=function(t,n){n===void 0&&(n={});for(var i=this.selectedIndex,r=n.isUserInteraction?new Set(i===I.UNSET_INDEX?[]:i):null,o=this.getSelectionAttribute(),s=[],c=0;c<this.adapter.getListItemCount();c++)if(!(n.omitDisabledItems&&this.isIndexDisabled(c))){var l=r==null?void 0:r.has(c),u=t.indexOf(c)>=0;u!==l&&s.push(c),this.adapter.setCheckedCheckboxOrRadioAtIndex(c,u),this.adapter.setAttributeForElementIndex(c,o,u?"true":"false")}this.selectedIndex=n.omitDisabledItems?this.resolveSelectedIndices(t):t,n.isUserInteraction&&s.length&&this.adapter.notifySelectionChange(s)},e.prototype.resolveSelectedIndices=function(t){var n=this,i=this.selectedIndex===I.UNSET_INDEX?[]:this.selectedIndex,r=i.filter(function(c){return n.isIndexDisabled(c)}),o=t.filter(function(c){return!n.isIndexDisabled(c)}),s=ct([],J(new Set(ct(ct([],J(o)),J(r)))));return s.sort(function(c,l){return c-l})},e.prototype.toggleCheckboxRange=function(t,n,i){this.lastSelectedIndex=i;for(var r=new Set(this.selectedIndex===I.UNSET_INDEX?[]:this.selectedIndex),o=!(r!=null&&r.has(i)),s=J([t,n].sort(),2),c=s[0],l=s[1],u=this.getSelectionAttribute(),v=[],f=c;f<=l;f++)if(!this.isIndexDisabled(f)){var h=r.has(f);o!==h&&(v.push(f),this.adapter.setCheckedCheckboxOrRadioAtIndex(f,o),this.adapter.setAttributeForElementIndex(f,u,""+o),o?r.add(f):r.delete(f))}v.length&&(this.selectedIndex=ct([],J(r)),this.adapter.notifySelectionChange(v))},e.prototype.setTabindexAtIndex=function(t){this.focusedItemIndex===I.UNSET_INDEX&&t!==0&&t!==I.UNSET_INDEX?this.adapter.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex>=0&&this.focusedItemIndex!==t&&this.adapter.setAttributeForElementIndex(this.focusedItemIndex,"tabindex","-1"),!(this.selectedIndex instanceof Array)&&this.selectedIndex!==t&&this.focusedItemIndex!==I.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,"tabindex","-1"),t!==I.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(t,"tabindex","0")},e.prototype.isSelectableList=function(){return this.isSingleSelectionList||this.isCheckboxList||this.isRadioList},e.prototype.setTabindexToFirstSelectedOrFocusedItem=function(){var t=this.getFirstSelectedOrFocusedItemIndex();this.setTabindexAtIndex(t)},e.prototype.getFirstSelectedOrFocusedItemIndex=function(){var t,n,i=this.getFirstEnabledItem();if(this.adapter.getListItemCount()===0)return I.UNSET_INDEX;if(!this.isSelectableList())return Math.max(this.focusedItemIndex,i);if(typeof this.selectedIndex=="number"&&this.selectedIndex!==I.UNSET_INDEX)return this.areDisabledItemsFocusable&&this.isIndexDisabled(this.selectedIndex)?i:this.selectedIndex;if(Si(this.selectedIndex)&&this.selectedIndex.length>0){var r=ct([],J(this.selectedIndex)).sort(function(l,u){return l-u});try{for(var o=C(r),s=o.next();!s.done;s=o.next()){var c=s.value;if(!(this.isIndexDisabled(c)&&!this.areDisabledItemsFocusable))return c}}catch(l){t={error:l}}finally{try{s&&!s.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}}return i},e.prototype.getFirstEnabledItem=function(){for(var t=this.adapter.getListItemCount(),n=0;n<t&&this.isIndexDisabled(n);)n++;return n===t?I.UNSET_INDEX:n},e.prototype.isIndexValid=function(t,n){var i=this;if(n===void 0&&(n=!0),t instanceof Array){if(!this.isCheckboxList&&n)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return t.length===0?!0:t.some(function(r){return i.isIndexInRange(r)})}else if(typeof t=="number"){if(this.isCheckboxList&&n)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+t);return this.isIndexInRange(t)||this.isSingleSelectionList&&t===I.UNSET_INDEX}else return!1},e.prototype.isIndexInRange=function(t){var n=this.adapter.getListItemCount();return t>=0&&t<n},e.prototype.setSelectedIndexOnAction=function(t,n){this.lastSelectedIndex=t,this.isCheckboxList?(this.toggleCheckboxAtIndex(t,n),this.adapter.notifySelectionChange([t])):this.setSelectedIndex(t,{isUserInteraction:!0})},e.prototype.toggleCheckboxAtIndex=function(t,n){var i=this.getSelectionAttribute(),r=this.adapter.isCheckboxCheckedAtIndex(t),o;n?o=r:(o=!r,this.adapter.setCheckedCheckboxOrRadioAtIndex(t,o)),this.adapter.setAttributeForElementIndex(t,i,o?"true":"false");var s=this.selectedIndex===I.UNSET_INDEX?[]:this.selectedIndex.slice();o?s.push(t):s=s.filter(function(c){return c!==t}),this.selectedIndex=s},e.prototype.focusItemAtIndex=function(t){this.adapter.focusItemAtIndex(t),this.focusedItemIndex=t},e.prototype.getEnabledListItemCount=function(){for(var t=this.adapter.getListItemCount(),n=0,i=0;i<t;i++)this.isIndexDisabled(i)||n++;return n},e.prototype.checkboxListToggleAll=function(t,n){var i=this,r=this.getEnabledListItemCount(),o=this.adapter.getListItemCount(),s=t.filter(function(u){return!i.isIndexDisabled(u)});if(s.length>=r)this.setCheckboxAtIndex([],{isUserInteraction:n,omitDisabledItems:!0});else{for(var c=[],l=0;l<o;l++)(!this.isIndexDisabled(l)||t.indexOf(l)>-1)&&c.push(l);this.setCheckboxAtIndex(c,{isUserInteraction:n,omitDisabledItems:!0})}},e.prototype.typeaheadMatchItem=function(t,n,i){var r=this;i===void 0&&(i=!1);var o={focusItemAtIndex:function(s){r.focusItemAtIndex(s)},focusedItemIndex:n||this.focusedItemIndex,nextChar:t,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:i,isItemAtIndexDisabled:function(s){return r.isIndexDisabled(s)}};return Ae(o,this.typeaheadState)},e.prototype.typeaheadInitSortedIndex=function(){return Ci(this.adapter.getListItemCount(),this.adapter.getPrimaryTextAtIndex)},e.prototype.clearTypeaheadBuffer=function(){En(this.typeaheadState)},e}(S);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var An=function(a){m(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return Object.defineProperty(e.prototype,"vertical",{set:function(t){this.foundation.setVerticalOrientation(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"listElements",{get:function(){return Array.from(this.root.querySelectorAll("."+this.classNameMap[g.LIST_ITEM_CLASS]))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"wrapFocus",{set:function(t){this.foundation.setWrapFocus(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"typeaheadInProgress",{get:function(){return this.foundation.isTypeaheadInProgress()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hasTypeahead",{set:function(t){this.foundation.setHasTypeahead(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"singleSelection",{set:function(t){this.foundation.setSingleSelection(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"disabledItemsFocusable",{set:function(t){this.foundation.setDisabledItemsFocusable(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"selectedIndex",{get:function(){return this.foundation.getSelectedIndex()},set:function(t){this.foundation.setSelectedIndex(t)},enumerable:!1,configurable:!0}),e.attachTo=function(t){return new e(t)},e.prototype.initialSyncWithDOM=function(){this.isEvolutionEnabled=yi in this.root.dataset,this.isEvolutionEnabled?this.classNameMap=Ai:tt(this.root,R.DEPRECATED_SELECTOR)?this.classNameMap=It:this.classNameMap=Object.values(g).reduce(function(t,n){return t[n]=n,t},{}),this.handleClick=this.handleClickEvent.bind(this),this.handleKeydown=this.handleKeydownEvent.bind(this),this.focusInEventListener=this.handleFocusInEvent.bind(this),this.focusOutEventListener=this.handleFocusOutEvent.bind(this),this.listen("keydown",this.handleKeydown),this.listen("click",this.handleClick),this.listen("focusin",this.focusInEventListener),this.listen("focusout",this.focusOutEventListener),this.layout(),this.initializeListType(),this.ensureFocusable()},e.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown),this.unlisten("click",this.handleClick),this.unlisten("focusin",this.focusInEventListener),this.unlisten("focusout",this.focusOutEventListener)},e.prototype.layout=function(){var t=this.root.getAttribute(R.ARIA_ORIENTATION);this.vertical=t!==R.ARIA_ORIENTATION_HORIZONTAL;var n="."+this.classNameMap[g.LIST_ITEM_CLASS]+":not([tabindex])",i=R.FOCUSABLE_CHILD_ELEMENTS,r=this.root.querySelectorAll(n);r.length&&Array.prototype.forEach.call(r,function(s){s.setAttribute("tabindex","-1")});var o=this.root.querySelectorAll(i);o.length&&Array.prototype.forEach.call(o,function(s){s.setAttribute("tabindex","-1")}),this.isEvolutionEnabled&&this.foundation.setUseSelectedAttribute(!0),this.foundation.layout()},e.prototype.getPrimaryText=function(t){var n,i=t.querySelector("."+this.classNameMap[g.LIST_ITEM_PRIMARY_TEXT_CLASS]);if(this.isEvolutionEnabled||i)return(n=i==null?void 0:i.textContent)!==null&&n!==void 0?n:"";var r=t.querySelector("."+this.classNameMap[g.LIST_ITEM_TEXT_CLASS]);return r&&r.textContent||""},e.prototype.initializeListType=function(){var t=this;if(this.isInteractive=tt(this.root,R.ARIA_INTERACTIVE_ROLES_SELECTOR),this.isEvolutionEnabled&&this.isInteractive){var n=Array.from(this.root.querySelectorAll(R.SELECTED_ITEM_SELECTOR),function(s){return t.listElements.indexOf(s)});tt(this.root,R.ARIA_MULTI_SELECTABLE_SELECTOR)?this.selectedIndex=n:n.length>0&&(this.selectedIndex=n[0]);return}var i=this.root.querySelectorAll(R.ARIA_ROLE_CHECKBOX_SELECTOR),r=this.root.querySelector(R.ARIA_CHECKED_RADIO_SELECTOR);if(i.length){var o=this.root.querySelectorAll(R.ARIA_CHECKED_CHECKBOX_SELECTOR);this.selectedIndex=Array.from(o,function(s){return t.listElements.indexOf(s)})}else r&&(this.selectedIndex=this.listElements.indexOf(r))},e.prototype.setEnabled=function(t,n){this.foundation.setEnabled(t,n)},e.prototype.typeaheadMatchItem=function(t,n){return this.foundation.typeaheadMatchItem(t,n,!0)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClassForElementIndex:function(i,r){var o=t.listElements[i];o&&o.classList.add(t.classNameMap[r])},focusItemAtIndex:function(i){var r;(r=t.listElements[i])===null||r===void 0||r.focus()},getAttributeForElementIndex:function(i,r){return t.listElements[i].getAttribute(r)},getFocusedElementIndex:function(){return t.listElements.indexOf(document.activeElement)},getListItemCount:function(){return t.listElements.length},getPrimaryTextAtIndex:function(i){return t.getPrimaryText(t.listElements[i])},hasCheckboxAtIndex:function(i){var r=t.listElements[i];return!!r.querySelector(R.CHECKBOX_SELECTOR)},hasRadioAtIndex:function(i){var r=t.listElements[i];return!!r.querySelector(R.RADIO_SELECTOR)},isCheckboxCheckedAtIndex:function(i){var r=t.listElements[i],o=r.querySelector(R.CHECKBOX_SELECTOR);return o.checked},isFocusInsideList:function(){return t.root!==document.activeElement&&t.root.contains(document.activeElement)},isRootFocused:function(){return document.activeElement===t.root},listItemAtIndexHasClass:function(i,r){return t.listElements[i].classList.contains(t.classNameMap[r])},notifyAction:function(i){t.emit(R.ACTION_EVENT,{index:i},!0)},notifySelectionChange:function(i){t.emit(R.SELECTION_CHANGE_EVENT,{changedIndices:i},!0)},removeClassForElementIndex:function(i,r){var o=t.listElements[i];o&&o.classList.remove(t.classNameMap[r])},setAttributeForElementIndex:function(i,r,o){var s=t.listElements[i];s&&t.safeSetAttribute(s,r,o)},setCheckedCheckboxOrRadioAtIndex:function(i,r){var o=t.listElements[i],s=o.querySelector(R.CHECKBOX_RADIO_SELECTOR);s.checked=r;var c=document.createEvent("Event");c.initEvent("change",!0,!0),s.dispatchEvent(c)},setTabIndexForListItemChildren:function(i,r){var o=t.listElements[i],s=R.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX;Array.prototype.forEach.call(o.querySelectorAll(s),function(c){c.tabIndex=Number(r)})}};return new ye(n)},e.prototype.ensureFocusable=function(){if(this.isEvolutionEnabled&&this.isInteractive&&!this.root.querySelector("."+this.classNameMap[g.LIST_ITEM_CLASS]+'[tabindex="0"]')){var t=this.initialFocusIndex();t!==-1&&(this.listElements[t].tabIndex=0)}},e.prototype.initialFocusIndex=function(){if(this.selectedIndex instanceof Array&&this.selectedIndex.length>0)return this.selectedIndex[0];if(typeof this.selectedIndex=="number"&&this.selectedIndex!==I.UNSET_INDEX)return this.selectedIndex;var t=this.root.querySelector("."+this.classNameMap[g.LIST_ITEM_CLASS]+":not(."+this.classNameMap[g.LIST_ITEM_DISABLED_CLASS]+")");return t===null?-1:this.getListItemIndex(t)},e.prototype.getListItemIndex=function(t){var n=Nt(t,"."+this.classNameMap[g.LIST_ITEM_CLASS]+", ."+this.classNameMap[g.ROOT]);return n&&tt(n,"."+this.classNameMap[g.LIST_ITEM_CLASS])?this.listElements.indexOf(n):-1},e.prototype.handleFocusInEvent=function(t){var n=this.getListItemIndex(t.target);this.foundation.handleFocusIn(n)},e.prototype.handleFocusOutEvent=function(t){var n=this.getListItemIndex(t.target);this.foundation.handleFocusOut(n)},e.prototype.handleKeydownEvent=function(t){var n=this.getListItemIndex(t.target),i=t.target;this.foundation.handleKeydown(t,i.classList.contains(this.classNameMap[g.LIST_ITEM_CLASS]),n)},e.prototype.handleClickEvent=function(t){var n=this.getListItemIndex(t.target),i=t.target;this.foundation.handleClick(n,tt(i,R.CHECKBOX_RADIO_SELECTOR),t)},e}(D);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Kt={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},lt={CLOSED_EVENT:"MDCMenuSurface:closed",CLOSING_EVENT:"MDCMenuSurface:closing",OPENED_EVENT:"MDCMenuSurface:opened",OPENING_EVENT:"MDCMenuSurface:opening",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},Ut={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67,TOUCH_EVENT_WAIT_MS:30},F;(function(a){a[a.BOTTOM=1]="BOTTOM",a[a.CENTER=2]="CENTER",a[a.RIGHT=4]="RIGHT",a[a.FLIP_RTL=8]="FLIP_RTL"})(F||(F={}));var wt;(function(a){a[a.TOP_LEFT=0]="TOP_LEFT",a[a.TOP_RIGHT=4]="TOP_RIGHT",a[a.BOTTOM_LEFT=1]="BOTTOM_LEFT",a[a.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",a[a.TOP_START=8]="TOP_START",a[a.TOP_END=12]="TOP_END",a[a.BOTTOM_START=9]="BOTTOM_START",a[a.BOTTOM_END=13]="BOTTOM_END"})(wt||(wt={}));/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ct=function(a){m(e,a);function e(t){var n=a.call(this,p(p({},e.defaultAdapter),t))||this;return n.isSurfaceOpen=!1,n.isQuickOpen=!1,n.isHoistedElement=!1,n.isFixedPosition=!1,n.isHorizontallyCenteredOnViewport=!1,n.maxHeight=0,n.openBottomBias=0,n.openAnimationEndTimerId=0,n.closeAnimationEndTimerId=0,n.animationRequestId=0,n.anchorCorner=wt.TOP_START,n.originCorner=wt.TOP_START,n.anchorMargin={top:0,right:0,bottom:0,left:0},n.position={x:0,y:0},n}return Object.defineProperty(e,"cssClasses",{get:function(){return Kt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return lt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Ut},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Corner",{get:function(){return wt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getViewportDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyClosing:function(){},notifyOpen:function(){},notifyOpening:function(){},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=e.cssClasses,n=t.ROOT,i=t.OPEN;if(!this.adapter.hasClass(n))throw new Error(n+" class required in root element.");this.adapter.hasClass(i)&&(this.isSurfaceOpen=!0),this.resizeListener=this.handleResize.bind(this),this.adapter.registerWindowEventHandler("resize",this.resizeListener)},e.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId),this.adapter.deregisterWindowEventHandler("resize",this.resizeListener)},e.prototype.setAnchorCorner=function(t){this.anchorCorner=t},e.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^F.RIGHT},e.prototype.setAnchorMargin=function(t){this.anchorMargin.top=t.top||0,this.anchorMargin.right=t.right||0,this.anchorMargin.bottom=t.bottom||0,this.anchorMargin.left=t.left||0},e.prototype.setIsHoisted=function(t){this.isHoistedElement=t},e.prototype.setFixedPosition=function(t){this.isFixedPosition=t},e.prototype.isFixed=function(){return this.isFixedPosition},e.prototype.setAbsolutePosition=function(t,n){this.position.x=this.isFinite(t)?t:0,this.position.y=this.isFinite(n)?n:0},e.prototype.setIsHorizontallyCenteredOnViewport=function(t){this.isHorizontallyCenteredOnViewport=t},e.prototype.setQuickOpen=function(t){this.isQuickOpen=t},e.prototype.setMaxHeight=function(t){this.maxHeight=t},e.prototype.setOpenBottomBias=function(t){this.openBottomBias=t},e.prototype.isOpen=function(){return this.isSurfaceOpen},e.prototype.open=function(){var t=this;this.isSurfaceOpen||(this.adapter.notifyOpening(),this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(e.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(e.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame(function(){t.dimensions=t.adapter.getInnerDimensions(),t.autoposition(),t.adapter.addClass(e.cssClasses.OPEN),t.openAnimationEndTimerId=setTimeout(function(){t.openAnimationEndTimerId=0,t.adapter.removeClass(e.cssClasses.ANIMATING_OPEN),t.adapter.notifyOpen()},Ut.TRANSITION_OPEN_DURATION)}),this.isSurfaceOpen=!0),this.adapter.registerWindowEventHandler("resize",this.resizeListener))},e.prototype.close=function(t){var n=this;if(t===void 0&&(t=!1),!!this.isSurfaceOpen){if(this.adapter.notifyClosing(),this.adapter.deregisterWindowEventHandler("resize",this.resizeListener),this.isQuickOpen){this.isSurfaceOpen=!1,t||this.maybeRestoreFocus(),this.adapter.removeClass(e.cssClasses.OPEN),this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),this.adapter.notifyClose();return}this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED),requestAnimationFrame(function(){n.adapter.removeClass(e.cssClasses.OPEN),n.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),n.closeAnimationEndTimerId=setTimeout(function(){n.closeAnimationEndTimerId=0,n.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED),n.adapter.notifyClose()},Ut.TRANSITION_CLOSE_DURATION)}),this.isSurfaceOpen=!1,t||this.maybeRestoreFocus()}},e.prototype.handleBodyClick=function(t){var n=t.target;this.adapter.isElementInContainer(n)||this.close()},e.prototype.handleKeydown=function(t){var n=t.keyCode,i=t.key,r=i==="Escape"||n===27;r&&this.close()},e.prototype.handleResize=function(){this.dimensions=this.adapter.getInnerDimensions(),this.autoposition()},e.prototype.autoposition=function(){var t;this.measurements=this.getAutoLayoutmeasurements();var n=this.getoriginCorner(),i=this.getMenuSurfaceMaxHeight(n),r=this.hasBit(n,F.BOTTOM)?"bottom":"top",o=this.hasBit(n,F.RIGHT)?"right":"left",s=this.getHorizontalOriginOffset(n),c=this.getVerticalOriginOffset(n),l=this.measurements,u=l.anchorSize,v=l.surfaceSize,f=(t={},t[o]=s,t[r]=c,t);u.width/v.width>Ut.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(o="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(f),this.adapter.setTransformOrigin(o+" "+r),this.adapter.setPosition(f),this.adapter.setMaxHeight(i?i+"px":""),this.hasBit(n,F.BOTTOM)||this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW)},e.prototype.getAutoLayoutmeasurements=function(){var t=this.adapter.getAnchorDimensions(),n=this.adapter.getBodyDimensions(),i=this.adapter.getViewportDimensions(),r=this.adapter.getWindowScroll();return t||(t={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:t,bodySize:n,surfaceSize:this.dimensions,viewportDistance:{top:t.top,right:i.width-t.right,bottom:i.height-t.bottom,left:t.left},viewportSize:i,windowScroll:r}},e.prototype.getoriginCorner=function(){var t=this.originCorner,n=this.measurements,i=n.viewportDistance,r=n.anchorSize,o=n.surfaceSize,s=e.numbers.MARGIN_TO_EDGE,c=this.hasBit(this.anchorCorner,F.BOTTOM),l,u;c?(l=i.top-s+this.anchorMargin.bottom,u=i.bottom-s-this.anchorMargin.bottom):(l=i.top-s+this.anchorMargin.top,u=i.bottom-s+r.height-this.anchorMargin.top);var v=u-o.height>0;!v&&l>u+this.openBottomBias&&(t=this.setBit(t,F.BOTTOM));var f=this.adapter.isRtl(),h=this.hasBit(this.anchorCorner,F.FLIP_RTL),A=this.hasBit(this.anchorCorner,F.RIGHT)||this.hasBit(t,F.RIGHT),b=!1;f&&h?b=!A:b=A;var O,V;b?(O=i.left+r.width+this.anchorMargin.left,V=i.right-this.anchorMargin.left):(O=i.left+this.anchorMargin.left,V=i.right+r.width-this.anchorMargin.left);var T=O-o.width>0,K=V-o.width>0,N=this.hasBit(t,F.FLIP_RTL)&&this.hasBit(t,F.RIGHT);return K&&N&&f||!T&&N?t=this.unsetBit(t,F.RIGHT):(T&&b&&f||T&&!b&&A||!K&&O>=V)&&(t=this.setBit(t,F.RIGHT)),t},e.prototype.getMenuSurfaceMaxHeight=function(t){if(this.maxHeight>0)return this.maxHeight;var n=this.measurements.viewportDistance,i=0,r=this.hasBit(t,F.BOTTOM),o=this.hasBit(this.anchorCorner,F.BOTTOM),s=e.numbers.MARGIN_TO_EDGE;return r?(i=n.top+this.anchorMargin.top-s,o||(i+=this.measurements.anchorSize.height)):(i=n.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-s,o&&(i-=this.measurements.anchorSize.height)),i},e.prototype.getHorizontalOriginOffset=function(t){var n=this.measurements.anchorSize,i=this.hasBit(t,F.RIGHT),r=this.hasBit(this.anchorCorner,F.RIGHT);if(i){var o=r?n.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?o-(this.measurements.viewportSize.width-this.measurements.bodySize.width):o}return r?n.width-this.anchorMargin.right:this.anchorMargin.left},e.prototype.getVerticalOriginOffset=function(t){var n=this.measurements.anchorSize,i=this.hasBit(t,F.BOTTOM),r=this.hasBit(this.anchorCorner,F.BOTTOM),o=0;return i?o=r?n.height-this.anchorMargin.top:-this.anchorMargin.bottom:o=r?n.height+this.anchorMargin.bottom:this.anchorMargin.top,o},e.prototype.adjustPositionForHoistedElement=function(t){var n,i,r=this.measurements,o=r.windowScroll,s=r.viewportDistance,c=r.surfaceSize,l=r.viewportSize,u=Object.keys(t);try{for(var v=C(u),f=v.next();!f.done;f=v.next()){var h=f.value,A=t[h]||0;if(this.isHorizontallyCenteredOnViewport&&(h==="left"||h==="right")){t[h]=(l.width-c.width)/2;continue}A+=s[h],this.isFixedPosition||(h==="top"?A+=o.y:h==="bottom"?A-=o.y:h==="left"?A+=o.x:A-=o.x),t[h]=A}}catch(b){n={error:b}}finally{try{f&&!f.done&&(i=v.return)&&i.call(v)}finally{if(n)throw n.error}}},e.prototype.maybeRestoreFocus=function(){var t=this,n=this.adapter.isFocused(),i=this.adapter.getOwnerDocument?this.adapter.getOwnerDocument():document,r=i.activeElement&&this.adapter.isElementInContainer(i.activeElement);(n||r)&&setTimeout(function(){t.adapter.restoreFocus()},Ut.TOUCH_EVENT_WAIT_MS)},e.prototype.hasBit=function(t,n){return!!(t&n)},e.prototype.setBit=function(t,n){return t|n},e.prototype.unsetBit=function(t,n){return t^n},e.prototype.isFinite=function(t){return typeof t=="number"&&isFinite(t)},e}(S);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ri=function(a){m(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialSyncWithDOM=function(){var t=this,n=this.root.parentElement;this.anchorElement=n&&n.classList.contains(Kt.ANCHOR)?n:null,this.root.classList.contains(Kt.FIXED)&&this.setFixedPosition(!0),this.handleKeydown=function(i){t.foundation.handleKeydown(i)},this.handleBodyClick=function(i){t.foundation.handleBodyClick(i)},this.registerBodyClickListener=function(){document.body.addEventListener("click",t.handleBodyClick,{capture:!0})},this.deregisterBodyClickListener=function(){document.body.removeEventListener("click",t.handleBodyClick,{capture:!0})},this.listen("keydown",this.handleKeydown),this.listen(lt.OPENED_EVENT,this.registerBodyClickListener),this.listen(lt.CLOSED_EVENT,this.deregisterBodyClickListener)},e.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown),this.unlisten(lt.OPENED_EVENT,this.registerBodyClickListener),this.unlisten(lt.CLOSED_EVENT,this.deregisterBodyClickListener),a.prototype.destroy.call(this)},e.prototype.isOpen=function(){return this.foundation.isOpen()},e.prototype.open=function(){this.foundation.open()},e.prototype.close=function(t){t===void 0&&(t=!1),this.foundation.close(t)},Object.defineProperty(e.prototype,"quickOpen",{set:function(t){this.foundation.setQuickOpen(t)},enumerable:!1,configurable:!0}),e.prototype.setIsHoisted=function(t){this.foundation.setIsHoisted(t)},e.prototype.setMenuSurfaceAnchorElement=function(t){this.anchorElement=t},e.prototype.setFixedPosition=function(t){t?this.root.classList.add(Kt.FIXED):this.root.classList.remove(Kt.FIXED),this.foundation.setFixedPosition(t)},e.prototype.setAbsolutePosition=function(t,n){this.foundation.setAbsolutePosition(t,n),this.setIsHoisted(!0)},e.prototype.setAnchorCorner=function(t){this.foundation.setAnchorCorner(t)},e.prototype.setAnchorMargin=function(t){this.foundation.setAnchorMargin(t)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},removeClass:function(i){t.root.classList.remove(i)},hasClass:function(i){return t.root.classList.contains(i)},hasAnchor:function(){return!!t.anchorElement},notifyClose:function(){t.emit(Ct.strings.CLOSED_EVENT,{})},notifyClosing:function(){t.emit(Ct.strings.CLOSING_EVENT,{})},notifyOpen:function(){t.emit(Ct.strings.OPENED_EVENT,{})},notifyOpening:function(){t.emit(Ct.strings.OPENING_EVENT,{})},isElementInContainer:function(i){return t.root.contains(i)},isRtl:function(){return getComputedStyle(t.root).getPropertyValue("direction")==="rtl"},setTransformOrigin:function(i){var r=ae(window,"transform")+"-origin";t.root.style.setProperty(r,i)},isFocused:function(){return document.activeElement===t.root},saveFocus:function(){t.previousFocus=document.activeElement},restoreFocus:function(){t.root.contains(document.activeElement)&&t.previousFocus&&t.previousFocus.focus&&t.previousFocus.focus()},getInnerDimensions:function(){return{width:t.root.offsetWidth,height:t.root.offsetHeight}},getAnchorDimensions:function(){return t.anchorElement?t.anchorElement.getBoundingClientRect():null},getViewportDimensions:function(){return{width:window.innerWidth,height:window.innerHeight}},getBodyDimensions:function(){return{width:document.body.clientWidth,height:document.body.clientHeight}},getWindowScroll:function(){return{x:window.pageXOffset,y:window.pageYOffset}},setPosition:function(i){var r=t.root;r.style.left="left"in i?i.left+"px":"",r.style.right="right"in i?i.right+"px":"",r.style.top="top"in i?i.top+"px":"",r.style.bottom="bottom"in i?i.bottom+"px":""},setMaxHeight:function(i){t.root.style.maxHeight=i},registerWindowEventHandler:function(i,r){window.addEventListener(i,r)},deregisterWindowEventHandler:function(i,r){window.removeEventListener(i,r)}};return new Ct(n)},e}(D);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Mt={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},it={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",SELECTED_EVENT:"MDCMenu:selected",SKIP_RESTORE_FOCUS:"data-menu-item-skip-restore-focus"},Di={FOCUS_ROOT_INDEX:-1},Ot;(function(a){a[a.NONE=0]="NONE",a[a.LIST_ROOT=1]="LIST_ROOT",a[a.FIRST_ITEM=2]="FIRST_ITEM",a[a.LAST_ITEM=3]="LAST_ITEM"})(Ot||(Ot={}));/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Oi=function(a){m(e,a);function e(t){var n=a.call(this,p(p({},e.defaultAdapter),t))||this;return n.defaultFocusState=Ot.LIST_ROOT,n.selectedIndex=-1,n}return Object.defineProperty(e,"cssClasses",{get:function(){return Mt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return it},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Di},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},getAttributeFromElementAtIndex:function(){return null},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.adapter.closeSurface()},e.prototype.handleKeydown=function(t){var n=t.key,i=t.keyCode,r=n==="Tab"||i===9;r&&this.adapter.closeSurface(!0)},e.prototype.handleItemAction=function(t){var n=this.adapter.getElementIndex(t);if(!(n<0)){this.adapter.notifySelected({index:n});var i=this.adapter.getAttributeFromElementAtIndex(n,it.SKIP_RESTORE_FOCUS)==="true";this.adapter.closeSurface(i),this.adapter.isSelectableItemAtIndex(n)&&this.setSelectedIndex(n)}},e.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState){case Ot.FIRST_ITEM:this.adapter.focusItemAtIndex(0);break;case Ot.LAST_ITEM:this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount()-1);break;case Ot.NONE:break;default:this.adapter.focusListRoot();break}},e.prototype.setDefaultFocusState=function(t){this.defaultFocusState=t},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(t){if(this.validatedIndex(t),!this.adapter.isSelectableItemAtIndex(t))throw new Error("MDCMenuFoundation: No selection group at specified index.");var n=this.adapter.getSelectedSiblingOfItemAtIndex(t);n>=0&&(this.adapter.removeAttributeFromElementAtIndex(n,it.ARIA_CHECKED_ATTR),this.adapter.removeClassFromElementAtIndex(n,Mt.MENU_SELECTED_LIST_ITEM)),this.adapter.addClassToElementAtIndex(t,Mt.MENU_SELECTED_LIST_ITEM),this.adapter.addAttributeToElementAtIndex(t,it.ARIA_CHECKED_ATTR,"true"),this.selectedIndex=t},e.prototype.setEnabled=function(t,n){this.validatedIndex(t),n?(this.adapter.removeClassFromElementAtIndex(t,g.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(t,it.ARIA_DISABLED_ATTR,"false")):(this.adapter.addClassToElementAtIndex(t,g.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(t,it.ARIA_DISABLED_ATTR,"true"))},e.prototype.validatedIndex=function(t){var n=this.adapter.getMenuItemCount(),i=t>=0&&t<n;if(!i)throw new Error("MDCMenuFoundation: No list item at specified index.")},e}(S);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var yn=function(a){m(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,n){t===void 0&&(t=function(i){return new Ri(i)}),n===void 0&&(n=function(i){return new An(i)}),this.menuSurfaceFactory=t,this.listFactory=n},e.prototype.initialSyncWithDOM=function(){var t=this;this.menuSurface=this.menuSurfaceFactory(this.root);var n=this.root.querySelector(it.LIST_SELECTOR);n?(this.list=this.listFactory(n),this.list.wrapFocus=!0):this.list=null,this.handleKeydown=function(i){t.foundation.handleKeydown(i)},this.handleItemAction=function(i){t.foundation.handleItemAction(t.items[i.detail.index])},this.handleMenuSurfaceOpened=function(){t.foundation.handleMenuSurfaceOpened()},this.menuSurface.listen(Ct.strings.OPENED_EVENT,this.handleMenuSurfaceOpened),this.listen("keydown",this.handleKeydown),this.listen(ye.strings.ACTION_EVENT,this.handleItemAction)},e.prototype.destroy=function(){this.list&&this.list.destroy(),this.menuSurface.destroy(),this.menuSurface.unlisten(Ct.strings.OPENED_EVENT,this.handleMenuSurfaceOpened),this.unlisten("keydown",this.handleKeydown),this.unlisten(ye.strings.ACTION_EVENT,this.handleItemAction),a.prototype.destroy.call(this)},Object.defineProperty(e.prototype,"open",{get:function(){return this.menuSurface.isOpen()},set:function(t){t?this.menuSurface.open():this.menuSurface.close()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"wrapFocus",{get:function(){return this.list?this.list.wrapFocus:!1},set:function(t){this.list&&(this.list.wrapFocus=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hasTypeahead",{set:function(t){this.list&&(this.list.hasTypeahead=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"typeaheadInProgress",{get:function(){return this.list?this.list.typeaheadInProgress:!1},enumerable:!1,configurable:!0}),e.prototype.typeaheadMatchItem=function(t,n){return this.list?this.list.typeaheadMatchItem(t,n):-1},e.prototype.layout=function(){this.list&&this.list.layout()},Object.defineProperty(e.prototype,"items",{get:function(){return this.list?this.list.listElements:[]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"singleSelection",{set:function(t){this.list&&(this.list.singleSelection=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"selectedIndex",{get:function(){return this.list?this.list.selectedIndex:I.UNSET_INDEX},set:function(t){this.list&&(this.list.selectedIndex=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quickOpen",{set:function(t){this.menuSurface.quickOpen=t},enumerable:!1,configurable:!0}),e.prototype.setDefaultFocusState=function(t){this.foundation.setDefaultFocusState(t)},e.prototype.setAnchorCorner=function(t){this.menuSurface.setAnchorCorner(t)},e.prototype.setAnchorMargin=function(t){this.menuSurface.setAnchorMargin(t)},e.prototype.setSelectedIndex=function(t){this.foundation.setSelectedIndex(t)},e.prototype.setEnabled=function(t,n){this.foundation.setEnabled(t,n)},e.prototype.getOptionByIndex=function(t){var n=this.items;return t<n.length?this.items[t]:null},e.prototype.getPrimaryTextAtIndex=function(t){var n=this.getOptionByIndex(t);return n&&this.list&&this.list.getPrimaryText(n)||""},e.prototype.setFixedPosition=function(t){this.menuSurface.setFixedPosition(t)},e.prototype.setIsHoisted=function(t){this.menuSurface.setIsHoisted(t)},e.prototype.setAbsolutePosition=function(t,n){this.menuSurface.setAbsolutePosition(t,n)},e.prototype.setAnchorElement=function(t){this.menuSurface.anchorElement=t},e.prototype.getDefaultFoundation=function(){var t=this,n={addClassToElementAtIndex:function(i,r){var o=t.items;o[i].classList.add(r)},removeClassFromElementAtIndex:function(i,r){var o=t.items;o[i].classList.remove(r)},addAttributeToElementAtIndex:function(i,r,o){var s=t.items;t.safeSetAttribute(s[i],r,o)},removeAttributeFromElementAtIndex:function(i,r){var o=t.items;o[i].removeAttribute(r)},getAttributeFromElementAtIndex:function(i,r){var o=t.items;return o[i].getAttribute(r)},elementContainsClass:function(i,r){return i.classList.contains(r)},closeSurface:function(i){t.menuSurface.close(i)},getElementIndex:function(i){return t.items.indexOf(i)},notifySelected:function(i){t.emit(it.SELECTED_EVENT,{index:i.index,item:t.items[i.index]})},getMenuItemCount:function(){return t.items.length},focusItemAtIndex:function(i){t.items[i].focus()},focusListRoot:function(){t.root.querySelector(it.LIST_SELECTOR).focus()},isSelectableItemAtIndex:function(i){return!!Nt(t.items[i],"."+Mt.MENU_SELECTION_GROUP)},getSelectedSiblingOfItemAtIndex:function(i){var r=Nt(t.items[i],"."+Mt.MENU_SELECTION_GROUP),o=r.querySelector("."+Mt.MENU_SELECTED_LIST_ITEM);return o?t.items.indexOf(o):-1}};return new Oi(n)},e}(D);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var xi={NATIVE_CONTROL_SELECTOR:".mdc-radio__native-control"},wi={DISABLED:"mdc-radio--disabled",ROOT:"mdc-radio"};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ke=function(a){m(e,a);function e(t){return a.call(this,p(p({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return wi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return xi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlDisabled:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setDisabled=function(t){var n=e.cssClasses.DISABLED;this.adapter.setNativeControlDisabled(t),t?this.adapter.addClass(n):this.adapter.removeClass(n)},e}(S);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Mi=function(a){m(e,a);function e(){var t=a!==null&&a.apply(this,arguments)||this;return t.rippleSurface=t.createRipple(),t}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"checked",{get:function(){return this.nativeControl.checked},set:function(t){this.nativeControl.checked=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function(){return this.nativeControl.disabled},set:function(t){this.foundation.setDisabled(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this.nativeControl.value},set:function(t){this.nativeControl.value=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"ripple",{get:function(){return this.rippleSurface},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.rippleSurface.destroy(),a.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},removeClass:function(i){t.root.classList.remove(i)},setNativeControlDisabled:function(i){return t.nativeControl.disabled=i}};return new Ke(n)},e.prototype.createRipple=function(){var t=this,n=p(p({},U.createAdapter(this)),{registerInteractionHandler:function(i,r){t.nativeControl.addEventListener(i,r,M())},deregisterInteractionHandler:function(i,r){t.nativeControl.removeEventListener(i,r,M())},isSurfaceActive:function(){return!1},isUnbounded:function(){return!0}});return new U(this.root,new vt(n))},Object.defineProperty(e.prototype,"nativeControl",{get:function(){var t=Ke.strings.NATIVE_CONTROL_SELECTOR,n=this.root.querySelector(t);if(!n)throw new Error("Radio component requires a "+t+" element");return n},enumerable:!1,configurable:!0}),e}(D);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ni={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_HIDE_REQUIRED_MARKER:"mdc-floating-label--hide-required-marker",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var bn=function(a){m(e,a);function e(t){var n=a.call(this,p(p({},e.defaultAdapter),t))||this;return n.shakeAnimationEndHandler=function(){n.handleShakeAnimationEnd()},n}return Object.defineProperty(e,"cssClasses",{get:function(){return Ni},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.getWidth=function(){return this.adapter.getWidth()},e.prototype.shake=function(t){var n=e.cssClasses.LABEL_SHAKE;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.float=function(t){var n=e.cssClasses,i=n.LABEL_FLOAT_ABOVE,r=n.LABEL_SHAKE;t?this.adapter.addClass(i):(this.adapter.removeClass(i),this.adapter.removeClass(r))},e.prototype.setRequired=function(t){var n=e.cssClasses.LABEL_REQUIRED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.setHideRequiredMarker=function(t){var n=e.cssClasses.LABEL_HIDE_REQUIRED_MARKER;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.getHideRequiredMarker=function(){var t=e.cssClasses.LABEL_HIDE_REQUIRED_MARKER;return this.adapter.hasClass(t)},e.prototype.handleShakeAnimationEnd=function(){var t=e.cssClasses.LABEL_SHAKE;this.adapter.removeClass(t)},e}(S);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var In=function(a){m(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.shake=function(t){this.foundation.shake(t)},e.prototype.float=function(t){this.foundation.float(t)},e.prototype.setRequired=function(t){this.foundation.setRequired(t)},e.prototype.getWidth=function(){return this.foundation.getWidth()},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},removeClass:function(i){t.root.classList.remove(i)},hasClass:function(i){return t.root.classList.contains(i)},getWidth:function(){return Kn(t.root)},registerInteractionHandler:function(i,r){t.listen(i,r)},deregisterInteractionHandler:function(i,r){t.unlisten(i,r)}};return new bn(n)},e}(D);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var At={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Fi=function(a){m(e,a);function e(t){var n=a.call(this,p(p({},e.defaultAdapter),t))||this;return n.transitionEndHandler=function(i){n.handleTransitionEnd(i)},n}return Object.defineProperty(e,"cssClasses",{get:function(){return At},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},e.prototype.activate=function(){this.adapter.removeClass(At.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(At.LINE_RIPPLE_ACTIVE)},e.prototype.setRippleCenter=function(t){this.adapter.setStyle("transform-origin",t+"px center")},e.prototype.deactivate=function(){this.adapter.addClass(At.LINE_RIPPLE_DEACTIVATING)},e.prototype.handleTransitionEnd=function(t){var n=this.adapter.hasClass(At.LINE_RIPPLE_DEACTIVATING);t.propertyName==="opacity"&&n&&(this.adapter.removeClass(At.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(At.LINE_RIPPLE_DEACTIVATING))},e}(S);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Cn=function(a){m(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.activate=function(){this.foundation.activate()},e.prototype.deactivate=function(){this.foundation.deactivate()},e.prototype.setRippleCenter=function(t){this.foundation.setRippleCenter(t)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},removeClass:function(i){t.root.classList.remove(i)},hasClass:function(i){return t.root.classList.contains(i)},setStyle:function(i,r){t.root.style.setProperty(i,r)},registerEventHandler:function(i,r){t.listen(i,r)},deregisterEventHandler:function(i,r){t.unlisten(i,r)}};return new Fi(n)},e}(D);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Tn={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},Ge={NOTCH_ELEMENT_PADDING:8},be={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ki=function(a){m(e,a);function e(t){return a.call(this,p(p({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"strings",{get:function(){return Tn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return be},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Ge},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.notch=function(t){var n=e.cssClasses.OUTLINE_NOTCHED;t>0&&(t+=Ge.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(t),this.adapter.addClass(n)},e.prototype.closeNotch=function(){var t=e.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(t),this.adapter.removeNotchWidthProperty()},e}(S);/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var _n=function(a){m(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialSyncWithDOM=function(){this.notchElement=this.root.querySelector(Tn.NOTCH_ELEMENT_SELECTOR);var t=this.root.querySelector("."+bn.cssClasses.ROOT);t?(t.style.transitionDuration="0s",this.root.classList.add(be.OUTLINE_UPGRADED),requestAnimationFrame(function(){t.style.transitionDuration=""})):this.root.classList.add(be.NO_LABEL)},e.prototype.notch=function(t){this.foundation.notch(t)},e.prototype.closeNotch=function(){this.foundation.closeNotch()},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},removeClass:function(i){t.root.classList.remove(i)},setNotchWidthProperty:function(i){t.notchElement.style.setProperty("width",i+"px")},removeNotchWidthProperty:function(){t.notchElement.style.removeProperty("width")}};return new ki(n)},e}(D);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var w={ACTIVATED:"mdc-select--activated",DISABLED:"mdc-select--disabled",FOCUSED:"mdc-select--focused",INVALID:"mdc-select--invalid",MENU_INVALID:"mdc-select__menu--invalid",OUTLINED:"mdc-select--outlined",REQUIRED:"mdc-select--required",ROOT:"mdc-select",WITH_LEADING_ICON:"mdc-select--with-leading-icon"},P={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",ARIA_SELECTED_ATTR:"aria-selected",CHANGE_EVENT:"MDCSelect:change",HIDDEN_INPUT_SELECTOR:'input[type="hidden"]',LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-select__icon",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",MENU_SELECTOR:".mdc-select__menu",OUTLINE_SELECTOR:".mdc-notched-outline",SELECTED_TEXT_SELECTOR:".mdc-select__selected-text",SELECT_ANCHOR_SELECTOR:".mdc-select__anchor",VALUE_ATTR:"data-value"},yt={LABEL_SCALE:.75,UNSET_INDEX:-1,CLICK_DEBOUNCE_TIMEOUT_MS:330};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Pi=function(a){m(e,a);function e(t,n){n===void 0&&(n={});var i,r,o=a.call(this,p(p({},e.defaultAdapter),t))||this;return o.disabled=!1,o.isMenuOpen=!1,o.useDefaultValidation=!0,o.customValidity=!0,o.lastSelectedIndex=yt.UNSET_INDEX,o.clickDebounceTimeout=0,o.recentlyClicked=!1,o.leadingIcon=n.leadingIcon,o.helperText=n.helperText,o.ariaDescribedbyIds=((r=(i=o.adapter.getSelectAnchorAttr(P.ARIA_DESCRIBEDBY))===null||i===void 0?void 0:i.split(" "))===null||r===void 0?void 0:r.filter(function(s){var c;return s!==((c=o.helperText)===null||c===void 0?void 0:c.getId())&&s!==""}))||[],o}return Object.defineProperty(e,"cssClasses",{get:function(){return w},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return yt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return P},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},activateBottomLine:function(){},deactivateBottomLine:function(){},getSelectedIndex:function(){return-1},setSelectedIndex:function(){},hasLabel:function(){return!1},floatLabel:function(){},getLabelWidth:function(){return 0},setLabelRequired:function(){},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){},setRippleCenter:function(){},notifyChange:function(){},setSelectedText:function(){},isSelectAnchorFocused:function(){return!1},getSelectAnchorAttr:function(){return""},setSelectAnchorAttr:function(){},removeSelectAnchorAttr:function(){},addMenuClass:function(){},removeMenuClass:function(){},openMenu:function(){},closeMenu:function(){},getAnchorElement:function(){return null},setMenuAnchorElement:function(){},setMenuAnchorCorner:function(){},setMenuWrapFocus:function(){},focusMenuItemAtIndex:function(){},getMenuItemCount:function(){return 0},getMenuItemValues:function(){return[]},getMenuItemTextAtIndex:function(){return""},isTypeaheadInProgress:function(){return!1},typeaheadMatchItem:function(){return-1}}},enumerable:!1,configurable:!0}),e.prototype.getSelectedIndex=function(){return this.adapter.getSelectedIndex()},e.prototype.setSelectedIndex=function(t,n,i){n===void 0&&(n=!1),i===void 0&&(i=!1),!(t>=this.adapter.getMenuItemCount())&&(this.adapter.setSelectedIndex(t),t===yt.UNSET_INDEX?this.adapter.setSelectedText(""):this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(t).trim()),n&&this.adapter.closeMenu(),!i&&this.lastSelectedIndex!==t&&this.handleChange(),this.lastSelectedIndex=t)},e.prototype.setValue=function(t,n){n===void 0&&(n=!1);var i=this.adapter.getMenuItemValues().indexOf(t);this.setSelectedIndex(i,!1,n)},e.prototype.getValue=function(){var t=this.adapter.getSelectedIndex(),n=this.adapter.getMenuItemValues();return t!==yt.UNSET_INDEX?n[t]:""},e.prototype.getDisabled=function(){return this.disabled},e.prototype.setDisabled=function(t){this.disabled=t,this.disabled?(this.adapter.addClass(w.DISABLED),this.adapter.closeMenu()):this.adapter.removeClass(w.DISABLED),this.leadingIcon&&this.leadingIcon.setDisabled(this.disabled),this.disabled?this.adapter.removeSelectAnchorAttr("tabindex"):this.adapter.setSelectAnchorAttr("tabindex","0"),this.adapter.setSelectAnchorAttr("aria-disabled",this.disabled.toString())},e.prototype.openMenu=function(){this.adapter.addClass(w.ACTIVATED),this.adapter.openMenu(),this.isMenuOpen=!0,this.adapter.setSelectAnchorAttr("aria-expanded","true")},e.prototype.setHelperTextContent=function(t){this.helperText&&this.helperText.setContent(t)},e.prototype.layout=function(){if(this.adapter.hasLabel()){var t=this.getValue().length>0,n=this.adapter.hasClass(w.FOCUSED),i=t||n,r=this.adapter.hasClass(w.REQUIRED);this.notchOutline(i),this.adapter.floatLabel(i),this.adapter.setLabelRequired(r)}},e.prototype.layoutOptions=function(){var t=this.adapter.getMenuItemValues(),n=t.indexOf(this.getValue());this.setSelectedIndex(n,!1,!0)},e.prototype.handleMenuOpened=function(){if(this.adapter.getMenuItemValues().length!==0){var t=this.getSelectedIndex(),n=t>=0?t:0;this.adapter.focusMenuItemAtIndex(n)}},e.prototype.handleMenuClosing=function(){this.adapter.setSelectAnchorAttr("aria-expanded","false")},e.prototype.handleMenuClosed=function(){this.adapter.removeClass(w.ACTIVATED),this.isMenuOpen=!1,this.adapter.isSelectAnchorFocused()||this.blur()},e.prototype.handleChange=function(){this.layout(),this.adapter.notifyChange(this.getValue());var t=this.adapter.hasClass(w.REQUIRED);t&&this.useDefaultValidation&&this.setValid(this.isValid())},e.prototype.handleMenuItemAction=function(t){this.setSelectedIndex(t,!0)},e.prototype.handleFocus=function(){this.adapter.addClass(w.FOCUSED),this.layout(),this.adapter.activateBottomLine()},e.prototype.handleBlur=function(){this.isMenuOpen||this.blur()},e.prototype.handleClick=function(t){if(!(this.disabled||this.recentlyClicked)){if(this.setClickDebounceTimeout(),this.isMenuOpen){this.adapter.closeMenu();return}this.adapter.setRippleCenter(t),this.openMenu()}},e.prototype.handleKeydown=function(t){if(!(this.isMenuOpen||!this.adapter.hasClass(w.FOCUSED))){var n=H(t)===E.ENTER,i=H(t)===E.SPACEBAR,r=H(t)===E.ARROW_UP,o=H(t)===E.ARROW_DOWN,s=t.ctrlKey||t.metaKey;if(!s&&(!i&&t.key&&t.key.length===1||i&&this.adapter.isTypeaheadInProgress())){var c=i?" ":t.key,l=this.adapter.typeaheadMatchItem(c,this.getSelectedIndex());l>=0&&this.setSelectedIndex(l),t.preventDefault();return}!n&&!i&&!r&&!o||(this.openMenu(),t.preventDefault())}},e.prototype.notchOutline=function(t){if(this.adapter.hasOutline()){var n=this.adapter.hasClass(w.FOCUSED);if(t){var i=yt.LABEL_SCALE,r=this.adapter.getLabelWidth()*i;this.adapter.notchOutline(r)}else n||this.adapter.closeOutline()}},e.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon&&this.leadingIcon.setAriaLabel(t)},e.prototype.setLeadingIconContent=function(t){this.leadingIcon&&this.leadingIcon.setContent(t)},e.prototype.getUseDefaultValidation=function(){return this.useDefaultValidation},e.prototype.setUseDefaultValidation=function(t){this.useDefaultValidation=t},e.prototype.setValid=function(t){this.useDefaultValidation||(this.customValidity=t),this.adapter.setSelectAnchorAttr("aria-invalid",(!t).toString()),t?(this.adapter.removeClass(w.INVALID),this.adapter.removeMenuClass(w.MENU_INVALID)):(this.adapter.addClass(w.INVALID),this.adapter.addMenuClass(w.MENU_INVALID)),this.syncHelperTextValidity(t)},e.prototype.isValid=function(){return this.useDefaultValidation&&this.adapter.hasClass(w.REQUIRED)&&!this.adapter.hasClass(w.DISABLED)?this.getSelectedIndex()!==yt.UNSET_INDEX&&(this.getSelectedIndex()!==0||!!this.getValue()):this.customValidity},e.prototype.setRequired=function(t){t?this.adapter.addClass(w.REQUIRED):this.adapter.removeClass(w.REQUIRED),this.adapter.setSelectAnchorAttr("aria-required",t.toString()),this.adapter.setLabelRequired(t)},e.prototype.getRequired=function(){return this.adapter.getSelectAnchorAttr("aria-required")==="true"},e.prototype.init=function(){var t=this.adapter.getAnchorElement();t&&(this.adapter.setMenuAnchorElement(t),this.adapter.setMenuAnchorCorner(wt.BOTTOM_START)),this.adapter.setMenuWrapFocus(!1),this.setDisabled(this.adapter.hasClass(w.DISABLED)),this.syncHelperTextValidity(!this.adapter.hasClass(w.INVALID)),this.layout(),this.layoutOptions()},e.prototype.blur=function(){this.adapter.removeClass(w.FOCUSED),this.layout(),this.adapter.deactivateBottomLine();var t=this.adapter.hasClass(w.REQUIRED);t&&this.useDefaultValidation&&this.setValid(this.isValid())},e.prototype.syncHelperTextValidity=function(t){if(this.helperText){this.helperText.setValidity(t);var n=this.helperText.isVisible(),i=this.helperText.getId();n&&i?this.adapter.setSelectAnchorAttr(P.ARIA_DESCRIBEDBY,ct(ct([],J(this.ariaDescribedbyIds)),[i]).join(" ")):this.ariaDescribedbyIds.length>0?this.adapter.setSelectAnchorAttr(P.ARIA_DESCRIBEDBY,this.ariaDescribedbyIds.join(" ")):this.adapter.removeSelectAnchorAttr(P.ARIA_DESCRIBEDBY)}},e.prototype.setClickDebounceTimeout=function(){var t=this;clearTimeout(this.clickDebounceTimeout),this.clickDebounceTimeout=setTimeout(function(){t.recentlyClicked=!1},yt.CLICK_DEBOUNCE_TIMEOUT_MS),this.recentlyClicked=!0},e}(S);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var bt={ARIA_HIDDEN:"aria-hidden",ROLE:"role"},pt={HELPER_TEXT_VALIDATION_MSG:"mdc-select-helper-text--validation-msg",HELPER_TEXT_VALIDATION_MSG_PERSISTENT:"mdc-select-helper-text--validation-msg-persistent"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Hi=function(a){m(e,a);function e(t){return a.call(this,p(p({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return pt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return bt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},getAttr:function(){return null},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return this.adapter.getAttr(bt.ARIA_HIDDEN)!=="true"},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.setValidation=function(t){t?this.adapter.addClass(pt.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(pt.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidationMsgPersistent=function(t){t?this.adapter.addClass(pt.HELPER_TEXT_VALIDATION_MSG_PERSISTENT):this.adapter.removeClass(pt.HELPER_TEXT_VALIDATION_MSG_PERSISTENT)},e.prototype.getIsValidation=function(){return this.adapter.hasClass(pt.HELPER_TEXT_VALIDATION_MSG)},e.prototype.getIsValidationMsgPersistent=function(){return this.adapter.hasClass(pt.HELPER_TEXT_VALIDATION_MSG_PERSISTENT)},e.prototype.setValidity=function(t){var n=this.adapter.hasClass(pt.HELPER_TEXT_VALIDATION_MSG);if(n){var i=this.adapter.hasClass(pt.HELPER_TEXT_VALIDATION_MSG_PERSISTENT),r=!t||i;if(r){this.showToScreenReader(),t?this.adapter.removeAttr(bt.ROLE):this.adapter.setAttr(bt.ROLE,"alert");return}this.adapter.removeAttr(bt.ROLE),this.hide()}},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(bt.ARIA_HIDDEN)},e.prototype.hide=function(){this.adapter.setAttr(bt.ARIA_HIDDEN,"true")},e}(S);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Bi=function(a){m(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundationForSelect",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},removeClass:function(i){t.root.classList.remove(i)},hasClass:function(i){return t.root.classList.contains(i)},getAttr:function(i){return t.root.getAttribute(i)},setAttr:function(i,r){t.safeSetAttribute(t.root,i,r)},removeAttr:function(i){t.root.removeAttribute(i)},setContent:function(i){t.root.textContent=i}};return new Hi(n)},e}(D);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var We={ICON_EVENT:"MDCSelect:icon",ICON_ROLE:"button"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ze=["click","keydown"],qe=function(a){m(e,a);function e(t){var n=a.call(this,p(p({},e.defaultAdapter),t))||this;return n.savedTabIndex=null,n.interactionHandler=function(i){n.handleInteraction(i)},n}return Object.defineProperty(e,"strings",{get:function(){return We},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},notifyIconAction:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t,n;this.savedTabIndex=this.adapter.getAttr("tabindex");try{for(var i=C(ze),r=i.next();!r.done;r=i.next()){var o=r.value;this.adapter.registerInteractionHandler(o,this.interactionHandler)}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e.prototype.destroy=function(){var t,n;try{for(var i=C(ze),r=i.next();!r.done;r=i.next()){var o=r.value;this.adapter.deregisterInteractionHandler(o,this.interactionHandler)}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e.prototype.setDisabled=function(t){this.savedTabIndex&&(t?(this.adapter.setAttr("tabindex","-1"),this.adapter.removeAttr("role")):(this.adapter.setAttr("tabindex",this.savedTabIndex),this.adapter.setAttr("role",We.ICON_ROLE)))},e.prototype.setAriaLabel=function(t){this.adapter.setAttr("aria-label",t)},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.handleInteraction=function(t){var n=t.key==="Enter"||t.keyCode===13;(t.type==="click"||n)&&this.adapter.notifyIconAction()},e}(S);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ui=function(a){m(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundationForSelect",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,n={getAttr:function(i){return t.root.getAttribute(i)},setAttr:function(i,r){t.safeSetAttribute(t.root,i,r)},removeAttr:function(i){t.root.removeAttribute(i)},setContent:function(i){t.root.textContent=i},registerInteractionHandler:function(i,r){t.listen(i,r)},deregisterInteractionHandler:function(i,r){t.unlisten(i,r)},notifyIconAction:function(){t.emit(qe.strings.ICON_EVENT,{},!0)}};return new qe(n)},e}(D);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Vi=function(a){m(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,n,i,r,o,s){if(t===void 0&&(t=function(h){return new In(h)}),n===void 0&&(n=function(h){return new Cn(h)}),i===void 0&&(i=function(h){return new _n(h)}),r===void 0&&(r=function(h){return new yn(h)}),o===void 0&&(o=function(h){return new Ui(h)}),s===void 0&&(s=function(h){return new Bi(h)}),this.selectAnchor=this.root.querySelector(P.SELECT_ANCHOR_SELECTOR),this.selectedText=this.root.querySelector(P.SELECTED_TEXT_SELECTOR),this.hiddenInput=this.root.querySelector(P.HIDDEN_INPUT_SELECTOR),!this.selectedText)throw new Error("MDCSelect: Missing required element: The following selector must be present: "+("'"+P.SELECTED_TEXT_SELECTOR+"'"));if(this.selectAnchor.hasAttribute(P.ARIA_CONTROLS)){var c=document.getElementById(this.selectAnchor.getAttribute(P.ARIA_CONTROLS));c&&(this.helperText=s(c))}this.menuSetup(r);var l=this.root.querySelector(P.LABEL_SELECTOR);this.label=l?t(l):null;var u=this.root.querySelector(P.LINE_RIPPLE_SELECTOR);this.lineRipple=u?n(u):null;var v=this.root.querySelector(P.OUTLINE_SELECTOR);this.outline=v?i(v):null;var f=this.root.querySelector(P.LEADING_ICON_SELECTOR);f&&(this.leadingIcon=o(f)),this.root.classList.contains(w.OUTLINED)||(this.ripple=this.createRipple())},e.prototype.initialSyncWithDOM=function(){var t=this;if(this.handleFocus=function(){t.foundation.handleFocus()},this.handleBlur=function(){t.foundation.handleBlur()},this.handleClick=function(n){t.selectAnchor.focus(),t.foundation.handleClick(t.getNormalizedXCoordinate(n))},this.handleKeydown=function(n){t.foundation.handleKeydown(n)},this.handleMenuItemAction=function(n){t.foundation.handleMenuItemAction(n.detail.index)},this.handleMenuOpened=function(){t.foundation.handleMenuOpened()},this.handleMenuClosed=function(){t.foundation.handleMenuClosed()},this.handleMenuClosing=function(){t.foundation.handleMenuClosing()},this.selectAnchor.addEventListener("focus",this.handleFocus),this.selectAnchor.addEventListener("blur",this.handleBlur),this.selectAnchor.addEventListener("click",this.handleClick),this.selectAnchor.addEventListener("keydown",this.handleKeydown),this.menu.listen(lt.CLOSED_EVENT,this.handleMenuClosed),this.menu.listen(lt.CLOSING_EVENT,this.handleMenuClosing),this.menu.listen(lt.OPENED_EVENT,this.handleMenuOpened),this.menu.listen(it.SELECTED_EVENT,this.handleMenuItemAction),this.hiddenInput){if(this.hiddenInput.value){this.foundation.setValue(this.hiddenInput.value,!0),this.foundation.layout();return}this.hiddenInput.value=this.value}},e.prototype.destroy=function(){this.selectAnchor.removeEventListener("focus",this.handleFocus),this.selectAnchor.removeEventListener("blur",this.handleBlur),this.selectAnchor.removeEventListener("keydown",this.handleKeydown),this.selectAnchor.removeEventListener("click",this.handleClick),this.menu.unlisten(lt.CLOSED_EVENT,this.handleMenuClosed),this.menu.unlisten(lt.OPENED_EVENT,this.handleMenuOpened),this.menu.unlisten(it.SELECTED_EVENT,this.handleMenuItemAction),this.menu.destroy(),this.ripple&&this.ripple.destroy(),this.outline&&this.outline.destroy(),this.leadingIcon&&this.leadingIcon.destroy(),this.helperText&&this.helperText.destroy(),a.prototype.destroy.call(this)},Object.defineProperty(e.prototype,"value",{get:function(){return this.foundation.getValue()},set:function(t){this.foundation.setValue(t)},enumerable:!1,configurable:!0}),e.prototype.setValue=function(t,n){n===void 0&&(n=!1),this.foundation.setValue(t,n)},Object.defineProperty(e.prototype,"selectedIndex",{get:function(){return this.foundation.getSelectedIndex()},set:function(t){this.foundation.setSelectedIndex(t,!0)},enumerable:!1,configurable:!0}),e.prototype.setSelectedIndex=function(t,n){n===void 0&&(n=!1),this.foundation.setSelectedIndex(t,!0,n)},Object.defineProperty(e.prototype,"disabled",{get:function(){return this.foundation.getDisabled()},set:function(t){this.foundation.setDisabled(t),this.hiddenInput&&(this.hiddenInput.disabled=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"leadingIconAriaLabel",{set:function(t){this.foundation.setLeadingIconAriaLabel(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"leadingIconContent",{set:function(t){this.foundation.setLeadingIconContent(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"helperTextContent",{set:function(t){this.foundation.setHelperTextContent(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"useDefaultValidation",{set:function(t){this.foundation.setUseDefaultValidation(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"valid",{get:function(){return this.foundation.isValid()},set:function(t){this.foundation.setValid(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"required",{get:function(){return this.foundation.getRequired()},set:function(t){this.foundation.setRequired(t)},enumerable:!1,configurable:!0}),e.prototype.layout=function(){this.foundation.layout()},e.prototype.layoutOptions=function(){this.foundation.layoutOptions(),this.menu.layout(),this.menuItemValues=this.menu.items.map(function(t){return t.getAttribute(P.VALUE_ATTR)||""}),this.hiddenInput&&(this.hiddenInput.value=this.value)},e.prototype.getDefaultFoundation=function(){var t=p(p(p(p({},this.getSelectAdapterMethods()),this.getCommonAdapterMethods()),this.getOutlineAdapterMethods()),this.getLabelAdapterMethods());return new Pi(t,this.getFoundationMap())},e.prototype.menuSetup=function(t){this.menuElement=this.root.querySelector(P.MENU_SELECTOR),this.menu=t(this.menuElement),this.menu.hasTypeahead=!0,this.menu.singleSelection=!0,this.menuItemValues=this.menu.items.map(function(n){return n.getAttribute(P.VALUE_ATTR)||""})},e.prototype.createRipple=function(){var t=this,n=p(p({},U.createAdapter({root:this.selectAnchor})),{registerInteractionHandler:function(i,r){t.selectAnchor.addEventListener(i,r)},deregisterInteractionHandler:function(i,r){t.selectAnchor.removeEventListener(i,r)}});return new U(this.selectAnchor,new vt(n))},e.prototype.getSelectAdapterMethods=function(){var t=this;return{getMenuItemAttr:function(n,i){return n.getAttribute(i)},setSelectedText:function(n){t.selectedText.textContent=n;var i=t.menu.selectedIndex;if(i!==-1){i=i instanceof Array?i[0]:i;var r=t.menu.items[i];r&&t.selectedText.setAttribute("aria-label",r.getAttribute("aria-label")||"")}},isSelectAnchorFocused:function(){return document.activeElement===t.selectAnchor},getSelectAnchorAttr:function(n){return t.selectAnchor.getAttribute(n)},setSelectAnchorAttr:function(n,i){t.safeSetAttribute(t.selectAnchor,n,i)},removeSelectAnchorAttr:function(n){t.selectAnchor.removeAttribute(n)},addMenuClass:function(n){t.menuElement.classList.add(n)},removeMenuClass:function(n){t.menuElement.classList.remove(n)},openMenu:function(){t.menu.open=!0},closeMenu:function(){t.menu.open=!1},getAnchorElement:function(){return t.root.querySelector(P.SELECT_ANCHOR_SELECTOR)},setMenuAnchorElement:function(n){t.menu.setAnchorElement(n)},setMenuAnchorCorner:function(n){t.menu.setAnchorCorner(n)},setMenuWrapFocus:function(n){t.menu.wrapFocus=n},getSelectedIndex:function(){var n=t.menu.selectedIndex;return n instanceof Array?n[0]:n},setSelectedIndex:function(n){t.menu.selectedIndex=n},focusMenuItemAtIndex:function(n){var i;(i=t.menu.items[n])===null||i===void 0||i.focus()},getMenuItemCount:function(){return t.menu.items.length},getMenuItemValues:function(){return t.menuItemValues},getMenuItemTextAtIndex:function(n){return t.menu.getPrimaryTextAtIndex(n)},isTypeaheadInProgress:function(){return t.menu.typeaheadInProgress},typeaheadMatchItem:function(n,i){return t.menu.typeaheadMatchItem(n,i)}}},e.prototype.getCommonAdapterMethods=function(){var t=this;return{addClass:function(n){t.root.classList.add(n)},removeClass:function(n){t.root.classList.remove(n)},hasClass:function(n){return t.root.classList.contains(n)},setRippleCenter:function(n){t.lineRipple&&t.lineRipple.setRippleCenter(n)},activateBottomLine:function(){t.lineRipple&&t.lineRipple.activate()},deactivateBottomLine:function(){t.lineRipple&&t.lineRipple.deactivate()},notifyChange:function(n){t.hiddenInput&&(t.hiddenInput.value=n);var i=t.selectedIndex;t.emit(P.CHANGE_EVENT,{value:n,index:i},!0)}}},e.prototype.getOutlineAdapterMethods=function(){var t=this;return{hasOutline:function(){return!!t.outline},notchOutline:function(n){t.outline&&t.outline.notch(n)},closeOutline:function(){t.outline&&t.outline.closeNotch()}}},e.prototype.getLabelAdapterMethods=function(){var t=this;return{hasLabel:function(){return!!t.label},floatLabel:function(n){t.label&&t.label.float(n)},getLabelWidth:function(){return t.label?t.label.getWidth():0},setLabelRequired:function(n){t.label&&t.label.setRequired(n)}}},e.prototype.getNormalizedXCoordinate=function(t){var n=t.target.getBoundingClientRect(),i=this.isTouchEvent(t)?t.touches[0].clientX:t.clientX;return i-n.left},e.prototype.isTouchEvent=function(t){return!!t.touches},e.prototype.getFoundationMap=function(){return{helperText:this.helperText?this.helperText.foundationForSelect:void 0,leadingIcon:this.leadingIcon?this.leadingIcon.foundationForSelect:void 0}},e}(D);/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var y={DISABLED:"mdc-slider--disabled",DISCRETE:"mdc-slider--discrete",INPUT:"mdc-slider__input",RANGE:"mdc-slider--range",THUMB:"mdc-slider__thumb",THUMB_FOCUSED:"mdc-slider__thumb--focused",THUMB_KNOB:"mdc-slider__thumb-knob",THUMB_TOP:"mdc-slider__thumb--top",THUMB_WITH_INDICATOR:"mdc-slider__thumb--with-indicator",TICK_MARKS:"mdc-slider--tick-marks",TICK_MARKS_CONTAINER:"mdc-slider__tick-marks",TICK_MARK_ACTIVE:"mdc-slider__tick-mark--active",TICK_MARK_INACTIVE:"mdc-slider__tick-mark--inactive",TRACK:"mdc-slider__track",TRACK_ACTIVE:"mdc-slider__track--active_fill",VALUE_INDICATOR_CONTAINER:"mdc-slider__value-indicator-container",VALUE_INDICATOR_TEXT:"mdc-slider__value-indicator-text"},pe={STEP_SIZE:1,MIN_RANGE:0,THUMB_UPDATE_MIN_PX:5},k={ARIA_VALUETEXT:"aria-valuetext",INPUT_DISABLED:"disabled",INPUT_MIN:"min",INPUT_MAX:"max",INPUT_VALUE:"value",INPUT_STEP:"step",DATA_MIN_RANGE:"data-min-range"},je={CHANGE:"MDCSlider:change",INPUT:"MDCSlider:input"},G={VAR_VALUE_INDICATOR_CARET_LEFT:"--slider-value-indicator-caret-left",VAR_VALUE_INDICATOR_CARET_RIGHT:"--slider-value-indicator-caret-right",VAR_VALUE_INDICATOR_CARET_TRANSFORM:"--slider-value-indicator-caret-transform",VAR_VALUE_INDICATOR_CONTAINER_LEFT:"--slider-value-indicator-container-left",VAR_VALUE_INDICATOR_CONTAINER_RIGHT:"--slider-value-indicator-container-right",VAR_VALUE_INDICATOR_CONTAINER_TRANSFORM:"--slider-value-indicator-container-transform"};/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var _t;(function(a){a[a.ACTIVE=0]="ACTIVE",a[a.INACTIVE=1]="INACTIVE"})(_t||(_t={}));var d;(function(a){a[a.START=1]="START",a[a.END=2]="END"})(d||(d={}));/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var se;(function(a){a.SLIDER_UPDATE="slider_update"})(se||(se={}));var he=typeof window<"u",Ki=function(a){m(e,a);function e(t){var n=a.call(this,p(p({},e.defaultAdapter),t))||this;return n.initialStylesRemoved=!1,n.isDisabled=!1,n.isDiscrete=!1,n.step=pe.STEP_SIZE,n.minRange=pe.MIN_RANGE,n.hasTickMarks=!1,n.isRange=!1,n.thumb=null,n.downEventClientX=null,n.startThumbKnobWidth=0,n.endThumbKnobWidth=0,n.animFrame=new hn,n}return Object.defineProperty(e,"defaultAdapter",{get:function(){return{hasClass:function(){return!1},addClass:function(){},removeClass:function(){},addThumbClass:function(){},removeThumbClass:function(){},getAttribute:function(){return null},getInputValue:function(){return""},setInputValue:function(){},getInputAttribute:function(){return null},setInputAttribute:function(){return null},removeInputAttribute:function(){return null},focusInput:function(){},isInputFocused:function(){return!1},shouldHideFocusStylesForPointerEvents:function(){return!1},getThumbKnobWidth:function(){return 0},getValueIndicatorContainerWidth:function(){return 0},getThumbBoundingClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getBoundingClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},isRTL:function(){return!1},setThumbStyleProperty:function(){},removeThumbStyleProperty:function(){},setTrackActiveStyleProperty:function(){},removeTrackActiveStyleProperty:function(){},setValueIndicatorText:function(){},getValueToAriaValueTextFn:function(){return null},updateTickMarks:function(){},setPointerCapture:function(){},emitChangeEvent:function(){},emitInputEvent:function(){},emitDragStartEvent:function(){},emitDragEndEvent:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){},registerThumbEventHandler:function(){},deregisterThumbEventHandler:function(){},registerInputEventHandler:function(){},deregisterInputEventHandler:function(){},registerBodyEventHandler:function(){},deregisterBodyEventHandler:function(){},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this;this.isDisabled=this.adapter.hasClass(y.DISABLED),this.isDiscrete=this.adapter.hasClass(y.DISCRETE),this.hasTickMarks=this.adapter.hasClass(y.TICK_MARKS),this.isRange=this.adapter.hasClass(y.RANGE);var n=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(k.INPUT_MIN,this.isRange?d.START:d.END),k.INPUT_MIN),i=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(k.INPUT_MAX,d.END),k.INPUT_MAX),r=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(k.INPUT_VALUE,d.END),k.INPUT_VALUE),o=this.isRange?this.convertAttributeValueToNumber(this.adapter.getInputAttribute(k.INPUT_VALUE,d.START),k.INPUT_VALUE):n,s=this.adapter.getInputAttribute(k.INPUT_STEP,d.END),c=s?this.convertAttributeValueToNumber(s,k.INPUT_STEP):this.step,l=this.adapter.getAttribute(k.DATA_MIN_RANGE),u=l?this.convertAttributeValueToNumber(l,k.DATA_MIN_RANGE):this.minRange;this.validateProperties({min:n,max:i,value:r,valueStart:o,step:c,minRange:u}),this.min=n,this.max=i,this.value=r,this.valueStart=o,this.step=c,this.minRange=u,this.numDecimalPlaces=Xe(this.step),this.valueBeforeDownEvent=r,this.valueStartBeforeDownEvent=o,this.mousedownOrTouchstartListener=this.handleMousedownOrTouchstart.bind(this),this.moveListener=this.handleMove.bind(this),this.pointerdownListener=this.handlePointerdown.bind(this),this.pointerupListener=this.handlePointerup.bind(this),this.thumbMouseenterListener=this.handleThumbMouseenter.bind(this),this.thumbMouseleaveListener=this.handleThumbMouseleave.bind(this),this.inputStartChangeListener=function(){t.handleInputChange(d.START)},this.inputEndChangeListener=function(){t.handleInputChange(d.END)},this.inputStartFocusListener=function(){t.handleInputFocus(d.START)},this.inputEndFocusListener=function(){t.handleInputFocus(d.END)},this.inputStartBlurListener=function(){t.handleInputBlur(d.START)},this.inputEndBlurListener=function(){t.handleInputBlur(d.END)},this.resizeListener=this.handleResize.bind(this),this.registerEventHandlers()},e.prototype.destroy=function(){this.deregisterEventHandlers()},e.prototype.setMin=function(t){this.min=t,this.isRange||(this.valueStart=t),this.updateUI()},e.prototype.setMax=function(t){this.max=t,this.updateUI()},e.prototype.getMin=function(){return this.min},e.prototype.getMax=function(){return this.max},e.prototype.getValue=function(){return this.value},e.prototype.setValue=function(t){if(this.isRange&&t<this.valueStart+this.minRange)throw new Error("end thumb value ("+t+") must be >= start thumb "+("value ("+this.valueStart+") + min range ("+this.minRange+")"));this.updateValue(t,d.END)},e.prototype.getValueStart=function(){if(!this.isRange)throw new Error("`valueStart` is only applicable for range sliders.");return this.valueStart},e.prototype.setValueStart=function(t){if(!this.isRange)throw new Error("`valueStart` is only applicable for range sliders.");if(this.isRange&&t>this.value-this.minRange)throw new Error("start thumb value ("+t+") must be <= end thumb "+("value ("+this.value+") - min range ("+this.minRange+")"));this.updateValue(t,d.START)},e.prototype.setStep=function(t){this.step=t,this.numDecimalPlaces=Xe(t),this.updateUI()},e.prototype.setMinRange=function(t){if(!this.isRange)throw new Error("`minRange` is only applicable for range sliders.");if(t<0)throw new Error("`minRange` must be non-negative. "+("Current value: "+t));if(this.value-this.valueStart<t)throw new Error("start thumb value ("+this.valueStart+") and end thumb value "+("("+this.value+") must differ by at least "+t+"."));this.minRange=t},e.prototype.setIsDiscrete=function(t){this.isDiscrete=t,this.updateValueIndicatorUI(),this.updateTickMarksUI()},e.prototype.getStep=function(){return this.step},e.prototype.getMinRange=function(){if(!this.isRange)throw new Error("`minRange` is only applicable for range sliders.");return this.minRange},e.prototype.setHasTickMarks=function(t){this.hasTickMarks=t,this.updateTickMarksUI()},e.prototype.getDisabled=function(){return this.isDisabled},e.prototype.setDisabled=function(t){this.isDisabled=t,t?(this.adapter.addClass(y.DISABLED),this.isRange&&this.adapter.setInputAttribute(k.INPUT_DISABLED,"",d.START),this.adapter.setInputAttribute(k.INPUT_DISABLED,"",d.END)):(this.adapter.removeClass(y.DISABLED),this.isRange&&this.adapter.removeInputAttribute(k.INPUT_DISABLED,d.START),this.adapter.removeInputAttribute(k.INPUT_DISABLED,d.END))},e.prototype.getIsRange=function(){return this.isRange},e.prototype.layout=function(t){var n=t===void 0?{}:t,i=n.skipUpdateUI;this.rect=this.adapter.getBoundingClientRect(),this.isRange&&(this.startThumbKnobWidth=this.adapter.getThumbKnobWidth(d.START),this.endThumbKnobWidth=this.adapter.getThumbKnobWidth(d.END)),i||this.updateUI()},e.prototype.handleResize=function(){this.layout()},e.prototype.handleDown=function(t){if(!this.isDisabled){this.valueStartBeforeDownEvent=this.valueStart,this.valueBeforeDownEvent=this.value;var n=t.clientX!=null?t.clientX:t.targetTouches[0].clientX;this.downEventClientX=n;var i=this.mapClientXOnSliderScale(n);this.thumb=this.getThumbFromDownEvent(n,i),this.thumb!==null&&(this.handleDragStart(t,i,this.thumb),this.updateValue(i,this.thumb,{emitInputEvent:!0}))}},e.prototype.handleMove=function(t){if(!this.isDisabled){t.preventDefault();var n=t.clientX!=null?t.clientX:t.targetTouches[0].clientX,i=this.thumb!=null;if(this.thumb=this.getThumbFromMoveEvent(n),this.thumb!==null){var r=this.mapClientXOnSliderScale(n);i||(this.handleDragStart(t,r,this.thumb),this.adapter.emitDragStartEvent(r,this.thumb)),this.updateValue(r,this.thumb,{emitInputEvent:!0})}}},e.prototype.handleUp=function(){var t,n;if(!(this.isDisabled||this.thumb===null)){!((n=(t=this.adapter).shouldHideFocusStylesForPointerEvents)===null||n===void 0)&&n.call(t)&&this.handleInputBlur(this.thumb);var i=this.thumb===d.START?this.valueStartBeforeDownEvent:this.valueBeforeDownEvent,r=this.thumb===d.START?this.valueStart:this.value;i!==r&&this.adapter.emitChangeEvent(r,this.thumb),this.adapter.emitDragEndEvent(r,this.thumb),this.thumb=null}},e.prototype.handleThumbMouseenter=function(){!this.isDiscrete||!this.isRange||(this.adapter.addThumbClass(y.THUMB_WITH_INDICATOR,d.START),this.adapter.addThumbClass(y.THUMB_WITH_INDICATOR,d.END))},e.prototype.handleThumbMouseleave=function(){var t,n;!this.isDiscrete||!this.isRange||!(!((n=(t=this.adapter).shouldHideFocusStylesForPointerEvents)===null||n===void 0)&&n.call(t))&&(this.adapter.isInputFocused(d.START)||this.adapter.isInputFocused(d.END))||this.thumb||(this.adapter.removeThumbClass(y.THUMB_WITH_INDICATOR,d.START),this.adapter.removeThumbClass(y.THUMB_WITH_INDICATOR,d.END))},e.prototype.handleMousedownOrTouchstart=function(t){var n=this,i=t.type==="mousedown"?"mousemove":"touchmove";this.adapter.registerBodyEventHandler(i,this.moveListener);var r=function(){n.handleUp(),n.adapter.deregisterBodyEventHandler(i,n.moveListener),n.adapter.deregisterEventHandler("mouseup",r),n.adapter.deregisterEventHandler("touchend",r)};this.adapter.registerBodyEventHandler("mouseup",r),this.adapter.registerBodyEventHandler("touchend",r),this.handleDown(t)},e.prototype.handlePointerdown=function(t){var n=t.button===0;n&&(t.pointerId!=null&&this.adapter.setPointerCapture(t.pointerId),this.adapter.registerEventHandler("pointermove",this.moveListener),this.handleDown(t))},e.prototype.handleInputChange=function(t){var n=Number(this.adapter.getInputValue(t));t===d.START?this.setValueStart(n):this.setValue(n),this.adapter.emitChangeEvent(t===d.START?this.valueStart:this.value,t),this.adapter.emitInputEvent(t===d.START?this.valueStart:this.value,t)},e.prototype.handleInputFocus=function(t){if(this.adapter.addThumbClass(y.THUMB_FOCUSED,t),!!this.isDiscrete&&(this.adapter.addThumbClass(y.THUMB_WITH_INDICATOR,t),this.isRange)){var n=t===d.START?d.END:d.START;this.adapter.addThumbClass(y.THUMB_WITH_INDICATOR,n)}},e.prototype.handleInputBlur=function(t){if(this.adapter.removeThumbClass(y.THUMB_FOCUSED,t),!!this.isDiscrete&&(this.adapter.removeThumbClass(y.THUMB_WITH_INDICATOR,t),this.isRange)){var n=t===d.START?d.END:d.START;this.adapter.removeThumbClass(y.THUMB_WITH_INDICATOR,n)}},e.prototype.handleDragStart=function(t,n,i){var r,o;this.adapter.emitDragStartEvent(n,i),this.adapter.focusInput(i),!((o=(r=this.adapter).shouldHideFocusStylesForPointerEvents)===null||o===void 0)&&o.call(r)&&this.handleInputFocus(i),t.preventDefault()},e.prototype.getThumbFromDownEvent=function(t,n){if(!this.isRange)return d.END;var i=this.adapter.getThumbBoundingClientRect(d.START),r=this.adapter.getThumbBoundingClientRect(d.END),o=t>=i.left&&t<=i.right,s=t>=r.left&&t<=r.right;return o&&s?null:o?d.START:s?d.END:n<this.valueStart?d.START:n>this.value?d.END:n-this.valueStart<=this.value-n?d.START:d.END},e.prototype.getThumbFromMoveEvent=function(t){if(this.thumb!==null)return this.thumb;if(this.downEventClientX===null)throw new Error("`downEventClientX` is null after move event.");var n=Math.abs(this.downEventClientX-t)<pe.THUMB_UPDATE_MIN_PX;if(n)return this.thumb;var i=t<this.downEventClientX;return i?this.adapter.isRTL()?d.END:d.START:this.adapter.isRTL()?d.START:d.END},e.prototype.updateUI=function(t){t?this.updateThumbAndInputAttributes(t):(this.updateThumbAndInputAttributes(d.START),this.updateThumbAndInputAttributes(d.END)),this.updateThumbAndTrackUI(t),this.updateValueIndicatorUI(t),this.updateTickMarksUI()},e.prototype.updateThumbAndInputAttributes=function(t){if(t){var n=this.isRange&&t===d.START?this.valueStart:this.value,i=String(n);this.adapter.setInputAttribute(k.INPUT_VALUE,i,t),this.isRange&&t===d.START?this.adapter.setInputAttribute(k.INPUT_MIN,String(n+this.minRange),d.END):this.isRange&&t===d.END&&this.adapter.setInputAttribute(k.INPUT_MAX,String(n-this.minRange),d.START),this.adapter.getInputValue(t)!==i&&this.adapter.setInputValue(i,t);var r=this.adapter.getValueToAriaValueTextFn();r&&this.adapter.setInputAttribute(k.ARIA_VALUETEXT,r(n,t),t)}},e.prototype.updateValueIndicatorUI=function(t){if(this.isDiscrete){var n=this.isRange&&t===d.START?this.valueStart:this.value;this.adapter.setValueIndicatorText(n,t===d.START?d.START:d.END),!t&&this.isRange&&this.adapter.setValueIndicatorText(this.valueStart,d.START)}},e.prototype.updateTickMarksUI=function(){if(!(!this.isDiscrete||!this.hasTickMarks)){var t=(this.valueStart-this.min)/this.step,n=(this.value-this.valueStart)/this.step+1,i=(this.max-this.value)/this.step,r=Array.from({length:t}).fill(_t.INACTIVE),o=Array.from({length:n}).fill(_t.ACTIVE),s=Array.from({length:i}).fill(_t.INACTIVE);this.adapter.updateTickMarks(r.concat(o).concat(s))}},e.prototype.mapClientXOnSliderScale=function(t){var n=t-this.rect.left,i=n/this.rect.width;this.adapter.isRTL()&&(i=1-i);var r=this.min+i*(this.max-this.min);return r===this.max||r===this.min?r:Number(this.quantize(r).toFixed(this.numDecimalPlaces))},e.prototype.quantize=function(t){var n=Math.round((t-this.min)/this.step);return this.min+n*this.step},e.prototype.updateValue=function(t,n,i){var r=i===void 0?{}:i,o=r.emitInputEvent;if(t=this.clampValue(t,n),this.isRange&&n===d.START){if(this.valueStart===t)return;this.valueStart=t}else{if(this.value===t)return;this.value=t}this.updateUI(n),o&&this.adapter.emitInputEvent(n===d.START?this.valueStart:this.value,n)},e.prototype.clampValue=function(t,n){t=Math.min(Math.max(t,this.min),this.max);var i=this.isRange&&n===d.START&&t>this.value-this.minRange;if(i)return this.value-this.minRange;var r=this.isRange&&n===d.END&&t<this.valueStart+this.minRange;return r?this.valueStart+this.minRange:t},e.prototype.updateThumbAndTrackUI=function(t){var n=this,i=this,r=i.max,o=i.min,s=(this.value-this.valueStart)/(r-o),c=s*this.rect.width,l=this.adapter.isRTL(),u=he?ae(window,"transform"):"transform";if(this.isRange){var v=this.adapter.isRTL()?(r-this.value)/(r-o)*this.rect.width:(this.valueStart-o)/(r-o)*this.rect.width,f=v+c;this.animFrame.request(se.SLIDER_UPDATE,function(){var h=!l&&t===d.START||l&&t!==d.START;h?(n.adapter.setTrackActiveStyleProperty("transform-origin","right"),n.adapter.setTrackActiveStyleProperty("left","auto"),n.adapter.setTrackActiveStyleProperty("right",n.rect.width-f+"px")):(n.adapter.setTrackActiveStyleProperty("transform-origin","left"),n.adapter.setTrackActiveStyleProperty("right","auto"),n.adapter.setTrackActiveStyleProperty("left",v+"px")),n.adapter.setTrackActiveStyleProperty(u,"scaleX("+s+")");var A=l?f:v,b=n.adapter.isRTL()?v:f;(t===d.START||!t||!n.initialStylesRemoved)&&(n.adapter.setThumbStyleProperty(u,"translateX("+A+"px)",d.START),n.alignValueIndicator(d.START,A)),(t===d.END||!t||!n.initialStylesRemoved)&&(n.adapter.setThumbStyleProperty(u,"translateX("+b+"px)",d.END),n.alignValueIndicator(d.END,b)),n.removeInitialStyles(l),n.updateOverlappingThumbsUI(A,b,t)})}else this.animFrame.request(se.SLIDER_UPDATE,function(){var h=l?n.rect.width-c:c;n.adapter.setThumbStyleProperty(u,"translateX("+h+"px)",d.END),n.alignValueIndicator(d.END,h),n.adapter.setTrackActiveStyleProperty(u,"scaleX("+s+")"),n.removeInitialStyles(l)})},e.prototype.alignValueIndicator=function(t,n){if(this.isDiscrete){var i=this.adapter.getThumbBoundingClientRect(t).width/2,r=this.adapter.getValueIndicatorContainerWidth(t),o=this.adapter.getBoundingClientRect().width;r/2>n+i?(this.adapter.setThumbStyleProperty(G.VAR_VALUE_INDICATOR_CARET_LEFT,i+"px",t),this.adapter.setThumbStyleProperty(G.VAR_VALUE_INDICATOR_CARET_RIGHT,"auto",t),this.adapter.setThumbStyleProperty(G.VAR_VALUE_INDICATOR_CARET_TRANSFORM,"translateX(-50%)",t),this.adapter.setThumbStyleProperty(G.VAR_VALUE_INDICATOR_CONTAINER_LEFT,"0",t),this.adapter.setThumbStyleProperty(G.VAR_VALUE_INDICATOR_CONTAINER_RIGHT,"auto",t),this.adapter.setThumbStyleProperty(G.VAR_VALUE_INDICATOR_CONTAINER_TRANSFORM,"none",t)):r/2>o-n+i?(this.adapter.setThumbStyleProperty(G.VAR_VALUE_INDICATOR_CARET_LEFT,"auto",t),this.adapter.setThumbStyleProperty(G.VAR_VALUE_INDICATOR_CARET_RIGHT,i+"px",t),this.adapter.setThumbStyleProperty(G.VAR_VALUE_INDICATOR_CARET_TRANSFORM,"translateX(50%)",t),this.adapter.setThumbStyleProperty(G.VAR_VALUE_INDICATOR_CONTAINER_LEFT,"auto",t),this.adapter.setThumbStyleProperty(G.VAR_VALUE_INDICATOR_CONTAINER_RIGHT,"0",t),this.adapter.setThumbStyleProperty(G.VAR_VALUE_INDICATOR_CONTAINER_TRANSFORM,"none",t)):(this.adapter.setThumbStyleProperty(G.VAR_VALUE_INDICATOR_CARET_LEFT,"50%",t),this.adapter.setThumbStyleProperty(G.VAR_VALUE_INDICATOR_CARET_RIGHT,"auto",t),this.adapter.setThumbStyleProperty(G.VAR_VALUE_INDICATOR_CARET_TRANSFORM,"translateX(-50%)",t),this.adapter.setThumbStyleProperty(G.VAR_VALUE_INDICATOR_CONTAINER_LEFT,"50%",t),this.adapter.setThumbStyleProperty(G.VAR_VALUE_INDICATOR_CONTAINER_RIGHT,"auto",t),this.adapter.setThumbStyleProperty(G.VAR_VALUE_INDICATOR_CONTAINER_TRANSFORM,"translateX(-50%)",t))}},e.prototype.removeInitialStyles=function(t){if(!this.initialStylesRemoved){var n=t?"right":"left";this.adapter.removeThumbStyleProperty(n,d.END),this.isRange&&this.adapter.removeThumbStyleProperty(n,d.START),this.initialStylesRemoved=!0,this.resetTrackAndThumbAnimation()}},e.prototype.resetTrackAndThumbAnimation=function(){var t=this;if(this.isDiscrete){var n=he?ae(window,"transition"):"transition",i="none 0s ease 0s";this.adapter.setThumbStyleProperty(n,i,d.END),this.isRange&&this.adapter.setThumbStyleProperty(n,i,d.START),this.adapter.setTrackActiveStyleProperty(n,i),requestAnimationFrame(function(){t.adapter.removeThumbStyleProperty(n,d.END),t.adapter.removeTrackActiveStyleProperty(n),t.isRange&&t.adapter.removeThumbStyleProperty(n,d.START)})}},e.prototype.updateOverlappingThumbsUI=function(t,n,i){var r=!1;if(this.adapter.isRTL()){var o=t-this.startThumbKnobWidth/2,s=n+this.endThumbKnobWidth/2;r=s>=o}else{var c=t+this.startThumbKnobWidth/2,l=n-this.endThumbKnobWidth/2;r=c>=l}r?(this.adapter.addThumbClass(y.THUMB_TOP,i||d.END),this.adapter.removeThumbClass(y.THUMB_TOP,i===d.START?d.END:d.START)):(this.adapter.removeThumbClass(y.THUMB_TOP,d.START),this.adapter.removeThumbClass(y.THUMB_TOP,d.END))},e.prototype.convertAttributeValueToNumber=function(t,n){if(t===null)throw new Error("MDCSliderFoundation: `"+n+"` must be non-null.");var i=Number(t);if(isNaN(i))throw new Error("MDCSliderFoundation: `"+n+"` value is `"+t+"`, but must be a number.");return i},e.prototype.validateProperties=function(t){var n=t.min,i=t.max,r=t.value,o=t.valueStart,s=t.step,c=t.minRange;if(n>=i)throw new Error("MDCSliderFoundation: min must be strictly less than max. "+("Current: [min: "+n+", max: "+i+"]"));if(s<=0)throw new Error("MDCSliderFoundation: step must be a positive number. "+("Current step: "+s));if(this.isRange){if(r<n||r>i||o<n||o>i)throw new Error("MDCSliderFoundation: values must be in [min, max] range. "+("Current values: [start value: "+o+", end value: ")+(r+", min: "+n+", max: "+i+"]"));if(o>r)throw new Error("MDCSliderFoundation: start value must be <= end value. "+("Current values: [start value: "+o+", end value: "+r+"]"));if(c<0)throw new Error("MDCSliderFoundation: minimum range must be non-negative. "+("Current min range: "+c));if(r-o<c)throw new Error("MDCSliderFoundation: start value and end value must differ by at least "+(c+". Current values: [start value: "+o+", ")+("end value: "+r+"]"));var l=(o-n)/s,u=(r-n)/s;if(!Number.isInteger(parseFloat(l.toFixed(6)))||!Number.isInteger(parseFloat(u.toFixed(6))))throw new Error("MDCSliderFoundation: Slider values must be valid based on the "+("step value ("+s+"). Current values: [start value: ")+(o+", end value: "+r+", min: "+n+"]"))}else{if(r<n||r>i)throw new Error("MDCSliderFoundation: value must be in [min, max] range. "+("Current values: [value: "+r+", min: "+n+", max: "+i+"]"));var u=(r-n)/s;if(!Number.isInteger(parseFloat(u.toFixed(6))))throw new Error("MDCSliderFoundation: Slider value must be valid based on the "+("step value ("+s+"). Current value: "+r))}},e.prototype.registerEventHandlers=function(){this.adapter.registerWindowEventHandler("resize",this.resizeListener),e.SUPPORTS_POINTER_EVENTS?(this.adapter.registerEventHandler("pointerdown",this.pointerdownListener),this.adapter.registerEventHandler("pointerup",this.pointerupListener)):(this.adapter.registerEventHandler("mousedown",this.mousedownOrTouchstartListener),this.adapter.registerEventHandler("touchstart",this.mousedownOrTouchstartListener)),this.isRange&&(this.adapter.registerThumbEventHandler(d.START,"mouseenter",this.thumbMouseenterListener),this.adapter.registerThumbEventHandler(d.START,"mouseleave",this.thumbMouseleaveListener),this.adapter.registerInputEventHandler(d.START,"change",this.inputStartChangeListener),this.adapter.registerInputEventHandler(d.START,"focus",this.inputStartFocusListener),this.adapter.registerInputEventHandler(d.START,"blur",this.inputStartBlurListener)),this.adapter.registerThumbEventHandler(d.END,"mouseenter",this.thumbMouseenterListener),this.adapter.registerThumbEventHandler(d.END,"mouseleave",this.thumbMouseleaveListener),this.adapter.registerInputEventHandler(d.END,"change",this.inputEndChangeListener),this.adapter.registerInputEventHandler(d.END,"focus",this.inputEndFocusListener),this.adapter.registerInputEventHandler(d.END,"blur",this.inputEndBlurListener)},e.prototype.deregisterEventHandlers=function(){this.adapter.deregisterWindowEventHandler("resize",this.resizeListener),e.SUPPORTS_POINTER_EVENTS?(this.adapter.deregisterEventHandler("pointerdown",this.pointerdownListener),this.adapter.deregisterEventHandler("pointerup",this.pointerupListener)):(this.adapter.deregisterEventHandler("mousedown",this.mousedownOrTouchstartListener),this.adapter.deregisterEventHandler("touchstart",this.mousedownOrTouchstartListener)),this.isRange&&(this.adapter.deregisterThumbEventHandler(d.START,"mouseenter",this.thumbMouseenterListener),this.adapter.deregisterThumbEventHandler(d.START,"mouseleave",this.thumbMouseleaveListener),this.adapter.deregisterInputEventHandler(d.START,"change",this.inputStartChangeListener),this.adapter.deregisterInputEventHandler(d.START,"focus",this.inputStartFocusListener),this.adapter.deregisterInputEventHandler(d.START,"blur",this.inputStartBlurListener)),this.adapter.deregisterThumbEventHandler(d.END,"mouseenter",this.thumbMouseenterListener),this.adapter.deregisterThumbEventHandler(d.END,"mouseleave",this.thumbMouseleaveListener),this.adapter.deregisterInputEventHandler(d.END,"change",this.inputEndChangeListener),this.adapter.deregisterInputEventHandler(d.END,"focus",this.inputEndFocusListener),this.adapter.deregisterInputEventHandler(d.END,"blur",this.inputEndBlurListener)},e.prototype.handlePointerup=function(){this.handleUp(),this.adapter.deregisterEventHandler("pointermove",this.moveListener)},e.SUPPORTS_POINTER_EVENTS=he&&!!window.PointerEvent&&!Gi(),e}(S);function Gi(){return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document}function Xe(a){var e=/(?:\.(\d+))?(?:[eE]([+\-]?\d+))?$/.exec(String(a));if(!e)return 0;var t=e[1]||"",n=e[2]||0;return Math.max(0,(t==="0"?0:t.length)-Number(n))}/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Wi=function(a){m(e,a);function e(){var t=a!==null&&a.apply(this,arguments)||this;return t.skipInitialUIUpdate=!1,t.valueToAriaValueTextFn=null,t}return e.attachTo=function(t,n){return n===void 0&&(n={}),new e(t,void 0,n)},e.prototype.getDefaultFoundation=function(){var t=this,n={hasClass:function(i){return t.root.classList.contains(i)},addClass:function(i){t.root.classList.add(i)},removeClass:function(i){t.root.classList.remove(i)},addThumbClass:function(i,r){t.getThumbEl(r).classList.add(i)},removeThumbClass:function(i,r){t.getThumbEl(r).classList.remove(i)},getAttribute:function(i){return t.root.getAttribute(i)},getInputValue:function(i){return t.getInput(i).value},setInputValue:function(i,r){t.getInput(r).value=i},getInputAttribute:function(i,r){return t.getInput(r).getAttribute(i)},setInputAttribute:function(i,r,o){t.getInput(o).setAttribute(i,r)},removeInputAttribute:function(i,r){t.getInput(r).removeAttribute(i)},focusInput:function(i){t.getInput(i).focus()},isInputFocused:function(i){return t.getInput(i)===document.activeElement},shouldHideFocusStylesForPointerEvents:function(){return!1},getThumbKnobWidth:function(i){return t.getThumbEl(i).querySelector("."+y.THUMB_KNOB).getBoundingClientRect().width},getThumbBoundingClientRect:function(i){return t.getThumbEl(i).getBoundingClientRect()},getBoundingClientRect:function(){return t.root.getBoundingClientRect()},getValueIndicatorContainerWidth:function(i){return t.getThumbEl(i).querySelector("."+y.VALUE_INDICATOR_CONTAINER).getBoundingClientRect().width},isRTL:function(){return getComputedStyle(t.root).direction==="rtl"},setThumbStyleProperty:function(i,r,o){t.getThumbEl(o).style.setProperty(i,r)},removeThumbStyleProperty:function(i,r){t.getThumbEl(r).style.removeProperty(i)},setTrackActiveStyleProperty:function(i,r){t.trackActive.style.setProperty(i,r)},removeTrackActiveStyleProperty:function(i){t.trackActive.style.removeProperty(i)},setValueIndicatorText:function(i,r){var o=t.getThumbEl(r).querySelector("."+y.VALUE_INDICATOR_TEXT);o.textContent=String(i)},getValueToAriaValueTextFn:function(){return t.valueToAriaValueTextFn},updateTickMarks:function(i){var r=t.root.querySelector("."+y.TICK_MARKS_CONTAINER);if(!r){r=document.createElement("div"),r.classList.add(y.TICK_MARKS_CONTAINER);var o=t.root.querySelector("."+y.TRACK);o.appendChild(r)}if(i.length!==r.children.length){for(;r.firstChild;)r.removeChild(r.firstChild);t.addTickMarks(r,i)}else t.updateTickMarks(r,i)},setPointerCapture:function(i){t.root.setPointerCapture(i)},emitChangeEvent:function(i,r){t.emit(je.CHANGE,{value:i,thumb:r})},emitInputEvent:function(i,r){t.emit(je.INPUT,{value:i,thumb:r})},emitDragStartEvent:function(i,r){t.getRipple(r).activate()},emitDragEndEvent:function(i,r){t.getRipple(r).deactivate()},registerEventHandler:function(i,r){t.listen(i,r)},deregisterEventHandler:function(i,r){t.unlisten(i,r)},registerThumbEventHandler:function(i,r,o){t.getThumbEl(i).addEventListener(r,o)},deregisterThumbEventHandler:function(i,r,o){t.getThumbEl(i).removeEventListener(r,o)},registerInputEventHandler:function(i,r,o){t.getInput(i).addEventListener(r,o)},deregisterInputEventHandler:function(i,r,o){t.getInput(i).removeEventListener(r,o)},registerBodyEventHandler:function(i,r){document.body.addEventListener(i,r)},deregisterBodyEventHandler:function(i,r){document.body.removeEventListener(i,r)},registerWindowEventHandler:function(i,r){window.addEventListener(i,r)},deregisterWindowEventHandler:function(i,r){window.removeEventListener(i,r)}};return new Ki(n)},e.prototype.initialize=function(t){var n=t===void 0?{}:t,i=n.skipInitialUIUpdate;this.inputs=Array.from(this.root.querySelectorAll("."+y.INPUT)),this.thumbs=Array.from(this.root.querySelectorAll("."+y.THUMB)),this.trackActive=this.root.querySelector("."+y.TRACK_ACTIVE),this.ripples=this.createRipples(),i&&(this.skipInitialUIUpdate=!0)},e.prototype.initialSyncWithDOM=function(){this.foundation.layout({skipUpdateUI:this.skipInitialUIUpdate})},e.prototype.layout=function(){this.foundation.layout()},e.prototype.getValueStart=function(){return this.foundation.getValueStart()},e.prototype.setValueStart=function(t){this.foundation.setValueStart(t)},e.prototype.getValue=function(){return this.foundation.getValue()},e.prototype.setValue=function(t){this.foundation.setValue(t)},e.prototype.getDisabled=function(){return this.foundation.getDisabled()},e.prototype.setDisabled=function(t){this.foundation.setDisabled(t)},e.prototype.setValueToAriaValueTextFn=function(t){this.valueToAriaValueTextFn=t},e.prototype.getThumbEl=function(t){return t===d.END?this.thumbs[this.thumbs.length-1]:this.thumbs[0]},e.prototype.getInput=function(t){return t===d.END?this.inputs[this.inputs.length-1]:this.inputs[0]},e.prototype.getRipple=function(t){return t===d.END?this.ripples[this.ripples.length-1]:this.ripples[0]},e.prototype.addTickMarks=function(t,n){for(var i=document.createDocumentFragment(),r=0;r<n.length;r++){var o=document.createElement("div"),s=n[r]===_t.ACTIVE?y.TICK_MARK_ACTIVE:y.TICK_MARK_INACTIVE;o.classList.add(s),i.appendChild(o)}t.appendChild(i)},e.prototype.updateTickMarks=function(t,n){for(var i=Array.from(t.children),r=0;r<i.length;r++)n[r]===_t.ACTIVE?(i[r].classList.add(y.TICK_MARK_ACTIVE),i[r].classList.remove(y.TICK_MARK_INACTIVE)):(i[r].classList.add(y.TICK_MARK_INACTIVE),i[r].classList.remove(y.TICK_MARK_ACTIVE))},e.prototype.createRipples=function(){for(var t=[],n=Array.from(this.root.querySelectorAll("."+y.THUMB)),i=function(s){var c=n[s],l=r.inputs[s],u=p(p({},U.createAdapter(r)),{addClass:function(f){c.classList.add(f)},computeBoundingRect:function(){return c.getBoundingClientRect()},deregisterInteractionHandler:function(f,h){l.removeEventListener(f,h)},isSurfaceActive:function(){return tt(l,":active")},isUnbounded:function(){return!0},registerInteractionHandler:function(f,h){l.addEventListener(f,h,M())},removeClass:function(f){c.classList.remove(f)},updateCssVariable:function(f,h){c.style.setProperty(f,h)}}),v=new U(c,new vt(u));v.unbounded=!0,t.push(v)},r=this,o=0;o<n.length;o++)i(o);return t},e}(D);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ft={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},Q={ACTION_SELECTOR:".mdc-snackbar__action",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DATA_LIVE_LABEL_TEXT:"mdcSnackbarLabelText",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",REASON_SECONDARY_ACTION:"secondary-action",SURFACE_SELECTOR:".mdc-snackbar__surface"},ot={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var zi=ot.ARIA_LIVE_DELAY_MS,$e=Q.DATA_LIVE_LABEL_TEXT;function qi(a,e){e===void 0&&(e=a);var t=a.getAttribute("aria-live"),n=e.textContent.trim();if(!(!n||!t)){a.setAttribute("aria-live","off"),e.textContent="";var i=document.createElement("span");i.setAttribute("style","display: inline-block; width: 0; height: 1px;"),i.textContent=" ",e.appendChild(i),e.dataset[$e]=n,setTimeout(function(){a.setAttribute("aria-live",t),delete e.dataset[$e],e.textContent=n},zi)}}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ye=ft.OPENING,Qe=ft.OPEN,Ze=ft.CLOSING,ji=Q.REASON_ACTION,fe=Q.REASON_DISMISS,Xi=Q.REASON_SECONDARY_ACTION,$i=function(a){m(e,a);function e(t){var n=a.call(this,p(p({},e.defaultAdapter),t))||this;return n.opened=!1,n.animationFrame=0,n.animationTimer=0,n.autoDismissTimer=0,n.autoDismissTimeoutMs=ot.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,n.closeOnEscape=!0,n}return Object.defineProperty(e,"cssClasses",{get:function(){return ft},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Q},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return ot},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.clearAutoDismissTimer(),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=0,this.adapter.removeClass(Ye),this.adapter.removeClass(Qe),this.adapter.removeClass(Ze)},e.prototype.open=function(){var t=this;this.clearAutoDismissTimer(),this.opened=!0,this.adapter.notifyOpening(),this.adapter.removeClass(Ze),this.adapter.addClass(Ye),this.adapter.announce(),this.runNextAnimationFrame(function(){t.adapter.addClass(Qe),t.animationTimer=setTimeout(function(){var n=t.getTimeoutMs();t.handleAnimationTimerEnd(),t.adapter.notifyOpened(),n!==ot.INDETERMINATE&&(t.autoDismissTimer=setTimeout(function(){t.close(fe)},n))},ot.SNACKBAR_ANIMATION_OPEN_TIME_MS)})},e.prototype.close=function(t){var n=this;t===void 0&&(t=""),this.opened&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=0,this.clearAutoDismissTimer(),this.opened=!1,this.adapter.notifyClosing(t),this.adapter.addClass(ft.CLOSING),this.adapter.removeClass(ft.OPEN),this.adapter.removeClass(ft.OPENING),clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){n.handleAnimationTimerEnd(),n.adapter.notifyClosed(t)},ot.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},e.prototype.isOpen=function(){return this.opened},e.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs},e.prototype.setTimeoutMs=function(t){var n=ot.MIN_AUTO_DISMISS_TIMEOUT_MS,i=ot.MAX_AUTO_DISMISS_TIMEOUT_MS,r=ot.INDETERMINATE;if(t===ot.INDETERMINATE||t<=i&&t>=n)this.autoDismissTimeoutMs=t;else throw new Error(`
        timeoutMs must be an integer in the range `+n+"–"+i+`
        (or `+r+" to disable), but got '"+t+"'")},e.prototype.getCloseOnEscape=function(){return this.closeOnEscape},e.prototype.setCloseOnEscape=function(t){this.closeOnEscape=t},e.prototype.handleKeyDown=function(t){var n=t.key==="Escape"||t.keyCode===27;n&&this.getCloseOnEscape()&&this.close(fe)},e.prototype.handleActionButtonClick=function(t){this.close(ji)},e.prototype.handleActionIconClick=function(t){this.close(fe)},e.prototype.handleSecondaryActionButtonClick=function(t){this.close(Xi)},e.prototype.clearAutoDismissTimer=function(){clearTimeout(this.autoDismissTimer),this.autoDismissTimer=0},e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(ft.OPENING),this.adapter.removeClass(ft.CLOSING)},e.prototype.runNextAnimationFrame=function(t){var n=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){n.animationFrame=0,clearTimeout(n.animationTimer),n.animationTimer=setTimeout(t,0)})},e}(S);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Yi=Q.SURFACE_SELECTOR,Qi=Q.LABEL_SELECTOR,Je=Q.ACTION_SELECTOR,Zi=Q.DISMISS_SELECTOR,Ji=Q.OPENING_EVENT,tr=Q.OPENED_EVENT,er=Q.CLOSING_EVENT,nr=Q.CLOSED_EVENT,ir=function(a){m(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){t===void 0&&(t=function(){return qi}),this.announce=t()},e.prototype.initialSyncWithDOM=function(){var t=this;this.surfaceEl=this.root.querySelector(Yi),this.labelEl=this.root.querySelector(Qi),this.actionEl=this.root.querySelector(Je),this.handleKeyDown=function(n){t.foundation.handleKeyDown(n)},this.handleSurfaceClick=function(n){var i=n.target;t.isActionButton(i)?t.foundation.handleActionButtonClick(n):t.isActionIcon(i)&&t.foundation.handleActionIconClick(n)},this.registerKeyDownHandler(this.handleKeyDown),this.registerSurfaceClickHandler(this.handleSurfaceClick)},e.prototype.destroy=function(){a.prototype.destroy.call(this),this.deregisterKeyDownHandler(this.handleKeyDown),this.deregisterSurfaceClickHandler(this.handleSurfaceClick)},e.prototype.open=function(){this.foundation.open()},e.prototype.close=function(t){t===void 0&&(t=""),this.foundation.close(t)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},announce:function(){t.announce(t.labelEl)},notifyClosed:function(i){t.emit(nr,i?{reason:i}:{})},notifyClosing:function(i){t.emit(er,i?{reason:i}:{})},notifyOpened:function(){t.emit(tr,{})},notifyOpening:function(){t.emit(Ji,{})},removeClass:function(i){t.root.classList.remove(i)}};return new $i(n)},Object.defineProperty(e.prototype,"timeoutMs",{get:function(){return this.foundation.getTimeoutMs()},set:function(t){this.foundation.setTimeoutMs(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"closeOnEscape",{get:function(){return this.foundation.getCloseOnEscape()},set:function(t){this.foundation.setCloseOnEscape(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isOpen",{get:function(){return this.foundation.isOpen()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"labelText",{get:function(){return this.labelEl.textContent},set:function(t){this.labelEl.textContent=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"actionButtonText",{get:function(){return this.actionEl.textContent},set:function(t){this.actionEl.textContent=t},enumerable:!1,configurable:!0}),e.prototype.registerKeyDownHandler=function(t){this.listen("keydown",t)},e.prototype.deregisterKeyDownHandler=function(t){this.unlisten("keydown",t)},e.prototype.registerSurfaceClickHandler=function(t){this.surfaceEl.addEventListener("click",t)},e.prototype.deregisterSurfaceClickHandler=function(t){this.surfaceEl.removeEventListener("click",t)},e.prototype.isActionButton=function(t){return!!Nt(t,Je)},e.prototype.isActionIcon=function(t){return!!Nt(t,Zi)},e}(D);/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Tt;(function(a){a.PROCESSING="mdc-switch--processing",a.SELECTED="mdc-switch--selected",a.UNSELECTED="mdc-switch--unselected"})(Tt||(Tt={}));var ce;(function(a){a.RIPPLE=".mdc-switch__ripple"})(ce||(ce={}));/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function rr(a,e,t){var n=ar(a,e),i=n.getObservers(e);return i.push(t),function(){i.splice(i.indexOf(t),1)}}var te=new WeakMap;function ar(a,e){var t=new Map;te.has(a)||te.set(a,{isEnabled:!0,getObservers:function(l){var u=t.get(l)||[];return t.has(l)||t.set(l,u),u},installedProperties:new Set});var n=te.get(a);if(n.installedProperties.has(e))return n;var i=or(a,e)||{configurable:!0,enumerable:!0,value:a[e],writable:!0},r=p({},i),o=i.get,s=i.set;if("value"in i){delete r.value,delete r.writable;var c=i.value;o=function(){return c},i.writable&&(s=function(l){c=l})}return o&&(r.get=function(){return o.call(this)}),s&&(r.set=function(l){var u,v,f=o?o.call(this):l;if(s.call(this,l),n.isEnabled&&(!o||l!==f))try{for(var h=C(n.getObservers(e)),A=h.next();!A.done;A=h.next()){var b=A.value;b(l,f)}}catch(O){u={error:O}}finally{try{A&&!A.done&&(v=h.return)&&v.call(h)}finally{if(u)throw u.error}}}),n.installedProperties.add(e),Object.defineProperty(a,e,r),n}function or(a,e){for(var t=a,n;t&&(n=Object.getOwnPropertyDescriptor(t,e),!n);)t=Object.getPrototypeOf(t);return n}function sr(a,e){var t=te.get(a);t&&(t.isEnabled=e)}/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var cr=function(a){m(e,a);function e(t){var n=a.call(this,t)||this;return n.unobserves=new Set,n}return e.prototype.destroy=function(){a.prototype.destroy.call(this),this.unobserve()},e.prototype.observe=function(t,n){var i,r,o=this,s=[];try{for(var c=C(Object.keys(n)),l=c.next();!l.done;l=c.next()){var u=l.value,v=n[u].bind(this);s.push(this.observeProperty(t,u,v))}}catch(h){i={error:h}}finally{try{l&&!l.done&&(r=c.return)&&r.call(c)}finally{if(i)throw i.error}}var f=function(){var h,A;try{for(var b=C(s),O=b.next();!O.done;O=b.next()){var V=O.value;V()}}catch(T){h={error:T}}finally{try{O&&!O.done&&(A=b.return)&&A.call(b)}finally{if(h)throw h.error}}o.unobserves.delete(f)};return this.unobserves.add(f),f},e.prototype.observeProperty=function(t,n,i){return rr(t,n,i)},e.prototype.setObserversEnabled=function(t,n){sr(t,n)},e.prototype.unobserve=function(){var t,n;try{for(var i=C(ct([],J(this.unobserves))),r=i.next();!r.done;r=i.next()){var o=r.value;o()}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e}(S);/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var lr=function(a){m(e,a);function e(t){var n=a.call(this,t)||this;return n.handleClick=n.handleClick.bind(n),n}return e.prototype.init=function(){this.observe(this.adapter.state,{disabled:this.stopProcessingIfDisabled,processing:this.stopProcessingIfDisabled})},e.prototype.handleClick=function(){this.adapter.state.disabled||(this.adapter.state.selected=!this.adapter.state.selected)},e.prototype.stopProcessingIfDisabled=function(){this.adapter.state.disabled&&(this.adapter.state.processing=!1)},e}(cr),dr=function(a){m(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.prototype.init=function(){a.prototype.init.call(this),this.observe(this.adapter.state,{disabled:this.onDisabledChange,processing:this.onProcessingChange,selected:this.onSelectedChange})},e.prototype.initFromDOM=function(){this.setObserversEnabled(this.adapter.state,!1),this.adapter.state.selected=this.adapter.hasClass(Tt.SELECTED),this.onSelectedChange(),this.adapter.state.disabled=this.adapter.isDisabled(),this.adapter.state.processing=this.adapter.hasClass(Tt.PROCESSING),this.setObserversEnabled(this.adapter.state,!0),this.stopProcessingIfDisabled()},e.prototype.onDisabledChange=function(){this.adapter.setDisabled(this.adapter.state.disabled)},e.prototype.onProcessingChange=function(){this.toggleClass(this.adapter.state.processing,Tt.PROCESSING)},e.prototype.onSelectedChange=function(){this.adapter.setAriaChecked(String(this.adapter.state.selected)),this.toggleClass(this.adapter.state.selected,Tt.SELECTED),this.toggleClass(!this.adapter.state.selected,Tt.UNSELECTED)},e.prototype.toggleClass=function(t,n){t?this.adapter.addClass(n):this.adapter.removeClass(n)},e}(lr);/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ur=function(a){m(e,a);function e(t,n){var i=a.call(this,t,n)||this;return i.root=t,i}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(){this.ripple=new U(this.root,this.createRippleFoundation())},e.prototype.initialSyncWithDOM=function(){var t=this.root.querySelector(ce.RIPPLE);if(!t)throw new Error("Switch "+ce.RIPPLE+" element is required.");this.rippleElement=t,this.root.addEventListener("click",this.foundation.handleClick),this.foundation.initFromDOM()},e.prototype.destroy=function(){a.prototype.destroy.call(this),this.ripple.destroy(),this.root.removeEventListener("click",this.foundation.handleClick)},e.prototype.getDefaultFoundation=function(){return new dr(this.createAdapter())},e.prototype.createAdapter=function(){var t=this;return{addClass:function(n){t.root.classList.add(n)},hasClass:function(n){return t.root.classList.contains(n)},isDisabled:function(){return t.root.disabled},removeClass:function(n){t.root.classList.remove(n)},setAriaChecked:function(n){t.root.setAttribute("aria-checked",n)},setDisabled:function(n){t.root.disabled=n},state:this}},e.prototype.createRippleFoundation=function(){return new vt(this.createRippleAdapter())},e.prototype.createRippleAdapter=function(){var t=this;return p(p({},U.createAdapter(this)),{computeBoundingRect:function(){return t.rippleElement.getBoundingClientRect()},isUnbounded:function(){return!0}})},e}(D);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Sn={ANIMATING:"mdc-tab-scroller--animating",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll",SCROLL_TEST:"mdc-tab-scroller__test"},pr={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ce=function(){function a(e){this.adapter=e}return a}();/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var hr=function(a){m(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(){var t=this.adapter.getScrollAreaScrollLeft(),n=this.calculateScrollEdges().right;return Math.round(n-t)},e.prototype.scrollToRTL=function(t){var n=this.calculateScrollEdges(),i=this.adapter.getScrollAreaScrollLeft(),r=this.clampScrollValue(n.right-t);return{finalScrollPosition:r,scrollDelta:r-i}},e.prototype.incrementScrollRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(n-t);return{finalScrollPosition:i,scrollDelta:i-n}},e.prototype.getAnimatingScrollPosition=function(t){return t},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:t-n}},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.min(Math.max(n.left,t),n.right)},e}(Ce);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var fr=function(a){m(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft();return Math.round(t-n)},e.prototype.scrollToRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(-t);return{finalScrollPosition:i,scrollDelta:i-n}},e.prototype.incrementScrollRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(n-t);return{finalScrollPosition:i,scrollDelta:i-n}},e.prototype.getAnimatingScrollPosition=function(t,n){return t-n},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:n-t,right:0}},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.max(Math.min(n.right,t),n.left)},e}(Ce);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var mr=function(a){m(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft();return Math.round(n-t)},e.prototype.scrollToRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(t);return{finalScrollPosition:i,scrollDelta:n-i}},e.prototype.incrementScrollRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(n+t);return{finalScrollPosition:i,scrollDelta:n-i}},e.prototype.getAnimatingScrollPosition=function(t,n){return t+n},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:t-n,right:0}},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.min(Math.max(n.right,t),n.left)},e}(Ce);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var me=function(a){m(e,a);function e(t){var n=a.call(this,p(p({},e.defaultAdapter),t))||this;return n.isAnimating=!1,n}return Object.defineProperty(e,"cssClasses",{get:function(){return Sn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return pr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{eventTargetMatchesSelector:function(){return!1},addClass:function(){},removeClass:function(){},addScrollAreaClass:function(){},setScrollAreaStyleProperty:function(){},setScrollContentStyleProperty:function(){},getScrollContentStyleValue:function(){return""},setScrollAreaScrollLeft:function(){},getScrollAreaScrollLeft:function(){return 0},getScrollContentOffsetWidth:function(){return 0},getScrollAreaOffsetWidth:function(){return 0},computeScrollAreaClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeScrollContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeHorizontalScrollbarHeight:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this.adapter.computeHorizontalScrollbarHeight();this.adapter.setScrollAreaStyleProperty("margin-bottom",-t+"px"),this.adapter.addScrollAreaClass(e.cssClasses.SCROLL_AREA_SCROLL)},e.prototype.getScrollPosition=function(){if(this.isRTL())return this.computeCurrentScrollPositionRTL();var t=this.calculateCurrentTranslateX(),n=this.adapter.getScrollAreaScrollLeft();return n-t},e.prototype.handleInteraction=function(){this.isAnimating&&this.stopScrollAnimation()},e.prototype.handleTransitionEnd=function(t){var n=t.target;!this.isAnimating||!this.adapter.eventTargetMatchesSelector(n,e.strings.CONTENT_SELECTOR)||(this.isAnimating=!1,this.adapter.removeClass(e.cssClasses.ANIMATING))},e.prototype.incrementScroll=function(t){t!==0&&this.animate(this.getIncrementScrollOperation(t))},e.prototype.incrementScrollImmediate=function(t){if(t!==0){var n=this.getIncrementScrollOperation(t);n.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(n.finalScrollPosition))}},e.prototype.scrollTo=function(t){if(this.isRTL()){this.scrollToImplRTL(t);return}this.scrollToImpl(t)},e.prototype.getRTLScroller=function(){return this.rtlScrollerInstance||(this.rtlScrollerInstance=this.rtlScrollerFactory()),this.rtlScrollerInstance},e.prototype.calculateCurrentTranslateX=function(){var t=this.adapter.getScrollContentStyleValue("transform");if(t==="none")return 0;var n=/\((.+?)\)/.exec(t);if(!n)return 0;var i=n[1],r=J(i.split(","),6);r[0],r[1],r[2],r[3];var o=r[4];return r[5],parseFloat(o)},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.min(Math.max(n.left,t),n.right)},e.prototype.computeCurrentScrollPositionRTL=function(){var t=this.calculateCurrentTranslateX();return this.getRTLScroller().getScrollPositionRTL(t)},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:t-n}},e.prototype.scrollToImpl=function(t){var n=this.getScrollPosition(),i=this.clampScrollValue(t),r=i-n;this.animate({finalScrollPosition:i,scrollDelta:r})},e.prototype.scrollToImplRTL=function(t){var n=this.getRTLScroller().scrollToRTL(t);this.animate(n)},e.prototype.getIncrementScrollOperation=function(t){if(this.isRTL())return this.getRTLScroller().incrementScrollRTL(t);var n=this.getScrollPosition(),i=t+n,r=this.clampScrollValue(i),o=r-n;return{finalScrollPosition:r,scrollDelta:o}},e.prototype.animate=function(t){var n=this;t.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(t.finalScrollPosition),this.adapter.setScrollContentStyleProperty("transform","translateX("+t.scrollDelta+"px)"),this.adapter.computeScrollAreaClientRect(),requestAnimationFrame(function(){n.adapter.addClass(e.cssClasses.ANIMATING),n.adapter.setScrollContentStyleProperty("transform","none")}),this.isAnimating=!0)},e.prototype.stopScrollAnimation=function(){this.isAnimating=!1;var t=this.getAnimatingScrollPosition();this.adapter.removeClass(e.cssClasses.ANIMATING),this.adapter.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter.setScrollAreaScrollLeft(t)},e.prototype.getAnimatingScrollPosition=function(){var t=this.calculateCurrentTranslateX(),n=this.adapter.getScrollAreaScrollLeft();return this.isRTL()?this.getRTLScroller().getAnimatingScrollPosition(n,t):n-t},e.prototype.rtlScrollerFactory=function(){var t=this.adapter.getScrollAreaScrollLeft();this.adapter.setScrollAreaScrollLeft(t-1);var n=this.adapter.getScrollAreaScrollLeft();if(n<0)return this.adapter.setScrollAreaScrollLeft(t),new fr(this.adapter);var i=this.adapter.computeScrollAreaClientRect(),r=this.adapter.computeScrollContentClientRect(),o=Math.round(r.right-i.right);return this.adapter.setScrollAreaScrollLeft(t),o===n?new mr(this.adapter):new hr(this.adapter)},e.prototype.isRTL=function(){return this.adapter.getScrollContentStyleValue("direction")==="rtl"},e}(S);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ve;function vr(a,e){if(e===void 0&&(e=!0),e&&typeof ve<"u")return ve;var t=a.createElement("div");t.classList.add(Sn.SCROLL_TEST),a.body.appendChild(t);var n=t.offsetHeight-t.clientHeight;return a.body.removeChild(t),e&&(ve=n),n}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var gr=function(a){m(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(){this.area=this.root.querySelector(me.strings.AREA_SELECTOR),this.content=this.root.querySelector(me.strings.CONTENT_SELECTOR)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleInteraction=function(){t.foundation.handleInteraction()},this.handleTransitionEnd=function(n){t.foundation.handleTransitionEnd(n)},this.area.addEventListener("wheel",this.handleInteraction,M()),this.area.addEventListener("touchstart",this.handleInteraction,M()),this.area.addEventListener("pointerdown",this.handleInteraction,M()),this.area.addEventListener("mousedown",this.handleInteraction,M()),this.area.addEventListener("keydown",this.handleInteraction,M()),this.content.addEventListener("transitionend",this.handleTransitionEnd)},e.prototype.destroy=function(){a.prototype.destroy.call(this),this.area.removeEventListener("wheel",this.handleInteraction,M()),this.area.removeEventListener("touchstart",this.handleInteraction,M()),this.area.removeEventListener("pointerdown",this.handleInteraction,M()),this.area.removeEventListener("mousedown",this.handleInteraction,M()),this.area.removeEventListener("keydown",this.handleInteraction,M()),this.content.removeEventListener("transitionend",this.handleTransitionEnd)},e.prototype.getDefaultFoundation=function(){var t=this,n={eventTargetMatchesSelector:function(i,r){return tt(i,r)},addClass:function(i){t.root.classList.add(i)},removeClass:function(i){t.root.classList.remove(i)},addScrollAreaClass:function(i){t.area.classList.add(i)},setScrollAreaStyleProperty:function(i,r){t.area.style.setProperty(i,r)},setScrollContentStyleProperty:function(i,r){t.content.style.setProperty(i,r)},getScrollContentStyleValue:function(i){return window.getComputedStyle(t.content).getPropertyValue(i)},setScrollAreaScrollLeft:function(i){return t.area.scrollLeft=i},getScrollAreaScrollLeft:function(){return t.area.scrollLeft},getScrollContentOffsetWidth:function(){return t.content.offsetWidth},getScrollAreaOffsetWidth:function(){return t.area.offsetWidth},computeScrollAreaClientRect:function(){return t.area.getBoundingClientRect()},computeScrollContentClientRect:function(){return t.content.getBoundingClientRect()},computeHorizontalScrollbarHeight:function(){return vr(document)}};return new me(n)},e.prototype.getScrollPosition=function(){return this.foundation.getScrollPosition()},e.prototype.getScrollContentWidth=function(){return this.content.offsetWidth},e.prototype.incrementScroll=function(t){this.foundation.incrementScroll(t)},e.prototype.scrollTo=function(t){this.foundation.scrollTo(t)},e}(D);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Er={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"},Ar={CONTENT_SELECTOR:".mdc-tab-indicator__content"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var rt=function(a){m(e,a);function e(t){return a.call(this,p(p({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return Er},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Ar},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},computeContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setContentStyleProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.computeContentClientRect=function(){return this.adapter.computeContentClientRect()},e}(S);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var yr=function(a){m(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.prototype.activate=function(){this.adapter.addClass(rt.cssClasses.ACTIVE)},e.prototype.deactivate=function(){this.adapter.removeClass(rt.cssClasses.ACTIVE)},e}(rt);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var br=function(a){m(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.prototype.activate=function(t){if(!t){this.adapter.addClass(rt.cssClasses.ACTIVE);return}var n=this.computeContentClientRect(),i=t.width/n.width,r=t.left-n.left;this.adapter.addClass(rt.cssClasses.NO_TRANSITION),this.adapter.setContentStyleProperty("transform","translateX("+r+"px) scaleX("+i+")"),this.computeContentClientRect(),this.adapter.removeClass(rt.cssClasses.NO_TRANSITION),this.adapter.addClass(rt.cssClasses.ACTIVE),this.adapter.setContentStyleProperty("transform","")},e.prototype.deactivate=function(){this.adapter.removeClass(rt.cssClasses.ACTIVE)},e}(rt);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ir=function(a){m(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(){this.content=this.root.querySelector(rt.strings.CONTENT_SELECTOR)},e.prototype.computeContentClientRect=function(){return this.foundation.computeContentClientRect()},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},removeClass:function(i){t.root.classList.remove(i)},computeContentClientRect:function(){return t.content.getBoundingClientRect()},setContentStyleProperty:function(i,r){t.content.style.setProperty(i,r)}};return this.root.classList.contains(rt.cssClasses.FADE)?new yr(n):new br(n)},e.prototype.activate=function(t){this.foundation.activate(t)},e.prototype.deactivate=function(){this.foundation.deactivate()},e}(D);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Qt={ACTIVE:"mdc-tab--active"},Vt={ARIA_SELECTED:"aria-selected",CONTENT_SELECTOR:".mdc-tab__content",INTERACTED_EVENT:"MDCTab:interacted",RIPPLE_SELECTOR:".mdc-tab__ripple",TABINDEX:"tabIndex",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var xt=function(a){m(e,a);function e(t){var n=a.call(this,p(p({},e.defaultAdapter),t))||this;return n.focusOnActivate=!0,n}return Object.defineProperty(e,"cssClasses",{get:function(){return Qt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Vt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},activateIndicator:function(){},deactivateIndicator:function(){},notifyInteracted:function(){},getOffsetLeft:function(){return 0},getOffsetWidth:function(){return 0},getContentOffsetLeft:function(){return 0},getContentOffsetWidth:function(){return 0},focus:function(){},isFocused:function(){return!1}}},enumerable:!1,configurable:!0}),e.prototype.handleClick=function(){this.adapter.notifyInteracted()},e.prototype.isActive=function(){return this.adapter.hasClass(Qt.ACTIVE)},e.prototype.setFocusOnActivate=function(t){this.focusOnActivate=t},e.prototype.activate=function(t){this.adapter.addClass(Qt.ACTIVE),this.adapter.setAttr(Vt.ARIA_SELECTED,"true"),this.adapter.setAttr(Vt.TABINDEX,"0"),this.adapter.activateIndicator(t),this.focusOnActivate&&!this.adapter.isFocused()&&this.adapter.focus()},e.prototype.deactivate=function(){this.isActive()&&(this.adapter.removeClass(Qt.ACTIVE),this.adapter.setAttr(Vt.ARIA_SELECTED,"false"),this.adapter.setAttr(Vt.TABINDEX,"-1"),this.adapter.deactivateIndicator())},e.prototype.computeDimensions=function(){var t=this.adapter.getOffsetWidth(),n=this.adapter.getOffsetLeft(),i=this.adapter.getContentOffsetWidth(),r=this.adapter.getContentOffsetLeft();return{contentLeft:n+r,contentRight:n+r+i,rootLeft:n,rootRight:n+t}},e}(S);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Cr=function(a){m(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,n){t===void 0&&(t=function(o,s){return new U(o,s)}),n===void 0&&(n=function(o){return new Ir(o)}),this.id=this.root.id;var i=new vt(U.createAdapter(this));this.ripple=t(this.root,i);var r=this.root.querySelector(xt.strings.TAB_INDICATOR_SELECTOR);this.tabIndicator=n(r),this.content=this.root.querySelector(xt.strings.CONTENT_SELECTOR)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleClick=function(){t.foundation.handleClick()},this.listen("click",this.handleClick)},e.prototype.destroy=function(){this.unlisten("click",this.handleClick),this.ripple.destroy(),a.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this,n={setAttr:function(i,r){t.safeSetAttribute(t.root,i,r)},addClass:function(i){t.root.classList.add(i)},removeClass:function(i){t.root.classList.remove(i)},hasClass:function(i){return t.root.classList.contains(i)},activateIndicator:function(i){t.tabIndicator.activate(i)},deactivateIndicator:function(){t.tabIndicator.deactivate()},notifyInteracted:function(){t.emit(xt.strings.INTERACTED_EVENT,{tabId:t.id},!0)},getOffsetLeft:function(){return t.root.offsetLeft},getOffsetWidth:function(){return t.root.offsetWidth},getContentOffsetLeft:function(){return t.content.offsetLeft},getContentOffsetWidth:function(){return t.content.offsetWidth},focus:function(){t.root.focus()},isFocused:function(){return t.root===document.activeElement}};return new xt(n)},Object.defineProperty(e.prototype,"active",{get:function(){return this.foundation.isActive()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"focusOnActivate",{set:function(t){this.foundation.setFocusOnActivate(t)},enumerable:!1,configurable:!0}),e.prototype.activate=function(t){this.foundation.activate(t)},e.prototype.deactivate=function(){this.foundation.deactivate()},e.prototype.computeIndicatorClientRect=function(){return this.tabIndicator.computeContentClientRect()},e.prototype.computeDimensions=function(){return this.foundation.computeDimensions()},e.prototype.focus=function(){this.root.focus()},e}(D);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var B={ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab"},at={ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,ENTER_KEYCODE:13,EXTRA_SCROLL_AMOUNT:20,HOME_KEYCODE:36,SPACE_KEYCODE:32};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var St=new Set;St.add(B.ARROW_LEFT_KEY);St.add(B.ARROW_RIGHT_KEY);St.add(B.END_KEY);St.add(B.HOME_KEY);St.add(B.ENTER_KEY);St.add(B.SPACE_KEY);var Lt=new Map;Lt.set(at.ARROW_LEFT_KEYCODE,B.ARROW_LEFT_KEY);Lt.set(at.ARROW_RIGHT_KEYCODE,B.ARROW_RIGHT_KEY);Lt.set(at.END_KEYCODE,B.END_KEY);Lt.set(at.HOME_KEYCODE,B.HOME_KEY);Lt.set(at.ENTER_KEYCODE,B.ENTER_KEY);Lt.set(at.SPACE_KEYCODE,B.SPACE_KEY);var Ln=function(a){m(e,a);function e(t){var n=a.call(this,p(p({},e.defaultAdapter),t))||this;return n.useAutomaticActivation=!1,n}return Object.defineProperty(e,"strings",{get:function(){return B},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return at},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{scrollTo:function(){},incrementScroll:function(){},getScrollPosition:function(){return 0},getScrollContentWidth:function(){return 0},getOffsetWidth:function(){return 0},isRTL:function(){return!1},setActiveTab:function(){},activateTabAtIndex:function(){},deactivateTabAtIndex:function(){},focusTabAtIndex:function(){},getTabIndicatorClientRectAtIndex:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabDimensionsAtIndex:function(){return{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:function(){return-1},getFocusedTabIndex:function(){return-1},getIndexOfTabById:function(){return-1},getTabListLength:function(){return 0},notifyTabActivated:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setUseAutomaticActivation=function(t){this.useAutomaticActivation=t},e.prototype.activateTab=function(t){var n=this.adapter.getPreviousActiveTabIndex();if(!(!this.indexIsInRange(t)||t===n)){var i;n!==-1&&(this.adapter.deactivateTabAtIndex(n),i=this.adapter.getTabIndicatorClientRectAtIndex(n)),this.adapter.activateTabAtIndex(t,i),this.scrollIntoView(t),this.adapter.notifyTabActivated(t)}},e.prototype.handleKeyDown=function(t){var n=this.getKeyFromEvent(t);if(n!==void 0&&(this.isActivationKey(n)||t.preventDefault(),!(this.useAutomaticActivation&&this.isActivationKey(n)))){var i=this.adapter.getFocusedTabIndex();if(this.isActivationKey(n)){this.adapter.setActiveTab(i);return}var r=this.determineTargetFromKey(i,n);this.adapter.focusTabAtIndex(r),this.scrollIntoView(r),this.useAutomaticActivation&&this.adapter.setActiveTab(r)}},e.prototype.handleTabInteraction=function(t){this.adapter.setActiveTab(this.adapter.getIndexOfTabById(t.detail.tabId))},e.prototype.scrollIntoView=function(t){if(this.indexIsInRange(t)){if(t===0){this.adapter.scrollTo(0);return}if(t===this.adapter.getTabListLength()-1){this.adapter.scrollTo(this.adapter.getScrollContentWidth());return}if(this.isRTL()){this.scrollIntoViewImplRTL(t);return}this.scrollIntoViewImpl(t)}},e.prototype.determineTargetFromKey=function(t,n){var i=this.isRTL(),r=this.adapter.getTabListLength()-1,o=n===B.END_KEY,s=n===B.ARROW_LEFT_KEY&&!i||n===B.ARROW_RIGHT_KEY&&i,c=n===B.ARROW_RIGHT_KEY&&!i||n===B.ARROW_LEFT_KEY&&i,l=t;return o?l=r:s?l-=1:c?l+=1:l=0,l<0?l=r:l>r&&(l=0),l},e.prototype.calculateScrollIncrement=function(t,n,i,r){var o=this.adapter.getTabDimensionsAtIndex(n),s=o.contentLeft-i-r,c=o.contentRight-i,l=c-at.EXTRA_SCROLL_AMOUNT,u=s+at.EXTRA_SCROLL_AMOUNT;return n<t?Math.min(l,0):Math.max(u,0)},e.prototype.calculateScrollIncrementRTL=function(t,n,i,r,o){var s=this.adapter.getTabDimensionsAtIndex(n),c=o-s.contentLeft-i,l=o-s.contentRight-i-r,u=l+at.EXTRA_SCROLL_AMOUNT,v=c-at.EXTRA_SCROLL_AMOUNT;return n>t?Math.max(u,0):Math.min(v,0)},e.prototype.findAdjacentTabIndexClosestToEdge=function(t,n,i,r){var o=n.rootLeft-i,s=n.rootRight-i-r,c=o+s,l=o<0||c<0,u=s>0||c>0;return l?t-1:u?t+1:-1},e.prototype.findAdjacentTabIndexClosestToEdgeRTL=function(t,n,i,r,o){var s=o-n.rootLeft-r-i,c=o-n.rootRight-i,l=s+c,u=s>0||l>0,v=c<0||l<0;return u?t+1:v?t-1:-1},e.prototype.getKeyFromEvent=function(t){return St.has(t.key)?t.key:Lt.get(t.keyCode)},e.prototype.isActivationKey=function(t){return t===B.SPACE_KEY||t===B.ENTER_KEY},e.prototype.indexIsInRange=function(t){return t>=0&&t<this.adapter.getTabListLength()},e.prototype.isRTL=function(){return this.adapter.isRTL()},e.prototype.scrollIntoViewImpl=function(t){var n=this.adapter.getScrollPosition(),i=this.adapter.getOffsetWidth(),r=this.adapter.getTabDimensionsAtIndex(t),o=this.findAdjacentTabIndexClosestToEdge(t,r,n,i);if(this.indexIsInRange(o)){var s=this.calculateScrollIncrement(t,o,n,i);this.adapter.incrementScroll(s)}},e.prototype.scrollIntoViewImplRTL=function(t){var n=this.adapter.getScrollPosition(),i=this.adapter.getOffsetWidth(),r=this.adapter.getTabDimensionsAtIndex(t),o=this.adapter.getScrollContentWidth(),s=this.findAdjacentTabIndexClosestToEdgeRTL(t,r,n,i,o);if(this.indexIsInRange(s)){var c=this.calculateScrollIncrementRTL(t,s,n,i,o);this.adapter.incrementScroll(c)}},e}(S);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ge=Ln.strings,Tr=0,_r=function(a){m(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"focusOnActivate",{set:function(t){var n,i;try{for(var r=C(this.tabList),o=r.next();!o.done;o=r.next()){var s=o.value;s.focusOnActivate=t}}catch(c){n={error:c}}finally{try{o&&!o.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"useAutomaticActivation",{set:function(t){this.foundation.setUseAutomaticActivation(t)},enumerable:!1,configurable:!0}),e.prototype.initialize=function(t,n){t===void 0&&(t=function(i){return new Cr(i)}),n===void 0&&(n=function(i){return new gr(i)}),this.tabList=this.instantiateTabs(t),this.tabScroller=this.instantiatetabScroller(n)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleTabInteraction=function(i){t.foundation.handleTabInteraction(i)},this.handleKeyDown=function(i){t.foundation.handleKeyDown(i)},this.listen(xt.strings.INTERACTED_EVENT,this.handleTabInteraction),this.listen("keydown",this.handleKeyDown);for(var n=0;n<this.tabList.length;n++)if(this.tabList[n].active){this.scrollIntoView(n);break}},e.prototype.destroy=function(){var t,n;a.prototype.destroy.call(this),this.unlisten(xt.strings.INTERACTED_EVENT,this.handleTabInteraction),this.unlisten("keydown",this.handleKeyDown);try{for(var i=C(this.tabList),r=i.next();!r.done;r=i.next()){var o=r.value;o.destroy()}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}this.tabScroller&&this.tabScroller.destroy()},e.prototype.getDefaultFoundation=function(){var t=this,n={scrollTo:function(i){t.tabScroller.scrollTo(i)},incrementScroll:function(i){t.tabScroller.incrementScroll(i)},getScrollPosition:function(){return t.tabScroller.getScrollPosition()},getScrollContentWidth:function(){return t.tabScroller.getScrollContentWidth()},getOffsetWidth:function(){return t.root.offsetWidth},isRTL:function(){return window.getComputedStyle(t.root).getPropertyValue("direction")==="rtl"},setActiveTab:function(i){t.foundation.activateTab(i)},activateTabAtIndex:function(i,r){t.tabList[i].activate(r)},deactivateTabAtIndex:function(i){t.tabList[i].deactivate()},focusTabAtIndex:function(i){t.tabList[i].focus()},getTabIndicatorClientRectAtIndex:function(i){return t.tabList[i].computeIndicatorClientRect()},getTabDimensionsAtIndex:function(i){return t.tabList[i].computeDimensions()},getPreviousActiveTabIndex:function(){for(var i=0;i<t.tabList.length;i++)if(t.tabList[i].active)return i;return-1},getFocusedTabIndex:function(){var i=t.getTabElements(),r=document.activeElement;return i.indexOf(r)},getIndexOfTabById:function(i){for(var r=0;r<t.tabList.length;r++)if(t.tabList[r].id===i)return r;return-1},getTabListLength:function(){return t.tabList.length},notifyTabActivated:function(i){t.emit(ge.TAB_ACTIVATED_EVENT,{index:i},!0)}};return new Ln(n)},e.prototype.activateTab=function(t){this.foundation.activateTab(t)},e.prototype.scrollIntoView=function(t){this.foundation.scrollIntoView(t)},e.prototype.getTabElements=function(){return Array.from(this.root.querySelectorAll(ge.TAB_SELECTOR))},e.prototype.instantiateTabs=function(t){return this.getTabElements().map(function(n){return n.id=n.id||"mdc-tab-"+ ++Tr,t(n)})},e.prototype.instantiatetabScroller=function(t){var n=this.root.querySelector(ge.TAB_SCROLLER_SELECTOR);return n?t(n):null},e}(D);/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Rn={ROOT:"mdc-text-field-character-counter"},Sr={ROOT_SELECTOR:"."+Rn.ROOT};/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Dn=function(a){m(e,a);function e(t){return a.call(this,p(p({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return Rn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Sr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{setContent:function(){},setCounterValue:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setCounterValue=function(t,n){t=Math.min(t,n),this.adapter.setContent(t+" / "+n),this.adapter.setCounterValue(t,n)},e}(S);/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Lr=function(a){m(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundationForTextField",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,n={setContent:function(i){t.root.textContent=i},setCounterValue:function(){}};return new Dn(n)},e}(D);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var nt={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},ee={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon",WITH_INTERNAL_COUNTER:"mdc-text-field--with-internal-counter"},tn={LABEL_SCALE:.75},Rr=["pattern","min","max","required","step","minlength","maxlength"],Dr=["color","date","datetime-local","month","range","time","week"];/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var en=["mousedown","touchstart"],nn=["click","keydown"],Or=function(a){m(e,a);function e(t,n){n===void 0&&(n={});var i=a.call(this,p(p({},e.defaultAdapter),t))||this;return i.isFocused=!1,i.receivedUserInput=!1,i.useNativeValidation=!0,i.validateOnValueChange=!0,i.helperText=n.helperText,i.characterCounter=n.characterCounter,i.leadingIcon=n.leadingIcon,i.trailingIcon=n.trailingIcon,i.valid=!i.adapter.hasClass(e.cssClasses.INVALID),i.inputFocusHandler=function(){i.activateFocus()},i.inputBlurHandler=function(){i.deactivateFocus()},i.inputInputHandler=function(){i.handleInput()},i.setPointerXOffset=function(r){i.setTransformOrigin(r)},i.textFieldInteractionHandler=function(){i.handleTextFieldInteraction()},i.validationAttributeChangeHandler=function(r){i.handleValidationAttributeChange(r)},i}return Object.defineProperty(e,"cssClasses",{get:function(){return ee},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return nt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return tn},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldAlwaysFloat",{get:function(){var t=this.getNativeInput().type;return Dr.indexOf(t)>=0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat||this.isFocused||!!this.getValue()||this.isBadInput()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldShake",{get:function(){return!this.isFocused&&!this.isValid()&&!!this.getValue()},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver(function(){})},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t,n,i,r;this.adapter.hasLabel()&&this.getNativeInput().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler);try{for(var o=C(en),s=o.next();!s.done;s=o.next()){var c=s.value;this.adapter.registerInputInteractionHandler(c,this.setPointerXOffset)}}catch(v){t={error:v}}finally{try{s&&!s.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}try{for(var l=C(nn),u=l.next();!u.done;u=l.next()){var c=u.value;this.adapter.registerTextFieldInteractionHandler(c,this.textFieldInteractionHandler)}}catch(v){i={error:v}}finally{try{u&&!u.done&&(r=l.return)&&r.call(l)}finally{if(i)throw i.error}}this.validationObserver=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler),this.setcharacterCounter(this.getValue().length)},e.prototype.destroy=function(){var t,n,i,r;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler);try{for(var o=C(en),s=o.next();!s.done;s=o.next()){var c=s.value;this.adapter.deregisterInputInteractionHandler(c,this.setPointerXOffset)}}catch(v){t={error:v}}finally{try{s&&!s.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}try{for(var l=C(nn),u=l.next();!u.done;u=l.next()){var c=u.value;this.adapter.deregisterTextFieldInteractionHandler(c,this.textFieldInteractionHandler)}}catch(v){i={error:v}}finally{try{u&&!u.done&&(r=l.return)&&r.call(l)}finally{if(i)throw i.error}}this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver)},e.prototype.handleTextFieldInteraction=function(){var t=this.adapter.getNativeInput();t&&t.disabled||(this.receivedUserInput=!0)},e.prototype.handleValidationAttributeChange=function(t){var n=this;t.some(function(i){return Rr.indexOf(i)>-1?(n.styleValidity(!0),n.adapter.setLabelRequired(n.getNativeInput().required),!0):!1}),t.indexOf("maxlength")>-1&&this.setcharacterCounter(this.getValue().length)},e.prototype.notchOutline=function(t){if(!(!this.adapter.hasOutline()||!this.adapter.hasLabel()))if(t){var n=this.adapter.getLabelWidth()*tn.LABEL_SCALE;this.adapter.notchOutline(n)}else this.adapter.closeOutline()},e.prototype.activateFocus=function(){this.isFocused=!0,this.styleFocused(this.isFocused),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.helperText&&(this.helperText.isPersistent()||!this.helperText.isValidation()||!this.valid)&&this.helperText.showToScreenReader()},e.prototype.setTransformOrigin=function(t){if(!(this.isDisabled()||this.adapter.hasOutline())){var n=t.touches,i=n?n[0]:t,r=i.target.getBoundingClientRect(),o=i.clientX-r.left;this.adapter.setLineRippleTransformOrigin(o)}},e.prototype.handleInput=function(){this.autoCompleteFocus(),this.setcharacterCounter(this.getValue().length)},e.prototype.autoCompleteFocus=function(){this.receivedUserInput||this.activateFocus()},e.prototype.deactivateFocus=function(){this.isFocused=!1,this.adapter.deactivateLineRipple();var t=this.isValid();this.styleValidity(t),this.styleFocused(this.isFocused),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput=!1)},e.prototype.getValue=function(){return this.getNativeInput().value},e.prototype.setValue=function(t){if(this.getValue()!==t&&(this.getNativeInput().value=t),this.setcharacterCounter(t.length),this.validateOnValueChange){var n=this.isValid();this.styleValidity(n)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.validateOnValueChange&&this.adapter.shakeLabel(this.shouldShake))},e.prototype.isValid=function(){return this.useNativeValidation?this.isNativeInputValid():this.valid},e.prototype.setValid=function(t){this.valid=t,this.styleValidity(t);var n=!t&&!this.isFocused&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(n)},e.prototype.setValidateOnValueChange=function(t){this.validateOnValueChange=t},e.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange},e.prototype.setUseNativeValidation=function(t){this.useNativeValidation=t},e.prototype.isDisabled=function(){return this.getNativeInput().disabled},e.prototype.setDisabled=function(t){this.getNativeInput().disabled=t,this.styleDisabled(t)},e.prototype.setHelperTextContent=function(t){this.helperText&&this.helperText.setContent(t)},e.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon&&this.leadingIcon.setAriaLabel(t)},e.prototype.setLeadingIconContent=function(t){this.leadingIcon&&this.leadingIcon.setContent(t)},e.prototype.setTrailingIconAriaLabel=function(t){this.trailingIcon&&this.trailingIcon.setAriaLabel(t)},e.prototype.setTrailingIconContent=function(t){this.trailingIcon&&this.trailingIcon.setContent(t)},e.prototype.setcharacterCounter=function(t){if(this.characterCounter){var n=this.getNativeInput().maxLength;if(n===-1)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter.setCounterValue(t,n)}},e.prototype.isBadInput=function(){return this.getNativeInput().validity.badInput||!1},e.prototype.isNativeInputValid=function(){return this.getNativeInput().validity.valid},e.prototype.styleValidity=function(t){var n=e.cssClasses.INVALID;if(t?this.adapter.removeClass(n):this.adapter.addClass(n),this.helperText){this.helperText.setValidity(t);var i=this.helperText.isValidation();if(!i)return;var r=this.helperText.isVisible(),o=this.helperText.getId();r&&o?this.adapter.setInputAttr(nt.ARIA_DESCRIBEDBY,o):this.adapter.removeInputAttr(nt.ARIA_DESCRIBEDBY)}},e.prototype.styleFocused=function(t){var n=e.cssClasses.FOCUSED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.styleDisabled=function(t){var n=e.cssClasses,i=n.DISABLED,r=n.INVALID;t?(this.adapter.addClass(i),this.adapter.removeClass(r)):this.adapter.removeClass(i),this.leadingIcon&&this.leadingIcon.setDisabled(t),this.trailingIcon&&this.trailingIcon.setDisabled(t)},e.prototype.styleFloating=function(t){var n=e.cssClasses.LABEL_FLOATING;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.getNativeInput=function(){var t=this.adapter?this.adapter.getNativeInput():null;return t||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},e}(S);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var st={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},ht={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+st.ROOT};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var On=function(a){m(e,a);function e(t){return a.call(this,p(p({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return st},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ht},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return this.adapter.getAttr(ht.ARIA_HIDDEN)!=="true"},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.isPersistent=function(){return this.adapter.hasClass(st.HELPER_TEXT_PERSISTENT)},e.prototype.setPersistent=function(t){t?this.adapter.addClass(st.HELPER_TEXT_PERSISTENT):this.adapter.removeClass(st.HELPER_TEXT_PERSISTENT)},e.prototype.isValidation=function(){return this.adapter.hasClass(st.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidation=function(t){t?this.adapter.addClass(st.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(st.HELPER_TEXT_VALIDATION_MSG)},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(ht.ARIA_HIDDEN)},e.prototype.setValidity=function(t){var n=this.adapter.hasClass(st.HELPER_TEXT_PERSISTENT),i=this.adapter.hasClass(st.HELPER_TEXT_VALIDATION_MSG),r=i&&!t;r?(this.showToScreenReader(),this.adapter.getAttr(ht.ROLE)==="alert"?this.refreshAlertRole():this.adapter.setAttr(ht.ROLE,"alert")):this.adapter.removeAttr(ht.ROLE),!n&&!r&&this.hide()},e.prototype.hide=function(){this.adapter.setAttr(ht.ARIA_HIDDEN,"true")},e.prototype.refreshAlertRole=function(){var t=this;this.adapter.removeAttr(ht.ROLE),requestAnimationFrame(function(){t.adapter.setAttr(ht.ROLE,"alert")})},e}(S);/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var xn=function(a){m(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundationForTextField",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},removeClass:function(i){t.root.classList.remove(i)},hasClass:function(i){return t.root.classList.contains(i)},getAttr:function(i){return t.root.getAttribute(i)},setAttr:function(i,r){t.safeSetAttribute(t.root,i,r)},removeAttr:function(i){t.root.removeAttribute(i)},setContent:function(i){t.root.textContent=i}};return new On(n)},e}(D);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var rn={ICON_EVENT:"MDCTextField:icon",ICON_ROLE:"button"},xr={ROOT:"mdc-text-field__icon"};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var an=["click","keydown"],on=function(a){m(e,a);function e(t){var n=a.call(this,p(p({},e.defaultAdapter),t))||this;return n.savedTabIndex=null,n.interactionHandler=function(i){n.handleInteraction(i)},n}return Object.defineProperty(e,"strings",{get:function(){return rn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return xr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},notifyIconAction:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t,n;this.savedTabIndex=this.adapter.getAttr("tabindex");try{for(var i=C(an),r=i.next();!r.done;r=i.next()){var o=r.value;this.adapter.registerInteractionHandler(o,this.interactionHandler)}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e.prototype.destroy=function(){var t,n;try{for(var i=C(an),r=i.next();!r.done;r=i.next()){var o=r.value;this.adapter.deregisterInteractionHandler(o,this.interactionHandler)}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e.prototype.setDisabled=function(t){this.savedTabIndex&&(t?(this.adapter.setAttr("tabindex","-1"),this.adapter.removeAttr("role")):(this.adapter.setAttr("tabindex",this.savedTabIndex),this.adapter.setAttr("role",rn.ICON_ROLE)))},e.prototype.setAriaLabel=function(t){this.adapter.setAttr("aria-label",t)},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.handleInteraction=function(t){var n=t.key==="Enter"||t.keyCode===13,i=t.key===" ";(t.type==="click"||n||i)&&(t.preventDefault(),this.adapter.notifyIconAction())},e}(S);/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var wr=function(a){m(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundationForTextField",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,n={getAttr:function(i){return t.root.getAttribute(i)},setAttr:function(i,r){t.safeSetAttribute(t.root,i,r)},removeAttr:function(i){t.root.removeAttribute(i)},setContent:function(i){t.root.textContent=i},registerInteractionHandler:function(i,r){t.listen(i,r)},deregisterInteractionHandler:function(i,r){t.unlisten(i,r)},notifyIconAction:function(){t.emit(on.strings.ICON_EVENT,{},!0)}};return new on(n)},e}(D);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Mr=function(a){m(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,n,i,r,o,s,c){t===void 0&&(t=function(N,L){return new U(N,L)}),n===void 0&&(n=function(N){return new Cn(N)}),i===void 0&&(i=function(N){return new xn(N)}),r===void 0&&(r=function(N){return new Lr(N)}),o===void 0&&(o=function(N){return new wr(N)}),s===void 0&&(s=function(N){return new In(N)}),c===void 0&&(c=function(N){return new _n(N)}),this.input=this.root.querySelector(nt.INPUT_SELECTOR);var l=this.root.querySelector(nt.LABEL_SELECTOR);this.label=l?s(l):null;var u=this.root.querySelector(nt.LINE_RIPPLE_SELECTOR);this.lineRipple=u?n(u):null;var v=this.root.querySelector(nt.OUTLINE_SELECTOR);this.outline=v?c(v):null;var f=On.strings,h=this.root.nextElementSibling,A=h&&h.classList.contains(ee.HELPER_LINE),b=A&&h&&h.querySelector(f.ROOT_SELECTOR);this.helperText=b?i(b):null;var O=Dn.strings,V=this.root.querySelector(O.ROOT_SELECTOR);!V&&A&&h&&(V=h.querySelector(O.ROOT_SELECTOR)),this.characterCounter=V?r(V):null;var T=this.root.querySelector(nt.LEADING_ICON_SELECTOR);this.leadingIcon=T?o(T):null;var K=this.root.querySelector(nt.TRAILING_ICON_SELECTOR);this.trailingIcon=K?o(K):null,this.prefix=this.root.querySelector(nt.PREFIX_SELECTOR),this.suffix=this.root.querySelector(nt.SUFFIX_SELECTOR),this.ripple=this.createRipple(t)},e.prototype.destroy=function(){this.ripple&&this.ripple.destroy(),this.lineRipple&&this.lineRipple.destroy(),this.helperText&&this.helperText.destroy(),this.characterCounter&&this.characterCounter.destroy(),this.leadingIcon&&this.leadingIcon.destroy(),this.trailingIcon&&this.trailingIcon.destroy(),this.label&&this.label.destroy(),this.outline&&this.outline.destroy(),a.prototype.destroy.call(this)},e.prototype.initialSyncWithDOM=function(){this.disabled=this.input.disabled},Object.defineProperty(e.prototype,"value",{get:function(){return this.foundation.getValue()},set:function(t){this.foundation.setValue(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function(){return this.foundation.isDisabled()},set:function(t){this.foundation.setDisabled(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"valid",{get:function(){return this.foundation.isValid()},set:function(t){this.foundation.setValid(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"required",{get:function(){return this.input.required},set:function(t){this.input.required=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pattern",{get:function(){return this.input.pattern},set:function(t){this.input.pattern=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"minLength",{get:function(){return this.input.minLength},set:function(t){this.input.minLength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxLength",{get:function(){return this.input.maxLength},set:function(t){t<0?this.input.removeAttribute("maxLength"):this.input.maxLength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"min",{get:function(){return this.input.min},set:function(t){this.input.min=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"max",{get:function(){return this.input.max},set:function(t){this.input.max=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"step",{get:function(){return this.input.step},set:function(t){this.input.step=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"helperTextContent",{set:function(t){this.foundation.setHelperTextContent(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"leadingIconAriaLabel",{set:function(t){this.foundation.setLeadingIconAriaLabel(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"leadingIconContent",{set:function(t){this.foundation.setLeadingIconContent(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"trailingIconAriaLabel",{set:function(t){this.foundation.setTrailingIconAriaLabel(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"trailingIconContent",{set:function(t){this.foundation.setTrailingIconContent(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"useNativeValidation",{set:function(t){this.foundation.setUseNativeValidation(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"prefixText",{get:function(){return this.prefix?this.prefix.textContent:null},set:function(t){this.prefix&&(this.prefix.textContent=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"suffixText",{get:function(){return this.suffix?this.suffix.textContent:null},set:function(t){this.suffix&&(this.suffix.textContent=t)},enumerable:!1,configurable:!0}),e.prototype.focus=function(){this.input.focus()},e.prototype.layout=function(){var t=this.foundation.shouldFloat;this.foundation.notchOutline(t)},e.prototype.getDefaultFoundation=function(){var t=p(p(p(p(p({},this.getRootAdapterMethods()),this.getInputAdapterMethods()),this.getLabelAdapterMethods()),this.getLineRippleAdapterMethods()),this.getOutlineAdapterMethods());return new Or(t,this.getFoundationMap())},e.prototype.getRootAdapterMethods=function(){var t=this;return{addClass:function(n){t.root.classList.add(n)},removeClass:function(n){t.root.classList.remove(n)},hasClass:function(n){return t.root.classList.contains(n)},registerTextFieldInteractionHandler:function(n,i){t.listen(n,i)},deregisterTextFieldInteractionHandler:function(n,i){t.unlisten(n,i)},registerValidationAttributeChangeHandler:function(n){var i=function(s){return s.map(function(c){return c.attributeName}).filter(function(c){return c})},r=new MutationObserver(function(s){n(i(s))}),o={attributes:!0};return r.observe(t.input,o),r},deregisterValidationAttributeChangeHandler:function(n){n.disconnect()}}},e.prototype.getInputAdapterMethods=function(){var t=this;return{getNativeInput:function(){return t.input},setInputAttr:function(n,i){t.safeSetAttribute(t.input,n,i)},removeInputAttr:function(n){t.input.removeAttribute(n)},isFocused:function(){return document.activeElement===t.input},registerInputInteractionHandler:function(n,i){t.input.addEventListener(n,i,M())},deregisterInputInteractionHandler:function(n,i){t.input.removeEventListener(n,i,M())}}},e.prototype.getLabelAdapterMethods=function(){var t=this;return{floatLabel:function(n){t.label&&t.label.float(n)},getLabelWidth:function(){return t.label?t.label.getWidth():0},hasLabel:function(){return!!t.label},shakeLabel:function(n){t.label&&t.label.shake(n)},setLabelRequired:function(n){t.label&&t.label.setRequired(n)}}},e.prototype.getLineRippleAdapterMethods=function(){var t=this;return{activateLineRipple:function(){t.lineRipple&&t.lineRipple.activate()},deactivateLineRipple:function(){t.lineRipple&&t.lineRipple.deactivate()},setLineRippleTransformOrigin:function(n){t.lineRipple&&t.lineRipple.setRippleCenter(n)}}},e.prototype.getOutlineAdapterMethods=function(){var t=this;return{closeOutline:function(){t.outline&&t.outline.closeNotch()},hasOutline:function(){return!!t.outline},notchOutline:function(n){t.outline&&t.outline.notch(n)}}},e.prototype.getFoundationMap=function(){return{characterCounter:this.characterCounter?this.characterCounter.foundationForTextField:void 0,helperText:this.helperText?this.helperText.foundationForTextField:void 0,leadingIcon:this.leadingIcon?this.leadingIcon.foundationForTextField:void 0,trailingIcon:this.trailingIcon?this.trailingIcon.foundationForTextField:void 0}},e.prototype.createRipple=function(t){var n=this,i=this.root.classList.contains(ee.TEXTAREA),r=this.root.classList.contains(ee.OUTLINED);if(i||r)return null;var o=p(p({},U.createAdapter(this)),{isSurfaceActive:function(){return tt(n.input,":active")},registerInteractionHandler:function(s,c){n.input.addEventListener(s,c,M())},deregisterInteractionHandler:function(s,c){n.input.removeEventListener(s,c,M())}});return t(this.root,new vt(o))},e}(D);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Y={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},ne={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},Gt={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var wn=function(a){m(e,a);function e(t){return a.call(this,p(p({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"strings",{get:function(){return Gt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Y},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return ne},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.handleTargetScroll=function(){},e.prototype.handleWindowResize=function(){},e.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},e}(S);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Zt=0,Mn=function(a){m(e,a);function e(t){var n=a.call(this,t)||this;return n.wasDocked=!0,n.isDockedShowing=!0,n.currentAppBarOffsetTop=0,n.isCurrentlyBeingResized=!1,n.resizeThrottleId=Zt,n.resizeDebounceId=Zt,n.lastScrollPosition=n.adapter.getViewportScrollY(),n.topAppBarHeight=n.adapter.getTopAppBarHeight(),n}return e.prototype.destroy=function(){a.prototype.destroy.call(this),this.adapter.setStyle("top","")},e.prototype.handleTargetScroll=function(){var t=Math.max(this.adapter.getViewportScrollY(),0),n=t-this.lastScrollPosition;this.lastScrollPosition=t,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=n,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},e.prototype.handleWindowResize=function(){var t=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout(function(){t.resizeThrottleId=Zt,t.throttledResizeHandler()},ne.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout(function(){t.handleTargetScroll(),t.isCurrentlyBeingResized=!1,t.resizeDebounceId=Zt},ne.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},e.prototype.checkForUpdate=function(){var t=-this.topAppBarHeight,n=this.currentAppBarOffsetTop<0,i=this.currentAppBarOffsetTop>t,r=n&&i;if(r)this.wasDocked=!1;else if(this.wasDocked){if(this.isDockedShowing!==i)return this.isDockedShowing=i,!0}else return this.wasDocked=!0,!0;return r},e.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var t=this.currentAppBarOffsetTop;Math.abs(t)>=this.topAppBarHeight&&(t=-ne.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",t+"px")}},e.prototype.throttledResizeHandler=function(){var t=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==t&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-t,this.topAppBarHeight=t),this.handleTargetScroll()},e}(wn);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Nr=function(a){m(e,a);function e(){var t=a!==null&&a.apply(this,arguments)||this;return t.wasScrolled=!1,t}return e.prototype.handleTargetScroll=function(){var t=this.adapter.getViewportScrollY();t<=0?this.wasScrolled&&(this.adapter.removeClass(Y.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(Y.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},e}(Mn);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Fr=function(a){m(e,a);function e(t){var n=a.call(this,t)||this;return n.collapsed=!1,n.isAlwaysCollapsed=!1,n}return Object.defineProperty(e.prototype,"isCollapsed",{get:function(){return this.collapsed},enumerable:!1,configurable:!0}),e.prototype.init=function(){a.prototype.init.call(this),this.adapter.getTotalActionItems()>0&&this.adapter.addClass(Y.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter.hasClass(Y.SHORT_COLLAPSED_CLASS))},e.prototype.setAlwaysCollapsed=function(t){this.isAlwaysCollapsed=!!t,this.isAlwaysCollapsed?this.collapse():this.maybeCollapseBar()},e.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed},e.prototype.handleTargetScroll=function(){this.maybeCollapseBar()},e.prototype.maybeCollapseBar=function(){if(!this.isAlwaysCollapsed){var t=this.adapter.getViewportScrollY();t<=0?this.collapsed&&this.uncollapse():this.collapsed||this.collapse()}},e.prototype.uncollapse=function(){this.adapter.removeClass(Y.SHORT_COLLAPSED_CLASS),this.collapsed=!1},e.prototype.collapse=function(){this.adapter.addClass(Y.SHORT_COLLAPSED_CLASS),this.collapsed=!0},e}(wn);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var kr=function(a){m(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){t===void 0&&(t=function(i){return U.attachTo(i)}),this.navIcon=this.root.querySelector(Gt.NAVIGATION_ICON_SELECTOR);var n=Array.from(this.root.querySelectorAll(Gt.ACTION_ITEM_SELECTOR));this.navIcon&&n.push(this.navIcon),this.iconRipples=n.map(function(i){var r=t(i);return r.unbounded=!0,r}),this.scrollTarget=window},e.prototype.initialSyncWithDOM=function(){this.handleNavigationClick=this.foundation.handleNavigationClick.bind(this.foundation),this.handleWindowResize=this.foundation.handleWindowResize.bind(this.foundation),this.handleTargetScroll=this.foundation.handleTargetScroll.bind(this.foundation),this.scrollTarget.addEventListener("scroll",this.handleTargetScroll),this.navIcon&&this.navIcon.addEventListener("click",this.handleNavigationClick);var t=this.root.classList.contains(Y.FIXED_CLASS),n=this.root.classList.contains(Y.SHORT_CLASS);!n&&!t&&window.addEventListener("resize",this.handleWindowResize)},e.prototype.destroy=function(){var t,n;try{for(var i=C(this.iconRipples),r=i.next();!r.done;r=i.next()){var o=r.value;o.destroy()}}catch(l){t={error:l}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}this.scrollTarget.removeEventListener("scroll",this.handleTargetScroll),this.navIcon&&this.navIcon.removeEventListener("click",this.handleNavigationClick);var s=this.root.classList.contains(Y.FIXED_CLASS),c=this.root.classList.contains(Y.SHORT_CLASS);!c&&!s&&window.removeEventListener("resize",this.handleWindowResize),a.prototype.destroy.call(this)},e.prototype.setScrollTarget=function(t){this.scrollTarget.removeEventListener("scroll",this.handleTargetScroll),this.scrollTarget=t,this.handleTargetScroll=this.foundation.handleTargetScroll.bind(this.foundation),this.scrollTarget.addEventListener("scroll",this.handleTargetScroll)},e.prototype.getDefaultFoundation=function(){var t=this,n={hasClass:function(r){return t.root.classList.contains(r)},addClass:function(r){t.root.classList.add(r)},removeClass:function(r){t.root.classList.remove(r)},setStyle:function(r,o){t.root.style.setProperty(r,o)},getTopAppBarHeight:function(){return t.root.clientHeight},notifyNavigationIconClicked:function(){t.emit(Gt.NAVIGATION_EVENT,{})},getViewportScrollY:function(){var r=t.scrollTarget,o=t.scrollTarget;return r.pageYOffset!==void 0?r.pageYOffset:o.scrollTop},getTotalActionItems:function(){return t.root.querySelectorAll(Gt.ACTION_ITEM_SELECTOR).length}},i;return this.root.classList.contains(Y.SHORT_CLASS)?i=new Fr(n):this.root.classList.contains(Y.FIXED_CLASS)?i=new Nr(n):i=new Mn(n),i},e}(D);const Pr=`<!-- Required styles for Material Web -->
<link
  rel="stylesheet"
  href="https://unpkg.com/material-components-web@13.0.0/dist/material-components-web.min.css"
/>
<style>
  body {
    display: flex;
    margin: 0;
  }

  .remix-fab {
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 200;
  }

  .drawer-content--theme-summary {
    display: none;
  }

  .theme-name {
    margin-bottom: 0;
  }
  .theme-name:focus {
    outline: 1px solid rgba(0, 0, 0, 0.12);
  }
  .theme-name:empty:before {
    content: attr(placeholder);
    color: rgba(0, 0, 0, 0.6);
  }

  .mdc-list-divider.theme-summary-divider {
    border-bottom-width: 2px;
    margin: 20px 0;
  }

  .theme-summary-line {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 8px 0;
  }
  .theme-summary-line figure {
    margin: 0;
  }
  .theme-summary-line .theme-summary-code {
    background: none;
  }
  .theme-summary-line .theme-summary-color {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  .theme-summary-line .theme-summary-shape {
    width: 48px;
    height: 36px;
    line-height: 36px;
    text-align: center;
  }
  .theme-summary-line.theme-summary-line--typography {
    margin: 0;
  }
  .theme-summary-line .theme-summary-typography {
    width: 120px;
  }

  .mdc-list-divider.typography-baseline-divider {
    margin-top: 0;
    margin-bottom: 12px;
  }

  .mdc-drawer-app-content {
    width: 100%;
  }

  .theme-builder-desc-banner {
    display: none;
    width: 100%;
    text-align: center;
    padding: 10px;
  }

  @media (max-width: 1310px) {
    .theme-builder-app-bar,
    .theme-builder-desc-banner {
      display: block;
    }

    .theme-builder-drawer {
      display: none;
    }
  }
  .main-content {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .main-content:not(.mdc-top-app-bar--fixed-adjust) {
    padding: 2vh 0;
  }
  .main-content .column {
    width: 420px;
  }

  .component-section-row {
    display: flex;
  }
  .component-section-row .component-section:first-child {
    width: 200px;
  }

  .component-section {
    margin: 16px 20px 40px 20px;
  }
  .component-section.dialog-component-section {
    margin-bottom: 60px;
  }

  @media only screen and (max-width: 600px) {
    .component-section {
      margin-left: auto;
      margin-right: auto;
    }

    .mdc-image-list {
      width: auto;
    }

    .mdc-drawer {
      width: 60%;
      min-width: calc(100% - 56px);
    }

    .column {
      width: auto;
      max-width: 420px;
      padding-right: 8px;
      padding-left: 8px;
    }
  }
  @media only screen and (max-width: 485px) {
    .column {
      overflow: hidden;
    }

    .remix-fab {
      position: fixed;
      bottom: 16px;
      right: auto;
      margin: 0;
      z-index: 200;
    }

    .mdc-dialog .mdc-dialog__surface {
      max-width: calc(100% - 100px);
    }
  }
  .section-header {
    display: flex;
    height: 36px;
    font-family: Inter, sans-serif;
  }
  .section-header a {
    display: flex;
    align-items: center;
  }
  .section-header a:hover,
  .section-header a:focus {
    text-decoration: none;
  }
  .section-header .material-icons {
    font-size: 1rem;
    padding: 8px;
  }
  .section-header .material-icons.leading-icon {
    padding-left: 0;
  }

  .component-wrapper {
    margin: 16px 0;
  }

  .print .column {
    width: 30vw;
  }
  .print .component-wrapper {
    margin-bottom: 60px;
  }
  .print .component-wrapper.text-field-component-wrapper,
  .print .component-wrapper.chips-component-wrapper {
    margin-bottom: 96px;
  }
  .print .theme-name {
    margin-bottom: 8px;
  }
  .print .glitch-url {
    font-size: 1rem;
  }
  .print .drawer-content--instructions .mdc-typography--overline {
    font-size: 0.9rem;
  }
  .print .drawer-content--instructions .mdc-typography--body2 {
    font-size: 1.2rem;
    line-height: 1.75rem;
  }
  .print .drawer-content--options {
    display: none;
  }
  .print .button-component-wrapper,
  .print .fab-component-wrapper {
    margin: 24px 0 44px;
  }
  .print .top-bar-component-wrapper {
    margin: 24px 0 52px;
  }
  .print .switch-component-wrapper {
    margin-left: -8px;
    margin-top: 24px;
  }
  .print .component-wrapper.checkbox-component-wrapper {
    margin-left: -18px;
  }
  .print .component-wrapper.chips-component-wrapper-1 {
    margin: 12px 0 92px -8px;
  }
  .print .select-component {
    margin: 0 20px 40px 20px;
  }
  .print .column-2 {
    transform: translate(-16px);
  }
  .print .card-component-wrapper {
    margin: 16px 0 38px;
  }
  .print .component-wrapper.text-field-component-wrapper-1 {
    margin: 22px 0 90px;
  }
  .print .dialog-component-wrapper {
    margin: 8px 0 52px;
  }
  .print .linear-progress-section {
    margin-top: -8px;
  }
  .print .tabs-section {
    margin-top: -16px;
  }
  .print .radio-row {
    margin-top: -24px;
    margin-bottom: -16px;
  }
  .print .snackbar-section {
    margin-top: -16px;
  }
  .print .image-section {
    margin-top: -4px;
  }
  .print .switch-section {
    margin-top: 0;
  }
  .print .short-app-bar-section,
  .print .menu-section {
    margin-top: 0px;
  }
  .print .switch-checkbox-row {
    margin-bottom: 16px;
  }
  .print .list-section {
    margin-top: 8px;
  }
  .print .dialog-component-section {
    margin-bottom: 52px;
    margin-top: -16px;
  }
  .print .chips-section {
    margin: 16px 20px -32px 20px;
  }
  .print .image-list-section {
    transform: translateY(-8px);
  }

  .typography-callout {
    font-size: 12px;
    padding: 16px;
  }

  .font-link {
    font-size: 12px;
    margin-top: 8px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: -16px;
  }

  .font-link i {
    font-size: 16px;
    margin-left: 8px;
  }

  .theme-shape .varValue {
    display: block;
  }

  .varValue {
    font-weight: 600;
  }

  .mdc-checkbox,
  .mdc-radio {
    margin-right: 4px;
  }

  .component-wrapper .mdc-top-app-bar {
    position: relative;
    z-index: 1;
  }
  .component-wrapper .mdc-top-app-bar:not(.mdc-top-app-bar--short) {
    width: 100%;
  }

  .mdc-card {
    width: 100%;
  }
  .mdc-card .demo-card__primary {
    padding: 1rem;
  }
  .mdc-card .demo-card__title,
  .mdc-card .demo-card__subtitle {
    margin: 0;
  }
  .mdc-card .demo-card__secondary {
    padding: 0 1rem 8px;
    opacity: 0.87;
  }

  .mdc-linear-progress {
    width: 100%;
  }

  .mdc-menu-surface--anchor > .mdc-menu {
    position: relative;
    z-index: 1;
  }

  .mdc-select {
    width: 160px;
  }

  .drawer-component-wrapper {
    background: rgba(0, 0, 0, 0.3);
  }
  .drawer-component-wrapper .mdc-drawer .mdc-drawer__content {
    padding: 0;
  }

  .mdc-text-field {
    width: 100%;
  }

  .mdc-snackbar {
    position: relative;
    margin: 0;
    justify-content: start;
    z-index: 1;
  }

  .mdc-dialog {
    position: relative;
    justify-content: start;
    z-index: 1;
  }
  .mdc-dialog .mdc-dialog__surface {
    max-width: 100%;
  }

  .mdc-image-list {
    max-width: 400px;
    max-height: 600px;
    margin: 0;
  }

  .component-wrapper.button-component-wrapper,
  .component-wrapper.fab-component-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>

<!-- Required styles for Material Web -->
<div class="mdc-typography">
  <div class="mdc-drawer-app-content">
    <main class="main-content">
      <div class="theme-builder-desc-banner mdc-typography--caption">
        An HTML rendering of MDC styled Components themed with Covalent
      </div>

      <!-- <button onclick=" window.open('https://glitch.com/edit/#!/remix/material-theme-builder','_blank')" class="mdc-fab mdc-fab--extended remix-fab" >
                <span class="material-icons mdc-fab__icon">photo_filter</span>
                <span class="mdc-fab__label">Create a new Theme</span>
        </button> -->
      <div class="column">
        <!-- Button -->
        <section class="component-section">
          <div class="section-header">
            <a
              href="https://material.io/design/components/buttons.html"
              class="mdc-typography--button"
              target="_blank"
            >
              Button
              <i class="material-icons">open_in_new</i>
            </a>
          </div>
          <div class="component-wrapper button-component-wrapper">
            <button class="mdc-button mdc-button--raised">
              <span class="mdc-button__ripple"></span>
              Button
            </button>
            <button class="mdc-button">
              <span class="mdc-button__ripple"></span>
              Button
            </button>
            <button class="mdc-button mdc-button--outlined">
              <span class="mdc-button__ripple"></span>
              Button
            </button>
          </div>
        </section>

        <!-- Top app bar -->
        <section class="component-section">
          <div class="section-header">
            <a
              href="https://material.io/design/components/app-bars-top.html"
              class="mdc-typography--button"
              target="_blank"
            >
              Top App Bar
              <i class="material-icons">open_in_new</i>
            </a>
          </div>
          <div class="component-wrapper top-bar-component-wrapper">
            <header class="mdc-top-app-bar mdc-top-app-bar--fixed">
              <div class="mdc-top-app-bar__row">
                <section
                  class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start"
                >
                  <a class="material-icons mdc-top-app-bar__navigation-icon"
                    >menu</a
                  >
                  <span class="mdc-top-app-bar__title">Headline 6</span>
                </section>
                <section
                  class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"
                  role="toolbar"
                >
                  <a
                    class="material-icons mdc-icon-button mdc-top-app-bar__action-item"
                    aria-label="Share"
                    alt="Share"
                    >share</a
                  >
                  <a
                    class="material-icons mdc-icon-button mdc-top-app-bar__action-item"
                    aria-label="Bookmark this page"
                    alt="Bookmark this page"
                    >bookmark</a
                  >
                  <a
                    class="material-icons mdc-icon-button mdc-top-app-bar__action-item"
                    aria-label="Search this page"
                    alt="Search this page"
                    >search</a
                  >
                </section>
              </div>
            </header>
          </div>
        </section>

        <!-- Drawer -->
        <section class="component-section">
          <div class="section-header">
            <a
              href="https://material.io/design/components/navigation-drawer.html"
              class="mdc-typography--button"
              target="_blank"
            >
              Drawer
              <i class="material-icons">open_in_new</i>
            </a>
          </div>
          <div class="component-wrapper drawer-component-wrapper">
            <aside class="mdc-drawer">
              <div class="mdc-drawer__header">
                <h3 class="mdc-drawer__title">Headline 6</h3>
                <h6 class="mdc-drawer__subtitle">Body 2</h6>
              </div>
              <div class="mdc-list-divider"></div>
              <div class="mdc-drawer__content">
                <nav class="mdc-list" role="listbox">
                  <a
                    class="mdc-list-item mdc-list-item--activated"
                    aria-selected="true"
                  >
                    <i
                      class="material-icons mdc-deprecated-list-item__graphic"
                      aria-hidden="true"
                      >inbox</i
                    >
                    <span class="mdc-list-item__ripple"></span>
                    <span class="mdc-list-item__text">Body 2</span>
                  </a>
                  <a class="mdc-list-item">
                    <i
                      class="material-icons mdc-deprecated-list-item__graphic"
                      aria-hidden="true"
                      >star</i
                    >
                    <span class="mdc-list-item__ripple"></span>
                    <span class="mdc-list-item__text">Body 2</span>
                  </a>
                  <a class="mdc-list-item">
                    <i
                      class="material-icons mdc-deprecated-list-item__graphic"
                      aria-hidden="true"
                      >bookmark</i
                    >
                    <span class="mdc-list-item__ripple"></span>
                    <span class="mdc-list-item__text">Body 2</span>
                  </a>
                  <a class="mdc-list-item">
                    <i
                      class="material-icons mdc-deprecated-list-item__graphic"
                      aria-hidden="true"
                      >send</i
                    >
                    <span class="mdc-list-item__ripple"></span>
                    <span class="mdc-list-item__text">Body 2</span>
                  </a>
                  <a class="mdc-list-item">
                    <i
                      class="material-icons mdc-deprecated-list-item__graphic"
                      aria-hidden="true"
                      >drafts</i
                    >
                    <span class="mdc-list-item__ripple"></span>
                    <span class="mdc-list-item__text">Body 2</span>
                  </a>
                </nav>
              </div>
            </aside>
          </div>
        </section>

        <div class="component-section-row">
          <!-- Short top app bar -->
          <section class="component-section short-app-bar-section">
            <div class="section-header">
              <a
                href="https://material.io/design/components/app-bars-top.html"
                class="mdc-typography--button"
                target="_blank"
              >
                Short App Bar
                <i class="material-icons">open_in_new</i>
              </a>
            </div>
            <div class="component-wrapper">
              <header
                class="mdc-top-app-bar mdc-top-app-bar--short mdc-top-app-bar--short-collapsed"
              >
                <div class="mdc-top-app-bar__row">
                  <section
                    class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start"
                  >
                    <a
                      class="material-icons mdc-icon-button mdc-top-app-bar__navigation-icon"
                      >menu</a
                    >
                  </section>
                  <section
                    class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"
                    role="toolbar"
                  >
                    <a
                      class="material-icons mdc-icon-button mdc-top-app-bar__action-item"
                      aria-label="Open shopping cart"
                      alt="Open shopping cart"
                      >shopping_cart</a
                    >
                  </section>
                </div>
              </header>
            </div>
          </section>

          <!-- Menu -->
          <section class="component-section menu-section">
            <div class="section-header">
              <a
                href="https://material.io/design/components/menus.html"
                class="mdc-typography--button"
                target="_blank"
              >
                Menu
                <i class="material-icons">open_in_new</i>
              </a>
            </div>
            <div class="component-wrapper">
              <div class="mdc-menu-surface--anchor">
                <div class="mdc-menu mdc-menu-surface mdc-menu-surface--open">
                  <ul
                    class="mdc-list"
                    role="menu"
                    aria-hidden="true"
                    aria-orientation="vertical"
                    tabindex="-1"
                  >
                    <li class="mdc-list-item" role="menuitem">
                      <span class="mdc-list-item__ripple"></span>
                      <span class="mdc-list-item__text">A Menu Item</span>
                    </li>
                    <li class="mdc-list-item" role="menuitem">
                      <span class="mdc-list-item__ripple"></span>
                      <span class="mdc-list-item__text">Another Menu Item</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- Linear progress -->
        <section class="component-section linear-progress-section">
          <div class="section-header">
            <a
              href="https://material.io/design/components/progress-indicators.html#linear-progress-indicators"
              class="mdc-typography--button"
              target="_blank"
            >
              Linear Progress
              <i class="material-icons">open_in_new</i>
            </a>
          </div>
          <div class="component-wrapper linear-progress-component-wrapper">
            <div
              role="progressbar"
              class="mdc-linear-progress mdc-linear-progress--indeterminate"
            >
              <div class="mdc-linear-progress__buffering-dots"></div>
              <div class="mdc-linear-progress__buffer"></div>
              <div
                class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
              >
                <span class="mdc-linear-progress__bar-inner"></span>
              </div>
              <div
                class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"
              >
                <span class="mdc-linear-progress__bar-inner"></span>
              </div>
            </div>
          </div>
        </section>

        <div class="component-section-row switch-checkbox-row">
          <!-- Switch -->
          <section class="component-section switch-section">
            <div class="section-header">
              <a
                href="https://material.io/design/components/selection-controls.html#switches"
                class="mdc-typography--button"
                target="_blank"
              >
                Switch
                <i class="material-icons">open_in_new</i>
              </a>
            </div>
            <div class="component-wrapper switch-component-wrapper">
              <button
                id="basic-switch"
                class="mdc-switch mdc-switch--unselected"
                type="button"
                role="switch"
                aria-checked="false"
              >
                <div class="mdc-switch__track"></div>
                <div class="mdc-switch__handle-track">
                  <div class="mdc-switch__handle">
                    <div class="mdc-switch__shadow">
                      <div class="mdc-elevation-overlay"></div>
                    </div>
                    <div class="mdc-switch__ripple"></div>
                    <div class="mdc-switch__icons">
                      <svg
                        class="mdc-switch__icon mdc-switch__icon--on"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"
                        />
                      </svg>
                      <svg
                        class="mdc-switch__icon mdc-switch__icon--off"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 13H4v-2h16v2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
              <label for="basic-switch">off/on</label>
            </div>
          </section>

          <!-- Checkbox -->
          <section class="component-section">
            <div class="section-header">
              <a
                href="https://material.io/design/components/selection-controls.html#checkboxes"
                class="mdc-typography--button"
                target="_blank"
              >
                Checkbox
                <i class="material-icons">open_in_new</i>
              </a>
            </div>
            <div class="component-wrapper checkbox-component-wrapper">
              <div class="mdc-checkbox">
                <input type="checkbox" class="mdc-checkbox__native-control" />
                <div class="mdc-checkbox__background">
                  <svg class="mdc-checkbox__checkmark" viewbox="0 0 24 24">
                    <path
                      class="mdc-checkbox__checkmark-path"
                      fill="none"
                      d="M1.73,12.91 8.1,19.28 22.79,4.59"
                    />
                  </svg>
                  <div class="mdc-checkbox__mixedmark"></div>
                </div>
              </div>
              <div class="mdc-checkbox indeterminate-checkbox">
                <input type="checkbox" class="mdc-checkbox__native-control" />
                <div class="mdc-checkbox__background">
                  <svg class="mdc-checkbox__checkmark" viewbox="0 0 24 24">
                    <path
                      class="mdc-checkbox__checkmark-path"
                      fill="none"
                      d="M1.73,12.91 8.1,19.28 22.79,4.59"
                    />
                  </svg>
                  <div class="mdc-checkbox__mixedmark"></div>
                </div>
              </div>
              <div class="mdc-checkbox">
                <input
                  type="checkbox"
                  class="mdc-checkbox__native-control"
                  checked
                />
                <div class="mdc-checkbox__background">
                  <svg class="mdc-checkbox__checkmark" viewbox="0 0 24 24">
                    <path
                      class="mdc-checkbox__checkmark-path"
                      fill="none"
                      d="M1.73,12.91 8.1,19.28 22.79,4.59"
                    />
                  </svg>
                  <div class="mdc-checkbox__mixedmark"></div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div class="component-section-row radio-row">
          <!-- Radio -->
          <section class="component-section">
            <div class="section-header">
              <a
                href="https://material.io/design/components/selection-controls.html#radio-buttons"
                class="mdc-typography--button"
                target="_blank"
              >
                Radio Button
                <i class="material-icons">open_in_new</i>
              </a>
            </div>
            <div class="component-wrapper radio-component-wrapper">
              <div class="mdc-radio">
                <input
                  class="mdc-radio__native-control"
                  type="radio"
                  id="radio-1"
                  name="radios"
                  checked
                />
                <div class="mdc-radio__background">
                  <div class="mdc-radio__outer-circle"></div>
                  <div class="mdc-radio__inner-circle"></div>
                </div>
              </div>
              <div class="mdc-radio">
                <input
                  class="mdc-radio__native-control"
                  type="radio"
                  id="radio-2"
                  name="radios"
                  checked
                />
                <div class="mdc-radio__background">
                  <div class="mdc-radio__outer-circle"></div>
                  <div class="mdc-radio__inner-circle"></div>
                </div>
              </div>
            </div>
          </section>

          <!-- Icon button -->
          <section class="component-section">
            <div class="section-header">
              <a
                href="https://material.io/design/components/buttons.html#toggle-button"
                class="mdc-typography--button"
                target="_blank"
              >
                Icon Button
                <i class="material-icons">open_in_new</i>
              </a>
            </div>
            <div class="component-wrapper icon-button-component-wrapper">
              <button
                id="icon-toggle-button"
                class="mdc-icon-button"
                aria-label="Add to favorites"
                aria-pressed="false"
              >
                <div class="mdc-icon-button__ripple"></div>
                <i
                  class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on"
                  >music_off</i
                >
                <i class="material-icons mdc-icon-button__icon">music_note</i>
              </button>
            </div>
          </section>
        </div>

        <!-- Chips -->
        <section class="component-section">
          <div class="section-header">
            <a
              href="https://material.io/design/components/chips.html"
              class="mdc-typography--button"
              target="_blank"
            >
              Chips
              <i class="material-icons">open_in_new</i>
            </a>
          </div>
          <div
            class="component-wrapper chips-component-wrapper chips-component-wrapper-1"
          >
            <span
              class="mdc-evolution-chip-set"
              role="listbox"
              aria-orientation="horizontal"
              aria-multiselectable="true"
            >
              <span class="mdc-evolution-chip-set__chips" role="presentation">
                <span class="mdc-evolution-chip" role="row" id="c1">
                  <span
                    class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary"
                    role="gridcell"
                  >
                    <button
                      class="mdc-evolution-chip__action mdc-evolution-chip__action--primary"
                      type="button"
                      tabindex="-1"
                    >
                      <span
                        class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"
                      ></span>
                      <span class="mdc-evolution-chip__text-label"
                        >Regular chip</span
                      >
                    </button>
                  </span>
                </span>
                <span
                  class="mdc-evolution-chip mdc-evolution-chip--with-trailing-action"
                  role="row"
                  id="c2"
                  data-mdc-deletable="true"
                >
                  <span
                    class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary"
                    role="gridcell"
                  >
                    <button
                      class="mdc-evolution-chip__action mdc-evolution-chip__action--primary"
                      type="button"
                      tabindex="0"
                    >
                      <span
                        class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"
                      ></span>
                      <span class="mdc-evolution-chip__text-label"
                        >Trialing chip</span
                      >
                    </button>
                  </span>
                  <span
                    class="mdc-evolution-chip__cell mdc-evolution-chip__cell--trailing"
                    role="gridcell"
                  >
                    <button
                      class="mdc-evolution-chip__action mdc-evolution-chip__action--trailing"
                      type="button"
                      tabindex="-1"
                      aria-label="Remove chip foo"
                    >
                      <span
                        class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--trailing"
                      ></span>
                      <span
                        class="mdc-evolution-chip__icon material-icons mdc-evolution-chip__icon--trailing"
                        >close</span
                      >
                    </button>
                  </span>
                </span>

                <span
                  class="mdc-evolution-chip mdc-evolution-chip--with-primary-graphic mdc-evolution-chip--with-primary-icon"
                  role="row"
                  id="c0"
                >
                  <span
                    class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary"
                    role="gridcell"
                  >
                    <button
                      class="mdc-evolution-chip__action mdc-evolution-chip__action--primary"
                      type="button"
                      tabindex="0"
                    >
                      <span
                        class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"
                      ></span>
                      <span class="mdc-evolution-chip__graphic">
                        <span
                          class="mdc-evolution-chip__icon mdc-evolution-chip__icon--primary material-icons"
                          >favorite</span
                        >
                      </span>
                      <span class="mdc-evolution-chip__text-label"
                        >Leading chip</span
                      >
                    </button>
                  </span>
                </span>

                <span
                  class="mdc-evolution-chip mdc-evolution-chip--with-primary-graphic mdc-evolution-chip--with-primary-icon mdc-evolution-chip--with-avatar"
                  role="row"
                  id="c0"
                >
                  <span
                    class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary"
                    role="gridcell"
                  >
                    <button
                      class="mdc-evolution-chip__action mdc-evolution-chip__action--primary"
                      type="button"
                      tabindex="0"
                    >
                      <span
                        class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"
                      ></span>
                      <span class="mdc-evolution-chip__graphic">
                        <span
                          class="mdc-evolution-chip__icon mdc-evolution-chip__icon--primary material-icons"
                          style="background: rgba(0, 0, 0, 0.3)"
                          >person</span
                        >
                      </span>
                      <span class="mdc-evolution-chip__text-label"
                        >Avatar chip</span
                      >
                    </button>
                  </span>
                </span>

                <span
                  class="mdc-evolution-chip mdc-evolution-chip--disabled"
                  role="row"
                  id="c1"
                >
                  <span
                    class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary"
                    role="gridcell"
                  >
                    <button
                      class="mdc-evolution-chip__action mdc-evolution-chip__action--primary"
                      type="button"
                      tabindex="-1"
                      disabled
                    >
                      <span
                        class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"
                      ></span>
                      <span class="mdc-evolution-chip__text-label"
                        >Disabled chip</span
                      >
                    </button>
                  </span>
                </span>

                <span
                  class="mdc-evolution-chip mdc-evolution-chip--filter mdc-evolution-chip--with-primary-graphic mdc-evolution-chip--selectable"
                  role="presentation"
                  id="c5"
                >
                  <span
                    class="mdc-evolution-chip__action mdc-evolution-chip__action--primary"
                    role="option"
                    aria-selected="false"
                    tabindex="0"
                  >
                    <span
                      class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"
                    ></span>
                    <span class="mdc-evolution-chip__graphic">
                      <span class="mdc-evolution-chip__checkmark">
                        <svg
                          class="mdc-evolution-chip__checkmark-svg"
                          viewBox="-2 -3 30 30"
                        >
                          <path
                            class="mdc-evolution-chip__checkmark-path"
                            fill="none"
                            stroke="black"
                            d="M1.73,12.91 8.1,19.28 22.79,4.59"
                          />
                        </svg>
                      </span>
                    </span>
                    <span class="mdc-evolution-chip__text-label"
                      >Filter chip</span
                    >
                  </span>
                </span>

                <span
                  class="mdc-evolution-chip mdc-evolution-chip--filter mdc-evolution-chip--with-primary-graphic mdc-evolution-chip--selectable"
                  role="presentation"
                  id="c6"
                >
                  <span
                    class="mdc-evolution-chip__action mdc-evolution-chip__action--primary"
                    role="option"
                    aria-selected="false"
                    tabindex="0"
                    data-mdc-deletable="true"
                  >
                    <span
                      class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"
                    ></span>
                    <span class="mdc-evolution-chip__graphic">
                      <span class="mdc-evolution-chip__checkmark">
                        <svg
                          class="mdc-evolution-chip__checkmark-svg"
                          viewBox="-2 -3 30 30"
                        >
                          <path
                            class="mdc-evolution-chip__checkmark-path"
                            fill="none"
                            stroke="black"
                            d="M1.73,12.91 8.1,19.28 22.79,4.59"
                          />
                        </svg>
                      </span>
                    </span>
                    <span class="mdc-evolution-chip__text-label"
                      >Filter chip</span
                    >
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div
            class="component-wrapper chips-component-wrapper chips-component-wrapper-2"
          >
            <span
              class="mdc-evolution-chip-set"
              role="listbox"
              aria-orientation="horizontal"
              aria-multiselectable="false"
            >
              <span class="mdc-evolution-chip-set__chips" role="presentation">
                <span
                  class="mdc-evolution-chip mdc-evolution-chip--filter mdc-evolution-chip--with-primary-graphic mdc-evolution-chip--selectable mdc-evolution-chip--selected"
                  role="presentation"
                  id="c20"
                >
                  <span
                    class="mdc-evolution-chip__action mdc-evolution-chip__action--primary"
                    role="option"
                    aria-selected="false"
                    tabindex="0"
                  >
                    <span
                      class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"
                    ></span>
                    <span class="mdc-evolution-chip__graphic">
                      <span class="mdc-evolution-chip__checkmark">
                        <svg
                          class="mdc-evolution-chip__checkmark-svg"
                          viewBox="-2 -3 30 30"
                        >
                          <path
                            class="mdc-evolution-chip__checkmark-path"
                            fill="none"
                            stroke="black"
                            d="M1.73,12.91 8.1,19.28 22.79,4.59"
                          />
                        </svg>
                      </span>
                    </span>
                    <span class="mdc-evolution-chip__text-label"
                      >Filter chip</span
                    >
                  </span>
                </span>

                <span
                  class="mdc-evolution-chip mdc-evolution-chip--filter mdc-evolution-chip--with-primary-graphic mdc-evolution-chip--selectable"
                  role="presentation"
                  id="c21"
                >
                  <span
                    class="mdc-evolution-chip__action mdc-evolution-chip__action--primary"
                    role="option"
                    aria-selected="false"
                    tabindex="0"
                    data-mdc-deletable="true"
                  >
                    <span
                      class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"
                    ></span>
                    <span class="mdc-evolution-chip__graphic">
                      <span class="mdc-evolution-chip__checkmark">
                        <svg
                          class="mdc-evolution-chip__checkmark-svg"
                          viewBox="-2 -3 30 30"
                        >
                          <path
                            class="mdc-evolution-chip__checkmark-path"
                            fill="none"
                            stroke="black"
                            d="M1.73,12.91 8.1,19.28 22.79,4.59"
                          />
                        </svg>
                      </span>
                    </span>
                    <span class="mdc-evolution-chip__text-label"
                      >Filter chip</span
                    >
                  </span>
                </span>
              </span>
            </span>
          </div>
        </section>

        <div class="component-section-row">
          <!-- Select -->
          <section class="component-section select-component">
            <div class="section-header">
              <a
                href="https://material.io/develop/web/components/input-controls/select-menus/"
                class="mdc-typography--button"
                target="_blank"
              >
                Select
                <i class="material-icons">open_in_new</i>
              </a>
            </div>
            <div class="component-wrapper">
              <div class="mdc-select mdc-select--filled demo-width-class">
                <div
                  class="mdc-select__anchor"
                  role="button"
                  aria-haspopup="listbox"
                  aria-expanded="false"
                  aria-labelledby="demo-label demo-selected-text"
                >
                  <span class="mdc-select__ripple"></span>
                  <span id="demo-label" class="mdc-floating-label"
                    >Pick a Food Group</span
                  >
                  <span class="mdc-select__selected-text-container">
                    <span
                      id="demo-selected-text"
                      class="mdc-select__selected-text"
                    ></span>
                  </span>
                  <span class="mdc-select__dropdown-icon">
                    <svg
                      class="mdc-select__dropdown-icon-graphic"
                      viewBox="7 10 10 5"
                      focusable="false"
                    >
                      <polygon
                        class="mdc-select__dropdown-icon-inactive"
                        stroke="none"
                        fill-rule="evenodd"
                        points="7 10 12 15 17 10"
                      ></polygon>
                      <polygon
                        class="mdc-select__dropdown-icon-active"
                        stroke="none"
                        fill-rule="evenodd"
                        points="7 15 12 10 17 15"
                      ></polygon>
                    </svg>
                  </span>
                  <span class="mdc-line-ripple"></span>
                </div>

                <div
                  class="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth"
                >
                  <ul
                    class="mdc-deprecated-list"
                    role="listbox"
                    aria-label="Food picker listbox"
                  >
                    <li
                      class="mdc-deprecated-list-item mdc-deprecated-list-item--selected"
                      aria-selected="true"
                      data-value=""
                      role="option"
                    >
                      <span class="mdc-deprecated-list-item__ripple"></span>
                    </li>
                    <li
                      class="mdc-deprecated-list-item"
                      aria-selected="false"
                      data-value="grains"
                      role="option"
                    >
                      <span class="mdc-deprecated-list-item__ripple"></span>
                      <span class="mdc-deprecated-list-item__text">
                        Bread, Cereal, Rice, and Pasta
                      </span>
                    </li>
                    <li
                      class="mdc-deprecated-list-item mdc-deprecated-list-item--disabled"
                      aria-selected="false"
                      data-value="vegetables"
                      aria-disabled="true"
                      role="option"
                    >
                      <span class="mdc-deprecated-list-item__ripple"></span>
                      <span class="mdc-deprecated-list-item__text">
                        Vegetables
                      </span>
                    </li>
                    <li
                      class="mdc-deprecated-list-item"
                      aria-selected="false"
                      data-value="fruit"
                      role="option"
                    >
                      <span class="mdc-deprecated-list-item__ripple"></span>
                      <span class="mdc-deprecated-list-item__text">
                        Fruit
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <!-- Select -->
          <section class="component-section select-component">
            <div class="section-header"><!-- Hold space for layout --></div>
            <div class="component-wrapper">
              <div class="mdc-select mdc-select--outlined">
                <div
                  class="mdc-select__anchor"
                  aria-labelledby="outlined-select-label"
                >
                  <span class="mdc-notched-outline">
                    <span class="mdc-notched-outline__leading"></span>
                    <span class="mdc-notched-outline__notch">
                      <span
                        id="outlined-select-label"
                        class="mdc-floating-label"
                        >Pick a Food Group</span
                      >
                    </span>
                    <span class="mdc-notched-outline__trailing"></span>
                  </span>
                  <span class="mdc-select__selected-text-container">
                    <span
                      id="demo-selected-text"
                      class="mdc-select__selected-text"
                    ></span>
                  </span>
                  <span class="mdc-select__dropdown-icon">
                    <svg
                      class="mdc-select__dropdown-icon-graphic"
                      viewBox="7 10 10 5"
                      focusable="false"
                    >
                      <polygon
                        class="mdc-select__dropdown-icon-inactive"
                        stroke="none"
                        fill-rule="evenodd"
                        points="7 10 12 15 17 10"
                      ></polygon>
                      <polygon
                        class="mdc-select__dropdown-icon-active"
                        stroke="none"
                        fill-rule="evenodd"
                        points="7 15 12 10 17 15"
                      ></polygon>
                    </svg>
                  </span>
                  <div
                    class="mdc-select__menu mdc-menu mdc-menu-surface"
                    role="listbox"
                  >
                    <ul class="mdc-list">
                      <li
                        class="mdc-list-item"
                        data-value=""
                        role="option"
                      ></li>
                      <li
                        class="mdc-list-item"
                        data-value="outlined-item1"
                        role="option"
                      >
                        Body 2
                      </li>
                      <li
                        class="mdc-list-item"
                        data-value="outlined-item2"
                        aria-selected="true"
                        role="option"
                      >
                        Body 2
                      </li>
                      <li
                        class="mdc-list-item"
                        data-value="outlined-item3"
                        role="option"
                      >
                        Body 2
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Other elements from the select remain. -->
                <div
                  class="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth"
                >
                  ...
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- List -->
        <section class="component-section list-section">
          <div class="section-header">
            <a
              href="https://material.io/design/components/lists.html"
              class="mdc-typography--button"
              target="_blank"
            >
              List
              <i class="material-icons">open_in_new</i>
            </a>
          </div>
          <div class="component-wrapper">
            <ul class="mdc-list">
              <li class="mdc-list-item" tabindex="0">
                <span class="mdc-list-item__ripple"></span>
                <span class="mdc-list-item__text">Single-line item</span>
              </li>
              <li class="mdc-list-item">
                <span class="mdc-list-item__ripple"></span>
                <span class="mdc-list-item__text">Single-line item</span>
              </li>
              <li class="mdc-list-item">
                <span class="mdc-list-item__ripple"></span>
                <span class="mdc-list-item__text">Single-line item</span>
              </li>
            </ul>

            <ul class="mdc-list mdc-list--two-line mdc-list--avatar-list">
              <li class="mdc-list-item" tabindex="0">
                <span class="mdc-list-item__ripple"></span>
                <span
                  class="mdc-deprecated-list-item__graphic material-icons"
                  aria-hidden="true"
                  >child_care</span
                >
                <span class="mdc-list-item__text">
                  <span class="mdc-list-item__primary-text">Two-line item</span>
                  <span class="mdc-list-item__secondary-text"
                    >Secondary text</span
                  >
                </span>
              </li>
              <li role="separator" class="mdc-list-divider"></li>
              <li class="mdc-list-item">
                <span class="mdc-list-item__ripple"></span>
                <span
                  class="mdc-deprecated-list-item__graphic material-icons"
                  aria-hidden="true"
                  >child_care</span
                >
                <span class="mdc-list-item__text">
                  <span class="mdc-list-item__primary-text">Two-line item</span>
                  <span class="mdc-list-item__secondary-text"
                    >Secondary text</span
                  >
                </span>
              </li>
              <li role="separator" class="mdc-list-divider"></li>
              <li class="mdc-list-item">
                <span class="mdc-list-item__ripple"></span>
                <span
                  class="mdc-deprecated-list-item__graphic material-icons"
                  aria-hidden="true"
                  >child_care</span
                >
                <span class="mdc-list-item__text">
                  <span class="mdc-list-item__primary-text">Two-line item</span>
                  <span class="mdc-list-item__secondary-text"
                    >Secondary text</span
                  >
                </span>
              </li>
            </ul>
          </div>
        </section>

        <!-- Deprecated List -->
        <section class="component-section list-section">
          <div class="section-header">
            <a
              href="https://material.io/design/components/lists.html"
              class="mdc-typography--button"
              target="_blank"
            >
              List (Deprecated)
              <i class="material-icons">open_in_new</i>
            </a>
          </div>
          <div class="component-wrapper">
            <ul class="mdc-deprecated-list">
              <li class="mdc-deprecated-list-item" tabindex="0">
                <span class="mdc-deprecated-list-item__ripple"></span>
                <span class="mdc-deprecated-list-item__text"
                  >Single-line item</span
                >
              </li>
              <li class="mdc-deprecated-list-item">
                <span class="mdc-deprecated-list-item__ripple"></span>
                <span class="mdc-deprecated-list-item__text"
                  >Single-line item</span
                >
              </li>
              <li class="mdc-deprecated-list-item">
                <span class="mdc-deprecated-list-item__ripple"></span>
                <span class="mdc-deprecated-list-item__text"
                  >Single-line item</span
                >
              </li>
            </ul>

            <ul
              class="mdc-deprecated-list mdc-deprecated-list--two-line mdc-deprecated-list--avatar-list"
            >
              <li class="mdc-deprecated-list-item" tabindex="0">
                <span class="mdc-deprecated-list-item__ripple"></span>
                <span
                  class="mdc-deprecated-list-item__graphic material-icons"
                  aria-hidden="true"
                  >child_care</span
                >
                <span class="mdc-deprecated-list-item__text">
                  <span class="mdc-deprecated-list-item__primary-text"
                    >Two-line item</span
                  >
                  <span class="mdc-deprecated-list-item__secondary-text"
                    >Secondary text</span
                  >
                </span>
              </li>
              <li role="separator" class="mdc-deprecated-list-divider"></li>
              <li class="mdc-deprecated-list-item">
                <span class="mdc-deprecated-list-item__ripple"></span>
                <span
                  class="mdc-deprecated-list-item__graphic material-icons"
                  aria-hidden="true"
                  >child_care</span
                >
                <span class="mdc-deprecated-list-item__text">
                  <span class="mdc-deprecated-list-item__primary-text"
                    >Two-line item</span
                  >
                  <span class="mdc-deprecated-list-item__secondary-text"
                    >Secondary text</span
                  >
                </span>
              </li>
              <li role="separator" class="mdc-deprecated-list-divider"></li>
              <li class="mdc-deprecated-list-item">
                <span class="mdc-deprecated-list-item__ripple"></span>
                <span
                  class="mdc-deprecated-list-item__graphic material-icons"
                  aria-hidden="true"
                  >child_care</span
                >
                <span class="mdc-deprecated-list-item__text">
                  <span class="mdc-deprecated-list-item__primary-text"
                    >Two-line item</span
                  >
                  <span class="mdc-deprecated-list-item__secondary-text"
                    >Secondary text</span
                  >
                </span>
              </li>
            </ul>
          </div>
        </section>

        <!-- Data Table -->
        <section class="component-section data-table-section">
          <div class="section-header">
            <a
              href="https://material.io/design/components/data-tables.html"
              class="mdc-typography--button"
              target="_blank"
            >
              Data Table
              <i class="material-icons">open_in_new</i>
            </a>
          </div>
          <div class="component-wrapper">
            <div class="mdc-data-table">
              <table
                class="mdc-data-table__table"
                aria-label="Dessert calories"
              >
                <thead>
                  <tr class="mdc-data-table__header-row">
                    <th
                      class="mdc-data-table__header-cell mdc-data-table__header-cell--checkbox"
                      role="columnheader"
                      scope="col"
                    >
                      <div
                        class="mdc-checkbox mdc-checkbox--selected mdc-data-table__header-row-checkbox"
                      >
                        <input
                          type="checkbox"
                          class="mdc-checkbox__native-control"
                          aria-label="Toggle all rows"
                        />
                        <div class="mdc-checkbox__background">
                          <svg
                            class="mdc-checkbox__checkmark"
                            viewbox="0 0 24 24"
                          >
                            <path
                              class="mdc-checkbox__checkmark-path"
                              fill="none"
                              d="M1.73,12.91 8.1,19.28 22.79,4.59"
                            />
                          </svg>
                          <div class="mdc-checkbox__mixedmark"></div>
                        </div>
                      </div>
                    </th>
                    <th
                      class="mdc-data-table__header-cell"
                      role="columnheader"
                      scope="col"
                    >
                      Dessert
                    </th>
                    <th
                      class="mdc-data-table__header-cell"
                      role="columnheader"
                      scope="col"
                    >
                      Carbs (g)
                    </th>
                    <th
                      class="mdc-data-table__header-cell"
                      role="columnheader"
                      scope="col"
                    >
                      Protein (g)
                    </th>
                  </tr>
                </thead>
                <tbody class="mdc-data-table__content">
                  <tr class="mdc-data-table__row" data-row-id="u0">
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--checkbox"
                    >
                      <div class="mdc-checkbox mdc-data-table__row-checkbox">
                        <input
                          type="checkbox"
                          class="mdc-checkbox__native-control"
                          aria-labelledby="r0"
                        />
                        <div class="mdc-checkbox__background">
                          <svg
                            class="mdc-checkbox__checkmark"
                            viewbox="0 0 24 24"
                          >
                            <path
                              class="mdc-checkbox__checkmark-path"
                              fill="none"
                              d="M1.73,12.91 8.1,19.28 22.79,4.59"
                            />
                          </svg>
                          <div class="mdc-checkbox__mixedmark"></div>
                        </div>
                      </div>
                    </td>
                    <td class="mdc-data-table__cell" id="r0">Froyo</td>
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      24
                    </td>
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      4.0
                    </td>
                  </tr>
                  <tr
                    class="mdc-data-table__row mdc-data-table__row--selected"
                    aria-selected="true"
                    data-row-id="u1"
                  >
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--checkbox"
                    >
                      <div
                        class="mdc-checkbox mdc-checkbox--selected mdc-data-table__row-checkbox"
                      >
                        <input
                          type="checkbox"
                          class="mdc-checkbox__native-control"
                          checked
                          aria-labelledby="r1"
                        />
                        <div class="mdc-checkbox__background">
                          <svg
                            class="mdc-checkbox__checkmark"
                            viewbox="0 0 24 24"
                          >
                            <path
                              class="mdc-checkbox__checkmark-path"
                              fill="none"
                              d="M1.73,12.91 8.1,19.28 22.79,4.59"
                            />
                          </svg>
                          <div class="mdc-checkbox__mixedmark"></div>
                        </div>
                      </div>
                    </td>
                    <td class="mdc-data-table__cell" id="r1">Eclair</td>
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      37
                    </td>
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      4.3
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
      <div class="column column-2">
        <!-- FAB -->
        <section class="component-section">
          <div class="section-header">
            <a
              href="https://material.io/design/components/buttons-floating-action-button.html"
              class="mdc-typography--button"
              target="_blank"
            >
              FAB
              <i class="material-icons">open_in_new</i>
            </a>
          </div>
          <div class="component-wrapper fab-component-wrapper">
            <button class="mdc-fab mdc-fab--extended">
              <span class="material-icons mdc-fab__icon">edit</span>
              <span class="mdc-fab__ripple"></span>
              <span class="mdc-fab__label">Button</span>
            </button>
            <button class="mdc-fab" aria-label="Favorite">
              <span class="mdc-fab__ripple"></span>
              <span class="mdc-fab__icon material-icons">favorite</span>
            </button>
            <button class="mdc-fab mdc-fab--mini" aria-label="Add">
              <span class="mdc-fab__ripple"></span>
              <span class="mdc-fab__icon material-icons">add</span>
            </button>
          </div>
        </section>

        <!-- Card -->
        <section class="component-section">
          <div class="section-header">
            <a
              href="https://material.io/design/components/cards.html"
              class="mdc-typography--button"
              target="_blank"
            >
              Card
              <i class="material-icons">open_in_new</i>
            </a>
          </div>
          <div class="component-wrapper card-component-wrapper">
            <div class="mdc-card demo-card">
              <div class="mdc-card__primary-action" tabindex="0">
                <div
                  class="mdc-card__media mdc-card__media--16-9 demo-card__media"
                  style="
                    background-image: url('https://cdn.glitch.com/9c389208-b279-4e96-bcbc-e5f8712d8706%2Fplaceholder-landscape-short.png?1553629848209');
                  "
                ></div>
                <div class="demo-card__primary">
                  <h3
                    class="demo-card__subtitle mdc-typography mdc-typography--overline"
                  >
                    Overline
                  </h3>
                  <h2
                    class="demo-card__title mdc-typography mdc-typography--headline6"
                  >
                    Headline 6
                  </h2>
                </div>
                <div
                  class="demo-card__secondary mdc-typography mdc-typography--body2"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
              <div class="mdc-card__actions">
                <div class="mdc-card__action-buttons">
                  <button
                    class="mdc-button mdc-card__action mdc-card__action--button"
                  >
                    <span class="mdc-button__ripple"></span>Button
                  </button>
                  <button
                    class="mdc-button mdc-card__action mdc-card__action--button"
                  >
                    <span class="mdc-button__ripple"></span>Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Text field -->
        <section class="component-section">
          <div class="section-header">
            <a
              href="https://material.io/design/components/text-fields.html"
              class="mdc-typography--button"
              target="_blank"
            >
              Text field
              <i class="material-icons">open_in_new</i>
            </a>
          </div>
          <div
            class="component-wrapper text-field-component-wrapper text-field-component-wrapper-1"
          >
            <label
              class="mdc-text-field mdc-text-field--outlined mdc-text-field--with-trialing-icon"
            >
              <span class="mdc-notched-outline">
                <span class="mdc-notched-outline__leading"></span>
                <span class="mdc-notched-outline__notch">
                  <span class="mdc-floating-label" id="my-label-id"
                    >Your Name</span
                  >
                </span>
                <span class="mdc-notched-outline__trailing"></span>
              </span>
              <input
                type="text"
                class="mdc-text-field__input"
                aria-labelledby="my-label-id"
              />
              <i
                class="material-icons mdc-text-field__icon mdc-text-field__icon--trailing"
                >visibility</i
              >
            </label>
            <div class="mdc-text-field-helper-line">
              <div
                class="mdc-text-field-helper-text mdc-text-field-helper-text--persistent"
              >
                Assistive text
              </div>
            </div>
          </div>
          <div
            class="component-wrapper text-field-component-wrapper text-field-component-wrapper-2"
          >
            <label
              class="mdc-text-field mdc-text-field--filled mdc-text-field--with-leading-icon"
            >
              <span class="mdc-text-field__ripple"></span>
              <span class="mdc-floating-label" id="my-label-id">Hint text</span>
              <i
                class="material-icons mdc-text-field__icon mdc-text-field__icon--leading"
                >visibility</i
              >
              <input
                class="mdc-text-field__input"
                type="text"
                aria-labelledby="my-label-id"
              />
              <span class="mdc-line-ripple"></span>
            </label>
            <div class="mdc-text-field-helper-line">
              <div
                class="mdc-text-field-helper-text mdc-text-field-helper-text--persistent"
              >
                Assistive text
              </div>
            </div>
          </div>
        </section>

        <!-- Tabs -->
        <section class="component-section tabs-section">
          <div class="section-header">
            <a
              href="https://material.io/design/components/tabs.html"
              class="mdc-typography--button"
              target="_blank"
            >
              Tabs
              <i class="material-icons">open_in_new</i>
            </a>
          </div>
          <div class="component-wrapper">
            <div class="mdc-tab-bar" role="tablist">
              <div class="mdc-tab-scroller">
                <div class="mdc-tab-scroller__scroll-area">
                  <div class="mdc-tab-scroller__scroll-content">
                    <button
                      class="mdc-tab mdc-tab--active"
                      role="tab"
                      aria-selected="true"
                      tabindex="0"
                    >
                      <span class="mdc-tab__content">
                        <span class="mdc-tab__text-label">Button</span>
                      </span>
                      <span class="mdc-tab-indicator mdc-tab-indicator--active">
                        <span
                          class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"
                        ></span>
                      </span>
                      <span class="mdc-tab__ripple"></span>
                    </button>
                    <button
                      class="mdc-tab"
                      role="tab"
                      aria-selected="true"
                      tabindex="0"
                    >
                      <span class="mdc-tab__content">
                        <span class="mdc-tab__text-label">Button</span>
                      </span>
                      <span class="mdc-tab-indicator">
                        <span
                          class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"
                        ></span>
                      </span>
                      <span class="mdc-tab__ripple"></span>
                    </button>
                    <button
                      class="mdc-tab"
                      role="tab"
                      aria-selected="true"
                      tabindex="0"
                    >
                      <span class="mdc-tab__content">
                        <span class="mdc-tab__text-label">Button</span>
                      </span>
                      <span class="mdc-tab-indicator">
                        <span
                          class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"
                        ></span>
                      </span>
                      <span class="mdc-tab__ripple"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Slider -->
        <section class="component-section">
          <div class="section-header">
            <a
              href="https://material.io/design/components/sliders.html"
              class="mdc-typography--button"
              target="_blank"
            >
              Slider
              <i class="material-icons">open_in_new</i>
            </a>
          </div>
          <div class="component-wrapper">
            <div class="mdc-slider">
              <input
                class="mdc-slider__input"
                type="range"
                min="0"
                max="100"
                value="50"
                name="volume"
                aria-label="Continuous slider demo"
              />
              <div class="mdc-slider__track">
                <div class="mdc-slider__track--inactive"></div>
                <div class="mdc-slider__track--active">
                  <div class="mdc-slider__track--active_fill"></div>
                </div>
              </div>
              <div class="mdc-slider__thumb">
                <div class="mdc-slider__thumb-knob"></div>
              </div>
            </div>
          </div>
        </section>

        <!-- Snackbar -->
        <section class="component-section snackbar-section">
          <div class="section-header">
            <a
              href="https://material.io/design/components/snackbars.html"
              class="mdc-typography--button"
              target="_blank"
            >
              Snackbar
              <i class="material-icons">open_in_new</i>
            </a>
          </div>
          <div class="component-wrapper">
            <div class="mdc-snackbar mdc-snackbar--open">
              <div class="mdc-snackbar__surface">
                <div
                  class="mdc-snackbar__label"
                  role="status"
                  aria-live="polite"
                >
                  Marked as favorite.
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Dialog -->
        <section class="component-section dialog-component-section">
          <div class="section-header">
            <a
              href="https://material.io/design/components/dialogs.html"
              class="mdc-typography--button"
              target="_blank"
            >
              Dialog
              <i class="material-icons">open_in_new</i>
            </a>
          </div>
          <div class="component-wrapper dialog-component-wrapper">
            <div
              class="mdc-dialog mdc-dialog--open"
              role="alertdialog"
              aria-modal="true"
              aria-labelledby="my-dialog-title"
              aria-describedby="my-dialog-content"
            >
              <div class="mdc-dialog__container">
                <div class="mdc-dialog__surface">
                  <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
                  <h2 class="mdc-dialog__title" id="my-dialog-title">
                    Headline 6
                  </h2>
                  <div class="mdc-dialog__content" id="my-dialog-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                  <footer class="mdc-dialog__actions">
                    <button
                      type="button"
                      class="mdc-button mdc-dialog__button"
                      data-mdc-dialog-action="no"
                    >
                      <span class="mdc-button__ripple"></span>
                      <span class="mdc-button__label">Button</span>
                    </button>
                    <button
                      type="button"
                      class="mdc-button mdc-dialog__button"
                      data-mdc-dialog-action="yes"
                    >
                      <span class="mdc-button__ripple"></span>
                      <span class="mdc-button__label">Button</span>
                    </button>
                  </footer>
                </div>
              </div>
              <!-- Note scrim element has been removed for this stickersheet -->
              <!-- <div class="mdc-dialog__scrim"></div> -->
            </div>
          </div>
        </section>

        <!-- Image List -->
        <section class="component-section image-list-section">
          <div class="section-header">
            <a
              href="https://material.io/design/components/image-lists.html"
              class="mdc-typography--button"
              target="_blank"
            >
              Image List
              <i class="material-icons">open_in_new</i>
            </a>
          </div>
          <div class="component-wrapper">
            <ul class="mdc-image-list mdc-image-list--masonry">
              <li class="mdc-image-list__item">
                <img
                  class="mdc-image-list__image"
                  src="https://cdn.glitch.com/9c389208-b279-4e96-bcbc-e5f8712d8706%2Fplaceholder-portrait.png?1553629847850"
                />
              </li>
              <li class="mdc-image-list__item">
                <img
                  class="mdc-image-list__image"
                  src="https://cdn.glitch.com/9c389208-b279-4e96-bcbc-e5f8712d8706%2Fplaceholder-landscape-short.png?1553629848209"
                />
              </li>
              <li class="mdc-image-list__item">
                <img
                  class="mdc-image-list__image"
                  src="https://cdn.glitch.com/9c389208-b279-4e96-bcbc-e5f8712d8706%2Fplaceholder-landscape-med.png?1553629847913"
                />
              </li>
              <li class="mdc-image-list__item">
                <img
                  class="mdc-image-list__image"
                  src="https://cdn.glitch.com/9c389208-b279-4e96-bcbc-e5f8712d8706%2Fplaceholder-landscape-short.png?1553629848209"
                />
              </li>
              <li class="mdc-image-list__item">
                <img
                  class="mdc-image-list__image"
                  src="https://cdn.glitch.com/9c389208-b279-4e96-bcbc-e5f8712d8706%2Fplaceholder-portrait.png?1553629847850"
                />
              </li>
              <li class="mdc-image-list__item">
                <img
                  class="mdc-image-list__image"
                  src="https://cdn.glitch.com/9c389208-b279-4e96-bcbc-e5f8712d8706%2Fplaceholder-landscape-short.png?1553629848209"
                />
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  </div>
</div>
`;const Gr={title:"Patterns/Kitchen Sink",parameters:{layout:"fullscreen"}},Jt=({})=>(document.addEventListener("DOMContentLoaded",()=>{const a=document;Array.from(a.querySelectorAll(".mdc-button")).forEach(x=>new U(x));const t=a.querySelector("#icon-toggle-button"),n=new gi(t);n.unbounded=!0,Array.from(a.querySelectorAll(".mdc-card__primary-action")).forEach(x=>new U(x)),Array.from(a.querySelectorAll(".mdc-chip-set, .mdc-evolution-chip-set")).forEach(x=>new Jn(x)),Array.from(a.querySelectorAll(".mdc-text-field")).forEach(x=>{let Rt=new Mr(x);x.classList.contains("text-field-with-input")&&(Rt.value="Input text")}),Array.from(a.querySelectorAll(".mdc-text-field-helper-text")).forEach(x=>new xn(x));const c=a.querySelector(".mdc-linear-progress"),l=new Ei(c);l.progress=.5,Array.from(a.querySelectorAll(".mdc-fab")).forEach(x=>new U(x)),Array.from(a.querySelectorAll(".mdc-checkbox")).forEach(x=>{let Rt=new Xn(x);x.classList.contains("indeterminate-checkbox")&&(Rt.indeterminate=!0)}),Array.from(a.querySelectorAll(".mdc-radio")).forEach(x=>new Mi(x)),Array.from(a.querySelectorAll(".mdc-switch")).forEach(x=>new ur(x)),Array.from(a.querySelectorAll(".mdc-top-app-bar")).forEach(x=>new kr(x)),Array.from(a.querySelectorAll(".mdc-list")).forEach(x=>{let Rt=new An(x);Rt.listElements.map(Nn=>new U(Nn)),Rt.singleSelection=!0}),Array.from(a.querySelectorAll(".mdc-select")).forEach(x=>new Vi(x));const V=a.querySelector(".mdc-snackbar");new ir(V);const T=a.querySelector(".mdc-dialog");new oi(T);const K=a.querySelector(".mdc-slider"),N=new Wi(K);N.value=5;const L=a.querySelector(".mdc-menu"),Et=new yn(L);Et.open=!0,window.top===window&&L.addEventListener("MDCMenuSurface:opened",()=>document.querySelector(".mdc-button").focus());const Ft=a.querySelector(".mdc-tab-bar");new _r(Ft);const kt=document.querySelector(".mdc-data-table");new Bn(kt),document.querySelector(".theme-builder-drawer")},{once:!0}),Pr);var sn,cn,ln;Jt.parameters={...Jt.parameters,docs:{...(sn=Jt.parameters)==null?void 0:sn.docs,source:{originalSource:`({}) => {
  document.addEventListener('DOMContentLoaded', () => {
    //
    // Instantiate all components in the main content
    //

    const mainEl = document;

    // Button
    const buttonEls = Array.from(mainEl.querySelectorAll('.mdc-button'));
    buttonEls.forEach(el => new MDCRipple(el));

    // Icon button toggle
    const iconToggleEl = mainEl.querySelector('#icon-toggle-button');
    const iconToggle = new MDCIconButtonToggle(iconToggleEl);
    iconToggle.unbounded = true;

    // Card
    const cardPrimaryActionEls = Array.from(mainEl.querySelectorAll('.mdc-card__primary-action'));
    cardPrimaryActionEls.forEach(el => new MDCRipple(el));

    // Chips
    const chipSetEls = Array.from(mainEl.querySelectorAll('.mdc-chip-set, .mdc-evolution-chip-set'));
    chipSetEls.forEach(el => new MDCChipSet(el));

    // Text field
    const textFieldEls = Array.from(mainEl.querySelectorAll('.mdc-text-field'));
    textFieldEls.forEach(el => {
      let textField = new MDCTextField(el);
      if (el.classList.contains('text-field-with-input')) {
        textField.value = 'Input text';
      }
    });
    const helperTextEls = Array.from(mainEl.querySelectorAll('.mdc-text-field-helper-text'));
    helperTextEls.forEach(el => new MDCTextFieldHelperText(el));

    // Linear progress
    const linearProgressEl = mainEl.querySelector('.mdc-linear-progress');
    const linearProgress = new MDCLinearProgress(linearProgressEl);
    linearProgress.progress = 0.5;

    // FAB
    const fabEls = Array.from(mainEl.querySelectorAll('.mdc-fab'));
    fabEls.forEach(el => new MDCRipple(el));

    // Checkbox
    const checkboxEls = Array.from(mainEl.querySelectorAll('.mdc-checkbox'));
    checkboxEls.forEach(el => {
      let checkbox = new MDCCheckbox(el);
      if (el.classList.contains('indeterminate-checkbox')) {
        checkbox.indeterminate = true;
      }
    });

    // Radio
    const radioEls = Array.from(mainEl.querySelectorAll('.mdc-radio'));
    radioEls.forEach(el => new MDCRadio(el));

    // Switch
    const switchEls = Array.from(mainEl.querySelectorAll('.mdc-switch'));
    switchEls.forEach(el => new MDCSwitch(el));

    // Top app bar
    const topAppBarEls = Array.from(mainEl.querySelectorAll('.mdc-top-app-bar'));
    topAppBarEls.forEach(el => new MDCTopAppBar(el));

    // List
    const listEls = Array.from(mainEl.querySelectorAll('.mdc-list'));
    listEls.forEach(el => {
      let list = new MDCList(el);
      list.listElements.map(listItemEl => new MDCRipple(listItemEl));
      list.singleSelection = true;
    });

    // Select
    const selectEls = Array.from(mainEl.querySelectorAll('.mdc-select'));
    selectEls.forEach(el => new MDCSelect(el));

    // Snackbar
    const snackbarEl = mainEl.querySelector('.mdc-snackbar');
    new MDCSnackbar(snackbarEl);

    // Dialog
    const dialogEl = mainEl.querySelector('.mdc-dialog');
    new MDCDialog(dialogEl);

    // Slider
    const sliderEl = mainEl.querySelector('.mdc-slider');
    const slider = new MDCSlider(sliderEl);
    slider.value = 5;

    // Menu
    const menuEl = mainEl.querySelector('.mdc-menu');
    const menu = new MDCMenu(menuEl);
    menu.open = true;
    // Override MDCMenuSurfaceFoundation so the menu never closes
    //menu.menuSurface_.foundation_.close = () => {};
    // Focus first component when menu is done opening if not in an iframe
    if (window.top === window) {
      menuEl.addEventListener('MDCMenuSurface:opened', () => document.querySelector('.mdc-button').focus());
    }

    // Tabs
    const tabBarEl = mainEl.querySelector('.mdc-tab-bar');
    new MDCTabBar(tabBarEl);

    // Data Table
    const dataTableEl = document.querySelector('.mdc-data-table');
    new MDCDataTable(dataTableEl);

    //
    // Theme Builder drawer contents
    //

    const themeBuilderDrawerEl = document.querySelector('.theme-builder-drawer');

    // Theme name
    //themeBuilderDrawerEl.querySelector('.theme-name').textContent = themeName;

    //
    // Handle responsive layout
    //

    // const themeBuilderDrawer = null;
    // const initModalDrawer = () => {
    //   themeBuilderDrawerEl.classList.add("mdc-drawer--modal");
    //   const themeBuilderDrawer = new MDCDrawer(themeBuilderDrawerEl);
    //   themeBuilderDrawer.open = false;
    //   themeBuilderAppBar.setScrollTarget(mainEl);
    //   themeBuilderAppBar.listen('MDCTopAppBar:nav', () => {
    //     themeBuilderDrawer.open = !themeBuilderDrawer.open;
    //   });
    // }
    // const destroyModalDrawer = () => {
    //   themeBuilderDrawerEl.classList.remove("mdc-drawer--modal");
    //   if (themeBuilderDrawer) {
    //     themeBuilderDrawer.destroy();
    //   }
    // }

    // // Toggle between permanent drawer and modal drawer at 1310px
    // const layoutForScreenSize = () => {
    //   if (window.matchMedia("(max-width: 1310px)").matches) {
    //     initModalDrawer();
    //     mainEl.classList.add('mdc-top-app-bar--fixed-adjust');
    //   } else {
    //     destroyModalDrawer();
    //     mainEl.classList.remove('mdc-top-app-bar--fixed-adjust');
    //   }
    // }

    // window.addEventListener('resize', layoutForScreenSize);
    // layoutForScreenSize();
  }, {
    once: true
  });
  return kitchenSinkContent;
}`,...(ln=(cn=Jt.parameters)==null?void 0:cn.docs)==null?void 0:ln.source}}};const Wr=["Basic"];export{Jt as Basic,Wr as __namedExportsOrder,Gr as default};
//# sourceMappingURL=kitchen-sink.stories-8be91ffa.js.map
